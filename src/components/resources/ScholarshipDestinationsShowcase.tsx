'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { CountryFlag } from '@/components/ui/CountryFlag';

export interface ScholarshipRouteItem {
  destination: string;
  details: string;
}

const DESTINATION_META: Record<
  string,
  { image: string; flag: string; monogram: string; link: string; summary: string }
> = {
  'South Korea': {
    image: '/images/generated/korea-gateway.jpg',
    flag: 'South Korea',
    monogram: 'GKS',
    link: '/study/south-korea',
    summary: 'Global Korea Scholarship (GKS), university merit awards and graduate research funding.',
  },
  Japan: {
    image: '/images/destinations/japan-campus.jpg',
    flag: 'Japan',
    monogram: 'MEXT',
    link: '/study/japan',
    summary: 'MEXT government awards, JASSO study subsidies, and university-level tuition fee reductions.',
  },
  Taiwan: {
    image: '/images/destinations/taiwan-campus.jpg',
    flag: 'Taiwan',
    monogram: 'MOE',
    link: '/study/taiwan',
    summary: 'Taiwan Scholarship Program (MOE), ICDF international fellowships, and faculty-specific bursaries.',
  },
  Luxembourg: {
    image: '/images/destinations/europe-campus.jpg',
    flag: 'Luxembourg',
    monogram: 'LUX',
    link: '/study/luxembourg',
    summary: 'Institution-specific competitive merit awards, European Master mobility, and research grants.',
  },
  'Other destinations': {
    image: '/images/generated/global-campus.jpg',
    flag: 'United Kingdom',
    monogram: 'GLO',
    link: '/study',
    summary: 'Institutional bursaries, university merit waivers, postgraduate funding and external trusts.',
  },
};

export function ScholarshipDestinationsShowcase({
  routes,
}: {
  routes: ReadonlyArray<ScholarshipRouteItem>;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const activeItem = routes[currentIndex] || routes[0];
  const activeMeta =
    DESTINATION_META[activeItem.destination] || DESTINATION_META['Other destinations'];

  const scrollToCard = (idx: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('[data-dest-card]');
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + routes.length) % routes.length;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % routes.length;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="space-y-6">
      {/* Horizontal Pill Tabs Switcher (Top quick selection) */}
      <div className="-mx-2 px-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-2 pb-1 min-w-max justify-center sm:justify-start">
          {routes.map((r, idx) => {
            const active = idx === currentIndex;
            const meta = DESTINATION_META[r.destination] || DESTINATION_META['Other destinations'];
            return (
              <button
                key={r.destination}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  scrollToCard(idx);
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-[#00222B] text-white shadow-sm ring-1 ring-black/10'
                    : 'bg-white text-[#1B1C1A] border border-[#E6DDCC] hover:border-[#A33E11]'
                }`}
              >
                <CountryFlag country={meta.flag} width={16} height={11} className="rounded-xs object-cover" />
                <span>{r.destination}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Banner with Counter and Navigation Arrows (matching Homepage Pattern) */}
      <div
        className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md bg-[#00222B] touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.destination}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={activeMeta.image}
              alt={`${activeItem.destination} scholarship opportunities`}
              fill
              priority
              sizes="(min-width: 1024px) 1100px, 95vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Upper-Left Destination & Scholarship Overlay */}
        <div className="absolute top-4 left-4 right-4 z-10 pointer-events-none select-none">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-[#FC7F4E] shadow-sm mb-1.5">
            <CountryFlag country={activeMeta.flag} width={14} height={10} className="rounded-xs" />
            <span>{activeItem.destination}</span>
          </div>
          <h3 className="font-serif text-xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-tight max-w-[85%]">
            {activeItem.destination} Scholarship Routes
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-white/90 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] line-clamp-2 max-w-2xl">
            {activeItem.details}
          </p>
        </div>

        {/* Bottom-Left Counter + Navigation Arrows */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
          <div className="text-white font-bold text-2xl drop-shadow-md">
            {String(currentIndex + 1).padStart(2, '0')}
            <span className="text-base font-light text-white/80">/{String(routes.length).padStart(2, '0')}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#1B1C1A] shadow-md flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer active:scale-95 touch-manipulation"
              aria-label="Previous destination"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#1B1C1A] shadow-md flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer active:scale-95 touch-manipulation"
              aria-label="Next destination"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Destination Scholarship Cards Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-3 pt-2 -mx-2 px-2"
        style={{ scrollSnapType: 'x mandatory' }}
        role="region"
        aria-label="Scholarship destinations carousel"
      >
        {routes.map((r, idx) => {
          const isSelected = idx === currentIndex;
          const meta = DESTINATION_META[r.destination] || DESTINATION_META['Other destinations'];

          return (
            <div
              key={r.destination}
              data-dest-card
              onClick={() => {
                setCurrentIndex(idx);
                scrollToCard(idx);
              }}
              className={`w-[85vw] max-w-[340px] sm:w-[320px] bg-white rounded-2xl shadow-md overflow-hidden border snap-start shrink-0 flex flex-col justify-between transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#A33E11] ring-2 ring-[#A33E11]/30 shadow-lg'
                  : 'border-[#E6DDCC] hover:border-[#A33E11]'
              }`}
            >
              {/* 16:10 Campus Image with Monogram Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={meta.image}
                  alt={`${r.destination} scholarship framework`}
                  fill
                  sizes="(min-width: 768px) 340px, 85vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-black/10 flex items-center justify-center font-bold text-xs text-[#0C3844] z-10">
                  {meta.monogram}
                </div>
                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="text-white font-serif text-sm font-bold truncate block drop-shadow-sm">
                    {r.destination}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 pt-3 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <CountryFlag country={meta.flag} width={16} height={11} className="rounded-xs object-cover shrink-0" />
                    <span className="text-[11px] font-semibold text-[#71787B] uppercase tracking-wider">
                      Study Destination
                    </span>
                  </div>

                  <div className="mb-2">
                    <span
                      className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        isSelected
                          ? 'bg-[#A33E11] text-white border-[#A33E11]'
                          : 'bg-[#FC7F4E]/10 text-[#A33E11] border-[#FC7F4E]/30'
                      }`}
                    >
                      {isSelected ? '● Active Destination' : 'Scholarship Framework'}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#1B1C1A] leading-snug mb-2">
                    {r.destination}
                  </h4>

                  <p className="text-xs text-[#41484B] leading-relaxed">
                    {r.details}
                  </p>
                </div>

                <Link
                  href={meta.link}
                  onClick={(e) => e.stopPropagation()}
                  className={`mt-2 w-full text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl text-center transition-colors cursor-pointer shadow-xs active:scale-98 inline-flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#A33E11] hover:bg-[#85320D] text-white'
                      : 'bg-[#FAF8F5] hover:bg-[#A33E11] text-[#1B1C1A] hover:text-white border border-[#E6DDCC]'
                  }`}
                >
                  <span>Explore {r.destination}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
