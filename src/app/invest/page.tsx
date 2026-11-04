import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Shield, Users, Briefcase, CheckCircle2, ChevronRight, Lock } from 'lucide-react';
import { investContent } from '@/content/invest';
import { InvestConsultationForm } from '@/components/forms/InvestConsultationForm';
import { CollapsibleFaqList } from '@/components/ui/CollapsibleFaqList';
import { CountryAtmosphereAnimation } from '@/components/ui/CountryAtmosphereAnimation';

export const metadata: Metadata = {
  title: investContent.meta.title,
  description: investContent.meta.description,
};

export default function InvestPage() {
  const {
    hero,
    whyThinkGlobally,
    pathways,
    citizenship,
    residency,
    businessMigration,
    familySecurity,
    advisoryProcess,
    faqs,
    consultation,
    disclaimer,
  } = investContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC] relative overflow-hidden">
        <CountryAtmosphereAnimation country="europe" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-3">
                {hero.eyebrow}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-4">
                {hero.h1}
              </h1>
              <p className="font-serif text-lg sm:text-xl text-[#FC7F4E] mb-6 font-medium">
                {hero.supportingHeadline}
              </p>
              <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
                {hero.paragraph}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={hero.ctas.primary.href}
                  className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm"
                >
                  {hero.ctas.primary.label}
                </Link>
                <Link
                  href={hero.ctas.secondary.href}
                  className="px-6 py-3.5 border border-white/60 hover:bg-white hover:text-black text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {hero.ctas.secondary.label}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-white/20 bg-black/40 shadow-2xl rounded-[3px] group">
                <Image
                  src="/images/destinations/singapore-marina-bay.jpg"
                  alt="Global mobility, international residency and citizenship advisory"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 95vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block mb-1">
                    Private Client Advisory
                  </span>
                  <p className="font-serif text-sm sm:text-base font-semibold leading-tight drop-shadow-sm">
                    {hero.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY THINK GLOBALLY */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Strategic Global Mobility
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] mb-4">
              {whyThinkGlobally.heading}
            </h2>
            <p className="text-base text-[#41484B] leading-relaxed">
              {whyThinkGlobally.description}
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 lg:after:hidden mb-12">
            {whyThinkGlobally.cards.map((card) => (
              <div
                key={card.number}
                className="w-[82vw] sm:w-[300px] lg:w-auto shrink-0 snap-start bg-[#FBF8F1] border border-[#E6DDCC] p-7 flex flex-col justify-between hover:border-[#A33E11] transition-colors"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#A33E11] block mb-3">
                    {card.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#41484B] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#00222B] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#FC7F4E]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-1">
                Guiding Principle
              </span>
              <p className="font-serif text-lg md:text-xl font-medium text-white/95">
                {whyThinkGlobally.closing}
              </p>
            </div>
            <Link
              href={whyThinkGlobally.cta.href}
              className="shrink-0 px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              {whyThinkGlobally.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 3. THREE GLOBAL PATHWAYS */}
      <section id="pathways" className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Three Legal Pathways
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] mb-4">
              {pathways.heading}
            </h2>
            <p className="text-base text-[#41484B] leading-relaxed">
              {pathways.subtitle}
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 lg:gap-8 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 lg:after:hidden">
            {pathways.items.map((item) => (
              <div
                key={item.id}
                className="w-[85vw] sm:w-[380px] lg:w-auto shrink-0 snap-start bg-white border border-[#E6DDCC] p-6 sm:p-8 flex flex-col justify-between hover:border-[#A33E11] transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-[#F3EBDD] text-[#A33E11] text-[11px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#41484B]">
                      PATHWAY {item.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-3">
                    {item.headline}
                  </h3>
                  <p className="text-sm text-[#41484B] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="mb-6 pt-5 border-t border-[#E6DDCC]/70">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B1C1A] block mb-2.5">
                      Explore Eligible Jurisdictions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.jurisdictions.map((j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 bg-[#FBF8F1] border border-[#E6DDCC] text-xs text-[#1B1C1A] font-medium"
                        >
                          {j}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-[#41484B]/80 italic mb-6">
                    {item.note}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E6DDCC] text-xs font-semibold uppercase tracking-wider text-[#A33E11] hover:text-[#85320D] group"
                >
                  <span>{item.buttonLabel}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED CITIZENSHIP DESTINATIONS */}
      <section id="citizenship-showcase" className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
                Pathway 01 · Second Nationality
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] mb-3">
                {citizenship.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#41484B] leading-relaxed">
                {citizenship.description}
              </p>
            </div>
            <Link
              href={citizenship.cta.href}
              className="shrink-0 px-6 py-3 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors self-start md:self-auto"
            >
              {citizenship.cta.label}
            </Link>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 lg:after:hidden">
            {citizenship.destinations.map((d) => (
              <div
                key={d.name}
                className="w-[82vw] sm:w-[340px] lg:w-auto shrink-0 snap-start bg-[#FBF8F1] border border-[#E6DDCC] overflow-hidden flex flex-col justify-between group hover:border-[#A33E11] transition-all"
              >
                {d.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#00222B]">
                    <Image
                      src={d.image}
                      alt={`${d.name} citizenship by investment programme`}
                      fill
                      sizes="(min-width: 768px) 380px, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 bg-[#A33E11] text-white text-[10px] font-bold uppercase tracking-wider">
                        {d.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-1 group-hover:text-[#A33E11] transition-colors">
                      {d.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A33E11] mb-3">
                      {d.subtitle}
                    </p>
                    <p className="text-sm text-[#41484B] leading-relaxed mb-4">
                      {d.description}
                    </p>
                    {d.discover && (
                      <div className="pt-3 border-t border-[#E6DDCC]/70 text-xs text-[#1B1C1A]">
                        <strong className="text-[#A33E11]">Key Focus:</strong> {d.discover}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E6DDCC]">
                    <Link
                      href="#consultation"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A33E11] hover:text-[#85320D]"
                    >
                      <span>Enquire regarding {d.name}</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED RESIDENCY DESTINATIONS */}
      <section id="residency-showcase" className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
                Pathway 02 · Long-Term Residence
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] mb-3">
                {residency.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#41484B] leading-relaxed">
                {residency.description}
              </p>
            </div>
            <Link
              href={residency.cta.href}
              className="shrink-0 px-6 py-3 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors self-start md:self-auto"
            >
              {residency.cta.label}
            </Link>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 lg:after:hidden">
            {residency.destinations.map((d) => (
              <div
                key={d.name}
                className="w-[82vw] sm:w-[340px] lg:w-auto shrink-0 snap-start bg-white border border-[#E6DDCC] overflow-hidden flex flex-col justify-between group hover:border-[#A33E11] transition-all shadow-sm"
              >
                {d.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#00222B]">
                    <Image
                      src={d.image}
                      alt={`${d.name} residency by investment`}
                      fill
                      sizes="(min-width: 768px) 380px, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 bg-[#A33E11] text-white text-[10px] font-bold uppercase tracking-wider">
                        {d.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-1 group-hover:text-[#A33E11] transition-colors">
                      {d.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A33E11] mb-3">
                      {d.subtitle}
                    </p>
                    <p className="text-sm text-[#41484B] leading-relaxed mb-4">
                      {d.description}
                    </p>
                    {d.highlights && (
                      <div className="pt-3 border-t border-[#E6DDCC]/70 text-xs text-[#1B1C1A]">
                        <strong className="text-[#A33E11]">Coverage:</strong> {d.highlights}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E6DDCC]">
                    <Link
                      href="#consultation"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A33E11] hover:text-[#85320D]"
                    >
                      <span>Explore {d.name} Residency</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS & ENTREPRENEUR PATHWAYS */}
      <section id="business-showcase" className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Pathway 03 · Commercial Expansion
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] mb-4">
              {businessMigration.heading}
            </h2>
            <p className="text-base text-[#41484B] leading-relaxed">
              {businessMigration.description}
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 lg:after:hidden mb-12">
            {businessMigration.pathways.map((p) => (
              <div
                key={p.country}
                className="w-[82vw] sm:w-[300px] lg:w-auto shrink-0 snap-start bg-[#FBF8F1] border border-[#E6DDCC] p-7 flex flex-col justify-between hover:border-[#A33E11] transition-colors"
              >
                <div>
                  <span className="px-2.5 py-1 bg-[#F3EBDD] text-[#A33E11] text-[10px] font-bold uppercase tracking-wider inline-block mb-3">
                    {p.highlight}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-1">
                    {p.country}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A33E11] mb-3">
                    {p.programme}
                  </p>
                  <p className="text-sm text-[#41484B] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-[#41484B] leading-relaxed mb-6 italic">
              {businessMigration.closing}
            </p>
            <Link
              href={businessMigration.cta.href}
              className="inline-block px-8 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              {businessMigration.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY FAMILIES EXPLORE THESE PROGRAMMES */}
      <section className="py-20 border-b border-[#E6DDCC] bg-[#00222B] text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-2">
              Family Security &amp; Legacy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              {familySecurity.heading}
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              {familySecurity.description}
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 lg:after:hidden mb-12">
            {familySecurity.pillars.map((pil) => (
              <div
                key={pil.number}
                className="w-[82vw] sm:w-[300px] lg:w-auto shrink-0 snap-start bg-white/5 border border-white/15 p-7 flex flex-col justify-between hover:border-[#FC7F4E] transition-colors backdrop-blur-sm"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#FC7F4E] block mb-3">
                    {pil.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    {pil.title}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    {pil.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base font-serif text-[#FC7F4E] mb-6">
              {familySecurity.closing}
            </p>
            <Link
              href={familySecurity.cta.href}
              className="inline-block px-8 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              {familySecurity.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 8. HOW WE HELP YOU EXPLORE (6-STEP ADVISORY) */}
      <section className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Structured Methodology
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] mb-3">
              {advisoryProcess.heading}
            </h2>
            <p className="text-sm text-[#41484B] leading-relaxed">
              {advisoryProcess.description}
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 lg:after:hidden mb-12">
            {advisoryProcess.steps.map((st) => (
              <div
                key={st.step}
                className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start bg-white border border-[#E6DDCC] p-7 relative hover:border-[#A33E11] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#A33E11]">
                    STEP {st.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#A33E11]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2">
                  {st.title}
                </h3>
                <p className="text-sm text-[#41484B] leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={advisoryProcess.cta.href}
              className="inline-block px-8 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              {advisoryProcess.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Essential Jurisdictional Clarifications
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              A Second Home? Another Passport? Let&apos;s Explore What It Could Mean.
            </h2>
          </div>

          <CollapsibleFaqList items={faqs} showNumbers initialOpenIndex={0} />
        </div>
      </section>

      {/* 10. PRIVATE CONSULTATION FORM & STATUTORY NOTICE */}
      <section id="consultation" className="py-20 bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
                Confidential Inquiry
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight mb-4">
                {consultation.heading}
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed mb-8">
                {consultation.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-white border border-[#E6DDCC]">
                  <Shield className="w-5 h-5 text-[#A33E11] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1C1A]">
                      Discretion &amp; Privacy Guaranteed
                    </h4>
                    <p className="text-xs text-[#41484B] mt-0.5">
                      Your identity and consultation notes remain strictly confidential under Non-Disclosure standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white border border-[#E6DDCC]">
                  <Globe className="w-5 h-5 text-[#A33E11] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1C1A]">
                      Direct Authorised Channels
                    </h4>
                    <p className="text-xs text-[#41484B] mt-0.5">
                      Applications proceed only through officially designated government channels or licensed specialists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white border border-[#E6DDCC]">
                  <Lock className="w-5 h-5 text-[#A33E11] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1C1A]">
                      Zero Upfront Document Requests
                    </h4>
                    <p className="text-xs text-[#41484B] mt-0.5">
                      We never request bank statements or financial asset proof at the initial exploratory stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InvestConsultationForm />
            </div>
          </div>

          {/* Statutory Regulatory Notice from Page 244 of PDF */}
          <div className="mt-16 p-6 sm:p-8 bg-white border border-[#E6DDCC] text-xs text-[#41484B] leading-relaxed">
            <span className="font-bold text-[#1B1C1A] uppercase tracking-wider block mb-2">
              Important Regulatory Disclosure:
            </span>
            <p>{disclaimer}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
