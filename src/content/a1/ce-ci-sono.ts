import type { Lesson } from '../types';

export const ceCiSono: Lesson = {
  slug: 'ce-ci-sono',
  title: "C'è e Ci Sono",
  level: 'a1',
  order: 14,
  explanation: {
    text: `## C'è e Ci Sono (There Is / There Are)

Italian uses **c'è** (there is) and **ci sono** (there are) to indicate the existence or presence of something. They are formed from the particle **ci** + the verb **essere**.

### Forms

- **C'è** = *ci + è* — "there is" (singular)
  *C'è un bar qui vicino.* — There's a bar nearby.
  *C'è qualcuno?* — Is there anyone?

- **Ci sono** = *ci + sono* — "there are" (plural)
  *Ci sono molte persone in piazza.* — There are many people in the square.
  *Ci sono tre caffè in questa via.* — There are three cafes on this street.

### Negative Forms

- *Non c'è* — there isn't: *Non c'è latte in frigo.* (There's no milk in the fridge.)
- *Non ci sono* — there aren't: *Non ci sono biglietti disponibili.* (There are no tickets available.)

### Question Forms

- *C'è...?* — Is there...? *C'è un medico?* (Is there a doctor?)
- *Ci sono...?* — Are there...? *Ci sono posti liberi?* (Are there free seats?)

### Contrast: C'è vs Essere as Location Verb

**C'è / ci sono** introduces or announces existence:
*In questa città c'è un bellissimo museo.* — In this city there is a beautiful museum.

**Essere** as a location verb says WHERE something is:
*Il museo è in centro.* — The museum is in the centre.

The key distinction: **c'è** = existence ("there IS a museum"), **è** = location ("the museum IS here").

### Time Expressions

"C'è" also appears in time expressions:
*C'è tempo.* — There's time. *Non c'è problema.* — There's no problem. *C'è la partita stasera?* — Is there a match tonight?`,
    tables: [
      {
        caption: "C'è / Ci Sono — Summary",
        headers: ['Form', 'Use', 'Example'],
        rows: [
          ["c'è", 'singular existence', "C'è un supermercato."],
          ['ci sono', 'plural existence', 'Ci sono due ospedali.'],
          ["non c'è", 'singular negation', "Non c'è latte."],
          ['non ci sono', 'plural negation', 'Non ci sono problemi.'],
          ["c'è...?", 'singular question', "C'è un bagno qui?"],
          ['ci sono...?', 'plural question', 'Ci sono posti liberi?'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-cce-01',
      prompt: "___ un bel parco vicino alla mia casa. (There is a nice park near my house.)",
      answer: "c'è",
      feedback: {
        correct: "Esatto! \"C'è\" is correct.",
        incorrect: "The correct answer is \"c'è\".",
        explanation:
          '"Parco" is singular, so we use "c\'è" (there is). "C\'è" = ci + è, where "ci" is a locative particle and "è" is the 3rd person singular of essere.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-cce-02',
      prompt: "___ molti turisti in città d'estate. (There are many tourists in the city in summer.)",
      answer: 'ci sono',
      hint: 'turisti = tourists → plural.',
      feedback: {
        correct: 'Bravo/a! "Ci sono" is correct.',
        incorrect: 'The correct answer is "ci sono".',
        explanation:
          '"Turisti" is plural, so we use "ci sono" (there are). Match the number: c\'è for singular nouns, ci sono for plural nouns.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-cce-03',
      prompt: "Non ___ problemi, stai tranquillo! (There are no problems, don't worry!)",
      answer: 'ci sono',
      feedback: {
        correct: "Perfetto! \"Non ci sono problemi\" is correct.",
        incorrect: 'The correct answer is "ci sono".',
        explanation:
          '"Problemi" is plural, so the negative is "non ci sono": non ci sono problemi (there are no problems). Compare: "Non c\'è problema" (singular) = "There\'s no problem".',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-cce-04',
      question: 'Which sentence is correct?',
      options: [
        { value: 'a', label: "C'è tre pizzerie in questa strada." },
        { value: 'b', label: 'Ci sono tre pizzerie in questa strada.' },
        { value: 'c', label: 'Ci è tre pizzerie in questa strada.' },
        { value: 'd', label: 'Sono tre pizzerie in questa strada.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Ci sono tre pizzerie" — plural noun → ci sono.',
        incorrect: 'The correct answer is "Ci sono tre pizzerie in questa strada."',
        explanation:
          '"Pizzerie" is plural, so "ci sono" is required (not c\'è). "Tre" (three) confirms the plural. Rule: c\'è + singular, ci sono + plural.',
        optionExplanations: {
          a: '"C\'è" is singular. "Tre pizzerie" is plural — use "ci sono".',
          c: '"Ci è" is not the correct form — it must contract to "c\'è". But regardless, the plural "pizzerie" requires "ci sono".',
          d: '"Sono tre pizzerie" is grammatically acceptable in some dialects, but the standard Italian for "there are" is "ci sono".',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-cce-05',
      question: 'What is the difference between "C\'è il museo" and "Il museo è in centro"?',
      options: [
        { value: 'a', label: 'No difference — they mean the same thing.' },
        { value: 'b', label: "C'è introduces existence; è locates something already known." },
        { value: 'c', label: "C'è is formal; è is informal." },
        { value: 'd', label: '"Il museo è" is incorrect Italian.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! Excellent understanding of the distinction.',
        incorrect: "The correct answer is: C'è introduces existence; è locates something already known.",
        explanation:
          "\"C'è un museo\" announces existence — you don't know if there is a museum, and now you learn there is one. \"Il museo è in centro\" locates a specific, already-known museum. C'è = existential (there is), essere = locative (is situated).",
        optionExplanations: {
          a: 'There is a meaningful grammatical distinction between the existential and locative uses.',
          c: 'Both forms are used in everyday speech regardless of formality.',
          d: '"Il museo è in centro" is perfectly correct Italian.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-cce-06',
      verb: "C'è / Ci sono",
      tense: 'Fill in c\'è or ci sono for each sentence',
      pronouns: [
        'un ristorante (singular)',
        'due ristoranti (plural)',
        'un problema (singular)',
        'molte persone (plural)',
        'nessuna soluzione (singular, negative sense)',
        'tre studenti (plural)',
      ],
      answers: ["c'è", 'ci sono', "c'è", 'ci sono', "c'è", 'ci sono'],
      feedback: {
        explanation:
          'The rule is simple: c\'è + singular noun, ci sono + plural noun. Count the noun (or look at the article) to determine which to use.',
      },
    },
    {
      type: 'match',
      id: 'a1-cce-07',
      instruction: "Match each Italian sentence with its English translation.",
      pairs: [
        { left: "C'è qualcosa da mangiare?", right: 'Is there anything to eat?' },
        { left: 'Non ci sono biglietti.', right: 'There are no tickets.' },
        { left: "C'è troppo rumore.", right: 'There is too much noise.' },
        { left: 'Ci sono due ore di lezione.', right: 'There are two hours of class.' },
        { left: "Non c'è fretta.", right: "There's no hurry." },
      ],
      feedback: {
        explanation:
          '"Qualcosa da mangiare" = something to eat (qualcosa + da + infinitive). "Rumore" = noise (singular → c\'è). "Fretta" = hurry — "non c\'è fretta" is a common expression meaning "there\'s no rush".',
      },
    },
    {
      type: 'reorder',
      id: 'a1-cce-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ["C'è", 'qui', 'fermata', 'vicino', 'una', "dell'autobus"],
      answer: ["C'è", 'una', 'fermata', "dell'autobus", 'qui', 'vicino'],
      feedback: {
        correct: "Perfetto! \"C'è una fermata dell'autobus qui vicino.\"",
        explanation:
          "\"C'è\" introduces the existence of something (a bus stop). \"Dell'autobus\" = di + l'autobus (preposition + definite article). \"Qui vicino\" = nearby (here near).",
      },
    },
    {
      type: 'translation',
      id: 'a1-cce-09',
      source: 'Is there a pharmacy near here? There are two on this street.',
      direction: 'en-to-it',
      acceptedAnswers: [
        "C'è una farmacia qui vicino? Ci sono due farmacie in questa via.",
        "C'è una farmacia vicino? Ci sono due farmacie in questa strada.",
      ],
      feedback: {
        explanation:
          "\"Is there a pharmacy?\" = C'è una farmacia? (singular question). \"There are two\" = ci sono due (plural). \"Farmacia\" → \"farmacie\" in plural (-cia preceded by vowel → keep i: farmacia → farmacie).",
        modelAnswer: "C'è una farmacia qui vicino? Ci sono due farmacie in questa via.",
      },
    },
  ],
};
