export interface InboundCollege {
  id: string;
  name: string;
  shortName: string;
  category: 'Science & Research' | 'Engineering & Technology' | 'Medicine & Clinical' | 'Management & Arts';
  city: string;
  state: string;
  region: 'North' | 'South' | 'West';
  nirfRank: string;
  qsRank: string;
  established: number;
  badge: string;
  image: string;
  description: string;
  popularTracks: string[];
  intakeSemesters: string;
  tuitionRange: string;
  teachingMedium: string;
  facilities: string[];
  address: string;
  coordinates: {
    lat: number;
    lng: number;
    // Normalized SVG coordinate percentages on our vector India map
    mapX: number; // 0 to 100%
    mapY: number; // 0 to 100%
  };
}

export const INBOUND_COLLEGES: InboundCollege[] = [
  {
    id: 'iisc-bengaluru',
    name: 'Indian Institute of Science (IISc)',
    shortName: 'IISc Bengaluru',
    category: 'Science & Research',
    city: 'Bengaluru',
    state: 'Karnataka',
    region: 'South',
    nirfRank: 'Rank #1 University & Research in India',
    qsRank: 'Top 225 QS World University Ranking',
    established: 1909,
    badge: 'Institute of Eminence (IoE)',
    image: '/images/inbound/iisc-bengaluru.jpg',
    description:
      'India’s foremost research university, world-renowned for advanced fundamental science, computational biology, aerospace engineering, materials research, and nanotechnology. Hosts visiting scholars, doctoral candidates, and international fellows with state-of-the-art supercomputing and lab infrastructure.',
    popularTracks: [
      'Master of Technology (Research)',
      'PhD Interdisciplinary Sciences',
      'Computational & Data Sciences',
      'Quantum Technology & Nano-Engineering',
      'Visiting Scholar Research Fellowships',
    ],
    intakeSemesters: 'August (Autumn) & January (Spring)',
    tuitionRange: '$2,500 – $4,500 per academic year (subsidized for international scholars)',
    teachingMedium: '100% English (All academic instruction, seminars, and dissertations)',
    facilities: [
      'On-Campus International Guest House & Hostels',
      'Supercomputer Education and Research Centre (SERC)',
      'Dedicated Office of International Relations (OIR)',
      'Campus Health Centre with 24/7 emergency response',
    ],
    address: 'CV Raman Rd, Bengaluru, Karnataka 560012, India',
    coordinates: {
      lat: 13.0219,
      lng: 77.5671,
      mapX: 41.5,
      mapY: 76.5,
    },
  },
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi (IITD)',
    shortName: 'IIT Delhi',
    category: 'Engineering & Technology',
    city: 'New Delhi',
    state: 'Delhi NCR',
    region: 'North',
    nirfRank: 'Rank #2 Engineering in India',
    qsRank: 'Rank #150 Worldwide (QS Engineering)',
    established: 1961,
    badge: 'Institute of Eminence (IoE)',
    image: '/images/inbound/iit-delhi.jpg',
    description:
      'A global powerhouse in computer science, artificial intelligence, robotics, and sustainable civil systems. IIT Delhi provides international degree students and exchange scholars access to deep-tech incubation centers and direct industry linkages in India’s capital.',
    popularTracks: [
      'B.Tech / Dual Degree Computer Science & AI',
      'M.Tech Renewable Energy & Robotics',
      'PhD Machine Learning & Nanotechnology',
      'Semester Study Abroad Exchange Programs',
    ],
    intakeSemesters: 'July / August (Autumn Semester)',
    tuitionRange: '$3,000 – $5,000 per year (ASEAN & SAARC fee concessions available)',
    teachingMedium: '100% English',
    facilities: [
      'International Students House & Scholar Suites',
      'AI & Robotics Incubation Hub',
      'Delhi Metro Station directly on campus border',
      'Comprehensive sports complex & Olympic swimming pool',
    ],
    address: 'Hauz Khas, New Delhi, Delhi 110016, India',
    coordinates: {
      lat: 28.545,
      lng: 77.1926,
      mapX: 38.5,
      mapY: 33.5,
    },
  },
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay (IITB)',
    shortName: 'IIT Bombay',
    category: 'Engineering & Technology',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    nirfRank: 'Rank #3 Engineering & Overall in India',
    qsRank: 'Rank #118 QS World University Rankings',
    established: 1958,
    badge: 'Institute of Eminence (IoE)',
    image: '/images/inbound/iit-bombay.jpg',
    description:
      'Situated beside Powai Lake in Mumbai, IIT Bombay combines academic rigor with high-impact research in aerospace, chemical engineering, data science, and biosciences. Renowned for its vibrant international student exchange and campus startup ecosystem.',
    popularTracks: [
      'M.Tech Computer Science & Data Engineering',
      'Dual Degree Aerospace & Mechanical Sciences',
      'PhD Environmental Science & Climate Change',
      'Global Visiting Internship Program',
    ],
    intakeSemesters: 'July (Autumn) & January (Spring)',
    tuitionRange: '$3,000 – $5,200 per year',
    teachingMedium: '100% English',
    facilities: [
      'Lakeside campus with international scholar hostels',
      'Society for Innovation and Entrepreneurship (SINE)',
      'Dean of International Relations Onboarding Desk',
      '24/7 on-campus hospital & multi-cuisine cafeterias',
    ],
    address: 'Powai, Mumbai, Maharashtra 400076, India',
    coordinates: {
      lat: 19.1334,
      lng: 72.9133,
      mapX: 25.5,
      mapY: 60.5,
    },
  },
  {
    id: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    shortName: 'AIIMS New Delhi',
    category: 'Medicine & Clinical',
    city: 'New Delhi',
    state: 'Delhi NCR',
    region: 'North',
    nirfRank: 'Rank #1 Medical Institution in India',
    qsRank: 'World Top 150 (QS Life Sciences & Medicine)',
    established: 1956,
    badge: 'Institute of National Importance (INI)',
    image: '/images/inbound/aiims-delhi.jpg',
    description:
      'South Asia’s premier medical institution, offering unparalleled clinical case volumes, surgical rotations, and clinical research fellowships for international medical students, elective interns, and postdoctoral clinicians.',
    popularTracks: [
      'International Clinical Electives (4 to 12 Weeks)',
      'Postgraduate Medical Fellowships (MD / MS)',
      'Clinical Epidemiology & Global Health PhD',
      'Surgical Skills & Laparoscopic Training',
    ],
    intakeSemesters: 'Rolling clinical electives (Monthly) & July degree intakes',
    tuitionRange: 'Highly subsidized / nominal bench fees for verified clinical electives',
    teachingMedium: '100% English',
    facilities: [
      'Asia’s largest clinical teaching hospital complex',
      'International Elective Office (Academic Section)',
      'Subsidized resident doctor quarters & mess',
      'Extensive digital biomedical research library',
    ],
    address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi 110029, India',
    coordinates: {
      lat: 28.5672,
      lng: 77.21,
      mapX: 39.0,
      mapY: 34.2,
    },
  },
  {
    id: 'jnu-delhi',
    name: 'Jawaharlal Nehru University (JNU)',
    shortName: 'JNU New Delhi',
    category: 'Management & Arts',
    city: 'New Delhi',
    state: 'Delhi NCR',
    region: 'North',
    nirfRank: 'Rank #2 University in India',
    qsRank: 'Top 100 Global (QS Development Studies)',
    established: 1969,
    badge: 'Central University of National Stature',
    image: '/images/inbound/jnu-delhi.jpg',
    description:
      'India’s pre-eminent centre for international relations, foreign languages, linguistics, political sciences, and economic development studies. Hosts hundreds of international scholars from over 50 countries in a sprawling 1,000-acre green campus.',
    popularTracks: [
      'MA International Relations & Area Studies',
      'M.Phil / PhD Development Economics',
      'Linguistics, Sanskrit & Indian Philosophy',
      'Indian Cultural Heritage & Social Systems (Study Abroad)',
    ],
    intakeSemesters: 'August (Monsoon Semester)',
    tuitionRange: '$1,200 – $2,500 per academic year',
    teachingMedium: '100% English',
    facilities: [
      'Dedicated International Students Office (ISO)',
      'Mahi-Mandavi International Scholars Residence',
      '24/7 central library with extensive Asian & European archives',
      'Vibrant multicultural campus life with foreign cultural centres',
    ],
    address: 'New Mehrauli Rd, JNU Ring Rd, New Delhi, Delhi 110067, India',
    coordinates: {
      lat: 28.5401,
      lng: 77.1664,
      mapX: 38.0,
      mapY: 34.0,
    },
  },
  {
    id: 'iim-ahmedabad',
    name: 'Indian Institute of Management Ahmedabad (IIMA)',
    shortName: 'IIM Ahmedabad',
    category: 'Management & Arts',
    city: 'Ahmedabad',
    state: 'Gujarat',
    region: 'West',
    nirfRank: 'Rank #1 Management in India',
    qsRank: 'Top 50 QS Global MBA Rankings',
    established: 1961,
    badge: 'Premier Business School',
    image: '/images/inbound/iim-ahmedabad.jpg',
    description:
      'Internationally acclaimed business school pioneering case-method management education in developing and emerging markets. Offers international dual degrees, global exchange terms, and executive research programs.',
    popularTracks: [
      'Post Graduate Programme in Management (MBA Equivalent)',
      'International Term Exchange Programme (ITEP)',
      'PhD in Business Analytics & Public Systems',
      'Faculty & Visiting Research Fellowships',
    ],
    intakeSemesters: 'June / July (Term 1) & October (Term 2 Exchange)',
    tuitionRange: '$8,000 – $14,000 per year (Exchange terms waiver through reciprocal MoUs)',
    teachingMedium: '100% English',
    facilities: [
      'Iconic Louis Kahn red-brick heritage campus',
      'Air-conditioned single occupancy international dorms',
      'Vikram Sarabhai Management Library',
      'Executive dining and international student liaison unit',
    ],
    address: 'Vastrapur, Ahmedabad, Gujarat 380015, India',
    coordinates: {
      lat: 23.033,
      lng: 72.53,
      mapX: 23.5,
      mapY: 48.5,
    },
  },
  {
    id: 'mahe-manipal',
    name: 'Manipal Academy of Higher Education (MAHE)',
    shortName: 'MAHE Manipal',
    category: 'Medicine & Clinical',
    city: 'Manipal',
    state: 'Karnataka',
    region: 'South',
    nirfRank: 'Rank #6 Overall University in India',
    qsRank: 'Top 800 QS World Rankings',
    established: 1953,
    badge: 'Institute of Eminence (IoE)',
    image: '/images/inbound/mahe-manipal.jpg',
    description:
      'India’s most international university town, welcoming students from more than 60 countries. Renowned for Kasturba Medical College (KMC), dental sciences, pharmaceutical research, biomedical engineering, and media studies in a lush coastal setting.',
    popularTracks: [
      'MBBS / BDS International Student Enrolment',
      'M.Sc Biomedical Sciences & Pharmacology',
      'Global Health Elective Rotations',
      'B.Tech / M.Tech Biomedical & Computer Engineering',
    ],
    intakeSemesters: 'August (Annual Intake)',
    tuitionRange: '$6,000 – $18,000 per year (Special international NRI/foreign citizen quotas)',
    teachingMedium: '100% English',
    facilities: [
      'Integrated university town with 3,000+ international students',
      'World-class Marena indoor sports & fitness arena',
      'Full FRRO and Visa clearance concierge on campus',
      'Single-occupancy AC hostels with global food courts',
    ],
    address: 'Madhav Nagar, Manipal, Udupi, Karnataka 576104, India',
    coordinates: {
      lat: 13.3525,
      lng: 74.7928,
      mapX: 38.5,
      mapY: 74.0,
    },
  },
  {
    id: 'bhu-varanasi',
    name: 'Banaras Hindu University (BHU)',
    shortName: 'BHU Varanasi',
    category: 'Science & Research',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    region: 'North',
    nirfRank: 'Rank #5 University in India',
    qsRank: 'World Top 600 QS Rankings',
    established: 1916,
    badge: 'Institute of Eminence (IoE)',
    image: '/images/inbound/bhu-varanasi.jpg',
    description:
      'One of Asia’s largest residential universities spanning 1,300 acres along the Ganges. Renowned worldwide for Indian classical studies, Sanskrit, Ayurveda, agricultural biotechnology, and physics research under its dedicated International Centre.',
    popularTracks: [
      'Ayurveda & Traditional Integrative Medicine (MD/PhD)',
      'Sanskrit, Indology & Comparative Philosophy',
      'Agricultural Sciences & Biotechnology',
      'Semester Study of Indian Arts, Music & Heritage',
    ],
    intakeSemesters: 'August (Autumn Semester)',
    tuitionRange: '$1,500 – $3,200 per year',
    teachingMedium: '100% English (Sanskrit/Hindi language modules optional)',
    facilities: [
      'International Centre with dedicated foreign scholars hostel',
      'Sir Sunderlal 1,500-bed modern teaching hospital',
      'Sayaji Rao Gaekwad Central Library',
      'Peaceful heritage campus with botanical gardens',
    ],
    address: 'Ajagara, Varanasi, Uttar Pradesh 221005, India',
    coordinates: {
      lat: 25.2677,
      lng: 82.9913,
      mapX: 58.5,
      mapY: 41.5,
    },
  },
];
