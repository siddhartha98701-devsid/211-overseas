import 'server-only';
import { NextRequest } from 'next/server';

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const ipMap = new Map<string, RateLimitRecord>();

// Clean up stale entries every 10 minutes to prevent memory leaks
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipMap.entries()) {
      if (record.resetAt <= now) {
        ipMap.delete(ip);
      }
    }
  }, 10 * 60 * 1000).unref();
}

/**
 * Extracts client IP safely across proxies (Hostinger, Vercel, Cloudflare).
 */
export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.headers.get('x-real-ip') || 'unknown';
}

/**
 * In-memory sliding window rate limiter.
 * Default: 10 submissions per 15 minutes per IP address.
 */
export function checkRateLimit(
  ip: string,
  limit: number = 10,
  windowMs: number = 15 * 60 * 1000
): { allowed: boolean; remaining: number } {
  // Allow localhost/unknown during testing
  if (ip === 'unknown') {
    return { allowed: true, remaining: limit };
  }

  const now = Date.now();
  const record = ipMap.get(ip);

  if (!record || record.resetAt <= now) {
    ipMap.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: limit - record.count };
}
