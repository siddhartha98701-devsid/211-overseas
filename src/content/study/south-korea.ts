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
    eyebrow: 'STUDY DESTINATION / 03',
    h1: 'Study in South Korea',
    subtitle: 'Language programs, undergraduate degrees and postgraduate study.',
    paragraph:
      'South Korea offers pathways in technology, engineering, business, science and the creative industries. The right route depends on your intended degree, teaching language, academic profile and preferred city.',
    facts: [
      { label: 'Pathways', value: 'Language · Bachelor’s · Master’s · Postgraduate' },
      { label: 'Typical intakes', value: 'March / September for many degrees' },
      { label: 'Language', value: 'Korean or English, course dependent' },
      { label: 'Funding', value: 'GKS · institutional · research' },
    ],
  },

  budget: {
    headline: 'Budget snapshot',
    items: [
      {
        item: 'University tuition',
        indicativeInfo:
          'Government category overview: about KRW 6.8 million average annually for four-year institutions; actual fees vary considerably.',
      },
      {
        item: 'National / public',
        indicativeInfo: 'Approx. KRW 4.3 million average annual tuition (category overview).',
      },
      {
        item: 'Private',
        indicativeInfo: 'Approx. KRW 7.6 million average annual tuition (category overview).',
      },
      {
        item: 'Living costs',
        indicativeInfo: 'Approx. KRW 750,000–1,000,000 per month (government guidance).',
      },
      {
        item: 'Also budget for',
        indicativeInfo: 'Dormitory or housing deposit, insurance, meals, transport, flights, visa and study materials.',
      },
    ],
    planningReference:
      'Planning reference: Study in Korea government tuition overview and living-expenses guidance, accessed October 2026. Check course-specific fees, student status, city and intake before applying.',
    // Internal audit metadata
    _sources: [
      { label: 'Tuition overview', url: 'https://studyinkorea.go.kr/ko/plan/schoolType.do', lastReviewed: '08 October 2026' },
      { label: 'Living expenses', url: 'https://www.studyinkorea.go.kr/ko/life/livingExpense.do', lastReviewed: '08 October 2026' },
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

  scholarships: {
    headline: 'Scholarships worth investigating',
    items: [
      'Global Korea Scholarship (GKS): criteria, supported programs, country quotas and deadlines are intake-specific.',
      'University merit awards: may be linked to academic performance, TOPIK scores or other conditions.',
      'Graduate research support: research assistantships or grants may be offered by specific departments or faculty.',
    ],
  },

  documents: {
    headline: 'Documents commonly requested',
    description:
      'Academic transcripts and certificates; passport; language-test evidence where required; study plan/personal statement; recommendations; financial documents and authenticated records as requested by the institution.',
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
