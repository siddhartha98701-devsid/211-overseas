import { NextRequest, NextResponse } from 'next/server';

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

    // Server-side logging of candidate profile
    const timestamp = new Date().toISOString();
    console.log(`\n======================================================`);
    console.log(`[211 OVERSEAS CRM - NEW CANDIDATE PROFILE ENQUIRY]`);
    console.log(`Time: ${timestamp}`);
    console.log(`Candidate Name: ${body.fullName}`);
    console.log(`Mobile: ${body.mobile}`);
    console.log(`Email: ${body.email || 'Not specified'}`);
    console.log(`Source: ${body.source || 'enquiry-form'}`);
    console.log(`Age: ${body.age || 'Not specified'}`);
    console.log(`City: ${body.city || 'Not specified'}`);
    console.log(`Qualification: ${body.qualification || 'Not specified'}`);
    console.log(`Occupation: ${body.occupation || 'Not specified'}`);
    console.log(`Destination: ${body.destination || 'Not specified'}`);
    console.log(`Course/Career: ${body.courseOrCareer || 'Not specified'}`);
    console.log(`Approx Budget: ${body.budget || 'Not specified'}`);
    console.log(`Timeline: ${body.intakeTimeline || 'Not specified'}`);
    console.log(`Interests: ${(body.interests || []).join(', ') || 'None selected'}`);
    console.log(`======================================================\n`);

    // In a production setup with credentials:
    // e.g. await sendCrmWebhook(body); or await sendNotificationEmail(body);

    return NextResponse.json({
      success: true,
      message: 'Profile submitted successfully. Our team will connect with you.',
      submissionId: `211-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error('Error processing enquiry form:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing profile. Please contact us directly.' },
      { status: 500 }
    );
  }
}
