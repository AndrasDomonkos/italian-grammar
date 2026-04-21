import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const h = await headers();
  const username = h.get('x-username');
  if (!username) return NextResponse.json({ username: null });
  return NextResponse.json({ username });
}
