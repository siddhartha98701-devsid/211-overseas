/**
 * 211 OVERSEAS — Work Abroad Overview Content (Page 13)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const workOverviewContent = {
  meta: {
    title: 'Work Abroad | UAE, Greece & Current Vacancies',
    description:
      'Search current overseas recruitment opportunities by country, industry and role. Review vacancy standards, screening procedures and verified openings in UAE and Greece.',
  },

  hero: {
    eyebrow: 'WORK ABROAD',
    h1: 'Explore overseas work with the offer—not a promise—at the centre.',
    paragraph:
      'Search current overseas recruitment opportunities by country, industry and role. Eligibility, compensation, working conditions and immigration requirements depend on the employer and the specific vacancy.',
    ctas: {
      primary: { label: 'View Current Openings', href: '/work/openings' },
      secondary: { label: 'Submit My CV', href: '/contact#work-enquiry' },
    },
    formFields: ['Profession', 'Experience', 'Preferred country', 'WhatsApp'],
  },

  countryFocus: {
    headline: 'Current country focus',
    countries: [
      {
        name: 'UAE',
        href: '/work/uae',
        description:
          'Browse healthcare, hospitality, customer-facing, technical and professional roles when active requisitions are available.',
      },
      {
        name: 'Germany',
        href: '/work/germany',
        description:
          'Explore healthcare (nursing & physiotherapy), engineering, IT and skilled trade opportunities under Germany’s Skilled Immigration Act.',
      },
      {
        name: 'Greece',
        href: '/work/greece',
        description:
          'Explore hospitality, hotel operations, culinary and related roles according to confirmed recruitment cycles.',
      },
    ],
  },

  properVacancy: {
    headline: 'What a proper vacancy should tell you',
    rows: [
      {
        detail: 'Exact occupation / location',
        whyItMatters: 'Avoids vague promises of “any job abroad”.',
      },
      {
        detail: 'Gross or net salary',
        whyItMatters: 'Shows what you could actually receive.',
      },
      {
        detail: 'Working hours / shifts',
        whyItMatters: 'Allows you to assess workload and overtime.',
      },
      {
        detail: 'Accommodation / meals',
        whyItMatters: 'Clarifies inclusions and any deductions.',
      },
      {
        detail: 'Duration / legal category',
        whyItMatters: 'Distinguishes internships, seasonal jobs and standard employment.',
      },
      {
        detail: 'Employer selection stage',
        whyItMatters: 'Clarifies whether the role is advertised, interviewing or closed.',
      },
    ],
  },

  process: {
    headline: 'From enquiry to joining',
    steps: [
      {
        number: '01',
        title: 'Apply to an active role.',
        description: 'Submit basic profile and relevant documents.',
      },
      {
        number: '02',
        title: 'Pass eligibility screening.',
        description: 'Education, experience, language and other criteria are checked.',
      },
      {
        number: '03',
        title: 'Interview with the employer.',
        description: 'Shortlisted candidates proceed according to employer requirements.',
      },
      {
        number: '04',
        title: 'Review the written offer.',
        description: 'Pay, location, hours, benefits and legal conditions must be clear.',
      },
      {
        number: '05',
        title: 'Complete required authorisations.',
        description: 'Work permit, visa and travel follow the applicable law and approvals.',
      },
    ],
    disclaimer: 'Selection, recruitment timelines and work authorisation are never guaranteed.',
  },

  closing: {
    ctas: {
      primary: { label: 'Browse Verified Openings', href: '/work/openings' },
      secondary: { label: 'Ask About My Eligibility', href: '/contact#work-enquiry' },
    },
  },
} as const;
