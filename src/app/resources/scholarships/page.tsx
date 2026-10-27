import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2, ShieldAlert } from 'lucide-react';
import { scholarshipsContent } from '@/content/resources/scholarships';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';
import { BlossomLeafAnimation } from '@/components/ui/BlossomLeafAnimation';
import { BotanicalWatermark, ColorContrastLeafPair } from '@/components/ui/BotanicalLeafAccents';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ScholarshipDestinationsShowcase } from '@/components/resources/ScholarshipDestinationsShowcase';

export const metadata: Metadata = {
  title: scholarshipsContent.meta.title,
  description: scholarshipsContent.meta.description,
};

export default function ScholarshipsPage() {
  const { hero, fundingTypes, routesToResearch, beforeRelying, closing } = scholarshipsContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen relative overflow-hidden">
      {/* Hero with High-Contrast Leaves */}
      <section className="relative bg-[#00222B] text-white pt-36 pb-24 md:pt-40 md:pb-28 border-b border-[#E6DDCC] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0C3844]/60 via-[#00222B]/90 to-[#00222B]"
        />
        <BlossomLeafAnimation theme="dark" density="normal" />
        <BotanicalWatermark variant="gold" opacity={0.12} className="w-80 h-80 -top-16 -right-16" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-5 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm">
            <ColorContrastLeafPair />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E]">
              {hero.eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6 tracking-tight">
            {hero.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed font-light">
            {hero.paragraph}
          </p>
        </div>
      </section>

      {/* Funding Types & What to Check */}
      <section className="py-24 border-b border-[#E6DDCC] bg-white relative overflow-hidden">
        <BotanicalWatermark variant="rust" opacity={0.05} className="w-80 h-80 -bottom-16 -left-16" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Financial Aid Categories
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
                {fundingTypes.headline}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {/* Mobile / Tablet Horizontal Scroll Detail Cards */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4">
              {fundingTypes.rows.map((row, idx) => (
                <div
                  key={row.type}
                  className="w-[82vw] sm:w-[320px] shrink-0 snap-start bg-white rounded-2xl border border-[#E6DDCC] p-6 shadow-sm hover:shadow-xl hover:border-[#A33E11] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#A33E11] bg-[#FC7F4E]/10 rounded-full border border-[#FC7F4E]/25 block w-fit mb-2.5">
                      Funding Category 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors mb-3">
                      {row.type}
                    </h3>
                    <div className="my-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#E6DDCC]/70 grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-sm font-bold font-mono text-[#A33E11] block leading-tight">Grant / Aid</span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">Category</span>
                      </div>
                      <div>
                        <span className="text-sm font-bold font-mono text-[#00222B] block leading-tight">Verified</span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">Compliance</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#71787B] block mb-1 font-semibold">
                        What to Check &amp; Verify:
                      </span>
                      <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                        {row.whatToCheck}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto border border-[#E6DDCC] shadow-md bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-1/3">Funding Type</th>
                    <th className="py-4 px-6 font-semibold">What to Check &amp; Verify</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6DDCC] text-sm">
                  {fundingTypes.rows.map((row) => (
                    <tr key={row.type} className="hover:bg-[#F3EBDD]/40 transition-colors">
                      <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                        {row.type}
                      </td>
                      <td className="py-4 px-6 text-[#41484B] leading-relaxed">
                        {row.whatToCheck}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scholarship Routes to Research */}
      <section className="py-24 border-b border-[#E6DDCC] bg-[#FBF8F1] relative overflow-hidden">
        <BotanicalWatermark variant="emerald" opacity={0.06} className="w-80 h-80 -top-16 -right-16" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  By Study Destination
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
                {routesToResearch.headline}
              </h2>
            </div>
          </ScrollReveal>

          <ScholarshipDestinationsShowcase routes={routesToResearch.routes} />
        </div>
      </section>

      {/* Four Considerations Before Relying on a Scholarship */}
      <section className="py-24 border-b border-[#E6DDCC] bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Prudent Planning
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
                {beforeRelying.headline}
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {beforeRelying.steps.map((st, idx) => (
              <ScrollReveal key={st.number} delay={idx * 0.1} className="w-[80vw] sm:w-[280px] lg:w-auto shrink-0 snap-start">
                <div className="bg-white rounded-2xl border border-[#E6DDCC] p-6 shadow-sm hover:shadow-xl hover:border-[#A33E11] transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#A33E11] bg-[#FC7F4E]/10 rounded-full border border-[#FC7F4E]/25 block w-fit mb-2.5">
                      {st.number}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors mb-3">
                      {st.title}
                    </h3>
                    <div className="my-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#E6DDCC]/70 grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-sm font-bold font-mono text-[#A33E11] block leading-tight">Rule</span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">{st.number}</span>
                      </div>
                      <div>
                        <span className="text-sm font-bold font-mono text-[#00222B] block leading-tight">Financial</span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">Prudence</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24 bg-[#FBF8F1] relative overflow-hidden">
        <BlossomLeafAnimation theme="contrast" density="subtle" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E6DDCC] rounded-full">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Scholarship Advisory
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Evaluate your eligibility for international scholarships.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                We help assess entry records, nomination criteria, and university deadline schedules. No false promises of guaranteed awards.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={closing.ctas.primary.href}
                  className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2 group"
                >
                  <span>{closing.ctas.primary.label}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={closing.ctas.secondary.href}
                  className="px-6 py-3.5 border border-[#1B1C1A] bg-white hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {closing.ctas.secondary.label}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
              <div className="bg-white border-2 border-[#E6DDCC] hover:border-[#A33E11]/60 transition-colors p-2 shadow-xl">
                <HomeLeadForm source="scholarships_page" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
