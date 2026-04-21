'use client';

import Link from 'next/link';
import type { Lesson, ExerciseResult } from '@/content/types';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, RotateCcw, Home, Trophy } from 'lucide-react';

interface Props {
  lesson: Lesson;
  results: ExerciseResult[];
  onRetryAll: () => void;
  onRetryWrong: () => void;
}

export function LessonSummary({ lesson, results, onRetryAll, onRetryWrong }: Props) {
  const total = results.length;
  const correct = results.filter((r) => r.correct).length;
  const score = Math.round((correct / total) * 100);
  const wrong = results.filter((r) => !r.correct);

  const grade =
    score === 100
      ? { label: 'Perfect!', color: 'text-green-600', emoji: '🏆' }
      : score >= 80
        ? { label: 'Great work!', color: 'text-blue-600', emoji: '⭐' }
        : score >= 60
          ? { label: 'Good effort!', color: 'text-yellow-600', emoji: '👍' }
          : { label: 'Keep practising!', color: 'text-orange-600', emoji: '💪' };

  return (
    <div className="space-y-6 max-w-lg mx-auto text-center">
      <div className="space-y-2">
        <div className="text-5xl">{grade.emoji}</div>
        <h2 className={`text-2xl font-bold ${grade.color}`}>{grade.label}</h2>
        <p className="text-muted-foreground">You completed {lesson.title}</p>
      </div>

      <div className="rounded-xl border bg-card p-6 space-y-4 text-left">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Score</span>
          <span className="text-2xl font-bold">
            {correct} / {total}
          </span>
        </div>
        <Progress value={score} className="h-3" />
        <p className="text-center text-muted-foreground text-sm">{score}%</p>
      </div>

      {/* Exercise breakdown */}
      <div className="rounded-xl border bg-card p-4 text-left space-y-2">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Exercise Breakdown
        </p>
        {results.map((r, i) => {
          const ex = lesson.exercises[i];
          return (
            <div key={r.exerciseId} className="flex items-start gap-2 text-sm">
              {r.correct ? (
                <CheckCircle className="size-4 text-green-500 mt-0.5 shrink-0" />
              ) : (
                <XCircle className="size-4 text-red-500 mt-0.5 shrink-0" />
              )}
              <span className="text-muted-foreground">
                #{i + 1}{' '}
                <span className="capitalize text-xs px-1.5 py-0.5 rounded bg-muted mr-1">
                  {ex?.type ?? ''}
                </span>
                {r.correct ? 'Correct' : 'Incorrect'}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        {wrong.length > 0 && (
          <Button onClick={onRetryWrong} className="w-full gap-2">
            <RotateCcw className="size-4" />
            Retry Wrong Answers ({wrong.length})
          </Button>
        )}
        <Button variant="outline" onClick={onRetryAll} className="w-full gap-2">
          <RotateCcw className="size-4" />
          Retry All Exercises
        </Button>
        <Link href={`/${lesson.level}`} className={cn(buttonVariants({ variant: 'ghost' }), 'w-full gap-2')}>
          <Home className="size-4" />
          Back to {lesson.level.toUpperCase()} Lessons
        </Link>
      </div>
    </div>
  );
}
