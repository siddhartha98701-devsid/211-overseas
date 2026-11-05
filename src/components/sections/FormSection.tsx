import Image from 'next/image';
import { EnquiryForm } from '@/components/sections/EnquiryForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface FormSectionProps {
  defaultInterest?: string;
  defaultDestination?: string;
  /** Optional heading override, e.g. "Start your Japan journey". */
  heading?: string;
}

export function FormSection({ defaultInterest, defaultDestination, heading }: FormSectionProps = {}) {
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
        <div className="absolute inset-0 bg-[#00222B]/80" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-12 text-white">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-4 text-white">
              {heading ?? 'One Conversation Could Open Up a Whole New Direction.'}
            </h2>
            <p className="text-base sm:text-base text-white/80 font-light leading-relaxed">
              A university you&apos;ve never considered. A country that matches your ambitions. A career opportunity worth exploring. You never know where the right conversation might lead. Tell us a little about yourself, and let&apos;s discover what&apos;s possible.
            </p>
          </div>

          <div className="max-w-3xl">
            <EnquiryForm defaultInterest={defaultInterest} defaultDestination={defaultDestination} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
