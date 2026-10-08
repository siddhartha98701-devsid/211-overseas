import type { SVGProps } from 'react';

export type PlaneVariant = 'logo' | 'jet' | 'paper' | 'line';

interface FlightPlaneProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  /** Rendered size in px (square viewBox 64x64, centered at 32,32, nose pointing right). */
  size?: number;
  variant?: PlaneVariant;
}

/**
 * 2D plane drawing matched directly to the official 211 OVERSEAS logo.
 * Exact silhouette geometry from the brand identity.
 */
export function FlightPlane({ size = 120, className, ...rest }: FlightPlaneProps) {
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
      <g fill="#2A2A2A">
        {/* swept wings */}
        <path d="M40 29.4 L23 6 H16.5 L27 29.4 Z" fill="#2A2A2A" />
        <path d="M40 34.6 L23 58 H16.5 L27 34.6 Z" fill="#2A2A2A" />
        {/* tailplanes */}
        <path d="M13 29.4 L6 19 H2.5 L7 29.4 Z" fill="#2A2A2A" />
        <path d="M13 34.6 L6 45 H2.5 L7 34.6 Z" fill="#2A2A2A" />
        {/* fuselage */}
        <path d="M62 32 C58 30.1 50 29.2 40 29.2 H10 C6 29.2 3.8 30.4 3 32 C3.8 33.6 6 34.8 10 34.8 H40 C50 34.8 58 33.9 62 32 Z" fill="#2A2A2A" />
      </g>
    </svg>
  );
}
