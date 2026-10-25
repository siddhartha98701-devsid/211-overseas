import 'server-only';
import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'admin_session';
const MAX_AGE = 60 * 60 * 8;

// Protected fallback admin password (can be overridden via ADMIN_PASSWORD in environment variables)
export const DEFAULT_ADMIN_PASSWORD = '211Overseas#GlobalAdmin$2026!';

export const getAdminPassword = () => process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;

const secret = () => process.env.ADMIN_SESSION_SECRET || getAdminPassword();
const sign = (v: string) => createHmac('sha256', secret()).update(v).digest('hex');

export const adminConfigured = () => true;

export function passwordMatches(input: string) {
  const current = getAdminPassword();
  const a = Buffer.from(input);
  const b = Buffer.from(current);
  return a.length === b.length && b.length > 0 && timingSafeEqual(a, b);
}

export function makeSessionValue() {
  const exp = String(Date.now() + MAX_AGE * 1000);
  return `${exp}.${sign(exp)}`;
}

export const SESSION_MAX_AGE = MAX_AGE;

export async function isAdmin() {
  if (!adminConfigured()) return false;
  const v = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!v) return false;
  const [exp, sig] = v.split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const good = Buffer.from(sign(exp));
  const got = Buffer.from(sig);
  return good.length === got.length && timingSafeEqual(good, got);
}
