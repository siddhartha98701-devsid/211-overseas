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

const DESTINATIONS: Destination[] = [
  {
    pin: 'Seoul',
    country: 'South Korea',
    label: 'Study',
    description: 'Explore undergraduate, postgraduate and language study options in South Korea.',
    bullets: ['Language programs & degrees', 'March / September intakes', 'GKS & university funding', 'STEM & creative fields'],
    href: '/study/south-korea',
    cta: 'Explore South Korea',
    featured: true,
  },
  {
    pin: 'Singapore',
    country: 'Singapore',
    label: 'Study',
    description: 'English-medium universities, applied learning, computing and finance.',
    bullets: ['Top Asian institutions', 'Business & computing', 'English medium of instruction', 'Industry linkages'],
    href: '/study/singapore',
    cta: 'Explore Singapore',
    featured: true,
  },
  {
    pin: 'Luxembourg',
    country: 'Luxembourg',
    label: 'Study',
    description: 'Business, finance and international management in a leading European financial centre.',
    bullets: ['Finance & management', 'Multilingual environment', 'European business hub', 'Merit awards available'],
    href: '/study/luxembourg',
    cta: 'Explore Luxembourg',
    featured: true,
  },
  {
    pin: 'Tokyo',
    country: 'Japan',
    label: 'Study',
    description: 'Advanced engineering, robotics, manufacturing and scientific research in Japan.',
    bullets: ['Robotics & engineering', 'MEXT scholarship routes', 'Undergraduate & master’s', 'Research excellence'],
    href: '/study/japan',
    cta: 'Explore Japan',
    featured: true,
  },
  {
    pin: 'Dubai',
    country: 'UAE',
    label: 'Work · Careers',
    description: 'Browse healthcare, hospitality, technical and commercial opportunities in the UAE.',
    bullets: ['Healthcare & nursing roles', 'Hospitality & guest services', 'Engineering & skilled trades', 'Verified written offers'],
    href: '/work/uae',
    cta: 'Explore UAE',
    featured: true,
  },
  {
    pin: 'Taipei',
    country: 'Taiwan',
    label: 'Study',
    description: 'Global semiconductor ecosystem, computing, electronics and research.',
    bullets: ['Semiconductors & tech', 'English-taught options', 'Government scholarships', 'Affordable tuition'],
    href: '/study/taiwan',
    cta: 'Explore Taiwan',
    featured: false,
  },
  {
    pin: 'Berlin',
    country: 'Europe (Germany)',
    label: 'Study',
    description: 'Tuition-free or low-cost higher education, engineering, automotive and research universities in Germany and Europe.',
    bullets: ['English-taught degrees', 'Engineering & automotive', 'Post-study job seeker visa', 'Structured research'],
    href: '/study/europe',
    cta: 'Explore Europe & Germany',
    featured: false,
  },
  {
    pin: 'London',
    country: 'United Kingdom',
    label: 'Study',
    description: 'Focused degrees, one-year Master’s programs and diverse university options in the UK.',
    bullets: ['1-year Master’s options', 'Global recognition', 'Specialised curricula', 'Clear visa funds rules'],
    href: '/study/uk',
    cta: 'Explore UK',
    featured: false,
  },
  {
    pin: 'New York',
    country: 'United States',
    label: 'Study',
    description: 'Broad institutional choice, flexible courses and extensive research scale in the US.',
    bullets: ['Research universities', 'Flexible curricula', 'STEM OPT opportunities', 'Diverse campus choices'],
    href: '/study/usa',
    cta: 'Explore USA',
    featured: false,
  },
  {
    pin: 'Toronto',
    country: 'Canada',
    label: 'Study',
    description: 'Universities and colleges across technology, business, sciences and healthcare in Canada.',
    bullets: ['Universities & colleges', 'Recognised credentials', 'Co-op work terms', 'Post-study planning'],
    href: '/study/canada',
    cta: 'Explore Canada',
    featured: false,
  },
  {
    pin: 'Sydney',
    country: 'Australia',
    label: 'Study',
    description: 'Research universities and professionally oriented degree programs in Australia.',
    bullets: ['Group of Eight & more', 'Industry-led courses', 'Global qualifications', 'Student visa standards'],
    href: '/study/australia',
    cta: 'Explore Australia',
    featured: false,
  },
];

export function GlobeExplorerSection() {
  const destinations = DESTINATIONS;
  const [selected, setSelected] = useState(destinations[0].pin);
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const rawIndex = destinations.findIndex((d) => d.pin === selected);
  const index = rawIndex >= 0 ? rawIndex : 0;
  const current = destinations[index];
  const pinMeta = GLOBE_PINS.find((p) => p.name === current.pin);

  // Keep the selected card centred in the rail without scrolling the page
  useEffect(() => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>(`[data-pin="${selected}"]`);
    if (!rail || !card) return;
    const left = card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2;
    rail.scrollTo({ left: Math.max(0, left), behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [selected, reduceMotion]);

  const step = (dir: 1 | -1) => {
    const currentIndex = destinations.findIndex((d) => d.pin === selected);
    const validIndex = currentIndex >= 0 ? currentIndex : 0;
    const next = (validIndex + dir + destinations.length) % destinations.length;
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
                <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(163,62,17,0.22)_0%,rgba(163,62,17,0)_70%)] blur-2xl" />
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
                  className="relative z-20 shrink-0 h-11 w-11 sm:h-12 sm:w-12 border border-white/25 bg-black/70 backdrop-blur-md text-white hover:border-[#A33E11] hover:text-[#FC7F4E] active:border-[#A33E11] active:text-[#FC7F4E] transition-colors flex items-center justify-center active:scale-95 shadow-md touch-manipulation cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>

                <div
                  ref={railRef}
                  role="radiogroup"
                  aria-label="Destinations"
                  onKeyDown={onKeyDown}
                  className="relative flex-1 min-w-0 flex gap-2.5 sm:gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth py-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                        onClick={() => {
                          if (active) {
                            window.location.href = d.href;
                          } else {
                            setSelected(d.pin);
                          }
                        }}
                        title={active ? `Click to open ${d.country}` : `Select ${d.country}`}
                        className={`snap-center shrink-0 w-[160px] sm:w-[205px] text-left px-3.5 sm:px-4 py-3 border transition-colors select-none cursor-pointer ${
                          active
                            ? 'bg-[#A33E11] border-[#A33E11] text-white shadow-[0_4px_16px_rgba(163,62,17,0.35)]'
                            : 'bg-black/50 border-white/20 text-white hover:border-[#A33E11] hover:bg-black/70'
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
                            country={d.country.includes('Germany') ? 'Germany' : d.country}
                            width={26}
                            height={18}
                            className="w-[24px] h-[16px] sm:w-[26px] sm:h-[18px] rounded-[2px] border border-[#A33E11] object-cover flex-shrink-0 shadow-sm"
                            loading="lazy"
                          />
                          <span className="font-serif text-sm sm:text-base font-bold leading-tight truncate">
                            {d.country}
                          </span>
                          {active && (
                            <span className="ml-auto text-[10px] text-white underline font-sans shrink-0 font-medium">
                              View →
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next destination"
                  className="relative z-20 shrink-0 h-11 w-11 sm:h-12 sm:w-12 border border-white/25 bg-black/70 backdrop-blur-md text-white hover:border-[#A33E11] hover:text-[#FC7F4E] active:border-[#A33E11] active:text-[#FC7F4E] transition-colors flex items-center justify-center active:scale-95 shadow-md touch-manipulation cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-5 min-h-[22rem] pb-16 sm:pb-0" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.pin}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-xs uppercase tracking-widest text-[#FC7F4E] font-medium">
                    {current.featured ? 'Featured pathway' : 'Other destination'}
                    {pinMeta ? ` · ${pinMeta.name}` : ''}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1] mt-3 mb-6 flex items-center gap-3">
                    <CountryFlag
                      country={current.country}
                      width={38}
                      height={26}
                      className="w-[32px] h-[22px] sm:w-[38px] sm:h-[26px] rounded-[2px] border border-[#A33E11] object-cover flex-shrink-0 shadow-md"
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
                    className="btn-shine relative z-30 inline-flex items-center gap-2 bg-[#A33E11] hover:bg-[#85320D] text-white px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer group shadow-lg active:scale-95"
                  >
                    <span>{current.cta}</span>
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
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
