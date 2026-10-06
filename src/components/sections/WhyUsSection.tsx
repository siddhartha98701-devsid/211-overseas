import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteContent } from '@/content/site';

export function WhyUsSection() {
  return (
    <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="Why 211 OVERSEAS">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
              Why 211 OVERSEAS
            </h2>
            <p className="text-base sm:text-lg text-[#57514A] leading-relaxed font-light">
              We prioritize candidates over commissions. Here is how our consulting methodology sets you
              up for long-term international success.
            </p>
          </div>

          {/* 5 short text blocks, 2 columns, no cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {siteContent.whyUs.points.map((point, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A] tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-[#57514A] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
