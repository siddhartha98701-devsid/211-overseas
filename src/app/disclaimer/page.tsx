import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Legal Disclaimer | 211 OVERSEAS',
  description: 'Important legal disclaimers regarding admissions, job placements, visas, third-party trademarks, and regulatory compliance on 211 OVERSEAS.',
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Legal Disclaimer"
      label="Legal disclaimer"
      updated="October 2026"
      sections={[
        {
          heading: 'Independent Advisory Role',
          body: (
            <p>
              211 OVERSEAS is an independent international education and career guidance consulting firm headquartered in Ahmedabad, Gujarat. We are not an embassy, consulate, or official government immigration authority. We do not issue visas, permits, or formal clearances. Our services are strictly advisory and consultative: assisting candidates with profile matching, application structuring, language training advice, credential equivalence, documentation compliance, and pre-departure briefings.
            </p>
          ),
        },
        {
          heading: 'No Guarantee of Admission, Scholarships, Employment or Visas',
          body: (
            <p>
              211 OVERSEAS provides comprehensive guidance to present each candidate’s profile in the most professional manner. However, we do not and cannot guarantee university admission, scholarship awards, job offers, or visa approvals. Final admissions and scholarship decisions rest exclusively with the admissions committees of the respective universities. Employment selections and salaries are determined solely by participating international employers. All visa and immigration clearances are determined entirely by the respective sovereign governments and their diplomatic consular missions.
            </p>
          ),
        },
        {
          heading: 'Intellectual Property, Institutional Names & Trademarks',
          body: (
            <p>
              All university names, institutional logos, trademarks, emblems, and ranking metrics (including QS World University Rankings, Times Higher Education, and government designations) displayed or mentioned on this website and in our advisory materials are the exclusive intellectual property of their respective institutions and governing bodies. 211 OVERSEAS claims no ownership over these trademarks. They are referenced strictly for factual, representative, and informational purposes. Their inclusion does not imply direct partnership, sponsorship, or institutional endorsement unless expressly confirmed in writing.
            </p>
          ),
        },
        {
          heading: 'Indicative Information & Regulatory Changes',
          body: (
            <p>
              Course curricula, tuition fee structures, living expense estimates, language score thresholds (IELTS/Duolingo/TOPIK/Goethe), minimum qualifying salaries, and immigration regulations are established by third-party universities, employers, and government departments. These requirements change periodically. While 211 OVERSEAS makes every reasonable effort to ensure the accuracy and currency of information presented on this website, all details remain indicative and must be re-verified with an assigned counsellor at the time of formal application.
            </p>
          ),
        },
      ]}
    />
  );
}
