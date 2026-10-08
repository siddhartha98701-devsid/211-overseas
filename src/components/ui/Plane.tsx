import type { SVGProps } from 'react';

interface PlaneProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'width' | 'height'> {
  /** Rendered width and height in px. */
  size?: number;
  /** Any CSS color; defaults to the current text color. */
  color?: string;
  className?: string;
}

/**
 * Clean, realistic side-view commercial airliner profile silhouette.
 * Nose points right (+x), horizontal fuselage centered at y=32 so rotating
 * along the flight arc path flies the aircraft smoothly along the trajectory.
 */
export function Plane({ size = 48, color = 'currentColor', className, ...rest }: PlaneProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <g fill={color}>
        {/* Vertical Stabilizer (Tail Fin) */}
        <path d="M 6 30.5 L 13.5 12 C 14.2 10.3 15.8 9.8 17.5 10 L 20 10.3 L 16.5 30.5 Z" opacity="0.95" />

        {/* Horizontal Tailplane (side view profile) */}
        <path d="M 3.5 29 L 9.5 24.5 L 14 25 L 9.5 29.5 Z" opacity="0.8" />

        {/* Fuselage - Aerodynamic Airliner Body */}
        <path d="M 5 31 C 5 28.5 7.5 27 12 26.5 L 46 26.5 C 52 26.5 57 28 60 30.5 C 61.5 31.8 62 33 60.5 34 C 58.5 35.5 53 36.5 45 36.5 L 14 36.5 C 8 36.5 5 33.5 5 31 Z" />

        {/* Swept Main Wing (side profile projection) */}
        <path d="M 33 32.5 L 24 45.5 C 23.5 46.2 24.5 47 26 46.5 L 42 34.5 Z" opacity="0.9" />

        {/* Jet Turbofan Engine & Pylon */}
        <path d="M 36 34.5 L 38 37.5 L 47 37.5 C 48.5 37.5 49 38.5 48.5 39.5 C 47.5 41 45.5 41.5 42 41.5 L 34 41.5 C 33 41.5 32 40.5 32.5 39 C 33 37.5 34.5 36 35.5 34.5 Z" />
      </g>

      {/* Cockpit Windshield (sleek forward glazing) */}
      <path
        d="M 55 28.2 C 57 29 58.5 30.2 59 31.2 L 56 31.2 C 54.5 30.2 53.5 29.2 55 28.2 Z"
        fill="#1A1A1A"
        opacity="0.8"
      />

      {/* Cabin Windows (passenger window line) */}
      <g fill="#1A1A1A" opacity="0.65">
        <rect x="21" y="29.6" width="1.6" height="2" rx="0.8" />
        <rect x="24.2" y="29.6" width="1.6" height="2" rx="0.8" />
        <rect x="27.4" y="29.6" width="1.6" height="2" rx="0.8" />
        <rect x="30.6" y="29.6" width="1.6" height="2" rx="0.8" />
        <rect x="33.8" y="29.6" width="1.6" height="2" rx="0.8" />
        <rect x="37" y="29.6" width="1.6" height="2" rx="0.8" />
        <rect x="40.2" y="29.6" width="1.6" height="2" rx="0.8" />
        <rect x="43.4" y="29.6" width="1.6" height="2" rx="0.8" />
        <rect x="46.6" y="29.6" width="1.6" height="2" rx="0.8" />
        <rect x="49.8" y="29.6" width="1.6" height="2" rx="0.8" />
      </g>
    </svg>
  );
}
