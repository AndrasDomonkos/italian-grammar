import { headers } from 'next/headers';
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import type { AppProgress } from '@/content/types';

export async function GET() {
  const h = await headers();
  const username = h.get('x-username');
  if (!username) return NextResponse.json({ lessons: {} });

  try {
    const data = await kv.get<AppProgress>(`progress:${username}`);
    return NextResponse.json(data ?? { lessons: {} });
  } catch {
    return NextResponse.json({ lessons: {} });
  }
}

export async function POST(req: Request) {
  const h = await headers();
  const username = h.get('x-username');
  if (!username) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json() as AppProgress;
    await kv.set(`progress:${username}`, body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Storage unavailable' }, { status: 503 });
  }
}
