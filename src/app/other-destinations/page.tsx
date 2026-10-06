import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';

export const metadata: Metadata = {
  title: 'Other Destinations',
  description:
    'Explore education and career opportunities in Japan, Taiwan, Singapore, Europe, UK, USA, Canada and Australia. 211 OVERSEAS Ahmedabad.',
};

export default function OtherDestinationsPage() {
  const { otherDestinations } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E6DDCC]" aria-label="Other destinations hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#57514A] font-medium mb-3 block">
              Global pathways
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#2A2A2A] tracking-tight leading-[1.05] mb-6">
              Your future doesn&apos;t have to be limited to one country.
            </h1>
            <p className="text-base sm:text-lg text-[#57514A] leading-relaxed font-light">
              {otherDestinations.description}
            </p>
          </div>
        </div>
      </section>

      {/* Photography Hero Banner */}
      <section className="border-b border-[#E6DDCC]" aria-label="Campus atmosphere photography">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden bg-[#E6DDCC]/20">
            <Image
              src="/images/guidance.jpg"
              alt="Students walking across an international university campus quad"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px)"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Destinations Directory */}
      <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="Destination options">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Explore worldwide destinations
              </h2>
              <p className="text-base sm:text-base text-[#57514A] leading-relaxed font-light">
                Tailored education and professional pathways across prominent study-abroad and immigration destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {otherDestinations.countries.map((country, idx) => (
                <div key={country.name} className="border-t border-[#E6DDCC] pt-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A] tracking-tight">
                        {country.name}
                      </h3>
                      <span className="font-serif text-xs text-[#57514A]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-sm text-[#57514A] leading-relaxed mb-6">
                      {country.bullets.join(', ')}.
                    </p>
                  </div>
                  <div>
                    <Link
                      href={`/contact?interest=Study+in+Other+Countries&destination=${encodeURIComponent(country.name)}#enquiry-form`}
                      className="inline-flex items-center text-xs uppercase tracking-widest text-[#2A2A2A] hover:text-[#8A6020] font-medium transition-colors group"
                    >
                      <span>Explore {country.name}</span>
                      <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <CtaStrip interest="Study in Other Countries" source="other-destinations" />
      <FormSection />
    </>
  );
}
