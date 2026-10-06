import type { ReactNode } from 'react';
import { ScrollReveal } from './ScrollReveal';

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  label: string;
  updated: string;
  intro?: ReactNode;
  sections: LegalSection[];
  footer?: ReactNode;
}

/** Shared layout for the legal pages required by the brand & legal guidelines. */
export function LegalPage({ title, label, updated, intro, sections, footer }: LegalPageProps) {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-36 border-b border-[#E6DDCC]" aria-label={label}>
      <div className="max-w-3xl mx-auto px-6">
        <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium mb-4">
          <span className="h-px w-10 bg-[#94682B]" />
          Legal
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-black tracking-tight leading-[1.1] mb-3">
          {title}
        </h1>
        <p className="text-sm text-[#57514A] mb-10">Last updated: {updated}</p>

        <div className="text-[#57514A] leading-relaxed space-y-6 text-sm sm:text-base">
          {intro && <p>{intro}</p>}
          {sections.map((s, i) => (
            <ScrollReveal key={s.heading}>
              <div className="border-t border-[#E6DDCC] pt-6">
                <h2 className="font-serif text-xl font-bold text-black mb-3">
                  <span className="text-[#D1A95F] mr-2">{i + 1}.</span>
                  {s.heading}
                </h2>
                <div className="space-y-3">{s.body}</div>
              </div>
            </ScrollReveal>
          ))}
          {footer && <div className="border-t border-[#E6DDCC] pt-6">{footer}</div>}
        </div>
      </div>
    </section>
  );
}
