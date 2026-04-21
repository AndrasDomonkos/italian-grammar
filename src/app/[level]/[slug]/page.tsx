import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLesson } from '@/content';
import type { Level } from '@/content/types';
import { LessonClient } from './LessonClient';

interface Props {
  params: Promise<{ level: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, slug } = await params;
  const lesson = getLesson(level as Level, slug);
  return { title: lesson ? `${lesson.title} — Italian Grammar` : 'Lesson' };
}

export default async function LessonPage({ params }: Props) {
  const { level, slug } = await params;
  const lesson = getLesson(level as Level, slug);
  if (!lesson) notFound();
  return <LessonClient lesson={lesson} />;
}
