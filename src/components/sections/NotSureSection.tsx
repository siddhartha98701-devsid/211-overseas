'use client';

import Link from 'next/link';
import { ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { siteContent } from '@/content/site';

export function NotSureSection() {
  const { notSure } = siteContent;
  const { openCallback } = useCallbackModal();

  return (
    <section className="py-16 md:py-24 border-b border-[#E6DDCC] bg-white" aria-label="Profile assessment checklist">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A33E11] font-semibold">
                <HelpCircle size={14} />
                Profile-First Advisory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1C1A] tracking-tight leading-[1.1]">
                Not sure which <span className="text-[#A33E11]">country</span> fits you?
              </h2>
              <p className="text-sm sm:text-base text-[#41484B] leading-relaxed">
                {notSure.description} Our advisors assess your academic transcripts, budget, language capabilities, and career goals to find the right destination.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openCallback({ interest: 'Not Sure – Need Counselling', source: 'not-sure-section' })}
                  className="btn-shine inline-flex items-center gap-2 bg-[#A33E11] hover:bg-[#85320D] text-white px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={14} />
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#1B1C1A] text-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column (7 cols): Checklist Cards */}
            <div className="lg:col-span-7">
              <div className="border border-[#E6DDCC] bg-[#FAF8F5] p-6 sm:p-8 shadow-sm">
                <p className="text-xs uppercase tracking-wider text-[#1B1C1A] font-bold mb-5 flex items-center justify-between">
                  <span>Questions We Help You Answer</span>
                  <span className="text-[11px] text-[#A33E11] font-semibold">7 Key Criteria</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {notSure.checklist.map((question, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white border border-[#E6DDCC] flex items-start gap-3 hover:border-[#A33E11] transition-colors"
                    >
                      <span className="font-serif text-sm font-bold text-[#A33E11] shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs sm:text-sm text-[#1B1C1A] leading-snug font-medium">
                        {question}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#E6DDCC]/70 flex items-center gap-2 text-xs text-[#41484B]">
                  <CheckCircle2 size={15} className="text-[#A33E11] shrink-0" />
                  <span>Counselling is 100% confidential and personalised to your profile.</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
