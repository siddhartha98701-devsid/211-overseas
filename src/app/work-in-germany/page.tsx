import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { SubpageCards } from '@/components/pages/SubpageCards';

export const metadata: Metadata = {
  title: 'Work in Germany',
  description:
    'Healthcare careers in Germany for nurses and physiotherapists. Structured pathways with language training, qualification recognition and visa support. 211 OVERSEAS Ahmedabad.',
};

export default function GermanyPage() {
  const { germany } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E6DDCC]" aria-label="Germany hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#57514A] font-medium mb-3 block">
              Healthcare careers
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#2A2A2A] tracking-tight leading-[1.05] mb-6">
              Work in Germany
            </h1>
            <p className="text-base sm:text-lg text-[#57514A] leading-relaxed font-light">
              {germany.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-[#E6DDCC]" aria-label="German architecture">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E6DDCC]/20">
            <Image
              src="/images/germany.jpg"
              alt="Historic German architecture and street in soft natural light"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px)"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Nurses & Physiotherapists Pathways */}
      <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="Healthcare Pathways">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Structured pathways for healthcare professionals
              </h2>
              <p className="text-base sm:text-base text-[#57514A] leading-relaxed font-light">
                Germany offers regulated, highly supportive career transitions for international nurses and physiotherapists.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Column 1: Nurses in Germany */}
              <div className="border-t border-[#E6DDCC] pt-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium block mb-2">
                    {germany.nurses.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2A2A2A] tracking-tight mb-4">
                    {germany.nurses.title}
                  </h3>
                  <p className="text-sm text-[#57514A] leading-relaxed mb-8">
                    {germany.nurses.description}
                  </p>

                  <div className="border-t border-[#E6DDCC] divide-y divide-[#E6DDCC]/60 mb-8">
                    {germany.nurses.steps.map((step, i) => (
                      <div key={step} className="py-3 flex items-center justify-between">
                        <span className="text-sm text-[#2A2A2A] font-normal">{step}</span>
                        <span className="font-serif text-xs text-[#57514A]">
                          Stage {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href="/work-in-germany/nurses"
                    className="inline-block bg-[#94682B] hover:bg-[#7A5622] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    Check nursing eligibility
                  </Link>
                </div>
              </div>

              {/* Column 2: Physiotherapists in Germany */}
              <div className="border-t border-[#E6DDCC] pt-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium block mb-2">
                    {germany.physio.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2A2A2A] tracking-tight mb-4">
                    {germany.physio.title}
                  </h3>
                  <p className="text-sm text-[#57514A] leading-relaxed mb-8">
                    {germany.physio.description}
                  </p>

                  <div className="border-t border-[#E6DDCC] divide-y divide-[#E6DDCC]/60 mb-8">
                    {germany.physio.steps.map((step, i) => (
                      <div key={step} className="py-3 flex items-center justify-between">
                        <span className="text-sm text-[#2A2A2A] font-normal">{step}</span>
                        <span className="font-serif text-xs text-[#57514A]">
                          Stage {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href="/work-in-germany/physiotherapists"
                    className="inline-block bg-[#94682B] hover:bg-[#7A5622] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    Check physiotherapy eligibility
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <SubpageCards group="work-in-germany" heading="Choose your healthcare pathway" intro="Detailed guidance for each profession: language, recognition, interviews and visa." />
      <CtaStrip interest="Work in Germany – Nursing" source="work-in-germany" />
      <FormSection />
    </>
  );
}
