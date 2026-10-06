'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

const MUSTARD = '#E59217';
const CAM_Z = 12;
const FOV = 32;

/**
 * Waypoints of the flight in "screen-relative" units:
 *   u: -1..1 across the viewport width, v: +1 (top) .. -1 (bottom), z: depth (+ toward the camera).
 * v only ever decreases, so the plane keeps descending as you scroll down. It hugs the left and right
 * edges close to the camera (big) and crosses the middle far away (small and faded), so it stays out
 * of the way of text.
 */
const WAYPOINTS: [number, number, number][] = [
  [-0.86, 0.82, -3],
  [-0.82, 0.62, 0.5],
  [-0.1, 0.44, -9],
  [0.8, 0.26, 1.2],
  [0.9, 0.06, 1.8],
  [0.25, -0.12, -9],
  [-0.82, -0.3, 1.2],
  [-0.9, -0.5, 2],
  [-0.2, -0.66, -9],
  [0.86, -0.82, 0.5],
];

// Shared by the single plane instance; created once in the browser (this module is client-only).
const BODY_MAT = new THREE.MeshStandardMaterial({ color: MUSTARD, roughness: 0.42, metalness: 0.25, transparent: true });
const DARK_MAT = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.5, metalness: 0.3, transparent: true });
const TMP = {
  p: new THREE.Vector3(),
  a: new THREE.Vector3(),
  b: new THREE.Vector3(),
  d1: new THREE.Vector3(),
  d2: new THREE.Vector3(),
  c: new THREE.Vector3(),
  proj: new THREE.Vector3(),
};

const TEXTY = 'h1,h2,h3,h4,p,li,a,button,label,input,select,textarea,summary';

/**
 * Fraction (0..1) of a few sample points across the plane that sit over text or controls.
 * The canvas ignores pointer events, so elementFromPoint sees the page content underneath it.
 */
function textOverlap(cx: number, cy: number, r: number) {
  const pts: [number, number][] = [
    [0, 0],
    [-0.7, 0],
    [0.7, 0],
    [0, -0.5],
    [0, 0.5],
  ];
  let hits = 0;
  for (const [dx, dy] of pts) {
    const x = cx + dx * r;
    const y = cy + dy * r;
    if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) continue;
    const el = document.elementFromPoint(x, y);
    if (el && el.closest(TEXTY)) hits += 1;
  }
  return hits / pts.length;
}

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Procedural airliner: nose along +z, wings along x, up is +y. */
function PlaneModel({ bodyMat, darkMat }: { bodyMat: THREE.Material; darkMat: THREE.Material }) {
  const wingGeo = useMemo(() => {
    // Swept wing, drawn in (x, y) and laid flat: shape y -> world -z, so larger y sweeps backward.
    const s = new THREE.Shape();
    s.moveTo(0, -0.18);
    s.lineTo(1.05, 0.34);
    s.lineTo(1.05, 0.52);
    s.lineTo(0, 0.24);
    s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.035, bevelEnabled: false });
    g.rotateX(-Math.PI / 2);
    g.translate(0, 0.0, 0);
    return g;
  }, []);

  const finGeo = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0.46, 0.05);
    s.lineTo(0.9, 0.05);
    s.lineTo(0.9, 0.55);
    s.lineTo(0.74, 0.55);
    s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.035, bevelEnabled: false });
    g.rotateY(Math.PI / 2);
    g.translate(-0.0175, 0, 0);
    return g;
  }, []);

  return (
    <group>
      {/* fuselage */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={bodyMat} scale={[1, 1.9, 1]}>
        <capsuleGeometry args={[0.1, 0.9, 8, 20]} />
      </mesh>
      {/* tapered tail cone */}
      <mesh position={[0, 0.02, -0.98]} rotation={[-Math.PI / 2, 0, 0]} material={bodyMat}>
        <coneGeometry args={[0.1, 0.55, 20]} />
      </mesh>
      {/* cockpit window band */}
      <mesh position={[0, 0.055, 0.92]} rotation={[0.35, 0, 0]} material={darkMat} scale={[1, 0.35, 0.8]}>
        <sphereGeometry args={[0.1, 14, 10]} />
      </mesh>
      {/* wings */}
      <mesh geometry={wingGeo} material={bodyMat} position={[0.08, -0.03, 0.12]} />
      <mesh geometry={wingGeo} material={bodyMat} position={[-0.08, -0.03, 0.12]} scale={[-1, 1, 1]} />
      {/* tailplanes */}
      <mesh geometry={wingGeo} material={bodyMat} position={[0.05, 0.0, -0.72]} scale={[0.34, 0.34, 0.34]} />
      <mesh geometry={wingGeo} material={bodyMat} position={[-0.05, 0.0, -0.72]} scale={[-0.34, 0.34, 0.34]} />
      {/* fin */}
      <mesh geometry={finGeo} material={darkMat} position={[0, 0.07, -0.55]} />
      {/* engines */}
      {[0.42, -0.42].map((x) => (
        <mesh key={x} position={[x, -0.12, 0.2]} rotation={[Math.PI / 2, 0, 0]} material={darkMat}>
          <cylinderGeometry args={[0.065, 0.065, 0.34, 16]} />
        </mesh>
      ))}
    </group>
  );
}

function PlaneRig({ compact }: { compact: boolean }) {
  const { size, invalidate, camera } = useThree();
  const rig = useRef<THREE.Group>(null);
  const fade = useRef(1);
  const ghost = useRef(1);
  // The trail only starts once the plane has been placed, otherwise it would draw a streak from the origin
  const [placed, setPlaced] = useState(false);
  const placedRef = useRef(false);
  // Bumped when the plane jumps (anchor links, back-to-top) so the trail restarts instead of drawing a chord
  const [trailKey, setTrailKey] = useState(0);
  const lastScreen = useRef({ x: 0, y: 0, resetAt: 0 });
  const progress = useRef({ target: 0, current: 0, bank: 0 });

  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(WAYPOINTS.map(([u, v, z]) => new THREE.Vector3(u, v, z)), false, 'catmullrom', 0.5),
    [],
  );

  // Page scroll progress (0..1) -> target; wake the demand-driven render loop
  useEffect(() => {
    const read = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current.target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      invalidate();
    };
    read();
    window.addEventListener('scroll', read, { passive: true });
    window.addEventListener('resize', read);
    return () => {
      window.removeEventListener('scroll', read);
      window.removeEventListener('resize', read);
    };
  }, [invalidate]);

  useFrame((state, dt) => {
    const g = rig.current;
    if (!g) return;
    const pr = progress.current;
    pr.current += (pr.target - pr.current) * (1 - Math.exp(-dt * 5));
    const aspect = size.width / size.height;
    if (!placedRef.current) {
      placedRef.current = true;
      pr.current = pr.target; // start exactly on the scroll position, no fly-in from the origin
      setPlaced(true);
    }

    // Map a path parameter to world space so "u" always means the same fraction of the screen width
    const toWorld = (t: number, out: THREE.Vector3) => {
      curve.getPointAt(Math.min(1, Math.max(0, t)), TMP.c);
      const halfH = Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * (CAM_Z - TMP.c.z);
      return out.set(TMP.c.x * halfH * aspect * 0.9, TMP.c.y * halfH * 0.86, TMP.c.z);
    };

    const t = pr.current;
    toWorld(t, TMP.p);
    g.position.copy(TMP.p);

    // Heading from the path tangent (vertical part damped so it glides rather than dives)
    toWorld(t + 0.012, TMP.a).sub(TMP.p);
    TMP.a.y *= 0.5;
    toWorld(t + 0.04, TMP.b).sub(TMP.p);
    TMP.b.y *= 0.5;
    TMP.d1.copy(TMP.a).normalize();
    TMP.d2.copy(TMP.b).normalize();
    g.lookAt(TMP.p.x + TMP.d1.x, TMP.p.y + TMP.d1.y, TMP.p.z + TMP.d1.z);

    // Bank into turns
    const targetBank = THREE.MathUtils.clamp((TMP.d2.x - TMP.d1.x) * -9, -0.75, 0.75);
    pr.bank += (targetBank - pr.bank) * Math.min(1, dt * 4);
    g.rotateZ(pr.bank);

    // Bigger on large screens; fade out whenever the plane crosses the middle of the screen
    curve.getPointAt(Math.min(1, Math.max(0, t)), TMP.c);
    g.scale.setScalar((compact ? 0.7 : (size.width / 1280) ** 0.35) * 0.825 * 1.5);
    // Ghost out while over text or buttons, solid over backgrounds and empty space
    const worldPerPx = (2 * Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * (CAM_Z - TMP.p.z)) / size.height;
    TMP.proj.copy(g.position).project(camera);
    const sx = (TMP.proj.x * 0.5 + 0.5) * size.width;
    const sy = (-TMP.proj.y * 0.5 + 0.5) * size.height;
    const radiusPx = (2.2 * g.scale.x * 0.5) / worldPerPx;
    const ls = lastScreen.current;
    const jumped = Math.hypot(sx - ls.x, sy - ls.y) > 160;
    ls.x = sx;
    ls.y = sy;
    if (jumped && state.clock.elapsedTime - ls.resetAt > 0.3) {
      ls.resetAt = state.clock.elapsedTime;
      setTrailKey((k) => k + 1);
    }
    const overlap = g.visible ? textOverlap(sx, sy, radiusPx) : 0;
    const ghostTarget = 1 - 0.88 * overlap;
    ghost.current += (ghostTarget - ghost.current) * Math.min(1, dt * 9);

    const f = smoothstep(0.3, 0.7, Math.abs(TMP.c.x)) * (compact ? 0.85 : 1) * ghost.current;
    fade.current = f;
    BODY_MAT.opacity = f;
    DARK_MAT.opacity = f;
    g.visible = smoothstep(0.3, 0.7, Math.abs(TMP.c.x)) > 0.02;

    // Keep rendering until the plane has settled on the scroll position
    if (
      Math.abs(pr.target - pr.current) > 0.0004 ||
      Math.abs(targetBank - pr.bank) > 0.01 ||
      Math.abs(ghostTarget - ghost.current) > 0.01
    ) {
      state.invalidate();
    }
  });

  return (
    <group ref={rig}>
      <PlaneModel bodyMat={BODY_MAT} darkMat={DARK_MAT} />
      {/* The trail thins out with the plane's fade, so it never streaks across text */}
      {placed && (
        <Trail key={trailKey} width={compact ? 1.1 : 1.7} length={4} color={MUSTARD} decay={2} attenuation={(w) => w * w * fade.current * fade.current}>
          <mesh position={[0, 0, -1.05]}>
            <sphereGeometry args={[0.01, 4, 4]} />
            <meshBasicMaterial visible={false} />
          </mesh>
        </Trail>
      )}
    </group>
  );
}

export default function FlightPath3D() {
  const compact = typeof window !== 'undefined' && window.innerWidth < 640;
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30" style={{ contain: 'strict' }}>
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, CAM_Z], fov: FOV, near: 0.1, far: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        style={{ pointerEvents: 'none' }}
        eventSource={undefined}
      >
        <ambientLight intensity={1.05} />
        <directionalLight position={[4, 6, 8]} intensity={2.2} />
        <directionalLight position={[-6, -2, 4]} intensity={0.8} color="#ffd9a0" />
        <PlaneRig compact={compact} />
      </Canvas>
    </div>
  );
}
