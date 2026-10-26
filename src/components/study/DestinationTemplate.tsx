'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Building2, Wallet, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { CountryFlag } from '@/components/ui/CountryFlag';
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
  shortlistSteps?: {
    headline: string;
    steps: ReadonlyArray<{ number: string; title: string; description: string }>;
  };
  whatToCompare?: {
    headline: string;
    steps?: ReadonlyArray<{ number: string; title: string; description: string }>;
    bullets?: ReadonlyArray<string>;
  };
  beforeApplying?: {
    headline: string;
    steps: ReadonlyArray<{ number: string; title: string; description: string }>;
  };
  beforeYouPay?: {
    headline: string;
    bullets: ReadonlyArray<string>;
  };
  countryPriority?: {
    headline: string;
    items: ReadonlyArray<{ priority: string; countries: string }>;
  };
  fundingOptions?: {
    headline: string;
    description: string;
  };
  documents?: {
    headline: string;
    description: string;
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

interface CourseSubjectMeta {
  image: string;
  category: string;
  monogram: string;
}

function getCourseMeta(courseText: string): CourseSubjectMeta {
  const text = courseText.toLowerCase();

  // 1. Aviation
  if (text.includes('aviation')) {
    return {
      image: '/images/destinations/australia-sydney-harbour.jpg',
      category: 'Aviation Management',
      monogram: 'AVN',
    };
  }

  // 2. Semiconductor & Microelectronics
  if (text.includes('semiconductor') || text.includes('electronic systems')) {
    return {
      image: '/images/destinations/taiwan-semiconductor-lab.jpg',
      category: 'Semiconductor Engineering',
      monogram: 'SEMI',
    };
  }

  // 3. AI, Computer Science & Data Analytics
  if (
    text.includes('computer science') ||
    text.includes('computing') ||
    text.includes('artificial intelligence') ||
    text.includes('ai') ||
    text.includes('data analytics') ||
    text.includes('data science') ||
    text.includes('information systems')
  ) {
    return {
      image: '/images/destinations/usa-tech-hub.jpg',
      category: 'Computer Science & AI',
      monogram: 'CS/AI',
    };
  }

  // 4. Robotics & Mechanical / Automotive / Materials / Industrial Engineering
  if (
    text.includes('robotics') ||
    text.includes('mechanical') ||
    text.includes('electrical') ||
    text.includes('materials') ||
    text.includes('automotive') ||
    text.includes('applied technology') ||
    text.includes('applied science') ||
    text.includes('engineering')
  ) {
    return {
      image: '/images/destinations/japan-tech-lab.jpg',
      category: 'Engineering & Robotics',
      monogram: 'ENG',
    };
  }

  // 5. Biotechnology & Life Sciences
  if (
    text.includes('biotechnology') ||
    text.includes('biotech') ||
    text.includes('life sciences')
  ) {
    return {
      image: '/images/destinations/europe-research.jpg',
      category: 'Biotechnology & Research',
      monogram: 'BIO',
    };
  }

  // 6. Healthcare, Medicine, Nursing & Public Health
  if (
    text.includes('public health') ||
    text.includes('health') ||
    text.includes('medical') ||
    text.includes('healthcare')
  ) {
    return {
      image: '/images/generated/germany-healthcare.jpg',
      category: 'Healthcare & Public Health',
      monogram: 'MED',
    };
  }

  // 7. Finance, Banking, Accounting & Capital Markets
  if (
    text.includes('finance') ||
    text.includes('banking') ||
    text.includes('accounting') ||
    text.includes('accountancy') ||
    text.includes('capital markets') ||
    text.includes('auditing') ||
    text.includes('taxation')
  ) {
    return {
      image: '/images/destinations/singapore-fintech-hub.jpg',
      category: 'Finance & Banking',
      monogram: 'FIN',
    };
  }

  // 8. Business, Management, Economics & Trade
  if (
    text.includes('business') ||
    text.includes('management') ||
    text.includes('economics') ||
    text.includes('trade') ||
    text.includes('strategy') ||
    text.includes('entrepreneurship') ||
    text.includes('supply chain') ||
    text.includes('logistics')
  ) {
    return {
      image: '/images/generated/uae-sector-sales.jpg',
      category: 'Business & Management',
      monogram: 'BIZ',
    };
  }

  // 9. Hospitality & Culinary Management
  if (text.includes('hospitality') || text.includes('culinary')) {
    return {
      image: '/images/generated/uae-sector-hospitality.jpg',
      category: 'Hospitality Management',
      monogram: 'HOSP',
    };
  }

  // 10. Design, Fashion, Media, Arts & Cultural Studies
  if (
    text.includes('design') ||
    text.includes('fashion') ||
    text.includes('cultural') ||
    text.includes('media') ||
    text.includes('communication') ||
    text.includes('architecture') ||
    text.includes('chinese studies')
  ) {
    return {
      image: '/images/destinations/taiwan-culture.jpg',
      category: 'Design & Cultural Studies',
      monogram: 'DES',
    };
  }

  // 11. Law, Policy & International Relations
  if (
    text.includes('law') ||
    text.includes('international relations') ||
    text.includes('compliance')
  ) {
    return {
      image: '/images/destinations/uk-oxford-library.jpg',
      category: 'Law & International Relations',
      monogram: 'LAW',
    };
  }

  // 12. Environment, Agriculture & Marine Sciences
  if (
    text.includes('environment') ||
    text.includes('renewable') ||
    text.includes('agriculture') ||
    text.includes('marine')
  ) {
    return {
      image: '/images/destinations/singapore-gardens.jpg',
      category: 'Environmental Sciences',
      monogram: 'ENV',
    };
  }

  return {
    image: '/images/destinations/usa-campus.jpg',
    category: 'Academic Pathway',
    monogram: 'UNI',
  };
}

export function DestinationTemplate({ data, destinationName }: { data: DestinationData; destinationName: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const visual = getDestinationVisual(destinationName);

  const defaultUni = data.universities.list[0] || '';
  const [selectedUni, setSelectedUni] = useState<string>(defaultUni);
  const currentUni = selectedUni || defaultUni;

  const carouselRef = useRef<HTMLDivElement>(null);
  const totalUnis = data.universities.list.length;
  const currentIdx = Math.max(0, data.universities.list.indexOf(currentUni));

  const scrollToUni = (idx: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('[data-uni-card]');
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const handlePrevUni = () => {
    const prevIdx = (currentIdx - 1 + totalUnis) % totalUnis;
    setSelectedUni(data.universities.list[prevIdx]);
    scrollToUni(prevIdx);
  };

  const handleNextUni = () => {
    const nextIdx = (currentIdx + 1) % totalUnis;
    setSelectedUni(data.universities.list[nextIdx]);
    scrollToUni(nextIdx);
  };

  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNextUni();
      else handlePrevUni();
    }
    touchStartX.current = null;
  };

  const coursesCarouselRef = useRef<HTMLDivElement>(null);
  const scrollCourses = (direction: 'left' | 'right') => {
    const el = coursesCarouselRef.current;
    if (!el) return;
    const scrollAmount = 340;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-6 border-t border-white/15">
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
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E6DDCC]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FC7F4E]/10 text-[#A33E11] flex items-center justify-center shrink-0 border border-[#FC7F4E]/30">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                        {data.budget.headline}
                      </h2>
                      <span className="text-xs text-[#71787B] block mt-0.5">
                        Indicative expenditure estimates for informed student planning
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 bg-[#FAF8F5] border border-[#E6DDCC] text-[11px] font-bold uppercase tracking-wider text-[#0C3844] rounded-[2px]">
                    Financial Guide
                  </span>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {data.budget.items.map((item, idx) => {
                    const itemName = item.item.toLowerCase();
                    const isTuition = itemName.includes('tuition') || itemName.includes('fee');
                    const isLiving = itemName.includes('living') || itemName.includes('housing') || itemName.includes('accommodation');
                    const isInsurance = itemName.includes('insurance') || itemName.includes('health') || itemName.includes('medical');

                    return (
                      <div
                        key={item.item}
                        className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start bg-[#FAF8F5] border border-[#E6DDCC] p-5 rounded-[2px] flex flex-col justify-between hover:border-[#A33E11] hover:shadow-md transition-all duration-300 group"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A33E11] bg-[#FC7F4E]/10 border border-[#FC7F4E]/30 px-2 py-0.5 rounded-[2px]">
                              {isTuition ? 'Academic Fee' : isLiving ? 'Cost of Living' : isInsurance ? 'Health & Cover' : `Category ${idx + 1}`}
                            </span>
                            <span className="text-xs font-mono font-bold text-[#71787B]">
                              0{idx + 1}
                            </span>
                          </div>
                          <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-2 group-hover:text-[#A33E11] transition-colors">
                            {item.item}
                          </h3>
                        </div>
                        <div className="mt-3 pt-3 border-t border-[#E6DDCC]/70 bg-white/80 p-3 rounded-[2px] border border-[#E6DDCC]">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#71787B] block mb-1">
                            Estimated Range
                          </span>
                          <p className="text-sm font-semibold text-[#00222B] leading-snug">
                            {item.indicativeInfo}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {data.budget.planningReference && (
                  <div className="mt-6 pt-4 border-t border-[#E6DDCC] flex items-start gap-3 text-xs text-[#41484B] bg-[#FAF8F5] p-4 border border-[#E6DDCC] rounded-[2px]">
                    <AlertCircle size={18} className="text-[#A33E11] mt-0.5 shrink-0" />
                    <p className="leading-relaxed">{data.budget.planningReference}</p>
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
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.costApproach.points.map((pt) => (
                    <div key={pt.title} className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                          {pt.title}
                        </h3>
                        <p className="text-sm text-[#41484B] leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
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
                  <p className="text-sm text-[#41484B] leading-relaxed mb-4">
                    {data.costPlanning.paragraph}
                  </p>
                )}
                {data.costPlanning.points && (
                  <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                    {data.costPlanning.points.map((pt) => (
                      <div key={pt.title} className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                            {pt.title}
                          </h3>
                          <p className="text-sm text-[#41484B] leading-relaxed">
                            {pt.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* 2. Popular Courses */}
            {data.popularCourses && (
              <section aria-label="Popular Courses" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E6DDCC]">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-5 h-5 text-[#A33E11]" />
                    <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                      {data.popularCourses.headline}
                    </h2>
                  </div>

                  {/* Desktop scroll navigation buttons */}
                  <div className="hidden sm:flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => scrollCourses('left')}
                      className="w-8 h-8 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollCourses('right')}
                      className="w-8 h-8 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
                      aria-label="Scroll right"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div
                  ref={coursesCarouselRef}
                  className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x after:content-[''] after:shrink-0 after:w-4 sm:after:hidden"
                >
                  {data.popularCourses.items.map((course, idx, allCourses) => {
                    const meta = getCourseMeta(course);
                    const totalCourses = allCourses.length;
                    const totalStr = totalCourses < 10 ? `0${totalCourses}` : String(totalCourses);

                    return (
                      <div
                        key={course}
                        onClick={() => {
                          const formEl = document.getElementById('destination-lead-form') || document.querySelector('form');
                          if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-[82vw] max-w-[340px] sm:w-[320px] shrink-0 snap-start bg-[#FAF8F5] border border-[#E6DDCC] rounded-xl overflow-hidden hover:border-[#A33E11] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                      >
                        {/* 16:10 Topic Photographic Header */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#00222B] shrink-0">
                          <Image
                            src={meta.image}
                            alt={course}
                            fill
                            sizes="(min-width: 640px) 340px, 82vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                          {/* Category Tag */}
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-0.5 bg-black/60 backdrop-blur-xs text-[#FC7F4E] border border-white/20 text-[10px] font-bold uppercase tracking-wider rounded-[2px]">
                              {meta.category}
                            </span>
                          </div>

                          {/* Top-Right Monogram */}
                          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-black/10 flex items-center justify-center font-bold text-[10px] text-[#0C3844]">
                            {meta.monogram}
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3 bg-white">
                          <div>
                            <div className="flex items-start gap-2.5 mb-2">
                              <CheckCircle2 size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
                              <h3 className="font-serif text-base sm:text-lg font-bold text-[#1B1C1A] leading-snug group-hover:text-[#A33E11] transition-colors line-clamp-2">
                                {course}
                              </h3>
                            </div>
                            <p className="text-xs text-[#71787B] leading-relaxed pl-6">
                              Undergraduate &amp; postgraduate international study pathways
                            </p>
                          </div>

                          <div className="pt-3 border-t border-[#E6DDCC]/70 pl-6 flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-[#A33E11] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                              <span>Inquire Course</span>
                              <ChevronRight size={13} />
                            </span>
                            <span className="text-[10px] font-mono font-semibold text-[#71787B]">
                              0{idx + 1}/{totalStr}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 3. Universities to Explore (Homepage-style Slide Showcase on Desktop & Mobile) */}
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
                    {String(currentIdx + 1).padStart(2, '0')}/
                    {String(totalUnis).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrevUni}
                      className="w-8 h-8 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
                      aria-label="Previous university"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextUni}
                      className="w-8 h-8 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
                      aria-label="Next university"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Horizontal Pill Tabs Switcher (Top quick selection) */}
              <div className="mb-6 -mx-2 px-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-2 pb-1 min-w-max">
                  {data.universities.list.map((uni, idx) => {
                    const active = idx === currentIdx;
                    return (
                      <button
                        key={uni}
                        type="button"
                        onClick={() => {
                          setSelectedUni(uni);
                          scrollToUni(idx);
                        }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                          active
                            ? 'bg-[#00222B] text-white shadow-sm ring-1 ring-black/10'
                            : 'bg-[#FAF8F5] text-[#1B1C1A] border border-[#E6DDCC] hover:border-[#A33E11]'
                        }`}
                      >
                        <CountryFlag country={destinationName} width={14} height={10} className="rounded-xs object-cover" />
                        <span>{uni}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hero Banner with Counter and Navigation Arrows (Homepage Slide Pattern) */}
              <div
                className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md bg-[#00222B] touch-pan-y mb-6"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentUni}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentUniImage}
                      alt={`${currentUni} academic campus`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 850px, 95vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                  </motion.div>
                </AnimatePresence>

                {/* Upper-Left Destination & University Overlay */}
                <div className="absolute top-4 left-4 right-4 z-10 pointer-events-none select-none">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-[#FC7F4E] shadow-sm mb-1.5">
                    <CountryFlag country={destinationName} width={14} height={10} className="rounded-xs" />
                    <span>{destinationName}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-tight max-w-[85%]">
                    {currentUni}
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-white/85 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] line-clamp-1">
                    Accredited international academic pathways &amp; university degrees
                  </p>
                </div>

                {/* Bottom-Left Counter + Navigation Arrows */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                  <div className="text-white font-bold text-2xl drop-shadow-md">
                    {String(currentIdx + 1).padStart(2, '0')}
                    <span className="text-base font-light text-white/80">/{String(totalUnis).padStart(2, '0')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevUni}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#1B1C1A] shadow-md flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer active:scale-95 touch-manipulation"
                      aria-label="Previous university"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextUni}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#1B1C1A] shadow-md flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer active:scale-95 touch-manipulation"
                      aria-label="Next university"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sliding University Cards Carousel (Peeking next card layout matching homepage) */}
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
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-3 pt-1 -mx-2 px-2"
                  style={{ scrollSnapType: 'x mandatory' }}
                  role="region"
                  aria-label="Universities carousel"
                >
                  {data.universities.list.map((uni, idx) => {
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
                        data-uni-card
                        onClick={() => {
                          setSelectedUni(uni);
                          scrollToUni(idx);
                        }}
                        className={`w-[85vw] max-w-[340px] sm:w-[320px] bg-white rounded-2xl shadow-md overflow-hidden border snap-start shrink-0 flex flex-col justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#A33E11] ring-2 ring-[#A33E11]/30 shadow-lg'
                            : 'border-[#E6DDCC] hover:border-[#A33E11]'
                        }`}
                      >
                        {/* 16:10 Campus Image with monogram badge */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 shrink-0">
                          <Image
                            src={uniImg}
                            alt={`${uni} academic campus`}
                            fill
                            sizes="(min-width: 768px) 340px, 85vw"
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                          <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-md border border-black/10 flex items-center justify-center font-bold text-xs text-[#0C3844] z-10">
                            {monogram}
                          </div>
                          <div className="absolute bottom-2.5 left-3 right-3">
                            <span className="text-white font-serif text-sm font-bold truncate block drop-shadow-sm">
                              {uni}
                            </span>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-4 pt-3 flex-1 flex flex-col justify-between gap-3">
                          <div>
                            {/* Flag + Destination Name */}
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <CountryFlag country={destinationName} width={16} height={11} className="rounded-xs object-cover shrink-0" />
                              <span className="text-[11px] font-semibold text-[#71787B] uppercase tracking-wider">{destinationName}</span>
                            </div>

                            {/* Tag pill */}
                            <div className="mb-2">
                              <span className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                                isSelected
                                  ? 'bg-[#A33E11] text-white border-[#A33E11]'
                                  : 'bg-[#FC7F4E]/10 text-[#A33E11] border-[#FC7F4E]/30'
                              }`}>
                                {isSelected ? '● Selected Campus' : 'Featured Institution'}
                              </span>
                            </div>

                            {/* University Title */}
                            <h4 className="font-serif text-base font-bold text-[#1B1C1A] leading-snug line-clamp-2">
                              {uni}
                            </h4>

                            {/* Description */}
                            <p className="mt-1.5 text-xs text-[#41484B] leading-relaxed line-clamp-2">
                              Higher education institution offering accredited undergraduate &amp; postgraduate degrees for international students.
                            </p>

                            {/* Degree & Duration */}
                            <div className="mt-3 pt-2.5 border-t border-[#E6DDCC]/60 space-y-1.5 text-xs text-[#41484B]">
                              <div className="flex items-center gap-1.5">
                                <GraduationCap size={14} className="text-[#0C3844] shrink-0" />
                                <span>Undergraduate &amp; Postgraduate</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Calendar size={14} className="text-[#41484B] shrink-0" />
                                <span>3 - 4 Years | International Cohort</span>
                              </div>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedUni(uni);
                              const formEl = document.getElementById('destination-lead-form') || document.querySelector('form');
                              if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`w-full text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl text-center transition-colors cursor-pointer shadow-xs active:scale-98 inline-flex items-center justify-center gap-1.5 ${
                              isSelected
                                ? 'bg-[#A33E11] hover:bg-[#85320D] text-white'
                                : 'bg-[#FAF8F5] hover:bg-[#A33E11] text-[#1B1C1A] hover:text-white border border-[#E6DDCC]'
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

              <p className="text-xs text-[#71787B] mt-4 italic pt-4 border-t border-[#E6DDCC]">
                {data.universities.disclaimer}
              </p>
            </section>

            {/* 4. Page-Specific Module: Choose Your Route */}
            {data.chooseYourRoute && (
              <section aria-label="Study Routes" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.chooseYourRoute.headline}
                </h2>
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.chooseYourRoute.routes.map((route) => (
                    <div
                      key={route.title}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1.5">
                          {route.title}
                        </h3>
                        <p className="text-xs text-[#41484B] leading-relaxed">
                          {route.description}
                        </p>
                      </div>
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
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.chooseByCourse.steps.map((st) => (
                    <div
                      key={st.number}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
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
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.purposefulShortlist.steps.map((st) => (
                    <div
                      key={st.number}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
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
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.shortlistSteps && (
              <section aria-label="Shortlist Steps" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.shortlistSteps.headline}
                </h2>
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.shortlistSteps.steps.map((st) => (
                    <div
                      key={st.number}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
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
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.beforeApplying && (
              <section aria-label="Before Applying" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.beforeApplying.headline}
                </h2>
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.beforeApplying.steps.map((st) => (
                    <div
                      key={st.number}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
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
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.whatToCompare && (
              <section aria-label="What to Compare" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.whatToCompare.headline}
                </h2>
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.whatToCompare.steps ? (
                    data.whatToCompare.steps.map((st) => (
                      <div
                        key={st.number}
                        className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                      >
                        <div>
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
                      </div>
                    ))
                  ) : data.whatToCompare.bullets ? (
                    data.whatToCompare.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex items-start gap-2.5"
                      >
                        <CheckCircle2 size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
                        <span className="text-sm text-[#41484B] leading-relaxed">{b}</span>
                      </div>
                    ))
                  ) : null}
                </div>
              </section>
            )}

            {data.beforeYouPay && (
              <section aria-label="Before You Pay" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.beforeYouPay.headline}
                </h2>
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.beforeYouPay.bullets.map((b, i) => (
                    <div
                      key={i}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex items-start gap-2.5"
                    >
                      <CheckCircle2 size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#41484B] leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.countryPriority && (
              <section aria-label="Country Priority" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.countryPriority.headline}
                </h2>
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.countryPriority.items.map((it, i) => (
                    <div
                      key={it.priority}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#A33E11] uppercase tracking-wider block mb-1">
                          Priority 0{i + 1}
                        </span>
                        <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                          {it.priority}
                        </h3>
                        <p className="text-xs text-[#41484B] leading-relaxed">
                          {it.countries}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.fundingOptions && (
              <section aria-label="Funding Options" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-3">
                  {data.fundingOptions.headline}
                </h2>
                <p className="text-sm text-[#41484B] leading-relaxed">
                  {data.fundingOptions.description}
                </p>
              </section>
            )}

            {data.documents && (
              <section aria-label="Required Documents" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-3">
                  {data.documents.headline}
                </h2>
                <p className="text-sm text-[#41484B] leading-relaxed">
                  {data.documents.description}
                </p>
              </section>
            )}

            {/* 5. Page-Specific Module: What To Look For / Program Types */}
            {data.whatToLookFor && (
              <section aria-label="Considerations" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                  {data.whatToLookFor.headline}
                </h2>
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.whatToLookFor.points.map((pt) => (
                    <div
                      key={pt.title}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                          {pt.title}
                        </h3>
                        <p className="text-sm text-[#41484B] leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
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
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.programTypes.programs.map((prog) => (
                    <div
                      key={prog.title}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                          {prog.title}
                        </h3>
                        <p className="text-sm text-[#41484B] leading-relaxed">
                          {prog.description}
                        </p>
                      </div>
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
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.programmeSpotlight.programmes.map((p) => (
                    <div
                      key={p.name}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1">
                          {p.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#A33E11] mb-2">
                          {p.tuition}
                        </p>
                        <p className="text-xs text-[#41484B] leading-relaxed">
                          {p.consideration}
                        </p>
                      </div>
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
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:space-y-3 lg:block gap-3 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.scholarships.items.map((item, i) => (
                    <div
                      key={i}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start flex items-start gap-2.5 p-4 bg-[#FBF8F1] border border-[#E6DDCC]"
                    >
                      <CheckCircle2 size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#41484B] leading-relaxed">{item}</span>
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
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.admissionsChecklist.steps.map((st) => (
                    <div
                      key={st.number}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between"
                    >
                      <div>
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
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:space-y-3 lg:block gap-3 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                  {data.admissionsAndVisas.steps.map((st) => (
                    <div key={st.step} className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-3.5 bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col sm:flex-row sm:items-baseline gap-2">
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
