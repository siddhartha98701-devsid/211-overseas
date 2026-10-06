import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { UAESectorsTabs } from './UAESectorsTabs';

export const metadata: Metadata = {
  title: 'Work in Dubai & UAE',
  description:
    'Career opportunities in Dubai and the UAE across Healthcare, Hospitality, Engineering and Sales sectors. Professional placement support from 211 OVERSEAS Ahmedabad.',
};

export default function UAEPage() {
  const { uae } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E6DDCC]" aria-label="UAE hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#57514A] font-medium mb-3 block">
              Career opportunities
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#2A2A2A] tracking-tight leading-[1.05] mb-6">
              Work in Dubai & UAE
            </h1>
            <p className="text-base sm:text-lg text-[#57514A] leading-relaxed font-light">
              {uae.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-[#E6DDCC]" aria-label="Dubai photography">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E6DDCC]/20">
            <Image
              src="/images/uae.jpg"
              alt="Dubai skyline and waterfront architecture at dusk"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px)"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Career Sectors */}
      <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="Career sectors">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Key employment sectors
              </h2>
              <p className="text-base sm:text-base text-[#57514A] leading-relaxed font-light">
                Explore high-growth sectors actively recruiting experienced talent in the United Arab Emirates.
              </p>
            </div>

            <UAESectorsTabs />
          </ScrollReveal>
        </div>
      </section>

      {/* 7-Step UAE Process */}
      <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="UAE process">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Our UAE recruitment process
              </h2>
              <p className="text-base sm:text-base text-[#57514A] leading-relaxed font-light">
                A transparent, step-by-step pathway from candidate profile submission to onboarding in the UAE.
              </p>
            </div>

            <div className="border-t border-[#E6DDCC]">
              {uae.process.map((step) => (
                <div
                  key={step.number}
                  className="py-8 sm:py-10 border-b border-[#E6DDCC] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
                >
                  <div className="md:col-span-2">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#57514A]">
                      {step.number}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A2A2A] tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm sm:text-base text-[#57514A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact?interest=Work+in+UAE+/+Dubai#enquiry-form"
                className="inline-block bg-[#94682B] hover:bg-[#7A5622] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Submit your profile
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <CtaStrip interest="Work in UAE / Dubai" source="work-in-uae" />
      <FormSection />
    </>
  );
}
