'use client';

import type { Exercise } from '@/content/types';
import { FillBlank } from './exercises/FillBlank';
import { MultipleChoice } from './exercises/MultipleChoice';
import { ConjugationTable } from './exercises/ConjugationTable';
import { MatchPairs } from './exercises/MatchPairs';
import { SentenceReorder } from './exercises/SentenceReorder';
import { Translation } from './exercises/Translation';

interface Props {
  exercise: Exercise;
  onResult: (correct: boolean) => void;
}

export function ExerciseRenderer({ exercise, onResult }: Props) {
  switch (exercise.type) {
    case 'fill-blank':
      return <FillBlank exercise={exercise} onResult={onResult} />;
    case 'multiple-choice':
      return <MultipleChoice exercise={exercise} onResult={onResult} />;
    case 'conjugation':
      return <ConjugationTable exercise={exercise} onResult={onResult} />;
    case 'match':
      return <MatchPairs exercise={exercise} onResult={onResult} />;
    case 'reorder':
      return <SentenceReorder exercise={exercise} onResult={onResult} />;
    case 'translation':
      return <Translation exercise={exercise} onResult={onResult} />;
  }
}
