import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE } from '@/lib/server/adminAuth';

export async function POST(req: NextRequest) {
  const res = NextResponse.redirect(new URL('/admin', req.url), 303);
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
