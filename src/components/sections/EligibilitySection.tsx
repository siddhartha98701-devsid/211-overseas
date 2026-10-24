'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Info, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { FIELDS } from './ProgramFinderSection';

const EDUCATION = [
  { id: 'hsc', label: '12th / HSC (Completed or Appearing)', level: 'Undergraduate', badge: 'High School' },
  { id: 'diploma', label: '3-Year Polytechnic / Technical Diploma', level: 'Undergraduate', badge: 'Diploma' },
  { id: 'bachelor', label: "Bachelor's Degree (Any Stream)", level: 'Graduate', badge: 'Graduate' },
  { id: 'master', label: "Master's Degree or Higher", level: 'Graduate', badge: 'Postgraduate' },
] as const;

const ENGLISH = [
  { id: 'ielts55', label: 'IELTS 5.5 or Above', ok: true, badge: 'Direct Entry' },
  { id: 'duolingo', label: 'Duolingo English Test (95+)', ok: true, badge: 'Online Accepted' },
  { id: 'ieltslow', label: 'IELTS Below 5.5 (or planning to appear)', ok: false, badge: 'Pre-Sessional' },
  { id: 'none', label: "I haven't taken any English test yet", ok: false, badge: 'Waiver / Track' },
] as const;

const STEPS = [
  { label: 'Education', title: 'What is your current education level?' },
  { label: 'English', title: 'What is your English proficiency score?' },
  { label: 'Field', title: 'Which academic field interests you most?' },
] as const;

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

  return (
    <section id="eligibility" className="bgl bgl-black py-16 md:py-24 text-white scroll-mt-24" aria-label="Check your eligibility">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left information column */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              dark
              eyebrow="Profile Assessment Tool"
              headline="Am I eligible to study in South Korea?"
              description="Complete three quick criteria checks to evaluate your admission probability, scholarship eligibility, and program compatibility in under 60 seconds."
              compact
            />
            <div className="p-5 border border-white/10 bg-white/[0.03] space-y-3.5">
              <span className="text-xs uppercase tracking-widest text-[#FC7F4E] font-semibold block">
                Assessment Guarantee
              </span>
              <ul className="space-y-3 text-sm text-white/75">
                {[
                  'Instant preliminary eligibility score',
                  'No document uploads or upfront fees required',
                  'Direct consultation with an accredited regional advisor',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#FC7F4E] shrink-0" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right interactive stepper box */}
          <div className="lg:col-span-7">
            <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-9 min-h-[28rem] flex flex-col justify-between shadow-2xl">
              <div>
                {/* Clean Progress Stepper Header */}
                <div className="mb-8" aria-hidden="true">
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="text-white/60 uppercase tracking-widest font-semibold">
                      {done ? 'Evaluation Complete' : `Step ${step + 1} of 3: ${STEPS[step]?.label}`}
                    </span>
                    <span className="text-[#FC7F4E] font-bold tabular-nums">
                      {done ? '100%' : `${Math.round(((step) / 3) * 100)}%`}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#A33E11]"
                      animate={{ width: `${(Math.min(step, 3) / 3) * 100}%` }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step === 0 && (
                      <fieldset>
                        <legend className="font-serif text-xl sm:text-2xl font-bold mb-5 leading-snug">
                          {STEPS[0].title}
                        </legend>
                        <div className="space-y-3">
                          {EDUCATION.map((e) => {
                            const isSelected = edu?.id === e.id;
                            return (
                              <button
                                key={e.id}
                                type="button"
                                onClick={() => {
                                  setEdu(e);
                                  setStep(1);
                                }}
                                className={`w-full text-left px-5 py-4 border transition-all cursor-pointer flex items-center justify-between min-h-[52px] ${
                                  isSelected
                                    ? 'border-[#A33E11] bg-[#A33E11]/15 text-white ring-1 ring-[#A33E11]'
                                    : 'border-white/15 bg-white/[0.02] text-white/90 hover:border-[#A33E11] hover:bg-white/[0.05]'
                                }`}
                              >
                                <span className="font-medium text-sm sm:text-base">{e.label}</span>
                                <span className="text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/10 text-white/70">
                                  {e.badge}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </fieldset>
                    )}

                    {step === 1 && (
                      <fieldset>
                        <legend className="font-serif text-xl sm:text-2xl font-bold mb-5 leading-snug">
                          {STEPS[1].title}
                        </legend>
                        <div className="space-y-3">
                          {ENGLISH.map((e) => {
                            const isSelected = eng?.id === e.id;
                            return (
                              <button
                                key={e.id}
                                type="button"
                                onClick={() => {
                                  setEng(e);
                                  setStep(2);
                                }}
                                className={`w-full text-left px-5 py-4 border transition-all cursor-pointer flex items-center justify-between min-h-[52px] ${
                                  isSelected
                                    ? 'border-[#A33E11] bg-[#A33E11]/15 text-white ring-1 ring-[#A33E11]'
                                    : 'border-white/15 bg-white/[0.02] text-white/90 hover:border-[#A33E11] hover:bg-white/[0.05]'
                                }`}
                              >
                                <span className="font-medium text-sm sm:text-base">{e.label}</span>
                                <span className="text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/10 text-white/70">
                                  {e.badge}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </fieldset>
                    )}

                    {step === 2 && (
                      <fieldset>
                        <legend className="font-serif text-xl sm:text-2xl font-bold mb-5 leading-snug">
                          {STEPS[2].title}
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[...FIELDS, { id: 'notsure', label: "I'm not sure yet (Need guidance)" }].map((f) => {
                            const isSelected = field === f.id;
                            return (
                              <button
                                key={f.id}
                                type="button"
                                onClick={() => {
                                  setField(f.id);
                                  setStep(3);
                                }}
                                className={`text-left px-4 py-3.5 border transition-all cursor-pointer flex items-center justify-between min-h-[50px] ${
                                  isSelected
                                    ? 'border-[#A33E11] bg-[#A33E11]/15 text-white ring-1 ring-[#A33E11]'
                                    : 'border-white/15 bg-white/[0.02] text-white/90 hover:border-[#A33E11] hover:bg-white/[0.05]'
                                }`}
                              >
                                <span className="font-medium text-xs sm:text-sm">{f.label}</span>
                                <ArrowRight size={14} className="text-[#FC7F4E] shrink-0" />
                              </button>
                            );
                          })}
                        </div>
                      </fieldset>
                    )}

                    {done && edu && eng && (
                      <div role="status" aria-live="polite" className="space-y-6">
                        <div className="p-4 border border-[#A33E11]/50 bg-[#A33E11]/10 rounded-[2px] flex items-center gap-3">
                          <Sparkles size={22} className="text-[#FC7F4E] shrink-0" />
                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#FC7F4E] font-bold">
                              Preliminary Match Found
                            </p>
                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                              {eng.ok ? 'High Probability for Direct Enrolment' : 'Foundation & Language Pathway Eligible'}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="p-4 border border-white/10 bg-white/[0.02]">
                            <span className="text-[11px] uppercase tracking-wider font-semibold text-white/50 block mb-1">
                              Target Degree Level &amp; Track:
                            </span>
                            <p className="text-sm font-semibold text-white">
                              {edu.level} Programs in {fieldLabel}
                            </p>
                          </div>

                          <div className="p-4 border border-white/10 bg-white/[0.02]">
                            <span className="text-[11px] uppercase tracking-wider font-semibold text-white/50 block mb-1">
                              Language Requirement Status:
                            </span>
                            <p className="text-sm text-white/80">
                              {eng.ok
                                ? 'Your test credentials qualify for 100% English-taught university programs in Seoul & Busan.'
                                : 'English waivers or Korean language prep tracks (D-4 to D-2) allow entry without initial IELTS.'}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              openCallback({
                                interest: 'Study in South Korea',
                                source: `eligibility:${edu.label} | ${eng.label} | ${fieldLabel}`,
                              })
                            }
                            className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                          >
                            Get Custom University Shortlist
                          </button>
                          <button
                            type="button"
                            onClick={reset}
                            className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
                          >
                            <RotateCcw size={13} />
                            <span>Check Another Profile</span>
                          </button>
                        </div>

                        <p className="flex gap-2 text-[11px] text-white/50 leading-relaxed border-t border-white/10 pt-4">
                          <Info size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
                          Indicative evaluation based on standard Korean university entrance criteria. Final acceptance and scholarships depend on complete documentation and university review.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Back button */}
              {step > 0 && !done && (
                <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white/70 hover:text-[#FC7F4E] transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                  <span className="text-[11px] text-white/40">Step {step + 1} of 3</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
