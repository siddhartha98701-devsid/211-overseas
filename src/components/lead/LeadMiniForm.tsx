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
  interest: z.string().optional(),
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
  onSuccess?: () => void;
}

const INPUT =
  'w-full px-4 py-3 text-sm bg-white border border-[#E6DDCC] text-black placeholder-[#57514A]/60 focus:outline-none focus:border-[#B88740] focus:ring-1 focus:ring-[#B88740] transition-colors';
const LABEL = 'block text-xs uppercase tracking-wider text-black font-medium mb-1.5';

/** Compact name + mobile lead form used in the hero, the call-back popup and result panels. */
export function LeadMiniForm({ interest, source, submitLabel = 'Get free counselling', onSuccess }: LeadMiniFormProps) {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: '', mobile: '', interest: interest ?? '', consent: false, faxNumber: '' },
  });

  const onSubmit = async (v: Values) => {
    if (v.faxNumber) return;
    setBusy(true);
    setError(null);
    const res = await submitLead({
      fullName: v.fullName,
      mobile: v.mobile.replace(/[\s-]/g, ''),
      interests: v.interest ? [v.interest] : [],
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

      <div>
        <label htmlFor={`${source}-interest`} className={LABEL}>
          I am interested in
        </label>
        <select id={`${source}-interest`} className={INPUT} {...register('interest')}>
          <option value="">Select…</option>
          {siteContent.form.interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 filter-checkbox" {...register('consent')} />
          <span className="text-xs text-[#57514A] leading-relaxed">
            I consent to 211 OVERSEAS contacting me regarding study abroad programs via phone/WhatsApp/Email.{' '}
            <Link href="/privacy-policy" className="underline decoration-[#B88740] underline-offset-2 hover:text-black">
              Privacy Policy
            </Link>
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
