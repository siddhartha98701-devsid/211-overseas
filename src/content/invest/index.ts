/**
 * 211 OVERSEAS — Global Mobility, Second Citizenship & Residency Content
 * Source of truth: Master Copy Specification (Pages 231–245)
 */

export interface InvestDestination {
  name: string;
  subtitle: string;
  description: string;
  discover?: string;
  highlights?: string;
  tag: string;
  image?: string;
}

export const investContent = {
  meta: {
    title: 'Global Mobility, Second Citizenship & Residency by Investment | 211 OVERSEAS',
    description:
      'Discover second citizenship, residency by investment and international business pathways across the Caribbean, UAE, Europe and the US with 211 Overseas.',
  },

  hero: {
    eyebrow: 'GLOBAL MOBILITY · RESIDENCY · CITIZENSHIP',
    h1: 'Your Home Is Here. Your Possibilities Are Everywhere.',
    supportingHeadline:
      'Discover second citizenship, residency by investment and international business pathways.',
    paragraph:
      "You've built a life you're proud of. A business, a career, a family and a future shaped by your own decisions. Now imagine having more of the world available to you. A second residence in Europe. A long-term base in the UAE. The possibility of another nationality. Or an international business presence that expands your reach beyond one market. Across selected countries, investment-related residency and citizenship programmes offer qualifying individuals different forms of global access. And exploring these opportunities doesn't necessarily mean relocating or changing the life you've built. At 211 Overseas, we help you discover international programmes, understand their benefits and explore the options that align with your aspirations.",
    highlight: 'One life. More places to experience it.',
    ctas: {
      primary: { label: 'Explore Global Programmes', href: '#pathways' },
      secondary: { label: 'Request a Private Consultation', href: '#consultation' },
    },
  },

  whyThinkGlobally: {
    heading: 'What If the World Offered You More Than Places to Visit?',
    description:
      "There's a difference between visiting a country and having a recognised legal status that allows you to build a deeper connection with it. International residency and citizenship programmes can provide eligible applicants with distinct opportunities for mobility, residence and family planning.",
    cards: [
      {
        number: '01',
        title: 'Another Place to Call Home',
        description:
          'Explore the possibility of holding residence rights in another country while maintaining your established life and connections at home, where programme conditions permit.',
      },
      {
        number: '02',
        title: 'Greater International Mobility',
        description:
          'Discover the travel privileges and international access associated with specific residence permits or nationalities.',
      },
      {
        number: '03',
        title: 'Possibilities for Your Family',
        description:
          'Selected programmes allow qualifying family members to be included, helping you explore additional international options together.',
      },
      {
        number: '04',
        title: 'A Wider Business Horizon',
        description:
          'Explore destinations that offer qualifying entrepreneurs and investors opportunities for business establishment and international commercial activity.',
      },
    ],
    closing:
      "You don't have to choose between appreciating where you come from and exploring more of the world.",
    cta: {
      label: 'Discover What Global Residency Can Offer',
      href: '#consultation',
    },
  },

  pathways: {
    heading: 'A Residence Card. A Second Nationality. An International Business. Discover the Difference.',
    subtitle:
      'Three distinct pathways offering eligible individuals and families legal access to international jurisdictions.',
    items: [
      {
        id: 'citizenship',
        number: '01',
        category: 'Citizenship by Investment',
        headline: 'Another Nationality. A New Set of Global Possibilities.',
        description:
          "Some countries have official citizenship-by-investment programmes that allow eligible applicants to apply for nationality through prescribed economic contributions or investments. Subject to approval, citizenship can provide the rights and privileges associated with the destination country's nationality.",
        jurisdictions: [
          'Antigua & Barbuda',
          'Dominica',
          'Grenada',
          'St. Kitts & Nevis',
          'St. Lucia',
          'Vanuatu',
          'Nauru',
          'Türkiye',
          'São Tomé & Príncipe',
        ],
        note: 'Additional jurisdictions may be explored where suitable programmes and authorised application channels are currently available.',
        buttonLabel: 'Explore Citizenship Programmes',
        href: '#citizenship-showcase',
      },
      {
        id: 'residency',
        number: '02',
        category: 'Residency by Investment',
        headline: 'Another Country. Another Place You May Call Home.',
        description:
          'Investment-related residence programmes can provide qualifying individuals with residence status in another destination. Depending on the programme, this may include long-term residence, eligible family members, international travel privileges and the ability to pursue permitted activities in the destination.',
        jurisdictions: [
          'United Arab Emirates',
          'Portugal',
          'Greece',
          'Cyprus',
          'Hungary',
          'Latvia',
          'Malta',
        ],
        note: 'Residency permits enable lawful stay and visa-free regional travel without requiring foreign citizenship.',
        buttonLabel: 'Explore Residency Programmes',
        href: '#residency-showcase',
      },
      {
        id: 'business',
        number: '03',
        category: 'Business & Investor Migration',
        headline: 'Let Your Business Ambitions Cross Borders.',
        description:
          'Entrepreneur, business and investor immigration routes provide different possibilities for eligible business owners, founders and investors. Depending on the country, applicants may need to establish a qualifying business, demonstrate genuine commercial activity, obtain an endorsement or satisfy investment requirements.',
        jurisdictions: [
          'United Kingdom',
          'United States',
          'Portugal',
          'Selected other international markets',
        ],
        note: 'Programme availability and individual eligibility are assessed on a confidential case-by-case basis.',
        buttonLabel: 'Explore Business Migration',
        href: '#business-showcase',
      },
    ],
  },

  citizenship: {
    heading: 'From the Caribbean to the Mediterranean — Discover Another Kind of Global Access.',
    description:
      'Countries with citizenship-by-investment programmes each have their own nationality laws, contribution routes and family eligibility criteria. The ideal programme depends on your objectives and your eligibility under the laws of both your home country and the destination.',
    destinations: [
      {
        name: 'St. Kitts & Nevis',
        subtitle: 'Caribbean Beauty. A Longstanding Citizenship Programme.',
        description:
          'Explore an established citizenship-by-investment framework in a twin-island Caribbean nation known for its tropical landscapes and distinctive island character.',
        discover: 'Qualifying investment routes, family inclusion and nationality benefits.',
        tag: 'Established Framework',
        image: '/images/destinations/australia-sydney-harbour.jpg',
      },
      {
        name: 'Grenada',
        subtitle: 'An Island Nation with International Connections.',
        description:
          "Discover Grenada's citizenship-by-investment programme and the rights associated with obtaining Grenadian nationality through the official process.",
        discover: 'Approved contribution routes, qualifying family provisions and international mobility.',
        tag: 'International Mobility',
        image: '/images/destinations/singapore-marina-bay.jpg',
      },
      {
        name: 'Dominica',
        subtitle: 'Nature, Islands and a Different Global Perspective.',
        description:
          'Explore the citizenship-by-investment framework of a Caribbean nation known for its rainforests, waterfalls and beautiful natural landscapes.',
        discover: 'Government-approved application routes and eligible family arrangements.',
        tag: 'Nature Island',
        image: '/images/destinations/singapore-gardens.jpg',
      },
      {
        name: 'Antigua & Barbuda',
        subtitle: 'Two Islands. Beautiful Coastlines. International Possibilities.',
        description:
          "Discover Antigua & Barbuda's citizenship programme and the qualification, investment and residency conditions applicable to applicants.",
        discover: 'Family-friendly inclusion provisions and regulated application procedures.',
        tag: 'Family Provisions',
        image: '/images/greece/greece-resort.jpg',
      },
      {
        name: 'St. Lucia',
        subtitle: 'Caribbean Charm with Official Citizenship Options.',
        description:
          "Explore St. Lucia's citizenship-by-investment programme, its qualifying investment categories and possible family inclusion.",
        discover: 'Government bond and national economic fund contribution channels.',
        tag: 'Eastern Caribbean',
        image: '/images/destinations/europe-city-life.jpg',
      },
      {
        name: 'Türkiye',
        subtitle: 'Where Europe and Asia Meet.',
        description:
          "Explore Türkiye's citizenship-related investment provisions and discover a destination with major business cities, remarkable cultural heritage and strong international connections.",
        discover: 'Real estate investment frameworks and transcontinental business connectivity.',
        tag: 'Eurasian Hub',
        image: '/images/uae.jpg',
      },
      {
        name: 'Pacific & Alternative Jurisdictions',
        subtitle: 'Vanuatu · Nauru · São Tomé & Príncipe',
        description:
          'Interested applicants can also enquire about eligible programmes in Vanuatu, Nauru and São Tomé & Príncipe, subject to current official availability and individual eligibility.',
        discover: 'Alternative citizenship routes and specialized global mobility solutions.',
        tag: 'Alternative Routes',
        image: '/images/destinations/japan-tokyo-city.jpg',
      },
    ],
    cta: {
      label: 'Explore My Citizenship Options',
      href: '#consultation',
    },
  },

  residency: {
    heading: 'Another Address in the World. Without Necessarily Changing Your Everyday Life.',
    description:
      'Every residency programme has its own investment criteria, validity, renewal conditions and residence privileges. Choosing a country begins with understanding which benefits matter most to you.',
    destinations: [
      {
        name: 'United Arab Emirates',
        subtitle: 'A Long-Term Residence Option in a Global Business Hub.',
        description:
          "Explore the UAE's qualifying long-term residency programmes for eligible investors, entrepreneurs and other applicants. From Dubai's international business environment to Abu Dhabi's modern cultural and commercial landscape, the UAE offers a distinctive international base.",
        highlights:
          'Investor eligibility, qualifying investment categories, family sponsorship and residence privileges.',
        tag: '10-Year Golden Visa',
        image: '/images/web/uae-wide.webp',
      },
      {
        name: 'Portugal',
        subtitle: 'European Residency with a Flexible Outlook.',
        description:
          "Portugal's investment residence programme allows qualifying applicants to pursue residence status through specified investment categories. The programme may be attractive to individuals who wish to maintain their primary lives elsewhere while meeting Portugal's applicable physical-presence and renewal conditions.",
        highlights:
          'Qualifying investment routes, residence rights, eligible family arrangements and applicable Schengen travel privileges.',
        tag: 'Golden Residence Permit',
        image: '/images/destinations/europe-library.jpg',
      },
      {
        name: 'Greece',
        subtitle: 'A Mediterranean Residence Option Worth Discovering.',
        description:
          'Greece has an established investment-related residence framework for eligible non-EU applicants. Discover its distinctive combination of beautiful islands, historic cities, coastal living and qualifying investment-residency routes.',
        highlights:
          'Eligible investment categories, permanent residence conditions and extended family provisions.',
        tag: 'Permanent Residence',
        image: '/images/greece/greece-resort.jpg',
      },
      {
        name: 'Cyprus',
        subtitle: 'Mediterranean Living with International Possibilities.',
        description:
          "Explore Cyprus's qualifying investor-related permanent residence framework and the destination's lifestyle and international business environment.",
        highlights:
          'Permanent residence rights for eligible investors, strategic trade hub and English-speaking legal framework.',
        tag: 'Permanent Residence',
        image: '/images/destinations/europe-city-life.jpg',
      },
      {
        name: 'Hungary',
        subtitle: 'Central European Residency in a City Full of Character.',
        description:
          "Discover Hungary's eligible guest-investor residence framework and the international possibilities associated with Budapest and Central Europe.",
        highlights:
          '10-year renewable guest investor residence permit with full Schengen access across 29 European countries.',
        tag: 'Guest Investor Program',
        image: '/images/web/germany-wide.webp',
      },
      {
        name: 'Latvia',
        subtitle: 'Discover Another Side of European Residency.',
        description:
          "Explore eligible Latvian investor-related residence routes alongside the country's distinctive Baltic culture and European connections.",
        highlights:
          'Northern European business climate, streamlined residency framework and European mobility.',
        tag: 'Investor Residence',
        image: '/images/destinations/europe-campus.jpg',
      },
      {
        name: 'Malta',
        subtitle: 'An Island at the Heart of the Mediterranean.',
        description:
          "Explore Malta's applicable residence frameworks and the country's international character, architecture and Mediterranean setting.",
        highlights:
          'Malta Permanent Residence Programme (MPRP), English-speaking EU jurisdiction and robust regulatory regime.',
        tag: 'MPRP Framework',
        image: '/images/destinations/uk-cambridge.jpg',
      },
    ],
    cta: {
      label: 'Compare Global Residency Options',
      href: '#consultation',
    },
  },

  businessMigration: {
    heading: 'Some People Expand Their Businesses. Others Expand Where They Can Do Business.',
    description:
      'An international business presence can begin with a new company, a qualifying entrepreneurial venture or an investment connected to a recognised immigration category. Different countries provide different legal frameworks for these activities.',
    pathways: [
      {
        country: 'United Kingdom',
        programme: 'Innovator Founder',
        description:
          'Explore a route for eligible entrepreneurs with an innovative, viable and scalable business idea endorsed by an approved body.',
        highlight: 'Approved Endorsement Body Route',
      },
      {
        country: 'United States',
        programme: 'Investor & Business Routes',
        description:
          'Explore relevant US investor and business immigration categories, including programmes where applicants meet the required investment, nationality and other conditions.',
        highlight: 'EB-5 & Commercial Migration Categories',
      },
      {
        country: 'Portugal',
        programme: 'Entrepreneur & Independent-Income Routes',
        description:
          'Explore eligible Portuguese immigration categories for genuine entrepreneurial activity or other qualifying circumstances.',
        highlight: 'D2 Business & Founder Pathways',
      },
      {
        country: 'Other International Markets',
        programme: 'Custom Commercial Gateways',
        description:
          'Discover country-specific business establishment and entrepreneur pathways based on current availability and individual requirements.',
        highlight: 'Jurisdictional Strategy Assessment',
      },
    ],
    closing:
      "Business migration isn't simply about investing in another country. It's about choosing the appropriate route for the actual business activity you intend to pursue.",
    cta: {
      label: 'Explore My International Business Options',
      href: '#consultation',
    },
  },

  familySecurity: {
    heading: 'More Possibilities Aren’t Just for You. They Can Be for the People Closest to You.',
    description:
      'Many international residency and citizenship programmes include provisions for qualifying family members. Depending on the programme, applicants may be able to include a spouse, children and other eligible dependants.',
    pillars: [
      {
        number: '01',
        title: 'A Shared International Experience',
        description:
          'Explore another destination together, subject to the residence or nationality rights granted to each qualifying family member.',
      },
      {
        number: '02',
        title: 'Additional Education Possibilities',
        description:
          'Understand the educational opportunities and admission conditions available to residents or citizens of the destination country.',
      },
      {
        number: '03',
        title: 'Greater Lifestyle Flexibility',
        description:
          'Discover how residence rights may allow eligible family members to spend more time in another country.',
      },
      {
        number: '04',
        title: 'Long-Term Family Planning',
        description:
          "Explore how programme conditions, renewals and dependent eligibility may align with your family's plans.",
      },
    ],
    closing: 'The most meaningful global possibilities are often the ones you can share.',
    cta: {
      label: 'Explore Family Residency & Citizenship Options',
      href: '#consultation',
    },
  },

  advisoryProcess: {
    heading: 'Your Global Plans Deserve a Personal Conversation.',
    description:
      'We guide qualifying individuals and families through an objective, confidential exploratory framework before formal commitments are made.',
    steps: [
      {
        step: '01',
        title: 'Tell Us What You’re Looking For',
        description:
          'Second citizenship, international residence, a business presence or more flexibility for your family.',
      },
      {
        step: '02',
        title: 'Discover Relevant Countries',
        description: 'Explore the destinations and programme categories that align with your interests.',
      },
      {
        step: '03',
        title: 'Understand Programme Benefits',
        description:
          'Learn about residence status, nationality rights, family inclusion, travel privileges and the conditions associated with each option.',
      },
      {
        step: '04',
        title: 'Review Your Eligibility',
        description:
          'Understand the official requirements for nationality, investment, source of funds, documentation and other relevant criteria.',
      },
      {
        step: '05',
        title: 'Explore the Formal Process',
        description:
          'Where legal, immigration or regulated investment services are required, applications and transactions must proceed through appropriately authorised professionals and official channels.',
      },
      {
        step: '06',
        title: 'Decide with Confidence',
        description:
          'Consider the programme’s benefits and commitments before choosing whether to proceed.',
      },
    ],
    cta: {
      label: 'Request My Private Consultation',
      href: '#consultation',
    },
  },

  faqs: [
    {
      q: 'Do I need to relocate permanently to obtain a second residency?',
      a: 'Not always. Certain residency-by-investment programmes have limited physical-stay requirements. Others require more time in the destination. The physical-presence requirements vary significantly between jurisdictions.',
    },
    {
      q: 'Can I continue living in India while holding foreign residency?',
      a: 'In many cases, yes, provided you meet the foreign programme’s physical-presence conditions and comply with relevant Indian laws, including tax and foreign exchange rules (such as the Foreign Exchange Management Act / FEMA).',
    },
    {
      q: 'Can I retain Indian citizenship with a foreign residence permit?',
      a: 'Generally, yes. Holding foreign residency or a permanent residence permit is entirely different from acquiring foreign citizenship. It does not affect your Indian passport or citizenship.',
    },
    {
      q: 'Can Indian citizens have a second citizenship alongside Indian citizenship?',
      a: 'India does not permit dual citizenship. Under the Indian Citizenship Act, 1955, voluntarily acquiring the citizenship of another country ordinarily terminates Indian citizenship, even if the destination country permits dual nationality. Former Indian citizens may subsequently explore Overseas Citizen of India (OCI) registration if eligible.',
    },
    {
      q: 'What is citizenship by investment?',
      a: 'It is a formal nationality route available in certain countries under which eligible applicants may qualify for citizenship through prescribed economic contributions or investments, subject to government due diligence and background verification.',
    },
    {
      q: 'What is residency by investment?',
      a: 'Residency by investment refers to official programmes allowing qualifying individuals and their families to obtain lawful residence permission in another country through approved capital investment, real estate acquisition, or business formation.',
    },
    {
      q: 'Does foreign residency provide visa-free access everywhere?',
      a: 'No. Travel privileges depend on the specific residence permit, your passport nationality, the destination country, and applicable regional agreements (such as the European Schengen area for qualifying EU residence permits).',
    },
    {
      q: 'Can my family be included in the application?',
      a: 'Many programmes have provisions to include qualifying dependants, such as a spouse, dependent children up to specified age thresholds, and in certain jurisdictions, dependent parents or grandparents.',
    },
    {
      q: 'Is the UAE Golden Residency a citizenship programme?',
      a: 'No. The UAE Golden Visa is a renewable 10-year long-term residency framework for investors, entrepreneurs, and specialised talents. It provides long-term living and business rights in the UAE, but is not an automatic grant of UAE nationality.',
    },
    {
      q: 'Can Portuguese investment residency lead to citizenship?',
      a: 'Holding Portuguese residency under the Golden Residence programme may allow an applicant to become eligible to apply for naturalisation after completing the legal residency duration and satisfying applicable language and legal requirements in force at that time.',
    },
    {
      q: 'Are there European investment residency options?',
      a: 'Yes. Selected European countries, including Portugal, Greece, Cyprus, Hungary, Latvia, and Malta, maintain qualifying investment-related residence frameworks, each with distinct conditions and privileges.',
    },
    {
      q: 'Can business owners explore international immigration routes?',
      a: 'Yes. Certain destinations offer entrepreneur, founder, and investor routes (such as the UK Innovator Founder visa or US commercial migration categories) for eligible applicants with viable business models.',
    },
    {
      q: 'How can 211 Overseas help?',
      a: 'We help you understand the programme categories, explore relevant destinations, evaluate jurisdictional benefits, and identify the formal requirements and licensed specialist support needed for your plans.',
    },
  ],

  consultation: {
    heading: "You've Built Your World. Discover How Much Bigger It Could Be.",
    description:
      'A second residence in Europe. An international address in the UAE. A citizenship programme in a beautiful island nation. Or a new business opportunity across borders. You may already have a destination in mind—or you may simply want to discover what’s possible. At 211 Overseas, we help you begin that exploration with a conversation focused on your ambitions.',
    directPhone: '+91 99985 85211',
    areasOfInterest: [
      'Second Citizenship',
      'Residency by Investment',
      'UAE Golden Residency',
      'European Residency',
      'Entrepreneur / Investor Migration',
      'Family Residency Planning',
      'Exploring All Options',
    ],
    destinations: [
      'UAE',
      'Portugal',
      'Greece',
      'Cyprus',
      'Hungary',
      'Latvia',
      'Malta',
      'Caribbean (St. Kitts, Grenada, Dominica, etc.)',
      'Türkiye',
      'Other / Open to Suggestions',
    ],
    primaryInterests: [
      'International Mobility',
      'Additional Residence Options',
      'Family Opportunities',
      'Business Expansion',
      'Other',
    ],
    contactMethods: ['Phone', 'WhatsApp', 'Email'],
  },

  disclaimer:
    'International residency, citizenship and investor-migration programmes are governed by the laws and official requirements of their respective destinations. Eligibility, approved investments, residence privileges, nationality rights and application outcomes depend on the applicable programme and competent authorities. Residency and citizenship are distinct legal statuses. Applicants should consider the nationality, tax, foreign-exchange and investment rules relevant to their personal circumstances. 211 Overseas provides introductory programme information and pathway guidance. Formal legal, immigration and regulated investment matters are undertaken through appropriately qualified or authorised professionals, where required.',
} as const;
