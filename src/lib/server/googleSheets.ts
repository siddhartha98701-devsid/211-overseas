import 'server-only';
import type { StoredLead } from './leads';

/**
 * Appends a lead to a Google Sheet via a Google Apps Script Webhook.
 * Zero external libraries needed; works reliably on any serverless or Node hosting.
 */
export async function appendLeadToGoogleSheet(lead: StoredLead): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return false;
  }

  try {
    const payload = {
      id: lead.id,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      fullName: lead.fullName,
      mobile: lead.mobile,
      email: lead.email || 'Not specified',
      interests: lead.interests.join(', ') || 'General',
      destination: lead.destination || 'Not specified',
      source: lead.source || 'Website',
      details: Object.entries(lead.details || {})
        .map(([k, v]) => `${k}: ${v}`)
        .join(' | '),
    };

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
      // Google Apps Script redirects with 302 to script.googleusercontent.com, fetch follows redirects by default
      redirect: 'follow',
    });

    if (res.ok || res.status === 302) {
      console.log(`[Google Sheets] Lead ${lead.id} successfully appended to live Google Sheet`);
      return true;
    }

    console.warn(`[Google Sheets] Webhook returned status ${res.status}`);
    return false;
  } catch (err) {
    console.error('[Google Sheets] Error appending lead to Google Sheet:', err);
    return false;
  }
}
