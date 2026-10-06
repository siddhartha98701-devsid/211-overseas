import Image from 'next/image';
import { EnquiryForm } from '@/components/sections/EnquiryForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function FormSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" aria-label="Begin your overseas journey">
      {/* Full-bleed background image with subtle scrim */}
      <div className="absolute inset-0 z-[-2]">
        <Image
          src="/images/cta.jpg"
          alt="Airplane wing flying high above clouds"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Scrim ensuring WCAG AA contrast for text */}
        <div className="absolute inset-0 bg-[#000000]/80" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-12 text-white">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
              Start your overseas journey
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              Confused about where to start? Start with your profile — not a country. Limited
              counselling slots available each week.
            </p>
          </div>

          <div className="max-w-3xl">
            <EnquiryForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
