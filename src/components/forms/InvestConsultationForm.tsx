'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { investContent } from '@/content/invest';

interface InvestConsultationFormProps {
  className?: string;
}

export function InvestConsultationForm({ className = '' }: InvestConsultationFormProps) {
  const { consultation } = investContent;

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [currentCitizenship, setCurrentCitizenship] = useState('Indian');
  const [countryOfResidence, setCountryOfResidence] = useState('India');
  const [areaOfInterest, setAreaOfInterest] = useState<string>(consultation.areasOfInterest[0]);
  const [preferredDestination, setPreferredDestination] = useState<string>(consultation.destinations[0]);
  const [primaryInterest, setPrimaryInterest] = useState<string>(consultation.primaryInterests[0]);
  const [contactMethod, setContactMethod] = useState<'Phone' | 'WhatsApp' | 'Email'>('WhatsApp');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false); // unticked by default as per compliance directive
  const [faxNumber, setFaxNumber] = useState(''); // honeypot
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !mobile.trim()) {
      setErrorMessage('Please enter your name and contact phone number.');
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!consent) {
      setErrorMessage('Please confirm your consent to be contacted.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          mobile,
          email,
          interests: [areaOfInterest],
          destination: preferredDestination,
          source: 'invest_private_consultation',
          currentCitizenship,
          countryOfResidence,
          primaryInterest,
          contactMethod,
          message: message.trim(),
          consent: true,
          faxNumber,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Submission failed. Please try again.');
      }

      setStatus('success');
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please connect with us directly on WhatsApp or phone.';
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-white border border-[#E6DDCC] p-8 md:p-12 shadow-[0_16px_32px_rgba(0,34,43,0.06)] ${className}`}>
        <div className="w-12 h-12 rounded-full bg-[#EBF5EE] text-[#1E5631] flex items-center justify-center mb-5">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-3">
          Private Consultation Request Received
        </h3>
        <p className="text-sm md:text-base text-[#41484B] leading-relaxed mb-6">
          Thank you, <span className="font-semibold text-[#1B1C1A]">{fullName}</span>. Your enquiry regarding{' '}
          <span className="font-semibold text-[#1B1C1A]">{preferredDestination}</span> has been logged securely. Our
          Senior Private Client Advisory team will contact you confidentially via your preferred method ({contactMethod}).
        </p>
        <div className="pt-4 border-t border-[#E6DDCC] flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#A33E11]">
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setMessage('');
              setConsent(false);
            }}
            className="hover:underline"
          >
            Submit Another Request →
          </button>
          <span className="text-[#E6DDCC]">·</span>
          <a
            href={siteContent.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Immediate WhatsApp Consultation →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border border-[#E6DDCC] p-6 sm:p-8 md:p-10 shadow-[0_16px_36px_rgba(0,34,43,0.08)] ${className}`}
    >
      <div className="mb-8">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#A33E11] block mb-2">
          Private Client Assessment
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1C1A] leading-tight">
          Request a Confidential Consultation
        </h3>
        <p className="text-xs sm:text-sm text-[#41484B] mt-2">
          Initial evaluations are conducted with complete confidentiality by qualified advisory directors.
        </p>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="invest_fax">Do not fill</label>
        <input
          id="invest_fax"
          type="text"
          name="faxNumber"
          tabIndex={-1}
          autoComplete="off"
          value={faxNumber}
          onChange={(e) => setFaxNumber(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
            Full Name <span className="text-[#A33E11]">*</span>
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Vikramaditya Mehta"
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
            Mobile / WhatsApp <span className="text-[#A33E11]">*</span>
          </label>
          <input
            type="tel"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="+91 98250 00000"
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] focus:bg-white transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
            Email Address <span className="text-[#A33E11]">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@domain.com"
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
            Current Citizenship
          </label>
          <input
            type="text"
            value={currentCitizenship}
            onChange={(e) => setCurrentCitizenship(e.target.value)}
            placeholder="Indian"
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
            Country of Residence
          </label>
          <input
            type="text"
            value={countryOfResidence}
            onChange={(e) => setCountryOfResidence(e.target.value)}
            placeholder="India / UAE"
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] focus:bg-white transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
            Area of Interest
          </label>
          <select
            value={areaOfInterest}
            onChange={(e) => setAreaOfInterest(e.target.value)}
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] focus:bg-white transition-colors"
          >
            {consultation.areasOfInterest.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
            Preferred Destination
          </label>
          <select
            value={preferredDestination}
            onChange={(e) => setPreferredDestination(e.target.value)}
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] focus:bg-white transition-colors"
          >
            {consultation.destinations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
            Primary Objective
          </label>
          <select
            value={primaryInterest}
            onChange={(e) => setPrimaryInterest(e.target.value)}
            className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] focus:bg-white transition-colors"
          >
            {consultation.primaryInterests.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          {consultation.contactMethods.map((method) => {
            const isSelected = contactMethod === method;
            return (
              <button
                type="button"
                key={method}
                onClick={() => setContactMethod(method as 'Phone' | 'WhatsApp' | 'Email')}
                className={`py-2.5 px-3 border text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                  isSelected
                    ? 'border-[#A33E11] bg-[#A33E11] text-white'
                    : 'border-[#E6DDCC] bg-[#FBF8F1] text-[#41484B] hover:border-[#A33E11]'
                }`}
              >
                {method}
              </button>
            );
          })}
        </div>
      </div>

      {/* Optional Message */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1C1A] mb-2">
          Specific Ambitions or Family Objectives (Optional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Feel free to outline your timeline, target destinations, or family requirements..."
          className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E6DDCC] text-sm text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] focus:bg-white transition-colors"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-[#E6DDCC] text-[#A33E11] focus:ring-[#A33E11]"
          />
          <span className="text-xs text-[#41484B] leading-relaxed">
            I agree to be contacted regarding my enquiry and understand that my information will be processed
            strictly in accordance with the{' '}
            <Link href="/privacy-policy" className="text-[#A33E11] underline">
              Privacy Policy
            </Link>
            . No financial or bank documents are requested at this exploratory stage.
          </span>
        </label>
      </div>

      {errorMessage && (
        <div className="p-3 mb-6 bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Submitting Confidential Assessment...' : 'Explore My Global Options'}
      </button>

      <div className="mt-4 text-center">
        <span className="text-[11px] text-[#41484B]">
          Direct Line: <strong className="text-[#1B1C1A]">{consultation.directPhone}</strong> · Mon–Sat 10 AM–7 PM IST
        </span>
      </div>
    </form>
  );
}
