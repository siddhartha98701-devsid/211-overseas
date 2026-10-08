'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface University {
  name: string;
  abbr: string;
  image?: string;
  description: string;
  fullName?: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface UniversityFactor {
  factor: string;
  desc: string;
}

/* -------------------------------------------------------------------------- */
/* 1. Programme Levels: Mobile Scroll-Snap Carousel, Desktop Grid             */
/* -------------------------------------------------------------------------- */
export function ProgramLevelsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const programs = [
    {
      title: 'Korean Language Programs',
      level: 'Foundation & Immersion',
      description: 'Intensive 10-week terms to 1-year language preparation for academic degree progression and daily cultural fluency.',
      href: '/study-in-south-korea/korean-language',
      cta: 'Explore Language Track →',
      features: ['D-4 Visa Eligible', 'All Proficiency Levels', 'Direct TOPIK Coaching'],
    },
    {
      title: "Bachelor's Degree Programs",
      level: 'Undergraduate (4 Years)',
      description: 'Direct entry into world-class South Korean undergraduate degrees across technology, business, design, and sciences.',
      href: '/study-in-south-korea/bachelors',
      cta: "Explore Bachelor's →",
      features: ['100% English Options', 'Merit Scholarships', 'Internships in Seoul'],
    },
    {
      title: "Master's & PhD Programs",
      level: 'Postgraduate (2 Years)',
      description: 'Cutting-edge research and coursework master’s degrees with high faculty stipends, lab funding, and post-study career paths.',
      href: '/study-in-south-korea/masters',
      cta: "Explore Master's →",
      features: ['Full Lab Scholarships', 'GKS Compatible', 'D-10 Job Seeker Visa'],
    },
    {
      title: '100% English-Taught Programs',
      level: 'Bilingual & Global',
      description: 'Degrees conducted entirely in English with no mandatory initial Korean language requirement prior to enrolment.',
      href: '/study-in-south-korea/english-taught',
      cta: 'Explore English Tracks →',
      features: ['IELTS 5.5+ Accepted', 'Duolingo Recognized', 'Global Cohort'],
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIdx = Math.round(scrollLeft / (clientWidth * 0.82));
    setActiveIndex(Math.min(programs.length - 1, Math.max(0, newIdx)));
  };

  return (
    <section className="py-12 md:py-24 border-b border-[#E6DDCC]" aria-label="Program levels">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="text-xs uppercase tracking-widest text-[#94682B] font-medium block mb-2">
              Choose Your Degree Level
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-4">
              Program levels
            </h2>
            <p className="text-sm sm:text-base text-[#57514A] leading-relaxed font-light">
              Whether starting undergraduate studies, pursuing advanced postgraduate research, or mastering Korean language proficiency.
            </p>
          </div>

          {/* Carousel container: swipe on mobile with partial card peeking; grid on desktop */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {programs.map((p) => (
              <div
                key={p.title}
                className="snap-start shrink-0 w-[82vw] max-w-[310px] md:w-auto border border-[#E6DDCC] bg-white p-6 flex flex-col justify-between transition-all hover:border-[#94682B] hover:shadow-[0_12px_30px_rgba(42,42,42,0.08)]"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#94682B]/10 text-[#94682B] inline-block mb-3 border border-[#94682B]/20">
                    {p.level}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A2A2A] mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <ul className="space-y-2 mb-6 border-t border-[#E6DDCC]/60 pt-4">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-[#57514A]">
                        <CheckCircle2 size={13} className="text-[#94682B] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#94682B] hover:text-[#7A5622] pt-2 border-t border-[#E6DDCC]/40 transition-colors"
                >
                  <span>{p.cta}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile pagination dots */}
          <div className="flex md:hidden justify-center items-center gap-1.5 mt-4" aria-hidden="true">
            {programs.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-6 bg-[#94682B]' : 'w-1.5 bg-[#E6DDCC]'
                }`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Leading Universities with 16:10 Campus Photos and Desktop Hover Zoom    */
/* -------------------------------------------------------------------------- */
export function UniversitySection({
  universities,
  factors,
}: {
  universities: University[];
  factors: UniversityFactor[];
}) {
  return (
    <section className="py-12 md:py-24 border-b border-[#E6DDCC]" aria-label="Leading South Korean Universities">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#94682B] font-medium block mb-2">
              Academic Excellence
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-4">
              Leading South Korean universities to explore
            </h2>
            <p className="text-sm sm:text-base text-[#57514A] leading-relaxed font-light">
              Renowned public and private research universities known for engineering, business, sciences, and innovation.
            </p>
          </div>

          {/* Universities Grid with 16:10 images and badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {universities.map((uni) => (
              <article
                key={uni.name}
                className="group border border-[#E6DDCC] bg-white flex flex-col justify-between overflow-hidden transition-all hover:border-[#94682B] hover:shadow-[0_12px_32px_rgba(42,42,42,0.08)]"
              >
                <div>
                  {/* 16:10 Campus Photo with desktop hover zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
                    {uni.image ? (
                      <Image
                        src={uni.image}
                        alt={`${uni.name} campus building`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#E6DDCC]/30 text-[#57514A] text-xs">
                        {uni.abbr} Campus
                      </div>
                    )}

                    {/* University Badge / Acronym */}
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase border border-[#B88740]/60 shadow-sm">
                      {uni.abbr}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A2A2A] tracking-tight mb-2 group-hover:text-[#94682B] transition-colors leading-snug">
                      {uni.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed">
                      {uni.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                  <Link
                    href={`/contact?interest=Study+in+South+Korea&uni=${encodeURIComponent(uni.name)}#enquiry-form`}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#94682B] hover:text-[#7A5622] transition-colors"
                  >
                    <span>Check Admission Criteria →</span>
                  </Link>
                </div>
              </article>
            ))}

            {/* Additional Universities Card */}
            <div className="border border-dashed border-[#E6DDCC] bg-[#FAF8F5] p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#94682B] font-semibold block mb-2">
                  Full Network
                </span>
                <h3 className="font-serif text-xl font-bold text-[#2A2A2A] tracking-tight mb-3">
                  And many more institutions
                </h3>
                <p className="text-sm text-[#57514A] leading-relaxed">
                  We guide students across additional specialized academies, national institutes, and private universities tailored to your specific GPA, budget, and major.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/contact?interest=Study+in+South+Korea#enquiry-form"
                  className="btn-shine inline-flex items-center gap-2 bg-[#94682B] hover:bg-[#7A5622] text-white px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Request University Matching
                </Link>
              </div>
            </div>
          </div>

          {/* Selection Factors */}
          <div className="mt-16 pt-12 border-t border-[#E6DDCC]">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A] mb-8">
              Key factors when selecting your university
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {factors.map((item, idx) => (
                <div key={idx} className="border-t border-[#E6DDCC]/60 pt-4">
                  <h4 className="font-semibold text-sm text-[#2A2A2A] mb-1">
                    {item.factor}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact?interest=Study+in+South+Korea#enquiry-form"
                className="btn-shine inline-block bg-[#94682B] hover:bg-[#7A5622] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors shadow-sm"
              >
                Find Universities For My Profile
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. 8-Step South Korea Process with Mobile Horizontal Scroll-Snap & Desktop */
/* -------------------------------------------------------------------------- */
export function SouthKoreaProcessSection({ steps }: { steps: ProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, clientWidth } = containerRef.current;
    const idx = Math.round(scrollLeft / (clientWidth * 0.8));
    setCurrentIdx(Math.min(steps.length - 1, Math.max(0, idx)));
  };

  const scrollStep = (direction: 'prev' | 'next') => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.clientWidth * 0.82;
    containerRef.current.scrollBy({
      left: direction === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-12 md:py-24 border-b border-[#E6DDCC] bg-white" aria-label="Our South Korea Process">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#94682B] font-medium block mb-2">
                Structured Roadmap
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-3">
                Our South Korea process
              </h2>
              <p className="text-sm sm:text-base text-[#57514A] leading-relaxed font-light">
                Our structured 8-stage roadmap to successfully securing admissions, scholarships, and your South Korean student visa.
              </p>
            </div>

            {/* Desktop Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollStep('prev')}
                aria-label="Previous process step"
                className="h-10 w-10 border border-[#E6DDCC] bg-white text-[#2A2A2A] hover:border-[#94682B] hover:text-[#94682B] transition-colors flex items-center justify-center cursor-pointer shadow-sm"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollStep('next')}
                aria-label="Next process step"
                className="h-10 w-10 border border-[#E6DDCC] bg-white text-[#2A2A2A] hover:border-[#94682B] hover:text-[#94682B] transition-colors flex items-center justify-center cursor-pointer shadow-sm"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Horizontal scroll track with scroll-snap */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="snap-start shrink-0 w-[80vw] sm:w-[320px] lg:w-[360px] border border-[#E6DDCC] bg-[#FAF8F5] p-6 flex flex-col justify-between transition-all hover:border-[#94682B] hover:bg-white hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-[#94682B]">
                      {step.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#57514A] font-semibold px-2 py-0.5 bg-white border border-[#E6DDCC]">
                      Stage {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A2A2A] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar and dots */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIdx === i ? 'w-6 bg-[#94682B]' : 'w-1.5 bg-[#E6DDCC]'
                  }`}
                />
              ))}
            </div>

            <Link
              href="/contact?interest=Study+in+South+Korea#enquiry-form"
              className="btn-shine inline-block bg-[#94682B] hover:bg-[#7A5622] text-white px-7 py-3 text-xs uppercase tracking-widest font-medium transition-colors shadow-sm"
            >
              Check My South Korea Eligibility
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
