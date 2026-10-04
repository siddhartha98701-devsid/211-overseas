import { ScrollReveal } from './ScrollReveal';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  headline,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest text-[#6C675E] font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#15140F] tracking-tight leading-[1.1]">
        {headline}
      </h2>
      {description && (
        <p className="mt-4 text-[#6C675E] text-base md:text-lg leading-relaxed font-normal">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
