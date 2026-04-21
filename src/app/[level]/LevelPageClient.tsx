'use client';

import Link from 'next/link';
import type { Lesson, Level } from '@/content/types';
import { useProgress } from '@/hooks/useProgress';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, CheckCircle, Clock, Circle, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  level: Level;
  lessons: Lesson[];
  meta: { label: string; description: string; color: string };
}

export function LevelPageClient({ level, lessons, meta }: Props) {
  const { getLessonProgress } = useProgress();

  const progressList = lessons.map((l) => getLessonProgress(level, l.slug));
  const completed = progressList.filter((p) => p?.status === 'completed').length;
  const levelProgress = lessons.length > 0 ? Math.round((completed / lessons.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
            <ChevronLeft className="size-5" />
          </Link>
          <p className="font-semibold flex-1">{meta.label}</p>
          <Badge variant="outline">{level.toUpperCase()}</Badge>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Level header */}
        <div className="space-y-3">
          <p className="text-muted-foreground text-sm">{meta.description}</p>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{completed} / {lessons.length} lessons completed</span>
              <span>{levelProgress}%</span>
            </div>
            <Progress value={levelProgress} className="h-2" />
          </div>
        </div>

        {/* Lesson list */}
        {lessons.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <Lock className="size-10 mx-auto text-muted-foreground/40" />
            <p className="font-semibold text-muted-foreground">Coming Soon</p>
            <p className="text-sm text-muted-foreground">
              {level.toUpperCase()} lessons will be added in a future update.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {lessons
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((lesson) => {
                const p = getLessonProgress(level, lesson.slug);
                const status = p?.status ?? 'not-started';
                const score = p?.score ?? 0;

                return (
                  <Link
                    key={lesson.slug}
                    href={`/${level}/${lesson.slug}`}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-accent transition-colors',
                    )}
                  >
                    {/* Status icon */}
                    <div className="shrink-0">
                      {status === 'completed' ? (
                        <CheckCircle className="size-6 text-green-500" />
                      ) : status === 'in-progress' ? (
                        <Clock className="size-6 text-yellow-500" />
                      ) : (
                        <Circle className="size-6 text-muted-foreground/40" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">#{lesson.order}</span>
                        <span className="font-medium truncate">{lesson.title}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">
                          {lesson.exercises.length} exercises
                        </span>
                        {status === 'completed' && (
                          <Badge
                            variant="secondary"
                            className={cn(
                              'text-xs px-1.5',
                              score === 100 && 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
                              score >= 80 && score < 100 && 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                              score < 80 && 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
                            )}
                          >
                            {score}%
                          </Badge>
                        )}
                        {status === 'in-progress' && (
                          <Badge variant="secondary" className="text-xs px-1.5 bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                            In Progress
                          </Badge>
                        )}
                      </div>
                    </div>

                    <ChevronRight className="size-5 text-muted-foreground shrink-0" />
                  </Link>
                );
              })}
          </div>
        )}
      </main>
    </div>
  );
}
