import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, MapPin, Briefcase } from 'lucide-react';
import { workOverviewContent } from '@/content/work';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';

export const metadata: Metadata = {
  title: workOverviewContent.meta.title,
  description: workOverviewContent.meta.description,
};

export default function WorkOverviewPage() {
  const { hero, countryFocus, properVacancy, process, closing } = workOverviewContent;

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
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
            {hero.paragraph}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={hero.ctas.primary.href}
              className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
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
      </section>

      {/* Country Focus: UAE and Greece */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Recruitment Destinations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {countryFocus.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {countryFocus.countries.map((c) => (
              <div
                key={c.name}
                className="bg-[#FBF8F1] border border-[#E6DDCC] p-8 flex flex-col justify-between hover:border-[#A33E11] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-[#F3EBDD] text-[#A33E11] text-xs font-semibold uppercase tracking-wider">
                      Recruitment Pathway
                    </span>
                    <MapPin className="w-5 h-5 text-[#A33E11]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-3">
                    Work in {c.name}
                  </h3>
                  <p className="text-sm text-[#41484B] leading-relaxed mb-8">
                    {c.description}
                  </p>
                </div>

                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A33E11] hover:text-[#85320D]"
                >
                  <span>Explore {c.name} opportunities</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a Proper Vacancy Should Tell You */}
      <section className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Transparency Standards
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {properVacancy.headline}
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#E6DDCC] bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-semibold w-1/3">Detail</th>
                  <th className="py-3.5 px-6 font-semibold">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DDCC] text-sm">
                {properVacancy.rows.map((row) => (
                  <tr key={row.detail} className="hover:bg-[#F3EBDD]/40 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                      {row.detail}
                    </td>
                    <td className="py-4 px-6 text-[#41484B]">
                      {row.whyItMatters}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* From Enquiry to Joining (5 Steps) */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Recruitment Sequence
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {process.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {process.steps.map((st) => (
              <div key={st.number} className="bg-[#FBF8F1] border border-[#E6DDCC] p-5 flex flex-col justify-between">
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

          <p className="text-center text-xs text-[#71787B] mt-10 italic">
            {process.disclaimer}
          </p>
        </div>
      </section>

      {/* Closing Consultation & CV Submission */}
      <section className="py-20 bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                Work Profile Submission
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Submit your professional qualifications for active role matching.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                We review candidate credentials against verified employer requisitions in UAE and Greece. No misleading claims or fabricated placement promises.
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
              <HomeLeadForm source="work_overview_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
