import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/content/site';

export function CounsellingSection() {
  const { counselling } = siteContent;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" aria-label="Free Counselling">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] blob blob-cool opacity-40" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#94682B]/10 text-[#8A6020] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#94682B]" />
            One-on-One Advisory
          </div>
          <h2 className="headline-lg text-[#2A2A2A] mb-4">
            Start Your <em className="font-display italic text-[#8A6020]">Overseas Journey</em>
          </h2>
          <p className="text-base md:text-base text-[#57514A] max-w-xl mx-auto mb-10">
            {counselling.description}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <GlassCard className="p-8 sm:p-10 mb-8 border border-white/90 shadow-[0_16px_40px_rgba(11,11,15,0.05)] text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-5">
              Common questions we address during your session:
            </p>
            <div className="space-y-4">
              {counselling.questions.map((q, i) => (
                <div key={i} className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/60 border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-[#94682B] flex-shrink-0" />
                  <p className="font-display text-base sm:text-lg text-[#2A2A2A] italic">
                    &ldquo;{q}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="font-semibold text-[#8A6020] uppercase tracking-wider">
                {counselling.note}
              </span>
              <span className="text-[#8A8A8A]">Online &amp; In-Person in Ahmedabad</span>
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal>
          <Button href="/contact" variant="primary" size="lg">
            {counselling.cta} →
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
