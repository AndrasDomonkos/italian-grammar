'use client';

import { useState } from 'react';
import type { TranslationExercise } from '@/content/types';
import { checkAnswer } from '@/lib/utils';
import { FeedbackPanel } from './FeedbackPanel';
import { Button } from '@/components/ui/button';

interface Props {
  exercise: TranslationExercise;
  onResult: (correct: boolean) => void;
}

export function Translation({ exercise, onResult }: Props) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  function handleSubmit() {
    if (!value.trim()) return;
    const ok = checkAnswer(value, exercise.acceptedAnswers);
    setCorrect(ok);
    setSubmitted(true);
    onResult(ok);
  }

  const direction =
    exercise.direction === 'en-to-it'
      ? { from: 'English', to: 'Italian', flag: '🇮🇹' }
      : { from: 'Italian', to: 'English', flag: '🇬🇧' };

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-muted px-4 py-3 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Translate to {direction.to} {direction.flag}
        </p>
        <p className="text-lg font-medium">{exercise.source}</p>
      </div>

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={submitted}
        rows={2}
        placeholder={`Type your ${direction.to} translation…`}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none disabled:opacity-70"
      />

      {!submitted && (
        <Button onClick={handleSubmit} disabled={!value.trim()}>
          Check Translation
        </Button>
      )}

      {submitted && (
        <FeedbackPanel
          correct={correct}
          message={correct ? 'Great translation!' : 'Not quite — see the model answer below.'}
          explanation={exercise.feedback.explanation}
          correctAnswer={exercise.feedback.modelAnswer}
          showCorrectAnswer={!correct}
        >
          {correct && (
            <p className="text-sm text-muted-foreground">
              Model answer: <em>{exercise.feedback.modelAnswer}</em>
            </p>
          )}
          {!correct && exercise.acceptedAnswers.length > 1 && (
            <p className="text-sm text-muted-foreground">
              Also accepted:{' '}
              {exercise.acceptedAnswers
                .filter((a) => a !== exercise.feedback.modelAnswer)
                .map((a) => <em key={a}>{a}</em>)
                .reduce<React.ReactNode[]>((acc, el, i) => (i === 0 ? [el] : [...acc, ', ', el]), [])}
            </p>
          )}
        </FeedbackPanel>
      )}
    </div>
  );
}
