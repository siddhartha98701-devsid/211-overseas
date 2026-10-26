'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';

interface DestinationLeadFormProps {
  destination: string;
  className?: string;
}

export function DestinationLeadForm({ destination, className = '' }: DestinationLeadFormProps) {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [course, setCourse] = useState('');
  const [qualification, setQualification] = useState('');
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
          destination,
          interests: [`Study in ${destination}`],
          source: `destination_${destination.toLowerCase().replace(/\s+/g, '_')}`,
          course,
          qualification,
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
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please reach out via WhatsApp.';
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
            setCourse('');
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
      id="destination-lead-form"
      onSubmit={handleSubmit}
      className={`bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-[0_16px_32px_rgba(0,34,43,0.06)] flex flex-col gap-4 text-left scroll-mt-28 ${className}`}
    >
      <div>
        <div className="inline-block px-2.5 py-1 bg-[#F3EBDD] text-[#A33E11] text-[11px] font-semibold uppercase tracking-wider mb-2">
          Destination: {destination}
        </div>
        <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#1B1C1A]">
          Request {destination} Guidance
        </h3>
        <p className="text-xs text-[#41484B] mt-1">
          Share your academic plans for a tailored course and university assessment.
        </p>
      </div>

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

      {/* Full Name */}
      <div>
        <label htmlFor="dest-lead-name" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
          Full Name <span className="text-[#A33E11]">*</span>
        </label>
        <input
          id="dest-lead-name"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="e.g. Ananya Patel"
          className="w-full px-3 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
        />
      </div>

      {/* Phone / WhatsApp */}
      <div>
        <label htmlFor="dest-lead-mobile" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
          WhatsApp / Mobile <span className="text-[#A33E11]">*</span>
        </label>
        <input
          id="dest-lead-mobile"
          type="tel"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="e.g. +91 98765 43210"
          className="w-full px-3 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
        />
      </div>

      {/* Course / Field */}
      <div>
        <label htmlFor="dest-lead-course" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
          Intended Field or Course
        </label>
        <input
          id="dest-lead-course"
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="e.g. Computer Science, MBA, Biotechnology"
          className="w-full px-3 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
        />
      </div>

      {/* Highest Qualification */}
      <div>
        <label htmlFor="dest-lead-qual" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
          Highest Completed Qualification
        </label>
        <select
          id="dest-lead-qual"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className="w-full px-3 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
        >
          <option value="">Select qualification</option>
          <option value="12th / High School">12th Standard / High School</option>
          <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
          <option value="Master's Degree">Master&apos;s Degree</option>
          <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Privacy Consent */}
      <div className="flex items-start gap-2 pt-1">
        <input
          id="dest-lead-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#A33E11] h-4 w-4 rounded"
        />
        <label htmlFor="dest-lead-consent" className="text-[11px] text-[#41484B] leading-tight cursor-pointer">
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
        {status === 'loading' ? 'Submitting...' : `Request Guidance for ${destination}`}
      </button>
    </form>
  );
}
