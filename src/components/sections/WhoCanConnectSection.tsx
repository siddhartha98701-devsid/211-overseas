'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/content/site';
import { motion } from 'framer-motion';

export function WhoCanConnectSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" aria-label="Who can connect with us">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blob blob-cool opacity-40" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <p className="eyebrow text-[#A86500] mb-3">Target Candidates</p>
          <h2 className="headline-lg mb-4 text-[#000000]">
            Who can <em className="font-display italic text-[#A86500]">connect</em> with us
          </h2>
          <p className="text-sm md:text-base text-[#4A4A4A] max-w-xl mx-auto mb-10">
            Our pathways are customized for individuals at every career and educational stage.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10">
            {siteContent.whoCanConnect.profiles.map((profile, idx) => (
              <motion.div
                key={profile}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="glass-strong rounded-full px-6 py-3 border border-white/90 shadow-sm text-[14.5px] font-medium text-[#000000] hover:border-[#E59217]/30 hover:text-[#A86500] transition-all cursor-default"
              >
                {profile}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Button href="/contact" variant="primary" size="lg">
            Schedule a Free Consultation
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
