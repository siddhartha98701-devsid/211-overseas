import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, AlertCircle, HelpCircle, CheckCircle2, Wallet, Coins } from 'lucide-react';
import { costOfStudyingContent } from '@/content/resources/cost-of-studying';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';

export const metadata: Metadata = {
  title: costOfStudyingContent.meta.title,
  description: costOfStudyingContent.meta.description,
};

export default function CostOfStudyingPage() {
  const { hero, sevenParts, officialReferences, whatToAsk, closing } = costOfStudyingContent;

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

      {/* Seven Parts Budgeting Table */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Budget Architecture
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {sevenParts.headline}
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#E6DDCC] shadow-sm max-w-4xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-semibold w-1/3">Cost Component</th>
                  <th className="py-3.5 px-6 font-semibold">Items to Include</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DDCC] text-sm">
                {sevenParts.rows.map((row) => (
                  <tr key={row.component} className="hover:bg-[#F3EBDD]/40 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                      {row.component}
                    </td>
                    <td className="py-4 px-6 text-[#41484B]">
                      {row.include}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Official Reference Points — October 2026 */}
      <section className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Official Guidance
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {officialReferences.headline}
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#E6DDCC] bg-white shadow-sm max-w-4xl mx-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-semibold w-1/4">Destination</th>
                  <th className="py-3.5 px-6 font-semibold">Official Published Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DDCC] text-sm">
                {officialReferences.rows.map((row) => (
                  <tr key={row.destination} className="hover:bg-[#F3EBDD]/40 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                      {row.destination}
                    </td>
                    <td className="py-4 px-6 text-[#41484B]">
                      {row.reference}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto p-4 border border-[#E6DDCC] bg-white text-xs text-[#71787B] flex items-start gap-2.5">
            <AlertCircle size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
            <p>{officialReferences.caution}</p>
          </div>
        </div>
      </section>

      {/* What to Ask Before Paying a University */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
                Due Diligence Checklist
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
                {whatToAsk.headline}
              </h2>
            </div>

            <div className="space-y-3">
              {whatToAsk.bullets.map((b) => (
                <div key={b} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC] flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#A33E11] mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-[#1B1C1A]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                Cost Assessment
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Review your total study budget with an advisor.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                We review destination tuition ranges, proof-of-funds rules, and accommodation costs to ensure your numbers are grounded in reality.
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
              <HomeLeadForm source="cost_guide_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
