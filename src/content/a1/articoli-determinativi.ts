import type { Lesson } from '../types';

export const articoliDeterminativi: Lesson = {
  slug: 'articoli-determinativi',
  title: 'Articoli Determinativi',
  level: 'a1',
  order: 1,
  explanation: {
    text: `## Articoli Determinativi (Definite Articles)

In Italian, the definite article corresponds to English **"the"**. Unlike English, Italian has **seven distinct forms** that change depending on the **gender** (masculine/feminine), **number** (singular/plural), and — crucially — the **first sound of the word that follows**.

### Gender and Number

Every Italian noun is either **masculine** or **feminine**, and either **singular** or **plural**. The definite article must agree with the noun in both gender and number. There is no neutral gender.

### Masculine Singular

- **il** — before most consonants: *il libro* (the book), *il ragazzo* (the boy), *il padre* (the father)
- **lo** — before **s + consonant** (sc, sp, st, sn…), **z**, **gn**, **ps**, **x**, **y**: *lo studente* (the student), *lo zaino* (the backpack), *lo gnocco*, *lo psicologo*
- **l'** — before any **vowel**: *l'amico* (the friend), *l'albero* (the tree), *l'uomo* (the man)

### Masculine Plural

- **i** — before most consonants: *i libri* (the books), *i ragazzi* (the boys)
- **gli** — before **s + consonant**, **z**, **gn**, **ps**, **x**, **y**, and **all vowels**: *gli studenti*, *gli zaini*, *gli amici*, *gli uomini*

### Feminine Singular

- **la** — before consonants (including sc, sp, ps, etc.): *la casa* (the house), *la studentessa* (the female student), *la psicologa*
- **l'** — before vowels: *l'amica* (the female friend), *l'ora* (the hour), *l'estate* (the summer)

### Feminine Plural

- **le** — always, regardless of the following sound: *le case*, *le studentesse*, *le amiche*, *le ore*

---

### Key Rules to Remember

1. **lo / gli** are triggered by the *sound*, not just the spelling. "Sc", "sp", "st", "sn", "z", "gn", "ps", "x", "y" all require **lo** (singular) or **gli** (plural) for masculine nouns.
2. **The lo/gli rule is masculine only.** Feminine nouns take **la** before *all* consonants — including "sc", "sp", "ps" — and **l'** only before vowels.
3. **l'** is used for both genders in the singular before vowels, but the plurals differ: **gli** (masculine) vs **le** (feminine).
4. When an adjective precedes the noun, the article is chosen based on the *adjective's* first sound: *lo strano uomo* (not *il strano uomo*).`,
    tables: [
      {
        caption: 'Italian Definite Articles — Complete Table',
        headers: ['Context', 'Masc. Sing.', 'Masc. Plur.', 'Fem. Sing.', 'Fem. Plur.'],
        rows: [
          ['Before most consonants', 'il', 'i', 'la', 'le'],
          ['Before s+cons., z, gn, ps, x, y', 'lo', 'gli', 'la', 'le'],
          ['Before vowels', "l'", 'gli', "l'", 'le'],
        ],
      },
      {
        caption: 'Examples by Article Form',
        headers: ['Article', 'Example', 'English'],
        rows: [
          ['il', 'il libro', 'the book'],
          ['lo', 'lo studente', 'the student'],
          ["l' (masc.)", "l'amico", 'the (male) friend'],
          ['i', 'i libri', 'the books'],
          ['gli', 'gli studenti / gli amici', 'the students / the (male) friends'],
          ['la', 'la casa', 'the house'],
          ["l' (fem.)", "l'amica", 'the (female) friend'],
          ['le', 'le case', 'the houses'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: 'il gatto', translation: 'the cat', example: 'Il gatto dorme sul divano.', exampleTranslation: 'The cat sleeps on the sofa.' },
    { word: 'la casa', translation: 'the house', example: 'La casa è grande e bella.', exampleTranslation: 'The house is big and beautiful.' },
    { word: 'lo studente', translation: 'the student (m.)', example: 'Lo studente studia italiano.', exampleTranslation: 'The student studies Italian.' },
    { word: 'la scuola', translation: 'the school', example: 'La scuola inizia alle otto.', exampleTranslation: 'School starts at eight.' },
    { word: 'il libro', translation: 'the book', example: 'Il libro è sul tavolo.', exampleTranslation: 'The book is on the table.' },
    { word: 'gli amici', translation: 'the friends', example: 'Gli amici vengono a cena.', exampleTranslation: 'The friends are coming to dinner.' },
    { word: 'le ragazze', translation: 'the girls', example: 'Le ragazze parlano italiano.', exampleTranslation: 'The girls speak Italian.' },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-art-det-01',
      prompt: '___ libro è sul tavolo. (The book is on the table.)',
      answer: 'il',
      hint: 'libro = book, masculine singular, starts with a regular consonant.',
      feedback: {
        correct: 'Perfetto! "Il" is the right choice.',
        incorrect: 'The correct answer is "il".',
        explanation:
          '"Libro" is masculine singular and starts with "l" — a regular consonant. Regular-consonant masculine singulars always take "il". Compare: lo studente (s+consonant), l\'amico (vowel).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-art-det-02',
      prompt: '___ studente studia ogni giorno. (The student studies every day.)',
      answer: 'lo',
      hint: 'studente = student, masculine singular, starts with "st" (s + consonant).',
      feedback: {
        correct: 'Esatto! "Lo" is correct.',
        incorrect: 'The correct answer is "lo".',
        explanation:
          '"Studente" begins with "st" — the letter s followed immediately by another consonant (t). This consonant cluster always triggers "lo" in the masculine singular and "gli" in the plural, never "il" or "i".',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-art-det-03',
      prompt: "___ amica di Maria si chiama Sofia. (Maria's (female) friend is called Sofia.)",
      answer: "l'",
      hint: 'amica = female friend, feminine singular, starts with a vowel.',
      feedback: {
        correct: "Bravo/a! \"L'\" is correct.",
        incorrect: "The correct answer is \"l'\".",
        explanation:
          '"Amica" is feminine singular and starts with the vowel "a", so the article elides to "l\'". Note the plural: le amiche — feminine plural articles never elide, they always stay as "le".',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-art-det-04',
      prompt: 'Dove sono ___ occhiali? (Where are the glasses?)',
      answer: 'gli',
      hint: 'occhiali = glasses, masculine plural, starts with a vowel.',
      feedback: {
        correct: 'Ottimo! "Gli" is the right form.',
        incorrect: 'The correct answer is "gli".',
        explanation:
          '"Occhiali" is masculine plural and starts with the vowel "o". In the masculine plural, both vowel-initial words and words beginning with z/s+cons./gn use "gli". The singular would be: l\'occhiale (l\' before a vowel, masculine singular).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-art-det-05',
      question: 'Which definite article goes before "zaino" (backpack)? — masculine singular',
      options: [
        { value: 'il', label: 'il zaino' },
        { value: 'lo', label: 'lo zaino' },
        { value: "l'", label: "l'zaino" },
        { value: 'la', label: 'la zaino' },
      ],
      answer: 'lo',
      feedback: {
        correct: 'Corretto! "Lo zaino" is right.',
        incorrect: 'The correct answer is "lo zaino".',
        explanation:
          '"Zaino" starts with "z", which always requires "lo" in the masculine singular (and "gli" in the plural: gli zaini). The lo/gli rule covers z, s+consonant, gn, ps, x, and y.',
        optionExplanations: {
          il: '"Il" is for masculine singular nouns beginning with most simple consonants (il libro, il gatto, il padre) — but never before z or s+consonant.',
          "l'": '"L\'" is only used before vowels (l\'amico, l\'albero). "Zaino" starts with a consonant, so elision does not apply.',
          la: '"La" is a feminine singular article. "Zaino" is a masculine noun, so a feminine article is grammatically wrong here.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-art-det-06',
      question: 'Scegli l\'articolo corretto: ___ amici di Paolo sono simpatici. (Paolo\'s friends are nice.)',
      options: [
        { value: 'i', label: 'i amici' },
        { value: 'gli', label: 'gli amici' },
        { value: 'le', label: 'le amici' },
        { value: "l'", label: "l'amici" },
      ],
      answer: 'gli',
      feedback: {
        correct: 'Ottimo! "Gli amici" is correct.',
        incorrect: 'The correct answer is "gli amici".',
        explanation:
          '"Amici" is masculine plural and starts with a vowel. The masculine plural article before vowels (and before z, s+cons., gn…) is always "gli". This is the plural counterpart of "l\'" for masculine singulars.',
        optionExplanations: {
          i: '"I" is the masculine plural article for regular consonants (i libri, i ragazzi). It cannot precede vowels; the resulting hiatus would violate Italian phonology.',
          le: '"Le" is exclusively feminine plural. "Amici" is masculine, so this is incorrect regardless of the initial sound.',
          "l'": '"L\'" (the elided form) only appears in the singular. Plural articles never elide — they remain as "gli" (masculine) or "le" (feminine) in full.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-art-det-07',
      question: 'Which article goes before "psicologa" (female psychologist)? — feminine singular',
      options: [
        { value: 'lo', label: 'lo psicologa' },
        { value: 'la', label: 'la psicologa' },
        { value: "l'", label: "l'psicologa" },
        { value: 'il', label: 'il psicologa' },
      ],
      answer: 'la',
      feedback: {
        correct: 'Esatto! "La psicologa" is correct.',
        incorrect: 'The correct answer is "la psicologa".',
        explanation:
          'Even though "psicologa" begins with "ps" — a cluster that triggers lo/gli in masculine nouns — the lo/gli rule is MASCULINE ONLY. Feminine nouns always use "la" before consonants (including ps, sc, sp, gn) and "l\'" only before vowels.',
        optionExplanations: {
          lo: '"Lo" is a masculine article. Even though "ps" would trigger "lo" for a masculine noun (lo psicologo), it has no effect on feminine nouns — they always take "la" before consonants.',
          "l'": '"L\'" applies to feminine singulars only before vowels. "Psicologa" begins with a consonant (p), so "la" is required, not "l\'".',
          il: '"Il" is masculine singular. "Psicologa" is feminine, so a masculine article is grammatically impossible here.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-art-det-08',
      verb: 'Articolo Determinativo',
      tense: 'Fill in the correct definite article for each noun',
      pronouns: [
        'libro — masc. sing., regular consonant',
        'studente — masc. sing., s + consonant',
        "amico — masc. sing., vowel",
        'libri — masc. plur., regular consonant',
        'amici — masc. plur., vowel',
        'casa — fem. sing., consonant',
        'ora — fem. sing., vowel',
        'case — fem. plur.',
      ],
      answers: ['il', 'lo', "l'", 'i', 'gli', 'la', "l'", 'le'],
      feedback: {
        explanation:
          'The seven forms: il / lo / l\' (masc. sing.) — i / gli (masc. plur.) — la / l\' (fem. sing.) — le (fem. plur.). The deciding factor is always the FIRST SOUND of the following word, combined with its gender and number.',
      },
    },
    {
      type: 'match',
      id: 'a1-art-det-09',
      instruction: 'Match each noun (left) with its correct definite article (right).',
      pairs: [
        { left: 'libro (book, masc. sing.)', right: 'il' },
        { left: 'zaino (backpack, masc. sing.)', right: 'lo' },
        { left: 'amici (friends, masc. plur.)', right: 'gli' },
        { left: 'ragazza (girl, fem. sing.)', right: 'la' },
        { left: "università (university, fem. sing.)", right: "l'" },
        { left: 'case (houses, fem. plur.)', right: 'le' },
      ],
      feedback: {
        explanation:
          '"Zaino" (z) → lo; "amici" (masc. plur. vowel) → gli; "università" (fem. sing. vowel) → l\'. Notice that l\' serves BOTH genders in the singular before vowels, but the plurals diverge: gli (masc.) vs le (fem.).',
      },
    },
    {
      type: 'reorder',
      id: 'a1-art-det-10',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['il', 'Lo', 'libro', 'in', 'studente', 'legge', 'biblioteca'],
      answer: ['Lo', 'studente', 'legge', 'il', 'libro', 'in', 'biblioteca'],
      feedback: {
        correct: 'Perfetto! "Lo studente legge il libro in biblioteca."',
        explanation:
          'Two articles appear in this sentence: "Lo" before "studente" (s+consonant → lo) and "il" before "libro" (regular consonant → il). Both are masculine singular nouns, but they take different articles because of their initial sounds.',
      },
    },
    {
      type: 'translation',
      id: 'a1-art-det-11',
      source: 'The students (male) are in the library.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Gli studenti sono in biblioteca.',
        'Gli studenti sono nella biblioteca.',
        'Gli studenti sono in libreria.',
      ],
      feedback: {
        explanation:
          '"Students" = studenti (masculine plural, starts with "st"). Since "st" is s+consonant, the plural article is "gli" — not "i". This is a very common mistake: *i studenti is wrong, gli studenti is correct.',
        modelAnswer: 'Gli studenti sono in biblioteca.',
      },
    },
  ],
};
