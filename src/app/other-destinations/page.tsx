import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { countryHref } from '@/content/subpages';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { CountryFlag } from '@/components/ui/CountryFlag';
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
      <section className="pt-32 pb-10 md:pt-40 md:pb-16 border-b border-[#E6DDCC]" aria-label="Other destinations hero">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium mb-4">
              <span className="h-px w-10 bg-[#B88740]" />
              Global pathways
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-4">
              Your future doesn&apos;t have to be limited to one country.
            </h1>
            <p className="text-base md:text-lg text-[#57514A] leading-relaxed">{otherDestinations.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#destinations" className="inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Browse destinations
              </a>
              <a href="#enquiry-form" className="inline-flex min-h-11 items-center border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Free counselling
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[2/1] lg:aspect-[4/3] w-full overflow-hidden bg-[#E6DDCC]/30">
              <Image src="/images/web/graduates-wide.webp" alt="Graduates celebrating by throwing caps in the air" fill priority sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-14 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Destination options">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Destinations"
            headline="Explore worldwide destinations"
            description="Tailored education and professional pathways across prominent study-abroad destinations."
            compact
          />
          <MobileScroller label="Destinations" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {otherDestinations.countries.map((country, idx) => (
              <Link
                key={country.name}
                href={countryHref(country.name)}
                className="group flex h-full w-full flex-col border border-[#E6DDCC] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#94682B] hover:shadow-[0_12px_30px_rgba(42,42,42,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <CountryFlag country={country.name} className="h-[18px] w-[26px] rounded-[2px] border border-[#E6DDCC] object-cover" width={26} height={18} />
                  <span className="font-serif text-xs text-[#A47434]">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#2A2A2A]">{country.name}</h3>
                <p className="mt-2 flex-1 text-sm text-[#57514A] leading-relaxed">{country.bullets.join(', ')}.</p>
                <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#8A6020]">
                  Explore {country.name} <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </MobileScroller>
        </div>
      </section>

      <CtaStrip interest="Study in Other Countries" source="other-destinations" />
      <FormSection />
    </>
  );
}
