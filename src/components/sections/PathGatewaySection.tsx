'use client';

import { useState, useRef } from 'react';
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
  description: string;
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
    id: 'korea',
    name: 'South Korea',
    heroImage: '/images/korea/seoul-skyline.jpg',
    stripImage: '/images/web/seoul-tower.webp',
    alt: 'Seoul city panorama with N Seoul Tower and modern university campuses',
    href: '/study/south-korea',
    floatingPrograms: [
      {
        university: 'Seoul National University (SNU)',
        universityImage: '/images/universities/snu.jpg',
        logoMonogram: 'SNU',
        programTitle: 'Global Bachelor in AI & Data Science',
        tag: 'SKY University',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
        description: 'South Korea’s premier computer science faculty offering intensive hands-on lab projects and industry sponsorships.',
      },
      {
        university: 'KAIST (Korea Advanced Institute of ST)',
        universityImage: '/images/universities/kaist.jpg',
        logoMonogram: 'KAIST',
        programTitle: 'MS in Robotics & Autonomous Systems',
        tag: 'Research Excellence',
        degree: 'Master’s Degree',
        duration: '24 Months',
        description: 'World-renowned research institute with 100% scholarship coverage, monthly living stipend, and top corporate ties.',
      },
    ],
    stats: [
      { value: 'D-2 Visa', label: 'Student Route' },
      { value: '2 Years', label: 'D-10 Post-Study Visa' },
      { value: 'GKS / Merit', label: 'Scholarship Routes' },
      { value: '2', label: 'March / September' },
    ],
  },
  {
    id: 'uae',
    name: 'UAE',
    heroImage: '/images/web/uae-wide.webp',
    stripImage: '/images/generated/uae-careers.jpg',
    alt: 'Modern skyscrapers and university centers in Dubai, UAE',
    href: '/study/uae',
    floatingPrograms: [
      {
        university: 'University of Birmingham Dubai',
        universityImage: '/images/generated/uae-sector-engineering.jpg',
        logoMonogram: 'UoBD',
        programTitle: 'MSc Artificial Intelligence & Data',
        tag: 'Branch Campus in Dubai',
        degree: 'Master’s Degree',
        duration: '12 Months',
        description: 'Earn a prestigious UK Russell Group degree at a state-of-the-art campus in Dubai International Academic City.',
      },
      {
        university: 'Middlesex University Dubai',
        universityImage: '/images/generated/uae-sector-hospitality.jpg',
        logoMonogram: 'MDX',
        programTitle: 'BSc Business Information Systems',
        tag: 'KHDA Approved University',
        degree: 'Bachelor’s Degree',
        duration: '36 Months',
        description: 'Industry-partnered IT degree with direct access to multinational corporate recruitment across the UAE.',
      },
    ],
    stats: [
      { value: 'Branch Campuses', label: 'UK & Global Campuses' },
      { value: 'English Medium', label: 'Instruction' },
      { value: 'Tax Free', label: 'Work Opportunities' },
      { value: 'Multiple', label: 'Intakes' },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    heroImage: '/images/web/germany-wide.webp',
    stripImage: '/images/destinations/europe-campus.jpg',
    alt: 'German university campus and landmark historic architecture in Munich and Berlin',
    href: '/study/germany',
    floatingPrograms: [
      {
        university: 'Technical University of Munich (TUM)',
        universityImage: '/images/destinations/europe-research.jpg',
        logoMonogram: 'TUM',
        programTitle: 'MSc in Robotics, Cognition & Intelligence',
        tag: 'TU9 Excellence',
        degree: 'Master’s Degree',
        duration: '24 Months',
        description: 'Germany’s top-ranked technical university offering English-medium AI and robotics curricula with direct BMW, Siemens and SAP research ties.',
      },
      {
        university: 'RWTH Aachen University',
        universityImage: '/images/destinations/europe-campus.jpg',
        logoMonogram: 'RWTH',
        programTitle: 'MSc in Automotive & Mechanical Engineering',
        tag: 'Engineering Titan',
        degree: 'Master’s Degree',
        duration: '24 Months',
        description: 'Leading European engineering powerhouse providing tuition-free Master’s tracks and world-class industrial research laboratories.',
      },
    ],
    stats: [
      { value: 'Zero Tuition', label: 'Public Universities' },
      { value: '18 Months', label: 'Post-Study Jobseeker' },
      { value: 'DAAD / Merit', label: 'Scholarship Routes' },
      { value: 'Winter / Summer', label: 'Main Intakes' },
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    heroImage: '/images/destinations/singapore-marina-bay.jpg',
    stripImage: '/images/destinations/singapore-campus.jpg',
    alt: 'Marina Bay and modern financial towers in Singapore',
    href: '/study/singapore',
    floatingPrograms: [
      {
        university: 'National University of Singapore (NUS)',
        universityImage: '/images/destinations/singapore-fintech-hub.jpg',
        logoMonogram: 'NUS',
        programTitle: 'Master of Computing in Applied AI',
        tag: 'Leading Computing Faculty',
        degree: 'Master’s Degree',
        duration: '18 Months',
        description: 'Asia’s highest-ranked computing faculty providing cutting-edge machine learning coursework and regional placement.',
      },
      {
        university: 'Singapore Management University (SMU)',
        universityImage: '/images/destinations/singapore-gardens.jpg',
        logoMonogram: 'SMU',
        programTitle: 'BSc Information Systems & FinTech',
        tag: 'Accredited Business School',
        degree: 'Bachelor’s Degree',
        duration: '36 Months',
        description: 'Strategic fintech curriculum situated in Singapore’s commercial hub with strong venture capital and bank linkages.',
      },
    ],
    stats: [
      { value: 'English Medium', label: 'Instruction' },
      { value: '1 Year', label: 'LTVP Post-Study Pass' },
      { value: 'Regional Hub', label: 'Asian Market Exposure' },
      { value: '2', label: 'Available Intakes' },
    ],
  },
  {
    id: 'luxembourg',
    name: 'Luxembourg',
    heroImage: '/images/destinations/europe-city-life.jpg',
    stripImage: '/images/destinations/europe-campus.jpg',
    alt: 'Luxembourg City historic skyline, financial district and academic campuses',
    href: '/study/luxembourg',
    floatingPrograms: [
      {
        university: 'Luxembourg School of Business',
        universityImage: '/images/destinations/europe-library.jpg',
        logoMonogram: 'LSB',
        programTitle: 'Master in International Finance',
        tag: 'Accredited Business School',
        degree: 'Master’s Degree',
        duration: '24 Months',
        description: 'Specialised finance and capital markets curriculum in the heart of Europe’s premier financial hub.',
      },
      {
        university: 'University of Luxembourg',
        universityImage: '/images/destinations/europe-campus.jpg',
        logoMonogram: 'Uni.lu',
        programTitle: 'MSc in Finance & Economics',
        tag: 'Public Research University',
        degree: 'Master’s Degree',
        duration: '24 Months',
        description: 'Multilingual European master’s degree offering intensive finance, banking, and international management tracks.',
      },
    ],
    stats: [
      { value: 'Finance Hub', label: 'European Centre' },
      { value: 'Multilingual', label: 'English Available' },
      { value: 'Merit Awards', label: 'Scholarship Routes' },
      { value: 'Sep / Feb', label: 'Available Intakes' },
    ],
  },
  {
    id: 'japan',
    name: 'Japan',
    heroImage: '/images/destinations/japan-tokyo-city.jpg',
    stripImage: '/images/destinations/japan-campus.jpg',
    alt: 'Tokyo illuminated skyline and campus architecture in Japan',
    href: '/study/japan',
    floatingPrograms: [
      {
        university: 'Waseda University Tokyo',
        universityImage: '/images/destinations/japan-tech-lab.jpg',
        logoMonogram: 'WU',
        programTitle: 'Global Software & Systems Eng.',
        tag: 'Private Tech Hub',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
        description: 'English-medium computing program located in central Tokyo with direct recruitment pathways to Japanese tech leaders.',
      },
      {
        university: 'Kyoto University Global Track',
        universityImage: '/images/destinations/japan-culture.jpg',
        logoMonogram: 'KU',
        programTitle: 'MSc Robotics & Applied Intelligence',
        tag: 'Research Excellence',
        degree: 'Master’s Degree',
        duration: '24 Months',
        description: 'Elite robotics research center combining traditional Japanese academic rigor with advanced robotic automation facilities.',
      },
    ],
    stats: [
      { value: 'STEM Focus', label: 'Robotics & Tech' },
      { value: '28 Hrs/Wk', label: 'Student Work Rights' },
      { value: 'MEXT', label: 'Govt Scholarships' },
      { value: '2', label: 'Spring / Autumn' },
    ],
  },
  {
    id: 'usa',
    name: 'United States',
    heroImage: '/images/destinations/usa-nyc-campus.jpg',
    stripImage: '/images/destinations/usa-campus.jpg',
    alt: 'Statue of Liberty and Manhattan skyline in New York City, USA',
    href: '/study/usa',
    floatingPrograms: [
      {
        university: 'Northeastern University',
        universityImage: '/images/destinations/usa-campus.jpg',
        logoMonogram: 'N',
        programTitle: 'MPS in Applied AI',
        tag: 'Co-op Education Leader',
        degree: 'Master’s Degree',
        duration: '23 Months',
        description: 'Industry-embedded curriculum with paid corporate co-ops at leading US tech hubs and career pathways.',
      },
      {
        university: 'Northeastern University',
        universityImage: '/images/destinations/usa-tech-hub.jpg',
        logoMonogram: 'N',
        programTitle: 'BS in Applied AI',
        tag: 'Undergraduate Co-op Track',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
        description: 'Comprehensive undergraduate program integrating foundation computer science with two semesters of corporate co-op.',
      },
    ],
    stats: [
      { value: 'F-1 Visa', label: 'Student Route' },
      { value: '1-3 Years', label: 'OPT Work Route' },
      { value: 'Merit Aid', label: 'Institutional Funding' },
      { value: 'Multiple', label: 'Available Intakes' },
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    heroImage: '/images/destinations/uk-london-city.jpg',
    stripImage: '/images/destinations/uk-campus.jpg',
    alt: 'Historic city of London with Tower Bridge and modern skyline, UK',
    href: '/study/uk',
    floatingPrograms: [
      {
        university: 'University of Birmingham',
        universityImage: '/images/destinations/uk-oxford-library.jpg',
        logoMonogram: 'UoB',
        programTitle: 'MSc Data Science & AI',
        tag: 'Russell Group Institution',
        degree: 'Master’s Degree',
        duration: '12 Months',
        description: 'Russell Group accredited graduate degree providing high-level computing labs and fast-track employment options.',
      },
      {
        university: 'Queen Mary University of London',
        universityImage: '/images/destinations/uk-cambridge.jpg',
        logoMonogram: 'QMUL',
        programTitle: 'BSc Computer Science & AI',
        tag: 'Research-Led Faculty',
        degree: 'Bachelor’s Degree',
        duration: '36 Months',
        description: 'London-based technical track offering direct exposure to the Tech City digital corridor and industry projects.',
      },
    ],
    stats: [
      { value: 'Specialist', label: '1-Year Master’s' },
      { value: '2 Years', label: 'Graduate Route Visa' },
      { value: 'Merit Awards', label: 'Scholarship Routes' },
      { value: '2', label: 'Available Intakes' },
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    heroImage: '/images/destinations/canada-toronto-skyline.jpg',
    stripImage: '/images/destinations/canada-ubc-campus.jpg',
    alt: 'Toronto skyline and coastal university campuses in Canada',
    href: '/study/canada',
    floatingPrograms: [
      {
        university: 'University of British Columbia (UBC)',
        universityImage: '/images/destinations/canada-campus.jpg',
        logoMonogram: 'UBC',
        programTitle: 'Master of Data Science & AI',
        tag: 'Tech Corridor',
        degree: 'Master’s Degree',
        duration: '12 Months',
        description: 'Intensive computational analytics degree with direct access to Vancouver’s thriving North American tech corridor.',
      },
      {
        university: 'York University (Toronto)',
        universityImage: '/images/destinations/canada-montreal.jpg',
        logoMonogram: 'YU',
        programTitle: 'BBA International Business',
        tag: 'Premier Business Faculty',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
        description: 'Premier Canadian commerce qualification with comprehensive post-graduation work permit (PGWP) eligibility.',
      },
    ],
    stats: [
      { value: 'DLI Route', label: 'Designated Institutions' },
      { value: 'Up to 3 Yrs', label: 'PGWP Work Route' },
      { value: 'Co-op Options', label: 'Integrated Work' },
      { value: 'Multiple', label: 'Available Intakes' },
    ],
  },
  {
    id: 'australia',
    name: 'Australia',
    heroImage: '/images/destinations/australia-sydney-harbour.jpg',
    stripImage: '/images/destinations/australia-campus.jpg',
    alt: 'Sydney Harbour and sandstone university quadrangles in Australia',
    href: '/study/australia',
    floatingPrograms: [
      {
        university: 'University of Melbourne',
        universityImage: '/images/destinations/australia-melbourne-quad.jpg',
        logoMonogram: 'UoM',
        programTitle: 'Master of Information Technology',
        tag: 'Group of Eight (Go8)',
        degree: 'Master’s Degree',
        duration: '24 Months',
        description: 'Australia’s top technology faculty offering flexible specializations in cybersecurity, cloud architectures, and AI.',
      },
      {
        university: 'University of Sydney',
        universityImage: '/images/destinations/australia-student-life.jpg',
        logoMonogram: 'USYD',
        programTitle: 'BEng Honours (Robotics & AI)',
        tag: 'Global Engineering Track',
        degree: 'Bachelor’s Degree',
        duration: '48 Months',
        description: 'Four-year professional engineering degree with integrated industry internships and international accreditation.',
      },
    ],
    stats: [
      { value: 'CRICOS', label: 'Approved Courses' },
      { value: '2-4 Years', label: 'Post-Study Work Visa' },
      { value: 'Go8 & More', label: 'Research Led' },
      { value: 'Feb / July', label: 'Typical Intakes' },
    ],
  },
];

export function PathGatewaySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const { openCallback } = useCallbackModal();
  const activeCountry = COUNTRIES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + COUNTRIES.length) % COUNTRIES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % COUNTRIES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 45) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
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
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#A33E11] mb-2">
              <Sparkles size={14} />
              <span>Global Opportunities</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1C1A] leading-tight">
              Study in <span className="text-[#A33E11]">{activeCountry.name}</span> for Indian Students
            </h2>
          </div>
          <Link
            href={activeCountry.href}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#A33E11] hover:text-[#85320D] transition-colors self-start md:self-end cursor-pointer"
          >
            <span>Explore programs</span>
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Desktop View (>= lg): Left Vertical Tall Strips + Center/Right Active Hero Card (UpGrad Reference Pattern d) */}
        <div className="hidden lg:flex gap-3.5 items-stretch h-[620px] xl:h-[640px]">
          {/* Left Inactive Country Strips (Accordion Style) */}
          <div
            className="flex gap-2.5 shrink-0 items-stretch max-w-[336px] xl:max-w-[430px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 select-none"
            onWheel={(e) => {
              if (e.deltaY !== 0 && e.currentTarget.scrollWidth > e.currentTarget.clientWidth) {
                e.currentTarget.scrollLeft += e.deltaY;
              }
            }}
          >
            {COUNTRIES.map((c, idx) => {
              if (idx === currentIndex) return null;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className="w-[74px] xl:w-[86px] hover:w-[84px] xl:hover:w-[98px] h-full rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-300 ease-out shrink-0 shadow-sm border border-black/5"
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
                  <div className="absolute inset-x-0 bottom-6 top-16 flex items-center justify-center pointer-events-none">
                    <span className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-white font-bold text-xs xl:text-sm drop-shadow-md whitespace-nowrap select-none text-center">
                      {c.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Country Hero Card with Counter, Arrows, and Overlaid Floating Program Cards */}
          <div className="flex-1 min-w-0 h-full rounded-3xl overflow-hidden relative shadow-xl border border-black/5 bg-[#00222B]">
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
              </motion.div>
            </AnimatePresence>

            {/* Upper-Left Destination & University Overlay */}
            <div className="absolute top-7 left-7 z-20 max-w-[260px] xl:max-w-[300px] pointer-events-none select-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-semibold uppercase tracking-wider text-[#FC7F4E] shadow-sm mb-2 whitespace-nowrap">
                <CountryFlag country={activeCountry.name} width={18} height={12} className="rounded-xs" />
                <span>{activeCountry.name}</span>
              </div>
              <h3 className="font-serif text-2xl xl:text-3xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-tight">
                {activeCountry.name}
              </h3>
              <p className="mt-1 text-xs text-white/90 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] leading-relaxed">
                {activeCountry.floatingPrograms[0]?.university || 'Accredited university pathways'}
              </p>
            </div>

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
                  className="w-11 h-11 rounded-full bg-white text-[#1B1C1A] shadow-md flex items-center justify-center hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer touch-manipulation"
                  aria-label="Previous country"
                >
                  <ChevronLeft size={20} className="stroke-[2.5]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full bg-white text-[#1B1C1A] shadow-md flex items-center justify-center hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all cursor-pointer touch-manipulation"
                  aria-label="Next country"
                >
                  <ChevronRight size={20} className="stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Overlaid Floating Program Cards (Right Half: horizontal scroll-snap carousel) */}
            <div className="absolute right-6 top-6 bottom-6 z-20 flex gap-4 items-stretch max-w-[calc(100%-280px)] xl:max-w-[calc(100%-320px)] overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-2">
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
                      className="w-[340px] xl:w-[370px] shrink-0 snap-start bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between border border-black/5 transition-transform duration-300 hover:-translate-y-1 h-full"
                    >
                      {/* University Campus Image (16:10 aspect, full width, rounded top) */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 shrink-0">
                        <Image
                          src={prog.universityImage}
                          alt={prog.university}
                          fill
                          sizes="380px"
                          className="object-cover"
                        />
                        {/* Monogram Badge placed safely inside top-right corner of image */}
                        <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-black/10 flex items-center justify-center font-bold text-xs text-[#0C3844] z-10">
                          {prog.logoMonogram}
                        </div>
                      </div>

                      {/* Card Body - Text strictly below image in required order */}
                      <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                        <div>
                          {/* 1. Country flag + University name (wraps onto multiple lines) */}
                          <div className="flex items-start gap-2 min-w-0">
                            <CountryFlag country={activeCountry.name} width={18} height={12} className="rounded-xs object-cover mt-0.5 shrink-0" />
                            <span className="text-xs font-semibold text-[#1B1C1A] leading-snug">{prog.university}</span>
                          </div>

                          {/* 2. Program title (wraps onto multiple lines) */}
                          <h4 className="font-serif text-base sm:text-lg font-bold text-[#1B1C1A] leading-snug mt-1.5">
                            {prog.programTitle}
                          </h4>

                          {/* 3. Tag pill */}
                          <div className="mt-2">
                            <span className="inline-block text-[10px] xl:text-[11px] font-semibold bg-[#FC7F4E]/10 text-[#A33E11] px-2.5 py-0.5 rounded-full border border-[#FC7F4E]/30">
                              {prog.tag}
                            </span>
                          </div>

                          {/* 4. Short summary/description (2-3 lines, line-clamp-3) */}
                          <p className="mt-2.5 text-xs text-[#41484B] leading-relaxed line-clamp-3">
                            {prog.description}
                          </p>

                          {/* 5. Degree and duration rows */}
                          <div className="mt-3 pt-3 border-t border-[#E6DDCC]/60 space-y-1.5 text-xs text-[#41484B]">
                            <div className="flex items-center gap-1.5">
                              <GraduationCap size={14} className="text-[#0C3844] shrink-0" />
                              <span>{prog.degree}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-[#41484B] shrink-0" />
                              <span>{prog.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* 6. VIEW PROGRAM CTA Button pinned to bottom */}
                        <button
                          type="button"
                          onClick={() =>
                            openCallback({
                              interest: `Study in ${activeCountry.name} - ${prog.programTitle}`,
                              source: `gateway:${activeCountry.id}`,
                            })
                          }
                          className="mt-4 w-full bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl text-center transition-colors cursor-pointer shadow-xs active:scale-98"
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
        <div className="lg:hidden space-y-5">
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
                        ? 'bg-[#0C3844] text-white shadow-md'
                        : 'bg-white text-[#1B1C1A] border border-[#E6DDCC]'
                    }`}
                  >
                    <CountryFlag country={c.name} width={18} height={13} className="rounded-xs object-cover" />
                    <span>{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hero Banner with Counter and Arrows (supports touch swipe) */}
          <div
            className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md bg-[#00222B] touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
              </motion.div>
            </AnimatePresence>

            {/* Upper-Left Destination & University Overlay */}
            <div className="absolute top-4 left-4 right-4 z-10 pointer-events-none select-none">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-[#FC7F4E] shadow-sm mb-1.5">
                <CountryFlag country={activeCountry.name} width={14} height={10} className="rounded-xs" />
                <span>{activeCountry.name}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-tight max-w-[85%]">
                {activeCountry.name}
              </h3>
              <p className="mt-0.5 text-[11px] text-white/85 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] line-clamp-1">
                {activeCountry.floatingPrograms[0]?.university || 'Accredited university pathways'}
              </p>
            </div>

            {/* Bottom-Left Counter + Navigation Arrows */}
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
              <div className="text-white font-bold text-2xl drop-shadow-md">
                {String(currentIndex + 1).padStart(2, '0')}
                <span className="text-base font-light text-white/80">/{String(COUNTRIES.length).padStart(2, '0')}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full bg-white text-[#1B1C1A] shadow-md flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer active:scale-95 touch-manipulation"
                  aria-label="Previous country"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full bg-white text-[#1B1C1A] shadow-md flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer active:scale-95 touch-manipulation"
                  aria-label="Next country"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Floating Program Cards (Horizontal Scroll-Snap Carousel with Next Card Peeking) */}
          <div className="-mx-6 px-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-3">
            <div className="flex gap-4 min-w-max">
              {activeCountry.floatingPrograms.map((prog) => (
                <div
                  key={prog.programTitle}
                  className="w-[85vw] max-w-[360px] bg-white rounded-2xl shadow-md overflow-hidden border border-[#E6DDCC] snap-start shrink-0 flex flex-col justify-between"
                >
                  {/* University Campus Image (16:10 aspect, full width, rounded top) */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 shrink-0">
                    <Image
                      src={prog.universityImage}
                      alt={prog.university}
                      fill
                      sizes="(max-width: 768px) 85vw, 360px"
                      className="object-cover"
                    />
                    {/* Monogram Badge inside top-right corner of image */}
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-black/10 flex items-center justify-center font-bold text-xs text-[#0C3844] z-10">
                      {prog.logoMonogram}
                    </div>
                  </div>

                  {/* Card Body - Content strictly below image in required order */}
                  <div className="p-4 pt-3.5 flex-1 flex flex-col justify-between gap-3">
                    <div>
                      {/* 1. Country flag + University name (wraps onto multiple lines) */}
                      <div className="flex items-start gap-2 min-w-0">
                        <CountryFlag country={activeCountry.name} width={18} height={12} className="rounded-xs object-cover mt-0.5 shrink-0" />
                        <span className="text-xs font-semibold text-[#1B1C1A] leading-snug">{prog.university}</span>
                      </div>

                      {/* 2. Program title (wraps onto multiple lines) */}
                      <h4 className="font-serif text-base font-bold text-[#1B1C1A] leading-snug mt-1.5">
                        {prog.programTitle}
                      </h4>

                      {/* 3. Tag pill */}
                      <div className="mt-2">
                        <span className="inline-block text-[10px] font-semibold bg-[#FC7F4E]/10 text-[#A33E11] px-2.5 py-0.5 rounded-full border border-[#FC7F4E]/30">
                          {prog.tag}
                        </span>
                      </div>

                      {/* 4. Short summary/description (2-3 lines, line-clamp-3) */}
                      <p className="mt-2 text-xs text-[#41484B] leading-relaxed line-clamp-3">
                        {prog.description}
                      </p>

                      {/* 5. Degree and duration rows */}
                      <div className="mt-3 pt-2.5 border-t border-[#E6DDCC]/60 space-y-1.5 text-xs text-[#41484B]">
                        <div className="flex items-center gap-1.5">
                          <GraduationCap size={14} className="text-[#0C3844] shrink-0" />
                          <span>{prog.degree}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-[#41484B] shrink-0" />
                          <span>{prog.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* 6. VIEW PROGRAM CTA Button pinned to bottom */}
                    <button
                      type="button"
                      onClick={() =>
                        openCallback({
                          interest: `Study in ${activeCountry.name} - ${prog.programTitle}`,
                          source: `gateway:${activeCountry.id}`,
                        })
                      }
                      className="mt-3 w-full bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl text-center transition-colors cursor-pointer shadow-xs active:scale-98"
                    >
                      View Program
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Metric Stats Strip Underneath (Clean 2x2 grid on mobile/tablet, fluid typography) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white border border-[#E6DDCC] rounded-2xl p-5 sm:p-6 shadow-xs mt-6">
          {activeCountry.stats.map((st, i) => (
            <div
              key={st.label}
              className={`text-center space-y-1 flex flex-col justify-center ${
                i < activeCountry.stats.length - 1 ? 'lg:border-r border-[#E6DDCC]' : ''
              }`}
            >
              <p className="font-serif text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-[#0C3844] leading-none">
                {st.value}
              </p>
              <p className="text-[clamp(0.75rem,2.2vw,0.875rem)] text-[#41484B] font-medium leading-tight text-balance text-center mt-1.5">
                {st.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
