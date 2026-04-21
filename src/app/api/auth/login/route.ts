import { compare } from 'bcryptjs';
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export async function POST(req: Request) {
  const { username, password } = await req.json() as { username: string; password: string };

  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
  }

  const user = await kv.get<{ passwordHash: string }>(`user:${username}`);
  if (!user) {
    return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
  }

  const ok = await compare(password, user.passwordHash);
  if (!ok) {
    return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
  }

  const token = await signToken(username);
  const res = NextResponse.json({ ok: true, username });
  res.cookies.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  });
  return res;
}
