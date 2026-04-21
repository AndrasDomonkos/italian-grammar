'use client';

import { useState, useMemo } from 'react';
import type { MatchExercise } from '@/content/types';
import { shuffle } from '@/lib/utils';
import { FeedbackPanel } from './FeedbackPanel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  exercise: MatchExercise;
  onResult: (correct: boolean) => void;
}

type PairMap = Record<string, string>; // left → right

export function MatchPairs({ exercise, onResult }: Props) {
  const shuffledLeft = useMemo(
    () => shuffle(exercise.pairs.map((p) => p.left)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercise.id],
  );
  const shuffledRight = useMemo(
    () => shuffle(exercise.pairs.map((p) => p.right)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercise.id],
  );

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<PairMap>({});
  const [submitted, setSubmitted] = useState(false);
  const [rowCorrect, setRowCorrect] = useState<Record<string, boolean>>({});

  const matchedLefts = Object.keys(matched);
  const matchedRights = Object.values(matched);

  function handleLeftClick(left: string) {
    if (submitted) return;
    if (matchedLefts.includes(left)) {
      // Unselect / remove existing match
      const next = { ...matched };
      delete next[left];
      setMatched(next);
      setSelectedLeft(left);
      return;
    }
    setSelectedLeft(left);
  }

  function handleRightClick(right: string) {
    if (submitted || !selectedLeft) return;
    // If right is already matched, unlink it first
    const existingLeft = Object.entries(matched).find(([, r]) => r === right)?.[0];
    const next = { ...matched };
    if (existingLeft) delete next[existingLeft];
    next[selectedLeft] = right;
    setMatched(next);
    setSelectedLeft(null);
  }

  function handleSubmit() {
    const correctMap = Object.fromEntries(exercise.pairs.map((p) => [p.left, p.right]));
    const results: Record<string, boolean> = {};
    for (const left of shuffledLeft) {
      results[left] = matched[left] === correctMap[left];
    }
    setRowCorrect(results);
    setSubmitted(true);
    onResult(Object.values(results).every(Boolean));
  }

  const allMatched = shuffledLeft.every((l) => matchedLefts.includes(l));

  return (
    <div className="space-y-4">
      <p className="font-medium text-muted-foreground text-sm">{exercise.instruction}</p>
      <p className="text-xs text-muted-foreground">Click a left item, then a right item to match them.</p>

      <div className="grid grid-cols-2 gap-3">
        {/* Left column */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Nouns</p>
          {shuffledLeft.map((left) => {
            const isSelected = selectedLeft === left;
            const isMatched = matchedLefts.includes(left);
            const isCorrect = submitted && rowCorrect[left];
            const isWrong = submitted && !rowCorrect[left];
            return (
              <button
                key={left}
                onClick={() => handleLeftClick(left)}
                disabled={submitted}
                className={cn(
                  'w-full text-left text-sm px-3 py-2 rounded-lg border-2 transition-colors',
                  !submitted && !isSelected && !isMatched && 'border-border hover:border-primary',
                  !submitted && isSelected && 'border-primary bg-primary/5',
                  !submitted && isMatched && !isSelected && 'border-blue-400 bg-blue-50 dark:bg-blue-950/20',
                  isCorrect && 'border-green-500 bg-green-50 dark:bg-green-950/20',
                  isWrong && 'border-red-400 bg-red-50 dark:bg-red-950/20',
                )}
              >
                {left}
              </button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Articles</p>
          {shuffledRight.map((right) => {
            const isMatched = matchedRights.includes(right);
            const matchedBy = Object.entries(matched).find(([, r]) => r === right)?.[0];
            const isCorrect = submitted && matchedBy ? rowCorrect[matchedBy] : false;
            const isWrong = submitted && isMatched && matchedBy ? !rowCorrect[matchedBy] : false;
            return (
              <button
                key={right}
                onClick={() => handleRightClick(right)}
                disabled={submitted || !selectedLeft}
                className={cn(
                  'w-full text-left text-sm px-3 py-2 rounded-lg border-2 transition-colors',
                  !submitted && !isMatched && 'border-border hover:border-primary',
                  !submitted && isMatched && 'border-blue-400 bg-blue-50 dark:bg-blue-950/20',
                  !submitted && selectedLeft && !isMatched && 'border-primary/50',
                  isCorrect && 'border-green-500 bg-green-50 dark:bg-green-950/20',
                  isWrong && 'border-red-400 bg-red-50 dark:bg-red-950/20',
                )}
              >
                <span className="font-bold italic">{right}</span>
                {isMatched && matchedBy && !submitted && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    ← {matchedBy.split(' ')[0]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Show matched pairs summary */}
      {!submitted && allMatched && (
        <div className="text-sm text-muted-foreground space-y-1">
          <p className="font-medium">Your matches:</p>
          {shuffledLeft.map((l) => (
            <p key={l} className="text-xs">
              {l} → <strong>{matched[l]}</strong>
            </p>
          ))}
        </div>
      )}

      {!submitted && (
        <Button onClick={handleSubmit} disabled={!allMatched}>
          Check Matches
        </Button>
      )}

      {submitted && (
        <div className="space-y-2">
          <div className="text-sm space-y-1">
            {shuffledLeft.map((l) => (
              <p key={l} className={rowCorrect[l] ? 'text-green-700 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                {rowCorrect[l] ? '✓' : '✗'} {l} →{' '}
                <strong>{matched[l]}</strong>
                {!rowCorrect[l] && (
                  <span className="text-muted-foreground">
                    {' '}(correct: <em>{exercise.pairs.find((p) => p.left === l)?.right}</em>)
                  </span>
                )}
              </p>
            ))}
          </div>
          <FeedbackPanel
            correct={Object.values(rowCorrect).every(Boolean)}
            message={
              Object.values(rowCorrect).every(Boolean)
                ? 'All pairs matched correctly!'
                : `${Object.values(rowCorrect).filter(Boolean).length} / ${shuffledLeft.length} correct.`
            }
            explanation={exercise.feedback.explanation}
          />
        </div>
      )}
    </div>
  );
}
