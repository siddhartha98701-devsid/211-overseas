import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';
import { siteContent } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How 211 OVERSEAS study abroad collects, uses and protects your personal data, in line with the Information Technology Act, 2000 and the DPDP Act.',
};

export default function PrivacyPolicyPage() {
  const { brand } = siteContent;
  return (
    <LegalPage
      title="Privacy Policy"
      label="Privacy policy"
      updated="5 October 2026"
      intro={
        <>
          Welcome to 211 OVERSEAS ({brand.domain}). We are committed to protecting your privacy and ensuring that
          your personal data is handled securely. This Privacy Policy outlines how we collect, use, and protect
          your information when you use our website and consultancy services.
        </>
      }
      sections={[
        {
          heading: 'Information We Collect',
          body: (
            <>
              <p>To provide you with expert study abroad guidance, we may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal Identification Information: Name, email address, phone number, and residential address.</li>
                <li>
                  Academic &amp; Professional Records: Educational transcripts, language test scores (e.g., IELTS,
                  Duolingo), resumes, and letters of recommendation.
                </li>
                <li>
                  Immigration &amp; Financial Data: Passport details and financial statements strictly required for
                  university admissions and visa applications.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: 'How We Use Your Information',
          body: (
            <>
              <p>Your data is exclusively used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Assess your eligibility for undergraduate and graduate programs.</li>
                <li>Process and submit your applications to our partner institutions (e.g., universities in South Korea).</li>
                <li>Assist with your student visa application process.</li>
                <li>
                  Communicate with you regarding application statuses, deadlines, and promotional study abroad
                  opportunities.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Data Sharing and Third-Party Disclosure',
          body: (
            <>
              <p>
                We do not sell your data. Your information is only shared with authorized third parties necessary for
                your study abroad process, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Admissions departments of your chosen universities.</li>
                <li>Relevant immigration authorities and embassies for visa processing.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Your Consent',
          body: (
            <p>
              By submitting an inquiry or application form on our website, you explicitly consent to 211 OVERSEAS
              contacting you via phone, email, or WhatsApp regarding your study abroad journey.
            </p>
          ),
        },
      ]}
      footer={
        <p>
          <strong className="text-black font-medium">Contact Us:</strong> For any data privacy inquiries, please visit
          us at {brand.address}, or call {brand.phone}.
        </p>
      }
    />
  );
}
