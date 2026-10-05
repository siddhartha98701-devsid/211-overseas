import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimers about admissions, visas and third-party trademarks on the 211 OVERSEAS website.',
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Legal Disclaimer"
      label="Legal disclaimer"
      updated="5 October 2026"
      sections={[
        {
          heading: 'No Guarantee of Admission or Visa',
          body: (
            <p>
              211 OVERSEAS provides professional guidance to maximize your chances of success. However, we do not and
              cannot guarantee university admission, scholarship grants, or visa approvals. Final decisions rest solely
              with the respective universities and embassies.
            </p>
          ),
        },
        {
          heading: 'Intellectual Property & Trademarks',
          body: (
            <p>
              All university names, logos, emblems, and ranking metrics (such as QS World University Rankings) featured
              on this website or in our marketing materials are the exclusive intellectual property of their respective
              institutions. 211 OVERSEAS claims no ownership over these trademarks. They are used on this platform
              strictly for informational and representative purposes to highlight our partner networks and program
              offerings.
            </p>
          ),
        },
      ]}
    />
  );
}
