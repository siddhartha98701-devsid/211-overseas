import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal';

export interface SectionHeaderImage {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: '16/9' | '21/9' | '16/10' | '4/3';
}

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  /** Tighter bottom margin for condensed sections. */
  compact?: boolean;
  /** Optional high-quality stock photo under section header */
  image?: SectionHeaderImage;
}

export function SectionHeader({
  eyebrow,
  headline,
  description,
  centered = false,
  dark = false,
  compact = false,
  image,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${compact ? 'mb-8 md:mb-10' : 'mb-12 md:mb-16'}`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-widest font-semibold mb-3 ${dark ? 'text-[#FC7F4E]' : 'text-[#A33E11]'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-[#1B1C1A]'}`}>
        {headline}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-base leading-relaxed font-normal ${dark ? 'text-white/70' : 'text-[#41484B]'}`}>
          {description}
        </p>
      )}
      {image && (
        <div className="mt-6 relative w-full overflow-hidden rounded-[3px] border border-[#E6DDCC] bg-[#FAF8F5] shadow-sm">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 800px, 92vw"
              className="object-cover"
            />
          </div>
          {image.caption && (
            <p className="px-3 py-1.5 text-[11px] text-[#41484B] bg-[#FAF8F5]/90 border-t border-[#E6DDCC]/60 italic">
              {image.caption}
            </p>
          )}
        </div>
      )}
    </ScrollReveal>
  );
}
