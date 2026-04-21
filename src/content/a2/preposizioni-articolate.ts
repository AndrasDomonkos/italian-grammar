import type { Lesson } from '../types';

export const preposizioniArticolate: Lesson = {
  slug: 'preposizioni-articolate',
  title: 'Preposizioni Articolate',
  level: 'a2',
  order: 18,
  explanation: {
    text: `## Preposizioni Articolate (Contracted Prepositions)

In Italian, the prepositions **di, a, da, in, su** (and sometimes **con, per**) **contract** with definite articles to form a single word.

### The Contractions Table

| Prep | il | lo | la | l' | i | gli | le |
|------|----|----|----|-----|---|-----|-----|
| **di** | del | dello | della | dell' | dei | degli | delle |
| **a** | al | allo | alla | all' | ai | agli | alle |
| **da** | dal | dallo | dalla | dall' | dai | dagli | dalle |
| **in** | nel | nello | nella | nell' | nei | negli | nelle |
| **su** | sul | sullo | sulla | sull' | sui | sugli | sulle |

**Con:** con + il = col (rare); con + i = coi (rare). Usually con il, con la, etc.
**Per:** no contractions.
**Tra/fra:** no contractions.

### Common Uses

**di + article** = of, some (partitive):
*il libro del ragazzo* (the boy's book / the book of the boy)
*degli spaghetti* (some spaghetti)

**a + article** = to, at (location/direction):
*Vado al supermercato.* (I go to the supermarket.)
*Sono alle tre.* (It's at three o'clock.)

**da + article** = from, since, at someone's place:
*Vengo dal lavoro.* (I come from work.)
*Sono dal medico.* (I'm at the doctor's.)

**in + article** (often = in, inside):
*nel frigo* (in the fridge), *nella borsa* (in the bag)

**su + article** = on, on top of:
*sul tavolo* (on the table), *sulla sedia* (on the chair)`,
    tables: [
      {
        caption: 'Quick Reference — di and a Contractions',
        headers: ['Article', 'di + art.', 'a + art.', 'Example (a)'],
        rows: [
          ['il', 'del', 'al', 'Vado al bar.'],
          ['lo', 'dello', 'allo', 'Allo stadio.'],
          ['la', 'della', 'alla', 'Alla stazione.'],
          ["l'", "dell'", "all'", "All'università."],
          ['i', 'dei', 'ai', 'Ai ragazzi.'],
          ['gli', 'degli', 'agli', 'Agli studenti.'],
          ['le', 'delle', 'alle', 'Alle tre.'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "al", translation: "to the / at the (masc.)", example: "Vado al supermercato ogni lunedi.", exampleTranslation: "I go to the supermarket every Monday." },
    { word: "della", translation: "of the (fem.)", example: "La porta della casa è aperta.", exampleTranslation: "The door of the house is open." },
    { word: "nel", translation: "in the (masc.)", example: "Il gatto dorme nel letto.", exampleTranslation: "The cat sleeps in the bed." },
    { word: "sulla", translation: "on the (fem.)", example: "Il libro è sulla scrivania.", exampleTranslation: "The book is on the desk." },
    { word: "dal", translation: "from the (masc.)", example: "Vengo dal medico ogni mese.", exampleTranslation: "I go to the doctor every month." },
    { word: "agli", translation: "to the (masc. pl., vowel)", example: "Ho scritto agli amici in Italia.", exampleTranslation: "I wrote to my friends in Italy." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-preart-01',
      prompt: 'Vado ___ supermercato ogni sabato. (I go to the supermarket every Saturday.)',
      answer: 'al',
      hint: 'a + il = al',
      feedback: {
        correct: 'Esatto! "Al supermercato" — a + il = al.',
        incorrect: 'The correct answer is "al".',
        explanation:
          '"Supermercato" = masculine singular (il supermercato). "A + il" contracts to "al". Vado al supermercato = I go to the supermarket.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-preart-02',
      prompt: 'Il libro è ___ zaino di Marco. (The book is in Marco\'s backpack.)',
      answer: 'nello',
      hint: 'in + lo (lo zaino, because z- takes lo) = nello',
      feedback: {
        correct: 'Perfetto! "Nello zaino" — in + lo = nello (z takes lo article).',
        incorrect: 'The correct answer is "nello".',
        explanation:
          '"Zaino" starts with z → requires "lo" (not "il"): lo zaino. "In + lo" = nello. This is why the article type matters before contracting.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-preart-03',
      prompt: 'Ho comprato un chilo ___ arance. (I bought a kilo of oranges.)',
      answer: 'delle',
      hint: 'di + le (le arance = fem. plur.) = delle',
      feedback: {
        correct: 'Bravo/a! "Un chilo delle arance" — di + le = delle.',
        incorrect: 'The correct answer is "delle".',
        explanation:
          '"Arance" = feminine plural (le arance). "Di + le" = delle. "Un chilo delle arance" = a kilo of the oranges. Note: "delle" can also be partitive (some oranges): ho comprato delle arance = I bought some oranges.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-preart-04',
      question: '"Metto le chiavi ___ tavolo." (I put the keys on the table.)',
      options: [
        { value: 'a', label: 'sull\'' },
        { value: 'b', label: 'sul' },
        { value: 'c', label: 'sullo' },
        { value: 'd', label: 'nella' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Sul tavolo" — su + il = sul.',
        incorrect: 'The correct answer is "sul".',
        explanation:
          '"Tavolo" = masculine singular (il tavolo). "Su + il" = sul. Sul tavolo = on the table.',
        optionExplanations: {
          a: '"Sull\'" = su + l\' — used before masculine/feminine nouns starting with a vowel: sull\'armadio.',
          c: '"Sullo" = su + lo — for lo-words (z, s+cons., ps, gn, x): sullo zaino.',
          d: '"Nella" = in + la — inside (feminine), not "on."',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-preart-05',
      question: '"Parlo ___ studenti ogni giorno." (I speak to the students every day.)',
      options: [
        { value: 'a', label: 'ai' },
        { value: 'b', label: 'agli' },
        { value: 'c', label: 'alle' },
        { value: 'd', label: 'dei' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Agli studenti" — a + gli = agli (gli studenti).',
        incorrect: 'The correct answer is "agli".',
        explanation:
          '"Studenti" is masculine plural starting with st- → takes "gli" (not "i"): gli studenti. "A + gli" = agli. Parlo agli studenti = I speak to the students.',
        optionExplanations: {
          a: '"Ai" = a + i — for regular masculine plural nouns (i ragazzi → ai ragazzi). "Studenti" needs gli → agli.',
          c: '"Alle" = a + le — for feminine plural.',
          d: '"Dei" = di + i — possession/partitive, not direction.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-preart-06',
      verb: 'Contract the preposition with the article',
      tense: 'Write the correct contracted preposition',
      pronouns: [
        'di + il libro',
        'a + la stazione',
        'da + l\'ufficio',
        'in + i negozi',
        'su + gli scaffali',
        'a + le otto',
      ],
      answers: ['del libro', 'alla stazione', "dall'ufficio", 'nei negozi', 'sugli scaffali', 'alle otto'],
      feedback: {
        explanation:
          'del = di+il, alla = a+la, dall\' = da+l\' (vowel), nei = in+i, sugli = su+gli, alle = a+le. All six prepositions contract with the articles. Remember: before vowel → use l\' → dall\', nell\', sull\', all\', dell\'.',
      },
    },
    {
      type: 'match',
      id: 'a2-preart-07',
      instruction: 'Match each phrase with its English meaning.',
      pairs: [
        { left: 'dal medico', right: 'at the doctor\'s' },
        { left: 'degli amici', right: 'of/some friends' },
        { left: "nell'armadio", right: 'in the wardrobe' },
        { left: 'ai bambini', right: 'to the children' },
        { left: 'sulla spiaggia', right: 'on the beach' },
      ],
      feedback: {
        explanation:
          '"Dal medico" = da + il (I am at the doctor\'s — da expresses being at someone\'s place). "Degli amici" = di + gli (friends, gli → degli). "Nell\'armadio" = in + l\' (vowel). "Ai bambini" = a + i. "Sulla spiaggia" = su + la.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-preart-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['delle', 'Parla', 'sue', 'sempre', 'lui', 'esperienze'],
      answer: ['Parla', 'sempre', 'delle', 'sue', 'esperienze'],
      feedback: {
        correct: 'Perfetto! "Parla sempre delle sue esperienze."',
        explanation:
          '"Parlare di + le esperienze" → delle esperienze (di + le = delle). "Sue" = his/her (possessive, agrees with esperienze: fem. plur.). "Sempre" = always, typically before the main verb complement.',
      },
    },
    {
      type: 'translation',
      id: 'a2-preart-09',
      source: 'The keys are on the table in the kitchen, near the window.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Le chiavi sono sul tavolo della cucina, vicino alla finestra.',
        'Le chiavi sono sul tavolo in cucina, vicino alla finestra.',
      ],
      feedback: {
        explanation:
          '"On the table" = sul tavolo (su + il). "Of the kitchen" = della cucina (di + la). "Near the window" = vicino alla finestra (a + la = alla). Three contracted prepositions in one sentence.',
        modelAnswer: 'Le chiavi sono sul tavolo della cucina, vicino alla finestra.',
      },
    },
  ],
};
