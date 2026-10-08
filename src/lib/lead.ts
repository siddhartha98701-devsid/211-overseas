export interface LeadPayload {
  fullName: string;
  mobile: string;
  email?: string;
  interests?: string[];
  destination?: string;
  consent: boolean;
  /** Where on the site the lead came from (shown in the CRM log). */
  source?: string;
}

export const MOBILE_PATTERN = /^(\+?91)?[6-9]\d{9}$/;

/** Posts a lead to the enquiry API. Never throws; returns a user-facing message on failure. */
export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; message?: string }> {
  try {
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return { ok: false, message: data.message || 'Could not submit. Please try again.' };
    try { sessionStorage.setItem('lead-popup-done', '1'); } catch { /* storage unavailable */ }
    return { ok: true };
  } catch {
    return { ok: false, message: 'Network error. Please try again or call us on +91 99985 85211.' };
  }
}
