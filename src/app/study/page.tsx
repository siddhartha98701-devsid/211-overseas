import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { CountryFlag } from '@/components/ui/CountryFlag';
import { studyOverviewContent } from '@/content/study';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';
import { CountryAtmosphereAnimation } from '@/components/ui/CountryAtmosphereAnimation';
import { PathGatewaySection } from '@/components/sections/PathGatewaySection';

const QUALIFICATION_IMAGES: Record<string, { image: string; alt: string }> = {
  "Bachelor’s": {
    image: '/images/korea/korea-campus.jpg',
    alt: 'Undergraduate university campus grounds and lecture halls',
  },
  "Master’s & MBA": {
    image: '/images/generated/korea-gateway.jpg',
    alt: 'Master’s degree and postgraduate management campus facilities',
  },
  "Language programs": {
    image: '/images/korea/korea-student.jpg',
    alt: 'International students studying language immersion programs',
  },
  "Postgraduate & research": {
    image: '/images/destinations/japan-tech-lab.jpg',
    alt: 'Advanced technology laboratory and postgraduate scientific research',
  },
};

export const metadata: Metadata = {
  title: studyOverviewContent.meta.title,
  description: studyOverviewContent.meta.description,
};

export default function StudyOverviewPage() {
  const { hero, exploreByDestination, exploreByQualification, fiveDecisions, closing } =
    studyOverviewContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC] relative overflow-hidden">
        <CountryAtmosphereAnimation country="study" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-3">
                {hero.eyebrow}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
                {hero.h1}
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
                {hero.paragraph}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={hero.ctas.primary.href}
                  className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {hero.ctas.primary.label}
                </Link>
                <Link
                  href={hero.ctas.secondary.href}
                  className="px-6 py-3.5 border border-white/60 hover:bg-white hover:text-black text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {hero.ctas.secondary.label}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-white/20 bg-black/40 shadow-2xl rounded-[3px] group">
                <Image
                  src="/images/generated/global-campus.jpg"
                  alt="Global university campuses and international students"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 95vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block mb-0.5">
                    Global Destinations
                  </span>
                  <p className="font-serif text-xs sm:text-sm font-semibold leading-tight drop-shadow-sm">
                    World-Class Academic Campuses &amp; Degree Pathways
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Comparison Table / Grid (#destinations) */}
      <section id="destinations" className="py-20 border-b border-[#E6DDCC] bg-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Global Comparison
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {exploreByDestination.headline}
            </h2>
            <p className="mt-3 text-sm text-[#41484B] leading-relaxed">
              Explore leading universities and featured academic programs across our premier global study destinations with interactive sliding showcases.
            </p>
          </div>

          {/* Interactive Sliding Colleges Showcase matching Home Page Pattern */}
          <div className="-mx-6 sm:mx-0 mb-12">
            <PathGatewaySection />
          </div>

          {/* Comparative Destination Matrix (Desktop only, hidden on mobile per user request) */}
          <div className="hidden md:block border-t border-[#E6DDCC] pt-12">
            <div className="mb-8">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1C1A] mb-2">
                Comparative Destination Matrix
              </h3>
              <p className="text-xs sm:text-sm text-[#41484B]">
                Quick overview of academic distinctive factors and destination-specific advisory routes.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="overflow-x-auto border border-[#E6DDCC] shadow-sm">
              <table className="w-full min-w-[680px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#00222B] text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-1/4">Destination</th>
                    <th className="py-4 px-6 font-semibold">Distinctive Factor</th>
                    <th className="py-4 px-6 font-semibold text-right">Guidance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6DDCC] text-sm">
                  {exploreByDestination.destinations.map((d) => (
                    <tr key={d.name} className="hover:bg-[#F3EBDD]/40 transition-colors">
                      <td className="py-4 px-6 font-serif font-bold text-[#1B1C1A]">
                        <div className="flex items-center gap-2.5">
                          <CountryFlag
                            country={d.name}
                            width={24}
                            height={16}
                            className="w-[24px] h-[16px] rounded-[2px] border border-[#E6DDCC] object-cover flex-shrink-0"
                            loading="lazy"
                          />
                          <span>{d.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-[#41484B] leading-relaxed">
                        {d.distinctiveFactor}
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <Link
                          href={d.href}
                          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#A33E11] hover:underline"
                        >
                          <span>Explore</span>
                          <ArrowRight size={13} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Explore By Qualification */}
      <section className="py-20 border-b border-[#E6DDCC] bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              By Academic Level
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {exploreByQualification.headline}
            </h2>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {exploreByQualification.qualifications.map((q) => {
              const visual = QUALIFICATION_IMAGES[q.title] || {
                image: '/images/generated/global-campus.jpg',
                alt: q.title,
              };
              return (
                <div
                  key={q.title}
                  className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start bg-white border border-[#E6DDCC] overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#A33E11] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Visual Photo Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#00222B]">
                      <Image
                        src={visual.image}
                        alt={visual.alt}
                        fill
                        sizes="(min-width: 1024px) 280px, 95vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#F3EBDD]/90 backdrop-blur-sm flex items-center justify-center text-[#A33E11] shadow-sm">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white/95 uppercase tracking-wider">
                        {q.title}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2">
                        {q.title}
                      </h3>
                      <p className="text-sm text-[#41484B] leading-relaxed">
                        {q.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Five Decisions Before Committing */}
      <section className="py-20 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Prudent Planning
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A]">
              {fiveDecisions.headline}
            </h2>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 gap-5 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-4 lg:after:hidden">
            {fiveDecisions.decisions.map((dec, i) => (
              <div
                key={dec.title}
                className="w-[80vw] sm:w-[280px] lg:w-auto shrink-0 snap-start bg-white rounded-2xl border border-[#E6DDCC] p-6 shadow-sm hover:shadow-xl hover:border-[#A33E11] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#A33E11] bg-[#FC7F4E]/10 rounded-full border border-[#FC7F4E]/25 block w-fit mb-2.5">
                    Decision 0{i + 1}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors mb-3">
                    {dec.title}
                  </h3>
                  <div className="my-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#E6DDCC]/70 grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-sm font-bold font-mono text-[#A33E11] block leading-tight">Stage</span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">0{i + 1}</span>
                    </div>
                    <div>
                      <span className="text-sm font-bold font-mono text-[#00222B] block leading-tight">Advisory</span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#71787B] block mt-0.5">Checkpoint</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                    {dec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation Section */}
      <section className="py-20 bg-[#FBF8F1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                Independent Advisory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Find your international study direction.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                Connect with our advisors to compare country options, verify tuition standards, and understand student visa requirements.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={closing.ctas.primary.href}
                  className="px-6 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {closing.ctas.primary.label}
                </Link>
                <Link
                  href={closing.ctas.secondary.href}
                  className="px-6 py-3.5 border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  {closing.ctas.secondary.label}
                </Link>
              </div>
            </div>

            <div id="shortlist-form" className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto scroll-mt-24">
              <HomeLeadForm source="study_overview_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
