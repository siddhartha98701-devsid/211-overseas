'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, AlertCircle, ArrowRight } from 'lucide-react';
import { siteContent } from '@/content/site';

const enquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  mobile: z.string().min(10, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email address'),
  age: z.string().optional(),
  city: z.string().optional(),
  qualification: z.string().optional(),
  occupation: z.string().optional(),
  interests: z.array(z.string()).optional(),
  destination: z.string().optional(),
  courseOrCareer: z.string().optional(),
  budget: z.string().optional(),
  intakeTimeline: z.string().optional(),
  // Mandatory opt-in required by the brand & legal guidelines (IT Act 2000 / DPDP Act)
  consent: z.boolean().refine((v) => v === true, 'Please tick the consent box to submit your profile'),
  // Honeypot field for anti-spam bots
  faxNumber: z.string().max(0, 'Spam detected').optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

const QUALIFICATION_OPTIONS = [
  '10th / SSC',
  '12th / HSC',
  'Diploma',
  "Bachelor's Degree",
  "Master's Degree",
  'Professional Qualification (Nursing/Physiotherapy/etc.)',
  'Other',
];

const DESTINATION_OPTIONS = [
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
  'Not Sure – Need Advice',
];

interface EnquiryFormProps {
  defaultInterest?: string;
}

function FormContent({ defaultInterest }: EnquiryFormProps) {
  const searchParams = useSearchParams();
  const paramInterest = searchParams.get('interest');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      mobile: '',
      email: '',
      age: '',
      city: '',
      qualification: '',
      occupation: '',
      interests: defaultInterest ? [defaultInterest] : [],
      destination: '',
      courseOrCareer: '',
      budget: '',
      intakeTimeline: '',
      consent: false,
      faxNumber: '',
    },
  });

  const selectedInterests = watch('interests') || [];

  // Update selected interests if query param is passed
  useEffect(() => {
    const interestToSet = paramInterest || defaultInterest;
    if (interestToSet && !selectedInterests.includes(interestToSet)) {
      setValue('interests', [...selectedInterests, interestToSet]);
    }
  }, [paramInterest, defaultInterest, setValue]);

  const toggleInterest = (interest: string) => {
    const current = [...selectedInterests];
    const index = current.indexOf(interest);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(interest);
    }
    setValue('interests', current, { shouldValidate: true });
  };

  const onSubmit = async (data: EnquiryFormData) => {
    // Honeypot check
    if (data.faxNumber && data.faxNumber.length > 0) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Failed to submit profile.');
      }

      setSubmitSuccess(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="enquiry-form" className="relative scroll-mt-28">
      {/* Editorial Form Container */}
      <div className="bg-[#FFFFFF] border border-[#E5E5E5] p-8 sm:p-12 md:p-16">
        <div className="mb-10 max-w-xl">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#000000] tracking-tight">
            Submit your profile
          </h3>
          <p className="text-sm text-[#4A4A4A] mt-3 leading-relaxed">
            Fill in your details below. We review every profile carefully before recommending
            universities or career pathways.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-8 p-4 border border-red-300 bg-red-50 text-red-800 text-sm flex items-center gap-3">
            <AlertCircle size={18} className="flex-shrink-0" />
            <p>{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Honeypot field (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="faxNumber">Do not fill this</label>
            <input
              id="faxNumber"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('faxNumber')}
            />
          </div>

          {/* Primary Personal Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 text-sm bg-white border text-[#000000] placeholder-[#4A4A4A]/60 focus:outline-none focus:border-[#E59217] transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-[#E5E5E5]'
                }`}
                {...register('fullName')}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                Mobile Number *
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 text-sm bg-white border text-[#000000] placeholder-[#4A4A4A]/60 focus:outline-none focus:border-[#E59217] transition-colors ${
                  errors.mobile ? 'border-red-500' : 'border-[#E5E5E5]'
                }`}
                {...register('mobile')}
              />
              {errors.mobile && (
                <p className="text-xs text-red-600 mt-1">{errors.mobile.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={`w-full px-4 py-3 text-sm bg-white border text-[#000000] placeholder-[#4A4A4A]/60 focus:outline-none focus:border-[#E59217] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#E5E5E5]'
                }`}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Age */}
            <div>
              <label
                htmlFor="age"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                Age
              </label>
              <input
                id="age"
                type="number"
                min="15"
                max="65"
                placeholder="e.g. 24"
                className="w-full px-4 py-3 text-sm bg-white border border-[#E5E5E5] text-[#000000] placeholder-[#4A4A4A]/60 focus:outline-none focus:border-[#E59217] transition-colors"
                {...register('age')}
              />
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="Ahmedabad, Gujarat"
                className="w-full px-4 py-3 text-sm bg-white border border-[#E5E5E5] text-[#000000] placeholder-[#4A4A4A]/60 focus:outline-none focus:border-[#E59217] transition-colors"
                {...register('city')}
              />
            </div>

            {/* Highest Qualification */}
            <div>
              <label
                htmlFor="qualification"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                Highest Qualification
              </label>
              <select
                id="qualification"
                className="w-full px-4 py-3 text-sm bg-white border border-[#E5E5E5] text-[#000000] focus:outline-none focus:border-[#E59217] transition-colors"
                {...register('qualification')}
              >
                <option value="">Select qualification...</option>
                {QUALIFICATION_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Current Occupation */}
            <div>
              <label
                htmlFor="occupation"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                Current Occupation
              </label>
              <input
                id="occupation"
                type="text"
                placeholder="Student, Staff Nurse, Engineer..."
                className="w-full px-4 py-3 text-sm bg-white border border-[#E5E5E5] text-[#000000] placeholder-[#4A4A4A]/60 focus:outline-none focus:border-[#E59217] transition-colors"
                {...register('occupation')}
              />
            </div>

            {/* Preferred Destination */}
            <div>
              <label
                htmlFor="destination"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                Preferred Destination
              </label>
              <select
                id="destination"
                className="w-full px-4 py-3 text-sm bg-white border border-[#E5E5E5] text-[#000000] focus:outline-none focus:border-[#E59217] transition-colors"
                {...register('destination')}
              >
                <option value="">Select destination...</option>
                {DESTINATION_OPTIONS.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Course / Career */}
            <div>
              <label
                htmlFor="courseOrCareer"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                Preferred Course / Career
              </label>
              <input
                id="courseOrCareer"
                type="text"
                placeholder="Computer Science, Nursing, Hospitality..."
                className="w-full px-4 py-3 text-sm bg-white border border-[#E5E5E5] text-[#000000] placeholder-[#4A4A4A]/60 focus:outline-none focus:border-[#E59217] transition-colors"
                {...register('courseOrCareer')}
              />
            </div>

            {/* Approximate Budget */}
            <div>
              <label
                htmlFor="budget"
                className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
              >
                Approximate Budget
              </label>
              <input
                id="budget"
                type="text"
                placeholder="e.g. 10–15 Lakhs, Self-funded, Scholarship"
                className="w-full px-4 py-3 text-sm bg-white border border-[#E5E5E5] text-[#000000] placeholder-[#4A4A4A]/60 focus:outline-none focus:border-[#E59217] transition-colors"
                {...register('budget')}
              />
            </div>
          </div>

          {/* Preferred Intake / Timeline */}
          <div>
            <label
              htmlFor="intakeTimeline"
              className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-2"
            >
              Preferred Intake / Timeline
            </label>
            <input
              id="intakeTimeline"
              type="text"
              placeholder="e.g. Autumn 2026, Spring 2027, Immediate"
              className="w-full px-4 py-3 text-sm bg-white border border-[#E5E5E5] text-[#000000] placeholder-[#4A4A4A]/60 focus:outline-none focus:border-[#E59217] transition-colors"
              {...register('intakeTimeline')}
            />
          </div>

          {/* Minimal Checkbox Options for "I Am Interested In" */}
          <div className="pt-4 border-t border-[#E5E5E5]">
            <label className="block text-xs uppercase tracking-wider text-[#000000] font-medium mb-3">
              I am interested in (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {siteContent.form.interests.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`flex items-center justify-between p-3 border text-left text-sm transition-colors ${
                      isSelected
                        ? 'border-[#E59217] bg-[#E59217]/5 text-[#000000] font-medium'
                        : 'border-[#E5E5E5] bg-white text-[#4A4A4A] hover:border-[#000000]'
                    }`}
                  >
                    <span className="pr-2 text-xs uppercase tracking-wide">{interest}</span>
                    <span
                      className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-[#E59217] bg-[#E59217] text-black'
                          : 'border-[#E5E5E5] bg-white'
                      }`}
                    >
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mandatory consent */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer filter-checkbox"
                aria-invalid={errors.consent ? 'true' : 'false'}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
                {...register('consent')}
              />
              <span className="text-sm text-[#4A4A4A] leading-relaxed group-hover:text-black transition-colors">
                I consent to 211 OVERSEAS contacting me regarding study abroad programs via phone/WhatsApp/Email.
              </span>
            </label>
            {errors.consent && (
              <p id="consent-error" role="alert" className="mt-2 text-xs text-red-600">
                {errors.consent.message}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E59217] hover:bg-[#F2A23A] disabled:opacity-60 text-black text-xs uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2 cursor-pointer font-medium"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting Profile...
                </>
              ) : (
                <>
                  Submit My Profile
                  <ArrowRight size={16} />
                </>
              )}
            </button>
            <p className="text-center text-xs text-[#4A4A4A] mt-3">
              Your data is handled as described in our{' '}
              <Link href="/privacy-policy" className="underline decoration-[#E59217] underline-offset-2 hover:text-black">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      {submitSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-[#FFFFFF] border border-[#E5E5E5] p-8 sm:p-10 max-w-md w-full text-center">
            <div className="w-12 h-12 bg-[#E59217] text-black flex items-center justify-center mx-auto mb-4">
              <Check size={24} strokeWidth={2} />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#000000] mb-2">
              Profile received
            </h4>
            <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">
              Thank you for sharing your details with 211 OVERSEAS. A dedicated counsellor will review
              your profile and reach out shortly via phone or WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => setSubmitSuccess(false)}
              className="w-full bg-[#000000] hover:bg-[#E59217] hover:text-black text-white text-xs uppercase tracking-widest py-3 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function EnquiryForm(props: EnquiryFormProps) {
  return (
    <Suspense
      fallback={
        <div className="bg-[#FFFFFF] border border-[#E5E5E5] p-10 min-h-[400px] animate-pulse" />
      }
    >
      <FormContent {...props} />
    </Suspense>
  );
}
