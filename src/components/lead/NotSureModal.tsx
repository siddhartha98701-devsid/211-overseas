'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Check, AlertCircle, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const notSureSchema = z.object({
  fullName: z.string().min(2, 'Please enter your name'),
  mobile: z.string().min(10, 'Please enter a valid mobile / WhatsApp number'),
  email: z.string().email('Please enter a valid email address'),
  preferredCountry: z.string().min(1, 'Please select a destination'),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'Please agree to the Privacy Policy'),
  faxNumber: z.string().max(0).optional(),
});

type NotSureFormData = z.infer<typeof notSureSchema>;

const COUNTRIES = [
  'South Korea',
  'Germany',
  'UAE / Dubai',
  'Japan',
  'Taiwan',
  'Singapore',
  'United Kingdom',
  'United States',
  'Canada',
  'Australia',
  'Europe',
  'Other / Not Sure',
];

export function NotSureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NotSureFormData>({
    resolver: zodResolver(notSureSchema),
    defaultValues: {
      preferredCountry: 'South Korea',
      consent: true,
    },
  });

  const openModal = useCallback(() => {
    setIsOpen(true);
    setSubmitted(false);
    setServerError(null);
    try {
      sessionStorage.setItem('211_not_sure_shown', 'true');
    } catch {
      // ignore
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Listen for manual trigger events from header / hero
  useEffect(() => {
    const handleOpen = () => openModal();
    window.addEventListener('open-not-sure-modal', handleOpen);
    return () => window.removeEventListener('open-not-sure-modal', handleOpen);
  }, [openModal]);

  // Timers: auto-open after 20s and exit intent on desktop (only once per session)
  useEffect(() => {
    try {
      if (sessionStorage.getItem('211_not_sure_shown')) {
        return;
      }
    } catch {
      return;
    }

    const timer = setTimeout(() => {
      openModal();
    }, 20000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        openModal();
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [openModal]);

  // Accessibility: Focus trap & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first input
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeModal]);

  const onSubmit = async (data: NotSureFormData) => {
    if (data.faxNumber) return; // honeypot
    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'not-sure-popup',
          fullName: data.fullName,
          mobile: data.mobile,
          email: data.email,
          destination: data.preferredCountry,
          courseOrCareer: data.message || 'Not sure where to start - Free counselling request',
          consent: true,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || 'Failed to submit enquiry');
      }

      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="not-sure-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* Modal card: bottom-sheet on mobile, centered modal on desktop */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="not-sure-title"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="w-full sm:max-w-lg bg-white border-t-4 border-[#B88740] rounded-t-2xl sm:rounded-none p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close dialog"
              className="absolute right-4 top-4 p-2 text-[#57514A] hover:text-black transition-colors rounded-full hover:bg-black/5"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-8 text-center" role="status">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#94682B] text-white">
                  <Check size={28} strokeWidth={2.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-black mb-2">You&apos;re All Set!</h3>
                <p className="text-sm text-[#57514A] leading-relaxed max-w-sm mx-auto mb-6">
                  Thank you for reaching out. Our senior counselor will connect with you via Phone / WhatsApp within 24 hours to help map your ideal study abroad path.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn-shine bg-[#94682B] hover:bg-[#7A5622] text-white text-xs uppercase tracking-widest font-medium px-6 py-3 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#94682B] font-semibold block mb-1">
                  Free Overseas Advisory
                </span>
                <h2 id="not-sure-title" className="font-serif text-2xl sm:text-3xl font-bold text-black leading-tight mb-2">
                  Not sure where to start?
                </h2>
                <p className="text-sm text-[#57514A] leading-relaxed mb-6">
                  Get personalized, profile-first guidance. Our advisors help you choose the right country, program, and scholarship opportunities.
                </p>

                {serverError && (
                  <div role="alert" className="mb-4 flex items-center gap-2 border border-red-300 bg-red-50 p-3 text-xs text-red-800">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{serverError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" tabIndex={-1} autoComplete="off" {...register('faxNumber')} />
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="ns-name" className="block text-xs uppercase tracking-wider text-[#2A2A2A] font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      id="ns-name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full border border-[#E6DDCC] bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-[#57514A]/40 focus:border-[#94682B] focus:outline-none"
                      {...register('fullName')}
                      ref={(e) => {
                        register('fullName').ref(e);
                        firstInputRef.current = e;
                      }}
                    />
                    {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="ns-phone" className="block text-xs uppercase tracking-wider text-[#2A2A2A] font-semibold mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="ns-phone"
                        type="tel"
                        placeholder="+91 99985 85211"
                        className="w-full border border-[#E6DDCC] bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-[#57514A]/40 focus:border-[#94682B] focus:outline-none"
                        {...register('mobile')}
                      />
                      {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="ns-email" className="block text-xs uppercase tracking-wider text-[#2A2A2A] font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        id="ns-email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full border border-[#E6DDCC] bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-[#57514A]/40 focus:border-[#94682B] focus:outline-none"
                        {...register('email')}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Preferred Country */}
                  <div>
                    <label htmlFor="ns-country" className="block text-xs uppercase tracking-wider text-[#2A2A2A] font-semibold mb-1">
                      Preferred Destination
                    </label>
                    <select
                      id="ns-country"
                      className="w-full border border-[#E6DDCC] bg-white px-3.5 py-2.5 text-sm text-black focus:border-[#94682B] focus:outline-none"
                      {...register('preferredCountry')}
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="ns-message" className="block text-xs uppercase tracking-wider text-[#2A2A2A] font-semibold mb-1">
                      Message / Questions (Optional)
                    </label>
                    <textarea
                      id="ns-message"
                      rows={2}
                      placeholder="e.g. Looking for English-taught bachelor degrees in Seoul with scholarship..."
                      className="w-full border border-[#E6DDCC] bg-white px-3.5 py-2 text-sm text-black placeholder:text-[#57514A]/40 focus:border-[#94682B] focus:outline-none resize-none"
                      {...register('message')}
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer text-left">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 shrink-0 filter-checkbox"
                        {...register('consent')}
                      />
                      <span className="text-xs text-[#57514A] leading-relaxed">
                        I consent to being contacted and agree to the{' '}
                        <Link href="/privacy-policy" target="_blank" className="text-[#94682B] underline hover:text-[#7A5622]">
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                    {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-shine w-full flex items-center justify-center gap-2 bg-[#94682B] hover:bg-[#7A5622] disabled:opacity-60 text-white text-xs uppercase tracking-widest font-semibold py-3.5 transition-colors cursor-pointer shadow-md"
                  >
                    {submitting ? 'Submitting…' : 'Get Free Counselling'}
                    {!submitting && <ArrowRight size={14} />}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
