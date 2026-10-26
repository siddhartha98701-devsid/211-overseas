/**
 * 211 OVERSEAS — Resources Hub Content (Page 18)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const resourcesHubContent = {
  meta: {
    title: 'Study Abroad Guides | Scholarships, Costs & FAQs',
    description:
      'Use our guides to compare destinations, understand costs, prepare documents and ask better questions before you commit.',
  },

  hero: {
    eyebrow: 'RESOURCES',
    h1: 'Resources for decisions that deserve careful planning.',
    paragraph:
      'Use our guides to compare destinations, understand costs, prepare documents and ask better questions before you commit.',
  },

  featuredGuides: {
    id: 'guides',
    headline: 'Featured guides',
    guides: [
      {
        title: 'Study Budget Planner',
        description: 'Compare tuition, housing, insurance, deposits, flights and contingency.',
        href: '/resources/cost-of-studying',
      },
      {
        title: 'Scholarships Explained',
        description: 'Learn how tuition waivers, stipends and research funding differ.',
        href: '/resources/scholarships',
      },
      {
        title: 'Admission Checklist',
        description: 'Prepare academic records, language proof, statements and recommendations.',
        href: '/resources/application-guide',
      },
      {
        title: 'Overseas Job Offer Checklist',
        description: 'Review salary terms, working hours, housing, legal category and deductions.',
        href: '/work#vacancy-details',
      },
      {
        title: 'South Korea Study Guide',
        description: 'Compare Korean-language study, undergraduate courses and research routes.',
        href: '/study/south-korea',
      },
      {
        title: 'Destination Comparison',
        description: 'Explore what sets the study destinations apart.',
        href: '/study',
      },
    ],
  },

  popularQuestions: {
    headline: 'Popular questions to start with',
    items: [
      {
        question: 'Is a university scholarship the same as full funding?',
        href: '/resources/scholarships',
      },
      {
        question: 'How much does my first year abroad actually cost?',
        href: '/resources/cost-of-studying',
      },
      {
        question: 'Can my previous degree be recognised for a new program?',
        href: '/faq',
      },
      {
        question: 'What should I confirm before accepting an overseas employment offer?',
        href: '/work',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Explore All Guides', href: '#guides' },
      secondary: { label: 'Ask a Question', href: '/contact' },
    },
  },
} as const;
