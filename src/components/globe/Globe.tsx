'use client';

import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export { GLOBE_PINS, type GlobePin } from './pins';
import { GLOBE_PINS, type GlobePin } from './pins';
import { isLand } from './landMask';

const GLOBE_RADIUS = 2.2;
const ACCENT_COLOR = '#2F4A3C';

export function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function isPointOnLand(lat: number, lon: number): boolean {
  return isLand(lat, lon);
}

// Deterministic 0..1 value so dot shading is stable across renders
function pseudoRandom(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

// Dotted landmass component
function DottedGlobe({ count = 28000 }: { count?: number }) {
  const { positions, colors, sizes } = useMemo(() => {
    const posList: number[] = [];
    const colList: number[] = [];
    const sizeList: number[] = [];

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const inkColor = new THREE.Color('#15140F');
    const faintColor = new THREE.Color('#D6D0C4');

    for (let i = 0; i < count; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);

      // Convert phi/theta to lat/lon
      const lat = 90 - (phi * 180) / Math.PI;
      const lon = ((theta * 180) / Math.PI) - 180;

      const onLand = isPointOnLand(lat, lon);

      // Keep mostly land dots, plus very sparse ocean dots to outline the sphere
      if (onLand || (i % 7 === 0)) {
        const r = GLOBE_RADIUS;
        const x = -r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.cos(phi);
        const z = r * Math.sin(phi) * Math.sin(theta);

        posList.push(x, y, z);

        if (onLand) {
          // Near black dots on land with slight variation
          const factor = 0.9 + pseudoRandom(i) * 0.6;
          colList.push(inkColor.r * factor, inkColor.g * factor, inkColor.b * factor);
          sizeList.push(1.6 + pseudoRandom(i + 7) * 0.9);
        } else {
          // Very faint ocean dots
          colList.push(faintColor.r, faintColor.g, faintColor.b);
          sizeList.push(0.8);
        }
      }
    }

    return {
      positions: new Float32Array(posList),
      colors: new Float32Array(colList),
      sizes: new Float32Array(sizeList),
    };
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.036}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Faint outer atmosphere rim
function AtmosphereRim() {
  return (
    <mesh>
      <sphereGeometry args={[GLOBE_RADIUS * 1.04, 48, 48]} />
      <meshBasicMaterial
        color="#2F4A3C"
        transparent
        opacity={0.04}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

// Marker Pin Component
function PinMarker({
  pin,
  isHovered,
  isSelected,
  onHover,
  onUnhover,
  onSelect,
}: {
  pin: GlobePin;
  isHovered: boolean;
  isSelected: boolean;
  onHover: () => void;
  onUnhover: () => void;
  onSelect?: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const pos = useMemo(() => latLonToVector3(pin.lat, pin.lon, GLOBE_RADIUS * 1.015), [pin.lat, pin.lon]);

  const isOrigin = pin.isOrigin;
  const isPrimary = pin.isPrimary;
  const color = isSelected || isOrigin ? ACCENT_COLOR : isPrimary ? '#15140F' : '#6C675E';
  const scale = isSelected ? 1.5 : isOrigin ? 1.25 : isPrimary ? 1.0 : 0.65;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current && (isOrigin || isSelected)) {
      const pulse = 1 + 0.18 * Math.sin(t * 3);
      meshRef.current.scale.setScalar(pulse * scale);
    }
    if (ringRef.current && (isOrigin || isSelected)) {
      const ringPulse = 1 + 0.35 * Math.sin(t * 2);
      ringRef.current.scale.setScalar(ringPulse);
    }
  });

  return (
    <group position={pos}>
      {/* Pin dot */}
      <mesh ref={meshRef} scale={scale}>
        <sphereGeometry args={[0.036, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* Larger invisible hit area so pins are easy to hover and tap */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover();
        }}
        onPointerOut={onUnhover}
        onClick={(e) => {
          e.stopPropagation();
          onSelect?.();
        }}
      >
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* Pulsating ring for origin and selected pin */}
      {(isOrigin || isSelected) && (
        <mesh ref={ringRef} lookAt={new THREE.Vector3(0, 0, 0)}>
          <ringGeometry args={[0.05, 0.07, 32]} />
          <meshBasicMaterial color={ACCENT_COLOR} transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Primary destination ring */}
      {isPrimary && !isSelected && (
        <mesh lookAt={new THREE.Vector3(0, 0, 0)}>
          <ringGeometry args={[0.045, 0.06, 24]} />
          <meshBasicMaterial color="#15140F" transparent opacity={0.25} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Label on hover or selection. The <Html> stays mounted (unmounting it throws a
          removeChild error in drei) and only its content toggles. */}
      <Html position={[0, 0.2, 0]} center distanceFactor={4.2} className="pointer-events-none select-none">
        {(isHovered || isSelected) && (
          <span className="block whitespace-nowrap bg-[#F6F3EE] border border-[#DDD7CC] px-3 py-1.5 text-left shadow-[0_8px_24px_rgba(21,20,15,0.10)]">
            <span className="block text-[10px] uppercase tracking-wider font-medium text-[#6C675E]">
              {pin.isOrigin ? 'Headquarters' : pin.country}
            </span>
            <span className="block text-xs font-medium text-[#15140F]">{pin.name}</span>
          </span>
        )}
      </Html>
    </group>
  );
}

// Flight Arc component from Ahmedabad to Destination
function FlightArc({
  from,
  to,
  reducedMotion,
  highlight = false,
}: {
  from: { lat: number; lon: number };
  to: { lat: number; lon: number };
  reducedMotion: boolean;
  highlight?: boolean;
}) {
  const particleRef = useRef<THREE.Mesh>(null);

  const curve = useMemo(() => {
    const start = latLonToVector3(from.lat, from.lon, GLOBE_RADIUS);
    const end = latLonToVector3(to.lat, to.lon, GLOBE_RADIUS);
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const distance = start.distanceTo(end);
    // Raise arc proportional to distance
    mid.normalize().multiplyScalar(GLOBE_RADIUS + distance * 0.32);
    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [from, to]);

  const points = useMemo(() => curve.getPoints(50), [curve]);

  useFrame(({ clock }) => {
    if (particleRef.current && !reducedMotion) {
      const elapsed = clock.getElapsedTime();
      const t = (elapsed * 0.22) % 1;
      const pos = curve.getPoint(t);
      particleRef.current.position.copy(pos);
      // Fade in/out at ends
      const opacity = Math.sin(t * Math.PI) * 0.9;
      (particleRef.current.material as THREE.MeshBasicMaterial).opacity = opacity;
    }
  });

  const linePositions = useMemo(() => {
    const arr = new Float32Array(points.length * 3);
    points.forEach((p, idx) => {
      arr[idx * 3] = p.x;
      arr[idx * 3 + 1] = p.y;
      arr[idx * 3 + 2] = p.z;
    });
    return arr;
  }, [points]);

  return (
    <group>
      {/* Arc Line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#2F4A3C" transparent opacity={highlight ? 0.7 : 0.25} linewidth={1} />
      </line>

      {/* Traveling particle */}
      {!reducedMotion && (
        <mesh ref={particleRef}>
          <sphereGeometry args={[0.024, 8, 8]} />
          <meshBasicMaterial color="#2F4A3C" transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  );
}

/** Group rotation that brings a lat/lon to the centre of the view, facing the camera. */
function rotationForPin(pin: GlobePin) {
  const v = latLonToVector3(pin.lat, pin.lon, 1);
  const y = Math.atan2(-v.x, v.z);
  const zAfterYaw = -v.x * Math.sin(y) + v.z * Math.cos(y);
  const x = Math.max(-0.8, Math.min(0.8, Math.atan2(v.y, zAfterYaw)));
  return { x, y };
}

const TWO_PI = Math.PI * 2;
function wrapAngle(a: number) {
  return a - TWO_PI * Math.round(a / TWO_PI);
}

// Scene with mouse/touch drag controls, inertia and focus-on-selection
function GlobeScene({
  reducedMotion = false,
  highlightCountry,
  selectedName,
  onSelect,
}: {
  reducedMotion?: boolean;
  highlightCountry?: string;
  selectedName?: string | null;
  onSelect?: (name: string) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const isDragging = useRef(false);
  const dragDistance = useRef(0);
  const prevPointer = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const focusTarget = useRef<{ x: number; y: number } | null>(null);
  const autoRotatePauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAutoRotatePaused = useRef(false);
  const [hoveredPinIdx, setHoveredPinIdx] = useState<number | null>(null);
  const { gl } = useThree();

  // Rotate to the selected destination whenever the selection changes
  useEffect(() => {
    const pin = GLOBE_PINS.find((p) => p.name === selectedName);
    focusTarget.current = pin ? rotationForPin(pin) : null;
    velocity.current = { x: 0, y: 0 };
  }, [selectedName]);

  const handlePointerDown = useCallback((e: PointerEvent) => {
    isDragging.current = true;
    dragDistance.current = 0;
    prevPointer.current = { x: e.clientX, y: e.clientY };
    velocity.current = { x: 0, y: 0 };
    focusTarget.current = null; // user takes control
    isAutoRotatePaused.current = true;
    if (autoRotatePauseTimer.current) clearTimeout(autoRotatePauseTimer.current);
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDragging.current || !groupRef.current) return;
    const deltaX = e.clientX - prevPointer.current.x;
    const deltaY = e.clientY - prevPointer.current.y;
    dragDistance.current += Math.abs(deltaX) + Math.abs(deltaY);

    velocity.current = {
      x: deltaX * 0.005,
      y: deltaY * 0.003,
    };

    groupRef.current.rotation.y += deltaX * 0.005;
    groupRef.current.rotation.x = Math.max(-0.8, Math.min(0.8, groupRef.current.rotation.x + deltaY * 0.003));

    prevPointer.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
    // Resume auto-rotation after 2 seconds
    autoRotatePauseTimer.current = setTimeout(() => {
      isAutoRotatePaused.current = false;
    }, 2000);
  }, []);

  useEffect(() => {
    const el = gl.domElement;
    el.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      el.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      if (autoRotatePauseTimer.current) clearTimeout(autoRotatePauseTimer.current);
    };
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    // Ease toward the selected destination
    const target = focusTarget.current;
    if (target && !isDragging.current) {
      const k = reducedMotion ? 1 : Math.min(1, delta * 4);
      group.rotation.y += wrapAngle(target.y - group.rotation.y) * k;
      group.rotation.x += (target.x - group.rotation.x) * k;
      return;
    }

    // Auto-rotation only while nothing is selected
    if (!reducedMotion && !selectedName && !isAutoRotatePaused.current && !isDragging.current) {
      group.rotation.y += 0.04 * delta;
    }

    // Inertia decay
    if (!isDragging.current) {
      velocity.current.x *= 0.94;
      velocity.current.y *= 0.94;
      if (Math.abs(velocity.current.x) > 0.0001) {
        group.rotation.y += velocity.current.x;
      }
      if (Math.abs(velocity.current.y) > 0.0001) {
        group.rotation.x = Math.max(-0.8, Math.min(0.8, group.rotation.x + velocity.current.y));
      }
    }
  });

  const originPin = GLOBE_PINS[0]; // Ahmedabad
  const selectedPin = GLOBE_PINS.find((p) => p.name === selectedName);
  const arcPins = GLOBE_PINS.filter((p) => !p.isOrigin && (p.isPrimary || p.name === selectedName));

  return (
    <group ref={groupRef} rotation={[0.2, 0.5, 0]}>
      <DottedGlobe />
      <AtmosphereRim />

      {/* Pins */}
      {GLOBE_PINS.map((pin, idx) => {
        const isTarget = !!highlightCountry && pin.country.toLowerCase().includes(highlightCountry.toLowerCase());
        return (
          <PinMarker
            key={pin.name}
            pin={pin}
            isHovered={hoveredPinIdx === idx || isTarget}
            isSelected={selectedPin?.name === pin.name}
            onHover={() => setHoveredPinIdx(idx)}
            onUnhover={() => setHoveredPinIdx(null)}
            onSelect={
              onSelect
                ? () => {
                    if (dragDistance.current < 6) onSelect(pin.name);
                  }
                : undefined
            }
          />
        );
      })}

      {/* Pathway arcs from Ahmedabad: primary destinations plus the selected one */}
      {arcPins.map((dest) => (
        <FlightArc
          key={dest.name}
          from={{ lat: originPin.lat, lon: originPin.lon }}
          to={{ lat: dest.lat, lon: dest.lon }}
          reducedMotion={reducedMotion}
          highlight={dest.name === selectedName}
        />
      ))}
    </group>
  );
}

// Fallback when WebGL is unavailable
export function GlobeStaticFallback({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-gray-200/80 bg-gradient-to-b from-gray-50 to-white shadow-inner flex items-center justify-center">
        <div className="w-64 h-64 md:w-84 md:h-84 rounded-full border border-dashed border-[#2F4A3C]/20 flex items-center justify-center">
          <div className="text-center p-4">
            <span className="inline-block w-3 h-3 rounded-full bg-[#2F4A3C] mb-2 animate-ping" />
            <p className="text-xs font-semibold text-[#15140F] uppercase tracking-wider">Ahmedabad HQ</p>
            <p className="text-[11px] text-[#6C675E] mt-1">Connecting to Global Destinations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exported Globe Component
export default function Globe({
  className = '',
  highlightCountry,
  selectedName,
  onSelect,
}: {
  className?: string;
  highlightCountry?: string;
  selectedName?: string | null;
  onSelect?: (name: string) => void;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!hasWebGL) {
    return <GlobeStaticFallback className={className} />;
  }

  return (
    <div className={`relative cursor-grab active:cursor-grabbing select-none touch-pan-y ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        dpr={[1, 2]} // Cap devicePixelRatio at 2 as requested
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
      >
        <GlobeScene
          reducedMotion={reducedMotion}
          highlightCountry={highlightCountry}
          selectedName={selectedName}
          onSelect={onSelect}
        />
      </Canvas>
    </div>
  );
}
