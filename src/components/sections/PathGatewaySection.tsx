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
  ChevronRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CountryFlag } from '@/components/ui/CountryFlag';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { whatsappLink } from '@/lib/contact';

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
    alt: 'Students walking in scenic Japanese university courtyard',
    href: '/other-destinations/japan',
    programs: [
      { title: 'Engineering & Robotics', subtitle: 'World-leading R&D laboratories' },
      { title: 'Game Design & Anime', subtitle: 'Direct links to creative industries' },
      { title: 'Language to Degree', subtitle: 'Intensive university pathway courses' },
    ],
    stats: [
      { value: 'Top 30', label: 'Global university rankings' },
      { value: '28 Hrs/Wk', label: 'Part-time student work permit' },
      { value: 'MEXT', label: 'Full government scholarship options' },
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    tagline: 'Russell Group Excellence',
    kind: 'study',
    badge: 'Historic Academic Pedigree',
    headlineAccent: 'United Kingdom:',
    headlineRest: 'Globally Respected Degrees & Graduate Route',
    description:
      'Fast-track 3-year bachelor’s and 1-year master’s programs at prestigious British institutions with a 2-year post-study work visa (Graduate Route).',
    image: '/images/destinations/uk-campus.jpg',
    alt: 'Historic brick university quad in the United Kingdom',
    href: '/other-destinations/united-kingdom',
    programs: [
      { title: '1-Year Master’s', subtitle: 'Cost-effective fast-track graduation' },
      { title: '3-Year Bachelor’s', subtitle: 'Specialized undergraduate honors' },
      { title: 'NHS Health Visas', subtitle: 'Fast-track healthcare career sponsorship' },
    ],
    stats: [
      { value: '1 Year', label: 'Fast-track master’s duration' },
      { value: '2 Years', label: 'Post-study graduate work visa' },
      { value: 'Russell Group', label: 'Leading research universities' },
    ],
  },
  {
    id: 'usa',
    name: 'United States',
    tagline: 'STEM & Tech Leadership',
    kind: 'study',
    badge: 'World’s Leading Higher Ed System',
    headlineAccent: 'United States:',
    headlineRest: 'Ivy League & Tier-1 Research Universities',
    description:
      'The largest and most flexible higher education system in the world. Benefit from 3-year STEM OPT extensions, campus assistantships, and global networking.',
    image: '/images/destinations/usa-campus.jpg',
    alt: 'Lush green Ivy League style university campus in the USA',
    href: '/other-destinations/united-states',
    programs: [
      { title: 'STEM Degrees', subtitle: '3-Year post-study OPT work rights' },
      { title: 'Graduate Assistantships', subtitle: 'Tuition waiver + monthly stipends' },
      { title: 'Silicon Valley Ties', subtitle: 'Direct recruitment pipelines in tech' },
    ],
    stats: [
      { value: '3 Years', label: 'STEM OPT post-study work permit' },
      { value: '4,000+', label: 'Accredited higher ed institutions' },
      { value: 'Fortune 500', label: 'Direct industry recruitment' },
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    tagline: 'Asian Financial Capital',
    kind: 'study',
    badge: 'Global Commerce & Tech Gateway',
    headlineAccent: 'Singapore:',
    headlineRest: 'World Top-15 Universities in English',
    description:
      'Study at Asia’s highest-ranked universities in an ultra-modern, safe, English-speaking global business hub with direct regional employment opportunities.',
    image: '/images/destinations/singapore-campus.jpg',
    alt: 'Modern architectural university building in Singapore',
    href: '/other-destinations/singapore',
    programs: [
      { title: 'Tech & AI Programs', subtitle: 'Ranked top 10 globally in CS' },
      { title: 'Finance & MBA', subtitle: 'Direct access to Asian headquarters' },
      { title: 'Employment Pass', subtitle: 'Merit-based skilled work visas' },
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
    <section id="paths" className="py-16 md:py-24 border-b border-[#E6DDCC] scroll-mt-24 bg-[#FAF8F5]/40" aria-label="Explore study and work pathways abroad">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          compact
          eyebrow="Global Opportunities"
          headline="Do you want to study abroad or build a career?"
          description="Explore our primary destination corridors. Click any country to reveal dedicated program tracks, post-study work permits, and visa details."
        />

        {/* Mobile Horizontal Pill Tabs Switcher (UpGrad Style) */}
        <div className="lg:hidden mb-6 -mx-6 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2.5 pb-2 min-w-max">
            {COUNTRIES.map((c) => {
              const active = c.id === selectedId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedId(c.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                    active
                      ? 'bg-[#1D3FFF] text-white shadow-md'
                      : 'bg-white text-[#2A2A2A] border border-[#E6DDCC] hover:border-[#1D3FFF]/60'
                  }`}
                >
                  <CountryFlag country={c.name} className="h-3.5 w-5 rounded-[2px] object-cover" width={20} height={14} />
                  <span>{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout: Left Vertical Country Strips + Right Showcase Card (UpGrad Reference Pattern d) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Vertical Country Strips (hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col space-y-2.5">
            {COUNTRIES.map((c) => {
              const active = c.id === selectedId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedId(c.id)}
                  className={`group relative text-left p-4 rounded-[4px] border transition-all duration-200 cursor-pointer ${
                    active
                      ? 'border-[#1D3FFF] bg-white shadow-[0_8px_24px_rgba(29,63,255,0.08)] ring-1 ring-[#1D3FFF]/20'
                      : 'border-[#E6DDCC] bg-white hover:border-[#1D3FFF]/50 hover:bg-[#FAF8F5]'
                  }`}
                >
                  {/* Left Active Accent Indicator Bar */}
                  {active && (
                    <motion.span
                      layoutId="gateway-desktop-indicator"
                      className="absolute left-0 inset-y-0 w-1.5 bg-[#1D3FFF] rounded-l-[4px]"
                    />
                  )}
                  <div className="pl-2 flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <CountryFlag
                        country={c.name}
                        className="h-5 w-7 rounded-[2px] object-cover border border-black/10 shrink-0 shadow-xs"
                        width={28}
                        height={20}
                      />
                      <div className="min-w-0">
                        <span className={`font-serif text-base font-bold transition-colors block truncate ${
                          active ? 'text-[#1D3FFF]' : 'text-[#2A2A2A] group-hover:text-[#1D3FFF]'
                        }`}>
                          {c.name}
                        </span>
                        <p className="text-[11px] text-[#57514A] truncate">{c.tagline}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span
                        className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-[2px] border ${
                          c.kind === 'study'
                            ? active
                              ? 'bg-[#1D3FFF] text-white border-[#1D3FFF]'
                              : 'bg-blue-50 text-[#1D3FFF] border-blue-200'
                            : active
                            ? 'bg-[#8A6020] text-white border-[#8A6020]'
                            : 'bg-amber-50 text-[#8A6020] border-amber-200'
                        }`}
                      >
                        {c.kind === 'study' ? 'Study' : 'Work'}
                      </span>
                      <ChevronRight
                        size={15}
                        className={`transition-transform duration-200 ${
                          active ? 'text-[#1D3FFF] translate-x-0.5' : 'text-[#57514A]/40 group-hover:translate-x-0.5 group-hover:text-[#1D3FFF]'
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Showcase Hero Card with Overlaid Program Cards and Stats Strip */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-[4px] border border-[#E6DDCC] bg-white overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCountry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />
                  <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end text-white">
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#D1A95F] font-semibold mb-2">
                      <Sparkles size={13} className="text-[#D1A95F]" />
                      {activeCountry.badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                      <span className="text-[#1D3FFF] mr-2 drop-shadow-sm">{activeCountry.headlineAccent}</span>
                      <span className="text-white drop-shadow-sm">{activeCountry.headlineRest}</span>
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-7 space-y-6">
                  <p className="text-sm sm:text-base text-[#57514A] leading-relaxed">
                    {activeCountry.description}
                  </p>

                  {/* Overlaid Program Cards (UpGrad Pattern b) */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2A2A2A] mb-3 flex items-center gap-1.5">
                      {activeCountry.kind === 'study' ? (
                        <GraduationCap size={15} className="text-[#1D3FFF]" />
                      ) : (
                        <Briefcase size={15} className="text-[#8A6020]" />
                      )}
                      Popular Academic &amp; Career Tracks:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeCountry.programs.map((prog) => (
                        <div
                          key={prog.title}
                          className="border border-[#E6DDCC] bg-[#FAF8F5] p-4 rounded-[3px] transition-all duration-200 hover:border-[#1D3FFF] hover:bg-white hover:shadow-sm group/prog"
                        >
                          <p className="font-serif text-sm font-bold text-[#2A2A2A] leading-snug group-hover/prog:text-[#1D3FFF] transition-colors">
                            {prog.title}
                          </p>
                          <p className="mt-1.5 text-[11px] text-[#57514A] leading-relaxed">{prog.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stat Strip Underneath (UpGrad Pattern d) */}
                  <div className="pt-2">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-[#FAF8F5] border border-[#E6DDCC] p-4 rounded-[3px] text-center">
                      {activeCountry.stats.map((st) => (
                        <div key={st.label} className="space-y-1">
                          <p className="font-serif text-xl sm:text-2xl font-bold text-[#1D3FFF] leading-none">
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
                      className="btn-shine inline-flex items-center gap-2 bg-[#1D3FFF] hover:bg-[#1532D4] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer rounded-[2px]"
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
                      className="border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer rounded-[2px]"
                    >
                      Book Free Counselling
                    </button>
                    <a
                      href={whatsappLink(
                        `Hi 211 OVERSEAS, I am interested in exploring opportunities in ${activeCountry.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#E6DDCC] text-[#2A2A2A] hover:border-[#25D366] hover:text-[#25D366] px-4 py-3 text-xs uppercase tracking-widest font-semibold transition-colors rounded-[2px]"
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
