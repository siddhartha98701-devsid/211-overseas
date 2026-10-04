import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | 211 Overseas',
  description: 'Terms and Conditions for 211 Overseas.',
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-36 border-b border-[#DDD7CC]" aria-label="Terms and conditions">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#15140F] tracking-tight leading-[1.1] mb-10">
          Terms &amp; conditions
        </h1>
        <div className="text-[#6C675E] leading-relaxed space-y-6 text-sm sm:text-base font-light">
          <p>
            These Terms and Conditions govern your use of the 211 Overseas website, consultations, and
            related guidance services.
          </p>
          <div className="border-t border-[#DDD7CC] pt-6">
            <h2 className="font-serif text-2xl font-light text-[#15140F] mb-3">
              Consultancy services
            </h2>
            <p>
              211 Overseas provides education and career advisory services. We assist with course identification,
              documentation guidance, and visa application procedures, but we do not guarantee admissions,
              scholarships, employment offers, or visa outcomes.
            </p>
          </div>
          <div className="border-t border-[#DDD7CC] pt-6">
            <h2 className="font-serif text-2xl font-light text-[#15140F] mb-3">
              Independent advisory disclaimer
            </h2>
            <p>
              211 Overseas is an independent consultancy. Universities, institutions, and governmental bodies
              referenced on this website are provided strictly for informational purposes. Reference to them does
              not imply affiliation, endorsement, or formal partnership unless explicitly specified.
            </p>
          </div>
          <div className="border-t border-[#DDD7CC] pt-6">
            <h2 className="font-serif text-2xl font-light text-[#15140F] mb-3">
              Limitation of liability
            </h2>
            <p>
              Final decisions regarding admissions, scholarships, work permits, and visas remain under the sole
              discretion of the respective university admission committees, employer organizations, and consular
              authorities.
            </p>
          </div>
          <div className="border-t border-[#DDD7CC] pt-6">
            <h2 className="font-serif text-2xl font-light text-[#15140F] mb-3">
              Contact
            </h2>
            <p>
              For legal or terms inquiries, contact our Ahmedabad office at +91 99985 85211 or via postal mail in
              Ahmedabad, Gujarat, India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
