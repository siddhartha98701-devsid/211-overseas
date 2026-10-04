'use client';

import dynamic from 'next/dynamic';
import { GlobeStaticFallback } from './Globe';

const Globe = dynamic(() => import('./Globe'), {
  ssr: false,
  loading: () => <GlobeStaticFallback className="w-full h-full min-h-[350px]" />,
});

interface GlobeWrapperProps {
  className?: string;
  highlightCountry?: string;
}

export function GlobeWrapper({ className = '', highlightCountry }: GlobeWrapperProps) {
  return <Globe className={className} highlightCountry={highlightCountry} />;
}
