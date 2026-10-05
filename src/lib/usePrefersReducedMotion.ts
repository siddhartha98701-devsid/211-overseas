import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

/**
 * Hydration-safe "reduce motion" flag. The server snapshot is always `false`, so the
 * first client render matches the server HTML and React then re-renders if the user
 * actually prefers reduced motion (framer's useReducedMotion can mismatch on hydration).
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
