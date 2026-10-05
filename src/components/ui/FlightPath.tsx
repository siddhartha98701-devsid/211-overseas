'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Plane } from './Plane';

interface FlightPathProps {
  color?: string;
}

const SAMPLES = 60;

/** Position on the flight path in viewport percentages (0–100). */
function pointAt(t: number) {
  return {
    x: -6 + 112 * t,
    y: 14 + 68 * t + 7 * Math.sin(t * Math.PI * 2.5),
  };
}

/**
 * Fixed, non-interactive background layer: a faint dashed flight path with a
 * plane that travels along it as the page scrolls. Only transform/opacity are
 * animated (compositor-only), so there is no layout work during scroll.
 */
export function FlightPath({ color = '#2F4A3C' }: FlightPathProps) {
  const reduceMotion = useReducedMotion();
  const [viewport, setViewport] = useState({ w: 1440, h: 900 });

  useEffect(() => {
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const { pathD, xs, ys, angles, ts } = useMemo(() => {
    const ts: number[] = [];
    const xs: string[] = [];
    const ys: string[] = [];
    const angles: number[] = [];
    let d = '';
    for (let i = 0; i <= SAMPLES; i++) {
      const t = i / SAMPLES;
      const p = pointAt(t);
      const q = pointAt(Math.min(1, t + 0.001));
      const r = pointAt(Math.max(0, t - 0.001));
      // Angle in screen pixels so the nose follows the visible curve.
      const angle =
        (Math.atan2((q.y - r.y) * viewport.h, (q.x - r.x) * viewport.w) * 180) / Math.PI;
      ts.push(t);
      xs.push(`${p.x}vw`);
      ys.push(`${p.y}vh`);
      angles.push(angle);
      d += `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)} ${p.y.toFixed(2)} `;
    }
    return { pathD: d, xs, ys, angles, ts };
  }, [viewport]);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  const x = useTransform(progress, ts, xs);
  const y = useTransform(progress, ts, ys);
  const rotate = useTransform(progress, ts, angles);
  const opacity = useTransform(progress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

  const size = viewport.w < 640 ? 34 : 52;
  const staticPoint = pointAt(0.3);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ contain: 'strict' }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={pathD}
          stroke={color}
          strokeOpacity={0.22}
          strokeWidth={1.25}
          strokeDasharray="2 9"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <motion.div
        className="absolute left-0 top-0 will-change-transform"
        style={
          reduceMotion
            ? {
                x: `${staticPoint.x}vw`,
                y: `${staticPoint.y}vh`,
                opacity: 0.5,
              }
            : { x, y, opacity }
        }
      >
        <motion.div
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            rotate: reduceMotion ? 18 : rotate,
            opacity: 0.55,
          }}
        >
          <Plane size={size} color={color} />
        </motion.div>
      </motion.div>
    </div>
  );
}
