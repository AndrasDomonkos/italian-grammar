import type { Lesson } from '../types';

export const piaceBase: Lesson = {
  slug: 'piacere-base',
  title: 'Piacere (Base)',
  level: 'a1',
  order: 15,
  explanation: {
    text: `## Piacere — To Like (Basic Use)

"Piacere" does not work like most verbs. Instead of "I like pizza", Italian says "Pizza pleases me" — the thing liked is the **subject**, and the person who likes it is the **indirect object**.

### Two Core Forms

- **piace** — used when the thing liked is **singular or an infinitive**
  *Mi piace la pizza.* — I like pizza. (lit. Pizza is pleasing to me.)
  *Ti piace studiare?* — Do you like studying?

- **piacciono** — used when the thing liked is **plural**
  *Mi piacciono i film italiani.* — I like Italian films.
  *Ti piacciono le olive?* — Do you like olives?

### Indirect Object Pronouns

The "person who likes" uses indirect object pronouns. At A1, learn these six:

| Person | Pronoun | Example |
|--------|---------|---------|
| I | mi | Mi piace il caffè. |
| you (sing.) | ti | Ti piace ballare? |
| he/she | gli / le | Gli piace il calcio. / Le piace leggere. |
| we | ci | Ci piacciono le vacanze. |
| you (plur.) | vi | Vi piace la musica? |
| they | gli (loro) | Gli piacciono le lingue. |

### Using "A + Name" for Clarity

When the subject is a name or noun (not a pronoun), use **a + person**:
*A Marco piace il calcio.* — Marco likes football.
*A Marco e Anna piacciono i film.* — Marco and Anna like films.

### Negation

Place **non** before the indirect pronoun:
*Non mi piace la carne.* — I don't like meat.
*Non ci piacciono i compiti.* — We don't like homework.`,
    tables: [
      {
        caption: 'Piacere — Core Pattern',
        headers: ['Italian', 'Literal', 'English'],
        rows: [
          ['Mi piace il gelato.', 'To-me pleases the ice cream.', 'I like ice cream.'],
          ['Ti piacciono le fragole?', 'To-you please the strawberries?', 'Do you like strawberries?'],
          ['Gli piace la musica.', 'To-him pleases the music.', 'He likes music.'],
          ['Le piace leggere.', 'To-her pleases to-read.', 'She likes reading.'],
          ['Ci piace viaggiare.', 'To-us pleases to-travel.', 'We like travelling.'],
          ['Non vi piacciono le verdure.', 'Not to-you please the vegetables.', "You don't like vegetables."],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "mi piace", translation: "I like (singular)", example: "Mi piace molto la musica jazz.", exampleTranslation: "I like jazz music a lot." },
    { word: "mi piacciono", translation: "I like (plural)", example: "Mi piacciono i film di avventura.", exampleTranslation: "I like adventure films." },
    { word: "ti piace", translation: "you like", example: "Ti piace cucinare la pasta?", exampleTranslation: "Do you like cooking pasta?" },
    { word: "gli piace", translation: "he likes", example: "Gli piace giocare a tennis.", exampleTranslation: "He likes playing tennis." },
    { word: "non mi piace", translation: "I do not like", example: "Non mi piace alzarmi presto.", exampleTranslation: "I do not like getting up early." },
    { word: "le piace", translation: "she likes", example: "Le piace leggere romanzi storici.", exampleTranslation: "She likes reading historical novels." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-piac-01',
      prompt: '___ piacciono molto i libri di avventura. (I like adventure books a lot.)',
      answer: 'Mi',
      feedback: {
        correct: 'Esatto! "Mi piacciono" is correct.',
        incorrect: 'The correct answer is "Mi".',
        explanation:
          '"Libri" is plural, so we use "piacciono". The indirect pronoun for "I" = "mi". Full sentence: "Mi piacciono molto i libri di avventura."',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-piac-02',
      prompt: 'A Sara ___ il calcio. (Sara likes football.)',
      answer: 'piace',
      hint: 'calcio = football → singular → piace.',
      feedback: {
        correct: 'Perfetto! "Piace" is correct.',
        incorrect: 'The correct answer is "piace".',
        explanation:
          '"Calcio" is singular (il calcio), so we use "piace". The structure is: A Sara (= to Sara) + piace + subject. When the person is a name, use "A + name" instead of a pronoun.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-piac-03',
      prompt: 'Non ___ piacciono le verdure. (He doesn\'t like vegetables.)',
      answer: 'gli',
      hint: '"He" = gli (indirect object).',
      feedback: {
        correct: 'Esatto! "Gli" is the masculine 3rd person pronoun.',
        incorrect: 'The correct answer is "gli".',
        explanation:
          '"He likes" → "gli piace". "He doesn\'t like" → "non gli piace". "Verdure" is plural → "non gli piacciono le verdure". Note: "gli" = to him; "le" = to her (lei).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-piac-04',
      question: 'Choose the correct sentence: "She likes to travel."',
      options: [
        { value: 'a', label: 'Le piace viaggiare.' },
        { value: 'b', label: 'Gli piace viaggiare.' },
        { value: 'c', label: 'Le piacciono viaggiare.' },
        { value: 'd', label: 'La piace viaggiare.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Corretto! "Le piace viaggiare."',
        incorrect: 'The correct answer is "Le piace viaggiare."',
        explanation:
          '"She" (indirect) = "le". Infinitives (viaggiare) are treated as singular → "piace" (not piacciono). "Le piace viaggiare" = to-her pleases to-travel = she likes to travel.',
        optionExplanations: {
          b: '"Gli" = to him (masculine). "She" requires "le" (to her feminine).',
          c: '"Piacciono" is used for plural nouns, not infinitives. "Viaggiare" is an infinitive → piace.',
          d: '"La" is a direct object pronoun, not an indirect one. Piacere takes indirect pronouns (mi, ti, gli, le, ci, vi, gli).',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-piac-05',
      question: 'Complete: "Vi ___ i panini al prosciutto?" (Do you all like prosciutto sandwiches?)',
      options: [
        { value: 'piace', label: 'Vi piace i panini al prosciutto?' },
        { value: 'piacciono', label: 'Vi piacciono i panini al prosciutto?' },
        { value: 'piacete', label: 'Vi piacete i panini al prosciutto?' },
        { value: 'piaci', label: 'Vi piaci i panini al prosciutto?' },
      ],
      answer: 'piacciono',
      feedback: {
        correct: 'Esatto! "Piacciono" because "panini" is plural.',
        incorrect: 'The correct answer is "Vi piacciono i panini al prosciutto?"',
        explanation:
          '"Panini" is plural, so the subject of piacere is plural → "piacciono". The indirect pronoun "vi" = to you all (voi). "Piacete" and "piaci" are conjugated as regular verbs — they do not exist in this context.',
        optionExplanations: {
          piace: '"Piace" would be used if the subject were singular: "Vi piace il panino?" (one sandwich).',
          piacete: '"Piacete" would suggest conjugating piacere for "voi" as a regular verb — but piacere only uses piace/piacciono based on what is liked.',
          piaci: '"Piaci" would mean "you (sing.) please" — used only when someone is the liked thing, not the person who likes.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-piac-06',
      verb: 'piacere',
      tense: 'Fill in mi/ti/gli/le/ci/vi/gli + piace or piacciono',
      pronouns: [
        'I like coffee. (io → mi, caffè = singular)',
        'You like olives. (tu → ti, olive = plural)',
        'He likes music. (lui → gli, musica = singular)',
        'She likes cats. (lei → le, gatti = plural)',
        'We like pizza. (noi → ci, pizza = singular)',
        'You all like films. (voi → vi, film = plural)',
      ],
      answers: ['mi piace', 'ti piacciono', 'gli piace', 'le piacciono', 'ci piace', 'vi piacciono'],
      feedback: {
        explanation:
          'Piace/piacciono depends on what is liked (singular/plural noun, or infinitive = singular). The indirect pronoun depends on who likes it: mi/ti/gli/le/ci/vi. These two choices are independent of each other.',
      },
    },
    {
      type: 'match',
      id: 'a1-piac-07',
      instruction: 'Match each Italian sentence with its correct English translation.',
      pairs: [
        { left: 'Ti piace la pasta?', right: 'Do you like pasta?' },
        { left: 'Non mi piace il freddo.', right: "I don't like the cold." },
        { left: 'Le piacciono i gatti.', right: 'She likes cats.' },
        { left: 'Ci piace molto leggere.', right: 'We really like reading.' },
        { left: 'A Luca piacciono le moto.', right: 'Luca likes motorbikes.' },
      ],
      feedback: {
        explanation:
          '"Le piacciono" = to her please (they) = she likes them. "Ci piace leggere" = infinitive → piace (singular). "A Luca piacciono le moto" = to Luca please the motorbikes = Luca likes motorbikes (moto is plural).',
      },
    },
    {
      type: 'reorder',
      id: 'a1-piac-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['piacciono', 'Non', 'mi', 'i', 'compiti'],
      answer: ['Non', 'mi', 'piacciono', 'i', 'compiti'],
      feedback: {
        correct: 'Perfetto! "Non mi piacciono i compiti."',
        explanation:
          '"Compiti" = homework (plural) → piacciono. "Non mi piacciono" = to me they do not please = I do not like. Word order: Non + mi + piacciono + subject (i compiti).',
      },
    },
    {
      type: 'translation',
      id: 'a1-piac-09',
      source: 'Do you (singular) like Italian music? I like it a lot.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Ti piace la musica italiana? Mi piace molto.',
        'Ti piace la musica italiana? Sì, mi piace molto.',
      ],
      feedback: {
        explanation:
          '"Do you like" = Ti piace (singular "you"). "Music" = la musica (singular → piace). "I like it a lot" = Mi piace molto (no need to repeat "la musica" — just "mi piace molto" suffices).',
        modelAnswer: 'Ti piace la musica italiana? Mi piace molto.',
      },
    },
  ],
};
