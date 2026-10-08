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
          {/* tailplanes */}
          <path d="M40 66 L12 38 L24 38 L56 64 Z" fill="#3a3733" />
          <path d="M40 74 L12 102 L24 102 L56 76 Z" fill="#3a3733" />
          {/* wings */}
          <path d="M126 64 L70 6 L84 6 L152 62 Z" fill="#4a4640" />
          <path d="M126 76 L70 134 L84 134 L152 78 Z" fill="#4a4640" />
          {/* winglets */}
          <path d="M70 6 L84 6 L80 0 L72 0 Z" fill="#B88740" />
          <path d="M70 134 L84 134 L80 140 L72 140 Z" fill="#B88740" />
          {/* fuselage */}
          <path d="M8 70 C8 62 20 58 46 58 L190 58 C214 58 232 64 236 70 C232 76 214 82 190 82 L46 82 C20 82 8 78 8 70 Z" fill="#FBF8F1" stroke="#2A2A2A" strokeWidth="2" />
          {/* livery stripe + cockpit */}
          <path d="M30 70 L196 70" stroke="#B88740" strokeWidth="4" strokeLinecap="round" />
          <path d="M206 63 C216 63 224 66 228 70 C224 74 216 77 206 77 Z" fill="#2A2A2A" />
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
