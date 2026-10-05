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
  selectedName?: string | null;
  onSelect?: (name: string) => void;
}

export function GlobeWrapper({ className = '', highlightCountry, selectedName, onSelect }: GlobeWrapperProps) {
  return (
    <Globe
      className={className}
      highlightCountry={highlightCountry}
      selectedName={selectedName}
      onSelect={onSelect}
    />
  );
}
