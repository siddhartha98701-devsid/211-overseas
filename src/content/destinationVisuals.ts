/**
 * 211 OVERSEAS — Destination Visual Assets Registry
 * High-resolution campus, landmark, and lifestyle photography for Study and Work country pages.
 */

export interface DestinationVisual {
  heroImage: {
    src: string;
    alt: string;
    caption: string;
  };
  gallery: Array<{
    src: string;
    alt: string;
    title: string;
    caption: string;
  }>;
}

export const DESTINATION_VISUALS: Record<string, DestinationVisual> = {
  'South Korea': {
    heroImage: {
      src: '/images/korea/seoul-skyline.jpg',
      alt: 'Seoul skyline and prestigious university research campuses in South Korea',
      caption: 'Seoul, South Korea · Premier Global Research & Tech Hub',
    },
    gallery: [
      {
        src: '/images/universities/snu.jpg',
        alt: 'Seoul National University campus',
        title: 'Seoul National University',
        caption: 'Top-ranked national flagship university (SKY)',
      },
      {
        src: '/images/universities/kaist.jpg',
        alt: 'KAIST STEM and robotics research laboratory',
        title: 'KAIST Research Hub',
        caption: 'World-renowned STEM institute with full scholarships',
      },
      {
        src: '/images/korea/gyeongbokgung.jpg',
        alt: 'Gyeongbokgung palace reflecting rich Korean heritage',
        title: 'Cultural Heritage',
        caption: 'Centuries of history alongside dynamic modernity',
      },
      {
        src: '/images/korea/korea-student.jpg',
        alt: 'International students studying in South Korea',
        title: 'Vibrant Student Community',
        caption: 'Safe, inclusive global campus lifestyle',
      },
    ],
  },

  Singapore: {
    heroImage: {
      src: '/images/destinations/singapore-campus.jpg',
      alt: 'International students collaborating outdoors at biophilic Singapore university campus with Marina Bay views',
      caption: 'Singapore · Biophilic Campus & Marina Bay Gateway',
    },
    gallery: [
      {
        src: '/images/destinations/singapore-campus.jpg',
        alt: 'Modern sustainable campus in Singapore',
        title: 'Smart Green Campuses',
        caption: 'Cutting-edge sustainable architecture & laboratories',
      },
      {
        src: '/images/destinations/singapore-fintech-hub.jpg',
        alt: 'Singapore financial district and innovation technology towers',
        title: 'Global Finance & Tech Gateway',
        caption: 'Direct links to multinational regional headquarters',
      },
      {
        src: '/images/destinations/singapore-marina-bay.jpg',
        alt: 'Marina Bay skyline and modern Singapore infrastructure',
        title: 'Marina Bay Metropolis',
        caption: 'Asia’s premier English-medium commercial capital',
      },
      {
        src: '/images/destinations/singapore-gardens.jpg',
        alt: 'Gardens by the Bay and urban greenery',
        title: 'Urban Innovation & Living',
        caption: 'Safe, hyper-connected, world-class city-state',
      },
    ],
  },

  Luxembourg: {
    heroImage: {
      src: '/images/destinations/europe-city-life.jpg',
      alt: 'Luxembourg City historic skyline, financial district and academic campuses',
      caption: 'Luxembourg City · Europe’s Premier Financial & Business Hub',
    },
    gallery: [
      {
        src: '/images/destinations/europe-library.jpg',
        alt: 'Historic European library and study hall',
        title: 'Academic Excellence',
        caption: 'Focused business, finance, and logistics institutions',
      },
      {
        src: '/images/destinations/europe-campus.jpg',
        alt: 'Continental European university plaza',
        title: 'International Environment',
        caption: 'Multilingual hub at the heart of the European Union',
      },
      {
        src: '/images/destinations/europe-research.jpg',
        alt: 'Modern research laboratory in Europe',
        title: 'Capital Markets & Tech',
        caption: 'Direct ties to multinational banking and EU institutions',
      },
      {
        src: '/images/destinations/europe-city-life.jpg',
        alt: 'Luxembourg City architecture and streets',
        title: 'High Standard of Living',
        caption: 'Safe, scenic, and prosperous European grand duchy',
      },
    ],
  },

  Japan: {
    heroImage: {
      src: '/images/destinations/japan-campus.jpg',
      alt: 'International students at Tokyo Global Innovation Center university campus under cherry blossoms',
      caption: 'Tokyo, Japan · Innovation, Robotics & Advanced Sciences',
    },
    gallery: [
      {
        src: '/images/destinations/japan-campus.jpg',
        alt: 'Japanese university campus under cherry blossoms',
        title: 'World-Class Campuses',
        caption: 'Leading national and private research universities',
      },
      {
        src: '/images/destinations/japan-tech-lab.jpg',
        alt: 'Advanced robotics and electronics laboratory in Japan',
        title: 'Robotics & AI Innovation',
        caption: 'Hands-on experimentation in state-of-the-art facilities',
      },
      {
        src: '/images/destinations/japan-culture.jpg',
        alt: 'Traditional Japanese temple and serene garden setting',
        title: 'Cultural Heritage',
        caption: 'Unique traditions, safety, and modern convenience',
      },
      {
        src: '/images/destinations/japan-tokyo-city.jpg',
        alt: 'Tokyo illuminated skyline and bustling urban streets',
        title: 'Vibrant Metropolis Life',
        caption: 'Tokyo and Osaka dynamic career opportunities',
      },
    ],
  },

  Taiwan: {
    heroImage: {
      src: '/images/destinations/taiwan-campus.jpg',
      alt: 'International students at National Taiwan University engineering complex with Taipei 101 skyline',
      caption: 'Taipei, Taiwan · International Science & Tech Complex',
    },
    gallery: [
      {
        src: '/images/destinations/taiwan-campus.jpg',
        alt: 'National Taiwan University engineering campus',
        title: 'Premier Tech Campuses',
        caption: 'Affordable, high-ranking English-taught degrees',
      },
      {
        src: '/images/destinations/taiwan-semiconductor-lab.jpg',
        alt: 'Cleanroom semiconductor microelectronics lab in Taiwan',
        title: 'Semiconductor Capital',
        caption: 'World’s most advanced microelectronics ecosystem',
      },
      {
        src: '/images/destinations/taiwan-taipei-skyline.jpg',
        alt: 'Taipei 101 skyscraper and cityscape',
        title: 'Taipei Metropolis',
        caption: 'Safe, affordable, and high standard of student living',
      },
      {
        src: '/images/destinations/taiwan-culture.jpg',
        alt: 'Taiwanese night market and cultural street life',
        title: 'Culture & Student Life',
        caption: 'Warm hospitality and vibrant community culture',
      },
    ],
  },

  UAE: {
    heroImage: {
      src: '/images/web/uae-wide.webp',
      alt: 'Modern skyscrapers and university centers in Dubai, UAE',
      caption: 'Dubai & Abu Dhabi · International Academic Hub',
    },
    gallery: [
      {
        src: '/images/generated/uae-sector-engineering.jpg',
        alt: 'State-of-the-art campus engineering laboratory in Dubai',
        title: 'Global Branch Campuses',
        caption: 'UK, Australian, and international accredited degrees',
      },
      {
        src: '/images/generated/uae-careers.jpg',
        alt: 'Corporate professionals in Dubai International Financial Centre',
        title: 'Regional Business Hub',
        caption: 'Commercial nexus connecting East and West',
      },
      {
        src: '/images/generated/uae-sector-hospitality.jpg',
        alt: 'Luxury resort and hospitality facility in the UAE',
        title: 'World Tourism Capital',
        caption: 'Hospitality, event management, and business hubs',
      },
      {
        src: '/images/uae.jpg',
        alt: 'Dubai city panorama and architectural landmarks',
        title: 'Cosmopolitan Living',
        caption: 'Tax-free environment with world-class amenities',
      },
    ],
  },

  Europe: {
    heroImage: {
      src: '/images/destinations/europe-campus.jpg',
      alt: 'International students studying at historic continental European university plaza beside a canal',
      caption: 'Continental Europe · Renaissance Heritage & Modern Science',
    },
    gallery: [
      {
        src: '/images/destinations/europe-campus.jpg',
        alt: 'Historic European collegiate courtyard',
        title: 'Historic University Cities',
        caption: 'Centuries of academic prestige and research',
      },
      {
        src: '/images/destinations/europe-library.jpg',
        alt: 'Traditional European vaulted library',
        title: 'Centuries of Scholarship',
        caption: 'Vast repositories and low/zero public tuition models',
      },
      {
        src: '/images/destinations/europe-research.jpg',
        alt: 'European scientific research team in lab',
        title: 'Leading Science & Innovation',
        caption: 'EU-wide research networks and Schengen mobility',
      },
      {
        src: '/images/destinations/europe-city-life.jpg',
        alt: 'European city life and cafe culture',
        title: 'Cultural & Student Lifestyle',
        caption: 'Diverse, culturally rich European student life',
      },
    ],
  },

  USA: {
    heroImage: {
      src: '/images/destinations/usa-campus.jpg',
      alt: 'International students walking across collegiate quad in front of iconic neoclassical dome library in the USA',
      caption: 'United States · World-Leading Research & Campus Quad',
    },
    gallery: [
      {
        src: '/images/destinations/usa-campus.jpg',
        alt: 'American collegiate quad and library',
        title: 'Tier-1 Research Universities',
        caption: 'Unmatched academic choice and research funding',
      },
      {
        src: '/images/destinations/usa-tech-hub.jpg',
        alt: 'Silicon Valley tech campus and innovation lab',
        title: 'Silicon Valley & Innovation',
        caption: 'Direct access to global technological frontiers',
      },
      {
        src: '/images/destinations/usa-nyc-campus.jpg',
        alt: 'New York City urban university surroundings',
        title: 'Metropolitan Campuses',
        caption: 'Dynamic urban networking in New York and Boston',
      },
      {
        src: '/images/destinations/usa-harvard-yard.jpg',
        alt: 'Historic brick collegiate architecture and autumn trees',
        title: 'Historic Collegiate Quads',
        caption: 'Vibrant campus sports, student clubs, and housing',
      },
    ],
  },

  Canada: {
    heroImage: {
      src: '/images/destinations/canada-campus.jpg',
      alt: 'International students walking past modern glass academic hall with autumn maple foliage and mountains in Canada',
      caption: 'Canada · Glass Academics & Majestic Nature',
    },
    gallery: [
      {
        src: '/images/destinations/canada-campus.jpg',
        alt: 'Modern Canadian university glass academic building',
        title: 'Inclusive Academic Campuses',
        caption: 'Internationally respected public university system',
      },
      {
        src: '/images/destinations/canada-toronto-skyline.jpg',
        alt: 'Toronto skyline and commercial towers',
        title: 'Toronto Commercial Metropolis',
        caption: 'Financial services, tech, and cultural capital',
      },
      {
        src: '/images/destinations/canada-ubc-campus.jpg',
        alt: 'University campus on the Pacific coast in Vancouver',
        title: 'Pacific Rim Academic Hubs',
        caption: 'Top-tier faculties framed by mountains and ocean',
      },
      {
        src: '/images/destinations/canada-montreal.jpg',
        alt: 'Montreal historic architecture and academic quarter',
        title: 'Historic Bilingual Culture',
        caption: 'World-famous student cities and vibrant arts',
      },
    ],
  },

  'United Kingdom': {
    heroImage: {
      src: '/images/destinations/uk-campus.jpg',
      alt: 'International students walking along sandstone cloister and modern institute at University of Oxford UK',
      caption: 'United Kingdom · World-Ranked Collegiate Excellence',
    },
    gallery: [
      {
        src: '/images/destinations/uk-campus.jpg',
        alt: 'Sandstone cloisters and British university lawns',
        title: 'Russell Group Universities',
        caption: 'Global top-100 institutions and accelerated degrees',
      },
      {
        src: '/images/destinations/uk-oxford-library.jpg',
        alt: 'Radcliffe Camera and historic Oxford library',
        title: 'Historic University Libraries',
        caption: 'World-leading repositories and academic tradition',
      },
      {
        src: '/images/destinations/uk-london-city.jpg',
        alt: 'London financial skyline and River Thames',
        title: 'London Global Hub',
        caption: 'Unparalleled access to finance, law, and culture',
      },
      {
        src: '/images/destinations/uk-cambridge.jpg',
        alt: 'Cambridge collegiate chapel and river lawns',
        title: 'Collegiate Campus Life',
        caption: 'Close faculty mentoring and world-renowned alumni',
      },
    ],
  },

  Australia: {
    heroImage: {
      src: '/images/destinations/australia-campus.jpg',
      alt: 'International students walking past sandstone cloister and modern glass hub under blooming jacarandas in Australia',
      caption: 'Australia · Group of Eight Heritage & Sunlit Campuses',
    },
    gallery: [
      {
        src: '/images/destinations/australia-campus.jpg',
        alt: 'Australian university sandstone quad under blooming jacarandas',
        title: 'Group of Eight (Go8) Campuses',
        caption: 'Intensive research and globally ranked degrees',
      },
      {
        src: '/images/destinations/australia-sydney-harbour.jpg',
        alt: 'Sydney Harbour and modern commercial district',
        title: 'Sydney Global Gateway',
        caption: 'Dynamic Pacific business and technology hub',
      },
      {
        src: '/images/destinations/australia-melbourne-quad.jpg',
        alt: 'Melbourne cultural university courtyard and clocktower',
        title: 'Melbourne Arts & Innovation',
        caption: 'Australia’s cultural and academic heartland',
      },
      {
        src: '/images/destinations/australia-student-life.jpg',
        alt: 'Students relaxing outdoors in sunlit Australian campus park',
        title: 'Sunlit Student Living',
        caption: 'High quality of life, beaches, and safe cities',
      },
    ],
  },
};

/**
 * Normalized lookup helper that matches country names regardless of case or alias.
 */
export function getDestinationVisual(name: string): DestinationVisual | undefined {
  if (DESTINATION_VISUALS[name]) return DESTINATION_VISUALS[name];

  const lower = name.toLowerCase().trim();
  for (const [key, val] of Object.entries(DESTINATION_VISUALS)) {
    if (key.toLowerCase() === lower) return val;
  }

  if (lower.includes('korea')) return DESTINATION_VISUALS['South Korea'];
  if (lower.includes('uk') || lower.includes('britain') || lower.includes('kingdom')) return DESTINATION_VISUALS['United Kingdom'];
  if (lower.includes('us') || lower.includes('america') || lower.includes('united states')) return DESTINATION_VISUALS['USA'];
  if (lower.includes('uae') || lower.includes('dubai') || lower.includes('emirates')) return DESTINATION_VISUALS['UAE'];
  if (lower.includes('singapore')) return DESTINATION_VISUALS['Singapore'];
  if (lower.includes('luxembourg')) return DESTINATION_VISUALS['Luxembourg'];
  if (lower.includes('japan')) return DESTINATION_VISUALS['Japan'];
  if (lower.includes('taiwan')) return DESTINATION_VISUALS['Taiwan'];
  if (lower.includes('europe')) return DESTINATION_VISUALS['Europe'];
  if (lower.includes('canada')) return DESTINATION_VISUALS['Canada'];
  if (lower.includes('australia')) return DESTINATION_VISUALS['Australia'];

  return undefined;
}
