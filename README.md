# Italian Grammar Workbook

Interactive Italian grammar workbook — A1, A2, and B1 levels, with 6 exercise types and instant rule-citing feedback. Progress is stored in `localStorage`; no account or database required.

## Dev server

```bash
npm run dev
# → http://localhost:3100
```

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4** + **shadcn/ui**
- Content: typed TypeScript files under `src/content/`
- Progress: `localStorage` via `src/hooks/useProgress.ts`

## Project structure

```
src/
  app/
    page.tsx                  # Home — level selection
    [level]/
      page.tsx                # Level page — lesson list
      LevelPageClient.tsx     # Client component (progress indicators)
      [slug]/
        page.tsx              # Lesson page (server shell)
        LessonClient.tsx      # Interactive exercise runner
  components/
    exercises/
      FillBlank.tsx
      MultipleChoice.tsx
      ConjugationTable.tsx
      MatchPairs.tsx
      SentenceReorder.tsx
      Translation.tsx
      FeedbackPanel.tsx
    ExerciseRenderer.tsx
    LessonExplanation.tsx
    LessonSummary.tsx
  content/
    types.ts                  # All TypeScript types
    index.ts                  # Master content registry
    a1/ a2/ b1/               # Lesson files + index per level
  hooks/
    useProgress.ts            # localStorage progress hook
scripts/
  new-lesson.ts               # CLI lesson generator
```

## Adding a new lesson (CLI)

```bash
npm run new-lesson -- --level a1 --slug my-topic --title "My Topic"
```

The script will:
1. Validate the level (`a1`, `a2`, `b1`)
2. Create `src/content/<level>/<slug>.ts` with a fully-typed template (all 6 exercise types stubbed)
3. Auto-register the lesson in `src/content/<level>/index.ts`
4. Print the file path and next steps

## Exercise types

| Type | Description |
|------|-------------|
| `fill-blank` | Complete a sentence with one word or phrase |
| `multiple-choice` | Choose from 4 options; wrong options explained |
| `conjugation` | Fill in all forms of a verb / table |
| `match` | Click-to-match pairs |
| `reorder` | Click words into the correct order |
| `translation` | Translate a sentence; multiple correct answers accepted |

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "initial commit"
gh repo create italian-grammar --public --source=. --push

# 2. Deploy
npx vercel --prod
# or connect the repo at https://vercel.com/new
```
