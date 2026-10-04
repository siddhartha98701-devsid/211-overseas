'use client';

import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

// Destinations and pins data
export interface GlobePin {
  name: string;
  country: string;
  lat: number;
  lon: number;
  href: string;
  isOrigin?: boolean;
  isPrimary?: boolean;
}

export const GLOBE_PINS: GlobePin[] = [
  { name: 'Ahmedabad', country: 'India (HQ)', lat: 23.0225, lon: 72.5714, href: '/contact', isOrigin: true },
  { name: 'Seoul', country: 'South Korea', lat: 37.5665, lon: 126.9780, href: '/study-in-south-korea', isPrimary: true },
  { name: 'Berlin', country: 'Germany', lat: 52.5200, lon: 13.4050, href: '/work-in-germany', isPrimary: true },
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lon: 55.2708, href: '/work-in-uae', isPrimary: true },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503, href: '/other-destinations' },
  { name: 'Taipei', country: 'Taiwan', lat: 25.0330, lon: 121.5654, href: '/other-destinations' },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lon: 103.8198, href: '/other-destinations' },
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lon: -0.1278, href: '/other-destinations' },
  { name: 'New York', country: 'United States', lat: 40.7128, lon: -74.0060, href: '/other-destinations' },
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lon: -79.3832, href: '/other-destinations' },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093, href: '/other-destinations' },
];

const GLOBE_RADIUS = 2.2;
const ACCENT_COLOR = '#1D3FFF';

export function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Simplified fast landmass check to cluster dots onto continents
function isPointOnLand(lat: number, lon: number): boolean {
  // Normalize lon to [-180, 180]
  let l = lon;
  while (l > 180) l -= 360;
  while (l < -180) l += 360;

  // Antarctica filter (minimal dots at extreme south)
  if (lat < -60) return lat > -85 && (Math.sin(lat * 5 + l) > 0.3);

  // North America
  if (lat >= 15 && lat <= 72 && l >= -168 && l <= -52) {
    if (lat < 30 && l < -105 && l > -120) return true; // Mexico / Baja
    if (lat >= 25 && l >= -125 && l <= -70) return true; // USA
    if (lat >= 48 && l >= -140 && l <= -55) return true; // Canada
    if (lat >= 60 && l >= -45 && l <= -20) return true; // Greenland
    return true;
  }
  // Central America
  if (lat >= 7 && lat < 15 && l >= -92 && l <= -77) return true;

  // South America
  if (lat >= -56 && lat <= 13 && l >= -82 && l <= -34) {
    if (l > -40 && lat < -25) return false;
    return true;
  }

  // Europe
  if (lat >= 36 && lat <= 71 && l >= -11 && l <= 45) {
    if (lat > 55 && l < 5 && l > -10) return true; // UK & Ireland
    if (lat >= 55 && l >= 5 && l <= 30) return true; // Scandinavia
    return true;
  }

  // Africa
  if (lat >= -35 && lat <= 37 && l >= -18 && l <= 52) {
    if (lat > 15 && l < 30) return true; // North Africa
    if (lat <= 15 && lat >= -35 && l >= 8 && l <= 42) return true; // Central / Southern Africa
    if (lat < 15 && lat > -5 && l < 10 && l > -18) return true; // West Africa
    if (lat >= -26 && lat <= -12 && l >= 43 && l <= 51) return true; // Madagascar
    return true;
  }

  // Asia
  if (lat >= 5 && lat <= 78 && l >= 45 && l <= 170) {
    if (lat <= 30 && l >= 40 && l <= 60) return true; // Middle East / Arabian Peninsula
    if (lat >= 8 && lat <= 35 && l >= 68 && l <= 92) return true; // Indian Subcontinent
    if (lat >= 30 && lat <= 45 && l >= 124 && l <= 131) return true; // Korea
    if (lat >= 30 && lat <= 46 && l >= 129 && l <= 146) return true; // Japan
    if (lat >= 21 && lat <= 26 && l >= 119 && l <= 123) return true; // Taiwan
    if (lat >= 10 && lat <= 55 && l >= 75 && l <= 135) return true; // Central / East Asia / China
    if (lat >= -11 && lat <= 20 && l >= 95 && l <= 142) return true; // SE Asia / Indonesia / Philippines
    if (lat > 50 && l >= 50 && l <= 170) return true; // Russia / Siberia
    return true;
  }

  // Australia & New Zealand
  if (lat >= -44 && lat <= -10 && l >= 112 && l <= 154) return true;
  if (lat >= -47 && lat <= -34 && l >= 165 && l <= 179) return true; // New Zealand

  return false;
}

// Dotted landmass component
function DottedGlobe({ count = 22000 }: { count?: number }) {
  const { positions, colors, sizes } = useMemo(() => {
    const posList: number[] = [];
    const colList: number[] = [];
    const sizeList: number[] = [];

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const inkColor = new THREE.Color('#0B0B0F');
    const faintColor = new THREE.Color('#D2D2D8');

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
          const factor = 0.25 + Math.random() * 0.15;
          colList.push(inkColor.r * factor, inkColor.g * factor, inkColor.b * factor);
          sizeList.push(1.6 + Math.random() * 0.9);
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
        size={0.024}
        vertexColors
        transparent
        opacity={0.7}
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
        color="#1D3FFF"
        transparent
        opacity={0.03}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

// Marker Pin Component
function PinMarker({
  pin,
  isHovered,
  onHover,
  onUnhover,
}: {
  pin: GlobePin;
  isHovered: boolean;
  onHover: () => void;
  onUnhover: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const pos = useMemo(() => latLonToVector3(pin.lat, pin.lon, GLOBE_RADIUS * 1.015), [pin.lat, pin.lon]);

  const isOrigin = pin.isOrigin;
  const isPrimary = pin.isPrimary;
  const color = isOrigin ? ACCENT_COLOR : isPrimary ? '#0B0B0F' : '#6E6E7A';
  const scale = isOrigin ? 1.25 : isPrimary ? 1.0 : 0.65;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current && isOrigin) {
      const pulse = 1 + 0.18 * Math.sin(t * 3);
      meshRef.current.scale.setScalar(pulse * scale);
    }
    if (ringRef.current && isOrigin) {
      const ringPulse = 1 + 0.35 * Math.sin(t * 2);
      ringRef.current.scale.setScalar(ringPulse);
    }
  });

  return (
    <group position={pos}>
      {/* Pin dot */}
      <mesh
        ref={meshRef}
        scale={scale}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover();
        }}
        onPointerOut={onUnhover}
      >
        <sphereGeometry args={[0.036, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* Origin pulsating ring */}
      {isOrigin && (
        <mesh ref={ringRef} lookAt={new THREE.Vector3(0, 0, 0)}>
          <ringGeometry args={[0.05, 0.07, 32]} />
          <meshBasicMaterial color={ACCENT_COLOR} transparent opacity={0.35} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Primary destination ring */}
      {isPrimary && (
        <mesh lookAt={new THREE.Vector3(0, 0, 0)}>
          <ringGeometry args={[0.045, 0.06, 24]} />
          <meshBasicMaterial color="#0B0B0F" transparent opacity={0.25} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Tooltip on hover */}
      {isHovered && (
        <Html
          position={[0, 0.1, 0]}
          center
          distanceFactor={7}
          className="pointer-events-auto select-none"
        >
          <a
            href={pin.href}
            className="glass-strong rounded-2xl px-3.5 py-2 block whitespace-nowrap shadow-[0_8px_24px_rgba(11,11,15,0.12)] border border-white/90 text-left transition-transform hover:scale-105"
            style={{ textDecoration: 'none' }}
          >
            <span className="block text-[10px] uppercase tracking-wider font-semibold text-[#6E6E7A]">
              {pin.isOrigin ? 'Origin (Headquarters)' : 'Destination Pathway'}
            </span>
            <span className="font-semibold text-xs text-[#0B0B0F] block">
              {pin.name}, {pin.country}
            </span>
            <span className="text-[10px] text-[#1D3FFF] font-medium block mt-0.5">
              {pin.isOrigin ? 'Connect with us →' : 'Explore pathway →'}
            </span>
          </a>
        </Html>
      )}
    </group>
  );
}

// Flight Arc component from Ahmedabad to Destination
function FlightArc({
  from,
  to,
  reducedMotion,
}: {
  from: { lat: number; lon: number };
  to: { lat: number; lon: number };
  reducedMotion: boolean;
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
        <lineBasicMaterial color="#1D3FFF" transparent opacity={0.25} linewidth={1} />
      </line>

      {/* Traveling particle */}
      {!reducedMotion && (
        <mesh ref={particleRef}>
          <sphereGeometry args={[0.024, 8, 8]} />
          <meshBasicMaterial color="#1D3FFF" transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  );
}

// Scene with mouse/touch drag controls and inertia
function GlobeScene({
  reducedMotion = false,
  highlightCountry,
}: {
  reducedMotion?: boolean;
  highlightCountry?: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const isDragging = useRef(false);
  const prevPointer = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const autoRotatePauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAutoRotatePaused = useRef(false);
  const [hoveredPinIdx, setHoveredPinIdx] = useState<number | null>(null);
  const { gl } = useThree();

  const handlePointerDown = useCallback((e: PointerEvent) => {
    isDragging.current = true;
    prevPointer.current = { x: e.clientX, y: e.clientY };
    velocity.current = { x: 0, y: 0 };
    isAutoRotatePaused.current = true;
    if (autoRotatePauseTimer.current) clearTimeout(autoRotatePauseTimer.current);
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDragging.current || !groupRef.current) return;
    const deltaX = e.clientX - prevPointer.current.x;
    const deltaY = e.clientY - prevPointer.current.y;

    velocity.current = {
      x: deltaX * 0.005,
      y: deltaY * 0.003,
    };

    groupRef.current.rotation.y += deltaX * 0.005;
    groupRef.current.rotation.x = Math.max(-0.6, Math.min(0.6, groupRef.current.rotation.x + deltaY * 0.003));

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
    return () => {
      el.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      if (autoRotatePauseTimer.current) clearTimeout(autoRotatePauseTimer.current);
    };
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Auto-rotation when not dragging and motion is permitted
    if (!reducedMotion && !isAutoRotatePaused.current && !isDragging.current) {
      groupRef.current.rotation.y += 0.04 * delta;
    }

    // Inertia decay
    if (!isDragging.current) {
      velocity.current.x *= 0.94;
      velocity.current.y *= 0.94;
      if (Math.abs(velocity.current.x) > 0.0001) {
        groupRef.current.rotation.y += velocity.current.x;
      }
      if (Math.abs(velocity.current.y) > 0.0001) {
        groupRef.current.rotation.x = Math.max(-0.6, Math.min(0.6, groupRef.current.rotation.x + velocity.current.y));
      }
    }
  });

  const originPin = GLOBE_PINS[0]; // Ahmedabad
  const primaryPins = GLOBE_PINS.filter((p) => p.isPrimary);

  return (
    <group ref={groupRef} rotation={[0.2, 0.5, 0]}>
      <DottedGlobe />
      <AtmosphereRim />

      {/* Pins */}
      {GLOBE_PINS.map((pin, idx) => {
        const isTarget = highlightCountry && pin.country.toLowerCase().includes(highlightCountry.toLowerCase());
        return (
          <PinMarker
            key={pin.name}
            pin={pin}
            isHovered={hoveredPinIdx === idx || !!isTarget}
            onHover={() => setHoveredPinIdx(idx)}
            onUnhover={() => setHoveredPinIdx(null)}
          />
        );
      })}

      {/* Primary pathway arcs */}
      {primaryPins.map((dest) => (
        <FlightArc
          key={dest.name}
          from={{ lat: originPin.lat, lon: originPin.lon }}
          to={{ lat: dest.lat, lon: dest.lon }}
          reducedMotion={reducedMotion}
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
        <div className="w-64 h-64 md:w-84 md:h-84 rounded-full border border-dashed border-[#1D3FFF]/20 flex items-center justify-center">
          <div className="text-center p-4">
            <span className="inline-block w-3 h-3 rounded-full bg-[#1D3FFF] mb-2 animate-ping" />
            <p className="text-xs font-semibold text-[#0B0B0F] uppercase tracking-wider">Ahmedabad HQ</p>
            <p className="text-[11px] text-[#6E6E7A] mt-1">Connecting to Global Destinations</p>
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
}: {
  className?: string;
  highlightCountry?: string;
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
    <div className={`relative cursor-grab active:cursor-grabbing select-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        dpr={[1, 2]} // Cap devicePixelRatio at 2 as requested
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
      >
        <GlobeScene reducedMotion={reducedMotion} highlightCountry={highlightCountry} />
      </Canvas>
    </div>
  );
}
