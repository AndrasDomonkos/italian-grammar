'use client';

import { useState, useMemo } from 'react';
import type { VocabWord } from '@/content/types';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw, ArrowRight, BookOpen, Puzzle, PenLine } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  words: VocabWord[];
  onComplete: () => void;
}

type VocabPhase = 'flashcards' | 'match' | 'fillblank';

// ── Flashcard sub-component ──────────────────────────────────────
function FlashcardPhase({ words, onDone }: { words: VocabWord[]; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const word = words[idx];
  const isLast = idx === words.length - 1;

  function next() {
    setRevealed(false);
    if (isLast) onDone();
    else setIdx((i) => i + 1);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>Word {idx + 1} of {words.length}</span>
        <span className="text-xs uppercase tracking-wide">Flashcards</span>
      </div>
      <Progress value={((idx + 1) / words.length) * 100} className="h-1.5" />

      {/* Card */}
      <button
        onClick={() => setRevealed(true)}
        className={cn(
          'w-full min-h-48 rounded-2xl border-2 p-8 text-center transition-all cursor-pointer select-none',
          revealed
            ? 'border-primary/40 bg-primary/5'
            : 'border-border bg-card hover:border-primary/30 hover:bg-muted/50',
        )}
      >
        <p className="text-3xl font-bold text-primary mb-2">{word.word}</p>
        {!revealed && (
          <p className="text-sm text-muted-foreground mt-4">Tap to reveal</p>
        )}
        {revealed && (
          <div className="mt-4 space-y-3 animate-in fade-in duration-200">
            <p className="text-xl font-medium">{word.translation}</p>
            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground italic">{word.example}</p>
              <p className="text-sm text-muted-foreground mt-1">"{word.exampleTranslation}"</p>
            </div>
          </div>
        )}
      </button>

      <Button
        onClick={next}
        size="lg"
        className="w-full gap-2"
        disabled={!revealed}
      >
        {isLast ? 'Start Match Quiz' : 'Next Word'}
        <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}

// ── Match quiz sub-component ─────────────────────────────────────
function MatchPhase({ words, onDone }: { words: VocabWord[]; onDone: () => void }) {
  const items = useMemo(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    return shuffled;
  }, [words]);

  const translations = useMemo(() => {
    return [...items.map((w) => w.translation)].sort(() => Math.random() - 0.5);
  }, [items]);

  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [matched, setMatched] = useState<Record<number, boolean>>({});
  const [wrongPair, setWrongPair] = useState<{ w: number; t: number } | null>(null);
  const [translationStatuses, setTranslationStatuses] = useState<Record<number, 'matched' | 'wrong' | null>>({});
  const [wordStatuses, setWordStatuses] = useState<Record<number, 'matched' | 'wrong' | null>>({});

  const matchedCount = Object.values(matched).filter(Boolean).length;
  const allDone = matchedCount === items.length;

  function handleSelectWord(idx: number) {
    if (matched[idx]) return;
    setSelectedWord(idx);
    setWrongPair(null);
  }

  function handleSelectTranslation(tIdx: number) {
    if (selectedWord === null) return;
    const translation = translations[tIdx];
    const correctTranslation = items[selectedWord].translation;

    if (translation === correctTranslation) {
      setMatched((prev) => ({ ...prev, [selectedWord]: true }));
      setTranslationStatuses((prev) => ({ ...prev, [tIdx]: 'matched' }));
      setWordStatuses((prev) => ({ ...prev, [selectedWord]: 'matched' }));
      setSelectedWord(null);
    } else {
      setWrongPair({ w: selectedWord, t: tIdx });
      setTranslationStatuses((prev) => ({ ...prev, [tIdx]: 'wrong' }));
      setWordStatuses((prev) => ({ ...prev, [selectedWord]: 'wrong' }));
      setTimeout(() => {
        setWrongPair(null);
        setTranslationStatuses((prev) => ({ ...prev, [tIdx]: null }));
        setWordStatuses((prev) => ({ ...prev, [selectedWord]: null }));
        setSelectedWord(null);
      }, 800);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>{matchedCount} / {items.length} matched</span>
        <span className="text-xs uppercase tracking-wide">Match</span>
      </div>
      <Progress value={(matchedCount / items.length) * 100} className="h-1.5" />

      {!allDone ? (
        <div className="grid grid-cols-2 gap-3">
          {/* Italian words */}
          <div className="space-y-2">
            {items.map((w, i) => (
              <button
                key={i}
                onClick={() => handleSelectWord(i)}
                disabled={!!matched[i]}
                className={cn(
                  'w-full p-3 rounded-lg border text-sm font-medium text-left transition-all',
                  matched[i]
                    ? 'border-green-500/40 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400 opacity-50 cursor-default'
                    : wordStatuses[i] === 'wrong'
                    ? 'border-red-400 bg-red-50 dark:bg-red-950/30'
                    : wordStatuses[i] === 'matched'
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                    : selectedWord === i
                    ? 'border-primary bg-primary/10 ring-2 ring-primary/30'
                    : 'border-border bg-card hover:border-primary/40 cursor-pointer',
                )}
              >
                {w.word}
              </button>
            ))}
          </div>
          {/* Translations */}
          <div className="space-y-2">
            {translations.map((t, i) => {
              const isMatchedTranslation = translationStatuses[i] === 'matched';
              return (
                <button
                  key={i}
                  onClick={() => !isMatchedTranslation && handleSelectTranslation(i)}
                  disabled={isMatchedTranslation}
                  className={cn(
                    'w-full p-3 rounded-lg border text-sm text-left transition-all',
                    isMatchedTranslation
                      ? 'border-green-500/40 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400 opacity-50 cursor-default'
                    : translationStatuses[i] === 'wrong'
                      ? 'border-red-400 bg-red-50 dark:bg-red-950/30 animate-pulse'
                      : selectedWord !== null
                      ? 'border-border bg-card hover:border-primary/40 cursor-pointer'
                      : 'border-border bg-muted/40 cursor-default',
                  )}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-8 space-y-4">
          <CheckCircle className="size-12 text-green-500 mx-auto" />
          <p className="text-lg font-semibold">All matched!</p>
          <Button onClick={onDone} size="lg" className="gap-2">
            Fill-in-the-blank Quiz <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

// ── Fill-blank quiz sub-component ────────────────────────────────
function FillBlankPhase({ words, onDone }: { words: VocabWord[]; onDone: () => void }) {
  const shuffled = useMemo(() => [...words].sort(() => Math.random() - 0.5), [words]);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [score, setScore] = useState(0);

  const word = shuffled[idx];
  const isLast = idx === shuffled.length - 1;

  // Build the blanked sentence: replace the word in the example
  const blanked = useMemo(() => {
    const w = word.word.replace(/^(il |la |lo |l'|i |le |gli |un |una |un'|degli |dei |delle )/i, '');
    const re = new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    return word.example.replace(re, '___');
  }, [word]);

  function normalise(s: string) {
    return s.trim().toLowerCase()
      .replace(/[àá]/g, 'a').replace(/[èé]/g, 'e').replace(/[ìí]/g, 'i')
      .replace(/[òó]/g, 'o').replace(/[ùú]/g, 'u');
  }

  function handleCheck() {
    const wordCore = word.word.replace(/^(il |la |lo |l'|i |le |gli |un |una |un'|degli |dei |delle )/i, '');
    const ok = normalise(input) === normalise(wordCore) || normalise(input) === normalise(word.word);
    if (ok) setScore((s) => s + 1);
    setStatus(ok ? 'correct' : 'wrong');
  }

  function handleNext() {
    setInput('');
    setStatus('idle');
    if (isLast) onDone();
    else setIdx((i) => i + 1);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>Question {idx + 1} of {shuffled.length}</span>
        <span className="text-xs uppercase tracking-wide">Fill-in-the-blank</span>
      </div>
      <Progress value={((idx + 1) / shuffled.length) * 100} className="h-1.5" />

      <div className="rounded-xl border bg-card p-6 space-y-4">
        <p className="text-sm text-muted-foreground font-medium">{word.translation}</p>
        <p className="text-lg">{blanked}</p>
        <p className="text-xs text-muted-foreground italic">"{word.exampleTranslation}"</p>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && status === 'idle' && input.trim() && handleCheck()}
          disabled={status !== 'idle'}
          placeholder="Type the Italian word…"
          className={cn(
            'w-full px-4 py-3 rounded-lg border text-base bg-background focus:outline-none focus:ring-2 transition-colors',
            status === 'correct' ? 'border-green-500 bg-green-50 dark:bg-green-950/30 focus:ring-green-400' :
            status === 'wrong' ? 'border-red-400 bg-red-50 dark:bg-red-950/30 focus:ring-red-400' :
            'border-border focus:ring-primary/40',
          )}
        />

        {status === 'correct' && (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
            <CheckCircle className="size-4" />
            <span>Correct! <strong>{word.word}</strong></span>
          </div>
        )}
        {status === 'wrong' && (
          <div className="flex items-start gap-2 text-red-600 dark:text-red-400 text-sm">
            <XCircle className="size-4 mt-0.5 shrink-0" />
            <span>The answer is <strong>{word.word}</strong> — {word.translation}</span>
          </div>
        )}
      </div>

      {status === 'idle' ? (
        <Button onClick={handleCheck} size="lg" className="w-full" disabled={!input.trim()}>
          Check
        </Button>
      ) : (
        <Button onClick={handleNext} size="lg" className="w-full gap-2">
          {isLast ? `Finish (${score}/${shuffled.length} correct)` : 'Next'}
          <ArrowRight className="size-4" />
        </Button>
      )}
    </div>
  );
}

// ── Main VocabStudy component ────────────────────────────────────
export function VocabStudy({ words, onComplete }: Props) {
  const [phase, setPhase] = useState<VocabPhase>('flashcards');

  const phaseLabel: Record<VocabPhase, string> = {
    flashcards: 'Learn',
    match: 'Match',
    fillblank: 'Test',
  };

  const phaseIcon: Record<VocabPhase, React.ReactNode> = {
    flashcards: <BookOpen className="size-4" />,
    match: <Puzzle className="size-4" />,
    fillblank: <PenLine className="size-4" />,
  };

  return (
    <div className="space-y-6">
      {/* Sub-phase indicator */}
      <div className="flex gap-1 bg-muted rounded-lg p-1 text-xs">
        {(['flashcards', 'match', 'fillblank'] as VocabPhase[]).map((p) => (
          <div
            key={p}
            className={cn(
              'flex-1 flex items-center justify-center gap-1 py-1.5 rounded-md',
              phase === p ? 'bg-background shadow font-medium text-foreground' : 'text-muted-foreground',
            )}
          >
            {phaseIcon[p]}
            {phaseLabel[p]}
          </div>
        ))}
      </div>

      {phase === 'flashcards' && (
        <FlashcardPhase words={words} onDone={() => setPhase('match')} />
      )}
      {phase === 'match' && (
        <MatchPhase words={words} onDone={() => setPhase('fillblank')} />
      )}
      {phase === 'fillblank' && (
        <FillBlankPhase words={words} onDone={onComplete} />
      )}
    </div>
  );
}
