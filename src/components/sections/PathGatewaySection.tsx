'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Coins,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { whatsappLink } from '@/lib/contact';
import { countryHref } from '@/content/subpages';

interface CountryShowcase {
  id: string;
  name: string;
  tagline: string;
  kind: 'study' | 'work';
  badge: string;
  headlineAccent: string;
  headlineRest: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  programs: { title: string; subtitle: string }[];
  stats: { value: string; label: string }[];
}

const COUNTRIES: CountryShowcase[] = [
  {
    id: 'korea',
    name: 'South Korea',
    tagline: 'Featured Study Destination',
    kind: 'study',
    badge: 'Top Asian Tech & Innovation Hub',
    headlineAccent: 'South Korea:',
    headlineRest: 'English-Taught Degrees & Korean Immersion',
    description:
      'Study at world-renowned research institutions in Seoul and Busan with generous government scholarships and seamless D-10 post-graduation career pathways.',
    image: '/images/generated/korea-gateway.jpg',
    alt: 'International students collaborating on modern university campus in Seoul',
    href: '/study-in-south-korea',
    programs: [
      { title: "Bachelor's Degrees", subtitle: '4 Years · 100% English options' },
      { title: "Master's & PhD", subtitle: 'Full lab funding & faculty stipends' },
      { title: 'Korean Language', subtitle: '10-week terms to 1 year (D-4 Visa)' },
    ],
    stats: [
      { value: '98.4%', label: 'Visa approval track record' },
      { value: '2 Years', label: 'Post-study D-10 work visa' },
      { value: '30%–100%', label: 'Tuition merit scholarships' },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    tagline: 'Healthcare Careers & Study',
    kind: 'work',
    badge: 'Fast-Track Professional Settlement',
    headlineAccent: 'Germany:',
    headlineRest: 'Structured Healthcare Careers for Nurses & Physios',
    description:
      'Direct recruitment and qualification recognition for nursing and physiotherapy professionals, with funded language prep, guaranteed employment, and EU Blue Card pathways.',
    image: '/images/generated/germany-healthcare.jpg',
    alt: 'Healthcare professionals collaborating in a modern German hospital',
    href: '/work-in-germany',
    programs: [
      { title: 'Registered Nurses', subtitle: 'Hospitals & clinics across Germany' },
      { title: 'Physiotherapists', subtitle: 'Rehab centers & private practices' },
      { title: 'B1–B2 German Prep', subtitle: 'In-house medical terminology coaching' },
    ],
    stats: [
      { value: '€38k–€55k', label: 'Starting annual clinical salary' },
      { value: '0 Tuition', label: 'German public university tracks' },
      { value: '21 Months', label: 'Fast-track permanent residency (PR)' },
    ],
  },
  {
    id: 'uae',
    name: 'UAE & Dubai',
    tagline: 'Multi-Industry Careers',
    kind: 'work',
    badge: 'Tax-Free Career Hub',
    headlineAccent: 'UAE:',
    headlineRest: 'Executive Careers in Dubai & Abu Dhabi',
    description:
      'Global career opportunities across hospitality, healthcare, IT, engineering, and construction within the dynamic economies of Dubai and the UAE.',
    image: '/images/generated/uae-careers.jpg',
    alt: 'International professionals in Dubai overlooking cityscape',
    href: '/work-in-uae',
    programs: [
      { title: 'Healthcare & Clinical', subtitle: 'DHA / MOH / DOH licensing assistance' },
      { title: 'Hospitality & Hotels', subtitle: 'Luxury resort & executive roles' },
      { title: 'Engineering & Tech', subtitle: 'Mega-infrastructure & technical roles' },
    ],
    stats: [
      { value: '0% Tax', label: 'Tax-free professional earnings' },
      { value: '10–14 Days', label: 'Fast-track employment visa' },
      { value: 'Golden Visa', label: 'Multi-year residency for professionals' },
    ],
  },
  {
    id: 'japan',
    name: 'Japan',
    tagline: 'Technology & Robotics',
    kind: 'study',
    badge: 'Global Innovation Leader',
    headlineAccent: 'Japan:',
    headlineRest: 'Robotics, Design & High-Tech Degrees',
    description:
      'Study in one of the safest, most technologically advanced nations in the world. Choose from English-taught undergraduate degrees or intensive Japanese language pathways.',
    image: '/images/destinations/japan-campus.jpg',
    alt: 'Historic and modern campus gardens in Tokyo, Japan',
    href: '/other-destinations/japan',
    programs: [
      { title: 'Engineering & Robotics', subtitle: 'Kyoto, Tokyo, and Osaka universities' },
      { title: 'Game Design & Media', subtitle: 'Pioneering digital entertainment tracks' },
      { title: 'MEXT Scholarships', subtitle: 'Government tuition fee waivers' },
    ],
    stats: [
      { value: '28 Hrs/Wk', label: 'Legal part-time work allowance' },
      { value: 'Apr & Oct', label: 'Major academic intakes' },
      { value: 'Top 50', label: 'World-ranked engineering universities' },
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    tagline: 'Russell Group Excellence',
    kind: 'study',
    badge: 'Historic Academic Pedigree',
    headlineAccent: 'United Kingdom:',
    headlineRest: '1-Year Master’s & 2-Year Graduate Visa',
    description:
      'Accelerate your degree with 1-year master’s tracks and 3-year bachelor’s degrees, followed by 2 years of post-study work authorization across the UK.',
    image: '/images/destinations/uk-campus.jpg',
    alt: 'Historic university campus grounds in the United Kingdom',
    href: '/other-destinations/united-kingdom',
    programs: [
      { title: 'Business & Finance', subtitle: 'London & regional economic hubs' },
      { title: 'Data Science & AI', subtitle: 'Cutting-edge computational science' },
      { title: 'Healthcare Management', subtitle: 'NHS and global health consulting' },
    ],
    stats: [
      { value: '2 Years', label: 'Graduate post-study work visa' },
      { value: '1 Year', label: 'Fast-track intensive master’s duration' },
      { value: 'Sept & Jan', label: 'Primary UK academic intakes' },
    ],
  },
  {
    id: 'usa',
    name: 'United States',
    tagline: 'STEM & Tech Leadership',
    kind: 'study',
    badge: 'Silicon Valley & Global R&D',
    headlineAccent: 'United States:',
    headlineRest: '3-Year STEM OPT & Ivy-Tier Research',
    description:
      'Unlock the world’s largest innovation ecosystem. Gain up to 3 years of OPT work authorization for STEM degree holders with direct industry placements.',
    image: '/images/destinations/usa-campus.jpg',
    alt: 'Sunlit collegiate campus quad in the United States',
    href: '/other-destinations/united-states',
    programs: [
      { title: 'Computer Science & AI', subtitle: 'Direct links to Silicon Valley recruiters' },
      { title: 'Fintech & Analytics', subtitle: 'Top Wall Street & consulting programs' },
      { title: 'Biomedical & Biotech', subtitle: 'Premier lab stipends and research grants' },
    ],
    stats: [
      { value: '3 Years', label: 'STEM OPT post-study work extension' },
      { value: 'F-1 Visa', label: 'Comprehensive embassy interview prep' },
      { value: 'Top Tier', label: 'Highest starting salary benchmarks' },
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    tagline: 'Asian Financial Capital',
    kind: 'study',
    badge: 'Global Financial Hub',
    headlineAccent: 'Singapore:',
    headlineRest: 'World-Ranked Asian Business & Technology',
    description:
      'Study at the crossroads of East and West in the world’s safest, most connected metropolis with premier programs in FinTech, logistics, and global management.',
    image: '/images/destinations/singapore-campus.jpg',
    alt: 'Modern architectural campus buildings in Singapore',
    href: '/other-destinations/singapore',
    programs: [
      { title: 'International Business', subtitle: 'Global MNC headquarters hub' },
      { title: 'Fintech & Supply Chain', subtitle: 'World leader in maritime & digital trade' },
      { title: 'Hospitality Management', subtitle: 'World-class luxury management' },
    ],
    stats: [
      { value: 'Top 15', label: 'QS World University Rankings' },
      { value: 'English', label: 'Official language of instruction' },
      { value: '100% Safe', label: 'Consistently ranked safest global city' },
    ],
  },
];

export function PathGatewaySection() {
  const [selectedId, setSelectedId] = useState('korea');
  const { openCallback } = useCallbackModal();
  const activeCountry = COUNTRIES.find((c) => c.id === selectedId) ?? COUNTRIES[0];

  return (
    <section id="paths" className="py-16 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Explore study and work pathways abroad">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          compact
          eyebrow="Global Opportunities"
          headline="Do you want to study abroad or build a career?"
          description="Explore our primary destination corridors. Click any country to reveal dedicated program tracks, post-study work permits, and visa details."
        />

        {/* Mobile Horizontal Tabs Switcher with Underline */}
        <div className="lg:hidden mb-6 -mx-6 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 border-b border-[#E6DDCC] pb-1 min-w-max">
            {COUNTRIES.map((c) => {
              const active = c.id === selectedId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedId(c.id)}
                  className={`relative px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    active ? 'text-[#1D3FFF]' : 'text-[#57514A] hover:text-[#2A2A2A]'
                  }`}
                >
                  <span>{c.name}</span>
                  {active && (
                    <motion.span
                      layoutId="gateway-mobile-underline"
                      className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-[#1D3FFF]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout: Left Vertical Strips + Right Showcase Card & Stat Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Vertical Country Strips (hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col space-y-2">
            {COUNTRIES.map((c) => {
              const active = c.id === selectedId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedId(c.id)}
                  className={`group relative text-left p-4 border transition-all cursor-pointer ${
                    active
                      ? 'border-[#1D3FFF] bg-[#FAF8F5] shadow-sm'
                      : 'border-[#E6DDCC] bg-white hover:border-[#1D3FFF]/60 hover:bg-[#FAF8F5]/50'
                  }`}
                >
                  {/* Active Indicator Accent Bar */}
                  {active && (
                    <motion.span
                      layoutId="gateway-desktop-indicator"
                      className="absolute left-0 inset-y-0 w-1 bg-[#1D3FFF]"
                    />
                  )}
                  <div className="pl-2">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-[#2A2A2A] group-hover:text-[#1D3FFF] transition-colors">
                        {c.name}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 border ${
                          active
                            ? 'bg-[#1D3FFF]/10 border-[#1D3FFF]/20 text-[#1D3FFF]'
                            : 'bg-white border-[#E6DDCC] text-[#57514A]'
                        }`}
                      >
                        {c.kind === 'study' ? 'Study' : 'Work'}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#57514A] truncate">{c.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Showcase Hero Card with Overlaid Program Cards and Stats Strip */}
          <div className="lg:col-span-8 flex flex-col justify-between border border-[#E6DDCC] bg-white overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCountry.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex-1 flex flex-col justify-between"
              >
                {/* Hero Banner with Dark Contrast Gradient & Two-Tone Heading */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#2A2A2A]">
                  <Image
                    src={activeCountry.image}
                    alt={activeCountry.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 800px, 95vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
                  <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end text-white">
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#D1A95F] font-semibold mb-1.5">
                      <Sparkles size={12} />
                      {activeCountry.badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                      <span className="text-[#1D3FFF] mr-2">{activeCountry.headlineAccent}</span>
                      {activeCountry.headlineRest}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-7 space-y-6">
                  <p className="text-sm sm:text-base text-[#57514A] leading-relaxed">
                    {activeCountry.description}
                  </p>

                  {/* Overlaid Program Cards */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2A2A2A] mb-3">
                      Popular Academic &amp; Career Tracks:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeCountry.programs.map((prog) => (
                        <div
                          key={prog.title}
                          className="border border-[#E6DDCC] bg-[#FAF8F5] p-3.5 hover:border-[#1D3FFF] transition-colors"
                        >
                          <p className="font-serif text-sm font-bold text-[#2A2A2A] leading-snug">
                            {prog.title}
                          </p>
                          <p className="mt-1 text-[11px] text-[#57514A]">{prog.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stat Strip Underneath (Reference Pattern d) */}
                  <div className="pt-4 border-t border-[#E6DDCC]">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-[#FAF8F5] border border-[#E6DDCC] p-4 text-center">
                      {activeCountry.stats.map((st) => (
                        <div key={st.label} className="space-y-1">
                          <p className="font-serif text-lg sm:text-2xl font-bold text-[#1D3FFF] leading-none">
                            {st.value}
                          </p>
                          <p className="text-[10px] sm:text-xs text-[#57514A] leading-tight">
                            {st.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      href={activeCountry.href}
                      className="btn-shine inline-flex items-center gap-2 bg-[#1D3FFF] hover:bg-[#1532D4] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                    >
                      <span>Explore {activeCountry.name}</span>
                      <ArrowRight size={14} />
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        openCallback({
                          interest:
                            activeCountry.kind === 'study'
                              ? `Study in ${activeCountry.name}`
                              : `Work in ${activeCountry.name}`,
                          source: `gateway:${activeCountry.id}`,
                        })
                      }
                      className="border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                    >
                      Book Free Counselling
                    </button>
                    <a
                      href={whatsappLink(
                        `Hi 211 OVERSEAS, I am interested in exploring opportunities in ${activeCountry.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#E6DDCC] text-[#2A2A2A] hover:border-[#25D366] hover:text-[#25D366] px-4 py-3 text-xs uppercase tracking-widest font-semibold transition-colors"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
