/**
 * Country to ISO 2-letter code mapping for flag assets.
 * Local flags stored in /public/flags/{iso}.png and /public/flags/{iso}@2x.png.
 */

export const COUNTRY_ISO_MAP: Record<string, string> = {
  // Primary & Featured Pathways
  'south korea': 'kr',
  'korea': 'kr',
  'republic of korea': 'kr',
  'germany': 'de',
  'deutschland': 'de',
  'uae': 'ae',
  'dubai': 'ae',
  'uae / dubai': 'ae',
  'united arab emirates': 'ae',
  'india': 'in',
  'india (hq)': 'in',
  'ahmedabad': 'in',

  // Other Destinations
  'united kingdom': 'gb',
  'uk': 'gb',
  'great britain': 'gb',
  'united states': 'us',
  'usa': 'us',
  'united states of america': 'us',
  'canada': 'ca',
  'australia': 'au',
  'japan': 'jp',
  'taiwan': 'tw',
  'singapore': 'sg',
  'europe': 'eu',
  'ireland': 'ie',
  'new zealand': 'nz',
  'france': 'fr',
  'italy': 'it',
  'spain': 'es',
  'netherlands': 'nl',
  'sweden': 'se',
  'switzerland': 'ch',
  'china': 'cn',
};

/**
 * Resolves a country name or location to its ISO 3166-1 alpha-2 code.
 */
export function getCountryCode(countryName?: string | null): string | null {
  if (!countryName) return null;
  const normalized = countryName.trim().toLowerCase();
  
  if (COUNTRY_ISO_MAP[normalized]) {
    return COUNTRY_ISO_MAP[normalized];
  }

  // Exact match search across keys
  for (const [key, code] of Object.entries(COUNTRY_ISO_MAP)) {
    if (normalized === key) return code;
  }

  // Substring match fallback (e.g. "India (HQ)" or "UAE / Dubai")
  for (const [key, code] of Object.entries(COUNTRY_ISO_MAP)) {
    if (normalized.includes(key)) {
      return code;
    }
  }

  return null;
}

export function getFlagUrl(code: string, density: '1x' | '2x' = '1x'): string {
  const c = code.toLowerCase();
  return density === '2x' ? `/flags/${c}@2x.png` : `/flags/${c}.png`;
}

export function getFlagSrcSet(code: string): string {
  const c = code.toLowerCase();
  return `/flags/${c}.png 1x, /flags/${c}@2x.png 2x`;
}
