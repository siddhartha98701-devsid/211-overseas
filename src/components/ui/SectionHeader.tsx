import { ScrollReveal } from './ScrollReveal';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  /** Tighter bottom margin for condensed sections. */
  compact?: boolean;
}

export function SectionHeader({
  eyebrow,
  headline,
  description,
  centered = false,
  dark = false,
  compact = false,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${compact ? 'mb-8 md:mb-10' : 'mb-12 md:mb-16'}`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-widest font-medium mb-3 ${dark ? 'text-[#D1A95F]' : 'text-[#57514A]'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-black'}`}>
        {headline}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-base leading-relaxed font-normal ${dark ? 'text-white/70' : 'text-[#57514A]'}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
