'use client';

import { useState } from 'react';
import type { ConjugationExercise } from '@/content/types';
import { checkAnswer } from '@/lib/utils';
import { FeedbackPanel } from './FeedbackPanel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  exercise: ConjugationExercise;
  onResult: (correct: boolean) => void;
}

export function ConjugationTable({ exercise, onResult }: Props) {
  const [values, setValues] = useState<string[]>(exercise.pronouns.map(() => ''));
  const [submitted, setSubmitted] = useState(false);
  const [rowCorrect, setRowCorrect] = useState<boolean[]>([]);

  function handleChange(i: number, val: string) {
    const next = [...values];
    next[i] = val;
    setValues(next);
  }

  function handleSubmit() {
    const results = exercise.answers.map((ans, i) => checkAnswer(values[i], ans));
    setRowCorrect(results);
    setSubmitted(true);
    onResult(results.every(Boolean));
  }

  const allFilled = values.every((v) => v.trim() !== '');

  return (
    <div className="space-y-4">
      <div>
        <p className="text-lg font-semibold">{exercise.verb}</p>
        <p className="text-sm text-muted-foreground">{exercise.tense}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-medium text-muted-foreground w-1/2">Context</th>
              <th className="text-left py-2 font-medium text-muted-foreground">Your Answer</th>
              {submitted && <th className="text-left py-2 pl-4 font-medium text-muted-foreground">Correct</th>}
            </tr>
          </thead>
          <tbody>
            {exercise.pronouns.map((pronoun, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="py-2 pr-4 text-muted-foreground">{pronoun}</td>
                <td className="py-2">
                  <input
                    type="text"
                    value={values[i]}
                    onChange={(e) => handleChange(i, e.target.value)}
                    disabled={submitted}
                    className={cn(
                      'w-24 border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary',
                      submitted && rowCorrect[i] && 'border-green-500 bg-green-50 dark:bg-green-950/20',
                      submitted && !rowCorrect[i] && 'border-red-400 bg-red-50 dark:bg-red-950/20',
                    )}
                  />
                </td>
                {submitted && (
                  <td className="py-2 pl-4">
                    {rowCorrect[i] ? (
                      <span className="text-green-600 font-medium text-xs">✓</span>
                    ) : (
                      <span className="text-red-500 text-xs font-medium">
                        → <em>{exercise.answers[i]}</em>
                      </span>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!submitted && (
        <Button onClick={handleSubmit} disabled={!allFilled}>
          Check All
        </Button>
      )}

      {submitted && (
        <FeedbackPanel
          correct={rowCorrect.every(Boolean)}
          message={
            rowCorrect.every(Boolean)
              ? `Perfect! All ${rowCorrect.length} forms correct.`
              : `${rowCorrect.filter(Boolean).length} / ${rowCorrect.length} correct.`
          }
          explanation={exercise.feedback.explanation}
        />
      )}
    </div>
  );
}
