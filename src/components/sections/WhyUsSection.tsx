import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteContent } from '@/content/site';

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 border-b border-[#E6DDCC]" aria-label="Why 211 OVERSEAS">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-[#8A6020] font-medium block mb-2">
                Advisory Philosophy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-4">
                Why 211 OVERSEAS
              </h2>
              <p className="text-base text-[#57514A] leading-relaxed font-light">
                We prioritize candidates over commissions. Here is how our consulting methodology sets you
                up for long-term international success.
              </p>
            </div>
            <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[2/1] lg:aspect-[16/10] w-full overflow-hidden rounded-[3px] border border-[#E6DDCC] bg-[#FAF8F5] shadow-sm">
              <Image
                src="/images/web/graduates-wide.webp"
                alt="Global university graduates celebrating international career and academic milestones"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 480px, 92vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* 5 structured points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-[#E6DDCC]/70">
            {siteContent.whyUs.points.map((point, i) => (
              <div key={i} className="border border-[#E6DDCC] bg-white p-6 space-y-2.5 hover:border-[#0C3844] transition-colors">
                <span className="text-xs font-bold text-[#0C3844] uppercase tracking-wider block">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2A2A2A] tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm text-[#57514A] leading-relaxed">
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
