/**
 * Inbound Universities Dataset
 * Dedicated data file for /inbound sliders.
 * Format: { name, location, type, description, url, image?: optional }
 */

export interface InboundUniversity {
  name: string;
  location: string;
  type: string;
  description: string;
  url: string;
  image?: string;
  initials?: string;
}

export const GUJARAT_UNIVERSITIES: InboundUniversity[] = [
  {
    name: 'Parul University',
    location: 'Vadodara',
    type: 'Private university',
    description:
      'A multidisciplinary university with an established international student community, offering programmes across engineering, healthcare, management, technology, design and other fields.',
    url: 'https://www.paruluniversity.ac.in/international-admissions/',
    initials: 'PU',
  },
  {
    name: 'Marwadi University',
    location: 'Rajkot',
    type: 'Private university',
    description:
      'An internationally active university with students from numerous countries. Explore engineering, management, computer applications, sciences and other academic pathways, alongside campus accommodation and arrival support.',
    url: 'https://www.marwadiuniversity.ac.in/international-admissions/',
    initials: 'MU',
  },
  {
    name: 'RK University',
    location: 'Rajkot',
    type: 'Private university',
    description:
      'A multidisciplinary campus with a dedicated international admissions route and a university-reported international student community. Explore programmes in engineering, management, pharmacy, sciences and related fields.',
    url: 'https://international.rku.ac.in/',
    initials: 'RKU',
  },
  {
    name: 'Ganpat University',
    location: 'Mehsana',
    type: 'Private university',
    description:
      'A multidisciplinary university offering technology, management, pharmacy and other professional programmes, with international institutional engagement. Confirm current programme-specific foreign-student eligibility before applying.',
    url: 'https://ganpatuniversity.edu.in/',
    initials: 'GUNI',
  },
  {
    name: 'Indus University',
    location: 'Ahmedabad',
    type: 'Private university',
    description:
      'Offers a dedicated international admissions process with options spanning engineering, computing, aviation, design and management. Check programme-specific requirements and available international seats.',
    url: 'https://international.indusuni.ac.in/',
    initials: 'IU',
  },
  {
    name: 'Silver Oak University',
    location: 'Ahmedabad',
    type: 'Private university',
    description:
      'Provides an international admissions pathway and guidance on documentation and student requirements, with multidisciplinary programmes to explore.',
    url: 'https://silveroakuni.ac.in/international-admission',
    initials: 'SOU',
  },
  {
    name: 'Karnavati University',
    location: 'Gandhinagar',
    type: 'Private university',
    description:
      'Explore design, law, management and other programmes in a specialised academic environment. International student eligibility and course availability should be confirmed directly.',
    url: 'https://karnavatiuniversity.edu.in/',
    initials: 'KU',
  },
  {
    name: 'Nirma University',
    location: 'Ahmedabad',
    type: 'Private university',
    description:
      'An established university with published international admissions categories and programmes spanning engineering, management, law, pharmacy and other disciplines.',
    url: 'https://internationalrelations.nirmauni.ac.in/admissions/',
    initials: 'NU',
  },
  {
    name: 'Pandit Deendayal Energy University (PDEU)',
    location: 'Gandhinagar',
    type: 'Private university',
    description:
      'Explore programmes in engineering, energy, technology, management and liberal studies. Confirm international admission eligibility through the university’s official channels.',
    url: 'https://pdeu.ac.in/',
    initials: 'PDEU',
  },
  {
    name: 'CHARUSAT',
    location: 'Changa, Anand district',
    type: 'Private university',
    description:
      'Offers education in engineering, pharmacy, applied sciences, healthcare, management and related fields, with international academic engagement.',
    url: 'https://www.charusat.ac.in/',
    initials: 'CHARU',
  },
  {
    name: 'Ahmedabad University',
    location: 'Ahmedabad',
    type: 'Private university',
    description:
      'A multidisciplinary and research-oriented institution offering selected pathways for international applicants. Explore programme requirements and its admissions process.',
    url: 'https://ahduni.edu.in/',
    initials: 'AU',
  },
  {
    name: 'GLS University',
    location: 'Ahmedabad',
    type: 'Private university',
    description:
      'Explore management, commerce, IT, design and other professional programmes; confirm current international admissions availability and eligibility directly.',
    url: 'https://www.glsuniversity.ac.in/',
    initials: 'GLS',
  },
];

export const OTHER_UNIVERSITIES: InboundUniversity[] = [
  {
    name: 'Sharda University',
    location: 'Greater Noida, Uttar Pradesh',
    type: 'Private university',
    description:
      'An internationally oriented multidisciplinary campus offering pathways in engineering, management, allied sciences and more.',
    url: 'https://www.sharda.ac.in/International/',
    initials: 'SU',
  },
  {
    name: 'Manipal Academy of Higher Education (MAHE)',
    location: 'Manipal, Karnataka',
    type: 'Deemed-to-be university',
    description:
      'An established international admissions route with academic options spanning healthcare, engineering, management and more.',
    url: 'https://www.manipal.edu/admission/international-admissions',
    initials: 'MAHE',
  },
  {
    name: 'Chandigarh University',
    location: 'Mohali, Punjab',
    type: 'Private university',
    description:
      'Offers broad academic programmes and international admissions services; verify current eligibility and student intake by course.',
    url: 'https://www.cuchd.in/',
    initials: 'CU',
  },
  {
    name: 'Symbiosis International (Deemed University)',
    location: 'Pune, Maharashtra',
    type: 'Deemed-to-be university',
    description:
      'International-oriented programmes across management, law, media, liberal arts and professional disciplines.',
    url: 'https://www.siu.edu.in/',
    initials: 'SIU',
  },
  {
    name: 'Amity University',
    location: 'Noida, Uttar Pradesh',
    type: 'Private university',
    description:
      'Offers multidisciplinary programmes and an international admission framework; select the relevant campus and confirm programme terms.',
    url: 'https://www.amityuniversity.edu/',
    initials: 'AMITY',
  },
  {
    name: 'SRM Institute of Science and Technology',
    location: 'Chengalpattu, Tamil Nadu',
    type: 'Deemed-to-be university',
    description:
      'Wide-ranging technology, science, management and other programmes, with a dedicated international admissions system.',
    url: 'https://www.srmist.edu.in/',
    initials: 'SRM',
  },
  {
    name: 'KIIT Deemed to be University',
    location: 'Bhubaneswar, Odisha',
    type: 'Deemed-to-be university',
    description:
      'A multidisciplinary institution with international student admissions across multiple programmes.',
    url: 'https://kiit.ac.in/',
    initials: 'KIIT',
  },
];
