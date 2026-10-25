import type { Metadata } from 'next';
import { adminConfigured, isAdmin } from '@/lib/server/adminAuth';
import { listLeads, storageMode } from '@/lib/server/leads';
import { AdminLoginForm } from './AdminLoginForm';

export const metadata: Metadata = { title: 'Leads admin', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;

  if (!adminConfigured()) {
    return (
      <section className="pt-36 pb-24">
        <div className="max-w-xl mx-auto px-6">
          <h1 className="font-serif text-3xl font-bold text-[#1B1C1A]">Admin not configured</h1>
          <p className="mt-4 text-[#41484B]">Set the <code>ADMIN_PASSWORD</code> environment variable (see <code>.env.example</code>) and redeploy.</p>
        </div>
      </section>
    );
  }

  if (!(await isAdmin())) {
    return <AdminLoginForm error={error} />;
  }

  const leads = await listLeads();
  const mode = storageMode();

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#1B1C1A]">Leads ({leads.length})</h1>
            <p className="mt-1 text-sm text-[#41484B]">Newest first. Storage: {mode === 'redis' ? 'Redis / KV' : 'local file (development only)'}.</p>
          </div>
          <div className="flex gap-3">
            <a href="/api/admin/export" className="border border-[#1B1C1A] px-5 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#1B1C1A] hover:text-white transition-colors">Export CSV</a>
            <form method="post" action="/api/admin/logout"><button className="px-5 py-3 text-xs uppercase tracking-widest font-medium text-[#41484B] hover:text-black">Sign out</button></form>
          </div>
        </div>

        {mode !== 'redis' && (
          <p className="mt-6 border border-[#A33E11] bg-[#A33E11]/10 p-4 text-sm text-[#1B1C1A]">
            No database configured. Leads are saved to a temporary file and can disappear on Vercel. Set <code>UPSTASH_REDIS_REST_URL</code> and <code>UPSTASH_REDIS_REST_TOKEN</code> to keep them permanently.
          </p>
        )}

        <div className="mt-8 overflow-x-auto border border-[#E6DDCC] bg-white">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="bg-[#F3EBDD] text-xs uppercase tracking-wider text-[#41484B]">
              <tr>{['Received', 'Name', 'Mobile', 'Email', 'Interest', 'Destination', 'Source', 'Emailed'].map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody>
              {leads.length === 0 && <tr><td colSpan={8} className="px-4 py-10 text-center text-[#41484B]">No leads yet.</td></tr>}
              {leads.map((l) => (
                <tr key={l.id} className="border-t border-[#E6DDCC] align-top">
                  <td className="px-4 py-3 whitespace-nowrap">{new Date(l.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                  <td className="px-4 py-3 font-medium">{l.fullName}</td>
                  <td className="px-4 py-3"><a href={`tel:${l.mobile}`} className="text-[#A33E11]">{l.mobile}</a></td>
                  <td className="px-4 py-3">{l.email || '-'}</td>
                  <td className="px-4 py-3">{l.interests.join(', ') || '-'}</td>
                  <td className="px-4 py-3">{l.destination || '-'}</td>
                  <td className="px-4 py-3 text-xs text-[#41484B]">{l.source}</td>
                  <td className="px-4 py-3">{l.emailed ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
