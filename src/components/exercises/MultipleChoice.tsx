'use client';

import { useState } from 'react';
import type { MultipleChoiceExercise } from '@/content/types';
import { FeedbackPanel } from './FeedbackPanel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  exercise: MultipleChoiceExercise;
  onResult: (correct: boolean) => void;
}

export function MultipleChoice({ exercise, onResult }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const correct = selected === exercise.answer;

  function handleSubmit() {
    if (!selected) return;
    setSubmitted(true);
    onResult(correct);
  }

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium leading-relaxed">{exercise.question}</p>

      <div className="grid gap-2">
        {exercise.options.map((opt) => {
          const isSelected = selected === opt.value;
          const isCorrect = opt.value === exercise.answer;
          const isWrong = submitted && isSelected && !isCorrect;
          const showGreenCheck = submitted && isCorrect;

          return (
            <button
              key={opt.value}
              onClick={() => !submitted && setSelected(opt.value)}
              disabled={submitted}
              className={cn(
                'text-left px-4 py-3 rounded-lg border-2 transition-colors flex items-center gap-3',
                !submitted && !isSelected && 'border-border hover:border-primary hover:bg-accent',
                !submitted && isSelected && 'border-primary bg-primary/5',
                showGreenCheck && 'border-green-500 bg-green-50 dark:bg-green-950/20',
                isWrong && 'border-red-400 bg-red-50 dark:bg-red-950/20',
                submitted && !isSelected && !isCorrect && 'opacity-50',
              )}
            >
              {submitted && isCorrect && <CheckCircle className="size-4 text-green-600 shrink-0" />}
              {submitted && isWrong && <XCircle className="size-4 text-red-500 shrink-0" />}
              {(!submitted || (!isCorrect && !isWrong)) && (
                <span className="size-4 shrink-0" />
              )}
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      {!submitted && (
        <Button onClick={handleSubmit} disabled={!selected}>
          Check Answer
        </Button>
      )}

      {submitted && (
        <FeedbackPanel
          correct={correct}
          message={correct ? exercise.feedback.correct : exercise.feedback.incorrect}
          explanation={exercise.feedback.explanation}
          correctAnswer={exercise.options.find((o) => o.value === exercise.answer)?.label}
          showCorrectAnswer={!correct}
        >
          {Object.entries(exercise.feedback.optionExplanations).length > 0 && (
            <div className="space-y-1 pt-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Why each wrong option is wrong:
              </p>
              {Object.entries(exercise.feedback.optionExplanations).map(([val, why]) => (
                <p key={val} className="text-sm text-muted-foreground">
                  <span className="font-medium italic">{val}</span> — {why}
                </p>
              ))}
            </div>
          )}
        </FeedbackPanel>
      )}
    </div>
  );
}
