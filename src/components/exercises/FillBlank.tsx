'use client';

import { useState } from 'react';
import type { FillBlankExercise } from '@/content/types';
import { checkAnswer } from '@/lib/utils';
import { FeedbackPanel } from './FeedbackPanel';
import { Button } from '@/components/ui/button';

interface Props {
  exercise: FillBlankExercise;
  onResult: (correct: boolean) => void;
  submitted?: boolean;
}

export function FillBlank({ exercise, onResult, submitted: externalSubmitted }: Props) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const isDone = submitted || externalSubmitted;

  function handleSubmit() {
    if (!value.trim()) return;
    const ok = checkAnswer(value, exercise.answer);
    setCorrect(ok);
    setSubmitted(true);
    onResult(ok);
  }

  // Split prompt on ___ to render inline input
  const parts = exercise.prompt.split('___');

  return (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        {parts[0]}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !isDone && handleSubmit()}
          disabled={isDone}
          placeholder="…"
          className="inline-block w-28 border-b-2 border-primary bg-transparent text-center focus:outline-none focus:border-blue-500 disabled:opacity-70 mx-1"
          aria-label="Fill in the blank"
        />
        {parts[1]}
      </p>

      {exercise.hint && !submitted && (
        <p className="text-sm text-muted-foreground italic">Hint: {exercise.hint}</p>
      )}

      {!isDone && (
        <Button onClick={handleSubmit} disabled={!value.trim()}>
          Check Answer
        </Button>
      )}

      {submitted && (
        <FeedbackPanel
          correct={correct}
          message={correct ? exercise.feedback.correct : exercise.feedback.incorrect}
          explanation={exercise.feedback.explanation}
          correctAnswer={Array.isArray(exercise.answer) ? exercise.answer[0] : exercise.answer}
          showCorrectAnswer={!correct}
        />
      )}
    </div>
  );
}
