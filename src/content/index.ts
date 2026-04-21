import type { Level, Lesson } from './types';
import { a1Lessons } from './a1';
import { a2Lessons } from './a2';
import { b1Lessons } from './b1';

export const allLessons: Record<Level, Lesson[]> = {
  a1: a1Lessons,
  a2: a2Lessons,
  b1: b1Lessons,
};

export function getLessonsByLevel(level: Level): Lesson[] {
  return allLessons[level] ?? [];
}

export function getLesson(level: Level, slug: string): Lesson | undefined {
  return allLessons[level]?.find((l) => l.slug === slug);
}

export type { Level, Lesson };
