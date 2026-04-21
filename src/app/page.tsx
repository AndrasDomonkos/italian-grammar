import Link from 'next/link';
import { getLessonsByLevel } from '@/content';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, BookOpen, Star, Trophy } from 'lucide-react';
import { AuthNav } from '@/components/auth-nav';

const LEVELS = [
  {
    id: 'a1' as const,
    label: 'A1',
    name: 'Beginner',
    description:
      'Articles, present tense, essential verbs, nouns, adjectives, numbers, and an introduction to the past.',
    borderClass: 'border-green-200 hover:border-green-400 dark:border-green-800 dark:hover:border-green-600',
    badgeClass: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
    Icon: BookOpen,
  },
  {
    id: 'a2' as const,
    label: 'A2',
    name: 'Elementary',
    description:
      'Past tenses, future, pronouns, imperatives, conditionals, comparatives, and modal verbs.',
    borderClass: 'border-blue-200 hover:border-blue-400 dark:border-blue-800 dark:hover:border-blue-600',
    badgeClass: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    Icon: Star,
  },
  {
    id: 'b1' as const,
    label: 'B1',
    name: 'Intermediate',
    description:
      'Subjunctive mood, conditional hypotheticals, passive voice, indirect speech, and complex connectors.',
    borderClass: 'border-purple-200 hover:border-purple-400 dark:border-purple-800 dark:hover:border-purple-600',
    badgeClass: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
    Icon: Trophy,
  },
];

export default function HomePage() {
  const counts = {
    a1: getLessonsByLevel('a1').length,
    a2: getLessonsByLevel('a2').length,
    b1: getLessonsByLevel('b1').length,
  };
  const total = counts.a1 + counts.a2 + counts.b1;

  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <div className="border-b bg-card">
        <div className="max-w-2xl mx-auto px-4 py-2 flex justify-end">
          <AuthNav />
        </div>
      </div>

      {/* Hero */}
      <div className="border-b bg-card">
        <div className="max-w-2xl mx-auto px-4 py-12 text-center space-y-4">
          <div className="text-5xl">🇮🇹</div>
          <h1 className="text-3xl font-bold tracking-tight">Italian Grammar Workbook</h1>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Interactive lessons from beginner to intermediate. Every exercise comes with
            detailed feedback citing the exact grammar rule.
          </p>
          <div className="flex justify-center gap-2 flex-wrap text-sm">
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
              {total} lesson{total !== 1 ? 's' : ''}
            </span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">6 exercise types</span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">Progress saved locally</span>
          </div>
        </div>
      </div>

      {/* Level cards */}
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Choose your level
        </h2>

        {LEVELS.map(({ id, label, name, description, borderClass, badgeClass, Icon }) => (
          <Link
            key={id}
            href={`/${id}`}
            className={`flex items-center gap-4 p-5 rounded-xl border-2 bg-card transition-colors ${borderClass}`}
          >
            <div className={`p-2.5 rounded-lg ${badgeClass}`}>
              <Icon className="size-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeClass}`}>{label}</span>
                <span className="font-semibold">{name}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {counts[id]} lesson{counts[id] !== 1 ? 's' : ''}
              </p>
            </div>

            <ChevronRight className="size-5 text-muted-foreground shrink-0" />
          </Link>
        ))}
      </main>

      <footer className="border-t mt-8">
        <div className="max-w-2xl mx-auto px-4 py-4 text-center text-xs text-muted-foreground">
          Progress is saved in your browser — no account needed.
        </div>
      </footer>
    </div>
  );
}
