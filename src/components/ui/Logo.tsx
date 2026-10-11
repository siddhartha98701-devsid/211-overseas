import Image from 'next/image';

type LogoVariant = 'primary' | 'primary-white' | 'primary-black' | 'secondary' | 'secondary-white' | 'mark';

const SOURCES: Record<LogoVariant, { src: string; width: number; height: number }> = {
  primary: { src: '/brand/logo-primary.png', width: 1864, height: 1750 },
  'primary-white': { src: '/brand/logo-primary-white.png', width: 1864, height: 1750 },
  'primary-black': { src: '/brand/logo-primary-black.png', width: 1864, height: 1750 },
  secondary: { src: '/brand/logo-secondary.png', width: 1864, height: 1750 },
  'secondary-white': { src: '/brand/logo-secondary-white.png', width: 1864, height: 1750 },
  mark: { src: '/brand/logomark.png', width: 1864, height: 1378 },
};

interface LogoProps {
  /** primary-white / secondary-white for dark backgrounds; the others for light backgrounds. */
  variant?: LogoVariant;
  /** Rendered height in px; width follows the artwork's aspect ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
}

/** Official 211 OVERSEAS study abroad logo artwork (lossless high-resolution assets from brand identity). */
export function Logo({ variant = 'primary', height = 48, className = '', priority = false }: LogoProps) {
  const { src, width, height: h } = SOURCES[variant];
  return (
    <Image
      src={src}
      alt="211 OVERSEAS study abroad"
      width={Math.round((width / h) * height)}
      height={height}
      priority={priority}
      unoptimized
      className={`w-auto select-none ${className}`}
      style={{ height }}
    />
  );
}
