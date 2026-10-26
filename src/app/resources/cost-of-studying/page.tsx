import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, AlertCircle, HelpCircle, CheckCircle2, Wallet, Coins } from 'lucide-react';
import { costOfStudyingContent } from '@/content/resources/cost-of-studying';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';
import { BlossomLeafAnimation } from '@/components/ui/BlossomLeafAnimation';
import { BotanicalWatermark, ColorContrastLeafPair } from '@/components/ui/BotanicalLeafAccents';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: costOfStudyingContent.meta.title,
  description: costOfStudyingContent.meta.description,
};

export default function CostOfStudyingPage() {
  const { hero, sevenParts, officialReferences, whatToAsk, closing } = costOfStudyingContent;

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

      {/* Seven Parts Budgeting Table */}
      <section className="py-24 border-b border-[#E6DDCC] bg-white relative overflow-hidden">
        <BotanicalWatermark variant="rust" opacity={0.05} className="w-80 h-80 -bottom-16 -left-16" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Budget Architecture
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
                {sevenParts.headline}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto border border-[#E6DDCC] shadow-md max-w-4xl mx-auto bg-white">
              <table className="w-full min-w-[560px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-1/3">Cost Component</th>
                    <th className="py-4 px-6 font-semibold">Items to Include</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6DDCC] text-sm">
                  {sevenParts.rows.map((row) => (
                    <tr key={row.component} className="hover:bg-[#F3EBDD]/40 transition-colors">
                      <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                        {row.component}
                      </td>
                      <td className="py-4 px-6 text-[#41484B] leading-relaxed">
                        {row.include}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Official Reference Points — October 2026 */}
      <section className="py-24 border-b border-[#E6DDCC] bg-[#FBF8F1] relative overflow-hidden">
        <BotanicalWatermark variant="emerald" opacity={0.06} className="w-80 h-80 -top-16 -right-16" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Official Guidance
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
                {officialReferences.headline}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto border border-[#E6DDCC] bg-white shadow-md max-w-4xl mx-auto mb-8">
              <table className="w-full min-w-[580px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-1/4">Destination</th>
                    <th className="py-4 px-6 font-semibold">Official Published Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6DDCC] text-sm">
                  {officialReferences.rows.map((row) => (
                    <tr key={row.destination} className="hover:bg-[#F3EBDD]/40 transition-colors">
                      <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                        {row.destination}
                      </td>
                      <td className="py-4 px-6 text-[#41484B] leading-relaxed">
                        {row.reference}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="max-w-4xl mx-auto p-5 border border-[#E6DDCC] bg-white text-xs text-[#71787B] flex items-start gap-3 shadow-sm">
              <AlertCircle size={18} className="text-[#A33E11] mt-0.5 shrink-0" />
              <p className="leading-relaxed">{officialReferences.caution}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What to Ask Before Paying a University */}
      <section className="py-24 border-b border-[#E6DDCC] bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center gap-2 mb-3">
                  <ColorContrastLeafPair />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                    Due Diligence Checklist
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
                  {whatToAsk.headline}
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-3.5">
              {whatToAsk.bullets.map((b, idx) => (
                <ScrollReveal key={b} delay={idx * 0.06}>
                  <div className="p-5 bg-[#FBF8F1] border border-[#E6DDCC] flex items-start gap-3.5 hover:border-[#A33E11] hover:shadow-md transition-all">
                    <CheckCircle2 size={18} className="text-[#A33E11] mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-[#1B1C1A] leading-relaxed">{b}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
                  Cost Assessment
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Review your total study budget with an advisor.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                We review destination tuition ranges, proof-of-funds rules, and accommodation costs to ensure your numbers are grounded in reality.
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
                <HomeLeadForm source="cost_guide_page" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
