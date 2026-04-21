import { compare } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';
import { getRedis } from '@/lib/redis';

export async function POST(req: Request) {
  const { username, password, rememberMe } = await req.json() as { username: string; password: string; rememberMe?: boolean };

  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
  }

  try {
    const redis = getRedis();
    const user = await redis.get<{ passwordHash: string }>(`user:${username}`);
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
      ...(rememberMe ? { maxAge: 60 * 60 * 24 * 30 } : {}),
      path: '/',
    });
    return res;
  } catch {
    return NextResponse.json({ error: 'Storage unavailable. Please try again later.' }, { status: 503 });
  }
}
