import type { SVGProps } from 'react';

interface AirlinerProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  /** Rendered width in px (the drawing is 2:1). */
  size?: number;
}

/**
 * Top-down airliner, nose pointing right (+x). White fuselage with soft shading, swept grey wings,
 * under-wing engines and mustard livery accents (tail tips, engine rings, winglets). The drop shadow is
 * added by the parent so it keeps a fixed direction while the plane turns.
 */
export function AirlinerTopDown({ size = 160, className, ...rest }: AirlinerProps) {
  return (
    <svg
      viewBox="0 0 240 140"
      width={size}
      height={size * (140 / 240)}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <defs>
        <linearGradient id="al-fus" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9ccd1" />
          <stop offset="0.28" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#f4f5f7" />
          <stop offset="1" stopColor="#b9bdc3" />
        </linearGradient>
        <linearGradient id="al-wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7f8f9" />
          <stop offset="1" stopColor="#bfc3c9" />
        </linearGradient>
        <linearGradient id="al-eng" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8eaed" />
          <stop offset="1" stopColor="#9da2a9" />
        </linearGradient>
      </defs>

      <g stroke="#9aa0a8" strokeWidth="0.8" strokeLinejoin="round">
        {/* tailplanes */}
        <path d="M44 66 L14 40 L8 42 L26 70 Z" fill="url(#al-wing)" />
        <path d="M44 74 L14 100 L8 98 L26 70 Z" fill="url(#al-wing)" />
        {/* main wings, swept back */}
        <path d="M122 64 L74 10 L62 12 L88 70 Z" fill="url(#al-wing)" />
        <path d="M122 76 L74 130 L62 128 L88 70 Z" fill="url(#al-wing)" />
        {/* winglet tips in mustard */}
        <path d="M74 10 L62 12 L60 6 L70 5 Z" fill="#E59217" stroke="#c97a0e" />
        <path d="M74 130 L62 128 L60 134 L70 135 Z" fill="#E59217" stroke="#c97a0e" />
        {/* engines */}
        {[44, 96].map((y) => (
          <g key={y}>
            <rect x="82" y={y - 7} width="34" height="14" rx="7" fill="url(#al-eng)" />
            <rect x="109" y={y - 7} width="7" height="14" rx="3.5" fill="#E59217" stroke="#c97a0e" />
            <rect x="84" y={y - 1.2} width="22" height="2.4" rx="1.2" fill="#fff" opacity="0.55" stroke="none" />
          </g>
        ))}
        {/* fuselage */}
        <path
          d="M232 70 C226 61 208 58.5 188 58 L58 61 C40 62 24 65 10 69 L10 71 C24 75 40 78 58 79 L188 82 C208 81.5 226 79 232 70 Z"
          fill="url(#al-fus)"
        />
        {/* tail fin seen from above + mustard tail tip */}
        <path d="M60 68.4 L12 69.2 L12 70.8 L60 71.6 Z" fill="#d6d9de" stroke="none" />
        <path d="M30 68.8 L10 69.4 L10 70.6 L30 71.2 Z" fill="#E59217" stroke="none" />
        {/* cheatline */}
        <path d="M200 66.4 L58 66.8" stroke="#E59217" strokeWidth="1.6" fill="none" opacity="0.9" />
        {/* cockpit */}
        <path d="M222 70 C219 65.5 212 64.4 206 64.2 L206 75.8 C212 75.6 219 74.5 222 70 Z" fill="#2c3440" stroke="none" />
        <path d="M219 68 C216 66.4 212 65.8 209 65.7" stroke="#8fb4d8" strokeWidth="1" fill="none" opacity="0.8" />
      </g>
    </svg>
  );
}
