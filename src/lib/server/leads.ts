import 'server-only';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export interface StoredLead {
  id: string;
  createdAt: string;
  fullName: string;
  mobile: string;
  email?: string;
  interests: string[];
  destination?: string;
  source: string;
  /** Everything else the form sent (age, city, budget...). */
  details: Record<string, string>;
  emailed: boolean;
}

const KEY = 'leads:211overseas';

function redisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return url && token ? { url, token } : null;
}

async function redis(command: (string | number)[]) {
  const cfg = redisConfig()!;
  const res = await fetch(cfg.url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${cfg.token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Lead store error ${res.status}`);
  return (await res.json()).result;
}

// Local fallback. On Vercel only /tmp is writable (and not durable), so configure Upstash/KV in production.
const FILE = path.join(process.env.VERCEL ? os.tmpdir() : path.join(process.cwd(), '.data'), 'leads.json');

async function readFile(): Promise<StoredLead[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, 'utf8'));
  } catch {
    return [];
  }
}

export function storageMode() {
  return redisConfig() ? 'redis' : 'local-file';
}

export async function saveLead(lead: StoredLead) {
  if (redisConfig()) {
    await redis(['LPUSH', KEY, JSON.stringify(lead)]);
    return;
  }
  const all = await readFile();
  all.unshift(lead);
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(all, null, 2));
}

export async function listLeads(): Promise<StoredLead[]> {
  if (redisConfig()) {
    const rows: string[] = (await redis(['LRANGE', KEY, 0, 4999])) ?? [];
    return rows.map((r) => JSON.parse(r));
  }
  return readFile();
}
