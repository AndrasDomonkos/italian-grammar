import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';
import { getRedis } from '@/lib/redis';

export async function POST(req: Request) {
  const { username, password } = await req.json() as { username: string; password: string };

  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
  }
  if (username.length < 3) {
    return NextResponse.json({ error: 'Username must be at least 3 characters.' }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: 'Password must be at least 6 characters.' }, { status: 400 });
  }

  try {
    const redis = getRedis();
    const existing = await redis.get(`user:${username}`);
    if (existing) {
      return NextResponse.json({ error: 'Username is already taken.' }, { status: 409 });
    }

    const passwordHash = await hash(password, 10);
    await redis.set(`user:${username}`, { passwordHash });

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
  } catch {
    return NextResponse.json({ error: 'Storage unavailable. Please try again later.' }, { status: 503 });
  }
}
