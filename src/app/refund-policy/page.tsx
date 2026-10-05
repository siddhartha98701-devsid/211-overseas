import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'Refund and cancellation terms for 211 OVERSEAS consultation, application and visa fees.',
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      label="Refund and cancellation policy"
      updated="5 October 2026"
      sections={[
        {
          heading: 'Consultation Fees',
          body: (
            <p>
              Initial registration and standard consultation fees paid to 211 OVERSEAS for advisory services are
              strictly non-refundable, as they cover the time, resources, and expertise provided by our counselors.
            </p>
          ),
        },
        {
          heading: 'Application & Visa Fees',
          body: (
            <p>
              Any fees paid directly to third parties, including university application fees, courier charges, and
              government visa application fees, are subject to the refund policies of those specific institutions or
              government bodies. 211 OVERSEAS cannot process or guarantee refunds for payments made to third parties.
            </p>
          ),
        },
        {
          heading: 'Service Cancellation',
          body: (
            <p>
              You reserve the right to discontinue our services at any time. However, any payments already made for
              services rendered up to the point of cancellation will not be refunded.
            </p>
          ),
        },
      ]}
    />
  );
}
