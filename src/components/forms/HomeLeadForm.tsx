'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';

interface HomeLeadFormProps {
  className?: string;
  source?: string;
}

export function HomeLeadForm({ className = '', source = 'home_hero' }: HomeLeadFormProps) {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [routeType, setRouteType] = useState<'study' | 'work'>('study');
  const [consent, setConsent] = useState(true);
  const [faxNumber, setFaxNumber] = useState(''); // honeypot
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobile.trim()) {
      setErrorMessage('Please enter your name and phone number.');
      return;
    }

    if (!consent) {
      setErrorMessage('Please agree to the contact terms to proceed.');
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
          interests: [routeType === 'study' ? 'Study Abroad' : 'Work Abroad'],
          source,
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
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please call or WhatsApp us directly.';
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-[0_16px_32px_rgba(0,34,43,0.06)] ${className}`}>
        <div className="w-10 h-10 rounded-full bg-[#EBF5EE] text-[#1E5631] flex items-center justify-center mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-2">Enquiry Received</h3>
        <p className="text-sm text-[#41484B] leading-relaxed mb-6">
          {siteContent.disclaimers.confirmation}
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFullName('');
            setMobile('');
          }}
          className="text-xs uppercase tracking-wider font-semibold text-[#A33E11] hover:underline"
        >
          Submit another enquiry →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-[0_16px_32px_rgba(0,34,43,0.06)] flex flex-col gap-4 text-left ${className}`}
    >
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A33E11]">Direct Consultation</span>
        <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#1B1C1A]">Start with a conversation.</h3>
      </div>

      {/* Honeypot field for bot prevention */}
      <input
        type="text"
        name="faxNumber"
        value={faxNumber}
        onChange={(e) => setFaxNumber(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Route Selector (Study vs Work) */}
      <div>
        <label className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-2">
          I am looking for
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setRouteType('study')}
            className={`py-2 px-3 text-xs font-semibold border transition-colors ${
              routeType === 'study'
                ? 'bg-[#00222B] text-white border-[#00222B]'
                : 'bg-white text-[#41484B] border-[#E6DDCC] hover:border-[#1B1C1A]'
            }`}
          >
            Study Abroad
          </button>
          <button
            type="button"
            onClick={() => setRouteType('work')}
            className={`py-2 px-3 text-xs font-semibold border transition-colors ${
              routeType === 'work'
                ? 'bg-[#00222B] text-white border-[#00222B]'
                : 'bg-white text-[#41484B] border-[#E6DDCC] hover:border-[#1B1C1A]'
            }`}
          >
            Work Abroad
          </button>
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="home-lead-name" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
          Full Name <span className="text-[#A33E11]">*</span>
        </label>
        <input
          id="home-lead-name"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="e.g. Rahul Sharma"
          className="w-full px-3 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
        />
      </div>

      {/* Phone / WhatsApp */}
      <div>
        <label htmlFor="home-lead-mobile" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
          WhatsApp / Phone Number <span className="text-[#A33E11]">*</span>
        </label>
        <input
          id="home-lead-mobile"
          type="tel"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="e.g. +91 98765 43210"
          className="w-full px-3 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
        />
      </div>

      {/* Privacy Consent */}
      <div className="flex items-start gap-2 pt-1">
        <input
          id="home-lead-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#A33E11] h-4 w-4 rounded"
        />
        <label htmlFor="home-lead-consent" className="text-[11px] text-[#41484B] leading-tight cursor-pointer">
          {siteContent.disclaimers.privacy}
        </label>
      </div>

      {errorMessage && (
        <div className="text-xs text-red-600 bg-red-50 p-2 border border-red-200">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full mt-2 py-3 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === 'loading' ? 'Submitting...' : 'Request a Consultation'}
      </button>
    </form>
  );
}
