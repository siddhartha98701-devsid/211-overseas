import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteContent } from '@/content/site';

export function NotSureSection() {
  const { notSure } = siteContent;

  return (
    <section className="py-24 md:py-36 border-b border-[#E6DDCC]" aria-label="Profile assessment checklist">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#57514A] font-medium mb-3 block">
                Profile-first guidance
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-6">
                Not sure which country?
              </h2>
              <p className="text-base text-[#57514A] leading-relaxed mb-8">
                {notSure.description}
              </p>
              <Link
                href="/contact?interest=Not+Sure+%E2%80%93+Need+Counselling#enquiry-form"
                className="inline-block bg-[#94682B] hover:bg-[#7A5622] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Book free consultation
              </Link>
            </div>

            {/* Right Column (7 cols): 7 questions as a simple two-column list with hairline dividers */}
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-wider text-[#2A2A2A] font-medium mb-6">
                Questions to consider before selecting a destination
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 border-t border-[#E6DDCC]">
                {notSure.checklist.map((question, i) => (
                  <div
                    key={i}
                    className="py-5 border-b border-[#E6DDCC] flex items-start gap-4"
                  >
                    <span className="font-serif text-base text-[#57514A] font-bold flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-[#2A2A2A] leading-snug font-normal">
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
