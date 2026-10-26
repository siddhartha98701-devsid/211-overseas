import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Compass, HelpCircle } from 'lucide-react';
import { studyOverviewContent } from '@/content/study';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';
import { CountryAtmosphereAnimation } from '@/components/ui/CountryAtmosphereAnimation';

export const metadata: Metadata = {
  title: studyOverviewContent.meta.title,
  description: studyOverviewContent.meta.description,
};

export default function StudyOverviewPage() {
  const { hero, exploreByDestination, exploreByQualification, fiveDecisions, closing } =
    studyOverviewContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC] relative overflow-hidden">
        <CountryAtmosphereAnimation country="study" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
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

      {/* Destinations Comparison Table / Grid (#destinations) */}
      <section id="destinations" className="py-20 border-b border-[#E6DDCC] bg-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Global Comparison
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {exploreByDestination.headline}
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#E6DDCC] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold w-1/4">Destination</th>
                  <th className="py-4 px-6 font-semibold">Distinctive Factor</th>
                  <th className="py-4 px-6 font-semibold text-right">Guidance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DDCC] text-sm">
                {exploreByDestination.destinations.map((d) => (
                  <tr key={d.name} className="hover:bg-[#F3EBDD]/40 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                      {d.name}
                    </td>
                    <td className="py-4 px-6 text-[#41484B]">
                      {d.distinctiveFactor}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={d.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#A33E11] hover:underline"
                      >
                        <span>Explore</span>
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

      {/* Explore By Qualification */}
      <section className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              By Academic Level
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {exploreByQualification.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreByQualification.qualifications.map((q) => (
              <div key={q.title} className="bg-white border border-[#E6DDCC] p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#A33E11] mb-4">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2">
                    {q.title}
                  </h3>
                  <p className="text-sm text-[#41484B] leading-relaxed">
                    {q.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Decisions Before Committing */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Prudent Planning
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {fiveDecisions.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {fiveDecisions.decisions.map((dec, i) => (
              <div key={dec.title} className="bg-[#FBF8F1] border border-[#E6DDCC] p-5">
                <span className="text-xs font-mono font-bold text-[#A33E11] block mb-2">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-2">
                  {dec.title}
                </h3>
                <p className="text-xs text-[#41484B] leading-relaxed">
                  {dec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation Section */}
      <section className="py-20 bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                Independent Advisory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Find your international study direction.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                Connect with our advisors to compare country options, verify tuition standards, and understand student visa requirements.
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
              <HomeLeadForm source="study_overview_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
