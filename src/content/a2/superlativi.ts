import type { Lesson } from '../types';

export const superlativi: Lesson = {
  slug: 'superlativi',
  title: 'Superlativi',
  level: 'a2',
  order: 14,
  explanation: {
    text: `## I Superlativi (Superlatives)

Italian has two types of superlative: **relative** (the most/least … in a group) and **absolute** (very … / extremely …).

### Superlativo Relativo — the most/least

**il/la/i/le + più/meno + adjective (+ di)**

*Marco è il più alto della classe.* (Marco is the tallest in the class.)
*È la città meno cara d'Italia.* (It's the least expensive city in Italy.)

**Rules:**
- The article (il/la/i/le) agrees with the noun.
- After the superlative, use **di** (not "in"): il più grande **del** mondo, la più bella **d'**Italia.
- If the adjective follows the noun, the article is not repeated: *È l'uomo più intelligente.*

### Superlativo Assoluto — very/extremely

**Method 1 — -issimo suffix** (drop final vowel, add -issimo/-issima/-issimi/-issime):
*bello → bellissimo* (very beautiful) / *grande → grandissimo* / *lento → lentissimo*

**Method 2 — molto/tanto/estremamente + adjective:**
*molto bello, tanto stanco, estremamente difficile*

### Irregular Superlatives

The same adjectives with irregular comparatives also have irregular superlatives:

| Adjective | Superlativo relativo | Superlativo assoluto |
|-----------|---------------------|---------------------|
| buono | il migliore | ottimo |
| cattivo | il peggiore | pessimo |
| grande | il maggiore | massimo |
| piccolo | il minore | minimo |

### Spelling Changes with -issimo

- Adjectives ending in -co/-go (masc.): retain the hard sound → *rico → ricchissimo*, *lungo → lunghissimo*
- Adjectives ending in -io: drop the -io then add -issimo → *vario → varissimo*`,
    tables: [
      {
        caption: 'Superlativo Assoluto — -issimo Forms',
        headers: ['Adjective', '-issimo', 'Translation'],
        rows: [
          ['bello', 'bellissimo', 'very beautiful'],
          ['bravo', 'bravissimo', 'very good/talented'],
          ['stanco', 'stanchissimo', 'very tired'],
          ['lungo', 'lunghissimo', 'very long'],
          ['buono', 'buonissimo / ottimo', 'very good (taste) / excellent'],
          ['cattivo', 'cattivissimo / pessimo', 'very bad / terrible'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "il piu bello", translation: "the most beautiful", example: "E il piu bello dei musei che ho visitato.", exampleTranslation: "It is the most beautiful of the museums I have visited." },
    { word: "il migliore", translation: "the best", example: "E il migliore ristorante della citta.", exampleTranslation: "It is the best restaurant in the city." },
    { word: "altissimo", translation: "very tall / extremely tall", example: "Il Monte Bianco è altissimo.", exampleTranslation: "Mont Blanc is extremely tall." },
    { word: "buonissimo", translation: "very good / delicious", example: "Questa pasta è buonissima!", exampleTranslation: "This pasta is absolutely delicious!" },
    { word: "il peggiore", translation: "the worst", example: "E stato il peggior film della stagione.", exampleTranslation: "It was the worst film of the season." },
    { word: "il piu caro", translation: "the most expensive", example: "Questo negozio vende i prodotti piu cari.", exampleTranslation: "This shop sells the most expensive products." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-sup-01',
      prompt: 'Questo film è ___ (bellissimo). I loved it! (This film is extremely beautiful.)',
      answer: 'bellissimo',
      feedback: {
        correct: 'Esatto! "Bellissimo" — superlativo assoluto of bello.',
        incorrect: 'The correct answer is "bellissimo".',
        explanation:
          '"Bello" → drop final -o → bell- + -issimo = bellissimo. The superlativo assoluto (-issimo) means "very" or "extremely." It agrees in gender and number: bellissimo (masc. sing.).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-sup-02',
      prompt: 'Roma è la città più bella ___ Italia. (Rome is the most beautiful city in Italy.)',
      answer: "d'",
      hint: 'After a superlative, "in" = di. D\'Italia = di + Italia.',
      feedback: {
        correct: 'Perfetto! "La più bella d\'Italia" — di contracts with Italia.',
        incorrect: "The correct answer is \"d'\".",
        explanation:
          'Italian uses "di" (not "in") after superlatives: il più alto della classe (del = di + il), la più bella d\'Italia (d\' = di + I before vowel). Never use "in" directly after a superlative.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-sup-03',
      prompt: 'Era ___ (stanco — superlativo assoluto) dopo il viaggio. (He was extremely tired after the journey.)',
      answer: 'stanchissimo',
      hint: 'stanco → stanchissimo (keep hard c sound → ch before -issimo)',
      feedback: {
        correct: 'Bravo/a! "Stanchissimo" — the c→ch spelling change before -issimo.',
        incorrect: 'The correct answer is "stanchissimo".',
        explanation:
          '"Stanco" ends in -co. To keep the hard /k/ sound before -issimo, change c → ch: stanc- → stanch- + -issimo = stanchissimo. Same pattern: lungo → lunghissimo, ricco → ricchissimo.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-sup-04',
      question: 'Which sentence correctly expresses "the worst restaurant in the city"?',
      options: [
        { value: 'a', label: 'il più cattivo ristorante della città' },
        { value: 'b', label: 'il peggiore ristorante della città' },
        { value: 'c', label: 'il ristorante pessimo della città' },
        { value: 'd', label: 'il più peggiore ristorante' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Il peggiore ristorante della città" — irregular superlativo relativo.',
        incorrect: 'The correct answer is "il peggiore ristorante della città".',
        explanation:
          '"Peggiore" is the irregular comparative AND superlativo relativo of "cattivo". With the definite article it becomes superlative: il peggiore = the worst. "Della città" = di + la = della.',
        optionExplanations: {
          a: '"Più cattivo" is acceptable but the irregular "peggiore" is preferred for the superlative.',
          c: '"Pessimo" is the superlativo ASSOLUTO (very bad/terrible), not relative.',
          d: '"Il più peggiore" is redundant — "peggiore" already has the comparative meaning built in.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-sup-05',
      question: '"La qualità è ___." — The quality is minimum/lowest. (Formal/technical)',
      options: [
        { value: 'a', label: 'minima' },
        { value: 'b', label: 'minimissima' },
        { value: 'c', label: 'la più piccola' },
        { value: 'd', label: 'piccolissima' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Minima" — irregular superlativo assoluto of piccolo.',
        incorrect: 'The correct answer is "minima".',
        explanation:
          '"Minimo/a" is the irregular superlativo assoluto of "piccolo" and is used in formal/technical contexts (qualità minima, temperatura minima, sforzo minimo). It agrees in gender: la qualità è minima (fem.).',
        optionExplanations: {
          b: '"Minimissima" does not exist — irregular superlatives do not add -issimo.',
          c: '"La più piccola" is a relative superlative (the smallest), not absolute.',
          d: '"Piccolissima" = very small, but the technical/formal term for minimum quality is "minima".',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-sup-06',
      verb: 'Superlativo assoluto (-issimo)',
      tense: 'Form the superlativo assoluto — agree with: masc. sing.',
      pronouns: ['bello', 'bravo', 'stanco', 'lungo', 'buono (irregular)', 'cattivo (irregular)'],
      answers: ['bellissimo', 'bravissimo', 'stanchissimo', 'lunghissimo', 'ottimo', 'pessimo'],
      feedback: {
        explanation:
          'Regular -issimo: bello → bellissimo, bravo → bravissimo. Hard-sound preservation: stanco → stanchissimo, lungo → lunghissimo. Irregular (must memorise): buono → ottimo, cattivo → pessimo. Ottimo and pessimo do not use -issimo.',
      },
    },
    {
      type: 'match',
      id: 'a2-sup-07',
      instruction: 'Match each sentence with its English translation.',
      pairs: [
        { left: 'È il miglior vino d\'Italia.', right: 'It\'s the best wine in Italy.' },
        { left: 'Questa torta è buonissima!', right: 'This cake is delicious!' },
        { left: 'È l\'albergo meno caro.', right: 'It\'s the least expensive hotel.' },
        { left: 'Ha ottenuto il punteggio massimo.', right: 'He got the maximum score.' },
        { left: 'La situazione è pessima.', right: 'The situation is terrible.' },
      ],
      feedback: {
        explanation:
          '"Il miglior vino" = superlativo relativo (migliore before noun drops final -e → miglior). "Buonissima" = superlativo assoluto. "Meno caro" = superlativo relativo with meno. "Massimo" = irregular superlativo assoluto of grande. "Pessima" = irregular superlativo assoluto of cattivo.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-sup-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['del', 'più', 'alta', 'È', 'la', 'ragazza', 'mondo'],
      answer: ['È', 'la', 'ragazza', 'più', 'alta', 'del', 'mondo'],
      feedback: {
        correct: 'Perfetto! "È la ragazza più alta del mondo."',
        explanation:
          '"La ragazza più alta" = the tallest girl (article + noun + più + adjective — adjective follows noun). "Del mondo" = di + il = del (superlative + di + domain). This is the standard relative superlative word order when the adjective follows the noun.',
      },
    },
    {
      type: 'translation',
      id: 'a2-sup-09',
      source: 'This is the most interesting lesson and the students are very attentive.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Questa è la lezione più interessante e gli studenti sono attentissimi.',
        'Questa è la lezione più interessante e gli studenti sono molto attenti.',
        'Questa è la lezione più interessante e gli studenti sono estremamente attenti.',
      ],
      feedback: {
        explanation:
          '"Most interesting lesson" = la lezione più interessante (superlativo relativo — no domain specified here). "Very attentive" = attentissimi (-issimo, masc. plur. studenti) OR molto attenti. Both forms are correct.',
        modelAnswer: 'Questa è la lezione più interessante e gli studenti sono attentissimi.',
      },
    },
  ],
};
