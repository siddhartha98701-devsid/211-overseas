import 'server-only';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getDatabase, ref, set, get, Database } from 'firebase/database';
import type { StoredLead } from './leads';

export interface FirebaseWebConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}

export function getFirebaseConfig(): FirebaseWebConfig | null {
  const apiKey = process.env.FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const databaseURL =
    process.env.FIREBASE_DATABASE_URL ||
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ||
    (projectId ? `https://${projectId}-default-rtdb.firebaseio.com` : undefined);

  if (!databaseURL && !projectId && !apiKey) {
    return null;
  }

  return {
    apiKey,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL,
    projectId,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID || process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
}

export function isFirebaseConfigured(): boolean {
  const cfg = getFirebaseConfig();
  return Boolean(cfg && (cfg.databaseURL || (cfg.projectId && cfg.apiKey)));
}

let cachedApp: FirebaseApp | null = null;
let cachedDb: Database | null = null;

function getFirebaseDb(): { app: FirebaseApp; db: Database } | null {
  const config = getFirebaseConfig();
  if (!config) return null;

  try {
    const app = getApps().length > 0 ? getApp() : initializeApp(config);
    cachedApp = app;
    if (!cachedDb) {
      cachedDb = getDatabase(app);
    }
    return { app, db: cachedDb };
  } catch (err) {
    console.error('[Firebase] Failed to initialize Firebase App/Database:', err);
    return null;
  }
}

/**
 * Saves a lead into Firebase Realtime Database at `/leads/${lead.id}`.
 * Also provides a lightweight direct REST fallback to guarantee zero-latency
 * delivery on serverless environments even when WebSockets are disabled.
 */
export async function saveLeadToFirebase(lead: StoredLead): Promise<boolean> {
  const config = getFirebaseConfig();
  if (!config || !config.databaseURL) {
    return false;
  }

  const cleanDatabaseUrl = config.databaseURL.replace(/\/+$/, '');

  // 1. Direct REST write to Firebase Realtime Database
  // This is ultra-reliable on Vercel/serverless runtimes
  try {
    const authQuery = process.env.FIREBASE_DATABASE_SECRET
      ? `?auth=${encodeURIComponent(process.env.FIREBASE_DATABASE_SECRET)}`
      : '';
    const endpoint = `${cleanDatabaseUrl}/leads/${encodeURIComponent(lead.id)}.json${authQuery}`;

    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      cache: 'no-store',
    });

    if (res.ok) {
      console.log(`[Firebase RTDB] Lead ${lead.id} successfully written to Realtime Database via REST`);
      return true;
    }
    console.warn(`[Firebase RTDB] REST write returned status ${res.status}. Attempting SDK write...`);
  } catch (restErr) {
    console.warn('[Firebase RTDB] REST write error, trying Firebase SDK:', restErr);
  }

  // 2. Firebase SDK fallback
  const instance = getFirebaseDb();
  if (!instance) return false;

  try {
    const leadRef = ref(instance.db, `leads/${lead.id}`);
    await set(leadRef, lead);
    console.log(`[Firebase RTDB] Lead ${lead.id} successfully written to Realtime Database via SDK`);
    return true;
  } catch (err) {
    console.error('[Firebase RTDB] Failed to save lead via SDK:', err);
    return false;
  }
}

/**
 * Fetches leads from Firebase Realtime Database at `/leads`.
 */
export async function listLeadsFromFirebase(): Promise<StoredLead[]> {
  const config = getFirebaseConfig();
  if (!config || !config.databaseURL) {
    return [];
  }

  const cleanDatabaseUrl = config.databaseURL.replace(/\/+$/, '');

  // 1. REST read
  try {
    const authQuery = process.env.FIREBASE_DATABASE_SECRET
      ? `?auth=${encodeURIComponent(process.env.FIREBASE_DATABASE_SECRET)}`
      : '';
    const endpoint = `${cleanDatabaseUrl}/leads.json${authQuery}`;

    const res = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    if (res.ok) {
      const data = await res.json();
      if (!data) return [];
      const items: StoredLead[] = Object.values(data);
      return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  } catch (restErr) {
    console.warn('[Firebase RTDB] REST read error, trying Firebase SDK:', restErr);
  }

  // 2. SDK read fallback
  const instance = getFirebaseDb();
  if (!instance) return [];

  try {
    const leadsRef = ref(instance.db, 'leads');
    const snapshot = await get(leadsRef);
    if (!snapshot.exists()) return [];

    const val = snapshot.val();
    const items: StoredLead[] = Object.values(val);
    return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (err) {
    console.error('[Firebase RTDB] Failed to list leads from Firebase:', err);
    return [];
  }
}
