import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('session')?.value;
  const username = token ? await verifyToken(token) : null;

  const requestHeaders = new Headers(req.headers);
  if (username) requestHeaders.set('x-username', username);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
