import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileCheck, HelpCircle, Compass, Wallet, Award } from 'lucide-react';
import { resourcesHubContent } from '@/content/resources';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';

export const metadata: Metadata = {
  title: resourcesHubContent.meta.title,
  description: resourcesHubContent.meta.description,
};

export default function ResourcesHubPage() {
  const { hero, featuredGuides, popularQuestions, closing } = resourcesHubContent;

  const icons = [
    <Wallet key="wallet" className="w-5 h-5 text-[#A33E11]" />,
    <Award key="award" className="w-5 h-5 text-[#A33E11]" />,
    <FileCheck key="file" className="w-5 h-5 text-[#A33E11]" />,
    <BookOpen key="book" className="w-5 h-5 text-[#A33E11]" />,
    <Compass key="compass" className="w-5 h-5 text-[#A33E11]" />,
    <HelpCircle key="help" className="w-5 h-5 text-[#A33E11]" />,
  ];

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

      {/* Featured Guides (#guides) */}
      <section id={featuredGuides.id} className="py-20 border-b border-[#E6DDCC] bg-white scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Structured Knowledge
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {featuredGuides.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.guides.map((g, idx) => (
              <div
                key={g.title}
                className="bg-[#FBF8F1] border border-[#E6DDCC] p-7 flex flex-col justify-between hover:border-[#A33E11] transition-colors group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#F3EBDD] flex items-center justify-center mb-5">
                    {icons[idx % icons.length]}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-2 group-hover:text-[#A33E11] transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-sm text-[#41484B] leading-relaxed mb-8">
                    {g.description}
                  </p>
                </div>

                <Link
                  href={g.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A33E11] group-hover:text-[#85320D]"
                >
                  <span>Read Guide</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Common Queries
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {popularQuestions.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {popularQuestions.items.map((q) => (
              <Link
                key={q.question}
                href={q.href}
                className="p-5 bg-white border border-[#E6DDCC] flex items-center justify-between gap-4 hover:border-[#A33E11] transition-colors group shadow-sm"
              >
                <span className="font-serif text-base font-semibold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors">
                  {q.question}
                </span>
                <ArrowRight size={16} className="text-[#A33E11] shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                Have A Specific Question?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Get clear, measured guidance for your international plans.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                Connect directly with our advisory team to review university admission criteria, scholarship eligibility, and visa procedures.
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
              <HomeLeadForm source="resources_hub_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
