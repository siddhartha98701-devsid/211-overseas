import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileCheck2, UserCheck, Briefcase, GraduationCap } from 'lucide-react';
import { APPLICATION_GUIDE_CONTENT } from '@/content/resources/application-guide';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';

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
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-3">
            {eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            {heading}
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      {/* 8 Step Application Flow */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Step-By-Step Sequence
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              The Application Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div key={st.number} className="bg-[#FBF8F1] border border-[#E6DDCC] p-6 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-serif font-bold text-[#A33E11] block mb-2">
                    {st.number}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#41484B] leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Prepare First: Study vs Work */}
      <section className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Documentation Priority
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {preparationHeading}
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#E6DDCC] bg-white shadow-sm max-w-4xl mx-auto">
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
                    <td className="py-3.5 px-6 font-medium text-[#1B1C1A]">
                      {row.study}
                    </td>
                    <td className="py-3.5 px-6 font-medium text-[#1B1C1A]">
                      {row.work}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                Start Your Preparation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Get your application checklist organised today.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                Connect with our team to structure your academic records, draft statement materials, and keep your intake deadlines on track.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={primaryCta.href}
                  className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {primaryCta.label}
                </Link>
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
              <HomeLeadForm source="application_guide_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
