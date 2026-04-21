import type { Lesson } from '../types';

export const articoliIndeterminativi: Lesson = {
  slug: 'articoli-indeterminativi',
  title: 'Articoli Indeterminativi',
  level: 'a1',
  order: 2,
  explanation: {
    text: `## Articoli Indeterminativi (Indefinite Articles)

The Italian indefinite article means **"a" / "an"** in English. It has four forms and is used only with **singular** nouns (Italian has no direct equivalent of "some" at this level — that comes later with *dei / delle*).

### The Four Forms

**Masculine Singular:**
- **un** — before most consonants AND before vowels: *un libro* (a book), *un amico* (a male friend), *un uomo* (a man)
- **uno** — before **s + consonant**, **z**, **gn**, **ps**, **x**, **y**: *uno studente* (a student), *uno zaino* (a backpack), *uno psicologo*

**Feminine Singular:**
- **una** — before consonants (including s+cons., z, gn, ps, etc.): *una casa* (a house), *una studentessa* (a female student), *una psicologa*
- **un'** — before **vowels** (elision): *un'amica* (a female friend), *un'ora* (an hour), *un'idea* (an idea)

### Key Differences from Definite Articles

1. **Masculine before vowels:** the definite article elides (*l'amico*), but the indefinite article does **not** elide — it stays **un**: *un amico* (not *un'amico*, which would be feminine).
2. **Uno for s+cons./z:** just like *lo*, only masculine nouns trigger this. Feminine nouns always use *una* before consonant clusters: *una studentessa* (not *uno studentessa*).
3. **No plural form:** *un libro* → *dei libri* ("some books"). For now, just note there is no plural indefinite article.

### Tips for Learners

- Think of **un** as the "default" masculine form — it's used before consonants and vowels alike.
- Think of **una / un'** as matching *la / l'* — same environment, different article.
- **Uno** is the rarest form and matches the *lo* masculine definite article.`,
    tables: [
      {
        caption: 'Italian Indefinite Articles',
        headers: ['Environment', 'Masculine', 'Feminine'],
        rows: [
          ['Before most consonants', 'un', 'una'],
          ['Before s+cons., z, gn, ps, x, y', 'uno', 'una'],
          ['Before vowels', 'un (no elision!)', "un'"],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-art-indet-01',
      prompt: 'Vorrei ___ caffè, per favore. (I would like a coffee, please.)',
      answer: 'un',
      hint: 'caffè = coffee, masculine singular, starts with c.',
      feedback: {
        correct: 'Perfetto! "Un caffè" is correct.',
        incorrect: 'The correct answer is "un".',
        explanation:
          '"Caffè" is masculine singular and starts with a regular consonant (c). The default masculine indefinite article for consonants and vowels is "un". Only "uno" is used before s+consonant, z, gn, etc.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-art-indet-02',
      prompt: 'Ho ___ idea per la festa. (I have an idea for the party.)',
      answer: "un'",
      hint: 'idea = idea, feminine singular, starts with a vowel.',
      feedback: {
        correct: "Esatto! \"Un'idea\" is correct.",
        incorrect: "The correct answer is \"un'\".",
        explanation:
          '"Idea" is feminine singular and starts with the vowel "i". Feminine indefinite articles elide before vowels: una → un\'. Compare: il → l\' and la → l\' in definite articles.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-art-indet-03',
      prompt: 'C\'è ___ studentessa in aula. (There is a (female) student in the classroom.)',
      answer: 'una',
      hint: 'studentessa = female student, feminine singular, starts with "st".',
      feedback: {
        correct: 'Bravo/a! "Una studentessa" is correct.',
        incorrect: 'The correct answer is "una".',
        explanation:
          '"Studentessa" is feminine singular and starts with "st" (s + consonant). The uno/gli rule applies ONLY to masculine nouns. Feminine nouns always use "una" before all consonant clusters.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-art-indet-04',
      prompt: 'Marco ha ___ zaino rosso. (Marco has a red backpack.)',
      answer: 'uno',
      hint: 'zaino = backpack, masculine singular, starts with "z".',
      feedback: {
        correct: 'Ottimo! "Uno zaino" is correct.',
        incorrect: 'The correct answer is "uno".',
        explanation:
          '"Zaino" is masculine singular and starts with "z" — one of the sounds that triggers "uno" (along with s+consonant, gn, ps, x, y). Uno is the masculine indefinite article equivalent of "lo".',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-art-indet-05',
      question: 'Which indefinite article goes before "amico" (male friend)? — masculine singular',
      options: [
        { value: 'un', label: 'un amico' },
        { value: "un'", label: "un'amico" },
        { value: 'uno', label: 'uno amico' },
        { value: 'una', label: 'una amico' },
      ],
      answer: 'un',
      feedback: {
        correct: 'Corretto! "Un amico" is right.',
        incorrect: 'The correct answer is "un amico".',
        explanation:
          'Unlike the definite article (il → l\'amico with elision), the masculine indefinite article does NOT elide before vowels. It stays as "un amico", not "un\'amico". Elision only occurs for the feminine "una" → "un\'".',
        optionExplanations: {
          "un'": '"Un\'" is the feminine indefinite article used before vowels (un\'amica, un\'ora). "Amico" is masculine, so the feminine form cannot be used here, even though it starts with a vowel.',
          uno: '"Uno" is only used before masculine nouns starting with s+consonant, z, gn, ps, x, y. "Amico" starts with a vowel, not one of those clusters.',
          una: '"Una" is the feminine indefinite article for nouns starting with consonants. "Amico" is masculine.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-art-indet-06',
      question: 'Scegli l\'articolo corretto: Ho visto ___ film interessante. (I saw an interesting film.)',
      options: [
        { value: 'un', label: 'un film' },
        { value: 'uno', label: 'uno film' },
        { value: "un'", label: "un' film" },
        { value: 'una', label: 'una film' },
      ],
      answer: 'un',
      feedback: {
        correct: 'Esatto! "Un film" is right.',
        incorrect: 'The correct answer is "un film".',
        explanation:
          '"Film" is masculine singular. It starts with "f", a regular consonant, so the default masculine article "un" is used. Note: "film" is an invariable noun (plural is also "film") borrowed from English.',
        optionExplanations: {
          uno: '"Uno" is reserved for masculine nouns starting with s+cons., z, gn, ps, x, or y. "Film" starts with a simple consonant "f".',
          "un'": '"Un\'" is exclusively for feminine nouns before vowels. "Film" is masculine.',
          una: '"Una" is a feminine article. "Film" is masculine.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-art-indet-07',
      verb: 'Articolo Indeterminativo',
      tense: 'Fill in the correct indefinite article for each noun',
      pronouns: [
        'libro (book, masc., consonant)',
        'studente (student, masc., s+cons.)',
        'amico (male friend, masc., vowel)',
        'zaino (backpack, masc., z)',
        'casa (house, fem., consonant)',
        'studentessa (female student, fem., s+cons.)',
        'amica (female friend, fem., vowel)',
      ],
      answers: ['un', 'uno', 'un', 'uno', 'una', 'una', "un'"],
      feedback: {
        explanation:
          'The four forms: un (masc. consonant AND vowel), uno (masc. s+cons./z/gn), una (fem. consonant), un\' (fem. vowel). The critical difference: masculine does NOT elide before vowels (un amico), but feminine DOES (un\'amica).',
      },
    },
    {
      type: 'match',
      id: 'a1-art-indet-08',
      instruction: 'Match each noun with its correct indefinite article.',
      pairs: [
        { left: 'penna (pen, fem., cons.)', right: 'una' },
        { left: 'ora (hour, fem., vowel)', right: "un'" },
        { left: 'cane (dog, masc., cons.)', right: 'un' },
        { left: 'gnocco (masc., gn)', right: 'uno' },
        { left: 'idea (fem., vowel)', right: "un'" },
        { left: 'specchio (mirror, masc., sp)', right: 'uno' },
      ],
      feedback: {
        explanation:
          'Both "ora" and "idea" map to un\' — they are both feminine and start with a vowel. Both "gnocco" and "specchio" map to uno — they are both masculine and start with a triggering cluster (gn and sp respectively).',
      },
    },
    {
      type: 'reorder',
      id: 'a1-art-indet-09',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['ho', 'un\'', 'idea', 'bellissima', 'Ho'],
      answer: ['Ho', 'un\'', 'idea', 'bellissima'],
      feedback: {
        correct: "Perfetto! \"Ho un'idea bellissima.\"",
        explanation:
          '"Idea" is feminine singular starting with a vowel, so the indefinite article elides: una → un\'. The adjective "bellissima" follows the feminine noun and agrees: bellissima (not bellissimo).',
      },
    },
    {
      type: 'translation',
      id: 'a1-art-indet-10',
      source: 'She has a new backpack and a pencil.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Ha uno zaino nuovo e una matita.',
        'Lei ha uno zaino nuovo e una matita.',
        'Ha uno zaino nuova e una matita.',
      ],
      feedback: {
        explanation:
          '"Backpack" = zaino (masculine, starts with z → uno). "Pencil" = matita (feminine, starts with m → una). Note that "nuovo" agrees with "zaino" (masculine): uno zaino nuovo.',
        modelAnswer: 'Ha uno zaino nuovo e una matita.',
      },
    },
  ],
};
