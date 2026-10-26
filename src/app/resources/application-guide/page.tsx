import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileCheck2, UserCheck, Briefcase, GraduationCap } from 'lucide-react';
import { APPLICATION_GUIDE_CONTENT } from '@/content/resources/application-guide';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';
import { BlossomLeafAnimation } from '@/components/ui/BlossomLeafAnimation';
import { BotanicalWatermark, ColorContrastLeafPair } from '@/components/ui/BotanicalLeafAccents';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: APPLICATION_GUIDE_CONTENT.seoTitle,
  description: APPLICATION_GUIDE_CONTENT.intro,
};

export default function ApplicationGuidePage() {
  const {
    eyebrow,
    heading,
    intro,
    steps,
    preparationHeading,
    preparationTable,
    primaryCta,
    secondaryCta,
  } = APPLICATION_GUIDE_CONTENT;

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
              {eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6 tracking-tight">
            {heading}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed font-light">
            {intro}
          </p>
        </div>
      </section>

      {/* 8 Step Application Flow */}
      <section className="py-24 border-b border-[#E6DDCC] bg-white relative overflow-hidden">
        <BotanicalWatermark variant="rust" opacity={0.05} className="w-80 h-80 -bottom-16 -left-16" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Step-By-Step Sequence
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
                The Application Roadmap
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <ScrollReveal key={st.number} delay={idx * 0.07}>
                <div className="bg-[#FBF8F1] border border-[#E6DDCC] p-7 flex flex-col justify-between hover:border-[#A33E11] hover:shadow-xl transition-all duration-300 h-full group">
                  <div>
                    <span className="text-3xl font-serif font-bold text-[#A33E11] block mb-3 group-hover:scale-105 transition-transform">
                      {st.number}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2 group-hover:text-[#A33E11] transition-colors">
                      {st.title}
                    </h3>
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

      {/* What to Prepare First: Study vs Work */}
      <section className="py-24 border-b border-[#E6DDCC] bg-[#FBF8F1] relative overflow-hidden">
        <BotanicalWatermark variant="emerald" opacity={0.06} className="w-80 h-80 -top-16 -right-16" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Documentation Priority
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
                {preparationHeading}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto border border-[#E6DDCC] bg-white shadow-md max-w-4xl mx-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-1/2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#FC7F4E]" />
                        <span>STUDY APPLICANTS</span>
                      </div>
                    </th>
                    <th className="py-4 px-6 font-semibold w-1/2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#FC7F4E]" />
                        <span>WORK APPLICANTS</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6DDCC] text-sm">
                  {preparationTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F3EBDD]/40 transition-colors">
                      <td className="py-4 px-6 font-medium text-[#1B1C1A] leading-relaxed">
                        {row.study}
                      </td>
                      <td className="py-4 px-6 font-medium text-[#1B1C1A] leading-relaxed">
                        {row.work}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <BlossomLeafAnimation theme="contrast" density="subtle" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBF8F1] border border-[#E6DDCC] rounded-full">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Start Your Preparation
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Get your application checklist organised today.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                Connect with our team to structure your academic records, draft statement materials, and keep your intake deadlines on track.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={primaryCta.href}
                  className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2 group"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-[#1B1C1A] bg-white hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
              <div className="bg-[#FBF8F1] border-2 border-[#E6DDCC] hover:border-[#A33E11]/60 transition-colors p-2 shadow-xl">
                <HomeLeadForm source="application_guide_page" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
