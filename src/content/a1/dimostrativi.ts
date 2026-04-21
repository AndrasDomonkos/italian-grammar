import type { Lesson } from '../types';

export const dimostrativi: Lesson = {
  slug: 'dimostrativi',
  title: 'Dimostrativi: Questo e Quello',
  level: 'a1',
  order: 12,
  explanation: {
    text: `## Dimostrativi: Questo e Quello (Demonstratives: This and That)

Italian has two demonstratives: **questo** (this — near the speaker) and **quello** (that — away from the speaker). Both agree with the noun in gender and number.

### Questo (this / these)

"Questo" has four regular forms:

| | Masculine | Feminine |
|-|-----------|----------|
| Singular | questo | questa |
| Plural | questi | queste |

Before a vowel, *questo* and *questa* can elide: *quest'anno* (this year), *quest'idea* (this idea) — but elision is optional and more common in speech.

### Quello (that / those) — Mirrors the Definite Article

"Quello" is more complex: its form depends on the **first sound of the following noun** (just like the definite article *il/lo/l'/i/gli/la/le*):

| Article | Quello form | Example |
|---------|-------------|---------|
| il | quel | quel libro |
| lo | quello | quello studente |
| l' | quell' | quell'amico |
| i | quei | quei libri |
| gli | quegli | quegli studenti / quegli amici |
| la | quella | quella casa |
| l' | quell' | quell'amica |
| le | quelle | quelle case |

**Memory trick:** replace *il/lo/l'/i/gli/la/l'/le* with *quel/quello/quell'/quei/quegli/quella/quell'/quelle*.

### As Pronouns

Both *questo* and *quello* can be used as pronouns (without a noun): *Prendo questo* (I'll take this one). *Quello è mio* (That one is mine). As standalone pronouns: *questo / questa / questi / queste* and *quello / quella / quelli / quelle*.`,
    tables: [
      {
        caption: 'Quello — Forms by Initial Sound',
        headers: ['Initial sound', 'Sing.', 'Plur.', 'Example (sing.)'],
        rows: [
          ['Consonant (most)', 'quel', 'quei', 'quel ragazzo / quei ragazzi'],
          ['s+cons., z, gn, ps', 'quello', 'quegli', 'quello studente / quegli studenti'],
          ['Vowel', "quell'", 'quegli / quelle', "quell'amico / quegli amici"],
          ['fem. consonant', 'quella', 'quelle', 'quella casa / quelle case'],
          ['fem. vowel', "quell'", 'quelle', "quell'amica / quelle amiche"],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-dim-01',
      prompt: '___ ragazza si chiama Laura. (This girl is called Laura.)',
      answer: 'Questa',
      feedback: {
        correct: 'Perfetto! "Questa" is the feminine singular of questo.',
        incorrect: 'The correct answer is "Questa".',
        explanation:
          '"Ragazza" is feminine singular. "This" in Italian is questo for masculine and questa for feminine singular. Since the noun starts with a consonant (r), no elision occurs.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-dim-02',
      prompt: 'Preferisci ___ libro o ___ libro? (Do you prefer this book or that book?) [this = quel, that = questo]',
      answer: ['questo libro o quel libro', 'questo libro o quello'],
      hint: 'libro = masculine singular; "that" before a regular consonant → quel.',
      feedback: {
        correct: 'Esatto! "Questo libro o quel libro."',
        incorrect: 'The expected phrase is "questo libro o quel libro".',
        explanation:
          '"Questo" = this (near). "Quel" = that (before masculine singular nouns starting with a regular consonant, like "libro" starting with l). The full form "quello" would be used before s+cons., z, gn: quello studente.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-dim-03',
      prompt: '___ studente parla molto bene. (That student speaks very well.) [masculine, s+cons.]',
      answer: 'Quello',
      hint: 'studente starts with "st" (s + consonant) → quello.',
      feedback: {
        correct: 'Esatto! "Quello studente" is correct.',
        incorrect: 'The correct answer is "Quello".',
        explanation:
          '"Studente" starts with "st" (s + consonant). Just as the definite article uses "lo studente", the demonstrative uses "quello studente". Quel would be wrong here: *quel studente is incorrect.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-dim-04',
      question: 'Which demonstrative goes before "amici" (male friends, masculine plural, starts with vowel)?',
      options: [
        { value: 'quei', label: 'quei amici' },
        { value: 'quegli', label: 'quegli amici' },
        { value: 'quelli', label: 'quelli amici' },
        { value: 'queste', label: 'queste amici' },
      ],
      answer: 'quegli',
      feedback: {
        correct: 'Esatto! "Quegli amici" is correct.',
        incorrect: 'The correct answer is "quegli amici".',
        explanation:
          '"Amici" is masculine plural and starts with a vowel (a). Masculine plural before vowels uses "quegli" — just as the article uses "gli amici". Think: gli → quegli. The same form is used before z, s+cons., gn.',
        optionExplanations: {
          quei: '"Quei" is for masculine plural nouns starting with regular consonants: quei libri, quei ragazzi. "Amici" starts with a vowel → quegli.',
          quelli: '"Quelli" is used as a standalone pronoun (those ones), not as an adjective before a noun.',
          queste: '"Queste" is the feminine plural of "questo" (these). "Amici" is masculine.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-dim-05',
      question: 'Complete: "___ scarpe sono troppo care." (Those shoes are too expensive.) [fem. plur.]',
      options: [
        { value: 'quella', label: 'quella scarpe' },
        { value: 'quelle', label: 'quelle scarpe' },
        { value: 'queste', label: 'queste scarpe' },
        { value: 'quegli', label: 'quegli scarpe' },
      ],
      answer: 'quelle',
      feedback: {
        correct: 'Corretto! "Quelle scarpe" — feminine plural of quello.',
        incorrect: 'The correct answer is "quelle scarpe".',
        explanation:
          '"Scarpe" is feminine plural. The feminine plural of "quello" is always "quelle" — regardless of the initial sound (just like the article "le"). Quelle = that/those (fem. plur.); queste = these (fem. plur.).',
        optionExplanations: {
          quella: '"Quella" is feminine singular. "Scarpe" is plural.',
          queste: '"Queste" means "these" (near). The question asks for "those" (far) = quelle.',
          quegli: '"Quegli" is masculine plural. "Scarpe" is feminine.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-dim-06',
      verb: 'quello — Demonstrative Forms',
      tense: 'Fill in the correct form of "quello" (that/those)',
      pronouns: [
        'libro (masc. sing., consonant)',
        'studente (masc. sing., s+cons.)',
        "amico (masc. sing., vowel)",
        'libri (masc. plur., consonant)',
        'studenti (masc. plur., s+cons./vowel)',
        'casa (fem. sing., consonant)',
        'ora (fem. sing., vowel)',
        'case (fem. plur.)',
      ],
      answers: ['quel', 'quello', "quell'", 'quei', 'quegli', 'quella', "quell'", 'quelle'],
      feedback: {
        explanation:
          'Quello mirrors the definite article: quel/quello/quell\'/quei/quegli/quella/quell\'/quelle corresponds to il/lo/l\'/i/gli/la/l\'/le. Learning the article pattern automatically teaches you the quello pattern.',
      },
    },
    {
      type: 'match',
      id: 'a1-dim-07',
      instruction: 'Match each noun phrase with the correct form of "quello".',
      pairs: [
        { left: 'zaino (masc. sing., z)', right: 'quello zaino' },
        { left: 'ragazzi (masc. plur., cons.)', right: 'quei ragazzi' },
        { left: 'borsa (fem. sing., cons.)', right: 'quella borsa' },
        { left: "uomo (masc. sing., vowel)", right: "quell'uomo" },
        { left: 'libri (masc. plur., cons.)', right: 'quei libri' },
        { left: 'scarpe (fem. plur.)', right: 'quelle scarpe' },
      ],
      feedback: {
        explanation:
          '"Zaino" (z) → quello. "Uomo" (vowel, masc. sing.) → quell\'. "Quei" covers all masculine plural before regular consonants. "Quelle" covers all feminine plural regardless of initial sound.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-dim-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['anno', 'è', "Quest'", 'davvero', 'difficile'],
      answer: ["Quest'", 'anno', 'è', 'davvero', 'difficile'],
      feedback: {
        correct: "Perfetto! \"Quest'anno è davvero difficile.\"",
        explanation:
          '"Quest\'" is the elided form of "questo" before a vowel: questo + anno → quest\'anno. This is an optional elision that is very common in speech and writing. "Davvero" = truly/really.',
      },
    },
    {
      type: 'translation',
      id: 'a1-dim-09',
      source: 'I prefer this restaurant, not that one.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Preferisco questo ristorante, non quello.',
        'Preferisco questo ristorante, non quel ristorante.',
        'Io preferisco questo ristorante, non quello.',
      ],
      feedback: {
        explanation:
          '"This restaurant" = questo ristorante (masculine, starts with r → questo). "That one" as a standalone pronoun = quello. "Preferisco" is the io form of preferire (a -isc- verb): prefer- + isco = preferisco.',
        modelAnswer: 'Preferisco questo ristorante, non quello.',
      },
    },
  ],
};
