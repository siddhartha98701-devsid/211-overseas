'use client';

import { useState } from 'react';
import { getCountryCode, getFlagSrcSet, getFlagUrl } from '@/lib/flags';

export interface CountryFlagProps {
  country: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fadeIn?: boolean;
}

export function CountryFlag({
  country,
  className = '',
  width = 28,
  height = 20,
  loading = 'lazy',
  fadeIn = false,
}: CountryFlagProps) {
  const code = getCountryCode(country);
  const [useFallback, setUseFallback] = useState(false);

  if (!code) return null;

  const src = useFallback
    ? `https://flagcdn.com/w80/${code}.png`
    : getFlagUrl(code);

  const srcSet = useFallback
    ? `https://flagcdn.com/w80/${code}.png 1x, https://flagcdn.com/w160/${code}.png 2x`
    : getFlagSrcSet(code);

  return (
    <img
      key={code}
      src={src}
      srcSet={srcSet}
      alt={`${country} flag`}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      onError={() => {
        if (!useFallback) setUseFallback(true);
      }}
      className={`inline-block object-cover ${
        fadeIn ? 'animate-[flagFadeIn_200ms_ease-out]' : ''
      } ${className}`}
    />
  );
}
