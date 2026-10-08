import 'server-only';
import nodemailer from 'nodemailer';
import type { StoredLead } from './leads';

/** Recipients come from EMAIL_1..EMAIL_3. Unset or still-placeholder values are skipped. */
export function leadRecipients(): string[] {
  return [process.env.EMAIL_1, process.env.EMAIL_2, process.env.EMAIL_3]
    .map((e) => e?.trim())
    .filter((e): e is string => !!e && e.includes('@') && !e.endsWith('@example.com'));
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/** Sends the lead to every configured recipient. Returns true when at least one send succeeded. */
export async function emailLead(lead: StoredLead): Promise<boolean> {
  const to = leadRecipients();
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!to.length || !SMTP_HOST) {
    console.warn('[lead] Email not configured (set EMAIL_1..3 and SMTP_*). Lead was stored only.');
    return false;
  }

  const rows: [string, string][] = [
    ['Name', lead.fullName],
    ['Mobile', lead.mobile],
    ['Email', lead.email || '-'],
    ['Interest', lead.interests.join(', ') || '-'],
    ['Destination', lead.destination || '-'],
    ['Source', lead.source],
    ...Object.entries(lead.details).map(([k, v]) => [k, v] as [string, string]),
    ['Received', lead.createdAt],
  ];

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });

  try {
    await transport.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to,
      replyTo: lead.email || undefined,
      subject: `New lead: ${lead.fullName} (${lead.interests[0] || lead.source})`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#57514A"><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`)
        .join('')}</table>`,
    });
    return true;
  } catch (err) {
    console.error('[lead] Email send failed', err);
    return false;
  }
}
