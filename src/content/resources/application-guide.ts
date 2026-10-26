export interface ApplicationStep {
  number: string;
  title: string;
  description: string;
}

export interface PreparationRow {
  study: string;
  work: string;
}

export interface ApplicationGuideContent {
  seoTitle: string;
  pageUrl: string;
  eyebrow: string;
  heading: string;
  intro: string;
  steps: ApplicationStep[];
  preparationHeading: string;
  preparationTable: PreparationRow[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export const APPLICATION_GUIDE_CONTENT: ApplicationGuideContent = {
  seoTitle: "Study Abroad Application Checklist",
  pageUrl: "/resources/application-guide",
  eyebrow: "APPLICATION GUIDE",
  heading: "Your application, organised step by step.",
  intro:
    "Requirements differ by destination and program. The sequence below helps ensure that important documents, academic decisions and financial commitments are not left until the last minute.",
  steps: [
    {
      number: "01",
      title: "Define the objective.",
      description: "Course, career direction, available budget and preferred intake.",
    },
    {
      number: "02",
      title: "Create the shortlist.",
      description: "Compare accreditation, modules, entry requirements, city and full cost.",
    },
    {
      number: "03",
      title: "Prepare academic evidence.",
      description: "Transcripts, certificates, reference letters and test results as required.",
    },
    {
      number: "04",
      title: "Draft the application.",
      description: "Statement of purpose, CV, portfolio or research plan where relevant.",
    },
    {
      number: "05",
      title: "Submit through the required channel.",
      description: "Follow the university's official process and track deadlines.",
    },
    {
      number: "06",
      title: "Review the offer.",
      description: "Conditional requirements, deposit, refund policy and scholarship terms.",
    },
    {
      number: "07",
      title: "Prepare immigration documents.",
      description: "Financial evidence, insurance, health/other records where applicable.",
    },
    {
      number: "08",
      title: "Arrange departure.",
      description: "Accommodation, travel, orientation and essential documents.",
    },
  ],
  preparationHeading: "What to prepare first",
  preparationTable: [
    {
      study: "Passport and academic documents",
      work: "Passport and updated CV",
    },
    {
      study: "Academic CV / portfolio if relevant",
      work: "Qualification and registration papers",
    },
    {
      study: "Language scores as required",
      work: "Experience letters / references",
    },
    {
      study: "Statement / recommendations",
      work: "Role-specific skill proof",
    },
    {
      study: "Financial documents when requested",
      work: "Current vacancy requirements",
    },
  ],
  primaryCta: {
    label: "Start My Application Plan",
    href: "/contact?intent=study",
  },
  secondaryCta: {
    label: "Talk to a Counsellor",
    href: "https://wa.me/919998585211",
  },
};
