import type { Lesson } from '../types';

export const comparativi: Lesson = {
  slug: 'comparativi',
  title: 'Comparativi',
  level: 'a2',
  order: 13,
  explanation: {
    text: `## I Comparativi (Comparatives)

Italian has three types of comparison: superiority (more than), inferiority (less than), and equality (as … as).

### Comparative of Superiority — più … di/che

**più + adjective/adverb + di** (when comparing two different things/people):
*Marco è più alto di Lucia.* (Marco is taller than Lucia.)
*Roma è più grande di Firenze.* (Rome is bigger than Florence.)

**più + adjective + che** (when comparing two qualities of the SAME person/thing, or before infinitives/prepositions):
*È più intelligente che bello.* (He's more intelligent than handsome.)
*È più facile scrivere che parlare.* (It's easier to write than to speak.)

### Comparative of Inferiority — meno … di/che

Same rules as superiority, but with **meno**:
*Lucia è meno alta di Marco.* (Lucia is less tall than Marco.)
*È meno caro che difficile.* (It's less expensive than difficult.)

### Comparative of Equality — tanto … quanto / così … come

*Maria è (tanto) brava quanto Giulia.* (Maria is as good as Giulia.)
*Sono (così) stanchi come noi.* (They are as tired as us.)

The **tanto/così** is often omitted in spoken Italian.

### Irregular Comparatives

Some common adjectives have special comparative forms:

| Adjective | Regular | Irregular |
|-----------|---------|-----------|
| buono (good) | più buono | **migliore** (better) |
| cattivo (bad) | più cattivo | **peggiore** (worse) |
| grande (big) | più grande | **maggiore** (greater/older) |
| piccolo (small) | più piccolo | **minore** (lesser/younger) |

Both forms are often acceptable; the irregular is more formal.`,
    tables: [
      {
        caption: 'di vs che — When to Use Each',
        headers: ['Use "di"', 'Use "che"'],
        rows: [
          ['Before pronouns/nouns: più alto di me', 'Comparing 2 qualities of same thing: più bello che intelligente'],
          ['Before numbers: più di tre', 'Before infinitives: più facile fare che dire'],
          ['Before proper nouns: più grande di Roma', 'Before prepositions: più lì che qui'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-comp-01',
      prompt: 'Mia sorella è più alta ___ me. (My sister is taller than me.)',
      answer: 'di',
      hint: 'Before a pronoun (me), use "di".',
      feedback: {
        correct: 'Esatto! "Più alta di me" — use "di" before a pronoun.',
        incorrect: 'The correct answer is "di".',
        explanation:
          'When comparing two different people/things, use "di". Before personal pronouns (me, te, lui, lei, noi, voi, loro), always use "di": più alta di me, più giovane di lui.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-comp-02',
      prompt: 'È più facile scrivere ___ parlare. (It\'s easier to write than to speak.)',
      answer: 'che',
      hint: 'Before infinitives, use "che".',
      feedback: {
        correct: 'Perfetto! "Più facile scrivere che parlare" — use "che" before infinitives.',
        incorrect: 'The correct answer is "che".',
        explanation:
          'When comparing two infinitives (actions), use "che": più facile scrivere che parlare. "Che" is also used when comparing two qualities of the same subject: è più gentile che simpatico.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-comp-03',
      prompt: 'Questo ristorante è ___ buono ___ quello di ieri. (This restaurant is better than yesterday\'s.)',
      answer: 'migliore, di',
      hint: 'Irregular comparative of buono; comparing two different restaurants → di.',
      feedback: {
        correct: 'Bravo/a! "Migliore di" — irregular comparative + di before pronoun/noun.',
        incorrect: 'The correct answer is "migliore, di".',
        explanation:
          '"Migliore" is the irregular comparative of "buono". "Di" because we compare two different things. "Quello di ieri" = the one from yesterday. Migliore can be used without "più": questo ristorante è migliore (not "più buono" — though both are acceptable).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-comp-04',
      question: '"Il film è ___ lungo ___ interessante." — The film is longer than it is interesting.',
      options: [
        { value: 'a', label: 'più / di' },
        { value: 'b', label: 'più / che' },
        { value: 'c', label: 'tanto / quanto' },
        { value: 'd', label: 'meno / di' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Più lungo che interessante" — two qualities of the same noun → che.',
        incorrect: 'The correct answer is "più / che".',
        explanation:
          'When comparing two adjectives of the SAME subject (the film is X more than Y), use "che": più lungo che interessante. If you were comparing the length of two different films, you would use "di".',
        optionExplanations: {
          a: '"Più lungo di" compares two different things, but here we compare two qualities of the same film.',
          c: '"Tanto quanto" = as … as — equality comparison, not superiority.',
          d: '"Meno lungo di" = less long than — opposite meaning.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-comp-05',
      question: 'Complete: "La tua idea è ___ della mia." (Your idea is worse than mine.)',
      options: [
        { value: 'a', label: 'più cattiva' },
        { value: 'b', label: 'peggiore' },
        { value: 'c', label: 'minore' },
        { value: 'd', label: 'più male' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Peggiore" — irregular comparative of cattivo (bad → worse).',
        incorrect: 'The correct answer is "peggiore".',
        explanation:
          '"Peggiore" is the irregular comparative of "cattivo" (bad). It means "worse." Both "peggiore" and "più cattivo" are correct, but "peggiore" is more standard.',
        optionExplanations: {
          a: '"Più cattiva" is grammatically acceptable but peggiore is preferred.',
          c: '"Minore" = lesser/younger — comparative of piccolo (size/age), not cattivo.',
          d: '"Più male" is not standard Italian; "male" is an adverb — "peggio" is its comparative.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-comp-06',
      verb: 'Irregular comparatives',
      tense: 'Give the irregular comparative for each adjective',
      pronouns: ['buono (good → better)', 'cattivo (bad → worse)', 'grande (big → greater)', 'piccolo (small → lesser)', 'buono (good → better, adverb)', 'cattivo (bad → worse, adverb)'],
      answers: ['migliore', 'peggiore', 'maggiore', 'minore', 'meglio', 'peggio'],
      feedback: {
        explanation:
          'Adjective irregulars: migliore (buono), peggiore (cattivo), maggiore (grande), minore (piccolo). Adverb irregulars: meglio (bene/buono in adverbial use), peggio (male/cattivo in adverbial use). "Sta meglio" = she is better (health). "Va peggio" = it\'s going worse.',
      },
    },
    {
      type: 'match',
      id: 'a2-comp-07',
      instruction: 'Match each Italian comparative sentence with its English translation.',
      pairs: [
        { left: 'Parla meno di te.', right: 'He speaks less than you.' },
        { left: 'È tanto brava quanto lui.', right: 'She is as good as he is.' },
        { left: 'Costa più di cento euro.', right: 'It costs more than a hundred euros.' },
        { left: 'Preferisco il tè al caffè.', right: 'I prefer tea to coffee.' },
        { left: 'Questo è il migliore.', right: 'This is the best one.' },
      ],
      feedback: {
        explanation:
          '"Meno di te" = less than you (di + pronoun). "Tanto brava quanto lui" = as good as him (equality). "Più di cento" = more than a hundred (di before number). "Preferire A a B" = to prefer A to B (irregular verb). "Il migliore" = the best (superlativo with article).',
      },
    },
    {
      type: 'reorder',
      id: 'a2-comp-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['di', 'è', 'Marco', 'Maria', 'più', 'giovane'],
      answer: ['Marco', 'è', 'più', 'giovane', 'di', 'Maria'],
      feedback: {
        correct: 'Perfetto! "Marco è più giovane di Maria."',
        explanation:
          '"Più giovane di" = younger than. "Di" because we compare two different people. Word order: subject + è + più + adjective + di + noun. Note: "minore" (irregular) is also possible: Marco è minore di Maria.',
      },
    },
    {
      type: 'translation',
      id: 'a2-comp-09',
      source: 'Italian is more beautiful than difficult, and easier to learn than Japanese.',
      direction: 'en-to-it',
      acceptedAnswers: [
        "L'italiano è più bello che difficile, e più facile da imparare del giapponese.",
        "L'italiano è più bello che difficile, e più semplice da imparare del giapponese.",
      ],
      feedback: {
        explanation:
          '"More beautiful than difficult" = più bello che difficile (two qualities of same thing → che). "Easier to learn than Japanese" = più facile da imparare del giapponese (del = di + il; comparing two different languages → di). "Da imparare" = to learn (purpose/passive infinitive).',
        modelAnswer: "L'italiano è più bello che difficile, e più facile da imparare del giapponese.",
      },
    },
  ],
};
