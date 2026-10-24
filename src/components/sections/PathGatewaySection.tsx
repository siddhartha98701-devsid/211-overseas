'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { CountryFlag } from '@/components/ui/CountryFlag';
import { useCallbackModal } from '@/components/lead/CallbackProvider';

interface FloatingProgram {
  university: string;
  universityImage: string;
  logoMonogram: string;
  programTitle: string;
  tag: string;
  degree: string;
  duration: string;
}

interface CountryStat {
  value: string;
  label: string;
}

interface CountryShowcase {
  id: string;
  name: string;
  heroImage: string;
  stripImage: string;
  alt: string;
  href: string;
  floatingPrograms: [FloatingProgram, FloatingProgram];
  stats: [CountryStat, CountryStat, CountryStat, CountryStat];
}

const COUNTRIES: CountryShowcase[] = [
  {
    id: 'usa',
    name: 'United States',
    heroImage: '/images/destinations/usa-nyc-campus.jpg',
    stripImage: '/images/destinations/usa-campus.jpg',
    alt: 'Statue of Liberty and Manhattan skyline in New York City, USA',
    href: '/other-destinations/united-states',
    floatingPrograms: [
      {
        university: 'Northeastern University',
        universityImage: '/images/destinations/usa-campus.jpg',
        logoMonogram: 'N',
        programTitle: 'MPS in Applied AI',
        tag: '#1 for Co-op (USNWR 2025)',
        degree: 'Master’s Degree',
        duration: '23 Months',
      },
      {
        university: 'Northeastern University',
        universityImage: '/images/destinations/usa-tech-hub.jpg',
        logoMonogram: 'N',
        programTitle: 'BS in Applied AI',
        tag: '#46 in USA (USNWR 2026)',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
      },
    ],
    stats: [
      { value: '98%', label: 'Admit Rate' },
      { value: '1-3 Years', label: 'Post-Study Visa' },
      { value: '₹50L+', label: 'Scholarships' },
      { value: '3', label: 'Available Intakes' },
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    heroImage: '/images/destinations/uk-london-city.jpg',
    stripImage: '/images/destinations/uk-campus.jpg',
    alt: 'Historic city of London with Tower Bridge and modern skyline, UK',
    href: '/other-destinations/united-kingdom',
    floatingPrograms: [
      {
        university: 'University of Birmingham',
        universityImage: '/images/destinations/uk-oxford-library.jpg',
        logoMonogram: 'UoB',
        programTitle: 'MSc Data Science & AI',
        tag: 'Russell Group Global Top 100',
        degree: 'Master’s Degree',
        duration: '12 Months',
      },
      {
        university: 'Queen Mary University of London',
        universityImage: '/images/destinations/uk-cambridge.jpg',
        logoMonogram: 'QMUL',
        programTitle: 'BSc Computer Science & AI',
        tag: 'Top 20 UK Research Leader',
        degree: 'Bachelor’s Degree',
        duration: '36 Months',
      },
    ],
    stats: [
      { value: '97%', label: 'Admit Rate' },
      { value: '2 Years', label: 'Graduate Route Visa' },
      { value: '£10k+', label: 'Merit Awards' },
      { value: '2', label: 'Available Intakes' },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    heroImage: '/images/web/germany-wide.webp',
    stripImage: '/images/germany.jpg',
    alt: 'German university campus and research labs in Berlin',
    href: '/work-in-germany',
    floatingPrograms: [
      {
        university: 'IU International University Berlin',
        universityImage: '/images/generated/germany-healthcare.jpg',
        logoMonogram: 'IU',
        programTitle: 'MSc Healthcare & Clinical Tech',
        tag: 'English Track · Fast Placement',
        degree: 'Master’s Degree',
        duration: '18 Months',
      },
      {
        university: 'Technical University Munich Partner',
        universityImage: '/images/generated/germany-physio.jpg',
        logoMonogram: 'TUM',
        programTitle: 'BSc Mechanical & Automotive Eng.',
        tag: '#1 Ranked University in Germany',
        degree: 'Bachelor’s Degree',
        duration: '36 Months',
      },
    ],
    stats: [
      { value: '€0', label: 'Public Tuition Fees' },
      { value: '18 Months', label: 'Post-Study Job Visa' },
      { value: '21 Months', label: 'Fast-Track PR' },
      { value: '2', label: 'Available Intakes' },
    ],
  },
  {
    id: 'korea',
    name: 'South Korea',
    heroImage: '/images/korea/seoul-skyline.jpg',
    stripImage: '/images/web/seoul-tower.webp',
    alt: 'Seoul city panorama with N Seoul Tower and modern university campuses',
    href: '/study-in-south-korea',
    floatingPrograms: [
      {
        university: 'Seoul National University (SNU)',
        universityImage: '/images/universities/snu.jpg',
        logoMonogram: 'SNU',
        programTitle: 'Global Bachelor in AI & Data Science',
        tag: '#1 in South Korea · Top 40 QS',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
      },
      {
        university: 'KAIST (Korea Advanced Institute of ST)',
        universityImage: '/images/universities/kaist.jpg',
        logoMonogram: 'KAIST',
        programTitle: 'MS in Robotics & Autonomous Systems',
        tag: 'Full Tuition + Monthly Stipend',
        degree: 'Master’s Degree',
        duration: '24 Months',
      },
    ],
    stats: [
      { value: '98.4%', label: 'Visa Approval Rate' },
      { value: '2 Years', label: 'D-10 Post-Study Visa' },
      { value: '100%', label: 'GKS & Merit Grants' },
      { value: '2', label: 'Available Intakes' },
    ],
  },
  {
    id: 'japan',
    name: 'Japan',
    heroImage: '/images/destinations/japan-tokyo-city.jpg',
    stripImage: '/images/destinations/japan-campus.jpg',
    alt: 'Tokyo illuminated skyline and campus architecture in Japan',
    href: '/other-destinations/japan',
    floatingPrograms: [
      {
        university: 'Waseda University Tokyo',
        universityImage: '/images/destinations/japan-tech-lab.jpg',
        logoMonogram: 'WU',
        programTitle: 'Global Software & Systems Eng.',
        tag: 'Top Private Tech Hub in Japan',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
      },
      {
        university: 'Kyoto University Global Track',
        universityImage: '/images/destinations/japan-culture.jpg',
        logoMonogram: 'KU',
        programTitle: 'MSc Robotics & Applied Intelligence',
        tag: 'Top 35 QS · 19 Nobel Laureates',
        degree: 'Master’s Degree',
        duration: '24 Months',
      },
    ],
    stats: [
      { value: '96%', label: 'Graduate Employment' },
      { value: '28 Hrs/Wk', label: 'Student Work Rights' },
      { value: 'MEXT', label: 'Full Govt Scholarships' },
      { value: '2', label: 'Available Intakes' },
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    heroImage: '/images/destinations/singapore-marina-bay.jpg',
    stripImage: '/images/destinations/singapore-campus.jpg',
    alt: 'Marina Bay and modern financial towers in Singapore',
    href: '/other-destinations/singapore',
    floatingPrograms: [
      {
        university: 'National University of Singapore (NUS)',
        universityImage: '/images/destinations/singapore-fintech-hub.jpg',
        logoMonogram: 'NUS',
        programTitle: 'Master of Computing in Applied AI',
        tag: '#8 in the World (QS 2025)',
        degree: 'Master’s Degree',
        duration: '18 Months',
      },
      {
        university: 'Singapore Management University (SMU)',
        universityImage: '/images/destinations/singapore-gardens.jpg',
        logoMonogram: 'SMU',
        programTitle: 'BSc Information Systems & FinTech',
        tag: 'Triple Accredited Business School',
        degree: 'Bachelor’s Degree',
        duration: '36 Months',
      },
    ],
    stats: [
      { value: 'Top 10', label: 'Global University Rank' },
      { value: '1 Year', label: 'LTVP Post-Study Pass' },
      { value: 'SGD $60k+', label: 'Starting Salary' },
      { value: '2', label: 'Available Intakes' },
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    heroImage: '/images/destinations/canada-toronto-skyline.jpg',
    stripImage: '/images/destinations/canada-ubc-campus.jpg',
    alt: 'Toronto skyline and coastal university campuses in Canada',
    href: '/other-destinations',
    floatingPrograms: [
      {
        university: 'University of British Columbia (UBC)',
        universityImage: '/images/destinations/canada-campus.jpg',
        logoMonogram: 'UBC',
        programTitle: 'Master of Data Science & AI',
        tag: 'Top 35 Global · Tech Corridor',
        degree: 'Master’s Degree',
        duration: '12 Months',
      },
      {
        university: 'York University (Toronto)',
        universityImage: '/images/destinations/canada-montreal.jpg',
        logoMonogram: 'YU',
        programTitle: 'BBA International Business',
        tag: '#1 Business Program in Canada',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
      },
    ],
    stats: [
      { value: '97%', label: 'Admit Rate' },
      { value: '3 Years', label: 'PGWP Post-Grad Visa' },
      { value: 'CAD $25k+', label: 'Entrance Grants' },
      { value: '3', label: 'Available Intakes' },
    ],
  },
  {
    id: 'australia',
    name: 'Australia',
    heroImage: '/images/destinations/australia-sydney-harbour.jpg',
    stripImage: '/images/destinations/australia-campus.jpg',
    alt: 'Sydney Harbour and sandstone university quadrangles in Australia',
    href: '/other-destinations',
    floatingPrograms: [
      {
        university: 'University of Melbourne',
        universityImage: '/images/destinations/australia-melbourne-quad.jpg',
        logoMonogram: 'UoM',
        programTitle: 'Master of Information Technology',
        tag: 'Group of Eight (Go8) #1 in Aus',
        degree: 'Master’s Degree',
        duration: '24 Months',
      },
      {
        university: 'University of Sydney',
        universityImage: '/images/destinations/australia-student-life.jpg',
        logoMonogram: 'USYD',
        programTitle: 'BEng Honours (Robotics & AI)',
        tag: 'Top 20 Global University (QS)',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
      },
    ],
    stats: [
      { value: '98%', label: 'Admit Rate' },
      { value: '2-4 Years', label: 'Post-Study Work Visa' },
      { value: 'AUD $20k+', label: 'International Grants' },
      { value: '2', label: 'Available Intakes' },
    ],
  },
  {
    id: 'uae',
    name: 'UAE & Dubai',
    heroImage: '/images/web/uae-wide.webp',
    stripImage: '/images/generated/uae-careers.jpg',
    alt: 'Modern skyscrapers and university centers in Dubai, UAE',
    href: '/work-in-uae',
    floatingPrograms: [
      {
        university: 'University of Birmingham Dubai',
        universityImage: '/images/generated/uae-sector-engineering.jpg',
        logoMonogram: 'UoBD',
        programTitle: 'MSc Artificial Intelligence & Data',
        tag: 'Top 100 World Campus in Dubai',
        degree: 'Master’s Degree',
        duration: '12 Months',
      },
      {
        university: 'Middlesex University Dubai',
        universityImage: '/images/generated/uae-sector-hospitality.jpg',
        logoMonogram: 'MDX',
        programTitle: 'BSc Business Information Systems',
        tag: '5-Star KHDA Rated University',
        degree: 'Bachelor’s Degree',
        duration: '36 Months',
      },
    ],
    stats: [
      { value: '0% Tax', label: 'Earnings & Salaries' },
      { value: '10-14 Days', label: 'Fast Visa Processing' },
      { value: '10-Year', label: 'Golden Visa Eligibility' },
      { value: 'Rolling', label: 'Available Intakes' },
    ],
  },
];

export function PathGatewaySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openCallback } = useCallbackModal();
  const activeCountry = COUNTRIES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + COUNTRIES.length) % COUNTRIES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % COUNTRIES.length);
  };

  return (
    <section
      id="paths"
      className="py-16 md:py-24 border-b border-[#E6DDCC] scroll-mt-24 bg-[#FAF8F5]/60"
      aria-label="Explore study and work pathways abroad"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header (Pattern a: Two-tone heading + explore link) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1D3FFF] mb-2">
              <Sparkles size={14} />
              <span>Global Opportunities</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A2A2A] leading-tight">
              Study in <span className="text-[#1D3FFF]">{activeCountry.name}</span> for Indian Students
            </h2>
          </div>
          <Link
            href={activeCountry.href}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D3FFF] hover:text-[#1532D4] transition-colors self-start md:self-end cursor-pointer"
          >
            <span>Explore programs</span>
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Desktop View (>= lg): Left Vertical Tall Strips + Center/Right Active Hero Card (UpGrad Reference Pattern d) */}
        <div className="hidden lg:flex gap-3.5 items-stretch h-[540px]">
          {/* Left Inactive Country Strips (Accordion Style) */}
          <div className="flex gap-2.5 shrink-0 items-stretch max-w-[340px] xl:max-w-[400px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5">
            {COUNTRIES.map((c, idx) => {
              if (idx === currentIndex) return null;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className="w-20 xl:w-24 hover:w-28 xl:hover:w-32 h-full rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-300 ease-out shrink-0 shadow-sm border border-black/5"
                  aria-label={`View ${c.name}`}
                >
                  <Image
                    src={c.stripImage}
                    alt={c.name}
                    fill
                    sizes="150px"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/75 transition-colors" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 p-1 bg-white/20 backdrop-blur-xs rounded-sm border border-white/20">
                    <CountryFlag country={c.name} width={22} height={15} className="rounded-xs object-cover" />
                  </div>
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest text-white font-bold text-xs xl:text-sm whitespace-nowrap drop-shadow-md select-none">
                    {c.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Country Hero Card with Counter, Arrows, and Overlaid Floating Program Cards */}
          <div className="flex-1 min-w-0 h-full rounded-3xl overflow-hidden relative shadow-xl border border-black/5 bg-[#1F242F]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCountry.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeCountry.heroImage}
                  alt={activeCountry.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
              </motion.div>
            </AnimatePresence>

            {/* Bottom-Left Controls: Counter + Circular Navigation Arrows */}
            <div className="absolute bottom-7 left-7 z-20 flex flex-col gap-3">
              <div className="flex items-baseline text-white drop-shadow-md">
                <span className="text-3xl xl:text-4xl font-bold tracking-tight">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-xl xl:text-2xl font-light text-white/80 ml-0.5">
                  /{String(COUNTRIES.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full bg-white text-[#2A2A2A] shadow-md flex items-center justify-center hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Previous country"
                >
                  <ChevronLeft size={20} className="stroke-[2.5]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full bg-white text-[#2A2A2A] shadow-md flex items-center justify-center hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Next country"
                >
                  <ChevronRight size={20} className="stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Overlaid Floating Program Cards (Right Half) */}
            <div className="absolute right-6 top-6 bottom-6 z-20 flex gap-4 items-stretch">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`programs-${activeCountry.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4 items-stretch h-full"
                >
                  {activeCountry.floatingPrograms.map((prog) => (
                    <div
                      key={prog.programTitle}
                      className="w-[260px] xl:w-[280px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between border border-black/5 transition-transform duration-300 hover:-translate-y-1"
                    >
                      {/* University Campus Image + Floating Monogram Badge */}
                      <div className="h-32 xl:h-36 relative overflow-hidden bg-gray-100 shrink-0">
                        <Image
                          src={prog.universityImage}
                          alt={prog.university}
                          fill
                          sizes="300px"
                          className="object-cover"
                        />
                        <div className="absolute right-3 -bottom-4 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center font-bold text-xs text-[#1D3FFF] z-10">
                          {prog.logoMonogram}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-4 pt-3 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 truncate pr-8">
                            <CountryFlag country={activeCountry.name} width={18} height={12} className="rounded-xs object-cover" />
                            <span className="truncate">{prog.university}</span>
                          </div>

                          <h4 className="font-serif text-sm font-bold text-[#2A2A2A] leading-snug line-clamp-1 mt-1.5">
                            {prog.programTitle}
                          </h4>

                          <span className="inline-block mt-2 text-[10px] xl:text-[11px] font-semibold bg-[#EBF7FF] text-[#0070BA] px-2.5 py-0.5 rounded-full border border-[#0070BA]/20">
                            {prog.tag}
                          </span>

                          <div className="mt-3 space-y-1 text-xs text-[#57514A]">
                            <div className="flex items-center gap-1.5">
                              <GraduationCap size={14} className="text-[#1D3FFF]" />
                              <span>{prog.degree}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-[#57514A]" />
                              <span>{prog.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* View Program CTA Button */}
                        <button
                          type="button"
                          onClick={() =>
                            openCallback({
                              interest: `Study in ${activeCountry.name} - ${prog.programTitle}`,
                              source: `gateway:${activeCountry.id}`,
                            })
                          }
                          className="mt-3 w-full bg-[#1D3FFF] hover:bg-[#1532D4] text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl text-center transition-colors cursor-pointer shadow-xs active:scale-98"
                        >
                          View Program
                        </button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile View (< lg) */}
        <div className="lg:hidden space-y-4">
          {/* Horizontal Pill Tabs Switcher */}
          <div className="-mx-6 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-2 pb-1 min-w-max">
              {COUNTRIES.map((c, idx) => {
                const active = idx === currentIndex;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                      active
                        ? 'bg-[#1D3FFF] text-white shadow-md'
                        : 'bg-white text-[#2A2A2A] border border-[#E6DDCC]'
                    }`}
                  >
                    <CountryFlag country={c.name} width={18} height={13} className="rounded-xs object-cover" />
                    <span>{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hero Banner with Counter and Arrows */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md bg-[#1F242F]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCountry.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeCountry.heroImage}
                  alt={activeCountry.alt}
                  fill
                  priority
                  sizes="95vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
              </motion.div>
            </AnimatePresence>

            {/* Bottom-Left Counter + Navigation Arrows */}
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
              <div className="text-white font-bold text-2xl drop-shadow-md">
                {String(currentIndex + 1).padStart(2, '0')}
                <span className="text-base font-light text-white/80">/{String(COUNTRIES.length).padStart(2, '0')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-white text-[#2A2A2A] shadow-md flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer"
                  aria-label="Previous country"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-white text-[#2A2A2A] shadow-md flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer"
                  aria-label="Next country"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Floating Program Cards (Swipeable) */}
          <div className="-mx-6 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
            <div className="flex gap-3 pb-2 min-w-max">
              {activeCountry.floatingPrograms.map((prog) => (
                <div
                  key={prog.programTitle}
                  className="w-[280px] bg-white rounded-2xl shadow-md overflow-hidden border border-[#E6DDCC] snap-start flex flex-col justify-between"
                >
                  <div className="h-32 relative overflow-hidden bg-gray-100">
                    <Image
                      src={prog.universityImage}
                      alt={prog.university}
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                    <div className="absolute right-3 -bottom-4 w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center font-bold text-xs text-[#1D3FFF] z-10">
                      {prog.logoMonogram}
                    </div>
                  </div>
                  <div className="p-4 pt-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 truncate pr-8">
                        <CountryFlag country={activeCountry.name} width={18} height={12} className="rounded-xs object-cover" />
                        <span className="truncate">{prog.university}</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#2A2A2A] leading-snug line-clamp-1 mt-1">
                        {prog.programTitle}
                      </h4>
                      <span className="inline-block mt-2 text-[10px] font-semibold bg-[#EBF7FF] text-[#0070BA] px-2.5 py-0.5 rounded-full border border-[#0070BA]/20">
                        {prog.tag}
                      </span>
                      <div className="mt-3 space-y-1 text-xs text-[#57514A]">
                        <div className="flex items-center gap-1.5">
                          <GraduationCap size={14} className="text-[#1D3FFF]" />
                          <span>{prog.degree}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-[#57514A]" />
                          <span>{prog.duration}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        openCallback({
                          interest: `Study in ${activeCountry.name} - ${prog.programTitle}`,
                          source: `gateway:${activeCountry.id}`,
                        })
                      }
                      className="mt-3 w-full bg-[#1D3FFF] hover:bg-[#1532D4] text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl text-center transition-colors cursor-pointer"
                    >
                      View Program
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Metric Stats Strip Underneath (UpGrad Pattern d / Screenshot 2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white border border-[#E6DDCC] rounded-2xl p-6 shadow-xs mt-6">
          {activeCountry.stats.map((st, i) => (
            <div
              key={st.label}
              className={`text-center space-y-1 ${
                i < activeCountry.stats.length - 1 ? 'lg:border-r border-[#E6DDCC]' : ''
              }`}
            >
              <p className="font-serif text-2xl lg:text-3xl font-bold text-[#1D3FFF] leading-none">
                {st.value}
              </p>
              <p className="text-xs lg:text-sm text-[#57514A] font-medium leading-tight">
                {st.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
