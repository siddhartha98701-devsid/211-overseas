'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Building2, Wallet, BookOpen } from 'lucide-react';
import { DestinationLeadForm } from '@/components/forms/DestinationLeadForm';
import { CountryAtmosphereAnimation } from '@/components/ui/CountryAtmosphereAnimation';
import { getDestinationVisual } from '@/content/destinationVisuals';

export interface DestinationData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle?: string;
    paragraph?: string;
    facts?: ReadonlyArray<{ label: string; value: string }>;
  };
  whyStudyInUae?: {
    headline: string;
    paragraph: string;
  };
  budget?: {
    headline: string;
    items: ReadonlyArray<{ item: string; indicativeInfo: string }>;
    planningReference?: string;
  };
  budgetApproach?: {
    headline: string;
    paragraph: string;
  };
  costApproach?: {
    headline: string;
    points: ReadonlyArray<{ title: string; description: string }>;
  };
  costPlanning?: {
    headline: string;
    paragraph?: string;
    points?: ReadonlyArray<{ title: string; description: string }>;
  };
  popularCourses?: {
    headline: string;
    items: ReadonlyArray<string>;
  };
  universities: {
    headline: string;
    list: ReadonlyArray<string>;
    disclaimer: string;
  };
  chooseYourRoute?: {
    headline: string;
    routes: ReadonlyArray<{ title: string; description: string }>;
  };
  chooseByCourse?: {
    headline: string;
    steps: ReadonlyArray<{ number: string; title: string; description: string }>;
  };
  purposefulShortlist?: {
    headline: string;
    steps: ReadonlyArray<{ number: string; title: string; description: string }>;
  };
  whatToLookFor?: {
    headline: string;
    points: ReadonlyArray<{ title: string; description: string }>;
  };
  programTypes?: {
    headline: string;
    programs: ReadonlyArray<{ title: string; description: string }>;
  };
  programmeSpotlight?: {
    headline: string;
    intro: string;
    programmes: ReadonlyArray<{ name: string; tuition: string; consideration: string }>;
  };
  scholarships?: {
    headline: string;
    items: ReadonlyArray<string>;
  };
  admissionsChecklist?: {
    headline: string;
    steps: ReadonlyArray<{ number: string; title: string; description: string }>;
  };
  admissionsAndVisas?: {
    headline: string;
    steps: ReadonlyArray<{ step: string; detail: string }>;
  };
  faqs?: {
    headline: string;
    items: ReadonlyArray<{ q: string; a: string }>;
  };
  closing?: {
    headline?: string;
    ctas: {
      primary: { label: string; href: string };
      secondary?: { label: string; href: string };
    };
  };
  closingCta?: {
    headline: string;
    ctas: {
      primary: { label: string; href: string };
      secondary?: { label: string; href: string };
    };
  };
}

const UNIVERSITY_IMAGE_MAP: Record<string, string> = {
  // South Korea
  'seoul national university': '/images/universities/snu.jpg',
  'snu': '/images/universities/snu.jpg',
  'kaist': '/images/universities/kaist.jpg',
  'yonsei university': '/images/universities/yonsei.jpg',
  'korea university': '/images/universities/ku.jpg',
  'hanyang university': '/images/universities/hanyang.jpg',
  'sungkyunkwan university': '/images/universities/skku.jpg',
  'postech': '/images/universities/postech.jpg',
  'kyung hee university': '/images/universities/khu.jpg',
  'pusan national university': '/images/korea/korea-campus.jpg',
  'sejong university': '/images/universities/gist.jpg',
  'ewha womans university': '/images/korea/korea-student.jpg',
  'kyungpook national university': '/images/universities/unist.jpg',

  // Singapore
  'national university of singapore': '/images/destinations/singapore-fintech-hub.jpg',
  'nanyang technological university': '/images/destinations/singapore-campus.jpg',
  'singapore management university': '/images/destinations/singapore-marina-bay.jpg',
  'singapore university of technology and design': '/images/destinations/singapore-gardens.jpg',
  'singapore institute of technology': '/images/destinations/singapore-campus.jpg',
  'singapore university of social sciences': '/images/destinations/singapore-fintech-hub.jpg',

  // Japan
  'university of tokyo': '/images/destinations/japan-campus.jpg',
  'kyoto university': '/images/destinations/japan-culture.jpg',
  'osaka university': '/images/destinations/japan-campus.jpg',
  'tohoku university': '/images/destinations/japan-tech-lab.jpg',
  'nagoya university': '/images/destinations/japan-culture.jpg',
  'kyushu university': '/images/destinations/japan-campus.jpg',
  'institute of science tokyo': '/images/destinations/japan-tech-lab.jpg',
  'waseda university': '/images/destinations/japan-tokyo-city.jpg',
  'keio university': '/images/destinations/japan-campus.jpg',
  'sophia university': '/images/destinations/japan-culture.jpg',

  // Taiwan
  'national taiwan university': '/images/destinations/taiwan-campus.jpg',
  'national tsing hua university': '/images/destinations/taiwan-semiconductor-lab.jpg',
  'national yang ming chiao tung university': '/images/destinations/taiwan-culture.jpg',
  'national cheng kung university': '/images/destinations/taiwan-taipei-skyline.jpg',
  'national chengchi university': '/images/destinations/taiwan-campus.jpg',

  // United Kingdom
  'imperial college london': '/images/destinations/uk-cambridge.jpg',
  'university college london': '/images/destinations/uk-london-city.jpg',
  'king’s college london': '/images/destinations/uk-oxford-library.jpg',
  'university of manchester': '/images/destinations/uk-campus.jpg',
  'university of edinburgh': '/images/destinations/uk-cambridge.jpg',
  'university of warwick': '/images/destinations/uk-london-city.jpg',
  'university of bristol': '/images/destinations/uk-oxford-library.jpg',
  'university of birmingham': '/images/destinations/uk-campus.jpg',

  // United States
  'massachusetts institute of technology': '/images/destinations/usa-tech-hub.jpg',
  'stanford university': '/images/destinations/usa-harvard-yard.jpg',
  'university of california, berkeley': '/images/destinations/usa-campus.jpg',
  'carnegie mellon university': '/images/destinations/usa-nyc-campus.jpg',
  'georgia institute of technology': '/images/destinations/usa-tech-hub.jpg',
  'university of michigan': '/images/destinations/usa-harvard-yard.jpg',
  'purdue university': '/images/destinations/usa-campus.jpg',
  'university of illinois urbana-champaign': '/images/destinations/usa-nyc-campus.jpg',
  'university of california, los angeles': '/images/destinations/usa-campus.jpg',

  // Canada
  'university of toronto': '/images/destinations/canada-toronto-skyline.jpg',
  'university of british columbia': '/images/destinations/canada-ubc-campus.jpg',
  'mcgill university': '/images/destinations/canada-montreal.jpg',
  'university of waterloo': '/images/destinations/canada-campus.jpg',
  'mcmaster university': '/images/destinations/canada-ubc-campus.jpg',
  'university of alberta': '/images/destinations/canada-toronto-skyline.jpg',
  'western university': '/images/destinations/canada-montreal.jpg',
  'queen’s university': '/images/destinations/canada-campus.jpg',

  // Australia
  'university of melbourne': '/images/destinations/australia-melbourne-quad.jpg',
  'university of sydney': '/images/destinations/australia-sydney-harbour.jpg',
  'unsw sydney': '/images/destinations/australia-campus.jpg',
  'monash university': '/images/destinations/australia-student-life.jpg',
  'university of queensland': '/images/destinations/australia-melbourne-quad.jpg',
  'university of adelaide': '/images/destinations/australia-sydney-harbour.jpg',
  'university of western australia': '/images/destinations/australia-campus.jpg',

  // Europe
  'technical university of munich': '/images/destinations/europe-research.jpg',
  'rwth aachen university': '/images/destinations/europe-campus.jpg',
  'delft university of technology': '/images/destinations/europe-library.jpg',
  'university of amsterdam': '/images/destinations/europe-city-life.jpg',
  'trinity college dublin': '/images/destinations/europe-research.jpg',
  'university college dublin': '/images/destinations/europe-campus.jpg',
  'politecnico di milano': '/images/destinations/europe-library.jpg',
  'sciences po': '/images/destinations/europe-city-life.jpg',

  // Luxembourg
  'university of luxembourg': '/images/destinations/europe-campus.jpg',
  'luxembourg school of business': '/images/destinations/europe-research.jpg',

  // UAE
  'university of birmingham dubai': '/images/generated/uae-careers.jpg',
  'heriot-watt university dubai': '/images/uae.jpg',
  'middlesex university dubai': '/images/web/uae-wide.webp',
  'university of wollongong in dubai': '/images/generated/uae-careers.jpg',
  'canadian university dubai': '/images/uae.jpg',
  'american university in dubai': '/images/web/uae-wide.webp',
  'university of sharjah': '/images/generated/uae-careers.jpg',
  'khalifa university': '/images/uae.jpg',
  'united arab emirates university': '/images/web/uae-wide.webp',
};

export function DestinationTemplate({ data, destinationName }: { data: DestinationData; destinationName: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const visual = getDestinationVisual(destinationName);

  const defaultUni = data.universities.list[0] || '';
  const [selectedUni, setSelectedUni] = useState<string>(defaultUni);
  const currentUni = selectedUni || defaultUni;

  const carouselRef = useRef<HTMLDivElement>(null);
  const handleScrollRow = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = (el.firstElementChild as HTMLElement)?.offsetWidth || 300;
    el.scrollBy({
      left: direction === 'left' ? -cardWidth - 16 : cardWidth + 16,
      behavior: 'smooth',
    });
  };

  const defaultImage = visual?.gallery?.[0]?.src || visual?.heroImage?.src || '/images/generated/global-campus.jpg';
  const currentUniImage = UNIVERSITY_IMAGE_MAP[currentUni.toLowerCase().trim()] || defaultImage;

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC] relative overflow-hidden">
        <CountryAtmosphereAnimation country={destinationName} />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className={visual ? 'lg:col-span-7' : 'lg:col-span-12'}>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-3">
                {data.hero.eyebrow}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-4">
                {data.hero.h1}
              </h1>
              {data.hero.subtitle && (
                <p className="font-serif italic text-lg sm:text-xl text-[#FC7F4E] mb-6">
                  {data.hero.subtitle}
                </p>
              )}
              {data.hero.paragraph && (
                <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-6">
                  {data.hero.paragraph}
                </p>
              )}
            </div>

            {visual && (
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-white/20 bg-black/40 shadow-2xl rounded-[3px] group">
                  <Image
                    src={visual.heroImage.src}
                    alt={visual.heroImage.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 95vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block mb-0.5">
                      Flagship Campus &amp; Landmark
                    </span>
                    <p className="font-serif text-xs sm:text-sm font-semibold leading-tight drop-shadow-sm">
                      {visual.heroImage.caption}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Facts Grid */}
          {data.hero.facts && data.hero.facts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-6 border-t border-white/15">
              {data.hero.facts.map((fact) => (
                <div key={fact.label} className="bg-white/5 border border-white/10 p-4">
                  <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                    {fact.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Visual Showcase: Life & Academic Campuses */}
      {visual && visual.gallery && visual.gallery.length > 0 && (
        <section
          className="border-b border-[#E6DDCC] py-8 md:py-12 bg-white"
          aria-label={`Life and campuses in ${destinationName}`}
        >
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-1">
                  Visual Showcase
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1C1A]">
                  Campuses, Research Hubs &amp; Student Life in {destinationName}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
              {visual.gallery.map((item) => (
                <div
                  key={item.title}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#E6DDCC] bg-[#FAF8F5] shadow-xs"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="font-serif text-xs sm:text-sm font-bold leading-tight drop-shadow-sm">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-white/80 hidden sm:block truncate mt-0.5">
                      {item.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Information Modules */}
          <div className="lg:col-span-8 space-y-16">
            {/* 1. Budget Snapshot / Cost Approach */}
            {data.budget && (
              <section aria-label="Budget Snapshot" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                  <Wallet className="w-5 h-5 text-[#A33E11]" />
                  <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                    {data.budget.headline}
                  </h2>
                </div>

                <div className="divide-y divide-[#E6DDCC]">
                  {data.budget.items.map((item) => (
                    <div key={item.item} className="py-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-2 text-sm">
                      <span className="font-semibold text-[#1B1C1A] sm:w-1/3 shrink-0">
                        {item.item}
                      </span>
                      <span className="text-[#41484B] sm:w-2/3">
                        {item.indicativeInfo}
                      </span>
                    </div>
                  ))}
                </div>

                {data.budget.planningReference && (
                  <div className="mt-6 pt-4 border-t border-[#E6DDCC] flex items-start gap-2.5 text-xs text-[#71787B] bg-[#FBF8F1] p-3.5 border">
                    <AlertCircle size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
                    <p>{data.budget.planningReference}</p>
                  </div>
                )}
              </section>
            )}

            {data.budgetApproach && (
              <section aria-label="Budget Approach" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E6DDCC]">
                  <Wallet className="w-5 h-5 text-[#A33E11]" />
                  <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                    {data.budgetApproach.headline}
                  </h2>
                </div>
                <p className="text-sm text-[#41484B] leading-relaxed">
                  {data.budgetApproach.paragraph}
                </p>
              </section>
            )}

            {data.costApproach && (
              <section aria-label="Cost Approach" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                  <Wallet className="w-5 h-5 text-[#A33E11]" />
                  <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                    {data.costApproach.headline}
                  </h2>
                </div>
                <div className="space-y-4">
                  {data.costApproach.points.map((pt) => (
                    <div key={pt.title} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                        {pt.title}
                      </h3>
                      <p className="text-sm text-[#41484B] leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.whyStudyInUae && (
              <section aria-label="Why Study in UAE" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-3">
                  {data.whyStudyInUae.headline}
                </h2>
                <p className="text-sm text-[#41484B] leading-relaxed">
                  {data.whyStudyInUae.paragraph}
                </p>
              </section>
            )}

            {data.costPlanning && (
              <section aria-label="Cost Planning" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                  <Wallet className="w-5 h-5 text-[#A33E11]" />
                  <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                    {data.costPlanning.headline}
                  </h2>
                </div>
                {data.costPlanning.paragraph && (
                  <p className="text-sm text-[#41484B] leading-relaxed">
                    {data.costPlanning.paragraph}
                  </p>
                )}
                {data.costPlanning.points && (
                  <div className="space-y-4">
                    {data.costPlanning.points.map((pt) => (
                      <div key={pt.title} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                        <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                          {pt.title}
                        </h3>
                        <p className="text-sm text-[#41484B] leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* 2. Popular Courses */}
            {data.popularCourses && (
              <section aria-label="Popular Courses" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                  <BookOpen className="w-5 h-5 text-[#A33E11]" />
                  <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                    {data.popularCourses.headline}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.popularCourses.items.map((course) => (
                    <div key={course} className="flex items-start gap-2.5 p-3 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <CheckCircle2 size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-[#1B1C1A]">{course}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3. Universities to Explore (Sliding Colleges Carousel Pattern) */}
            <section aria-label="Universities to explore" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E6DDCC]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#A33E11]" />
                  <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                    {data.universities.headline}
                  </h2>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <span className="text-xs font-mono font-bold text-[#41484B]">
                    {String(data.universities.list.indexOf(currentUni) + 1).padStart(2, '0')}/
                    {String(data.universities.list.length).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleScrollRow('left')}
                      className="w-8 h-8 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
                      aria-label="Previous college"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollRow('right')}
                      className="w-8 h-8 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
                      aria-label="Next college"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Dynamic Featured Campus Photography Banner */}
              <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden border border-[#E6DDCC] mb-6 rounded-[2px] group bg-[#00222B]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentUni}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentUniImage}
                      alt={`${currentUni} academic campus`}
                      fill
                      sizes="(min-width: 1024px) 760px, 95vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <span className="text-xs sm:text-sm font-serif font-bold drop-shadow-sm truncate mr-2">
                        {currentUni}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#FC7F4E] bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs shrink-0">
                        Academic Campus
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Horizontal Sliding Colleges Carousel as shown in reference showcase */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A33E11]">
                    Browse Participating &amp; Recognized Colleges
                  </p>
                  <span className="text-[11px] text-[#41484B] hidden sm:inline">
                    Click to inspect or slide horizontally
                  </span>
                </div>

                <div
                  ref={carouselRef}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1 -mx-2 px-2"
                  style={{ scrollSnapType: 'x mandatory' }}
                  role="region"
                  aria-label="Universities carousel"
                >
                  {data.universities.list.map((uni) => {
                    const isSelected = uni === currentUni;
                    const uniKey = uni.toLowerCase().trim();
                    const uniImg = UNIVERSITY_IMAGE_MAP[uniKey] || defaultImage;
                    const monogram = uni
                      .replace(/\([^)]*\)/g, '')
                      .split(/\s+/)
                      .filter(Boolean)
                      .map((w) => w[0].toUpperCase())
                      .slice(0, 4)
                      .join('');

                    return (
                      <div
                        key={uni}
                        onClick={() => setSelectedUni(uni)}
                        className={`w-[82vw] sm:w-[290px] md:w-[310px] shrink-0 snap-start bg-white border rounded-[4px] overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#A33E11] ring-1 ring-[#A33E11] bg-[#FAF8F5]'
                            : 'border-[#E6DDCC] hover:border-[#A33E11]'
                        }`}
                      >
                        <div>
                          {/* Campus Header Photo with Monogram */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#00222B]">
                            <Image
                              src={uniImg}
                              alt={`${uni} academic campus`}
                              fill
                              sizes="(min-width: 768px) 310px, 85vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-black/60 text-[#FC7F4E] backdrop-blur-xs rounded">
                                {destinationName}
                              </span>
                              <span className="w-7 h-7 rounded-full bg-white/95 text-[#00222B] text-[11px] font-bold font-serif flex items-center justify-center shadow-sm">
                                {monogram}
                              </span>
                            </div>
                            <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                              <span className="text-xs font-serif font-bold truncate block drop-shadow-sm">
                                {uni}
                              </span>
                            </div>
                          </div>

                          {/* University Meta Details */}
                          <div className="p-4 space-y-2">
                            <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#A33E11] bg-[#FC7F4E]/10 border border-[#FC7F4E]/30 rounded-[2px]">
                              {isSelected ? '● Selected Campus' : 'Featured Institution'}
                            </span>
                            <h4 className="font-serif text-sm font-bold text-[#1B1C1A] leading-snug line-clamp-2">
                              {uni}
                            </h4>
                            <p className="text-xs text-[#41484B] leading-relaxed line-clamp-2">
                              Higher education institution offering accredited undergraduate &amp; postgraduate degrees for international students.
                            </p>
                          </div>
                        </div>

                        {/* Interactive Inquire CTA */}
                        <div className="p-4 pt-0">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedUni(uni);
                              const formEl = document.getElementById('destination-lead-form') || document.querySelector('form');
                              if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-center transition-colors rounded-[2px] cursor-pointer inline-flex items-center justify-center gap-1.5 ${
                              isSelected
                                ? 'bg-[#A33E11] hover:bg-[#85320D] text-white shadow-xs'
                                : 'bg-[#FBF8F1] hover:bg-[#A33E11] text-[#1B1C1A] hover:text-white border border-[#E6DDCC]'
                            }`}
                          >
                            <span>Inquire for {monogram || 'Uni'}</span>
                            <ChevronRight size={13} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick-Select University Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E6DDCC]/60">
                {data.universities.list.map((uni) => {
                  const isSelected = uni === currentUni;
                  return (
                    <button
                      key={uni}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSelectedUni(uni)}
                      className={`px-3 py-1.5 text-center text-xs font-semibold rounded-[2px] transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#A33E11] border border-[#A33E11] text-white shadow-xs font-bold scale-[1.02]'
                          : 'bg-[#FBF8F1] border border-[#E6DDCC] text-[#1B1C1A] hover:border-[#A33E11] hover:bg-white'
                      }`}
                    >
                      {uni}
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-[#71787B] mt-6 italic pt-4 border-t border-[#E6DDCC]">
                {data.universities.disclaimer}
              </p>
            </section>

            {/* 4. Page-Specific Module: Choose Your Route */}
            {data.chooseYourRoute && (
              <section aria-label="Study Routes" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.chooseYourRoute.headline}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.chooseYourRoute.routes.map((route) => (
                    <div key={route.title} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1.5">
                        {route.title}
                      </h3>
                      <p className="text-xs text-[#41484B] leading-relaxed">
                        {route.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.chooseByCourse && (
              <section aria-label="Course Selection" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.chooseByCourse.headline}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.chooseByCourse.steps.map((st) => (
                    <div key={st.number} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <span className="text-xs font-mono font-bold text-[#A33E11] block mb-1">
                        {st.number}
                      </span>
                      <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                        {st.title}
                      </h3>
                      <p className="text-xs text-[#41484B] leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.purposefulShortlist && (
              <section aria-label="Shortlist Guidance" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.purposefulShortlist.headline}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.purposefulShortlist.steps.map((st) => (
                    <div key={st.number} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <span className="text-xs font-mono font-bold text-[#A33E11] block mb-1">
                        {st.number}
                      </span>
                      <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                        {st.title}
                      </h3>
                      <p className="text-xs text-[#41484B] leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Page-Specific Module: What To Look For / Program Types */}
            {data.whatToLookFor && (
              <section aria-label="Considerations" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.whatToLookFor.headline}
                </h2>
                <div className="space-y-4">
                  {data.whatToLookFor.points.map((pt) => (
                    <div key={pt.title} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                        {pt.title}
                      </h3>
                      <p className="text-sm text-[#41484B] leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.programTypes && (
              <section aria-label="Program Types" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.programTypes.headline}
                </h2>
                <div className="space-y-4">
                  {data.programTypes.programs.map((prog) => (
                    <div key={prog.title} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-[#41484B] leading-relaxed">
                        {prog.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Programme Spotlight (e.g. LSB Luxembourg) */}
            {data.programmeSpotlight && (
              <section aria-label="Programme Spotlight" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-2">
                  {data.programmeSpotlight.headline}
                </h2>
                <p className="text-xs text-[#71787B] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.programmeSpotlight.intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.programmeSpotlight.programmes.map((p) => (
                    <div key={p.name} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                        {p.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#A33E11] mb-2">
                        {p.tuition}
                      </p>
                      <p className="text-xs text-[#41484B]">
                        {p.consideration}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Scholarships */}
            {data.scholarships && (
              <section aria-label="Scholarships" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.scholarships.headline}
                </h2>
                <div className="space-y-3">
                  {data.scholarships.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3.5 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <CheckCircle2 size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#41484B]">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Admissions Checklist */}
            {data.admissionsChecklist && (
              <section aria-label="Admissions Checklist" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.admissionsChecklist.headline}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.admissionsChecklist.steps.map((st) => (
                    <div key={st.number} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                      <span className="text-xs font-mono font-bold text-[#A33E11] block mb-1">
                        {st.number}
                      </span>
                      <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                        {st.title}
                      </h3>
                      <p className="text-xs text-[#41484B] leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 6. Admissions & Visas */}
            {data.admissionsAndVisas && (
              <section aria-label="Admissions & Visas" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.admissionsAndVisas.headline}
                </h2>
                <div className="space-y-3">
                  {data.admissionsAndVisas.steps.map((st) => (
                    <div key={st.step} className="p-3.5 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col sm:flex-row sm:items-baseline gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#A33E11] sm:w-1/3 shrink-0">
                        {st.step}
                      </span>
                      <span className="text-sm text-[#41484B] sm:w-2/3">
                        {st.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. FAQs (if available) */}
            {data.faqs && (
              <section aria-label="FAQs" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.faqs.headline}
                </h2>
                <div className="space-y-3">
                  {data.faqs.items.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border border-[#E6DDCC] bg-[#FBF8F1]">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full py-3.5 px-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-[#1B1C1A]"
                        >
                          <span>{item.q}</span>
                          <ChevronDown
                            size={18}
                            className={`text-[#A33E11] shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 pt-1 text-sm text-[#41484B] leading-relaxed border-t border-[#E6DDCC]/60 bg-white">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Pre-selected Lead Capture Form & Direct Line */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28">
              <DestinationLeadForm destination={destinationName} />

              <div className="mt-6 bg-[#00222B] text-white p-6 border-t-4 border-[#A33E11]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FC7F4E] block mb-1">
                  Direct Line
                </span>
                <p className="font-serif text-lg font-bold mb-2">Speak to a counsellor</p>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Get objective guidance on admission timelines, entry standards, and documentation.
                </p>
                <a
                  href="https://wa.me/919998585211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 px-4 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  WhatsApp: +91 99985 85211 →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
