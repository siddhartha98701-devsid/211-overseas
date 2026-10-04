import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteContent } from '@/content/site';

export function NotSureSection() {
  const { notSure } = siteContent;

  return (
    <section className="py-24 md:py-36 border-b border-[#DDD7CC]" aria-label="Profile assessment checklist">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#6C675E] font-medium mb-3 block">
                Profile-first guidance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#15140F] tracking-tight leading-[1.1] mb-6">
                Not sure which country?
              </h2>
              <p className="text-base text-[#6C675E] leading-relaxed mb-8">
                {notSure.description}
              </p>
              <Link
                href="/contact?interest=Not+Sure+%E2%80%93+Need+Counselling#enquiry-form"
                className="inline-block bg-[#2F4A3C] hover:bg-[#24382E] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Book free consultation
              </Link>
            </div>

            {/* Right Column (7 cols): 7 questions as a simple two-column list with hairline dividers */}
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-wider text-[#15140F] font-medium mb-6">
                Questions to consider before selecting a destination
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 border-t border-[#DDD7CC]">
                {notSure.checklist.map((question, i) => (
                  <div
                    key={i}
                    className="py-5 border-b border-[#DDD7CC] flex items-start gap-4"
                  >
                    <span className="font-serif text-base text-[#6C675E] font-light flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-[#15140F] leading-snug font-normal">
                      {question}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
