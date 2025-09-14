import { NextResponse } from 'next/server';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:8000';

type Health = { status: 'ok' };
type DbPing = { db: 'ok' };

export async function GET() {
  try {
    const [h, d] = await Promise.all([
      fetch(`${API_BASE}/health`, { cache: 'no-store' }),
      fetch(`${API_BASE}/db-ping`, { cache: 'no-store' }),
    ]);
    const health = (await h.json()) as Health;
    const db = (await d.json()) as DbPing;
    return NextResponse.json({ health, db });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'proxy failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
