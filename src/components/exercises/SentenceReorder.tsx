'use client';

import { useState, useMemo } from 'react';
import type { ReorderExercise } from '@/content/types';
import { FeedbackPanel } from './FeedbackPanel';
import { Button } from '@/components/ui/button';
import { cn, shuffle } from '@/lib/utils';

interface Props {
  exercise: ReorderExercise;
  onResult: (correct: boolean) => void;
}

export function SentenceReorder({ exercise, onResult }: Props) {
  const shuffledWords = useMemo(
    () => shuffle(exercise.words),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercise.id],
  );

  const [bank, setBank] = useState<string[]>(shuffledWords);
  const [sentence, setSentence] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  function addWord(idx: number) {
    if (submitted) return;
    const word = bank[idx];
    setSentence((s) => [...s, word]);
    setBank((b) => b.filter((_, i) => i !== idx));
  }

  function removeWord(idx: number) {
    if (submitted) return;
    const word = sentence[idx];
    setBank((b) => [...b, word]);
    setSentence((s) => s.filter((_, i) => i !== idx));
  }

  function handleSubmit() {
    const ok = sentence.join(' ') === exercise.answer.join(' ');
    setCorrect(ok);
    setSubmitted(true);
    onResult(ok);
  }

  function handleReset() {
    setBank(shuffledWords);
    setSentence([]);
    setSubmitted(false);
    setCorrect(false);
  }

  const allUsed = bank.length === 0;

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{exercise.instruction}</p>

      {/* Word bank */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
          Word Bank
        </p>
        <div className="flex flex-wrap gap-2 min-h-[40px] p-2 rounded-lg border-2 border-dashed border-border">
          {bank.map((word, i) => (
            <button
              key={`${word}-${i}`}
              onClick={() => addWord(i)}
              disabled={submitted}
              className={cn(
                'px-3 py-1 rounded-md border text-sm font-medium transition-colors',
                'border-primary/40 bg-primary/5 hover:bg-primary/10 hover:border-primary',
                submitted && 'opacity-60 cursor-default',
              )}
            >
              {word}
            </button>
          ))}
          {bank.length === 0 && !submitted && (
            <span className="text-xs text-muted-foreground self-center">All words used</span>
          )}
        </div>
      </div>

      {/* Sentence construction */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
          Your Sentence
        </p>
        <div
          className={cn(
            'flex flex-wrap gap-2 min-h-[48px] p-2 rounded-lg border-2',
            submitted
              ? correct
                ? 'border-green-400 bg-green-50 dark:bg-green-950/20'
                : 'border-red-400 bg-red-50 dark:bg-red-950/20'
              : 'border-border',
          )}
        >
          {sentence.map((word, i) => (
            <button
              key={`${word}-${i}`}
              onClick={() => removeWord(i)}
              disabled={submitted}
              className={cn(
                'px-3 py-1 rounded-md border text-sm font-medium transition-colors',
                !submitted && 'border-blue-400 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/20',
                submitted && correct && 'border-green-400 bg-green-100 dark:bg-green-900/30',
                submitted && !correct && 'border-red-300 bg-red-100 dark:bg-red-900/30',
              )}
            >
              {word}
            </button>
          ))}
          {sentence.length === 0 && (
            <span className="text-xs text-muted-foreground self-center">
              Click words above to build the sentence
            </span>
          )}
        </div>
      </div>

      {!submitted && (
        <div className="flex gap-2">
          <Button onClick={handleSubmit} disabled={!allUsed}>
            Check Sentence
          </Button>
          {sentence.length > 0 && (
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          )}
        </div>
      )}

      {submitted && (
        <div className="space-y-2">
          {submitted && (
            <Button variant="outline" size="sm" onClick={handleReset}>
              Try Again
            </Button>
          )}
          <FeedbackPanel
            correct={correct}
            message={correct ? exercise.feedback.correct : 'Not quite right.'}
            explanation={exercise.feedback.explanation}
            correctAnswer={exercise.answer.join(' ')}
            showCorrectAnswer={!correct}
          />
        </div>
      )}
    </div>
  );
}
