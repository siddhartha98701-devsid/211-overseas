'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GlobeWrapper } from '@/components/globe/GlobeWrapper';
import { GLOBE_PINS } from '@/components/globe/pins';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteContent } from '@/content/site';
import { countryHref } from '@/content/subpages';
import { CountryFlag } from '@/components/ui/CountryFlag';

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
      href: countryHref(country),
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
  const reduceMotion = usePrefersReducedMotion();

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
      className="bgl bgl-black py-16 md:py-24 text-white scroll-mt-24 overflow-hidden"
      aria-label="Choose your destination"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          compact
          dark
          eyebrow="Choose your destination"
          headline="Spin the globe. Find your direction."
          description="Drag the globe, tap a pin, or slide through the destinations below — each one shows the pathways we can guide you on."
        />

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Globe + slider */}
            <div className="lg:col-span-7 min-w-0">
              <div className="relative mx-auto aspect-square w-full max-w-[560px]">
                <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(184,135,64,0.22)_0%,rgba(184,135,64,0)_70%)] blur-2xl" />
                <GlobeWrapper
                  className="h-full w-full"
                  tone="dark"
                  selectedName={selected}
                  onSelect={setSelected}
                />
              </div>
              <p className="mt-2 text-center text-[11px] uppercase tracking-widest text-white/50">
                Drag to rotate · tap a pin to select
              </p>

              {/* Slider with isolated navigation arrows and spacious cards */}
              <div className="mt-8 flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous destination"
                  className="relative z-10 shrink-0 h-10 w-10 sm:h-11 sm:w-11 border border-white/25 bg-black/60 backdrop-blur-sm text-white hover:border-[#B88740] hover:text-[#D1A95F] transition-colors flex items-center justify-center active:scale-95 shadow-md"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>

                <div
                  ref={railRef}
                  role="radiogroup"
                  aria-label="Destinations"
                  onKeyDown={onKeyDown}
                  className="flex-1 min-w-0 flex gap-2.5 sm:gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth py-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                        className={`snap-center shrink-0 w-[180px] sm:w-[205px] text-left px-3.5 sm:px-4 py-3 border transition-colors select-none ${
                          active
                            ? 'bg-[#94682B] border-[#B88740] text-white shadow-[0_4px_16px_rgba(184,135,64,0.35)]'
                            : 'bg-black/50 border-white/20 text-white hover:border-[#B88740] hover:bg-black/70'
                        }`}
                      >
                        <span
                          className={`block text-[10px] uppercase tracking-widest leading-none ${
                            active ? 'text-black/80 font-medium' : 'text-white/55'
                          }`}
                        >
                          {d.label}
                        </span>
                        <div className="flex items-center gap-2.5 mt-2 min-w-0">
                          <CountryFlag
                            country={d.country}
                            width={26}
                            height={18}
                            className="w-[24px] h-[16px] sm:w-[26px] sm:h-[18px] rounded-[2px] border border-[#B88740] object-cover flex-shrink-0 shadow-sm"
                            loading="lazy"
                          />
                          <span className="font-serif text-sm sm:text-base font-bold leading-tight truncate">
                            {d.country}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next destination"
                  className="relative z-10 shrink-0 h-10 w-10 sm:h-11 sm:w-11 border border-white/25 bg-black/60 backdrop-blur-sm text-white hover:border-[#B88740] hover:text-[#D1A95F] transition-colors flex items-center justify-center active:scale-95 shadow-md"
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
                  <span className="text-xs uppercase tracking-widest text-[#D1A95F] font-medium">
                    {current.featured ? 'Featured pathway' : 'Other destination'}
                    {pinMeta ? ` · ${pinMeta.name}` : ''}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1] mt-3 mb-6 flex items-center gap-3">
                    <CountryFlag
                      country={current.country}
                      width={38}
                      height={26}
                      className="w-[32px] h-[22px] sm:w-[38px] sm:h-[26px] rounded-[2px] border border-[#B88740] object-cover flex-shrink-0 shadow-md"
                      loading="lazy"
                    />
                    <span>{current.country}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">{current.description}</p>

                  {current.bullets.length > 0 && (
                    <div className="pt-6 border-t border-white/15 mb-8">
                      <p className="text-xs uppercase tracking-wider text-white font-medium mb-2">
                        Key opportunities
                      </p>
                      <p className="text-sm text-white/65 leading-relaxed">{current.bullets.join(', ')}.</p>
                    </div>
                  )}

                  <Link
                    href={current.href}
                    className="btn-shine inline-flex items-center gap-2 bg-[#94682B] hover:bg-[#7A5622] text-white px-6 py-3 text-xs uppercase tracking-widest font-medium transition-colors group"
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
