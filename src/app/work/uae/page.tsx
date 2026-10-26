import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import { workUaeContent } from '@/content/work/uae';
import { DestinationLeadForm } from '@/components/forms/DestinationLeadForm';
import { CountryAtmosphereAnimation } from '@/components/ui/CountryAtmosphereAnimation';
import { CollapsibleFaqList } from '@/components/ui/CollapsibleFaqList';

export const metadata: Metadata = {
  title: workUaeContent.meta.title,
  description: workUaeContent.meta.description,
};

const UAE_INDUSTRY_IMAGES: Record<string, string> = {
  Healthcare: '/images/generated/uae-sector-healthcare.jpg',
  Hospitality: '/images/generated/uae-sector-hospitality.jpg',
  'Sales & administration': '/images/generated/uae-sector-sales.jpg',
  'Technical & skilled work': '/images/generated/uae-sector-engineering.jpg',
};

const UAE_GALLERY = [
  {
    src: '/images/generated/uae-sector-healthcare.jpg',
    alt: 'Healthcare professionals in modern hospital atrium in Dubai',
    title: 'Healthcare Operations',
    caption: 'DHA, MOH, and private healthcare networks',
  },
  {
    src: '/images/generated/uae-sector-hospitality.jpg',
    alt: 'Luxury resort and hospitality facility in Dubai',
    title: 'Luxury Resorts & Hospitality',
    caption: 'World-famous 5-star hotels and fine dining',
  },
  {
    src: '/images/generated/uae-sector-engineering.jpg',
    alt: 'Engineers reviewing plans on infrastructure project in UAE',
    title: 'Engineering & Infrastructure',
    caption: 'Major civil, commercial, and tech projects',
  },
  {
    src: '/images/web/uae-wide.webp',
    alt: 'Dubai illuminated skyline and modern business centers',
    title: 'Cosmopolitan Living',
    caption: 'Tax-free earnings and international business',
  },
];

export default function WorkUAEPage() {
  const { hero, industries, howAssessed, understandOffer, faqs, closing } =
    workUaeContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC] relative overflow-hidden">
        <CountryAtmosphereAnimation country="uae" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7">
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

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-white/20 bg-black/40 shadow-2xl rounded-[3px] group">
                <Image
                  src="/images/generated/uae-careers.jpg"
                  alt="Corporate professionals in Dubai International Financial Centre"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 95vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block mb-0.5">
                    Commercial Capital
                  </span>
                  <p className="font-serif text-xs sm:text-sm font-semibold leading-tight drop-shadow-sm">
                    Dubai &amp; Abu Dhabi · High-Growth Global Corporate Hub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase: UAE Career Sectors & Modern Living */}
      <section
        className="border-b border-[#E6DDCC] py-8 md:py-12 bg-white"
        aria-label="UAE Career Sectors & Modern Living"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-1">
                Visual Showcase
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1C1A]">
                Career Sectors &amp; Commercial Infrastructure in the UAE
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {UAE_GALLERY.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#E6DDCC] bg-[#FAF8F5] shadow-xs"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="font-serif text-xs sm:text-sm font-bold leading-tight drop-shadow-sm">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-white/80 hidden sm:block truncate mt-0.5">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: UAE Information Modules */}
          <div className="lg:col-span-8 space-y-16">
            {/* 1. Industries to Explore */}
            <section aria-label="Industries" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                  {industries.headline}
                </h2>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {industries.list.map((ind) => {
                  const img = UAE_INDUSTRY_IMAGES[ind.title];
                  return (
                    <div
                      key={ind.title}
                      className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start bg-[#FBF8F1] border border-[#E6DDCC] overflow-hidden flex flex-col justify-between group hover:border-[#A33E11] transition-colors"
                    >
                      {img && (
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#00222B]">
                          <Image
                            src={img}
                            alt={ind.title}
                            fill
                            sizes="(min-width: 768px) 340px, 100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-1.5 group-hover:text-[#A33E11] transition-colors">
                          {ind.title}
                        </h3>
                        <p className="text-xs text-[#41484B] leading-relaxed">
                          {ind.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 2. Candidate Assessment Before Applying */}
            <section aria-label="Candidate Assessment" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                  {howAssessed.headline}
                </h2>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory lg:divide-y lg:divide-[#E6DDCC] lg:block gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {howAssessed.rows.map((row) => (
                  <div
                    key={row.criterion}
                    className="w-[80vw] sm:w-[300px] lg:w-auto shrink-0 snap-start bg-[#FBF8F1] lg:bg-transparent border border-[#E6DDCC] lg:border-0 p-4 lg:p-0 lg:py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-2 text-sm"
                  >
                    <span className="font-semibold text-[#1B1C1A] sm:w-1/3 shrink-0">
                      {row.criterion}
                    </span>
                    <span className="text-[#41484B] sm:w-2/3">
                      {row.whatToPrepare}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Understand Your UAE Offer */}
            <section aria-label="Offer Standards" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                  {understandOffer.headline}
                </h2>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory lg:space-y-3 lg:block gap-3 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {understandOffer.points.map((pt, i) => (
                  <div
                    key={i}
                    className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start p-3.5 bg-[#FBF8F1] border border-[#E6DDCC] flex items-start gap-2.5"
                  >
                    <ShieldCheck size={18} className="text-[#A33E11] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#41484B] leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. FAQs (Collapsible Animated Accordion) */}
            <section aria-label="UAE FAQs" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                {faqs.headline}
              </h2>
              <CollapsibleFaqList items={faqs.items} />
            </section>
          </div>

          {/* Right Column: Pre-selected Lead Form */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28">
              <DestinationLeadForm destination="UAE Work" />

              <div className="mt-6 bg-[#00222B] text-white p-6 border-t-4 border-[#A33E11]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FC7F4E] block mb-1">
                  Verified Requisitions
                </span>
                <p className="font-serif text-lg font-bold mb-2">Active UAE Openings</p>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Check live role requisitions and eligibility criteria before applying.
                </p>
                <Link
                  href={closing.ctas.primary.href}
                  className="block text-center py-2.5 px-4 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  {closing.ctas.primary.label} →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
