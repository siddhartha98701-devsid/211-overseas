/**
 * 211 OVERSEAS — Study in South Korea Content (Page 03 - Featured)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const southKoreaContent = {
  meta: {
    title: 'Study in South Korea | Universities, Fees, Scholarships',
    description:
      'South Korea offers pathways in technology, engineering, business, science and the creative industries. Compare universities, entry requirements, living costs and scholarships.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / SOUTH KOREA',
    h1: 'Study in South Korea',
    subtitle: 'Your global education journey starts here.',
    paragraph:
      'Explore internationally recognised universities, innovative learning environments, Korean-language programmes and exciting opportunities to experience life in South Korea. From technology and engineering to business, life sciences and creative industries, South Korea offers a range of study pathways for students with different academic interests and career ambitions.',
    primaryButton: 'Discover Universities in South Korea',
    secondaryButton: 'Find My South Korea Study Route',
    facts: [
      { label: 'Study Options', value: "Bachelor's, Master's & Korean-Language Programmes" },
      { label: 'Language Choices', value: 'Korean-taught & English-taught Options' },
      { label: 'Popular Intakes', value: 'March & September Intakes' },
      { label: 'Scholarship Opportunities', value: 'Up to 100% Tuition Coverage for Eligible Students' },
    ],
  },

  scholarships: {
    headline: 'Scholarships & Funding Opportunities in South Korea',
    items: [
      'Global Korea Scholarship (GKS): Prestigious government scholarship providing full tuition coverage, living allowance, airfare and language training for eligible international students.',
      'University Tuition Scholarships: Leading national and private universities offer merit awards covering 30% to 100% of tuition fees based on academic and language achievements.',
      'Graduate Research Assistantships: STEM Master’s and PhD students may receive tuition waivers and research stipends directly through participating university laboratory grants.',
      'Important Note: A 100% tuition scholarship does not automatically cover housing, insurance or living expenses, which students should plan separately.',
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'AI, computer science, data analytics and information systems',
      'Electrical, mechanical, materials and semiconductor engineering',
      'Business, international trade, economics and management',
      'Biotechnology, life sciences, public health and research',
      'Communication, design, fashion and cultural studies',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'Seoul National University',
      'KAIST',
      'Yonsei University',
      'Korea University',
      'Hanyang University',
      'Sungkyunkwan University',
      'POSTECH',
      'Pusan National University',
      'Kyung Hee University',
      'Sejong University',
      'Ewha Womans University',
      'Kyungpook National University',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  chooseYourRoute: {
    headline: 'Choose your route',
    routes: [
      {
        title: 'Korean-language study',
        description:
          'University-affiliated language courses often run in multiple terms. A language program is not automatic admission to a later degree.',
      },
      {
        title: 'Bachelor’s',
        description:
          'Commonly a multi-year course. Check subject prerequisites, language scores, school equivalence and program-specific entry criteria.',
      },
      {
        title: 'Master’s / Postgraduate',
        description:
          'Assess subject fit, research interests, supervisor or lab requirements and the funding structure before applying.',
      },
      {
        title: 'English-taught options',
        description:
          'Available in selected courses. Verify the actual language of instruction at the program level, not the university level.',
      },
    ],
  },

  cities: {
    headline: 'Which Korean city fits you?',
    locations: [
      {
        location: 'Seoul',
        consideration: 'Large university choice and amenities; housing can be more expensive.',
      },
      {
        location: 'Daejeon',
        consideration: 'Research and engineering ecosystem; compare campus and laboratory options.',
      },
      {
        location: 'Busan',
        consideration: 'Major coastal city with several universities and different living environment.',
      },
      {
        location: 'Other regional cities',
        consideration: 'Often worth evaluating for tuition, accommodation and campus focus.',
      },
    ],
  },

  documents: {
    headline: 'Documents commonly requested',
    description:
      'Academic transcripts and certificates; passport; language-test evidence where required; study plan/personal statement; recommendations; financial documents and authenticated records as requested by the institution.',
    items: [
      {
        title: 'Academic Transcripts & Certificates',
        detail: 'Official graduation certificates, degree records and authenticated grade sheets.',
      },
      {
        title: 'Valid Passport & Identification',
        detail: 'Clear copies of passport photo page, national ID, and family relations proof if required.',
      },
      {
        title: 'Language-Test Evidence',
        detail: 'Valid TOPIK score for Korean-taught tracks or IELTS/TOEFL report for English programs.',
      },
      {
        title: 'Study Plan & Personal Statement',
        detail: 'Structured statement of intent, academic motivation, and planned course trajectory.',
      },
      {
        title: 'Academic Recommendations',
        detail: 'Letters of recommendation from previous teachers, academic professors, or counselors.',
      },
      {
        title: 'Financial Documentation & Records',
        detail: 'Bank statements or sponsor guarantees meeting the target institution balance requirements.',
      },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Do I need TOPIK for every program?',
        a: 'No. Some degrees are taught in English, while Korean-taught programs generally require appropriate Korean proficiency.',
      },
      {
        q: 'Does joining a Korean-language program guarantee degree admission?',
        a: 'No. Degree applications and eligibility are separate.',
      },
      {
        q: 'Can I get a full scholarship?',
        a: 'Some scholarships are substantial or fully funded, but selection remains competitive and never automatic.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Build My South Korea Shortlist', href: '#enquiry' },
      secondary: { label: 'Check Scholarship Eligibility', href: '/resources/scholarships' },
    },
    formFields: ['Study level', 'Preferred subject', 'Academic score', 'Language status'],
  },
} as const;
