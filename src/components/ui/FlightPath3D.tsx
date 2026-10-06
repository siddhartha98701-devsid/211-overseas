'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/* ------------------------------------------------------------------ materials (module-level) */
// Mustard body, mid-grey wings: both read on white and on black sections.
const BODY_MAT = new THREE.MeshStandardMaterial({ color: MUSTARD, roughness: 0.3, metalness: 0.35 });
const WING_MAT = new THREE.MeshStandardMaterial({ color: '#a9a9a9', roughness: 0.32, metalness: 0.45, side: THREE.DoubleSide });
const DARK_MAT = new THREE.MeshStandardMaterial({ color: '#5c5c5c', roughness: 0.4, metalness: 0.5 });
const PLANE_MATS = [BODY_MAT, WING_MAT, DARK_MAT];

/* ------------------------------------------------------------------ the dotted route */
const DOT_COUNT = 72;
const DOTS_BEHIND = 0.24; // how much of the route trails behind the plane (fraction of the path)
const DOTS_AHEAD = 0.08;
const DOT_POS = new Float32Array(DOT_COUNT * 3);
const DOT_COL = new Float32Array(DOT_COUNT * 4);
const DOT_GEO = new THREE.BufferGeometry();
DOT_GEO.setAttribute('position', new THREE.BufferAttribute(DOT_POS, 3));
DOT_GEO.setAttribute('color', new THREE.BufferAttribute(DOT_COL, 4));
const DOT_MUSTARD = new THREE.Color(MUSTARD);
const DOT_GREY = new THREE.Color('#8a8a8a');
const DOT_MAT = (() => {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const x = c.getContext('2d')!;
  const gr = x.createRadialGradient(32, 32, 0, 32, 32, 30);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.7, 'rgba(255,255,255,1)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr;
  x.fillRect(0, 0, 64, 64);
  return new THREE.PointsMaterial({
    size: 0.13,
    map: new THREE.CanvasTexture(c),
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: true,
  });
})();

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

/* ------------------------------------------------------------------ the plane model */
function extrude(points: [number, number][], depth: number, bevel: number) {
  const s = new THREE.Shape();
  points.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
  s.closePath();
  return new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2 });
}

/** Glossy airliner, nose along +z, wings along x, up is +y (length about 2.6 units, span about 2.9). */
function buildAirliner() {
  const g = new THREE.Group();

  // Smooth fuselage: lathe profile with a rounded nose and a tapering tail
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i <= 60; i++) {
    const t = i / 60;
    const tail = 0.035 + 0.115 * THREE.MathUtils.smoothstep(t, 0, 0.38);
    const nose = t < 0.8 ? 1 : Math.sqrt(Math.max(0, 1 - ((t - 0.8) / 0.2) ** 2));
    pts.push(new THREE.Vector2(Math.max(0.002, tail * nose), -1.3 + 2.6 * t));
  }
  const fus = new THREE.Mesh(new THREE.LatheGeometry(pts, 48), BODY_MAT);
  fus.rotation.x = Math.PI / 2;
  g.add(fus);

  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.1, 20, 12), DARK_MAT);
  cockpit.scale.set(0.85, 0.5, 1.5);
  cockpit.position.set(0, 0.06, 0.88);
  g.add(cockpit);

  // Tapered, swept wings with a little dihedral
  const wing = extrude([[0, -0.3], [1.45, 0.44], [1.45, 0.62], [0, 0.42]], 0.05, 0.014);
  wing.rotateX(-Math.PI / 2);
  // Tailplanes
  const stab = extrude([[0, -0.15], [0.62, 0.2], [0.62, 0.3], [0, 0.22]], 0.035, 0.01);
  stab.rotateX(-Math.PI / 2);
  for (const sx of [1, -1]) {
    const w = new THREE.Mesh(wing, WING_MAT);
    w.position.set(sx * 0.1, -0.06, 0.12);
    w.scale.x = sx;
    w.rotation.z = sx * 0.07;
    g.add(w);
    const s = new THREE.Mesh(stab, WING_MAT);
    s.position.set(sx * 0.05, 0.01, -1.05);
    s.scale.x = sx;
    g.add(s);
  }

  // Tail fin
  const fin = extrude([[0.7, 0], [1.3, 0], [1.3, 0.62], [1.1, 0.62]], 0.04, 0.008);
  fin.rotateY(Math.PI / 2);
  fin.translate(-0.02, 0, 0);
  const finM = new THREE.Mesh(fin, BODY_MAT);
  finM.position.set(0, 0.1, 0);
  g.add(finM);

  return g;
}
const PLANE_MODEL = buildAirliner();

/* ------------------------------------------------------------------ scene */
function PlaneRig({ compact }: { compact: boolean }) {
  const { size, invalidate, camera } = useThree();
  const rig = useRef<THREE.Group>(null);
  const ghost = useRef(1);
  const placedRef = useRef(false);
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
    if (!placedRef.current) {
      placedRef.current = true;
      pr.current = pr.target; // start exactly on the scroll position, no fly-in from the origin
    }
    pr.current += (pr.target - pr.current) * (1 - Math.exp(-dt * 5));
    const aspect = size.width / size.height;

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

    // Size: smaller than the first version, scaled for the screen
    g.scale.setScalar((compact ? 0.7 : (size.width / 1280) ** 0.35) * 0.825 * 1.2);

    // Ghost out while over text or controls, solid over backgrounds and empty space
    const worldPerPx = (2 * Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * (CAM_Z - TMP.p.z)) / size.height;
    TMP.proj.copy(g.position).project(camera);
    const sx = (TMP.proj.x * 0.5 + 0.5) * size.width;
    const sy = (-TMP.proj.y * 0.5 + 0.5) * size.height;
    const radiusPx = (2.9 * g.scale.x * 0.5) / worldPerPx;
    curve.getPointAt(Math.min(1, Math.max(0, t)), TMP.c);
    const edge = smoothstep(0.3, 0.7, Math.abs(TMP.c.x));
    g.visible = edge > 0.02;
    const overlap = g.visible ? textOverlap(sx, sy, radiusPx) : 0;
    const ghostTarget = 1 - 0.88 * overlap;
    ghost.current += (ghostTarget - ghost.current) * Math.min(1, dt * 9);

    const f = edge * (compact ? 0.85 : 1) * ghost.current;
    for (const m of PLANE_MATS) {
      const translucent = f < 0.995;
      if (m.transparent !== translucent) {
        m.transparent = translucent;
        m.needsUpdate = true;
      }
      m.opacity = f;
    }

    // Dotted route: mustard dots trail behind the plane, a few faint grey ones lead ahead.
    // Every dot is computed from the path itself (not from past frames), so it can never jitter,
    // and each dot fades near the middle of the screen so it stays off the text.
    for (let i = 0; i < DOT_COUNT; i++) {
      const ts = t - DOTS_BEHIND + (i / (DOT_COUNT - 1)) * (DOTS_BEHIND + DOTS_AHEAD);
      const inRange = ts >= 0 && ts <= 1 && Math.abs(ts - t) > 0.01;
      toWorld(ts, TMP.a);
      DOT_POS[i * 3] = TMP.a.x;
      DOT_POS[i * 3 + 1] = TMP.a.y;
      DOT_POS[i * 3 + 2] = TMP.a.z;
      const behind = ts < t;
      const along = behind ? 1 - (t - ts) / DOTS_BEHIND : 1 - (ts - t) / DOTS_AHEAD;
      const base = behind ? 0.95 * along ** 1.3 : 0.4 * along;
      const lateral = smoothstep(0.3, 0.7, Math.abs(TMP.c.x));
      const col = behind ? DOT_MUSTARD : DOT_GREY;
      DOT_COL[i * 4] = col.r;
      DOT_COL[i * 4 + 1] = col.g;
      DOT_COL[i * 4 + 2] = col.b;
      DOT_COL[i * 4 + 3] = inRange ? base * lateral * (compact ? 0.85 : 1) : 0;
    }
    DOT_GEO.attributes.position.needsUpdate = true;
    DOT_GEO.attributes.color.needsUpdate = true;
    DOT_MAT.size = compact ? 0.1 : 0.13;
    DOT_MAT.opacity = 0.35 + 0.65 * ghost.current;

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
    <>
      <group ref={rig}>
        <primitive object={PLANE_MODEL} />
      </group>
      <points geometry={DOT_GEO} material={DOT_MAT} frustumCulled={false} />
    </>
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
        <ambientLight intensity={1.0} />
        <directionalLight position={[4, 6, 8]} intensity={2.3} />
        <directionalLight position={[-6, -2, 4]} intensity={0.9} color="#ffd9a0" />
        <PlaneRig compact={compact} />
      </Canvas>
    </div>
  );
}
