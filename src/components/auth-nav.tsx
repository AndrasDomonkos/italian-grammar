'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function AuthNav() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((d: { username: string | null }) => {
        setUsername(d.username);
        setReady(true);
      })
      .catch(() => setReady(true));
  }, []);

  async function handleSignOut() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.refresh();
    setUsername(null);
  }

  if (!ready) return null;

  if (username) {
    return (
      <div className="flex items-center gap-3 text-sm">
        <span className="text-muted-foreground">
          Signed in as <span className="font-medium text-foreground">{username}</span>
        </span>
        <button
          onClick={handleSignOut}
          className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-sm">
      <Link href="/sign-in" className="text-muted-foreground hover:text-foreground transition-colors">
        Sign in
      </Link>
      <Link
        href="/sign-up"
        className="rounded-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Register
      </Link>
    </div>
  );
}
