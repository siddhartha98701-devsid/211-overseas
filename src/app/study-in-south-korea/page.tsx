import type { Metadata } from 'next';
import Image from 'next/image';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { KoreaHighlights } from '@/components/sections/KoreaHighlights';
import { ProgramFinderSection } from '@/components/sections/ProgramFinderSection';
import { EligibilitySection } from '@/components/sections/EligibilitySection';
import {
  ProgramLevelsCarousel,
  UniversitySection,
  SouthKoreaProcessSection,
} from './SouthKoreaInteractive';

export const metadata: Metadata = {
  title: 'Study in South Korea',
  description:
    "Explore top universities, scholarships, and programs in South Korea. Bachelor's, Master's, Korean Language and English-taught programs. 211 OVERSEAS Ahmedabad.",
};

const UNIVERSITY_FACTORS = [
  {
    factor: 'Academic Eligibility & Profile Match',
    desc: 'Matching your GPA, previous coursework and test results with university-specific minimums.',
  },
  {
    factor: 'Language of Instruction',
    desc: 'Evaluating 100% English-taught tracks vs. bilingual or Korean-taught degrees.',
  },
  {
    factor: 'Scholarships & Tuition Subsidies',
    desc: 'Assessing eligibility for GKS (Global Korea Scholarship) and direct university merit waivers.',
  },
  {
    factor: 'Campus Location & Industry Ties',
    desc: 'Proximity to tech clusters in Seoul, Daejeon, Busan, and Ulsan for internships and research.',
  },
  {
    factor: 'Total Living Costs & Financial Planning',
    desc: 'Factoring in dormitory accommodation, health insurance, and part-time work permissions.',
  },
  {
    factor: 'Post-Graduation Visa & Career Prospects',
    desc: 'Understanding the D-10 job seeker and E-7 professional work visa pathways in Korea.',
  },
];

const KOREA_GALLERY = [
  {
    src: '/images/korea/seoul-skyline.jpg',
    alt: 'Seoul skyline and high-tech urban metropolis',
    title: 'Seoul Metropolis',
    caption: 'Dynamic global hub of innovation and tech',
  },
  {
    src: '/images/korea/gyeongbokgung.jpg',
    alt: 'Gyeongbokgung palace reflecting Korean cultural history',
    title: 'Gyeongbokgung Palace',
    caption: 'Centuries of rich cultural heritage',
  },
  {
    src: '/images/korea/korea-campus.jpg',
    alt: 'Modern South Korean university campus grounds',
    title: 'Academic Campuses',
    caption: 'World-class laboratories and libraries',
  },
  {
    src: '/images/korea/korea-student.jpg',
    alt: 'International students studying and collaborating in Korea',
    title: 'Student Community',
    caption: 'Safe, inclusive global student life',
  },
];

export default function SouthKoreaPage() {
  const { southKorea } = siteContent;

  return (
    <>
      {/* Hero: Compact on mobile */}
      <section className="pt-28 pb-12 md:pt-44 md:pb-24 border-b border-[#E6DDCC]" aria-label="South Korea hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#94682B] font-medium mb-3 block">
              Featured study destination
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#2A2A2A] tracking-tight leading-[1.05] mb-4 md:mb-6">
              Study in South Korea
            </h1>
            <p className="text-sm sm:text-lg text-[#57514A] leading-relaxed font-light">
              {southKorea.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* South Korea Visual Showcase: Compact 2-col on mobile, 4-col on desktop */}
      <section className="border-b border-[#E6DDCC] py-8 md:py-12 bg-white" aria-label="Life in South Korea">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {KOREA_GALLERY.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#E6DDCC] bg-[#FAF8F5] shadow-sm"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-2.5 sm:p-3 text-white">
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

      {/* Why Study in South Korea - Highlights */}
      <KoreaHighlights />

      {/* 7 Core Academic Advantages */}
      <section className="py-12 md:py-24 border-b border-[#E6DDCC] bg-[#FAF8F5]" aria-label="Why study in South Korea">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-10 md:mb-14">
              <span className="text-xs uppercase tracking-widest text-[#94682B] font-medium block mb-2">
                Why South Korea
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-3">
                Why study in South Korea?
              </h2>
              <p className="text-sm sm:text-base text-[#57514A] leading-relaxed font-light">
                South Korea combines world-class technological infrastructure with globally recognized academic rigor.
              </p>
            </div>

            <div className="border-t border-[#E6DDCC]">
              {southKorea.whyStudy.points.map((point, i) => (
                <div
                  key={i}
                  className="py-5 sm:py-7 border-b border-[#E6DDCC] grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
                >
                  <div className="md:col-span-2">
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#94682B]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#2A2A2A] tracking-tight">
                      {point.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leading Universities with 16:10 Campus Photos, Badges, and Hover Zoom */}
      <UniversitySection
        universities={southKorea.universities}
        factors={UNIVERSITY_FACTORS}
      />

      {/* Program Levels: Mobile Horizontal Scroll-Snap Carousel */}
      <ProgramLevelsCarousel />

      {/* 8-Step South Korea Process: Mobile Horizontal Scroll-Snap */}
      <SouthKoreaProcessSection steps={southKorea.process} />

      {/* Redesigned Step-by-Step Program Finder */}
      <ProgramFinderSection />

      {/* Eligibility Requirements */}
      <EligibilitySection />

      {/* Bottom CTA & Form */}
      <CtaStrip interest="Study in South Korea" source="study-in-south-korea" />
      <FormSection />
    </>
  );
}
