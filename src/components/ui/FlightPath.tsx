'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { AirlinerTopDown } from './AirlinerTopDown';

const SAMPLES = 60;
const TRAIL_SEGMENTS = 28;
const TRAIL_STEP = 0.0105; // path fraction covered by one trail segment (about 29% of the route in total)

/** Position on the flight path in viewport percentages (0–100). Enters and leaves off-screen. */
function pointAt(t: number) {
  return {
    x: -14 + 128 * t,
    y: 14 + 72 * t + 5 * Math.sin(t * Math.PI * 2),
  };
}

const f = (n: number) => n.toFixed(2);

/** One piece of the contrail: thinner and more transparent the further it is behind the plane. */
function TrailSegment({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const d = useTransform(progress, (v) => {
    const a = pointAt(Math.max(0, v - (index + 1) * TRAIL_STEP));
    const b = pointAt(Math.max(0, v - index * TRAIL_STEP));
    return `M${f(a.x)} ${f(a.y)} L${f(b.x)} ${f(b.y)}`;
  });
  const k = index / (TRAIL_SEGMENTS - 1); // 0 at the plane, 1 at the tail
  return (
    <motion.path
      d={d}
      stroke="#E59217"
      strokeOpacity={0.85 * (1 - k) ** 1.4}
      strokeWidth={5.5 * (1 - k) + 0.8}
      strokeLinecap="butt"
      vectorEffect="non-scaling-stroke"
    />
  );
}

/**
 * Background flight path: a realistic airliner with a tapered mustard contrail that flies across the page
 * as you scroll. It sits behind all content but above section backgrounds (see .bgl in globals.css), so
 * it stays visible over dark sections and is only hidden by real content. It starts once the visitor has
 * scrolled past the globe section (from the top on pages without a globe); before that it waits
 * off-screen. Only transforms animate.
 */
export function FlightPath() {
  const reduce = usePrefersReducedMotion();
  const pathname = usePathname();
  const [viewport, setViewport] = useState({ w: 1440, h: 900 });

  // 0 until the globe has been scrolled past, then 0..1 over the rest of the page
  const raw = useMotionValue(0);
  const progress = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.5 });

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

  const { xs, ys, angles, ts } = useMemo(() => {
    const ts: number[] = [];
    const xs: string[] = [];
    const ys: string[] = [];
    const angles: number[] = [];
    for (let i = 0; i <= SAMPLES; i++) {
      const t = i / SAMPLES;
      const p = pointAt(t);
      const q = pointAt(Math.min(1, t + 0.004));
      const r = pointAt(Math.max(0, t - 0.004));
      // Angle in screen pixels so the nose follows the visible curve
      angles.push((Math.atan2((q.y - r.y) * viewport.h, (q.x - r.x) * viewport.w) * 180) / Math.PI);
      ts.push(t);
      xs.push(`${p.x}vw`);
      ys.push(`${p.y}vh`);
    }
    return { xs, ys, angles, ts };
  }, [viewport]);

  const x = useTransform(progress, ts, xs);
  const y = useTransform(progress, ts, ys);
  const rotate = useTransform(progress, ts, angles);

  const size = viewport.w < 640 ? 118 : viewport.w < 1024 ? 160 : 210;

  if (reduce) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden"
      style={{ contain: 'strict' }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
        {Array.from({ length: TRAIL_SEGMENTS }, (_, i) => (
          <TrailSegment key={i} index={i} progress={progress} />
        ))}
      </svg>

      {/* The shadow lives on this non-rotating wrapper so it keeps one direction while the plane turns */}
      <motion.div
        className="absolute left-0 top-0 will-change-transform"
        style={{ x, y, filter: 'drop-shadow(10px 16px 9px rgba(0,0,0,0.26))' }}
      >
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
    </div>
  );
}
