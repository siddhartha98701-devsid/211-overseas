/**
 * 211 OVERSEAS — Vacancy Data Model & Repository
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 *
 * Developer specifications:
 * - Unpublish automatically when closingDate passes or status is 'Closed'.
 * - Vacancy salary must carry a currency plus gross/net designation.
 * - Mandatory lastVerified date displayed on every card.
 * - Applications must attach to vacancy.id.
 * - Must ship with ZERO live vacancies until employer documentation is verified.
 */

export interface Vacancy {
  id: string; // used as vacancyId on applications
  title: string;
  country: 'UAE' | 'Germany' | 'Greece';
  cityOrRegion: string;
  employerName?: string; // only if writtenPermission === true
  writtenPermission: boolean;
  sector: 'Healthcare' | 'Hospitality' | 'Technical' | 'Other';
  experience: 'Entry-level' | '1–3 years' | '3+ years' | 'Not specified';
  compensation: {
    currency: string;
    amount: string;
    basis: 'Gross' | 'Net';
    period: string; // e.g. 'per month', 'annually'
  };
  hoursAndContract: {
    weeklyHours?: string;
    duration?: string;
  };
  accommodationMeals: 'Included' | 'Deducted' | 'Not included';
  eligibility: string;
  status: 'Open' | 'Interviewing' | 'Paused' | 'Closed';
  lastVerified: string; // DD Month YYYY — REQUIRED
  closingDate?: string; // ISO date string YYYY-MM-DD
  sourceDocumentRef: string; // internal only, never rendered
  internalNotes?: string; // internal only
}

/**
 * Initial state: strictly ZERO live vacancies.
 * Placeholders are administrative only and never published.
 */
export const VACANCIES: Vacancy[] = [];

/**
 * Filter utility enforcing CMS controls:
 * 1. Automatically hides vacancies where status === 'Closed'.
 * 2. Automatically hides vacancies where closingDate has passed.
 */
export function getActiveVacancies(vacancies: Vacancy[] = VACANCIES): Vacancy[] {
  const now = new Date();
  return vacancies.filter((v) => {
    if (v.status === 'Closed') return false;
    if (v.closingDate) {
      const closing = new Date(v.closingDate);
      if (closing < now) return false;
    }
    return true;
  });
}
