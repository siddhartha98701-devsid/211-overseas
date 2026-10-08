import type { SVGProps } from 'react';

interface PlaneProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'width' | 'height'> {
  /** Rendered width and height in px. */
  size?: number;
  /** Any CSS color; defaults to the current text color. */
  color?: string;
  className?: string;
}

/**
 * 2D plane model matched directly to the official 211 OVERSEAS logo.
 * Exact silhouette geometry from the brand identity (as in the logo and icon.svg):
 * swept wings, tailplanes, and aerodynamic fuselage centered at (32, 32).
 */
export function Plane({ size = 48, color = 'currentColor', className, ...rest }: PlaneProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill={color}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {/* swept wings */}
      <path d="M40 29.4 L23 6 H16.5 L27 29.4 Z" />
      <path d="M40 34.6 L23 58 H16.5 L27 34.6 Z" />
      {/* tailplanes */}
      <path d="M13 29.4 L6 19 H2.5 L7 29.4 Z" />
      <path d="M13 34.6 L6 45 H2.5 L7 34.6 Z" />
      {/* fuselage */}
      <path d="M62 32 C58 30.1 50 29.2 40 29.2 H10 C6 29.2 3.8 30.4 3 32 C3.8 33.6 6 34.8 10 34.8 H40 C50 34.8 58 33.9 62 32 Z" />
    </svg>
  );
}
