import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, SESSION_MAX_AGE, makeSessionValue, passwordMatches } from '@/lib/server/adminAuth';

function getPublicUrl(req: NextRequest, targetPath: string): URL {
  const forwardedHost = req.headers.get('x-forwarded-host') || req.headers.get('host');
  const forwardedProto = req.headers.get('x-forwarded-proto') || 'https';
  if (forwardedHost) {
    const host = forwardedHost.split(',')[0].trim();
    return new URL(targetPath, `${forwardedProto}://${host}`);
  }
  return new URL(targetPath, req.url);
}

export async function POST(req: NextRequest) {
  let password = '';
  const contentType = req.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    try {
      const json = await req.json();
      password = String(json?.password || '');
    } catch {
      password = '';
    }
  } else {
    try {
      const form = await req.formData();
      password = String(form.get('password') ?? '');
    } catch {
      password = '';
    }
  }

  const ok = passwordMatches(password);
  const target = ok ? '/admin' : '/admin?error=1';
  const redirectUrl = getPublicUrl(req, target);
  const res = NextResponse.redirect(redirectUrl, 303);

  if (ok) {
    res.cookies.set(ADMIN_COOKIE, makeSessionValue(), {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: SESSION_MAX_AGE,
    });
  }
  return res;
}
