'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export type InboundEnquiryType =
  | 'Undergraduate study'
  | 'Postgraduate study'
  | 'Short-term / professional study'
  | 'Institutional collaboration';

export const INBOUND_ENQUIRY_OPTIONS: InboundEnquiryType[] = [
  'Undergraduate study',
  'Postgraduate study',
  'Short-term / professional study',
  'Institutional collaboration',
];

interface InboundFormData {
  fullName: string;
  email: string;
  countryOfResidence: string;
  enquiryType: InboundEnquiryType;
  courseOrMessage: string;
  consent: boolean;
  faxNumber?: string;
}

export function InboundEnquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<InboundFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      countryOfResidence: '',
      enquiryType: 'Undergraduate study',
      courseOrMessage: '',
      consent: false,
      faxNumber: '',
    },
  });

  // Listen for pre-selection event from section J ("Explore Collaboration ↗")
  useEffect(() => {
    const handlePreselect = (e: Event) => {
      const customEvent = e as CustomEvent<InboundEnquiryType>;
      if (customEvent.detail) {
        setValue('enquiryType', customEvent.detail, { shouldValidate: true });
      }
    };

    window.addEventListener('set-inbound-enquiry-type', handlePreselect);
    return () => window.removeEventListener('set-inbound-enquiry-type', handlePreselect);
  }, [setValue]);

  const onSubmit = async (data: InboundFormData) => {
    // Check honeypot field
    if (data.faxNumber && data.faxNumber.trim() !== '') {
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: data.fullName.trim(),
          email: data.email.trim(),
          countryOfResidence: data.countryOfResidence.trim(),
          enquiryType: data.enquiryType,
          courseOrMessage: data.courseOrMessage.trim(),
          consent: data.consent,
          faxNumber: data.faxNumber || '',
          source: 'inbound-page',
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Unable to process your request. Please try again.');
      }

      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[#E6DDCC] p-8 md:p-10 shadow-sm text-center">
        <div className="w-14 h-14 bg-[#F3EBDD] text-[#A33E11] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-3">
          Enquiry Received
        </h3>
        <p className="text-sm text-[#41484B] max-w-md mx-auto leading-relaxed mb-6">
          Thank you. Your enquiry has been received. Our inbound advisory team will review your details and contact you with relevant academic options and next steps.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold uppercase tracking-widest text-[#A33E11] hover:underline cursor-pointer"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-[#E6DDCC] p-7 md:p-10 shadow-sm"
      noValidate
    >
      {/* Hidden Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="inbound-faxNumber">Do not fill this field</label>
        <input
          id="inbound-faxNumber"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('faxNumber')}
        />
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
          <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-5">
        {/* 1. Full Name */}
        <div>
          <label htmlFor="inbound-fullName" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
            Full name <span className="text-[#A33E11]">*</span>
          </label>
          <input
            id="inbound-fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
            {...register('fullName', {
              required: 'Please enter your full name',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
              maxLength: { value: 120, message: 'Name cannot exceed 120 characters' },
            })}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        {/* 2. Email */}
        <div>
          <label htmlFor="inbound-email" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
            Email address <span className="text-[#A33E11]">*</span>
          </label>
          <input
            id="inbound-email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
            {...register('email', {
              required: 'Please enter a valid email address',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
              maxLength: { value: 160, message: 'Email cannot exceed 160 characters' },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* 3. Country of Residence */}
        <div>
          <label htmlFor="inbound-country" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
            Country of residence <span className="text-[#A33E11]">*</span>
          </label>
          <input
            id="inbound-country"
            type="text"
            autoComplete="country-name"
            placeholder="e.g. Nepal, Bangladesh, Mauritius, Kenya"
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
            {...register('countryOfResidence', {
              required: 'Please provide your country of residence',
              minLength: { value: 2, message: 'Country name must be at least 2 characters' },
              maxLength: { value: 100, message: 'Country name cannot exceed 100 characters' },
            })}
          />
          {errors.countryOfResidence && (
            <p className="mt-1 text-xs text-red-600">{errors.countryOfResidence.message}</p>
          )}
        </div>

        {/* 4. Enquiry Type */}
        <div>
          <label htmlFor="inbound-enquiryType" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
            Enquiry type <span className="text-[#A33E11]">*</span>
          </label>
          <div className="relative">
            <select
              id="inbound-enquiryType"
              className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors appearance-none cursor-pointer"
              {...register('enquiryType', {
                required: 'Please select an enquiry type',
              })}
            >
              {INBOUND_ENQUIRY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#41484B]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.enquiryType && (
            <p className="mt-1 text-xs text-red-600">{errors.enquiryType.message}</p>
          )}
        </div>

        {/* 5. Course or Message */}
        <div>
          <label htmlFor="inbound-message" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
            Course or message
          </label>
          <textarea
            id="inbound-message"
            rows={4}
            placeholder="Tell us your intended field of study, questions, or institutional collaboration interests"
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors resize-y"
            {...register('courseOrMessage', {
              maxLength: { value: 1000, message: 'Message cannot exceed 1000 characters' },
            })}
          />
          {errors.courseOrMessage && (
            <p className="mt-1 text-xs text-red-600">{errors.courseOrMessage.message}</p>
          )}
        </div>

        {/* 6. Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded-none border border-[#E6DDCC] text-[#A33E11] focus:ring-[#A33E11] focus:ring-offset-0 cursor-pointer accent-[#A33E11]"
              {...register('consent', {
                required: 'Please tick the consent box to proceed',
              })}
            />
            <span className="text-xs text-[#41484B] leading-relaxed select-none">
              I agree to be contacted regarding this enquiry and have reviewed the{' '}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="text-[#A33E11] underline hover:text-[#85320D]"
              >
                privacy information
              </Link>
              . <span className="text-[#A33E11]">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1.5 text-xs text-red-600">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#A33E11] hover:bg-[#85320D] text-white py-4 px-8 text-xs uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <span>Request consultation</span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
