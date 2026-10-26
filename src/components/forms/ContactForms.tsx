'use client';

import { useState, useEffect } from 'react';
import { siteContent } from '@/content/site';
import { InboundCollaborationForm } from '@/components/inbound/InboundCollaborationForm';

interface ContactFormsProps {
  initialTab?: 'study' | 'work' | 'collaboration';
}

export function ContactForms({ initialTab = 'study' }: ContactFormsProps) {
  const [activeTab, setActiveTab] = useState<'study' | 'work' | 'collaboration'>(() => {
    if (typeof window !== 'undefined') {
      const h = window.location.hash;
      const s = window.location.search;
      if (h === '#work-enquiry' || s.includes('intent=work')) return 'work';
      if (h === '#collaboration-enquiry' || s.includes('intent=collaboration')) return 'collaboration';
      if (h === '#study-enquiry' || s.includes('intent=study')) return 'study';
    }
    return initialTab;
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const search = window.location.search;
      if (hash === '#work-enquiry' || search.includes('intent=work')) {
        setActiveTab('work');
      } else if (hash === '#study-enquiry' || search.includes('intent=study')) {
        setActiveTab('study');
      } else if (hash === '#collaboration-enquiry' || search.includes('intent=collaboration')) {
        setActiveTab('collaboration');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="w-full">
      {/* Tab Switcher */}
      <div className="flex flex-wrap border-b border-[#E6DDCC] mb-8 gap-2 sm:gap-0">
        <button
          type="button"
          id="study-enquiry"
          onClick={() => setActiveTab('study')}
          className={`pb-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer relative ${
            activeTab === 'study'
              ? 'text-[#A33E11] border-b-2 border-[#A33E11] -mb-[1px]'
              : 'text-[#41484B] hover:text-[#1B1C1A]'
          }`}
        >
          Study Enquiry
        </button>
        <button
          type="button"
          id="work-enquiry"
          onClick={() => setActiveTab('work')}
          className={`pb-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer relative ${
            activeTab === 'work'
              ? 'text-[#A33E11] border-b-2 border-[#A33E11] -mb-[1px]'
              : 'text-[#41484B] hover:text-[#1B1C1A]'
          }`}
        >
          Work Enquiry
        </button>
        <button
          type="button"
          id="collaboration-enquiry"
          onClick={() => setActiveTab('collaboration')}
          className={`pb-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer relative ${
            activeTab === 'collaboration'
              ? 'text-[#A33E11] border-b-2 border-[#A33E11] -mb-[1px]'
              : 'text-[#41484B] hover:text-[#1B1C1A]'
          }`}
        >
          College Collaborations
        </button>
      </div>

      {/* Render Active Form */}
      {activeTab === 'study' ? (
        <StudyEnquiryForm />
      ) : activeTab === 'work' ? (
        <WorkEnquiryForm />
      ) : (
        <div className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-xs">
          <div className="mb-6 pb-4 border-b border-[#E6DDCC]">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-1">
              Institutional Partnership Enquiry
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1C1A]">
              Connect for University Collaborations &amp; MOUs
            </h3>
            <p className="text-xs sm:text-sm text-[#41484B] mt-1.5 leading-relaxed">
              For domestic and foreign colleges, university leadership, deans, and faculty seeking bilateral agreements, dual degrees, and academic linkages.
            </p>
          </div>
          <InboundCollaborationForm />
        </div>
      )}
    </div>
  );
}

function StudyEnquiryForm() {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [course, setCourse] = useState('');
  const [destination, setDestination] = useState('');
  const [intake, setIntake] = useState('');
  const [budget, setBudget] = useState('');
  const [consent, setConsent] = useState(true);
  const [faxNumber, setFaxNumber] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobile.trim()) {
      setErrorMessage('Please enter your full name and WhatsApp / mobile number.');
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
          email,
          qualification,
          course,
          destination: destination || 'Not decided',
          intake,
          budget,
          interests: ['Study Abroad Consultation'],
          source: 'contact_page_study',
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
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please connect with us directly.';
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-[#E6DDCC] p-8 shadow-[0_16px_32px_rgba(0,34,43,0.06)]">
        <div className="w-12 h-12 rounded-full bg-[#EBF5EE] text-[#1E5631] flex items-center justify-center mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-2">Study Consultation Requested</h3>
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
          Submit another request →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E6DDCC] p-6 lg:p-8 space-y-5">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="study-name" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Your Full Name <span className="text-[#A33E11]">*</span>
          </label>
          <input
            id="study-name"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Priyanshu Mehta"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          />
        </div>

        <div>
          <label htmlFor="study-mobile" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            WhatsApp / Mobile <span className="text-[#A33E11]">*</span>
          </label>
          <input
            id="study-mobile"
            type="tel"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="e.g. +91 99985 85211"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="study-email" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            id="study-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. priyanshu@example.com"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          />
        </div>

        <div>
          <label htmlFor="study-qualification" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Highest Completed Qualification
          </label>
          <select
            id="study-qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          >
            <option value="">Select qualification</option>
            <option value="12th / High School">12th Standard / High School</option>
            <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
            <option value="Master's Degree">Master&apos;s Degree</option>
            <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="study-course" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            What would you like to study?
          </label>
          <input
            id="study-course"
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="e.g. Computer Science, AI, Business Administration"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          />
        </div>

        <div>
          <label htmlFor="study-destination" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Preferred Destinations
          </label>
          <select
            id="study-destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          >
            <option value="">Select or choose Not decided</option>
            <option value="Not decided">Not decided / Open to advice</option>
            <option value="South Korea">South Korea</option>
            <option value="Singapore">Singapore</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Japan">Japan</option>
            <option value="Taiwan">Taiwan</option>
            <option value="UAE">UAE</option>
            <option value="Europe">Europe (Germany, France, Ireland, etc.)</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="study-intake" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Preferred Start Date
          </label>
          <select
            id="study-intake"
            value={intake}
            onChange={(e) => setIntake(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          >
            <option value="">Select intake preference</option>
            <option value="Spring / Early 2027">Spring / Early 2027</option>
            <option value="Fall / Autumn 2027">Fall / Autumn 2027</option>
            <option value="2028 or later">2028 or later</option>
            <option value="Flexible">Flexible / Earliest available</option>
          </select>
        </div>

        <div>
          <label htmlFor="study-budget" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Approximate Annual Study Budget
          </label>
          <select
            id="study-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          >
            <option value="">Select annual budget range</option>
            <option value="Under ₹8 Lakhs">Under ₹8 Lakhs / year</option>
            <option value="₹8–15 Lakhs">₹8–15 Lakhs / year</option>
            <option value="₹15–25 Lakhs">₹15–25 Lakhs / year</option>
            <option value="₹25 Lakhs+">₹25 Lakhs+ / year</option>
            <option value="Seeking full scholarship">Seeking full scholarship support</option>
          </select>
        </div>
      </div>

      <div className="flex items-start gap-2 pt-2">
        <input
          id="study-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#A33E11] h-4 w-4 rounded"
        />
        <label htmlFor="study-consent" className="text-xs text-[#41484B] leading-tight cursor-pointer">
          {siteContent.disclaimers.privacy}
        </label>
      </div>

      {errorMessage && (
        <div className="text-xs text-red-600 bg-red-50 p-2.5 border border-red-200">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto px-8 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === 'loading' ? 'Submitting...' : 'Request a Study Consultation'}
      </button>
    </form>
  );
}

function WorkEnquiryForm() {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [profession, setProfession] = useState('');
  const [experience, setExperience] = useState('');
  const [preferredCountry, setPreferredCountry] = useState('Flexible');
  const [qualification, setQualification] = useState('');
  const [cvInfo, setCvInfo] = useState('');
  const [consent, setConsent] = useState(true);
  const [faxNumber, setFaxNumber] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobile.trim()) {
      setErrorMessage('Please enter your full name and WhatsApp / mobile number.');
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
          profession,
          experience,
          preferredCountry,
          qualification,
          cvInfo,
          interests: [`Work Abroad: ${preferredCountry}`],
          source: 'contact_page_work',
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
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please connect with us directly.';
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-[#E6DDCC] p-8 shadow-[0_16px_32px_rgba(0,34,43,0.06)]">
        <div className="w-12 h-12 rounded-full bg-[#EBF5EE] text-[#1E5631] flex items-center justify-center mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-2">Work Profile Received</h3>
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
          Submit another profile →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E6DDCC] p-6 lg:p-8 space-y-5">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="work-name" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Full Name <span className="text-[#A33E11]">*</span>
          </label>
          <input
            id="work-name"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Vikram Joshi"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          />
        </div>

        <div>
          <label htmlFor="work-mobile" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            WhatsApp / Mobile <span className="text-[#A33E11]">*</span>
          </label>
          <input
            id="work-mobile"
            type="tel"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="e.g. +91 99985 85211"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="work-profession" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Current Role / Profession
          </label>
          <input
            id="work-profession"
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            placeholder="e.g. Mechanical Engineer, Hospitality Supervisor"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          />
        </div>

        <div>
          <label htmlFor="work-experience" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Years of Relevant Experience
          </label>
          <select
            id="work-experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          >
            <option value="">Select experience</option>
            <option value="Fresh Graduate / Entry Level">Fresh Graduate / Entry Level</option>
            <option value="1–3 years">1–3 years</option>
            <option value="3–5 years">3–5 years</option>
            <option value="5–10 years">5–10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="work-country" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Preferred Country
          </label>
          <select
            id="work-country"
            value={preferredCountry}
            onChange={(e) => setPreferredCountry(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          >
            <option value="Flexible">Flexible / Based on role</option>
            <option value="UAE">UAE (Dubai, Abu Dhabi)</option>
            <option value="Greece">Greece (Seasonal Hospitality)</option>
          </select>
        </div>

        <div>
          <label htmlFor="work-qualification" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
            Highest Qualification
          </label>
          <input
            id="work-qualification"
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            placeholder="e.g. B.Tech Mechanical, Diploma in Hotel Mgmt"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="work-cv" className="block text-xs font-semibold text-[#1B1C1A] uppercase tracking-wider mb-1">
          CV / Profile Details or Portfolio Link
        </label>
        <textarea
          id="work-cv"
          rows={3}
          value={cvInfo}
          onChange={(e) => setCvInfo(e.target.value)}
          placeholder="Paste LinkedIn profile link, Google Drive CV link, or brief summary of career background."
          className="w-full px-3.5 py-2.5 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
        />
        <p className="text-[11px] text-[#41484B] mt-1">
          Note: You may also send your CV directly via WhatsApp to +91 99985 85211.
        </p>
      </div>

      <div className="flex items-start gap-2 pt-2">
        <input
          id="work-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#A33E11] h-4 w-4 rounded"
        />
        <label htmlFor="work-consent" className="text-xs text-[#41484B] leading-tight cursor-pointer">
          {siteContent.disclaimers.privacy}
        </label>
      </div>

      {errorMessage && (
        <div className="text-xs text-red-600 bg-red-50 p-2.5 border border-red-200">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto px-8 py-3.5 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit My Work Profile'}
      </button>
    </form>
  );
}
