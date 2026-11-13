import { NextRequest, NextResponse } from 'next/server';
import { siteContent } from '@/content/site';
import { emailLead } from '@/lib/server/mailer';
import { saveLead, type StoredLead } from '@/lib/server/leads';
import { checkRateLimit, getClientIp } from '@/lib/server/rateLimit';

function maskMobile(m?: string): string {
  if (!m) return 'Not specified';
  const clean = m.trim();
  if (clean.length < 6) return '******';
  return `${clean.slice(0, 3)}****${clean.slice(-3)}`;
}

function maskEmail(e?: string): string {
  if (!e) return 'Not specified';
  const parts = e.split('@');
  if (parts.length !== 2) return '******';
  const name = parts[0];
  const maskedName = name.length > 2 ? `${name[0]}***${name.slice(-1)}` : `${name[0]}*`;
  return `${maskedName}@${parts[1]}`;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting: Max 10 submissions per 15 minutes per IP
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp, 10, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many submissions from your connection. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check: If the hidden faxNumber is filled, silently reject bots
    if (body.faxNumber && body.faxNumber.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Received' });
    }

    const isInbound = String(body.source || '').toLowerCase().includes('inbound');

    if (isInbound) {
      if (!body.fullName || String(body.fullName).trim().length < 2) {
        return NextResponse.json(
          { success: false, message: 'Please provide your full name (minimum 2 characters).' },
          { status: 400 }
        );
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!body.email || !emailRegex.test(String(body.email))) {
        return NextResponse.json(
          { success: false, message: 'Please provide a valid email address.' },
          { status: 400 }
        );
      }
      if (!body.countryOfResidence || String(body.countryOfResidence).trim().length < 2) {
        return NextResponse.json(
          { success: false, message: 'Please provide your country of residence.' },
          { status: 400 }
        );
      }
      const validEnquiryTypes = [
        'Undergraduate study',
        'Postgraduate study',
        'Short-term / professional study',
        'Institutional collaboration',
      ];
      if (!body.enquiryType || !validEnquiryTypes.includes(String(body.enquiryType))) {
        return NextResponse.json(
          { success: false, message: 'Please select a valid enquiry type.' },
          { status: 400 }
        );
      }
    } else {
      // Required fields validation for standard forms
      if (!body.fullName || !body.mobile) {
        return NextResponse.json(
          { success: false, message: 'Please provide your name and mobile number.' },
          { status: 400 }
        );
      }
    }

    // Consent is mandatory (IT Act 2000 / DPDP Act)
    if (body.consent !== true) {
      return NextResponse.json(
        { success: false, message: 'Please consent to being contacted so we can process your profile.' },
        { status: 400 }
      );
    }

    const adminEmail = siteContent.brand.emails.admin;

    const known = new Set(['fullName', 'mobile', 'email', 'interests', 'destination', 'source', 'consent', 'faxNumber']);
    const details: Record<string, string> = {};
    for (const [k, v] of Object.entries(body)) {
      if (!known.has(k) && v !== undefined && v !== null && v !== '') details[k] = String(v).slice(0, 500);
    }

    const lead: StoredLead = {
      id: `211-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      fullName: String(body.fullName).slice(0, 120),
      mobile: body.mobile ? String(body.mobile).slice(0, 20) : 'Not specified',
      email: body.email ? String(body.email).slice(0, 160) : undefined,
      interests: Array.isArray(body.interests) ? body.interests.map((i: unknown) => String(i).slice(0, 120)) : [],
      destination: body.destination ? String(body.destination).slice(0, 120) : undefined,
      source: String(body.source || 'enquiry-form').slice(0, 160),
      details,
      emailed: false,
    };

    // Server-side logging of candidate profile (Masked for privacy)
    console.log(`\n======================================================`);
    console.log(`[211 OVERSEAS CRM - NEW CANDIDATE PROFILE ENQUIRY]`);
    console.log(`Time: ${lead.createdAt}`);
    console.log(`Admin Recipient: ${adminEmail}`);
    console.log(`Candidate Name: ${lead.fullName}`);
    console.log(`Mobile: ${maskMobile(lead.mobile)}`);
    console.log(`Email: ${maskEmail(lead.email)}`);
    console.log(`Source: ${lead.source}`);
    console.log(`Interests: ${lead.interests.join(', ') || 'None selected'}`);
    console.log(`Destination: ${lead.destination || 'Not specified'}`);
    console.log(`======================================================\n`);

    // Email to configured recipients (including admin@211overseas.com)
    lead.emailed = await emailLead(lead);
    try {
      await saveLead(lead);
    } catch (err) {
      console.error('[lead] Could not store lead', err);
      if (!lead.emailed) throw err;
    }
    console.log(`[211 OVERSEAS] New lead ${lead.id} from ${lead.source} (emailed: ${lead.emailed})`);

    return NextResponse.json({
      success: true,
      message: 'Thank you. Your enquiry has been received. Our team will review the information and contact you regarding the next relevant step.',
      submissionId: lead.id,
    });
  } catch (error) {
    console.error('Error processing enquiry form:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing profile. Please contact us directly.' },
      { status: 500 }
    );
  }
}
