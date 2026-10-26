/**
 * 211 OVERSEAS — Current Openings Content (Page 16)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const currentOpeningsContent = {
  meta: {
    title: 'Overseas Job Openings | UAE & Greece',
    description:
      'Filter current overseas recruitment opportunities by destination, role and experience. Every listing shows its latest verified status.',
  },

  hero: {
    eyebrow: 'CURRENT OPENINGS',
    h1: 'Current Overseas Openings',
    paragraph:
      'Filter by destination, role and experience. Every listing shows its latest verified status so you can focus on opportunities that are actually recruiting.',
  },

  filters: {
    destination: {
      label: 'Destination',
      options: ['All', 'UAE', 'Greece'],
    },
    sector: {
      label: 'Sector',
      options: ['All', 'Healthcare', 'Hospitality', 'Technical', 'Other'],
    },
    experience: {
      label: 'Experience',
      options: ['All', 'Entry-level', '1–3 years', '3+ years', 'Not specified'],
    },
    status: {
      label: 'Status',
      options: ['All', 'Open', 'Interviewing'],
    },
  },

  cardLabels: {
    button: 'Apply for This Role',
    lastVerified: 'Last verified',
  },

  emptyState: {
    headline: 'What if there are no openings?',
    paragraph:
      'Current positions in this category are temporarily closed. You may register your professional profile, and our team can contact you when a relevant recruitment requirement is available.',
    ctas: {
      primary: { label: 'Register for Future Openings', href: '/contact#work-enquiry' },
      secondary: { label: 'Return to Work Abroad', href: '/work' },
    },
  },
} as const;
