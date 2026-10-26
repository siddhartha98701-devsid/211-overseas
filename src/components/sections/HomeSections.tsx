'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, CheckCircle2, Building2, Globe2, Briefcase, GraduationCap, Users } from 'lucide-react';
import { homeContent } from '@/content/home';

export function AudienceSelectorSection() {
  const { headline, cards } = homeContent.audienceSelector;

  const icons = [
    <GraduationCap key="grad" className="w-5 h-5 text-[#A33E11]" />,
    <Briefcase key="work" className="w-5 h-5 text-[#A33E11]" />,
    <Users key="parent" className="w-5 h-5 text-[#A33E11]" />,
    <Globe2 key="help" className="w-5 h-5 text-[#A33E11]" />,
  ];

  return (
    <section className="py-20 bg-[#FBF8F1] border-b border-[#E6DDCC]" aria-label="What brings you here">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
            Tailored Pathways
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="bg-white border border-[#E6DDCC] p-6 flex flex-col justify-between hover:border-[#A33E11] transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#F3EBDD] flex items-center justify-center mb-4">
                  {icons[i % icons.length]}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2 group-hover:text-[#A33E11] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[#41484B] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <Link
                href={card.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A33E11] hover:text-[#85320D]"
              >
                <span>{card.cta}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KoreaFeatureSection() {
  const { koreaFeature, universityShowcase } = homeContent;

  return (
    <section className="py-20 bg-white border-b border-[#E6DDCC]" aria-label="South Korea Feature">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Feature Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 bg-[#F3EBDD] text-[#A33E11] text-xs font-semibold uppercase tracking-wider">
              Destination Spotlight
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1C1A] leading-tight">
              {koreaFeature.headline}
            </h2>
            <p className="text-base text-[#41484B] leading-relaxed">
              {koreaFeature.paragraph}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={koreaFeature.ctas.primary.href}
                className="px-6 py-3 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                {koreaFeature.ctas.primary.label}
              </Link>
              <Link
                href={koreaFeature.ctas.secondary.href}
                className="px-6 py-3 border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                {koreaFeature.ctas.secondary.label}
              </Link>
            </div>
          </div>

          {/* Right Column: University Showcase (Clean text cards) */}
          <div className="lg:col-span-6 bg-[#FBF8F1] border border-[#E6DDCC] p-6 lg:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6DDCC]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A33E11]">
                  {universityShowcase.subheadline}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1B1C1A]">
                  {universityShowcase.headline}
                </h3>
              </div>
              <Building2 className="w-6 h-6 text-[#A33E11]" />
            </div>

            <div className="space-y-6">
              {/* SKY Group */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A33E11]" />
                  {universityShowcase.skyGroup.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {universityShowcase.skyGroup.universities.map((uni) => (
                    <div
                      key={uni.name}
                      className="bg-white p-3.5 border border-[#E6DDCC] text-center hover:border-[#A33E11] transition-colors"
                    >
                      <p className="font-serif text-sm font-semibold text-[#1B1C1A] leading-snug">
                        {uni.name}
                      </p>
                      <span className="text-[10px] text-[#71787B] uppercase tracking-wider mt-1 block">
                        {uni.language}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explore More Group */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A33E11]/60" />
                  {universityShowcase.exploreMoreGroup.title}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {universityShowcase.exploreMoreGroup.universities.map((uni) => (
                    <div
                      key={uni.name}
                      className="bg-white p-2.5 border border-[#E6DDCC] text-center text-xs text-[#1B1C1A] font-medium hover:border-[#A33E11] transition-colors"
                    >
                      {uni.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#71787B] mt-6 italic pt-4 border-t border-[#E6DDCC]">
              Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DestinationTableSection() {
  const { headline, rows } = homeContent.destinationTable;

  return (
    <section className="py-20 bg-[#FBF8F1] border-b border-[#E6DDCC]" aria-label="Destination Table">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
            Overview Comparison
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
            {headline}
          </h2>
        </div>

        <div className="overflow-x-auto border border-[#E6DDCC] bg-white shadow-sm">
          <table className="w-full min-w-[620px] text-left border-collapse">
            <thead>
              <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                <th className="py-3.5 px-6 font-semibold w-1/4">Destination</th>
                <th className="py-3.5 px-6 font-semibold">Good starting point for</th>
                <th className="py-3.5 px-6 font-semibold text-right">Explore</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6DDCC] text-sm">
              {rows.map((row) => (
                <tr key={row.destination} className="hover:bg-[#F3EBDD]/40 transition-colors">
                  <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                    {row.destination}
                  </td>
                  <td className="py-4 px-6 text-[#41484B]">
                    {row.goodStartingPointFor}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href={row.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#A33E11] hover:underline"
                    >
                      <span>View</span>
                      <ArrowRight size={13} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function GuidanceSection() {
  const { headline, paragraph, cards } = homeContent.guidance;

  return (
    <section className="py-20 bg-white border-b border-[#E6DDCC]" aria-label="Guidance Services">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
            Independent Advisory
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] mb-4">
            {headline}
          </h2>
          <p className="text-base text-[#41484B] leading-relaxed">
            {paragraph}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="bg-[#FBF8F1] border border-[#E6DDCC] p-6 relative hover:border-[#A33E11] transition-colors"
            >
              <span className="text-xs font-mono font-bold text-[#A33E11] block mb-3">
                0{i + 1}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-[#41484B] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkTeaserSection() {
  const { headline, paragraph, ctas } = homeContent.workTeaser;

  return (
    <section className="py-16 bg-[#00222B] text-white" aria-label="Work Opportunities Teaser">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E]">
              Overseas Employment Pathways
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              {headline}
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {paragraph}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Link
              href={ctas.primary.href}
              className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-center text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              {ctas.primary.label}
            </Link>
            <Link
              href={ctas.secondary.href}
              className="px-6 py-3.5 border border-white/40 hover:bg-white hover:text-black text-white text-center text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              {ctas.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeProcessSection() {
  const { headline, steps } = homeContent.process;

  return (
    <section className="py-20 bg-[#FBF8F1] border-b border-[#E6DDCC]" aria-label="Process Overview">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
            Structured Workflow
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[#E6DDCC] p-8 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-serif font-bold text-[#A33E11] block mb-4">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#41484B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E6DDCC] flex items-center gap-2 text-xs text-[#71787B]">
                <CheckCircle2 size={14} className="text-[#A33E11]" />
                <span>Verified advisory protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFaqSection() {
  const { headline, items } = homeContent.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white border-b border-[#E6DDCC]" aria-label="Frequently Asked Questions">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {headline}
            </h2>
            <p className="text-sm text-[#41484B] leading-relaxed">
              Find transparent responses to fundamental questions before beginning your planning.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A33E11] hover:underline pt-2"
            >
              <span>View all FAQs</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E6DDCC] bg-[#FBF8F1] transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#1B1C1A]"
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
                    <div className="px-6 pb-5 pt-1 text-sm text-[#41484B] leading-relaxed border-t border-[#E6DDCC]/60 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeClosingCtaSection() {
  const { headline, subheadline, ctas } = homeContent.closingCta;

  return (
    <section className="py-20 bg-[#FBF8F1] text-center" aria-label="Closing Call to Action">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-3">
          Take The Next Step
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1C1A] mb-4">
          {headline}
        </h2>
        <p className="text-base text-[#41484B] mb-8 leading-relaxed">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctas.primary.href}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            {ctas.primary.label}
          </Link>
          <a
            href={ctas.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            {ctas.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
