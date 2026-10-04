import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | 211 Overseas',
  description: 'Privacy Policy for 211 Overseas.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-36 border-b border-[#DDD7CC]" aria-label="Privacy policy">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#15140F] tracking-tight leading-[1.1] mb-10">
          Privacy policy
        </h1>
        <div className="text-[#6C675E] leading-relaxed space-y-6 text-sm sm:text-base font-light">
          <p>
            This Privacy Policy outlines how 211 Overseas collects, uses, and protects your personal
            information when you use our website and consultation services.
          </p>
          <div className="border-t border-[#DDD7CC] pt-6">
            <h2 className="font-serif text-2xl font-light text-[#15140F] mb-3">
              Information we collect
            </h2>
            <p>
              We collect personal details such as your full name, email address, mobile number, educational
              qualifications, age, city, and destination preferences when you submit an enquiry form or
              contact us directly.
            </p>
          </div>
          <div className="border-t border-[#DDD7CC] pt-6">
            <h2 className="font-serif text-2xl font-light text-[#15140F] mb-3">
              How we use your information
            </h2>
            <p>
              Your information is exclusively used to provide educational and overseas career counselling,
              evaluate profile eligibility, and coordinate university or recruitment processes. We never sell
              or rent your information to third-party marketing companies.
            </p>
          </div>
          <div className="border-t border-[#DDD7CC] pt-6">
            <h2 className="font-serif text-2xl font-light text-[#15140F] mb-3">
              Data security
            </h2>
            <p>
              We implement industry-standard safeguards to secure your personal data against unauthorized
              access, alteration, or disclosure.
            </p>
          </div>
          <div className="border-t border-[#DDD7CC] pt-6">
            <h2 className="font-serif text-2xl font-light text-[#15140F] mb-3">
              Contact regarding privacy
            </h2>
            <p>
              For any questions regarding your data privacy, reach out to our team at +91 99985 85211 or visit
              our office in Ahmedabad, Gujarat, India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
