import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_PAGE_CONTENT } from '@/content/faq';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';
import { CollapsibleFaqList } from '@/components/ui/CollapsibleFaqList';

export const metadata: Metadata = {
  title: FAQ_PAGE_CONTENT.seoTitle,
  description: FAQ_PAGE_CONTENT.subtitle,
};

export default function FaqPage() {
  const { eyebrow, title, subtitle, faqs, primaryCta, secondaryCta } = FAQ_PAGE_CONTENT;

  // FAQPage Schema JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-3">
            {eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* All 12 FAQs */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <CollapsibleFaqList items={faqs} showNumbers={true} initialOpenIndex={null} />
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                Have Another Question?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Request an individual assessment of your profile.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                Connect with our team to review your qualifications, evaluate course choices, or check live recruitment requirements.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={primaryCta.href}
                  className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {primaryCta.label}
                </Link>
                <Link
                  href={secondaryCta.href}
                  className="px-6 py-3.5 border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
              <HomeLeadForm source="faq_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
