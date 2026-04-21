export type Level = 'a1' | 'a2' | 'b1';

export interface ExplanationTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface LessonExplanation {
  text: string;
  tables?: ExplanationTable[];
}

export interface FillBlankExercise {
  type: 'fill-blank';
  id: string;
  prompt: string;
  answer: string | string[];
  hint?: string;
  feedback: {
    correct: string;
    incorrect: string;
    explanation: string;
  };
}

export interface MultipleChoiceOption {
  value: string;
  label: string;
}

export interface MultipleChoiceExercise {
  type: 'multiple-choice';
  id: string;
  question: string;
  options: MultipleChoiceOption[];
  answer: string;
  feedback: {
    correct: string;
    incorrect: string;
    explanation: string;
    optionExplanations: Record<string, string>;
  };
}

export interface ConjugationExercise {
  type: 'conjugation';
  id: string;
  verb: string;
  tense: string;
  pronouns: string[];
  answers: string[];
  feedback: {
    explanation: string;
  };
}

export interface MatchExercise {
  type: 'match';
  id: string;
  instruction: string;
  pairs: Array<{ left: string; right: string }>;
  feedback: {
    explanation: string;
  };
}

export interface ReorderExercise {
  type: 'reorder';
  id: string;
  instruction: string;
  words: string[];
  answer: string[];
  feedback: {
    correct: string;
    explanation: string;
  };
}

export interface TranslationExercise {
  type: 'translation';
  id: string;
  source: string;
  direction: 'en-to-it' | 'it-to-en';
  acceptedAnswers: string[];
  feedback: {
    explanation: string;
    modelAnswer: string;
  };
}

export type Exercise =
  | FillBlankExercise
  | MultipleChoiceExercise
  | ConjugationExercise
  | MatchExercise
  | ReorderExercise
  | TranslationExercise;

export interface Lesson {
  slug: string;
  title: string;
  level: Level;
  order: number;
  explanation: LessonExplanation;
  exercises: Exercise[];
}

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
}

export interface LessonProgress {
  slug: string;
  level: Level;
  status: 'not-started' | 'in-progress' | 'completed';
  score: number;
  total: number;
  results: ExerciseResult[];
  completedAt?: string;
}

export interface AppProgress {
  lessons: Record<string, LessonProgress>;
}
