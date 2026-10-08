import { NextRequest, NextResponse } from 'next/server';
import { emailLead } from '@/lib/server/mailer';
import { saveLead, type StoredLead } from '@/lib/server/leads';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check: If the hidden faxNumber is filled, silently reject bots
    if (body.faxNumber && body.faxNumber.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Received' });
    }

    // Required fields validation
    if (!body.fullName || !body.mobile) {
      return NextResponse.json(
        { success: false, message: 'Please provide your name and mobile number.' },
        { status: 400 }
      );
    }

    // Consent is mandatory (IT Act 2000 / DPDP Act)
    if (body.consent !== true) {
      return NextResponse.json(
        { success: false, message: 'Please consent to being contacted so we can process your profile.' },
        { status: 400 }
      );
    }

    const known = new Set(['fullName', 'mobile', 'email', 'interests', 'destination', 'source', 'consent', 'faxNumber']);
    const details: Record<string, string> = {};
    for (const [k, v] of Object.entries(body)) {
      if (!known.has(k) && v !== undefined && v !== null && v !== '') details[k] = String(v).slice(0, 500);
    }
    const lead: StoredLead = {
      id: `211-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      fullName: String(body.fullName).slice(0, 120),
      mobile: String(body.mobile).slice(0, 20),
      email: body.email ? String(body.email).slice(0, 160) : undefined,
      interests: Array.isArray(body.interests) ? body.interests.map((i: unknown) => String(i).slice(0, 120)) : [],
      destination: body.destination ? String(body.destination).slice(0, 120) : undefined,
      source: String(body.source || 'enquiry-form').slice(0, 160),
      details,
      emailed: false,
    };

    // Email first (to EMAIL_1..3) so the stored record shows whether the notification went out.
    lead.emailed = await emailLead(lead);
    try {
      await saveLead(lead);
    } catch (err) {
      console.error('[lead] Could not store lead', err);
      // Still succeed if the team was emailed; otherwise tell the user.
      if (!lead.emailed) throw err;
    }
    console.log(`[211 OVERSEAS] New lead ${lead.id} from ${lead.source} (emailed: ${lead.emailed})`);

    return NextResponse.json({
      success: true,
      message: 'Profile submitted successfully. Our team will connect with you.',
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
