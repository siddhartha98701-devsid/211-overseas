import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Utensils, Hotel, ShieldAlert } from 'lucide-react';
import { workGreeceContent } from '@/content/work/greece';
import { DestinationLeadForm } from '@/components/forms/DestinationLeadForm';
import { CountryAtmosphereAnimation } from '@/components/ui/CountryAtmosphereAnimation';
import { CollapsibleFaqList } from '@/components/ui/CollapsibleFaqList';

export const metadata: Metadata = {
  title: workGreeceContent.meta.title,
  description: workGreeceContent.meta.description,
};

const GREECE_GALLERY = [
  {
    src: '/images/greece/greece-resort.jpg',
    alt: 'Luxury resort and hospitality reception terrace in Greece',
    title: 'Resort Front Office & Guest Relations',
    caption: 'Luxury hotel operations across top Greek resort destinations',
  },
  {
    src: '/images/greece/greece-culinary.jpg',
    alt: 'Professional culinary brigade preparing Mediterranean seafood in Greece',
    title: 'Culinary & Fine Dining Operations',
    caption: 'Professional kitchen brigade and Mediterranean dining service',
  },
  {
    src: '/images/destinations/europe-city-life.jpg',
    alt: 'European Mediterranean city and hospitality standards',
    title: 'European Hospitality Standards',
    caption: 'Schengen seasonal experience with accommodation & meals',
  },
  {
    src: '/images/cta.jpg',
    alt: 'Professional advisory and placement onboarding',
    title: 'Career Advancement',
    caption: 'Verified hotel contracts and transparent placement steps',
  },
];

export default function WorkGreecePage() {
  const {
    hero,
    rolesUnderConsideration,
    liveOpeningFields,
    process,
    internshipNote,
    faqs,
    closing,
  } = workGreeceContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC] relative overflow-hidden">
        <CountryAtmosphereAnimation country="greece" />
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
                  src="/images/greece/greece-resort.jpg"
                  alt="Luxury seaside hotel resort in Greece overlooking the turquoise Aegean Sea"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 95vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block mb-0.5">
                    Aegean Coast &amp; Islands
                  </span>
                  <p className="font-serif text-xs sm:text-sm font-semibold leading-tight drop-shadow-sm">
                    Greek Islands &amp; Coastal Resorts · European Hospitality Careers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Greek Island Resorts & Culinary Operations */}
      <section
        className="border-b border-[#E6DDCC] py-8 md:py-12 bg-white"
        aria-label="Greek Hospitality & Resort Environments"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-1">
                Visual Showcase
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1C1A]">
                Resort Environments &amp; Culinary Operations in Greece
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {GREECE_GALLERY.map((item) => (
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
          {/* Left Column: Greece Hospitality Information Modules */}
          <div className="lg:col-span-8 space-y-16">
            {/* 1. Roles Under Consideration */}
            <section aria-label="Roles" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                  {rolesUnderConsideration.headline}
                </h2>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* Hotel Operations */}
                <div className="w-[85vw] sm:w-[350px] lg:w-auto shrink-0 snap-start bg-[#FBF8F1] border border-[#E6DDCC] overflow-hidden group">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#00222B]">
                    <Image
                      src="/images/greece/greece-resort.jpg"
                      alt={rolesUnderConsideration.hotelOperations.title}
                      fill
                      sizes="(min-width: 768px) 340px, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E6DDCC]">
                      <Hotel className="w-5 h-5 text-[#A33E11]" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B1C1A]">
                        {rolesUnderConsideration.hotelOperations.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {rolesUnderConsideration.hotelOperations.roles.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm text-[#41484B]">
                          <CheckCircle2 size={15} className="text-[#A33E11] shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Food & Beverage */}
                <div className="w-[85vw] sm:w-[350px] lg:w-auto shrink-0 snap-start bg-[#FBF8F1] border border-[#E6DDCC] overflow-hidden group">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#00222B]">
                    <Image
                      src="/images/greece/greece-culinary.jpg"
                      alt={rolesUnderConsideration.foodAndBeverage.title}
                      fill
                      sizes="(min-width: 768px) 340px, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E6DDCC]">
                      <Utensils className="w-5 h-5 text-[#A33E11]" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B1C1A]">
                        {rolesUnderConsideration.foodAndBeverage.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {rolesUnderConsideration.foodAndBeverage.roles.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm text-[#41484B]">
                          <CheckCircle2 size={15} className="text-[#A33E11] shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Candidate Transparency Fields (8 Fields) */}
            <section aria-label="Transparency Fields" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                  {liveOpeningFields.headline}
                </h2>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 sm:after:hidden">
                {liveOpeningFields.rows.map((row, idx) => (
                  <div
                    key={row.field}
                    className="w-[82vw] sm:w-[320px] lg:w-[340px] shrink-0 snap-start bg-white rounded-2xl border border-[#E6DDCC] p-6 shadow-sm hover:shadow-xl hover:border-[#A33E11] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#A33E11] bg-[#FC7F4E]/10 rounded-full border border-[#FC7F4E]/25 block w-fit mb-2.5">
                        Transparency Field 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors mb-3">
                        {row.field}
                      </h3>
                      <div className="my-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#E6DDCC]/70 grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-sm font-bold font-mono text-[#A33E11] block leading-tight">Field 0{idx + 1}</span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">Disclosure</span>
                        </div>
                        <div>
                          <span className="text-sm font-bold font-mono text-[#00222B] block leading-tight">Verified</span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">Contract Term</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                        {row.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Recruitment Process */}
            <section aria-label="Process" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E6DDCC]">
                <h2 className="font-serif text-2xl font-bold text-[#1B1C1A]">
                  {process.headline}
                </h2>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 lg:after:hidden">
                {process.steps.map((st) => (
                  <div
                    key={st.number}
                    className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start bg-white rounded-2xl border border-[#E6DDCC] p-6 shadow-sm hover:shadow-xl hover:border-[#A33E11] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#A33E11] bg-[#FC7F4E]/10 rounded-full border border-[#FC7F4E]/25 block w-fit mb-2.5">
                        {st.number}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors mb-3">
                        {st.title}
                      </h3>
                      <div className="my-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#E6DDCC]/70 grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-sm font-bold font-mono text-[#A33E11] block leading-tight">Stage</span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">{st.number}</span>
                        </div>
                        <div>
                          <span className="text-sm font-bold font-mono text-[#00222B] block leading-tight">Greece</span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">Recruitment</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Internship & Legal Category Note */}
            <section aria-label="Internship Legal Note" className="bg-[#FAF8F5] border-l-4 border-[#A33E11] p-6">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#A33E11] mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#1B1C1A] mb-2">
                    {internshipNote.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                    {internshipNote.paragraph}
                  </p>
                </div>
              </div>
            </section>

            {/* 5. FAQs (Collapsible Animated Accordion) */}
            <section aria-label="Greece FAQs" className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-6 pb-4 border-b border-[#E6DDCC]">
                {faqs.headline}
              </h2>
              <CollapsibleFaqList items={faqs.items} />
            </section>
          </div>

          {/* Right Column: Pre-selected Lead Form */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28">
              <DestinationLeadForm destination="Greece Hospitality" />

              <div className="mt-6 bg-[#00222B] text-white p-6 border-t-4 border-[#A33E11]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FC7F4E] block mb-1">
                  Recruitment Intake
                </span>
                <p className="font-serif text-lg font-bold mb-2">Current Greece Vacancies</p>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Check confirmed seasonal intake schedules and employer requirements.
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
