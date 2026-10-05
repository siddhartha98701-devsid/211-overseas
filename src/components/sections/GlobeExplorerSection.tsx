'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GlobeWrapper } from '@/components/globe/GlobeWrapper';
import { GLOBE_PINS } from '@/components/globe/pins';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteContent } from '@/content/site';

interface Destination {
  /** Matches a pin name in GLOBE_PINS */
  pin: string;
  country: string;
  label: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  featured: boolean;
}

const DESTINATIONS: Destination[] = buildDestinations();

function buildDestinations(): Destination[] {
  const [korea, germany, uae] = siteContent.pathways;
  const featured: Destination[] = [
    { pin: 'Seoul', country: 'South Korea', label: 'Study', ...pick(korea) },
    { pin: 'Berlin', country: 'Germany', label: 'Work · Healthcare', ...pick(germany) },
    { pin: 'Dubai', country: 'UAE', label: 'Work · Careers', ...pick(uae) },
  ];

  const others: [string, string][] = [
    ['Tokyo', 'Japan'],
    ['Taipei', 'Taiwan'],
    ['Singapore', 'Singapore'],
    ['London', 'United Kingdom'],
    ['New York', 'United States'],
    ['Toronto', 'Canada'],
    ['Sydney', 'Australia'],
  ];

  const rest: Destination[] = others.map(([pin, country]) => {
    const entry = siteContent.otherDestinations.countries.find((c) => c.name === country);
    return {
      pin,
      country,
      label: 'Study · Work',
      description: `Explore education and career pathways in ${country}, matched to your profile.`,
      bullets: entry?.bullets ?? [],
      href: '/other-destinations',
      cta: `Explore ${country}`,
      featured: false,
    };
  });

  return [...featured, ...rest];
}

function pick(p: (typeof siteContent.pathways)[number]) {
  return {
    description: p.description,
    bullets: p.bullets.slice(0, 4),
    href: p.cta.href,
    cta: p.cta.label,
    featured: true,
  };
}

export function GlobeExplorerSection() {
  const destinations = DESTINATIONS;
  const [selected, setSelected] = useState(destinations[0].pin);
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const index = destinations.findIndex((d) => d.pin === selected);
  const current = destinations[index];
  const pinMeta = GLOBE_PINS.find((p) => p.name === current.pin);

  // Keep the selected card centred in the rail without scrolling the page
  useEffect(() => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>(`[data-pin="${selected}"]`);
    if (!rail || !card) return;
    const left = card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2;
    rail.scrollTo({ left, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [selected, reduceMotion]);

  const step = (dir: 1 | -1) => {
    const next = (index + dir + destinations.length) % destinations.length;
    setSelected(destinations[next].pin);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      step(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      step(-1);
    }
    // Move focus to the newly selected card
    requestAnimationFrame(() => {
      railRef.current?.querySelector<HTMLElement>('[aria-checked="true"]')?.focus({ preventScroll: true });
    });
  };

  return (
    <section
      id="globe"
      className="py-24 md:py-36 border-b border-[#DDD7CC] scroll-mt-24"
      aria-label="Choose your destination"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          eyebrow="Choose your destination"
          headline="Spin the globe. Find your direction."
          description="Drag the globe, tap a pin, or slide through the destinations below — each one shows the pathways we can guide you on."
        />

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Globe + slider */}
            <div className="lg:col-span-7 min-w-0">
              <div className="relative mx-auto aspect-square w-full max-w-[560px]">
                <GlobeWrapper
                  className="h-full w-full"
                  selectedName={selected}
                  onSelect={setSelected}
                />
              </div>
              <p className="mt-2 text-center text-[11px] uppercase tracking-widest text-[#6C675E]">
                Drag to rotate · tap a pin to select
              </p>

              {/* Slider */}
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous destination"
                  className="shrink-0 h-10 w-10 border border-[#DDD7CC] text-[#15140F] hover:border-[#15140F] transition-colors flex items-center justify-center"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>

                <div
                  ref={railRef}
                  role="radiogroup"
                  aria-label="Destinations"
                  onKeyDown={onKeyDown}
                  className="flex-1 min-w-0 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {destinations.map((d) => {
                    const active = d.pin === selected;
                    return (
                      <button
                        key={d.pin}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        tabIndex={active ? 0 : -1}
                        data-pin={d.pin}
                        onClick={() => setSelected(d.pin)}
                        className={`snap-center shrink-0 w-40 text-left px-4 py-3 border transition-colors ${
                          active
                            ? 'bg-[#2F4A3C] border-[#2F4A3C] text-white'
                            : 'bg-transparent border-[#DDD7CC] text-[#15140F] hover:border-[#15140F]'
                        }`}
                      >
                        <span
                          className={`block text-[10px] uppercase tracking-widest ${
                            active ? 'text-white/70' : 'text-[#6C675E]'
                          }`}
                        >
                          {d.label}
                        </span>
                        <span className="block font-serif text-lg font-light leading-tight mt-1">{d.country}</span>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next destination"
                  className="shrink-0 h-10 w-10 border border-[#DDD7CC] text-[#15140F] hover:border-[#15140F] transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-5 min-h-[22rem]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.pin}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-xs uppercase tracking-widest text-[#6C675E] font-medium">
                    {current.featured ? 'Featured pathway' : 'Other destination'}
                    {pinMeta ? ` · ${pinMeta.name}` : ''}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#15140F] tracking-tight leading-[1.1] mt-3 mb-6">
                    {current.country}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6C675E] leading-relaxed mb-8">{current.description}</p>

                  {current.bullets.length > 0 && (
                    <div className="pt-6 border-t border-[#DDD7CC] mb-8">
                      <p className="text-xs uppercase tracking-wider text-[#15140F] font-medium mb-2">
                        Key opportunities
                      </p>
                      <p className="text-sm text-[#6C675E] leading-relaxed">{current.bullets.join(', ')}.</p>
                    </div>
                  )}

                  <Link
                    href={current.href}
                    className="inline-flex items-center text-xs uppercase tracking-widest text-[#15140F] hover:text-[#2F4A3C] font-medium transition-colors group"
                  >
                    <span>{current.cta}</span>
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
