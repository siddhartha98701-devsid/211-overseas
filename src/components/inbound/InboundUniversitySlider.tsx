'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { InboundUniversity } from '@/content/inbound-universities';

interface InboundUniversitySliderProps {
  universities: InboundUniversity[];
  carouselAriaLabel: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
}

export function InboundUniversitySlider({
  universities,
  carouselAriaLabel,
  prevAriaLabel,
  nextAriaLabel,
}: InboundUniversitySliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update button disabled states based on scroll position
  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    // Allow small epsilon tolerance
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // Smooth scroll by card width
  const scroll = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>('[data-card]');
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 340;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    el.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  // Keyboard navigation on track
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scroll('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scroll('right');
    }
  };

  return (
    <div className="relative w-full">
      {/* Slider Controls Header */}
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          type="button"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-disabled={!canScrollLeft}
          aria-label={prevAriaLabel}
          className={`w-11 h-11 rounded-none border border-[#E6DDCC] flex items-center justify-center transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A33E11] focus-visible:outline-none ${
            canScrollLeft
              ? 'bg-white hover:bg-[#00222B] text-[#1B1C1A] hover:text-white shadow-sm'
              : 'bg-[#F3EBDD]/40 text-[#41484B]/30 border-[#E6DDCC]/60 cursor-not-allowed'
          }`}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-disabled={!canScrollRight}
          aria-label={nextAriaLabel}
          className={`w-11 h-11 rounded-none border border-[#E6DDCC] flex items-center justify-center transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A33E11] focus-visible:outline-none ${
            canScrollRight
              ? 'bg-white hover:bg-[#00222B] text-[#1B1C1A] hover:text-white shadow-sm'
              : 'bg-[#F3EBDD]/40 text-[#41484B]/30 border-[#E6DDCC]/60 cursor-not-allowed'
          }`}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Scrollable Track */}
      <div
        ref={trackRef}
        role="region"
        aria-label={carouselAriaLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory focus-visible:ring-2 focus-visible:ring-[#A33E11] focus-visible:outline-none pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {universities.map((uni, idx) => {
          const displayInitials = uni.initials || uni.name.split(' ').map((w) => w[0]).join('').slice(0, 4);

          return (
            <article
              key={uni.name}
              data-card
              className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start bg-white border border-[#E6DDCC] flex flex-col justify-between hover:border-[#A33E11] hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Real Campus Photography Panel */}
                <div
                  className="relative h-48 w-full overflow-hidden border-b border-[#E6DDCC] bg-[#00222B]"
                >
                  <Image
                    src={uni.image || '/images/inbound/iisc-bengaluru.jpg'}
                    alt={`${uni.name} campus`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 85vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle layered vignette & gradient scrim for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

                  {/* Top Badges */}
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-xs px-2.5 py-1 border border-white/20">
                      {uni.location.split(',')[0]}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#FC7F4E] bg-black/60 backdrop-blur-xs px-2 py-0.5 border border-white/20">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Bottom Overlay Badge with Initials & Location */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-end justify-between">
                    <div>
                      <span className="font-serif text-2xl font-bold tracking-wider text-white drop-shadow-md block">
                        {displayInitials}
                      </span>
                      <span className="text-[11px] text-white/80 font-medium block drop-shadow-sm">
                        {uni.location}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-white/90 bg-[#A33E11] px-2 py-0.5 font-semibold">
                      {uni.type.replace(' university', '')}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A33E11] block mb-1">
                      {uni.location} · {uni.type}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors leading-snug">
                      {uni.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm text-[#41484B] leading-relaxed">
                    {uni.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Verified External Link */}
              <div className="p-6 pt-0 mt-4 border-t border-[#E6DDCC]/60">
                <a
                  href={uni.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit official website of ${uni.name} (opens in a new tab)`}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A33E11] hover:text-[#85320D] group/link transition-colors"
                >
                  <span>Visit official website ↗</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
