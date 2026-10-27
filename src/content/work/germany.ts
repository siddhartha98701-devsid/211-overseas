/**
 * 211 OVERSEAS — Work in Germany Content
 * Source of truth: German Federal Foreign Office & Skilled Immigration Act (Fachkräfteeinwanderungsgesetz) (October 2026)
 */

export const workGermanyContent = {
  meta: {
    title: 'Work in Germany | Skilled Immigration, Healthcare & Engineering Careers',
    description:
      'Explore qualified employment in Germany under the Skilled Immigration Act. Key pathways across clinical nursing, physiotherapy, engineering, IT and skilled technical professions with verified employer contracts.',
  },

  hero: {
    eyebrow: 'WORK IN GERMANY',
    h1: 'Build a long-term professional career in Germany.',
    paragraph:
      'Germany’s Skilled Immigration Act opens direct employment pathways for qualified international professionals. Key sectors include healthcare (nursing and physiotherapy), precision engineering, IT, and skilled technical trades with verified employer contracts and structured professional recognition (Anerkennung).',
  },

  industries: {
    headline: 'Priority employment sectors in Germany',
    list: [
      {
        title: 'Nursing & Healthcare',
        description:
          'Registered nurses and clinical healthcare specialists; professional recognition (Anerkennung) and German language (B1/B2) support pathways apply.',
      },
      {
        title: 'Physiotherapy & Rehabilitation',
        description:
          'Physiotherapists and rehabilitation practitioners working in hospitals, outpatient clinics, and specialized orthopedic rehabilitation centers.',
      },
      {
        title: 'Engineering & Automotive',
        description:
          'Mechanical, electrical, automotive, mechatronics and civil engineers integrated into Germany’s world-renowned Mittelstand and industrial leaders.',
      },
      {
        title: 'IT & Software Development',
        description:
          'Software engineers, cloud architects, cybersecurity specialists and data scientists; broad opportunities with English and German working environments.',
      },
    ],
  },

  howAssessed: {
    headline: 'How candidates are assessed for Germany',
    rows: [
      {
        criterion: 'Qualification & Degree Recognition',
        whatToPrepare:
          'Official degree or vocational diploma evaluated through the Central Office for Foreign Education (ZAB) or competent state recognition authority (Defizitbescheid / Vollanerkennung).',
      },
      {
        criterion: 'German Language Proficiency',
        whatToPrepare:
          'B1 or B2 Goethe/Telc certification for licensed healthcare professions; B1 or English fluency for IT and select engineering roles.',
      },
      {
        criterion: 'Verifiable Work Experience',
        whatToPrepare:
          'Detailed Europass-format tabular CV with verifiable employment certificates, clinical logbooks or technical project references.',
      },
      {
        criterion: 'Binding Employment Contract',
        whatToPrepare:
          'Legally compliant German employment contract or binding job offer adhering to prevailing wage thresholds (Tarifvertrag / statutory standards).',
      },
      {
        criterion: 'Immigration & Visa Processing',
        whatToPrepare:
          'Federal Employment Agency (Bundesagentur für Arbeit) pre-approval and fast-track skilled worker procedure (Section 81a / Section 18a/b AufenthG).',
      },
    ],
  },

  understandOffer: {
    headline: 'Understand your German employment offer',
    points: [
      'Salary must specify gross monthly compensation (Bruttogehalt) and comply with statutory collective wage agreements (TVöD, TV-L or sector minimums).',
      'Statutory social security contributions cover mandatory public health insurance, long-term care insurance, pension insurance, and unemployment insurance.',
      'Standard weekly working hours are typically 38.5 to 40 hours with legally regulated overtime and shift allowances (Zuschläge).',
      'German labor law mandates a minimum of 24 to 30 days of paid annual vacation (Urlaubstage) plus statutory public holidays.',
      'A binding written employment contract (Arbeitsvertrag) must clearly define the probationary period (Probezeit, maximum 6 months) and notice periods.',
      'Germany provides clear legal pathways to permanent residency (Niederlassungserlaubnis) after 21 to 27 months for EU Blue Card holders, or 3 years for skilled workers.',
    ],
    _sources: [
      {
        label: 'Make it in Germany — Official Federal Portal for Qualified Professionals',
        url: 'https://www.make-it-in-germany.com/en/working-in-germany',
        lastReviewed: 'October 2026',
      },
    ],
  },

  faqs: {
    headline: 'Common questions on working in Germany',
    items: [
      {
        q: 'What is the professional recognition process (Anerkennung)?',
        a: 'The Anerkennung is the formal legal assessment of your foreign professional or academic credentials against the German reference occupation (Referenzberuf). If differences exist, an adaptation qualification (Anpassungslehrgang) or knowledge test can be completed while working in Germany.',
      },
      {
        q: 'Do healthcare professionals need German language certificates?',
        a: 'Yes. Registered nurses and physiotherapists typically require a B1 or B2 level German certificate (Goethe-Institut or Telc) to obtain full professional licensing (Approbation / Berufserlaubnis).',
      },
      {
        q: 'Can I bring my spouse and children to Germany?',
        a: 'Yes. Qualified skilled workers holding an employment visa or EU Blue Card are entitled to family reunification (Familienzusammenführung), granting spouses immediate and unrestricted permission to work in Germany.',
      },
      {
        q: 'What is the Fast-Track Procedure for Skilled Workers (Beschleunigtes Fachkräfteverfahren)?',
        a: 'Under Section 81a of the German Residence Act, employers in Germany can initiate a fast-track procedure with the local immigration office (Ausländerbehörde) to significantly expedite degree recognition, labor approval, and visa interview scheduling.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Explore German Vacancies', href: '/work/openings' },
      secondary: { label: 'Submit CV for Assessment', href: '/contact#work-enquiry' },
    },
    formFields: ['Profession', 'Experience', 'German Level', 'WhatsApp'],
  },
} as const;
