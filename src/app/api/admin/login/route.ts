import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, SESSION_MAX_AGE, makeSessionValue, passwordMatches } from '@/lib/server/adminAuth';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const ok = passwordMatches(String(form.get('password') ?? ''));
  const res = NextResponse.redirect(new URL(ok ? '/admin' : '/admin?error=1', req.url), 303);
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
