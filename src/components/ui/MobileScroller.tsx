'use client';

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileScrollerProps {
  children: ReactNode;
  /** Tailwind classes for the desktop (md+) layout, e.g. "md:grid-cols-3". Defaults to a 3 column grid. */
  desktopClassName?: string;
  /** Accessible label for the carousel region. */
  label?: string;
  /** Set when the cards sit on a dark section so dots/arrows stay visible. */
  dark?: boolean;
  className?: string;
}

/**
 * One reusable mobile-first carousel. Below `md` the children become a horizontal scroll-snap row
 * (about 85% card width, with dots and arrows); from `md` up the same children render as a grid.
 * The scroll container is clipped to its own box, so the page itself never overflows sideways.
 */
export function MobileScroller({
  children,
  desktopClassName = 'md:grid-cols-3',
  label,
  dark = false,
  className = '',
}: MobileScrollerProps) {
  const ref = useRef<HTMLUListElement>(null);
  const items = Children.toArray(children);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el || !el.children.length) return;
    const first = el.children[0] as HTMLElement;
    const step = first.offsetWidth + 16;
    setActive(Math.min(items.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  }, [items.length]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    return () => el.removeEventListener('scroll', update);
  }, [update]);

  const go = (index: number) => {
    const el = ref.current;
    if (!el) return;
    const target = el.children[Math.max(0, Math.min(items.length - 1, index))] as HTMLElement | undefined;
    if (target) el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: 'smooth' });
  };

  const tone = dark ? 'border-white/30 text-white' : 'border-[#D8CCB5] text-[#2A2A2A]';

  return (
    <div className={className} role="region" aria-roledescription="carousel" aria-label={label}>
      <ul
        ref={ref}
        className={`flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:overflow-visible md:pb-0 md:gap-6 ${desktopClassName}`}
      >
        {items.map((child, i) => (
          <li key={i} className="flex min-w-0 shrink-0 basis-[85%] snap-start md:basis-auto md:shrink [&>*]:w-full">
            {child}
          </li>
        ))}
      </ul>

      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-between md:hidden">
          {items.length > 7 ? (
            <p className={`text-sm font-medium tabular-nums ${dark ? 'text-white/70' : 'text-[#57514A]'}`} aria-live="polite">
              {active + 1} / {items.length}
            </p>
          ) : (
          <div className="flex items-center" role="tablist" aria-label="Slides">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    i === active ? `w-5 ${dark ? 'bg-[#D1A95F]' : 'bg-[#94682B]'}` : `w-2 ${dark ? 'bg-white/30' : 'bg-[#D8CCB5]'}`
                  }`}
                />
              </button>
            ))}
          </div>
          )}
          <div className="flex gap-2">
            <button type="button" aria-label="Previous" onClick={() => go(active - 1)} disabled={active === 0} className={`flex h-11 w-11 items-center justify-center border disabled:opacity-30 ${tone}`}>
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next" onClick={() => go(active + 1)} disabled={active === items.length - 1} className={`flex h-11 w-11 items-center justify-center border disabled:opacity-30 ${tone}`}>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
