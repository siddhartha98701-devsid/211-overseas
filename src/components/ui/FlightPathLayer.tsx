'use client';

import dynamic from 'next/dynamic';
import { useSyncExternalStore } from 'react';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { FlightPath } from './FlightPath';

// three.js is only downloaded in the browser, after the page has loaded
const FlightPath3D = dynamic(() => import('./FlightPath3D'), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}
const subscribe = () => () => {};

/**
 * Scroll-driven 3D plane. Skipped entirely for visitors who prefer reduced motion;
 * falls back to the lightweight 2D dashed-path plane when WebGL is unavailable.
 */
export function FlightPathLayer() {
  const reduce = usePrefersReducedMotion();
  const webgl = useSyncExternalStore(subscribe, hasWebGL, () => true);

  if (reduce) return null;
  return webgl ? <FlightPath3D /> : <FlightPath />;
}
