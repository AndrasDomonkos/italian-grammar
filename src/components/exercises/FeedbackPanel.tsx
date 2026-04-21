import { CheckCircle, XCircle, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  correct: boolean;
  message: string;
  explanation: string;
  correctAnswer?: string;
  showCorrectAnswer?: boolean;
  children?: React.ReactNode;
}

export function FeedbackPanel({
  correct,
  message,
  explanation,
  correctAnswer,
  showCorrectAnswer,
  children,
}: Props) {
  return (
    <div
      className={cn(
        'rounded-lg border p-4 space-y-2',
        correct
          ? 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800'
          : 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800',
      )}
    >
      <div className="flex items-center gap-2 font-semibold">
        {correct ? (
          <CheckCircle className="text-green-600 size-5 shrink-0" />
        ) : (
          <XCircle className="text-red-600 size-5 shrink-0" />
        )}
        <span className={correct ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
          {message}
        </span>
      </div>

      {showCorrectAnswer && correctAnswer && (
        <p className="text-sm font-medium text-foreground">
          Correct answer: <span className="font-bold italic">{correctAnswer}</span>
        </p>
      )}

      {children}

      <div className="flex gap-2 pt-1 border-t border-current/10">
        <BookOpen className="size-4 shrink-0 mt-0.5 text-muted-foreground" />
        <p className="text-sm text-muted-foreground leading-relaxed">{explanation}</p>
      </div>
    </div>
  );
}
