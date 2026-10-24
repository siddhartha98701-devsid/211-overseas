'use client';

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileScrollerProps {
  children: ReactNode;
  /** Optional extra classes for layout */
  desktopClassName?: string;
  /** Accessible label for the carousel region. */
  label?: string;
  /** Set when the cards sit on a dark section so dots/arrows stay visible. */
  dark?: boolean;
  className?: string;
}

/**
 * Modern responsive horizontal scroll-snap carousel with next card peeking,
 * active dot indicators, and working left/right slide arrows across all screen sizes.
 */
export function MobileScroller({
  children,
  desktopClassName = '',
  label,
  dark = false,
  className = '',
}: MobileScrollerProps) {
  const ref = useRef<HTMLUListElement>(null);
  const items = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [canScroll, setCanScroll] = useState(true);

  const checkScrollable = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScroll(el.scrollWidth > el.clientWidth + 5);
  }, []);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el || !el.children.length) return;
    const scrollLeft = el.scrollLeft;

    let closestIndex = 0;
    let minDiff = Infinity;
    for (let i = 0; i < el.children.length; i++) {
      const child = el.children[i] as HTMLElement;
      const diff = Math.abs(child.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }
    setActive(Math.min(items.length - 1, Math.max(0, closestIndex)));
  }, [items.length]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    checkScrollable();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', checkScrollable);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', checkScrollable);
    };
  }, [update, checkScrollable]);

  const go = (index: number) => {
    const el = ref.current;
    if (!el || !el.children.length) return;
    const nextIdx = Math.max(0, Math.min(items.length - 1, index));
    const target = el.children[nextIdx] as HTMLElement | undefined;
    
    if (target) {
      const leftOffset = target.offsetLeft;
      el.scrollTo({ left: leftOffset, behavior: 'smooth' });
    } else {
      const first = el.children[0] as HTMLElement;
      const step = first.offsetWidth + 24;
      el.scrollTo({ left: nextIdx * step, behavior: 'smooth' });
    }
    setActive(nextIdx);
  };

  const tone = dark ? 'border-white/30 text-white' : 'border-[#D8CCB5] text-[#2A2A2A]';

  return (
    <div className={`relative ${className}`} role="region" aria-roledescription="carousel" aria-label={label}>
      <ul
        ref={ref}
        className="flex snap-x snap-mandatory gap-4 md:gap-6 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <li
            key={i}
            className="relative flex min-w-0 shrink-0 basis-[85%] sm:basis-[320px] md:basis-[340px] lg:basis-[360px] snap-start [&>*]:w-full"
          >
            {child}
          </li>
        ))}
      </ul>

      {items.length > 1 && canScroll && (
        <div className="mt-6 flex items-center justify-between">
          {items.length > 7 ? (
            <p className={`text-xs sm:text-sm font-medium tabular-nums ${dark ? 'text-white/70' : 'text-[#57514A]'}`} aria-live="polite">
              {active + 1} / {items.length}
            </p>
          ) : (
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className="flex h-6 w-6 items-center justify-center cursor-pointer"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === active
                        ? `w-6 ${dark ? 'bg-[#0C3844]' : 'bg-[#0C3844]'}`
                        : `w-1.5 ${dark ? 'bg-white/30' : 'bg-[#D8CCB5]'}`
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(active - 1)}
              disabled={active === 0}
              className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border transition-all cursor-pointer disabled:opacity-25 ${tone} hover:border-[#0C3844] hover:text-[#0C3844] active:scale-95 rounded-[2px]`}
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(active + 1)}
              disabled={active >= items.length - 1}
              className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border transition-all cursor-pointer disabled:opacity-25 ${tone} hover:border-[#0C3844] hover:text-[#0C3844] active:scale-95 rounded-[2px]`}
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
