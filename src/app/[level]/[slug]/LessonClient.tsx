'use client';

import { useState, useEffect } from 'react';
import type { Lesson, ExerciseResult } from '@/content/types';
import { useProgress } from '@/hooks/useProgress';
import { ExerciseRenderer } from '@/components/ExerciseRenderer';
import { LessonExplanation } from '@/components/LessonExplanation';
import { LessonSummary } from '@/components/LessonSummary';
import { Button, buttonVariants } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, BookOpen, Pencil, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Phase = 'explanation' | 'exercises' | 'summary';

interface Props {
  lesson: Lesson;
}

export function LessonClient({ lesson }: Props) {
  const { getLessonProgress, updateLessonProgress } = useProgress();
  const [phase, setPhase] = useState<Phase>('explanation');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState<ExerciseResult[]>([]);
  const [exerciseKeys, setExerciseKeys] = useState<number[]>(
    lesson.exercises.map((_, i) => i),
  );
  // exerciseQueue: indices into lesson.exercises to show
  const [queue, setQueue] = useState<number[]>(lesson.exercises.map((_, i) => i));

  const existingProgress = getLessonProgress(lesson.level, lesson.slug);

  // If lesson was already completed, start on summary with old results
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized && existingProgress?.status === 'completed') {
      setResults(
        existingProgress.results.map((r) => ({
          exerciseId: r.exerciseId,
          correct: r.correct,
        })),
      );
      setPhase('summary');
      setInitialized(true);
    } else if (!initialized) {
      setInitialized(true);
    }
  }, [existingProgress, initialized]);

  const currentExerciseIdx = queue[currentIdx];
  const currentExercise = lesson.exercises[currentExerciseIdx];
  const total = queue.length;
  const progress = (currentIdx / total) * 100;

  function handleResult(correct: boolean) {
    setResults((prev) => [
      ...prev,
      { exerciseId: currentExercise.id, correct },
    ]);
  }

  function handleNext() {
    if (currentIdx + 1 >= total) {
      // All done — compute final results and save
      finishLesson();
    } else {
      setCurrentIdx((i) => i + 1);
    }
  }

  function finishLesson() {
    const allResults = results.length === total ? results : results;
    const correct = allResults.filter((r) => r.correct).length;
    updateLessonProgress({
      slug: lesson.slug,
      level: lesson.level,
      status: 'completed',
      score: Math.round((correct / total) * 100),
      total,
      results: allResults,
      completedAt: new Date().toISOString(),
    });
    setPhase('summary');
  }

  function startExercises() {
    setPhase('exercises');
    setCurrentIdx(0);
    setResults([]);
  }

  function retryAll() {
    const newQueue = lesson.exercises.map((_, i) => i);
    setQueue(newQueue);
    setExerciseKeys(lesson.exercises.map((_, i) => Date.now() + i));
    setResults([]);
    setCurrentIdx(0);
    setPhase('exercises');
    // Mark as in-progress
    updateLessonProgress({
      slug: lesson.slug,
      level: lesson.level,
      status: 'in-progress',
      score: 0,
      total: lesson.exercises.length,
      results: [],
    });
  }

  function retryWrong() {
    const wrongIds = new Set(results.filter((r) => !r.correct).map((r) => r.exerciseId));
    const wrongQueue = lesson.exercises
      .map((ex, i) => ({ ex, i }))
      .filter(({ ex }) => wrongIds.has(ex.id))
      .map(({ i }) => i);
    setQueue(wrongQueue);
    setExerciseKeys((prev) => prev.map((k) => k + Date.now()));
    setResults([]);
    setCurrentIdx(0);
    setPhase('exercises');
    updateLessonProgress({
      slug: lesson.slug,
      level: lesson.level,
      status: 'in-progress',
      score: 0,
      total: wrongQueue.length,
      results: [],
    });
  }

  const resultForCurrent = results[currentIdx];
  const hasAnswered = resultForCurrent !== undefined;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href={`/${lesson.level}`} className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
            <ChevronLeft className="size-5" />
          </Link>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {lesson.level.toUpperCase()} · Lesson {lesson.order}
            </p>
            <p className="font-semibold truncate">{lesson.title}</p>
          </div>
          <Badge variant="outline">{lesson.level.toUpperCase()}</Badge>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Phase tabs */}
        {phase !== 'summary' && (
          <div className="flex gap-1 bg-muted rounded-lg p-1 text-sm">
            <button
              onClick={() => setPhase('explanation')}
              className={cn(
                'flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-colors',
                phase === 'explanation' ? 'bg-background shadow font-medium' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <BookOpen className="size-4" />
              Explanation
            </button>
            <button
              onClick={() => {
                if (phase === 'explanation') startExercises();
                else setPhase('exercises');
              }}
              className={cn(
                'flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-colors',
                phase === 'exercises' ? 'bg-background shadow font-medium' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Pencil className="size-4" />
              Exercises
            </button>
          </div>
        )}

        {/* EXPLANATION PHASE */}
        {phase === 'explanation' && (
          <div className="space-y-6">
            <LessonExplanation explanation={lesson.explanation} />
            <Button onClick={startExercises} size="lg" className="w-full gap-2">
              <Pencil className="size-4" />
              Start {lesson.exercises.length} Exercises
            </Button>
          </div>
        )}

        {/* EXERCISE PHASE */}
        {phase === 'exercises' && currentExercise && (
          <div className="space-y-6">
            {/* Progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Exercise {currentIdx + 1} of {total}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Exercise type badge */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="capitalize">
                {currentExercise.type.replace('-', ' ')}
              </Badge>
            </div>

            {/* Exercise — key forces re-mount on retry */}
            <div key={`${currentExercise.id}-${exerciseKeys[currentExerciseIdx]}`}>
              <ExerciseRenderer
                exercise={currentExercise}
                onResult={handleResult}
              />
            </div>

            {/* Navigation */}
            {hasAnswered && (
              <Button onClick={handleNext} className="w-full gap-2" size="lg">
                {currentIdx + 1 >= total ? (
                  <>
                    <BarChart3 className="size-4" /> See Results
                  </>
                ) : (
                  <>
                    Next Exercise <ChevronRight className="size-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        )}

        {/* SUMMARY PHASE */}
        {phase === 'summary' && (
          <LessonSummary
            lesson={lesson}
            results={results.length ? results : (existingProgress?.results ?? [])}
            onRetryAll={retryAll}
            onRetryWrong={retryWrong}
          />
        )}
      </main>
    </div>
  );
}
