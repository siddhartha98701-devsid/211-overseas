/**
 * 211 OVERSEAS — Global Site Content & Navigation
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const SHOW_VERIFIED_COMPANY_DETAILS = false;

export const siteContent = {
  brand: {
    name: '211 OVERSEAS',
    fullName: '211 Overseas — International education and career pathways',
    tagline: 'Your Future Has No Borders.',
    brandLine: '211 Overseas — International education and career pathways. Your Future Has No Borders.',
    description: 'International education and career pathways. Your Future Has No Borders.',
    phone: '+91 99985 85211',
    whatsapp: 'https://wa.me/919998585211',
    domain: 'www.211overseas.com',
    canonicalBase: 'https://www.211overseas.com',
    // Kept for internal reference; hidden from public display when SHOW_VERIFIED_COMPANY_DETAILS is false
    address: 'B-1405, The Capital, Science City Road, Sola, Ahmedabad 380060',
    city: 'Ahmedabad, Gujarat, India',
    emails: {
      general: 'info@211overseas.com',
      admissions: 'admissions@211overseas.com',
      support: 'support@211overseas.com',
      admin: 'admin@211overseas.com',
    },
    hours: 'Mon–Sat, 10:00 AM–7:00 PM IST',
  },

  form: {
    interests: [
      'Study in South Korea',
      'Study in Singapore',
      'Study in Luxembourg',
      'Study in Japan',
      'Study in Taiwan',
      'Study in UAE',
      'Study in Europe',
      'Study in USA',
      'Study in Canada',
      'Study in UK',
      'Study in Australia',
      'Work in UAE',
      'Work in Greece',
      'Second Citizenship / Global Residency',
      'Study in India (Inbound)',
      'College & University Collaboration (Inbound)',
      'Other',
    ],
  },

  howItWorks: {
    eyebrow: 'How 211 OVERSEAS Works',
    headline: 'From "What If?" to "What\'s Next?"',
    description:
      'Every international journey begins with a question. Which country? What course? Which university? Where could my career take me? We help you discover your possibilities, understand your options and move forward with greater confidence.',
    cta: 'Start My Profile Review',
    steps: [
      {
        number: '01',
        title: 'Tell Us What Excites You',
        description:
          "Share your academic interests, career ambitions and the destinations you've been thinking about. You don't need to have everything figured out.",
      },
      {
        number: '02',
        title: "Let's Understand Your Profile",
        description:
          "We'll look at your qualifications, academic achievements, experience and preferences to understand your starting point.",
      },
      {
        number: '03',
        title: 'Discover Your Possibilities',
        description:
          'Explore universities, courses and international career pathways suited to your interests, background and financial readiness.',
      },
      {
        number: '04',
        title: 'Get Application Ready',
        description:
          "From academic records and personal statements to CVs and supporting documents, we'll help you prepare for the application process.",
      },
      {
        number: '05',
        title: 'Prepare for Your Next Milestone',
        description:
          'University selection, admission requirements, employer interviews or relevant assessments - understand what your pathway involves.',
      },
      {
        number: '06',
        title: 'Get Ready for Your Move',
        description:
          'Navigate visa documentation, travel preparation and the practical arrangements associated with your international journey.',
      },
      {
        number: '07',
        title: 'Begin Your New Chapter',
        description:
          'Take your next step with guidance on the transition, including post arrival support.',
      },
    ],
  },

  navigation: {
    stickyAction: {
      desktop: { label: 'Get Guidance', href: '/contact' },
      mobile: { label: 'WhatsApp', href: 'https://wa.me/919998585211' },
    },
    items: [
      { label: 'Home', href: '/' },
      {
        label: 'Study Abroad',
        href: '/study',
        children: [
          { label: 'South Korea (Featured)', href: '/study/south-korea' },
          { label: 'UAE', href: '/study/uae' },
          { label: 'Germany', href: '/study/germany' },
          { label: 'Singapore', href: '/study/singapore' },
          { label: 'Luxembourg', href: '/study/luxembourg' },
          { label: 'Japan', href: '/study/japan' },
          { label: 'Taiwan', href: '/study/taiwan' },
          {
            label: 'Other Destinations',
            isHeader: true,
            items: [
              { label: 'Europe', href: '/study/europe' },
              { label: 'USA', href: '/study/usa' },
              { label: 'Canada', href: '/study/canada' },
              { label: 'UK', href: '/study/uk' },
              { label: 'Australia', href: '/study/australia' },
            ],
          },
        ],
      },
      {
        label: 'Work Abroad',
        href: '/work',
        children: [
          { label: 'UAE', href: '/work/uae' },
          { label: 'Germany', href: '/work/germany' },
          { label: 'Greece', href: '/work/greece' },
          { label: 'Current Openings', href: '/work/openings' },
        ],
      },
      {
        label: 'Invest',
        href: '/invest',
        children: [
          { label: 'Overview', href: '/invest' },
          { label: 'Citizenship by Investment', href: '/invest#citizenship-showcase' },
          { label: 'Residency by Investment', href: '/invest#residency-showcase' },
          { label: 'Business Migration', href: '/invest#business-showcase' },
          { label: 'Private Consultation', href: '/invest#consultation' },
        ],
      },
      {
        label: 'Study in India',
        href: '/inbound',
        children: [
          { label: 'Overview', href: '/inbound' },
          { label: 'For Students', href: '/inbound/students' },
          { label: 'Partnerships', href: '/inbound/collaborations' },
        ],
      },
      {
        label: 'About Us',
        href: '/about',
        children: [
          { label: 'Approach', href: '/about#approach' },
          { label: 'What we help with', href: '/about#what-we-help-with' },
          { label: 'Enquiry', href: '/about#enquiry' },
        ],
      },
      {
        label: 'Resources',
        href: '/resources',
        children: [
          { label: 'Scholarships', href: '/resources/scholarships' },
          { label: 'Study Planning', href: '/resources/application-guide' },
          { label: 'Cost Guide', href: '/resources/cost-of-studying' },
          { label: 'FAQs', href: '/faq' },
        ],
      },
      {
        label: 'Contact Us',
        href: '/contact',
        children: [
          { label: 'Study enquiry', href: '/contact#study-enquiry' },
          { label: 'Work enquiry', href: '/contact#work-enquiry' },
          { label: 'WhatsApp / Call', href: 'https://wa.me/919998585211', external: true },
        ],
      },
    ],
  },

  footer: {
    brandLine: '211 Overseas — International education and career pathways. Your Future Has No Borders.',
    columns: {
      study: {
        title: 'STUDY ABROAD',
        links: [
          { label: 'South Korea', href: '/study/south-korea' },
          { label: 'UAE', href: '/study/uae' },
          { label: 'Germany', href: '/study/germany' },
          { label: 'Singapore', href: '/study/singapore' },
          { label: 'Luxembourg', href: '/study/luxembourg' },
          { label: 'Japan', href: '/study/japan' },
          { label: 'Taiwan', href: '/study/taiwan' },
          { label: 'Europe', href: '/study/europe' },
          { label: 'USA', href: '/study/usa' },
          { label: 'Canada', href: '/study/canada' },
          { label: 'UK', href: '/study/uk' },
          { label: 'Australia', href: '/study/australia' },
          { label: 'Study in India', href: '/inbound' },
          { label: 'Study in India: Students', href: '/inbound/students' },
          { label: 'Study in India: Participating Colleges', href: '/inbound/students#colleges' },
          { label: 'Study in India: Collaborations', href: '/inbound/collaborations' },
        ],
      },
      work: {
        title: 'WORK ABROAD',
        links: [
          { label: 'UAE', href: '/work/uae' },
          { label: 'Germany', href: '/work/germany' },
          { label: 'Greece', href: '/work/greece' },
          { label: 'Current Openings', href: '/work/openings' },
          { label: 'Work Enquiry', href: '/contact#work-enquiry' },
        ],
      },
      companyResources: {
        title: 'COMPANY / RESOURCES',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Second Citizenship & Residency', href: '/invest' },
          { label: 'Scholarships', href: '/resources/scholarships' },
          { label: 'Cost Guide', href: '/resources/cost-of-studying' },
          { label: 'FAQs', href: '/faq' },
          { label: 'Contact', href: '/contact' },
        ],
        policyLinks: [
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Terms & Conditions', href: '/terms-and-conditions' },
          { label: 'Disclaimer', href: '/disclaimer' },
          { label: 'Refund Policy', href: '/refund-policy' },
        ],
      },
    },
    disclaimer:
      'Information on this website is provided for education and career planning. University names are listed for research and comparison and do not indicate an affiliation or representation relationship unless expressly stated. Fees, scholarships, vacancies, salaries, immigration requirements and deadlines are subject to change. Admissions, employment and visa decisions are made by the responsible institutions, employers and public authorities. Applicants should check official information and written terms before making payments or travel arrangements.',
  },

  disclaimers: {
    general:
      'Information on this website is provided for education and career planning. University names are listed for research and comparison and do not indicate an affiliation or representation relationship unless expressly stated. Fees, scholarships, vacancies, salaries, immigration requirements and deadlines are subject to change. Admissions, employment and visa decisions are made by the responsible institutions, employers and public authorities. Applicants should check official information and written terms before making payments or travel arrangements.',
    privacy:
      'By submitting this form, you agree that 211 Overseas may contact you regarding your enquiry. Personal information will be handled in accordance with the published Privacy Policy.',
    vacancy:
      'Vacancy details are subject to employer confirmation. Only written offers and applicable legal approvals establish actual employment terms.',
    illustrativeUniversities:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
    uaeUniversities:
      'These are illustrative institutions for profile-based shortlisting, not claimed 211 Overseas partners. Confirm the awarding institution, campus recognition, program accreditation and eligibility for any available agent channel before promoting a particular intake.',
    confirmation:
      'Thank you. Your enquiry has been received. Our team will review the information and contact you regarding the next relevant step.',
  },
} as const;
