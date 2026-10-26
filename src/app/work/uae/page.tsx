import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown, Building2, ShieldCheck, FileCheck } from 'lucide-react';
import { workUaeContent } from '@/content/work/uae';
import { DestinationLeadForm } from '@/components/forms/DestinationLeadForm';

export const metadata: Metadata = {
  title: workUaeContent.meta.title,
  description: workUaeContent.meta.description,
};

export default function WorkUAEPage() {
  const { hero, industries, howAssessed, understandOffer, faqs, closing } =
    workUaeContent;

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

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: UAE Information Modules */}
          <div className="lg:col-span-8 space-y-16">
            {/* 1. Industries to Explore */}
            <section aria-label="Industries" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                {industries.headline}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.list.map((ind) => (
                  <div key={ind.title} className="p-4 bg-[#FBF8F1] border border-[#E6DDCC]">
                    <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1.5">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#41484B] leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Candidate Assessment Before Applying */}
            <section aria-label="Candidate Assessment" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                {howAssessed.headline}
              </h2>
              <div className="divide-y divide-[#E6DDCC]">
                {howAssessed.rows.map((row) => (
                  <div key={row.criterion} className="py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-2 text-sm">
                    <span className="font-semibold text-[#1B1C1A] sm:w-1/3 shrink-0">
                      {row.criterion}
                    </span>
                    <span className="text-[#41484B] sm:w-2/3">
                      {row.whatToPrepare}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Understand Your UAE Offer */}
            <section aria-label="Offer Standards" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                {understandOffer.headline}
              </h2>
              <div className="space-y-3">
                {understandOffer.points.map((pt, i) => (
                  <div key={i} className="p-3.5 bg-[#FBF8F1] border border-[#E6DDCC] flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-[#A33E11] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#41484B] leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. FAQs */}
            <section aria-label="UAE FAQs" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                {faqs.headline}
              </h2>
              <div className="space-y-3">
                {faqs.items.map((item, idx) => (
                  <div key={idx} className="border border-[#E6DDCC] bg-[#FBF8F1] p-5">
                    <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-[#41484B] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Pre-selected Lead Form */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28">
              <DestinationLeadForm destination="UAE Work" />

              <div className="mt-6 bg-[#00222B] text-white p-6 border-t-4 border-[#A33E11]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FC7F4E] block mb-1">
                  Verified Requisitions
                </span>
                <p className="font-serif text-lg font-bold mb-2">Active UAE Openings</p>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Check live role requisitions and eligibility criteria before applying.
                </p>
                <Link
                  href={closing.ctas.primary.href}
                  className="block text-center py-2.5 px-4 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  {closing.ctas.primary.label} →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
