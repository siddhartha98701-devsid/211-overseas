import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { SubpageCards } from '@/components/pages/SubpageCards';
import { KoreaHighlights } from '@/components/sections/KoreaHighlights';
import { ProgramFinderSection } from '@/components/sections/ProgramFinderSection';
import { EligibilitySection } from '@/components/sections/EligibilitySection';
import { CourseTabs } from './CourseTabs';

export const metadata: Metadata = {
  title: 'Study in South Korea',
  description:
    'Explore top universities, scholarships, and programs in South Korea. Bachelor\'s, Master\'s, Korean Language and English-taught programs. 211 OVERSEAS Ahmedabad.',
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

export default function SouthKoreaPage() {
  const { southKorea } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E6DDCC]" aria-label="South Korea hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#57514A] font-medium mb-3 block">
              Featured study destination
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#2A2A2A] tracking-tight leading-[1.05] mb-6">
              Study in South Korea
            </h1>
            <p className="text-base sm:text-lg text-[#57514A] leading-relaxed font-light">
              {southKorea.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-[#E6DDCC]" aria-label="Campus photography">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E6DDCC]/20">
            <Image
              src="/images/korea.jpg"
              alt="South Korean university campus in spring"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px)"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Study in South Korea - 7 Points */}
      <KoreaHighlights />

      <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="Why study in South Korea">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Why study in South Korea?
              </h2>
              <p className="text-base sm:text-base text-[#57514A] leading-relaxed font-light">
                South Korea combines world-class technological infrastructure with globally recognized academic rigor.
              </p>
            </div>

            <div className="border-t border-[#E6DDCC]">
              {southKorea.whyStudy.points.map((point, i) => (
                <div
                  key={i}
                  className="py-8 sm:py-10 border-b border-[#E6DDCC] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
                >
                  <div className="md:col-span-2">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#57514A]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A2A2A] tracking-tight">
                      {point.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm sm:text-base text-[#57514A] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leading South Korean Universities - Clean Typographic Grid with NO logos/crests */}
      <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="Universities">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Leading South Korean universities to explore
              </h2>
              <p className="text-base sm:text-base text-[#57514A] leading-relaxed font-light">
                Renowned public and private research universities known for engineering, business, sciences, and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {southKorea.universities.map((uni) => (
                <div key={uni.name} className="border-t border-[#E6DDCC] pt-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium block mb-2">
                      {uni.abbr}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#2A2A2A] tracking-tight mb-3">
                      {uni.name}
                    </h3>
                    <p className="text-sm text-[#57514A] leading-relaxed">
                      {uni.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t border-[#E6DDCC] pt-6">
                <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium block mb-2">
                  Additional
                </span>
                <h3 className="font-serif text-xl font-bold text-[#2A2A2A] tracking-tight mb-3">
                  And many more
                </h3>
                <p className="text-sm text-[#57514A] leading-relaxed">
                  We guide students across additional specialized institutions and private universities tailored to individual academic profiles.
                </p>
              </div>
            </div>

            {/* University Selection Factors */}
            <div className="mt-20 pt-16 border-t border-[#E6DDCC]">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A] mb-8">
                Key factors when selecting your university
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {UNIVERSITY_FACTORS.map((item, idx) => (
                  <div key={idx} className="border-t border-[#E6DDCC]/60 pt-4">
                    <h4 className="font-medium text-sm text-[#2A2A2A] mb-1">
                      {item.factor}
                    </h4>
                    <p className="text-sm text-[#57514A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/contact?interest=Study+in+South+Korea#enquiry-form"
                  className="inline-block bg-[#94682B] hover:bg-[#7A5622] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Find universities for my profile
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="Course categories">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Course categories to explore
              </h2>
              <p className="text-base sm:text-base text-[#57514A] leading-relaxed font-light">
                Switch between disciplines to view high-demand specialization areas in South Korean universities.
              </p>
            </div>

            <CourseTabs />
          </ScrollReveal>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="Program types">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Program levels
              </h2>
              <p className="text-base sm:text-base text-[#57514A] leading-relaxed font-light">
                Whether starting undergraduate studies, pursuing research, or mastering Korean language proficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-t border-[#E6DDCC] pt-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2A2A2A] mb-4">
                    {southKorea.programs.korean.title}
                  </h3>
                  <p className="text-sm text-[#57514A] leading-relaxed mb-6">
                    {southKorea.programs.korean.description}
                  </p>
                </div>
                <Link
                  href="/contact?interest=Korean+Language+Program#enquiry-form"
                  className="text-xs uppercase tracking-wider text-[#2A2A2A] hover:text-[#8A6020] font-medium"
                >
                  Explore language programs →
                </Link>
              </div>

              <div className="border-t border-[#E6DDCC] pt-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2A2A2A] mb-4">
                    {southKorea.programs.bachelors.title}
                  </h3>
                  <p className="text-sm text-[#57514A] leading-relaxed mb-6">
                    {southKorea.programs.bachelors.description}
                  </p>
                </div>
                <Link
                  href="/contact?interest=Bachelor's+in+South+Korea#enquiry-form"
                  className="text-xs uppercase tracking-wider text-[#2A2A2A] hover:text-[#8A6020] font-medium"
                >
                  Explore Bachelor&apos;s programs →
                </Link>
              </div>

              <div className="border-t border-[#E6DDCC] pt-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2A2A2A] mb-4">
                    {southKorea.programs.masters.title}
                  </h3>
                  <p className="text-sm text-[#57514A] leading-relaxed mb-6">
                    {southKorea.programs.masters.description}
                  </p>
                </div>
                <Link
                  href="/contact?interest=Master's+in+South+Korea#enquiry-form"
                  className="text-xs uppercase tracking-wider text-[#2A2A2A] hover:text-[#8A6020] font-medium"
                >
                  Explore Master&apos;s programs →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8-Step Process */}
      <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="South Korea process">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Our South Korea process
              </h2>
              <p className="text-base sm:text-base text-[#57514A] leading-relaxed font-light">
                Our structured 8-stage roadmap to successfully gaining admissions and visa issuance in South Korea.
              </p>
            </div>

            <div className="border-t border-[#E6DDCC]">
              {southKorea.process.map((step) => (
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
                href="/contact?interest=Study+in+South+Korea#enquiry-form"
                className="inline-block bg-[#94682B] hover:bg-[#7A5622] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Check my South Korea eligibility
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <SubpageCards group="study-in-south-korea" heading="Choose your study route" intro="Bachelor’s, master’s or a Korean language program: see requirements and next steps for each." />
      <ProgramFinderSection />
      <EligibilitySection />
      <CtaStrip interest="Study in South Korea" source="study-in-south-korea" />
      <FormSection />
    </>
  );
}
