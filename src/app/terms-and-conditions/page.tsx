import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';
import { siteContent } from '@/content/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using the 211 OVERSEAS study abroad website and consultancy services.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      label="Terms and conditions"
      updated="5 October 2026"
      intro={
        <>
          By accessing {siteContent.brand.domain} and utilizing the services of 211 OVERSEAS, you agree to comply with
          and be bound by the following Terms and Conditions.
        </>
      }
      sections={[
        {
          heading: 'Scope of Services',
          body: (
            <p>
              211 OVERSEAS provides study abroad consultancy, which includes university selection, application
              processing, interview preparation, and visa guidance. We act as an advisory bridge between the student and
              the educational institution.
            </p>
          ),
        },
        {
          heading: 'Student Responsibilities & Document Authenticity',
          body: (
            <p>
              You agree to provide 100% accurate, genuine, and unaltered documents for your applications. 211 OVERSEAS is
              not responsible for application rejections, visa denials, or legal consequences resulting from fraudulent,
              forged, or misrepresented documentation provided by the applicant.
            </p>
          ),
        },
        {
          heading: 'Third-Party Decisions',
          body: (
            <p>
              211 OVERSEAS acts solely as a consultant. Final decisions regarding university admissions, scholarship
              awards, and visa issuances rest entirely with the respective university admissions boards and government
              embassies. We have no authority to alter or influence these independent decisions.
            </p>
          ),
        },
        {
          heading: 'Limitation of Liability',
          body: (
            <p>
              While we strive to provide the most accurate and up-to-date guidance, 211 OVERSEAS shall not be held
              liable for any direct, indirect, or consequential loss or damage arising from changes in university
              policies, immigration laws, or delayed processing times.
            </p>
          ),
        },
      ]}
    />
  );
}
