import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE } from '@/lib/server/adminAuth';

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
  const res = NextResponse.redirect(getPublicUrl(req, '/admin'), 303);
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
