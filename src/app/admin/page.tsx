import type { Metadata } from 'next';
import { adminConfigured, isAdmin } from '@/lib/server/adminAuth';
import { listLeads, storageMode } from '@/lib/server/leads';

export const metadata: Metadata = { title: 'Leads admin', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

const INPUT = 'w-full px-4 py-3 text-sm bg-white border border-[#E6DDCC] focus:outline-none focus:border-[#B88740]';

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;

  if (!adminConfigured()) {
    return (
      <section className="pt-36 pb-24">
        <div className="max-w-xl mx-auto px-6">
          <h1 className="font-serif text-3xl font-bold text-[#2A2A2A]">Admin not configured</h1>
          <p className="mt-4 text-[#57514A]">Set the <code>ADMIN_PASSWORD</code> environment variable (see <code>.env.example</code>) and redeploy.</p>
        </div>
      </section>
    );
  }

  if (!(await isAdmin())) {
    return (
      <section className="pt-36 pb-24">
        <div className="max-w-sm mx-auto px-6">
          <h1 className="font-serif text-3xl font-bold text-[#2A2A2A]">Leads admin</h1>
          <form method="post" action="/api/admin/login" className="mt-6 space-y-4">
            <label className="block text-xs uppercase tracking-wider font-medium" htmlFor="pw">Password</label>
            <input id="pw" name="password" type="password" required autoComplete="current-password" className={INPUT} />
            {error && <p role="alert" className="text-xs text-red-600">Incorrect password.</p>}
            <button className="w-full bg-[#94682B] hover:bg-[#7A5622] text-white text-xs uppercase tracking-widest font-medium py-3.5">Sign in</button>
          </form>
        </div>
      </section>
    );
  }

  const leads = await listLeads();
  const mode = storageMode();

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#2A2A2A]">Leads ({leads.length})</h1>
            <p className="mt-1 text-sm text-[#57514A]">Newest first. Storage: {mode === 'redis' ? 'Redis / KV' : 'local file (development only)'}.</p>
          </div>
          <div className="flex gap-3">
            <a href="/api/admin/export" className="border border-[#2A2A2A] px-5 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#2A2A2A] hover:text-white">Export CSV</a>
            <form method="post" action="/api/admin/logout"><button className="px-5 py-3 text-xs uppercase tracking-widest font-medium text-[#57514A] hover:text-black">Sign out</button></form>
          </div>
        </div>

        {mode !== 'redis' && (
          <p className="mt-6 border border-[#B88740] bg-[#94682B]/10 p-4 text-sm text-[#2A2A2A]">
            No database configured. Leads are saved to a temporary file and can disappear on Vercel. Set <code>UPSTASH_REDIS_REST_URL</code> and <code>UPSTASH_REDIS_REST_TOKEN</code> to keep them permanently.
          </p>
        )}

        <div className="mt-8 overflow-x-auto border border-[#E6DDCC] bg-white">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="bg-[#F3EBDD] text-xs uppercase tracking-wider text-[#57514A]">
              <tr>{['Received', 'Name', 'Mobile', 'Email', 'Interest', 'Destination', 'Source', 'Emailed'].map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody>
              {leads.length === 0 && <tr><td colSpan={8} className="px-4 py-10 text-center text-[#57514A]">No leads yet.</td></tr>}
              {leads.map((l) => (
                <tr key={l.id} className="border-t border-[#E6DDCC] align-top">
                  <td className="px-4 py-3 whitespace-nowrap">{new Date(l.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                  <td className="px-4 py-3 font-medium">{l.fullName}</td>
                  <td className="px-4 py-3"><a href={`tel:${l.mobile}`} className="text-[#8A6020]">{l.mobile}</a></td>
                  <td className="px-4 py-3">{l.email || '-'}</td>
                  <td className="px-4 py-3">{l.interests.join(', ') || '-'}</td>
                  <td className="px-4 py-3">{l.destination || '-'}</td>
                  <td className="px-4 py-3 text-xs text-[#57514A]">{l.source}</td>
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
