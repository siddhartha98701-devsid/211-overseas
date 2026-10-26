/**
 * 211 OVERSEAS — Study in Japan Content (Page 06)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const japanContent = {
  meta: {
    title: 'Study in Japan | Fees, Universities & Scholarships',
    description:
      'Japan offers a rich university environment across advanced engineering, robotics, computing, scientific research, business and design. Compare fees, universities and scholarships.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / 06',
    h1: 'Study in Japan',
    subtitle: 'Engineering, research, industry and creative disciplines.',
    paragraph:
      'Japan offers a rich university environment across advanced engineering, robotics, computing, scientific research, business and design. The key early decision is whether your chosen program is available in English or requires Japanese proficiency.',
    facts: [
      { label: 'Teaching', value: 'Japanese; selected English-taught programs' },
      { label: 'Common intake', value: 'April; some autumn admissions' },
      { label: 'Funding', value: 'MEXT · university awards' },
      { label: 'Priority check', value: 'Language of instruction' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Robotics, mechanical and electrical engineering',
      'Computer science, data science and AI',
      'Materials, automotive and industrial engineering',
      'Life sciences, biotechnology and environmental studies',
      'Business, economics, architecture and design',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'University of Tokyo',
      'Kyoto University',
      'Osaka University',
      'Tohoku University',
      'Nagoya University',
      'Kyushu University',
      'Institute of Science Tokyo',
      'Waseda University',
      'Keio University',
      'Sophia University',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  languageFocus: {
    headline: 'Language comes first',
    description:
      'Confirm whether compulsory modules are taught in Japanese or English; language study alone is not a substitute for degree eligibility.',
  },

  budget: {
    headline: 'Budget snapshot',
    items: [
      {
        item: 'National university first-year academic fees',
        indicativeInfo: 'Approx. ¥820,000 on the official Study in Japan reference for many undergraduate programs.',
      },
      {
        item: 'Local public university',
        indicativeInfo: 'Approx. ¥910,000 first-year undergraduate academic fees.',
      },
      {
        item: 'Private university',
        indicativeInfo: 'Approx. ¥1.3 million first-year undergraduate academic fees excluding medicine, dentistry and pharmacy.',
      },
      {
        item: 'Living costs',
        indicativeInfo: 'Approx. ¥105,000 monthly national average excluding study/research cost (JASSO survey).',
      },
      {
        item: 'Also allow for',
        indicativeInfo: 'Housing move-in costs, exam fees, national insurance, flight and transport.',
      },
    ],
    planningReference:
      'Planning reference: Official Study in Japan tuition and living-cost pages, current site accessed October 2026. Check course-specific fees, student status, city and intake before applying.',
    _sources: [
      { label: 'Study in Japan Academic Fees', url: 'https://www.studyinjapan.go.jp/en/planning/academic-fees/', lastReviewed: '08 October 2026' },
      { label: 'Study in Japan Cost of Living', url: 'https://www.studyinjapan.go.jp/en/life/cost-of-living/', lastReviewed: '08 October 2026' },
    ],
  },

  fundingOptions: {
    headline: 'Funding options',
    description:
      'Review MEXT scholarships, institution-specific tuition reductions and research fellowships. Selection criteria and application channels differ; scholarship planning should begin early and remain separate from your admission strategy.',
  },

  closing: {
    ctas: {
      primary: { label: 'Explore Japan Programmes', href: '#enquiry' },
      secondary: { label: 'Check Language & Entry Requirements', href: '/resources/application-guide' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
