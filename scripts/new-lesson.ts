#!/usr/bin/env tsx
/**
 * Usage:
 *   npm run new-lesson -- --level a1 --slug my-topic --title "My Topic"
 *
 * Creates src/content/<level>/<slug>.ts and registers it in the level index.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------------------------
// Arg parsing
// ---------------------------------------------------------------------------

function getArg(name: string): string | undefined {
  const flag = `--${name}`;
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}

const VALID_LEVELS = ['a1', 'a2', 'b1'] as const;
type Level = (typeof VALID_LEVELS)[number];

const level = getArg('level') as Level | undefined;
const slug = getArg('slug');
const title = getArg('title');

function usage(): never {
  console.error(`
Usage:
  npm run new-lesson -- --level <a1|a2|b1> --slug <kebab-slug> --title "<Lesson Title>"

Example:
  npm run new-lesson -- --level a1 --slug articoli-indeterminativi --title "Articoli Indeterminativi"
`);
  process.exit(1);
}

if (!level || !slug || !title) {
  console.error('Error: --level, --slug, and --title are all required.');
  usage();
}

if (!VALID_LEVELS.includes(level)) {
  console.error(`Error: --level must be one of: ${VALID_LEVELS.join(', ')}. Got: "${level}"`);
  usage();
}

if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error(`Error: --slug must be lowercase letters, numbers, and hyphens only. Got: "${slug}"`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = path.join(root, 'src', 'content', level);
const lessonFile = path.join(contentDir, `${slug}.ts`);
const indexFile = path.join(contentDir, 'index.ts');

if (fs.existsSync(lessonFile)) {
  console.error(`Error: File already exists: ${lessonFile}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Determine next order number
// ---------------------------------------------------------------------------

const existingFiles = fs.existsSync(contentDir)
  ? fs.readdirSync(contentDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  : [];
const order = existingFiles.length + 1;

// ---------------------------------------------------------------------------
// Lesson file template
// ---------------------------------------------------------------------------

const camelSlug = slug.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

const lessonTemplate = `import type { Lesson } from '../types';

export const ${camelSlug}: Lesson = {
  slug: '${slug}',
  title: '${title}',
  level: '${level}',
  order: ${order},
  explanation: {
    text: \`## ${title}

TODO: Write the grammar explanation here (200–400 words in English with Italian examples).

### Section 1

TODO: explain the first concept.

### Section 2

TODO: explain the second concept.\`,
    tables: [
      {
        caption: 'TODO: Table caption',
        headers: ['Column 1', 'Column 2', 'Column 3'],
        rows: [
          ['TODO', 'TODO', 'TODO'],
        ],
      },
    ],
  },
  exercises: [
    // -----------------------------------------------------------------------
    // 1. Fill in the blank
    // -----------------------------------------------------------------------
    {
      type: 'fill-blank',
      id: '${level}-${slug}-01',
      prompt: 'TODO: Write a sentence with ___ for the blank.',
      answer: 'TODO',
      hint: 'TODO: Optional hint.',
      feedback: {
        correct: 'TODO: Positive feedback message.',
        incorrect: 'TODO: The correct answer is "TODO".',
        explanation: 'TODO: Explain why this answer is correct, citing the grammar rule.',
      },
    },

    // -----------------------------------------------------------------------
    // 2. Multiple choice
    // -----------------------------------------------------------------------
    {
      type: 'multiple-choice',
      id: '${level}-${slug}-02',
      question: 'TODO: Write the question.',
      options: [
        { value: 'a', label: 'TODO option A' },
        { value: 'b', label: 'TODO option B' },
        { value: 'c', label: 'TODO option C' },
        { value: 'd', label: 'TODO option D' },
      ],
      answer: 'a', // TODO: set to the correct value
      feedback: {
        correct: 'TODO: Positive feedback.',
        incorrect: 'TODO: Incorrect feedback.',
        explanation: 'TODO: Explain the correct answer.',
        optionExplanations: {
          b: 'TODO: Why B is wrong.',
          c: 'TODO: Why C is wrong.',
          d: 'TODO: Why D is wrong.',
        },
      },
    },

    // -----------------------------------------------------------------------
    // 3. Conjugation table
    // -----------------------------------------------------------------------
    {
      type: 'conjugation',
      id: '${level}-${slug}-03',
      verb: 'TODO: verb name or table title',
      tense: 'TODO: tense or instruction',
      pronouns: [
        'io',
        'tu',
        'lui/lei',
        'noi',
        'voi',
        'loro',
      ],
      answers: ['TODO', 'TODO', 'TODO', 'TODO', 'TODO', 'TODO'],
      feedback: {
        explanation: 'TODO: Explain the conjugation pattern.',
      },
    },

    // -----------------------------------------------------------------------
    // 4. Match pairs
    // -----------------------------------------------------------------------
    {
      type: 'match',
      id: '${level}-${slug}-04',
      instruction: 'Match each item on the left with its correct pair on the right.',
      pairs: [
        { left: 'TODO left 1', right: 'TODO right 1' },
        { left: 'TODO left 2', right: 'TODO right 2' },
        { left: 'TODO left 3', right: 'TODO right 3' },
        { left: 'TODO left 4', right: 'TODO right 4' },
      ],
      feedback: {
        explanation: 'TODO: Explain the matching pattern.',
      },
    },

    // -----------------------------------------------------------------------
    // 5. Sentence reorder
    // -----------------------------------------------------------------------
    {
      type: 'reorder',
      id: '${level}-${slug}-05',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['TODO', 'word', 'list', 'here'],          // will be shuffled
      answer: ['TODO', 'correct', 'word', 'order'],
      feedback: {
        correct: 'Perfetto! That is the correct sentence.',
        explanation: 'TODO: Explain the word order rule.',
      },
    },

    // -----------------------------------------------------------------------
    // 6. Translation
    // -----------------------------------------------------------------------
    {
      type: 'translation',
      id: '${level}-${slug}-06',
      source: 'TODO: Source sentence to translate.',
      direction: 'en-to-it', // or 'it-to-en'
      acceptedAnswers: [
        'TODO: primary accepted answer.',
        'TODO: alternative accepted answer.',
      ],
      feedback: {
        explanation: 'TODO: Explain the translation, citing grammar rules.',
        modelAnswer: 'TODO: primary accepted answer.',
      },
    },
  ],
};
`;

// ---------------------------------------------------------------------------
// Write the lesson file
// ---------------------------------------------------------------------------

fs.mkdirSync(contentDir, { recursive: true });
fs.writeFileSync(lessonFile, lessonTemplate, 'utf-8');
console.log(`\n✅ Created: ${path.relative(root, lessonFile)}\n`);

// ---------------------------------------------------------------------------
// Register in index file
// ---------------------------------------------------------------------------

const currentIndex = fs.existsSync(indexFile) ? fs.readFileSync(indexFile, 'utf-8') : '';

const importLine = `import { ${camelSlug} } from './${slug}';`;
const hasImport = currentIndex.includes(importLine);

let newIndex: string;

if (!currentIndex.trim()) {
  // Brand new index
  newIndex = `import type { Lesson } from '../types';\n${importLine}\n\nexport const ${level}Lessons: Lesson[] = [${camelSlug}];\n`;
} else if (hasImport) {
  console.log('ℹ️  Import already exists in index — skipping registration.');
  newIndex = currentIndex;
} else {
  // Insert import after last existing import line
  const lines = currentIndex.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIdx = i;
  }
  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, importLine);
  } else {
    lines.unshift(importLine);
  }

  // Insert into the exported array — match only the "= [...];" part to avoid touching "Lesson[]"
  const arrayRegex = /(export const \w+Lessons: Lesson\[\] = \[)([\s\S]*?)(\];)/;
  const arrayMatch = lines.join('\n').match(arrayRegex);
  if (arrayMatch) {
    const inner = arrayMatch[2].trim();
    const newInner = inner ? `${inner}, ${camelSlug}` : camelSlug;
    newIndex = lines.join('\n').replace(arrayRegex, `$1${newInner}$3`);
  } else {
    newIndex = lines.join('\n');
    console.warn('⚠️  Could not auto-register in array — add it manually to the index.');
  }
}

fs.writeFileSync(indexFile, newIndex, 'utf-8');
console.log(`✅ Registered in: ${path.relative(root, indexFile)}`);

// ---------------------------------------------------------------------------
// Next steps
// ---------------------------------------------------------------------------

console.log(`
Next steps:
  1. Open src/content/${level}/${slug}.ts
  2. Replace all TODO placeholders with real content
  3. Run: npm run dev
  4. Visit: http://localhost:3100/${level}/${slug}
`);
