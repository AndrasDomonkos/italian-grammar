import type { Lesson } from '../types';

export const possessivi: Lesson = {
  slug: 'possessivi',
  title: 'Aggettivi e Pronomi Possessivi',
  level: 'a1',
  order: 11,
  explanation: {
    text: `## Aggettivi e Pronomi Possessivi (Possessive Adjectives and Pronouns)

Italian possessives agree with the **thing possessed** (not the possessor) in gender and number. They are normally preceded by a **definite article**.

### The Possessive Forms

| | Masc. Sing. | Fem. Sing. | Masc. Plur. | Fem. Plur. |
|-|-------------|------------|-------------|------------|
| my | mio | mia | miei | mie |
| your (sing.) | tuo | tua | tuoi | tue |
| his/her/its | suo | sua | suoi | sue |
| our | nostro | nostra | nostri | nostre |
| your (plur.) | vostro | vostra | vostri | vostre |
| their | loro | loro | loro | loro |

⚠️ **"Loro" is invariable** — it never changes regardless of the noun's gender or number.

### Using the Definite Article

Unlike English, Italian possessives almost always require a definite article:
*il mio libro* (my book), *la tua amica* (your friend), *i nostri figli* (our children)

### The Family Exception

With **singular, unmodified family nouns**, the article is **dropped**:
*mio padre* (my father — no article), *mia madre* (my mother), *tuo fratello* (your brother), *sua sorella* (his/her sister)

BUT: article returns if the family noun is plural, modified by an adjective, or uses *loro*:
*i miei fratelli* (my brothers — plural → article), *il mio caro padre* (my dear father — adjective → article), *il loro padre* (their father — "loro" always needs article)

### Disambiguation of "suo"

"Suo / sua / suoi / sue" can mean *his, her,* or *its*. Context usually clarifies. In formal address, *Suo/Sua* (capitalised) means "your" (formal Lei).`,
    tables: [
      {
        caption: 'Possessive Adjectives — Full Table',
        headers: ['Person', 'Masc. Sing.', 'Fem. Sing.', 'Masc. Plur.', 'Fem. Plur.'],
        rows: [
          ['io', 'il mio', 'la mia', 'i miei', 'le mie'],
          ['tu', 'il tuo', 'la tua', 'i tuoi', 'le tue'],
          ['lui/lei', 'il suo', 'la sua', 'i suoi', 'le sue'],
          ['noi', 'il nostro', 'la nostra', 'i nostri', 'le nostre'],
          ['voi', 'il vostro', 'la vostra', 'i vostri', 'le vostre'],
          ['loro', 'il loro', 'la loro', 'i loro', 'le loro'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-poss-01',
      prompt: '___ libro è sul tavolo. (My book is on the table.)',
      answer: 'Il mio',
      hint: 'libro = masculine singular.',
      feedback: {
        correct: 'Perfetto! "Il mio libro" is correct.',
        incorrect: 'The correct answer is "Il mio".',
        explanation:
          '"Libro" is masculine singular. The possessive "my" for masculine singular is "mio", preceded by the definite article "il": il mio libro. The article is required with possessives (except singular unmodified family nouns).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-poss-02',
      prompt: 'Ho parlato con ___ madre ieri. (I spoke with my mother yesterday.) [singular, unmodified]',
      answer: 'mia',
      hint: 'madre = family noun, singular, unmodified → no article.',
      feedback: {
        correct: 'Esatto! "Mia madre" — no article with singular family nouns.',
        incorrect: 'The correct answer is "mia" (no article).',
        explanation:
          '"Madre" is a singular, unmodified family noun. With these nouns, the definite article is dropped: mia madre, mio padre, tuo fratello. BUT: la mia cara madre (adjective present → article returns).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-poss-03',
      prompt: 'Come si chiama ___ professore? (What\'s your (plural) teacher\'s name?)',
      answer: 'il vostro',
      hint: 'professore = masculine singular; "your plural" = vostro.',
      feedback: {
        correct: 'Perfetto! "Il vostro professore" is correct.',
        incorrect: 'The correct answer is "il vostro".',
        explanation:
          '"Vostro/a/i/e" is the possessive for "voi" (your plural). "Professore" is masculine singular, so: il vostro professore.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-poss-04',
      question: 'How do you say "her books" in Italian?',
      options: [
        { value: 'a', label: 'i suo libri' },
        { value: 'b', label: 'i suoi libri' },
        { value: 'c', label: 'le sua libri' },
        { value: 'd', label: 'i sua libri' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "I suoi libri" is correct.',
        incorrect: 'The correct answer is "i suoi libri".',
        explanation:
          '"Libri" is masculine plural. "Her" = sua (feminine owner) — BUT the possessive agrees with the THING OWNED, not the owner. Masculine plural → i suoi libri. "Suo" becomes "suoi" for masculine plural.',
        optionExplanations: {
          a: '"I suo libri" is wrong — "suo" must agree with "libri" (masculine plural), so it becomes "suoi".',
          c: '"Le sua libri" uses the feminine plural article "le" for a masculine noun. "Libri" is masculine → "i".',
          d: '"I sua libri" has the wrong possessive form. Masculine plural requires "suoi", not "sua".',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-poss-05',
      question: 'Choose the correct sentence: "Their teacher is very strict."',
      options: [
        { value: 'a', label: 'Il loro professore è molto severo.' },
        { value: 'b', label: 'Il lori professore è molto severo.' },
        { value: 'c', label: 'Il loro professori è molto severo.' },
        { value: 'd', label: 'Loro professore è molto severo.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Il loro professore" is correct.',
        incorrect: 'The correct answer is "Il loro professore è molto severo."',
        explanation:
          '"Loro" (their) is INVARIABLE — it never changes. Whether the noun is masculine/feminine, singular/plural, "loro" stays the same: il loro padre, la loro madre, i loro figli, le loro figlie. It also ALWAYS keeps the article, even with family nouns.',
        optionExplanations: {
          b: '"Lori" does not exist. The possessive for "their" is always "loro" (invariable).',
          c: '"Professori" would be plural but the verb "è" is singular. Also "loro professori" would need to match the plural noun: i loro professori.',
          d: 'Unlike other possessives, "loro" ALWAYS requires the definite article: il loro professore, not *loro professore*.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-poss-06',
      verb: 'Possessivo — macchina (car, fem. sing.)',
      tense: 'Fill in the correct possessive phrase (article + possessive)',
      pronouns: [
        'my car (io)',
        'your car (tu)',
        'his/her car (lui/lei)',
        'our car (noi)',
        'your car (voi)',
        'their car (loro)',
      ],
      answers: ['la mia', 'la tua', 'la sua', 'la nostra', 'la vostra', 'la loro'],
      feedback: {
        explanation:
          '"Macchina" is feminine singular, so all possessives use the feminine singular form: mia, tua, sua, nostra, vostra, loro. The article is always "la" for this noun. "Loro" is invariable and always needs the article.',
      },
    },
    {
      type: 'match',
      id: 'a1-poss-07',
      instruction: 'Match each English phrase with the Italian translation.',
      pairs: [
        { left: 'my brothers (io)', right: 'i miei fratelli' },
        { left: 'your sister (tu, sing.)', right: 'tua sorella' },
        { left: 'their house (loro)', right: 'la loro casa' },
        { left: 'our friends (noi, masc.)', right: 'i nostri amici' },
        { left: 'her idea (lei)', right: "la sua idea" },
        { left: 'your keys (voi, fem.)', right: 'le vostre chiavi' },
      ],
      feedback: {
        explanation:
          '"Tua sorella" — no article (singular, unmodified family noun). "La loro casa" — loro always keeps the article. "I miei fratelli" — plural family noun → article returns. "Le vostre chiavi" — chiavi is feminine plural.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-poss-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['molto', 'simpatico', 'è', 'amico', 'Il', 'tuo'],
      answer: ['Il', 'tuo', 'amico', 'è', 'molto', 'simpatico'],
      feedback: {
        correct: 'Perfetto! "Il tuo amico è molto simpatico."',
        explanation:
          '"Il tuo amico" — "amico" is masculine singular (not a family noun), so the article is required. Note: "amico" takes the article because it is NOT a family noun. Mio/mia/tuo/tua etc. come between the article and the noun.',
      },
    },
    {
      type: 'translation',
      id: 'a1-poss-09',
      source: 'Our house is small, but their apartment is large.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'La nostra casa è piccola, ma il loro appartamento è grande.',
        'La nostra casa è piccola, ma il loro appartamento è largo.',
      ],
      feedback: {
        explanation:
          '"Our house" = la nostra casa (nostra agrees with casa, feminine). "Their apartment" = il loro appartamento (loro invariable, appartamento masculine). "Small" = piccola (agrees with casa, fem. sing.).',
        modelAnswer: 'La nostra casa è piccola, ma il loro appartamento è grande.',
      },
    },
  ],
};
