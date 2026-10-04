import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteContent } from '@/content/site';

export function HowItWorksSection() {
  const { howItWorks } = siteContent;

  return (
    <section className="py-24 md:py-36 border-b border-[#DDD7CC]" aria-label="Our advisory process">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#15140F] tracking-tight leading-[1.1]">
                How 211 Overseas works
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg text-[#6C675E] leading-relaxed font-light">
                From initial assessment to your departure day, we provide transparent, structured
                guidance at every milestone.
              </p>
            </div>
          </div>

          {/* Single vertical list with hairline dividers (7 steps rendered ONCE) */}
          <div className="border-t border-[#DDD7CC]">
            {howItWorks.steps.map((step) => (
              <div
                key={step.number}
                className="py-8 sm:py-10 border-b border-[#DDD7CC] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
              >
                <div className="md:col-span-2">
                  <span className="font-serif text-2xl sm:text-3xl font-light text-[#6C675E]">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-[#15140F] tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-sm sm:text-base text-[#6C675E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
