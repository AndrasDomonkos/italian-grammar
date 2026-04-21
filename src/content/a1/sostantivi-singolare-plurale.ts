import type { Lesson } from '../types';

export const sostantiviSingolarePlurale: Lesson = {
  slug: 'sostantivi-singolare-plurale',
  title: 'Sostantivi: Singolare e Plurale',
  level: 'a1',
  order: 5,
  explanation: {
    text: `## Sostantivi: Singolare e Plurale (Nouns: Singular and Plural)

Italian nouns change their ending to form the plural. The pattern depends on the noun's **gender** and **singular ending**. Unlike English, you do not simply add "-s".

### The Main Patterns

**Masculine nouns ending in -o → -i:**
*libro → libri*, *ragazzo → ragazzi*, *amico → amici*, *bambino → bambini*

**Feminine nouns ending in -a → -e:**
*casa → case*, *ragazza → ragazze*, *amica → amiche*, *parola → parole*

**Nouns ending in -e (masc. or fem.) → -i:**
*studente → studenti* (m), *cane → cani* (m), *classe → classi* (f), *chiave → chiavi* (f)

### Special Cases

**Nouns ending in -ca / -ga (feminine):**
Keep the hard sound: add **-che** / **-ghe** (insert h):
*amica → amiche*, *banca → banche*, *collega → colleghe*

**Nouns ending in -co / -go (masculine):**
Usually **-chi / -ghi** (hard sound, insert h) for words stressed on the second-to-last syllable:
*banco → banchi*, *lago → laghi*, *albergo → alberghi*
BUT some take **-ci / -gi**: *amico → amici*, *medico → medici*, *parrucchiere...* — these tend to be words stressed earlier.

**Nouns ending in -cia / -gia:**
If preceded by a consonant → drop the i: *arancia → arance*, *pioggia → piogge*
If preceded by a vowel → keep the i: *camicia → camicie*

**Invariable nouns** — do not change in the plural:
- Nouns ending in accented vowel: *città → città*, *caffè → caffè*, *virtù → virtù*
- Nouns ending in consonant (borrowings): *bar → bar*, *sport → sport*, *film → film*

### Gender Reminder

Most nouns ending in **-o** are masculine; most ending in **-a** are feminine. Nouns in **-e** can be either: *il dente* (m), *la fonte* (f). Always learn the article with the noun.`,
    tables: [
      {
        caption: 'Noun Plural Patterns',
        headers: ['Singular ending', 'Plural ending', 'Example'],
        rows: [
          ['-o (masc.)', '-i', 'libro → libri'],
          ['-a (fem.)', '-e', 'casa → case'],
          ['-e (masc. or fem.)', '-i', 'studente → studenti'],
          ['-ca / -ga (fem.)', '-che / -ghe', 'amica → amiche'],
          ['-co / -go (masc.)', '-chi / -ghi (usually)', 'lago → laghi'],
          ['Accented vowel', 'no change', 'città → città'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-sost-01',
      prompt: 'Un libro → due ___ (two books)',
      answer: 'libri',
      feedback: {
        correct: 'Corretto! "Libri" is the plural of "libro".',
        incorrect: 'The correct answer is "libri".',
        explanation:
          '"Libro" is masculine and ends in -o. The regular plural of masculine -o nouns is -i: libro → libri, ragazzo → ragazzi, bambino → bambini.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-sost-02',
      prompt: 'Una città → due ___ (two cities)',
      answer: 'città',
      feedback: {
        correct: 'Esatto! "Città" is unchanged in the plural.',
        incorrect: 'The correct answer is "città" — it does not change.',
        explanation:
          'Nouns ending in an accented vowel are invariable in Italian — they have the same form in singular and plural. Other examples: il caffè → i caffè, la virtù → le virtù.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-sost-03',
      prompt: 'La classe → le ___ (the classes)',
      answer: 'classi',
      hint: 'classe ends in -e → plural in -i.',
      feedback: {
        correct: 'Bravo/a! "Classi" is correct.',
        incorrect: 'The correct answer is "classi".',
        explanation:
          '"Classe" ends in -e (feminine). All nouns ending in -e, regardless of gender, take -i in the plural: classe → classi, studente → studenti, chiave → chiavi.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-sost-04',
      question: 'What is the plural of "amica" (female friend)?',
      options: [
        { value: 'amice', label: 'amice' },
        { value: 'amichi', label: 'amichi' },
        { value: 'amiche', label: 'amiche' },
        { value: 'amici', label: 'amici' },
      ],
      answer: 'amiche',
      feedback: {
        correct: 'Corretto! "Amiche" is the plural.',
        incorrect: 'The correct answer is "amiche".',
        explanation:
          '"Amica" ends in -ca. To preserve the hard /k/ sound in the plural, Italian inserts an h: -ca → -che. Without the h, "amice" would be pronounced differently (/ami-che/ vs /ami-tche/). The same applies to banca → banche, amica → amiche.',
        optionExplanations: {
          amice: '"Amice" is wrong because without the h, the "c" before "e" would be pronounced /tʃ/ (like "ch" in "church"), which changes the word\'s sound incorrectly.',
          amichi: '"Amichi" uses the masculine -chi ending. "Amica" is feminine and takes -che, not -chi.',
          amici: '"Amici" is the plural of "amico" (male friend). "Amica" (female) → "amiche".',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-sost-05',
      question: 'Choose the correct plural of "film" (film/movie):',
      options: [
        { value: 'filmi', label: 'filmi' },
        { value: 'films', label: 'films' },
        { value: 'film', label: 'film' },
        { value: 'filme', label: 'filme' },
      ],
      answer: 'film',
      feedback: {
        correct: 'Esatto! "Film" is invariable.',
        incorrect: 'The correct answer is "film" — it does not change.',
        explanation:
          'Foreign nouns ending in a consonant are invariable in Italian. The plural is the same as the singular: un film → due film, il bar → i bar, lo sport → gli sport.',
        optionExplanations: {
          filmi: 'Italian does not add -i to foreign words ending in consonants. The word keeps its original spelling.',
          films: 'Italian does not add -s for plurals (that\'s English). Italian plurals change the final vowel or are invariable.',
          filme: '"Filme" is not Italian. Italian does not add -e to foreign words.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-sost-06',
      verb: 'Formazione del Plurale',
      tense: 'Write the plural of each noun',
      pronouns: [
        'ragazzo (boy, masc. -o)',
        'ragazza (girl, fem. -a)',
        'studente (student, -e)',
        'banco (desk, masc. -co)',
        'amica (female friend, fem. -ca)',
        'caffè (coffee, accented vowel)',
      ],
      answers: ['ragazzi', 'ragazze', 'studenti', 'banchi', 'amiche', 'caffè'],
      feedback: {
        explanation:
          'Patterns: -o → -i (ragazzi), -a → -e (ragazze), -e → -i (studenti), -co → -chi (banchi — hard sound preserved), -ca → -che (amiche — hard sound preserved), accented vowel → unchanged (caffè).',
      },
    },
    {
      type: 'match',
      id: 'a1-sost-07',
      instruction: 'Match each singular noun with its correct plural.',
      pairs: [
        { left: 'libro', right: 'libri' },
        { left: 'casa', right: 'case' },
        { left: 'chiave (key)', right: 'chiavi' },
        { left: 'lago (lake)', right: 'laghi' },
        { left: 'sport', right: 'sport' },
        { left: 'arancia (orange)', right: 'arance' },
      ],
      feedback: {
        explanation:
          '"Lago" → laghi (hard /g/ preserved with h). "Sport" is invariable (foreign word, ends in consonant). "Arancia" → arance: -cia preceded by consonant (r) drops the i in plural.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-sost-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['libri', 'sulla', 'I', 'pesanti', 'sono', 'scrivania'],
      answer: ['I', 'libri', 'sono', 'pesanti', 'sulla', 'scrivania'],
      feedback: {
        correct: 'Perfetto! "I libri sono pesanti sulla scrivania."',
        explanation:
          '"Libri" is the plural of "libro" (masculine). The definite article "i" is used for masculine plural nouns starting with regular consonants. The adjective "pesanti" agrees with the plural noun: pesante → pesanti.',
      },
    },
    {
      type: 'translation',
      id: 'a1-sost-09',
      source: 'The friends (female) are in the classroom.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Le amiche sono in classe.',
        'Le amiche sono nell\'aula.',
        'Le amiche sono in aula.',
      ],
      feedback: {
        explanation:
          '"Friends (female)" = amiche (plural of amica; note -ca → -che). The definite article for feminine plural is always "le". "In the classroom" = in classe (without article) or nell\'aula / in aula.',
        modelAnswer: 'Le amiche sono in classe.',
      },
    },
  ],
};
