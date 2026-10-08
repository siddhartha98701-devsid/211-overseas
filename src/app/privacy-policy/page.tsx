import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';
import { siteContent } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How 211 OVERSEAS collects, uses, protects, and handles your personal data in accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act.',
};

export default function PrivacyPolicyPage() {
  const { brand } = siteContent;
  return (
    <LegalPage
      title="Privacy Policy"
      label="Privacy policy"
      updated="October 2026"
      intro={
        <>
          Welcome to 211 OVERSEAS ({brand.domain}). We are committed to protecting your privacy and ensuring that
          your personal data is handled securely and transparently. This Privacy Policy explains our practices
          regarding the collection, use, disclosure, storage, and protection of personal data gathered via our
          website and advisory services.
        </>
      }
      sections={[
        {
          heading: 'Information We Collect',
          body: (
            <>
              <p>To deliver overseas education and career consultancy services, we may collect the following categories of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-black font-medium">Personal Identifiers:</strong> Full name, email address, mobile number, WhatsApp contact details, city, and residential address.
                </li>
                <li>
                  <strong className="text-black font-medium">Academic &amp; Professional Background:</strong> High school / undergraduate / postgraduate transcripts, degrees, diplomas, resume / CV, language test scores (IELTS, TOEFL, Duolingo, TOPIK), and statements of purpose.
                </li>
                <li>
                  <strong className="text-black font-medium">Immigration &amp; Verification Details:</strong> Passport information, visa history, and financial support records strictly required by university admissions boards and visa issuing authorities.
                </li>
                <li>
                  <strong className="text-black font-medium">Technical &amp; Usage Information:</strong> IP address, device type, browser settings, operating system, and pages visited to help us optimize your browsing experience.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: 'How We Use Your Information',
          body: (
            <>
              <p>We process your personal information only for legitimate, transparent purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Evaluating your academic profile, budget, and destination preferences for tailored program recommendations.</li>
                <li>Preparing and submitting admission applications to recognized institutions (e.g., South Korean universities).</li>
                <li>Guiding you through scholarship applications (including GKS and institutional merit awards).</li>
                <li>Assisting with visa filing documentation, appointment scheduling, and pre-departure preparation.</li>
                <li>Communicating critical application deadlines, admission outcomes, and scheduling consultation sessions.</li>
                <li>Complying with statutory reporting requirements under applicable Indian laws and international regulations.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Data Sharing and Third-Party Disclosures',
          body: (
            <>
              <p>
                We do not sell, rent, or trade your personal data. We only disclose information to authorized third parties strictly necessary to fulfill your study or work abroad process:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Admissions boards, international student offices, and academic departments of shortlisted universities.</li>
                <li>Immigration authorities, consulates, and embassies responsible for processing student or employment visas.</li>
                <li>Accredited document verification bodies and credential evaluation partners where mandated.</li>
                <li>Secure technical service providers (such as hosting, email delivery, and CRM software) operating under strict data confidentiality agreements.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Cookies and Tracking Technologies',
          body: (
            <>
              <p>
                Our website utilizes cookies and similar tracking technologies to enhance user experience, remember session preferences (such as lead popup dismissals), and analyze site traffic:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-black font-medium">Essential &amp; Session Cookies:</strong> Necessary for core site functionality, including form navigation and interaction state.
                </li>
                <li>
                  <strong className="text-black font-medium">Preference Cookies:</strong> Used to record whether you have interacted with dialogs or informational modals during your session.
                </li>
                <li>
                  <strong className="text-black font-medium">Analytics Cookies:</strong> Help us understand aggregate page engagement and improve site responsiveness.
                </li>
              </ul>
              <p>You can manage or disable cookie preferences directly in your browser settings at any time.</p>
            </>
          ),
        },
        {
          heading: 'Data Security & Storage',
          body: (
            <>
              <p>
                We employ industry-standard technical and organizational security protocols to safeguard your personal data against unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All website communications are encrypted in transit via SSL/TLS (HTTPS).</li>
                <li>Access to candidate documents and dossiers is restricted to authorized advisors on a need-to-know basis.</li>
                <li>Records are retained only for as long as necessary to complete your counseling, application, and visa lifecycle, or to meet statutory audit requirements.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'User Rights & Consent Revocation',
          body: (
            <>
              <p>
                Under the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-black font-medium">Right to Access:</strong> You may request a summary of the personal data we hold about you.</li>
                <li><strong className="text-black font-medium">Right to Rectification:</strong> You may request corrections to any inaccurate or incomplete details.</li>
                <li><strong className="text-black font-medium">Right to Erasure:</strong> You may request deletion of your records where there is no statutory obligation to retain them.</li>
                <li><strong className="text-black font-medium">Right to Withdraw Consent:</strong> You may revoke your consent for promotional communications or ongoing processing at any time by contacting our data protection team.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Contact Details for Privacy Queries',
          body: (
            <>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or how your personal information is managed, please contact our team:
              </p>
              <div className="bg-[#FAF8F5] border border-[#E6DDCC] p-4 space-y-1 text-sm">
                <p><strong className="text-black font-medium">Entity:</strong> 211 OVERSEAS</p>
                <p><strong className="text-black font-medium">Address:</strong> {brand.address}</p>
                <p>
                  <strong className="text-black font-medium">Email:</strong>{' '}
                  <a href={`mailto:${brand.emails.general.address}`} className="text-[#94682B] underline hover:text-[#7A5622]">
                    {brand.emails.general.address}
                  </a>{' '}
                  / {' '}
                  <a href={`mailto:${brand.emails.admin}`} className="text-[#94682B] underline hover:text-[#7A5622]">
                    {brand.emails.admin}
                  </a>
                </p>
                <p>
                  <strong className="text-black font-medium">Phone / WhatsApp:</strong>{' '}
                  <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="text-[#94682B] underline hover:text-[#7A5622]">
                    {brand.phone}
                  </a>
                </p>
              </div>
            </>
          ),
        },
      ]}
      footer={
        <p className="text-xs text-[#57514A]">
          This Privacy Policy is effective as of October 2026 and governs all interactions with 211 OVERSEAS. We reserve the right to update this policy periodically to reflect evolving legal standards.
        </p>
      }
    />
  );
}
