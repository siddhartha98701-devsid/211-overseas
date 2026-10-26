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
      'Inbound Programs & Research',
      'Other',
    ],
  },

  howItWorks: {
    eyebrow: 'How 211 OVERSEAS Works',
    headline: 'Your Overseas Journey, Simplified',
    steps: [
      { number: '01', title: 'Tell Us Your Goal', description: 'Study abroad? Build an international career? Looking for a particular country? Start with a conversation.' },
      { number: '02', title: 'Profile Assessment', description: 'We understand your education, experience, goals, budget, timeline and destination preferences.' },
      { number: '03', title: 'Explore Your Options', description: 'Potential destinations, courses or career pathways are identified according to your profile.' },
      { number: '04', title: 'Application & Documentation', description: 'We guide you through the applicable application and documentation requirements.' },
      { number: '05', title: 'Admission / Career Process', description: 'You proceed through the relevant university admission or recruitment process.' },
      { number: '06', title: 'Visa & Pre-Departure', description: 'We assist you in preparing for the applicable visa documentation and your international journey.' },
      { number: '07', title: 'Ongoing Support', description: 'Our team stays in touch to address queries as you prepare for your move abroad.' },
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
        label: 'Study',
        href: '/study',
        children: [
          { label: 'South Korea (Featured)', href: '/study/south-korea' },
          { label: 'Singapore', href: '/study/singapore' },
          { label: 'Luxembourg', href: '/study/luxembourg' },
          { label: 'Japan', href: '/study/japan' },
          { label: 'Taiwan', href: '/study/taiwan' },
          { label: 'UAE', href: '/study/uae' },
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
        label: 'Work',
        href: '/work',
        children: [
          { label: 'UAE', href: '/work/uae' },
          { label: 'Greece', href: '/work/greece' },
          { label: 'Current Openings', href: '/work/openings' },
        ],
      },
      {
        label: 'Inbound',
        href: '/inbound',
        children: [
          { label: 'Inbound Overview', href: '/inbound' },
          { label: 'For Students', href: '/inbound/students' },
          { label: 'Institutional Collaborations', href: '/inbound/collaborations' },
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
          { label: 'Study Budget Planner', href: '/resources/cost-of-studying' },
          { label: 'Application Guide', href: '/resources/application-guide' },
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
        title: 'STUDY',
        links: [
          { label: 'South Korea', href: '/study/south-korea' },
          { label: 'Singapore', href: '/study/singapore' },
          { label: 'Luxembourg', href: '/study/luxembourg' },
          { label: 'Japan', href: '/study/japan' },
          { label: 'Taiwan', href: '/study/taiwan' },
          { label: 'UAE', href: '/study/uae' },
          { label: 'Europe', href: '/study/europe' },
          { label: 'USA', href: '/study/usa' },
          { label: 'Canada', href: '/study/canada' },
          { label: 'UK', href: '/study/uk' },
          { label: 'Australia', href: '/study/australia' },
          { label: 'Inbound India', href: '/inbound' },
          { label: 'Inbound: Students', href: '/inbound/students' },
          { label: 'Inbound: Collaborations', href: '/inbound/collaborations' },
        ],
      },
      work: {
        title: 'WORK',
        links: [
          { label: 'UAE', href: '/work/uae' },
          { label: 'Greece', href: '/work/greece' },
          { label: 'Current Openings', href: '/work/openings' },
          { label: 'Work Enquiry', href: '/contact#work-enquiry' },
        ],
      },
      companyResources: {
        title: 'COMPANY / RESOURCES',
        links: [
          { label: 'About Us', href: '/about' },
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
