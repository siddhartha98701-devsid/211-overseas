import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FormSection } from '@/components/sections/FormSection';

export const metadata: Metadata = {
  title: 'About Us | 211 Overseas',
  description:
    'About 211 Overseas - Ahmedabad-based international education and overseas career consultancy helping students and professionals explore opportunities beyond India.',
};

export default function AboutPage() {
  const { about, whoCanConnect } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#DDD7CC]" aria-label="About hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#6C675E] font-medium mb-3 block">
              About 211 Overseas
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#15140F] tracking-tight leading-[1.05] mb-6">
              Understand the candidate first. Recommend the pathway second.
            </h1>
            <p className="text-lg sm:text-xl text-[#6C675E] leading-relaxed font-light">
              {about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Photography Banner */}
      <section className="border-b border-[#DDD7CC]" aria-label="Consultancy atmosphere">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden bg-[#DDD7CC]/20">
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
      <section className="py-24 md:py-36 border-b border-[#DDD7CC]" aria-label="Our philosophy">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-widest text-[#6C675E] font-medium mb-3 block">
                  Our guiding principle
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#15140F] tracking-tight leading-[1.1]">
                  A transparent, profile-first methodology
                </h2>
              </div>
              <div className="lg:col-span-7">
                <blockquote className="font-serif text-2xl sm:text-3xl font-light text-[#15140F] leading-snug">
                  &ldquo;{about.focus}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm sm:text-base text-[#6C675E] leading-relaxed">
                  Different students and working professionals require distinct international pathways.
                  Rather than selling destinations based on quotas, our guidance begins by understanding
                  academic background, long-term career aspirations, financial parameters, and language readiness.
                </p>
              </div>
            </div>

            {/* Four Key Areas */}
            <div className="border-t border-[#DDD7CC] pt-16">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#15140F] mb-12">
                Four specialized focus areas
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {about.keyAreas.map((area, i) => (
                  <div key={area} className="border-t border-[#DDD7CC] pt-6">
                    <span className="font-serif text-xs text-[#6C675E] block mb-2">
                      0{i + 1}
                    </span>
                    <h4 className="font-serif text-xl font-light text-[#15140F] mb-3">
                      {area}
                    </h4>
                    <p className="text-xs text-[#6C675E] leading-relaxed">
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
      <section className="py-24 md:py-36 border-b border-[#DDD7CC]" aria-label="Our vision">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#6C675E] font-medium mb-3 block">
                Our vision
              </span>
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#15140F] leading-[1.2] tracking-tight">
                &ldquo;{about.vision}&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who Can Connect */}
      <section className="py-24 md:py-36 border-b border-[#DDD7CC]" aria-label="Who can connect">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#15140F] tracking-tight leading-[1.1] mb-6">
                Who can connect with us
              </h2>
              <p className="text-base sm:text-lg text-[#6C675E] leading-relaxed font-light">
                Our advisory services are tailored for candidates across diverse educational and professional milestones.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 border-t border-[#DDD7CC] pt-8">
              {whoCanConnect.profiles.map((profile) => (
                <div key={profile} className="py-4 border-b border-[#DDD7CC]/60">
                  <span className="text-sm text-[#15140F] font-normal">{profile}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-block bg-[#2F4A3C] hover:bg-[#24382E] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Schedule free consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <FormSection />
    </>
  );
}
