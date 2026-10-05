import type { Metadata } from 'next';
import Image from 'next/image';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { WhoCanConnectSection } from '@/components/sections/WhoCanConnectSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About 211 OVERSEAS - Ahmedabad-based international education and overseas career consultancy helping students and professionals explore opportunities beyond India.',
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E5E5E5]" aria-label="About hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-medium mb-3 block">
              About 211 OVERSEAS
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#000000] tracking-tight leading-[1.05] mb-6">
              Understand the candidate first. Recommend the pathway second.
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed font-light">
              {about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Photography Banner */}
      <section className="border-b border-[#E5E5E5]" aria-label="Consultancy atmosphere">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden bg-[#E5E5E5]/20">
            <Image
              src="/images/guidance.jpg"
              alt="Students discussing international educational opportunities"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px)"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy & Four Focus Areas */}
      <section className="py-24 md:py-36 border-b border-[#E5E5E5]" aria-label="Our philosophy">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-medium mb-3 block">
                  Our guiding principle
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#000000] tracking-tight leading-[1.1]">
                  A transparent, profile-first methodology
                </h2>
              </div>
              <div className="lg:col-span-7">
                <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-[#000000] leading-snug">
                  &ldquo;{about.focus}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                  Different students and working professionals require distinct international pathways.
                  Rather than selling destinations based on quotas, our guidance begins by understanding
                  academic background, long-term career aspirations, financial parameters, and language readiness.
                </p>
              </div>
            </div>

            {/* Four Key Areas */}
            <div className="border-t border-[#E5E5E5] pt-16">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#000000] mb-12">
                Four specialized focus areas
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {about.keyAreas.map((area, i) => (
                  <div key={area} className="border-t border-[#E5E5E5] pt-6">
                    <span className="font-serif text-xs text-[#4A4A4A] block mb-2">
                      0{i + 1}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#000000] mb-3">
                      {area}
                    </h4>
                    <p className="text-xs text-[#4A4A4A] leading-relaxed">
                      Structured assessment, document preparation, qualification recognition, and visa guidance.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24 md:py-36 border-b border-[#E5E5E5]" aria-label="Our vision">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-medium mb-3 block">
                Our vision
              </span>
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] leading-[1.2] tracking-tight">
                &ldquo;{about.vision}&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WhoCanConnectSection />

      {/* Form Section */}
      <CtaStrip source="about" />
      <FormSection />
    </>
  );
}
