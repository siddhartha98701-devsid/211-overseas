import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/server/adminAuth';
import { listLeads } from '@/lib/server/leads';

const cell = (v: unknown) => {
  let s = String(v ?? '');
  if (/^[=+\-@]/.test(s)) s = `'${s}`; // neutralise spreadsheet formulas
  return `"${s.replace(/"/g, '""')}"`;
};

export async function GET() {
  if (!(await isAdmin())) return new NextResponse('Unauthorized', { status: 401 });
  const leads = await listLeads();
  const head = ['ID', 'Received', 'Name', 'Mobile', 'Email', 'Interest', 'Destination', 'Source', 'Emailed', 'Details'];
  const rows = leads.map((l) =>
    [l.id, l.createdAt, l.fullName, l.mobile, l.email, l.interests.join('; '), l.destination, l.source, l.emailed ? 'yes' : 'no',
      Object.entries(l.details).map(([k, v]) => `${k}: ${v}`).join('; ')].map(cell).join(','),
  );
  return new NextResponse([head.map(cell).join(','), ...rows].join('\n'), {
    headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="leads.csv"' },
  });
}
