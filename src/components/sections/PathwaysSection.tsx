import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteContent } from '@/content/site';

export function PathwaysSection() {
  return (
    <div id="destinations" className="scroll-mt-24">
      {/* One-Paragraph Intro Section */}
      <section className="py-24 md:py-32 border-b border-[#E5E5E5]" aria-label="Introductory perspective">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-medium">
                  {siteContent.intro.eyebrow}
                </span>
              </div>
              <div className="md:col-span-8">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] leading-[1.35] tracking-tight">
                  {siteContent.intro.text}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Destination 1: Study in South Korea (7 cols image, 5 cols text) */}
      <section className="py-24 md:py-36 border-b border-[#E5E5E5]" aria-label="Study in South Korea">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image 7 columns */}
              <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden bg-[#E5E5E5]/30">
                <Image
                  src="/images/korea.jpg"
                  alt="South Korean university campus with cherry blossoms in spring"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw)"
                  className="object-cover"
                />
              </div>

              {/* Text 5 columns */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-medium mb-3">
                  Featured study destination
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] tracking-tight leading-[1.1] mb-6">
                  Study in South Korea
                </h2>
                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-8">
                  {siteContent.pathways[0].description}
                </p>

                {/* Key opportunities as one comma-separated line */}
                <div className="pt-6 border-t border-[#E5E5E5] mb-8">
                  <p className="text-xs uppercase tracking-wider text-[#000000] font-medium mb-2">
                    Key opportunities
                  </p>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {siteContent.pathways[0].bullets.join(', ')}.
                  </p>
                </div>

                <div>
                  <Link
                    href="/study-in-south-korea"
                    className="inline-flex items-center text-xs uppercase tracking-widest text-[#000000] hover:text-[#A86500] font-medium transition-colors group"
                  >
                    <span>Explore South Korea</span>
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Destination 2: Work in Germany (5 cols text, 7 cols image) */}
      <section className="py-24 md:py-36 border-b border-[#E5E5E5]" aria-label="Work in Germany">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text 5 columns (comes first on desktop) */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-medium mb-3">
                  Healthcare pathways
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] tracking-tight leading-[1.1] mb-6">
                  Work in Germany
                </h2>
                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-8">
                  {siteContent.pathways[1].description}
                </p>

                {/* Key opportunities as one comma-separated line */}
                <div className="pt-6 border-t border-[#E5E5E5] mb-8">
                  <p className="text-xs uppercase tracking-wider text-[#000000] font-medium mb-2">
                    Key opportunities
                  </p>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {siteContent.pathways[1].bullets.join(', ')}.
                  </p>
                </div>

                <div>
                  <Link
                    href="/work-in-germany"
                    className="inline-flex items-center text-xs uppercase tracking-widest text-[#000000] hover:text-[#A86500] font-medium transition-colors group"
                  >
                    <span>Explore Germany</span>
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              {/* Image 7 columns (comes second on desktop) */}
              <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden bg-[#E5E5E5]/30">
                <Image
                  src="/images/germany.jpg"
                  alt="Historic German street and architecture in soft light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw)"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Destination 3: Work in Dubai & UAE (7 cols image, 5 cols text) */}
      <section className="py-24 md:py-36 border-b border-[#E5E5E5]" aria-label="Work in UAE">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image 7 columns */}
              <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden bg-[#E5E5E5]/30">
                <Image
                  src="/images/uae.jpg"
                  alt="Dubai Marina architecture and skyline at dusk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw)"
                  className="object-cover"
                />
              </div>

              {/* Text 5 columns */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-medium mb-3">
                  Professional opportunities
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] tracking-tight leading-[1.1] mb-6">
                  Work in Dubai & UAE
                </h2>
                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-8">
                  {siteContent.pathways[2].description}
                </p>

                {/* Key opportunities as one comma-separated line */}
                <div className="pt-6 border-t border-[#E5E5E5] mb-8">
                  <p className="text-xs uppercase tracking-wider text-[#000000] font-medium mb-2">
                    Key opportunities
                  </p>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {siteContent.pathways[2].bullets.join(', ')}.
                  </p>
                </div>

                <div>
                  <Link
                    href="/work-in-uae"
                    className="inline-flex items-center text-xs uppercase tracking-widest text-[#000000] hover:text-[#A86500] font-medium transition-colors group"
                  >
                    <span>Explore UAE</span>
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
