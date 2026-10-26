import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2, ShieldAlert } from 'lucide-react';
import { scholarshipsContent } from '@/content/resources/scholarships';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';

export const metadata: Metadata = {
  title: scholarshipsContent.meta.title,
  description: scholarshipsContent.meta.description,
};

export default function ScholarshipsPage() {
  const { hero, fundingTypes, routesToResearch, beforeRelying, closing } = scholarshipsContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-3">
            {hero.eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            {hero.h1}
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            {hero.paragraph}
          </p>
        </div>
      </section>

      {/* Funding Types & What to Check */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Financial Aid Categories
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {fundingTypes.headline}
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#E6DDCC] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-semibold w-1/3">Funding Type</th>
                  <th className="py-3.5 px-6 font-semibold">What to Check & Verify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DDCC] text-sm">
                {fundingTypes.rows.map((row) => (
                  <tr key={row.type} className="hover:bg-[#F3EBDD]/40 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                      {row.type}
                    </td>
                    <td className="py-4 px-6 text-[#41484B]">
                      {row.whatToCheck}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scholarship Routes to Research */}
      <section className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              By Study Destination
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {routesToResearch.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routesToResearch.routes.map((r) => (
              <div key={r.destination} className="bg-white border border-[#E6DDCC] p-6 shadow-sm">
                <span className="px-2.5 py-1 bg-[#F3EBDD] text-[#A33E11] text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
                  {r.destination}
                </span>
                <p className="text-sm text-[#41484B] leading-relaxed">
                  {r.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Considerations Before Relying on a Scholarship */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Prudent Planning
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {beforeRelying.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeRelying.steps.map((st) => (
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

      {/* Consultation Section */}
      <section className="py-20 bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                Scholarship Advisory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Evaluate your eligibility for international scholarships.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                We help assess entry records, nomination criteria, and university deadline schedules. No false promises of guaranteed awards.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={closing.ctas.primary.href}
                  className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {closing.ctas.primary.label}
                </Link>
                <Link
                  href={closing.ctas.secondary.href}
                  className="px-6 py-3.5 border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {closing.ctas.secondary.label}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
              <HomeLeadForm source="scholarships_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
