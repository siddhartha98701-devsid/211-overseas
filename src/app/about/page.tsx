import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Compass, BookOpen, Briefcase } from 'lucide-react';
import { aboutContent } from '@/content/about';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  const { hero, whatGuidesUs, whatWeHelpWith, approachInPractice, closing } = aboutContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero Section */}
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

      {/* Section 1: What Guides Us (#approach) */}
      <section id={whatGuidesUs.id} className="py-20 border-b border-[#E6DDCC] bg-white scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {whatGuidesUs.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatGuidesUs.cards.map((card, i) => (
              <div
                key={card.title}
                className="bg-[#FBF8F1] border border-[#E6DDCC] p-6 relative hover:border-[#A33E11] transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#A33E11] block mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#41484B] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: What We Can Help With (#what-we-help-with) */}
      <section id={whatWeHelpWith.id} className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1] scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Scope of Advisory
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {whatWeHelpWith.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Education Box */}
            <div className="bg-white border border-[#E6DDCC] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E6DDCC]">
                <div className="w-10 h-10 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#A33E11]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1B1C1A]">
                  {whatWeHelpWith.education.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {whatWeHelpWith.education.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#41484B]">
                    <CheckCircle2 size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Employment Box */}
            <div className="bg-white border border-[#E6DDCC] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E6DDCC]">
                <div className="w-10 h-10 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#A33E11]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1B1C1A]">
                  {whatWeHelpWith.employment.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {whatWeHelpWith.employment.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#41484B]">
                    <CheckCircle2 size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Approach in Practice */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Execution Methodology
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {approachInPractice.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachInPractice.steps.map((step) => (
              <div
                key={step.number}
                className="bg-[#FBF8F1] border border-[#E6DDCC] p-6 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-serif font-bold text-[#A33E11] block mb-3">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#41484B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Enquiry / Direct Consultation (#enquiry) */}
      <section id={closing.id} className="py-20 bg-[#FBF8F1] scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                Begin The Discussion
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Plan your international education and career pathway with confidence.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                Connect directly with our team in Ahmedabad for an objective review of your qualifications, goals, and destination opportunities.
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
              <HomeLeadForm source="about_page_enquiry" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
