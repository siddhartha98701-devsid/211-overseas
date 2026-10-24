'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { MOBILE_PATTERN, submitLead } from '@/lib/lead';
import { siteContent } from '@/content/site';

const schema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your name'),
  mobile: z
    .string()
    .transform((v) => v.replace(/[\s-]/g, ''))
    .refine((v) => MOBILE_PATTERN.test(v), 'Enter a valid 10-digit mobile number'),
  email: z.string().trim().email('Enter a valid email').optional().or(z.literal('')),
  interest: z.string().optional(),
  otherCountry: z.string().trim().optional(),
  consent: z.boolean().refine((v) => v === true, 'Please tick the consent box'),
  faxNumber: z.string().max(0).optional(), // honeypot
});

type Values = z.input<typeof schema>;

interface LeadMiniFormProps {
  /** Pre-selected interest, e.g. "Study in South Korea". */
  interest?: string;
  /** Tag shown in the CRM log so you can see which widget produced the lead. */
  source: string;
  submitLabel?: string;
  /** Show an optional email field (used by the lead popup and contact page). */
  showEmail?: boolean;
  onSuccess?: () => void;
}

const INPUT =
  'w-full px-4 py-3 text-base sm:text-sm min-h-11 bg-white border border-[#E6DDCC] text-black placeholder-[#57514A]/60 focus:outline-none focus:border-[#0C3844] focus:ring-1 focus:ring-[#0C3844] transition-colors';
const LABEL = 'block text-xs uppercase tracking-wider text-black font-semibold mb-1.5';

/** Compact name + mobile lead form used in the hero, the call-back popup and result panels. */
export function LeadMiniForm({ interest, source, submitLabel = 'Get free counselling', showEmail = false, onSuccess }: LeadMiniFormProps) {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: '', mobile: '', email: '', interest: interest ?? '', otherCountry: '', consent: false, faxNumber: '' },
  });

  const selectedInterest = watch('interest');
  const isOtherCountry =
    selectedInterest?.toLowerCase().includes('other') ||
    selectedInterest === 'Other countries' ||
    selectedInterest === 'Other';

  const onSubmit = async (v: Values) => {
    if (v.faxNumber) return;
    setBusy(true);
    setError(null);
    const resolvedInterest = v.interest
      ? v.otherCountry
        ? `${v.interest}: ${v.otherCountry}`
        : v.interest
      : undefined;

    const res = await submitLead({
      fullName: v.fullName,
      mobile: v.mobile.replace(/[\s-]/g, ''),
      email: v.email || undefined,
      interests: resolvedInterest ? [resolvedInterest] : [],
      destination: v.otherCountry || undefined,
      consent: v.consent,
      source,
    });
    setBusy(false);
    if (!res.ok) return setError(res.message ?? 'Something went wrong.');
    setDone(true);
    onSuccess?.();
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-6 text-center"
        role="status"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-[#94682B] text-white">
          <Check size={24} strokeWidth={2.5} />
        </div>
        <h4 className="font-serif text-xl font-bold text-black">Thank you!</h4>
        <p className="mt-2 text-sm text-[#57514A] leading-relaxed">
          A 211 OVERSEAS counsellor will call or WhatsApp you shortly on the number you shared.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register('faxNumber')} />
      </div>

      {error && (
        <p role="alert" className="flex items-center gap-2 border border-red-300 bg-red-50 p-3 text-xs text-red-800">
          <AlertCircle size={14} className="shrink-0" /> {error}
        </p>
      )}

      <div>
        <label htmlFor={`${source}-name`} className={LABEL}>
          Full name
        </label>
        <input id={`${source}-name`} autoComplete="name" placeholder="Your name" className={INPUT} {...register('fullName')} />
        {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
      </div>

      <div>
        <label htmlFor={`${source}-mobile`} className={LABEL}>
          Mobile number
        </label>
        <input
          id={`${source}-mobile`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          className={INPUT}
          {...register('mobile')}
        />
        {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile.message as string}</p>}
      </div>

      {showEmail && (
        <div>
          <label htmlFor={`${source}-email`} className={LABEL}>
            Email <span className="normal-case tracking-normal text-[#57514A]">(optional)</span>
          </label>
          <input id={`${source}-email`} type="email" inputMode="email" autoComplete="email" placeholder="you@example.com" className={INPUT} {...register('email')} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message as string}</p>}
        </div>
      )}

      <div>
        <label htmlFor={`${source}-interest`} className={LABEL}>
          Target Destination / Track
        </label>
        <select id={`${source}-interest`} className={INPUT} {...register('interest')}>
          <option value="">Select country or program…</option>
          {siteContent.form.interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {isOtherCountry && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-1"
        >
          <label htmlFor={`${source}-otherCountry`} className={LABEL}>
            Specify Country of Interest <span className="text-[#0C3844]">*</span>
          </label>
          <input
            id={`${source}-otherCountry`}
            type="text"
            placeholder="e.g. Ireland, France, New Zealand, Italy"
            className={INPUT}
            {...register('otherCountry')}
          />
        </motion.div>
      )}

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 filter-checkbox" {...register('consent')} />
          <span className="text-xs text-[#57514A] leading-relaxed">
            I consent to 211 OVERSEAS contacting me regarding overseas study and career pathways.{' '}
            <Link href="/privacy-policy" className="underline decoration-[#0C3844] underline-offset-2 hover:text-[#0C3844]">
              Privacy Policy
            </Link>{' '}
            &amp;{' '}
            <Link href="/disclaimer" className="underline decoration-[#0C3844] underline-offset-2 hover:text-[#0C3844]">
              Disclaimer
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="mt-1 text-xs text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={busy}
        className="btn-shine w-full flex items-center justify-center gap-2 bg-[#94682B] hover:bg-[#7A5622] disabled:opacity-60 text-white text-xs uppercase tracking-widest font-medium py-3.5 transition-colors cursor-pointer"
      >
        {busy ? 'Submitting…' : submitLabel}
        {!busy && <ArrowRight size={16} />}
      </button>
    </form>
  );
}
