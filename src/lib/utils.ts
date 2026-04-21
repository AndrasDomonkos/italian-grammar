import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Normalise an answer string for comparison: trim, lowercase, unify apostrophes. */
export function normalizeAnswer(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[''`]/g, "'") // unify apostrophe variants
    .replace(/[àáâä]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[.,!?;:]+$/, '') // strip trailing punctuation
}

/** Check if a user answer matches any accepted answer. */
export function checkAnswer(userAnswer: string, accepted: string | string[]): boolean {
  const norm = normalizeAnswer(userAnswer)
  const targets = Array.isArray(accepted) ? accepted : [accepted]
  return targets.some(t => normalizeAnswer(t) === norm)
}

/** Shuffle an array (Fisher–Yates). */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
