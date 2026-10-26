'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, CheckCircle2, AlertCircle, Building2, Wallet, BookOpen } from 'lucide-react';
import { DestinationLeadForm } from '@/components/forms/DestinationLeadForm';
import { CountryAtmosphereAnimation } from '@/components/ui/CountryAtmosphereAnimation';

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

export function DestinationTemplate({ data, destinationName }: { data: DestinationData; destinationName: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC] relative overflow-hidden">
        <CountryAtmosphereAnimation country={destinationName} />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
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
            <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-10">
              {data.hero.paragraph}
            </p>
          )}

          {/* Quick Facts Grid */}
          {data.hero.facts && data.hero.facts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/15">
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

            {/* 3. Universities to Explore */}
            <section aria-label="Universities to explore" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E6DDCC]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#A33E11]" />
                  <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                    {data.universities.headline}
                  </h2>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#A33E11] font-semibold">
                  Independent Research
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {data.universities.list.map((uni) => (
                  <div
                    key={uni}
                    className="p-3 bg-[#FBF8F1] border border-[#E6DDCC] text-center text-xs font-semibold text-[#1B1C1A] hover:border-[#A33E11] transition-colors"
                  >
                    {uni}
                  </div>
                ))}
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
