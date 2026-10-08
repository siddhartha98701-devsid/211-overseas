import type { SVGProps } from 'react';

export type PlaneVariant = 'jet' | 'paper' | 'line';

interface FlightPlaneProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  /** Rendered width in px (all drawings are 240x140, nose pointing right). */
  size?: number;
  variant?: PlaneVariant;
}

/**
 * Clean, flat plane drawings for the scroll flight path, in the site palette (cream, charcoal, mustard).
 *  - jet:   modern airliner silhouette, charcoal body with a mustard tail fin (default)
 *  - paper: folded paper plane, light and playful
 *  - line:  single-weight outline plane, the most subtle
 * The parent adds the drop shadow so it keeps a fixed direction while the plane turns.
 */
export function FlightPlane({ size = 160, variant = 'jet', className, ...rest }: FlightPlaneProps) {
  return (
    <svg viewBox="0 0 240 140" width={size} height={size * (140 / 240)} className={className} aria-hidden="true" focusable="false" {...rest}>
      {variant === 'jet' && (
        <g strokeLinejoin="round">
          {/* Vertical Stabilizer (Tail Fin) */}
          <path d="M 24 66 L 56 16 C 59 12 64 11 72 12 L 82 13 L 68 66 Z" fill="#94682B" />
          {/* Horizontal Tailplane (side view profile) */}
          <path d="M 14 62 L 38 48 L 56 50 L 38 64 Z" fill="#3A3A3A" />
          {/* Fuselage - Aerodynamic Airliner Body */}
          <path d="M 18 68 C 18 60 30 56 50 55 L 180 55 C 205 55 226 60 234 66 C 238 69 238 72 234 75 C 224 81 205 84 180 84 L 56 84 C 30 84 18 76 18 68 Z" fill="#FBF8F1" stroke="#2A2A2A" strokeWidth="2.5" />
          {/* Livery Gold Stripe */}
          <path d="M 48 68 L 202 68" stroke="#B88740" strokeWidth="3" strokeLinecap="round" />
          {/* Swept Main Wing (side profile projection) */}
          <path d="M 130 70 L 96 112 C 94 114 98 116 104 114 L 166 74 Z" fill="#3A3A3A" />
          {/* Jet Turbofan Engine */}
          <path d="M 142 76 L 150 84 L 186 84 C 192 84 194 86 192 89 C 188 92 180 93 166 93 L 134 93 C 130 93 127 90 129 87 C 131 84 136 79 142 76 Z" fill="#2A2A2A" />
          {/* Cockpit Windshield */}
          <path d="M 214 61 C 222 63 228 66 230 68 L 218 68 C 212 66 208 64 214 61 Z" fill="#1A1A1A" />
          {/* Passenger Cabin Windows */}
          <g fill="#1A1A1A" opacity="0.75">
            <rect x="80" y="64" width="4.5" height="6" rx="2" />
            <rect x="91" y="64" width="4.5" height="6" rx="2" />
            <rect x="102" y="64" width="4.5" height="6" rx="2" />
            <rect x="113" y="64" width="4.5" height="6" rx="2" />
            <rect x="124" y="64" width="4.5" height="6" rx="2" />
            <rect x="135" y="64" width="4.5" height="6" rx="2" />
            <rect x="146" y="64" width="4.5" height="6" rx="2" />
            <rect x="157" y="64" width="4.5" height="6" rx="2" />
            <rect x="168" y="64" width="4.5" height="6" rx="2" />
            <rect x="179" y="64" width="4.5" height="6" rx="2" />
            <rect x="190" y="64" width="4.5" height="6" rx="2" />
          </g>
        </g>
      )}
      {variant === 'paper' && (
        <g strokeLinejoin="round" stroke="#2A2A2A" strokeWidth="1.5">
          <path d="M6 70 L232 14 L150 70 Z" fill="#FBF8F1" />
          <path d="M6 70 L232 126 L150 70 Z" fill="#E6DDCC" />
          <path d="M232 14 L150 70 L170 88 Z" fill="#D8CCB5" />
          <path d="M6 70 L150 70 L134 84 Z" fill="#B88740" />
        </g>
      )}
      {variant === 'line' && (
        <g fill="none" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 70 C8 62 20 58 46 58 L190 58 C214 58 232 64 236 70 C232 76 214 82 190 82 L46 82 C20 82 8 78 8 70 Z" />
          <path d="M126 58 L72 8 L86 8 L156 58" />
          <path d="M126 82 L72 132 L86 132 L156 82" />
          <path d="M44 58 L16 38 L28 38 L58 58" />
          <path d="M44 82 L16 102 L28 102 L58 82" />
          <path d="M30 70 L200 70" stroke="#B88740" />
        </g>
      )}
    </svg>
  );
}
