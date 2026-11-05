/**
 * 211 OVERSEAS — Work Abroad Overview Content (Page 13)
 * Source of truth: Master Specification PDF (Pages 169–175)
 */

export const workOverviewContent = {
  meta: {
    title: 'Work Abroad | UAE, Germany & Greece Career Pathways | 211 OVERSEAS',
    description:
      'Explore international career pathways in healthcare, caregiving and hospitality across Germany, the UAE and Greece with 211 Overseas.',
  },

  hero: {
    eyebrow: 'WORK ABROAD',
    h1: 'Your Skills Were Built with Purpose. Where Could They Take You Next?',
    supportingHeadline:
      'Explore international career pathways in healthcare, caregiving and hospitality.',
    paragraph:
      'A nursing qualification earned through years of dedication. The knowledge and experience of a physiotherapist. The creativity and service skills of a hospitality professional. Every qualification represents hard work, learning and ambition. For professionals interested in gaining international exposure, different countries offer career pathways with their own professional standards, workplace cultures and opportunities. From healthcare-related pathways in Germany to nursing, caregiving and hospitality opportunities in the UAE and Greece, discover what your qualifications could make possible. At 211 Overseas, we help you understand international career requirements, explore suitable pathways and take an informed first step.',
    ctas: {
      primary: { label: 'Explore Career Pathways', href: '#destinations' },
      secondary: { label: 'Understand My Eligibility', href: '/contact#work-enquiry' },
    },
    formFields: ['Profession', 'Experience', 'Preferred country', 'WhatsApp'],
  },

  countryFocus: {
    headline: 'Different Countries. Different Industries. Different Ways to Grow.',
    description:
      'Every country has its own professional requirements and employment environment. Some destinations have structured recognition routes for internationally qualified healthcare professionals. Others offer opportunities within international hospitality and service industries. Explore the destinations and professional fields that match your qualifications.',
    countries: [
      {
        name: 'UAE',
        headline: 'International Healthcare and Hospitality in a Global Business Hub.',
        href: '/work/uae',
        description:
          'The UAE brings together hospitals, healthcare facilities, hotels, resorts and hospitality businesses serving a diverse international population. Discover the professional requirements associated with nursing, caregiving and hospitality roles.',
        relevantBackgrounds: 'Nursing, ANM, Caregiving, Hotel Management and Hospitality.',
      },
      {
        name: 'Germany',
        headline: 'Healthcare Skills Meet German Professional Standards.',
        href: '/work/germany',
        description:
          'Germany offers structured pathways for internationally qualified healthcare professionals, including nurses and physiotherapists. Explore qualification recognition, German-language preparation, professional registration requirements and the stages involved in pursuing eligible healthcare roles.',
        relevantBackgrounds: 'BSc Nursing, GNM Nursing and Physiotherapy.',
      },
      {
        name: 'Greece',
        headline: 'Discover Hospitality Careers in the Mediterranean.',
        href: '/work/greece',
        description:
          'Greece is internationally recognised for its tourism industry, island destinations, resorts and distinctive hospitality culture. Explore the qualifications, experience and employer-related requirements relevant to selected seasonal hospitality pathways.',
        relevantBackgrounds: 'Hospitality, Hotel Management, Food & Beverage Service and related fields.',
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
    headline: 'From Exploring a Pathway to Understanding the Next Step.',
    description:
      'Pursuing an international career should begin with clear information about eligibility, qualifications and the organisations responsible for the process.',
    steps: [
      {
        number: '01',
        title: 'Tell Us About Your Background',
        description:
          "Share your educational qualification, professional experience and the countries or career fields you're interested in.",
      },
      {
        number: '02',
        title: 'Understand the Relevant Pathway',
        description:
          'Learn about the qualification, language, professional recognition and other requirements associated with your destination and profession.',
      },
      {
        number: '03',
        title: 'Explore Suitable Possibilities',
        description:
          'Where an appropriate and legally permitted referral arrangement is available, candidate information may be shared with an external recruitment organisation after the candidate has provided informed consent.',
      },
      {
        number: '04',
        title: 'Independent Assessment',
        description:
          'The relevant recruitment organisation assesses available pathways and determines whether a candidate may be considered for a particular opportunity.',
      },
      {
        number: '05',
        title: 'Employer-Led Selection',
        description:
          'Where applicable, the employer or authorised recruitment organisation may conduct assessments, interviews or other selection procedures. An enquiry or profile review does not constitute an employment offer.',
      },
      {
        number: '06',
        title: 'Employment & Immigration Formalities',
        description:
          'If selected, employment documentation, professional approvals and immigration formalities are undertaken according to applicable destination-country laws.',
      },
      {
        number: '07',
        title: 'Prepare for Your International Role',
        description:
          'Prepare for relocation, workplace induction and professional integration in your new destination.',
      },
    ],
    disclaimer:
      'Profile reviews and initial consultations do not constitute an offer of employment. Official terms, compensation and visas are established solely by written employer contracts and relevant government authorities.',
  },

  closing: {
    headline: 'Your next professional chapter starts with a conversation.',
    paragraph:
      'Tell us your qualifications, language skills and career goals. We’ll help you understand which pathways you may qualify for.',
    ctas: {
      primary: { label: 'Submit My Profile', href: '#shortlist-form' },
      secondary: { label: 'Explore Destinations', href: '#destinations' },
    },
  },
} as const;
