'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { CheckCircle2, AlertCircle, Loader2, Building2, Send } from 'lucide-react';

export const COLLABORATION_MODES = [
  'Dual Degrees & Credit Articulation (2+2, 3+1, 1+1)',
  'Reciprocal Student Exchange & Summer Immersions',
  'Faculty Mobility & Sabbatical Hosting',
  'Joint Research, Laboratories & Co-Publications',
  'Institutional Delegation & Bilateral MOU',
  'Executive Education & India Immersion Program',
  'Other Academic Linkage',
] as const;

interface CollaborationFormData {
  institutionName: string;
  country: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  website: string;
  collaborationType: string;
  message: string;
  consent: boolean;
  faxNumber?: string;
}

export function InboundCollaborationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CollaborationFormData>({
    defaultValues: {
      institutionName: '',
      country: '',
      contactName: '',
      designation: '',
      email: '',
      phone: '',
      website: '',
      collaborationType: COLLABORATION_MODES[0],
      message: '',
      consent: false,
      faxNumber: '',
    },
  });

  const onSubmit = async (data: CollaborationFormData) => {
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
          fullName: data.contactName.trim(),
          email: data.email.trim(),
          countryOfResidence: data.country.trim(),
          enquiryType: 'Institutional collaboration',
          institutionName: data.institutionName.trim(),
          designation: data.designation.trim(),
          mobile: data.phone.trim(),
          website: data.website.trim(),
          collaborationType: data.collaborationType,
          courseOrMessage: `[Institution: ${data.institutionName.trim()} | Role: ${data.designation.trim()} | Focus: ${data.collaborationType}] ${data.message.trim()}`,
          consent: data.consent,
          faxNumber: data.faxNumber || '',
          source: 'inbound-institutional-collaboration',
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
      <div className="bg-white border-2 border-[#A33E11]/30 p-8 md:p-12 shadow-sm text-center">
        <div className="w-16 h-16 bg-[#F3EBDD] text-[#A33E11] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1C1A] mb-3">
          Partnership Proposal Received
        </h3>
        <p className="text-sm sm:text-base text-[#41484B] max-w-lg mx-auto leading-relaxed mb-6">
          Thank you for reaching out to 211 Overseas Inbound Institutional Desk. Our Academic Linkages Director will review your institution&apos;s profile and connect with your office within 24–48 business hours to arrange an exploratory briefing.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold uppercase tracking-widest text-[#A33E11] hover:underline cursor-pointer"
        >
          Submit another proposal
        </button>
      </div>
    );
  }

  return (
    <form
      id="collab-form"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-[#E6DDCC] p-7 md:p-10 shadow-sm scroll-mt-28"
      noValidate
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="collab-faxNumber">Do not fill this field</label>
        <input
          id="collab-faxNumber"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('faxNumber')}
        />
      </div>

      <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#E6DDCC]">
        <Building2 size={20} className="text-[#A33E11]" />
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1C1A]">
          Institutional Collaboration Desk
        </h3>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
          <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
          <span className="leading-relaxed">{errorMessage}</span>
        </div>
      )}

      <div className="space-y-5">
        {/* Row 1: Institution Name & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="collab-institutionName" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
              Institution / University Name <span className="text-[#A33E11]">*</span>
            </label>
            <input
              id="collab-institutionName"
              type="text"
              placeholder="e.g. Kyoto University / Technische Universität Berlin"
              className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
              {...register('institutionName', {
                required: 'Please provide your institution name',
                minLength: { value: 2, message: 'Institution name must be at least 2 characters' },
              })}
            />
            {errors.institutionName && (
              <p className="mt-1 text-xs text-red-600">{errors.institutionName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="collab-country" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
              Country &amp; City <span className="text-[#A33E11]">*</span>
            </label>
            <input
              id="collab-country"
              type="text"
              placeholder="e.g. Germany, Berlin or Japan, Tokyo"
              className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
              {...register('country', {
                required: 'Please provide institution country and city',
                minLength: { value: 2, message: 'Country must be at least 2 characters' },
              })}
            />
            {errors.country && (
              <p className="mt-1 text-xs text-red-600">{errors.country.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Contact Person Name & Academic Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="collab-contactName" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
              Contact Person Full Name <span className="text-[#A33E11]">*</span>
            </label>
            <input
              id="collab-contactName"
              type="text"
              placeholder="e.g. Dr. Jane Smith"
              className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
              {...register('contactName', {
                required: 'Please enter contact person name',
                minLength: { value: 2, message: 'Name must be at least 2 characters' },
              })}
            />
            {errors.contactName && (
              <p className="mt-1 text-xs text-red-600">{errors.contactName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="collab-designation" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
              Designation / Title <span className="text-[#A33E11]">*</span>
            </label>
            <input
              id="collab-designation"
              type="text"
              placeholder="e.g. Dean of International Relations / Vice Chancellor"
              className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
              {...register('designation', {
                required: 'Please specify your title/designation',
              })}
            />
            {errors.designation && (
              <p className="mt-1 text-xs text-red-600">{errors.designation.message}</p>
            )}
          </div>
        </div>

        {/* Row 3: Official Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="collab-email" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
              Official Institutional Email <span className="text-[#A33E11]">*</span>
            </label>
            <input
              id="collab-email"
              type="email"
              placeholder="e.g. global@university.edu"
              className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
              {...register('email', {
                required: 'Please provide an institutional email',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please provide a valid email address',
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="collab-phone" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
              Official Phone / WhatsApp <span className="text-[#A33E11]">*</span>
            </label>
            <input
              id="collab-phone"
              type="tel"
              placeholder="e.g. +49 30 12345678"
              className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
              {...register('phone', {
                required: 'Please provide a contact phone number',
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Row 4: Website URL & Collaboration Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="collab-website" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
              Institutional Website URL
            </label>
            <input
              id="collab-website"
              type="url"
              placeholder="https://www.university.edu"
              className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors"
              {...register('website')}
            />
          </div>

          <div>
            <label htmlFor="collab-type" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
              Primary Collaboration Mode <span className="text-[#A33E11]">*</span>
            </label>
            <div className="relative">
              <select
                id="collab-type"
                className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors appearance-none cursor-pointer"
                {...register('collaborationType', {
                  required: 'Please select a primary collaboration mode',
                })}
              >
                {COLLABORATION_MODES.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#41484B]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Proposed Scope or Message */}
        <div>
          <label htmlFor="collab-message" className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-1.5">
            Proposed Scope / Objectives / Target Indian Institutions
          </label>
          <textarea
            id="collab-message"
            rows={4}
            placeholder="Share key details regarding your desired academic partner tier, disciplines, student quotas, or timeline for bilateral agreement..."
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] placeholder-[#41484B]/50 focus:border-[#A33E11] focus:bg-white focus:outline-none transition-colors resize-y"
            {...register('message', {
              maxLength: { value: 1500, message: 'Message cannot exceed 1500 characters' },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded-none border border-[#E6DDCC] text-[#A33E11] focus:ring-[#A33E11] focus:ring-offset-0 cursor-pointer accent-[#A33E11]"
              {...register('consent', {
                required: 'Please confirm authorization to submit on behalf of the institution',
              })}
            />
            <span className="text-xs text-[#41484B] leading-relaxed select-none">
              I confirm I am an authorized representative of the named institution and agree to be contacted by 211 Overseas regarding institutional collaborations under the{' '}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="text-[#A33E11] underline hover:text-[#85320D]"
              >
                privacy policy
              </Link>
              . <span className="text-[#A33E11]">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1.5 text-xs text-red-600">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#A33E11] hover:bg-[#85320D] text-white py-4 px-8 text-xs uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Transmitting Proposal...</span>
              </>
            ) : (
              <>
                <Send size={15} />
                <span>Submit Institutional Proposal</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
