import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getLessonsByLevel } from '@/content';
import type { Level } from '@/content/types';
import { LevelPageClient } from './LevelPageClient';

const LEVEL_META: Record<Level, { label: string; description: string; color: string }> = {
  a1: {
    label: 'A1 — Beginner',
    description: 'Master the foundations: articles, present tense, essential verbs, and everyday vocabulary.',
    color: 'text-green-600',
  },
  a2: {
    label: 'A2 — Elementary',
    description: 'Expand into past tenses, pronouns, imperatives, and core structures for real conversation.',
    color: 'text-blue-600',
  },
  b1: {
    label: 'B1 — Intermediate',
    description: 'Tackle the subjunctive, hypotheticals, passive voice, and complex sentence structures.',
    color: 'text-purple-600',
  },
};

const VALID_LEVELS: Level[] = ['a1', 'a2', 'b1'];

interface Props {
  params: Promise<{ level: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level } = await params;
  const meta = LEVEL_META[level as Level];
  return { title: meta ? `${meta.label} — Italian Grammar` : 'Level' };
}

export default async function LevelPage({ params }: Props) {
  const { level } = await params;
  if (!VALID_LEVELS.includes(level as Level)) notFound();

  const lessons = getLessonsByLevel(level as Level);
  const meta = LEVEL_META[level as Level];

  return <LevelPageClient level={level as Level} lessons={lessons} meta={meta} />;
}
