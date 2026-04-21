import type { Lesson } from '../types';

export const aggettiviConcordanza: Lesson = {
  slug: 'aggettivi-concordanza',
  title: 'Aggettivi e Concordanza',
  level: 'a1',
  order: 6,
  explanation: {
    text: `## Aggettivi e Concordanza (Adjectives and Agreement)

In Italian, adjectives must **agree** with the noun they describe in **gender** (masculine/feminine) and **number** (singular/plural). This is called *concordanza* (agreement).

### Two Types of Adjective

**Type 1 — Four forms (-o / -a / -i / -e):**
Most adjectives belong to this group:
- *alto* (tall): masc. sing. *alto*, fem. sing. *alta*, masc. plur. *alti*, fem. plur. *alte*
- *nuovo* (new): *nuovo / nuova / nuovi / nuove*
- *bello* (beautiful): *bello / bella / belli / belle*

**Type 2 — Two forms (-e / -i):**
Adjectives ending in -e have only one singular form and one plural:
- *grande* (big/great): *grande / grande / grandi / grandi*
- *interessante* (interesting): same in masc. and fem. singular; *interessanti* in plural
- *veloce* (fast): *veloce / veloce / veloci / veloci*

### Position of Adjectives

Italian adjectives usually come **after the noun**: *una macchina rossa* (a red car), *un uomo interessante*.

However, a small group of very common adjectives typically come **before the noun**:
*bello, brutto, buono, cattivo, grande, piccolo, giovane, vecchio, lungo, breve, nuovo*

Example: *un bel giorno* (a beautiful day), *una piccola città* (a small city).

### Bello and Buono Before Nouns

**Bello** before a noun follows the same pattern as the definite article:
- *bel* (like il), *bello* (like lo), *bell'* (like l'), *bei* (like i), *begli* (like gli), *bella* (like la), *bell'* (like l'), *belle* (like le)

**Buono** before a singular noun follows the indefinite article pattern:
- *buon* (like un), *buono* (like uno), *buona* (like una), *buon'* (like un')

After the noun or after essere, both adjectives use their regular forms: *bello / bella / belli / belle*.`,
    tables: [
      {
        caption: 'Adjective Agreement — Type 1 (alto)',
        headers: ['', 'Masculine', 'Feminine'],
        rows: [
          ['Singular', 'alto', 'alta'],
          ['Plural', 'alti', 'alte'],
        ],
      },
      {
        caption: 'Adjective Agreement — Type 2 (grande)',
        headers: ['', 'Masculine', 'Feminine'],
        rows: [
          ['Singular', 'grande', 'grande'],
          ['Plural', 'grandi', 'grandi'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: 'bello', translation: 'beautiful, handsome', example: 'È un bel ragazzo molto simpatico.', exampleTranslation: 'He is a handsome and very friendly guy.' },
    { word: 'piccolo', translation: 'small, little', example: 'Abito in un piccolo appartamento.', exampleTranslation: 'I live in a small apartment.' },
    { word: 'nuovo', translation: 'new', example: 'Ho comprato una macchina nuova.', exampleTranslation: 'I bought a new car.' },
    { word: 'vecchio', translation: 'old', example: 'Il vecchio castello è bellissimo.', exampleTranslation: 'The old castle is very beautiful.' },
    { word: 'bravo', translation: 'good (at sth), talented', example: 'Sei molto bravo in matematica.', exampleTranslation: 'You are very good at mathematics.' },
    { word: 'alto', translation: 'tall, high', example: 'Marco è più alto di me.', exampleTranslation: 'Marco is taller than me.' },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-agg-01',
      prompt: 'Ho una sorella molt___ (very tall — feminine singular).',
      answer: 'alta',
      hint: 'sorella = sister → feminine singular.',
      feedback: {
        correct: 'Perfetto! "Alta" agrees with the feminine singular noun.',
        incorrect: 'The correct answer is "alta".',
        explanation:
          '"Sorella" is feminine singular. The adjective "alto" (tall) must agree: -o → -a for feminine singular. Result: una sorella alta.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-agg-02',
      prompt: 'I miei fratelli sono molt___ (very tall — masculine plural).',
      answer: 'alti',
      hint: 'fratelli = brothers → masculine plural.',
      feedback: {
        correct: 'Esatto! "Alti" is correct.',
        incorrect: 'The correct answer is "alti".',
        explanation:
          '"Fratelli" is masculine plural. "Alto" agrees as: -o → -i for masculine plural → "alti".',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-agg-03',
      prompt: 'Questa è una lezione molt___ interessant___. (This is a very interesting lesson.)',
      answer: ['molto interessante', 'interessante'],
      hint: 'lezione = lesson → feminine singular. interessante is a Type-2 adjective.',
      feedback: {
        correct: 'Esatto! "Molto interessante" — Type-2 adjectives do not change for gender.',
        incorrect: 'The correct answer is "interessante".',
        explanation:
          '"Interessante" is a Type-2 adjective (ends in -e). It has the same form for both masculine and feminine singular. Only in the plural does it change: interessanti. "Lezione" is feminine, but "interessante" stays "interessante".',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-agg-04',
      question: 'Which form is correct? "The new students (mixed gender group)" — gli studenti ___.',
      options: [
        { value: 'nuovi', label: 'gli studenti nuovi' },
        { value: 'nuove', label: 'gli studenti nuove' },
        { value: 'nuovo', label: 'gli studenti nuovo' },
        { value: 'nuova', label: 'gli studenti nuova' },
      ],
      answer: 'nuovi',
      feedback: {
        correct: 'Corretto! "Gli studenti nuovi" — masculine plural.',
        incorrect: 'The correct answer is "nuovi".',
        explanation:
          '"Studenti" is masculine plural. The adjective "nuovo" agrees: -o → -i → "nuovi". In Italian, a mixed-gender group takes the masculine plural form.',
        optionExplanations: {
          nuove: '"Nuove" is feminine plural. "Studenti" is masculine, so we use masculine plural "nuovi".',
          nuovo: '"Nuovo" is masculine singular. "Studenti" is plural, so we need plural agreement: nuovi.',
          nuova: '"Nuova" is feminine singular. "Studenti" is masculine plural.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-agg-05',
      question: 'Choose the correct sentence: "I have a good idea" (buono before a feminine vowel noun):',
      options: [
        { value: 'a', label: "Ho un'buona idea." },
        { value: 'b', label: "Ho una buon idea." },
        { value: 'c', label: "Ho un'ottima idea." },
        { value: 'd', label: "Ho una buon'idea." },
      ],
      answer: 'd',
      feedback: {
        correct: "Esatto! \"Ho una buon'idea.\" is correct.",
        incorrect: "The correct answer is \"Ho una buon'idea.\"",
        explanation:
          'Before a feminine noun starting with a vowel, "buona" elides to "buon\'": una buon\'idea. Compare the indefinite article: una → un\'idea. Buono mirrors the indefinite article pattern when placed before the noun.',
        optionExplanations: {
          a: '"Un\'buona" is wrong — you cannot have both the elision of the article (un\') AND keep the full adjective. The article is "una" and the adjective elides: una buon\'idea.',
          b: '"Una buon idea" is wrong — "buon" is the form used before masculine nouns starting with consonants (un buon libro), not before feminine nouns.',
          c: '"Ottima" means "excellent/very good" — a different adjective (the superlative of buono). Grammatically fine but not the question being asked.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-agg-06',
      verb: 'bravo (good/skilled)',
      tense: 'Fill in the correct form of the adjective',
      pronouns: [
        'uno studente ___ (masc. sing.)',
        'una studentessa ___ (fem. sing.)',
        'degli studenti ___ (masc. plur.)',
        'delle studentesse ___ (fem. plur.)',
        'un ragazzo ___ (masc. sing.)',
        'delle ragazze ___ (fem. plur.)',
      ],
      answers: ['bravo', 'brava', 'bravi', 'brave', 'bravo', 'brave'],
      feedback: {
        explanation:
          '"Bravo" is a Type-1 adjective: bravo / brava / bravi / brave. The four forms cover all gender/number combinations. Masculine singular = -o, feminine singular = -a, masculine plural = -i, feminine plural = -e.',
      },
    },
    {
      type: 'match',
      id: 'a1-agg-07',
      instruction: 'Match each noun phrase with the correct adjective form.',
      pairs: [
        { left: 'un libro (masc. sing.)', right: 'interessante' },
        { left: 'una casa (fem. sing.)', right: 'grande' },
        { left: 'i ragazzi (masc. plur.)', right: 'stanchi' },
        { left: 'le ragazze (fem. plur.)', right: 'stanche' },
        { left: 'uno zaino (masc. sing.)', right: 'nuovo' },
        { left: 'delle amiche (fem. plur.)', right: 'simpatiche' },
      ],
      feedback: {
        explanation:
          '"Interessante" and "grande" are Type-2 adjectives — same form for both genders in singular. "Stanco" is Type-1: stanco/stanca/stanchi/stanche. "Simpatico" (nice): simpatico → simpatiche (fem. plur., -ca → -che rule).',
      },
    },
    {
      type: 'reorder',
      id: 'a1-agg-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['bella', 'È', 'giornata', 'una', 'davvero'],
      answer: ['È', 'davvero', 'una', 'bella', 'giornata'],
      feedback: {
        correct: 'Perfetto! "È davvero una bella giornata."',
        explanation:
          '"Bello" is one of the adjectives that typically comes BEFORE the noun. Before "giornata" (feminine, starts with g), it takes the form "bella" (regular, after the article). Note: adverbs like "davvero" can precede the noun phrase.',
      },
    },
    {
      type: 'translation',
      id: 'a1-agg-09',
      source: 'The Italian lessons are interesting and difficult.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Le lezioni di italiano sono interessanti e difficili.',
        'Le lezioni italiane sono interessanti e difficili.',
      ],
      feedback: {
        explanation:
          '"Lessons" = lezioni (feminine plural). Both adjectives must agree: interessante → interessanti, difficile → difficili (both Type-2, -e → -i in plural). Note: both adjectives follow the noun and the verb essere.',
        modelAnswer: 'Le lezioni di italiano sono interessanti e difficili.',
      },
    },
  ],
};
