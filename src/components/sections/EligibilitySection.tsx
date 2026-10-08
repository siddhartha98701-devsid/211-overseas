'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Info } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { FIELDS } from './ProgramFinderSection';

const EDUCATION = [
  { id: 'hsc', label: '12th / HSC (completed or appearing)', level: 'Undergraduate' },
  { id: 'diploma', label: 'Diploma', level: 'Undergraduate' },
  { id: 'bachelor', label: "Bachelor's degree", level: 'Graduate' },
  { id: 'master', label: "Master's degree or higher", level: 'Graduate' },
] as const;

const ENGLISH = [
  { id: 'ielts55', label: 'IELTS 5.5 or above', ok: true },
  { id: 'duolingo', label: 'Duolingo English Test score', ok: true },
  { id: 'ieltslow', label: 'IELTS below 5.5', ok: false },
  { id: 'none', label: "I haven't taken a test yet", ok: false },
] as const;

const STEPS = ['Education', 'English', 'Field'] as const;

export function EligibilitySection() {
  const { openCallback } = useCallbackModal();
  const [step, setStep] = useState(0);
  const [edu, setEdu] = useState<(typeof EDUCATION)[number] | null>(null);
  const [eng, setEng] = useState<(typeof ENGLISH)[number] | null>(null);
  const [field, setField] = useState<string | null>(null);

  const done = step === 3;
  const fieldLabel = FIELDS.find((f) => f.id === field)?.label ?? 'a field that suits you';

  const reset = () => {
    setStep(0);
    setEdu(null);
    setEng(null);
    setField(null);
  };

  const option = (selected: boolean) =>
    `w-full text-left px-5 py-4 border transition-colors cursor-pointer ${
      selected ? 'border-[#B88740] bg-[#94682B]/10 text-white' : 'border-white/20 text-white hover:border-[#B88740]'
    }`;

  return (
    <section id="eligibility" className="bgl bgl-black py-14 md:py-24 text-white scroll-mt-24" aria-label="Check your eligibility">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              dark
              eyebrow="Eligibility check"
              headline="Am I eligible to study in South Korea?"
              description="Answer three quick questions to see where you stand — and which route to explore first."
            />
            <ul className="space-y-3 text-sm text-white/70">
              {['Takes under a minute', 'No documents needed', 'Free expert guidance on your next step'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#D1A95F] shrink-0" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8 min-h-[26rem]">
              {/* Progress */}
              <div className="mb-8" aria-hidden="true">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/50 mb-2">
                  {STEPS.map((s, i) => (
                    <span key={s} className={i <= Math.min(step, 2) ? 'text-[#D1A95F]' : ''}>{i + 1}. {s}</span>
                  ))}
                </div>
                <div className="h-1 bg-white/15">
                  <motion.div className="h-full bg-[#94682B]" animate={{ width: `${(Math.min(step, 3) / 3) * 100}%` }} transition={{ duration: 0.4 }} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                >
                  {step === 0 && (
                    <fieldset>
                      <legend className="font-serif text-xl font-bold mb-5">What is your current education level?</legend>
                      <div className="space-y-3">
                        {EDUCATION.map((e) => (
                          <button key={e.id} type="button" className={option(edu?.id === e.id)} onClick={() => { setEdu(e); setStep(1); }}>
                            {e.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {step === 1 && (
                    <fieldset>
                      <legend className="font-serif text-xl font-bold mb-5">Your English proficiency?</legend>
                      <div className="space-y-3">
                        {ENGLISH.map((e) => (
                          <button key={e.id} type="button" className={option(eng?.id === e.id)} onClick={() => { setEng(e); setStep(2); }}>
                            {e.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {step === 2 && (
                    <fieldset>
                      <legend className="font-serif text-xl font-bold mb-5">Which field interests you most?</legend>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[...FIELDS, { id: 'notsure', label: "I'm not sure yet" }].map((f) => (
                          <button key={f.id} type="button" className={option(field === f.id)} onClick={() => { setField(f.id); setStep(3); }}>
                            {f.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {done && edu && eng && (
                    <div role="status" aria-live="polite">
                      <p className="text-xs uppercase tracking-widest text-[#D1A95F] font-medium">Your indicative result</p>
                      <h3 className="mt-2 font-serif text-2xl font-bold">
                        {eng.ok ? 'Good news — you look ready to explore.' : 'You can still get started.'}
                      </h3>
                      <ul className="mt-5 space-y-3 text-sm text-white/80 leading-relaxed">
                        <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 text-[#D1A95F] shrink-0" />
                          <span>
                            Recommended route: <strong className="text-white">{edu.level} programs</strong>, in{' '}
                            <strong className="text-white">{fieldLabel}</strong>.
                          </span>
                        </li>
                        <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 text-[#D1A95F] shrink-0" />
                          <span>
                            {eng.ok
                            ? 'Your English score fits the typical requirement (IELTS 5.5+, Duolingo accepted).'
                            : 'Many programs ask for IELTS 5.5+ (Duolingo accepted). We will guide you on the right test and timeline.'}
                          </span>
                        </li>
                        <li className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 text-[#D1A95F] shrink-0" />
                          <span>A counsellor will shortlist English-taught options in Seoul and Busan for your profile.</span>
                        </li>
                      </ul>
                      <div className="mt-7 flex flex-wrap items-center gap-4">
                        <button
                          type="button"
                          onClick={() => openCallback({ interest: 'Study in South Korea', source: `eligibility:${edu.label} | ${eng.label} | ${fieldLabel}` })}
                          className="btn-shine bg-[#94682B] hover:bg-[#7A5622] text-white px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                        >
                          Talk to a counsellor
                        </button>
                        <button type="button" onClick={reset} className="text-xs uppercase tracking-widest text-white/70 hover:text-[#D1A95F] cursor-pointer">
                          Start over
                        </button>
                      </div>
                      <p className="mt-6 flex gap-2 text-xs text-white/50 leading-relaxed">
                        <Info size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
                        Indicative guidance only. 211 OVERSEAS does not guarantee admission or visa approval — final decisions rest with the universities and embassies.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {step > 0 && !done && (
                <button type="button" onClick={() => setStep(step - 1)} className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-[#D1A95F] cursor-pointer">
                  <ArrowLeft size={14} /> Back
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
