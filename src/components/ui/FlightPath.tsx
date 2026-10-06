'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { AirlinerTopDown } from './AirlinerTopDown';

const SAMPLES = 60;

/** Position on the flight path in viewport percentages (0–100). */
function pointAt(t: number) {
  return {
    x: -10 + 120 * t,
    y: 12 + 74 * t + 6 * Math.sin(t * Math.PI * 2.2),
  };
}

/**
 * Background flight path: a dashed mustard trail and a realistic airliner that fly across the page as
 * you scroll. It stays behind all content (z-0) and only starts once the visitor has scrolled past the
 * globe section (on pages without a globe it starts at the top). Only transform and opacity animate.
 */
export function FlightPath() {
  const reduce = usePrefersReducedMotion();
  const pathname = usePathname();
  const [viewport, setViewport] = useState({ w: 1440, h: 900 });

  // 0 until the globe has been scrolled past, then 0..1 over the rest of the page
  const raw = useMotionValue(0);
  const progress = useSpring(raw, { stiffness: 110, damping: 26, mass: 0.4 });

  useEffect(() => {
    const update = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
      const globe = document.getElementById('globe');
      const start = globe ? globe.getBoundingClientRect().bottom + window.scrollY - window.innerHeight * 0.55 : 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      raw.set(max > start ? Math.min(1, Math.max(0, (window.scrollY - start) / (max - start))) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    // Page height changes as images load and accordions open
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      ro.disconnect();
    };
  }, [raw, pathname]);

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
      // Angle in screen pixels so the nose follows the visible curve
      angles.push((Math.atan2((q.y - r.y) * viewport.h, (q.x - r.x) * viewport.w) * 180) / Math.PI);
      ts.push(t);
      xs.push(`${p.x}vw`);
      ys.push(`${p.y}vh`);
      d += `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)} ${p.y.toFixed(2)} `;
    }
    return { pathD: d, xs, ys, angles, ts };
  }, [viewport]);

  const x = useTransform(progress, ts, xs);
  const y = useTransform(progress, ts, ys);
  const rotate = useTransform(progress, ts, angles);
  // Invisible until the globe is behind us, fades out at the very end
  const opacity = useTransform(progress, [0, 0.02, 0.97, 1], [0, 1, 1, 0]);
  const trailLength = useTransform(progress, (v) => v);

  const size = viewport.w < 640 ? 118 : viewport.w < 1024 ? 160 : 210;

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity, contain: 'strict' }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
        <defs>
          {/* The dashed route is revealed only as far as the plane has flown */}
          <mask id="trail-reveal" maskUnits="userSpaceOnUse" x="-20" y="-20" width="140" height="140">
            <motion.path
              d={pathD}
              stroke="#fff"
              strokeWidth={60}
              strokeLinecap="butt"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: trailLength }}
            />
          </mask>
        </defs>
        <path
          d={pathD}
          stroke="#E59217"
          strokeOpacity={0.7}
          strokeWidth={2.2}
          strokeDasharray="1.5 11"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          mask="url(#trail-reveal)"
        />
      </svg>

      <motion.div className="absolute left-0 top-0 will-change-transform" style={{ x, y }}>
        <motion.div
          style={{
            width: size,
            marginLeft: -size / 2,
            marginTop: -(size * 140) / 240 / 2,
            rotate,
          }}
        >
          <AirlinerTopDown size={size} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
