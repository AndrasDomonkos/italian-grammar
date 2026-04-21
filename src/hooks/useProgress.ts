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

export function useProgress() {
  const [progress, setProgress] = useState<AppProgress>({ lessons: {} });

  useEffect(() => {
    setProgress(load());
  }, []);

  const getLessonProgress = useCallback(
    (level: Level, slug: string): LessonProgress | undefined =>
      progress.lessons[`${level}/${slug}`],
    [progress],
  );

  const updateLessonProgress = useCallback(
    (lp: LessonProgress) => {
      const key = `${lp.level}/${lp.slug}`;
      const next: AppProgress = {
        lessons: { ...progress.lessons, [key]: lp },
      };
      setProgress(next);
      save(next);
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
    },
    [progress],
  );

  return { progress, getLessonProgress, updateLessonProgress, resetLessonProgress };
}
