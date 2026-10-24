'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DestinationCard } from '@/components/pages/DestinationCard';
import { CountryFlag } from '@/components/ui/CountryFlag';
import { MobileScroller } from '@/components/ui/MobileScroller';
import type { SubpageContent } from '@/content/subpages';
import { Compass, GraduationCap, MapPin } from 'lucide-react';

interface OtherDestinationsTabsProps {
  pages: SubpageContent[];
}

const REGION_CONFIG = [
  { id: 'all', label: 'All Destinations', slugs: [] },
  { id: 'asia', label: 'Asia', slugs: ['japan', 'taiwan', 'singapore'] },
  { id: 'europe', label: 'Europe & UK', slugs: ['europe', 'united-kingdom'] },
  { id: 'americas', label: 'North America', slugs: ['united-states', 'canada'] },
  { id: 'oceania', label: 'Australia', slugs: ['australia'] },
];

export function OtherDestinationsTabs({ pages }: OtherDestinationsTabsProps) {
  const [activeRegion, setActiveRegion] = useState('all');

  const bySlug = useMemo(() => {
    return Object.fromEntries(pages.map((p) => [p.slug, p]));
  }, [pages]);

  const displayedPages = useMemo(() => {
    if (activeRegion === 'all') {
      return pages;
    }
    const region = REGION_CONFIG.find((r) => r.id === activeRegion);
    if (!region) return pages;
    return region.slugs.map((slug) => bySlug[slug]).filter(Boolean);
  }, [activeRegion, pages, bySlug]);

  return (
    <div className="w-full">
      {/* Sticky Region Filter Bar */}
      <div className="sticky top-16 md:top-20 z-20 bg-[#FAF8F5]/95 backdrop-blur-md border-y border-[#E6DDCC] py-3.5 -mx-6 px-6 mb-8 transition-all">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1">
            {REGION_CONFIG.map((r) => {
              const isActive = activeRegion === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveRegion(r.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all rounded-[2px] cursor-pointer ${
                    isActive
                      ? 'bg-[#1D3FFF] text-white shadow-sm'
                      : 'bg-white text-[#2A2A2A] border border-[#E6DDCC] hover:border-[#1D3FFF] hover:text-[#1D3FFF]'
                  }`}
                  aria-pressed={isActive}
                >
                  <GraduationCap size={14} className={isActive ? 'text-white' : 'text-[#1D3FFF]'} />
                  {r.label}
                </button>
              );
            })}
          </div>
          <span className="text-xs text-[#57514A] font-medium hidden sm:block shrink-0">
            Showing <strong className="text-[#2A2A2A]">{displayedPages.length}</strong> study {displayedPages.length === 1 ? 'country' : 'countries'}
          </span>
        </div>
      </div>

      {/* Horizontal Scroll-Snap Carousel on Mobile / Clean Grid on Desktop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRegion}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {activeRegion === 'all' ? (
            // Full carousel for all destinations
            <MobileScroller
              label="All study destinations"
              desktopClassName="md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayedPages.map((page) => (
                <div key={page.slug} className="h-full w-full">
                  <DestinationCard page={page} />
                </div>
              ))}
            </MobileScroller>
          ) : (
            // Filtered view by region
            <div className={`grid grid-cols-1 gap-6 ${displayedPages.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:max-w-xl'}`}>
              {displayedPages.map((page) => (
                <div key={page.slug} className="h-full w-full">
                  <DestinationCard page={page} />
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
