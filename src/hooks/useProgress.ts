'use client';

import { useState, useEffect, useCallback } from 'react';
import type { AppProgress, LessonProgress, Level } from '@/content/types';

const STORAGE_KEY = 'italian-grammar-progress';

function load(): AppProgress {
  if (typeof window === 'undefined') return { lessons: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AppProgress) : { lessons: {} };
  } catch {
    return { lessons: {} };
  }
}

function save(p: AppProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

async function pushToServer(p: AppProgress): Promise<void> {
  try {
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(p),
    });
  } catch {
    // silently fail — localStorage is the source of truth
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<AppProgress>({ lessons: {} });

  useEffect(() => {
    const local = load();
    setProgress(local);

    // Merge server progress (server wins for lessons that exist on both)
    fetch('/api/progress')
      .then((r) => (r.ok ? r.json() : null))
      .then((server: AppProgress | null) => {
        if (!server || Object.keys(server.lessons).length === 0) return;
        const merged: AppProgress = { lessons: { ...local.lessons, ...server.lessons } };
        save(merged);
        setProgress(merged);
      })
      .catch(() => {/* offline or unauthenticated — use localStorage */});
  }, []);

  const getLessonProgress = useCallback(
    (level: Level, slug: string): LessonProgress | undefined =>
      progress.lessons[`${level}/${slug}`],
    [progress],
  );

  const updateLessonProgress = useCallback(
    (lp: LessonProgress) => {
      const key = `${lp.level}/${lp.slug}`;
      const next: AppProgress = { lessons: { ...progress.lessons, [key]: lp } };
      setProgress(next);
      save(next);
      void pushToServer(next);
    },
    [progress],
  );

  const resetLessonProgress = useCallback(
    (level: Level, slug: string) => {
      const key = `${level}/${slug}`;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [key]: _removed, ...rest } = progress.lessons;
      const next: AppProgress = { lessons: rest };
      setProgress(next);
      save(next);
      void pushToServer(next);
    },
    [progress],
  );

  return { progress, getLessonProgress, updateLessonProgress, resetLessonProgress };
}
