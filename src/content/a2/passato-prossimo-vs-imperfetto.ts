import type { Lesson } from '../types';

export const passatoProssimoVsImperfetto: Lesson = {
  slug: 'passato-prossimo-vs-imperfetto',
  title: 'Passato Prossimo vs Imperfetto',
  level: 'a2',
  order: 4,
  explanation: {
    text: `## Passato Prossimo vs Imperfetto

Choosing between these two past tenses is one of the most important skills in Italian. The key is **how** you view the action — not just when it happened.

### The Core Distinction

| Passato Prossimo | Imperfetto |
|------------------|------------|
| Completed action | Ongoing / background action |
| Single event | Repeated / habitual action |
| Foreground of story | Background / setting |
| "happened" / "did" | "was happening" / "used to" |

### Classic Pattern: Background + Interruption

The imperfetto sets the scene; the passato prossimo is the event that happens:

*Dormivo (IMP) quando ha squillato (PP) il telefono.*
(I was sleeping when the phone rang.)

*Leggeva (IMP) un libro quando è entrata (PP) sua madre.*
(He was reading a book when his mother came in.)

### Clue Words

**Passato Prossimo signals:** *ieri, stamattina, una volta, all'improvviso, improvvisamente, di colpo, poi, alla fine*

**Imperfetto signals:** *sempre, spesso, ogni giorno/anno/estate, di solito, normalmente, da bambino/ragazzo, mentre, quando (= while)*

### Both in the Same Sentence

When two past actions happened simultaneously (both ongoing), use **both in imperfetto**:
*Mentre mangiavamo, parlava di politica.*
(While we were eating, he was talking about politics.)

When one completed action interrupts an ongoing one:
*Mentre guardavo la TV, è arrivato mio fratello.*
(While I was watching TV, my brother arrived.)`,
    tables: [
      {
        caption: 'Quick Reference',
        headers: ['Signal', 'Tense', 'Example'],
        rows: [
          ['ieri', 'Passato Prossimo', 'Ieri ho mangiato la pizza.'],
          ['ogni giorno', 'Imperfetto', 'Ogni giorno mangiavo la pasta.'],
          ['di solito', 'Imperfetto', 'Di solito dormivo fino alle 8.'],
          ['improvvisamente', 'Passato Prossimo', 'Improvvisamente è caduto.'],
          ['mentre (ongoing)', 'Imperfetto', 'Mentre dormivo, sognavo.'],
          ['mentre + interruption', 'IMP + PP', 'Mentre dormivo, è arrivato.'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "mentre", translation: "while", example: "Mentre mangiavo ha suonato il telefono.", exampleTranslation: "While I was eating the phone rang." },
    { word: "all'improvviso", translation: "suddenly", example: "All'improvviso ha iniziato a piovere.", exampleTranslation: "Suddenly it started to rain." },
    { word: "di solito", translation: "usually", example: "Di solito andavo a scuola a piedi.", exampleTranslation: "I usually went to school on foot." },
    { word: "una volta", translation: "once / one time", example: "Una volta ho incontrato un attore famoso.", exampleTranslation: "Once I met a famous actor." },
    { word: "ogni anno", translation: "every year", example: "Ogni anno andavamo in vacanza in Toscana.", exampleTranslation: "Every year we went on holiday in Tuscany." },
    { word: "quando ero piccolo", translation: "when I was young", example: "Quando ero piccolo sognavo di diventare pilota.", exampleTranslation: "When I was young I dreamed of becoming a pilot." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-ppvi-01',
      prompt: 'Ieri sera ___ (noi, mangiare) in un ristorante bellissimo.',
      answer: 'abbiamo mangiato',
      hint: '"Ieri sera" = last night → completed event → passato prossimo.',
      feedback: {
        correct: 'Esatto! "Abbiamo mangiato" — passato prossimo, specific completed event.',
        incorrect: 'The correct answer is "abbiamo mangiato".',
        explanation:
          '"Ieri sera" (last night) is a specific time marker for a completed event → passato prossimo. Mangiare + avere: noi → abbiamo mangiato.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-ppvi-02',
      prompt: 'Da bambino, ___ (io, mangiare) sempre la colazione con i nonni.',
      answer: 'mangiavo',
      hint: '"Da bambino" + "sempre" → habitual past → imperfetto.',
      feedback: {
        correct: 'Perfetto! "Mangiavo" — imperfetto for habitual childhood action.',
        incorrect: 'The correct answer is "mangiavo".',
        explanation:
          '"Da bambino" (as a child) + "sempre" (always) = habitual past action → imperfetto. Mangiare, io → mangiavo.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-ppvi-03',
      prompt: 'Mentre ___ (io, camminare), ho visto un incidente.',
      answer: 'camminavo',
      feedback: {
        correct: 'Bravo/a! "Camminavo" — the ongoing background action.',
        incorrect: 'The correct answer is "camminavo".',
        explanation:
          '"Mentre" (while) introduces an ongoing background action → imperfetto: camminavo. "Ho visto" (passato prossimo) is the completed event that happened during the walk.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-ppvi-04',
      question: 'Choose the correct tense: "Every summer, as a child, we went to the sea."',
      options: [
        { value: 'a', label: 'Ogni estate, da bambini, siamo andati al mare.' },
        { value: 'b', label: 'Ogni estate, da bambini, andavamo al mare.' },
        { value: 'c', label: 'Ogni estate, da bambini, andiamo al mare.' },
        { value: 'd', label: 'Ogni estate, da bambini, siamo andavamo al mare.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Andavamo" — imperfetto for habitual recurring childhood action.',
        incorrect: 'The correct answer is "andavamo".',
        explanation:
          '"Ogni estate" (every summer) + "da bambini" (as children) = habitual action that recurred regularly → imperfetto. "Andavamo" (noi, andare, imperfetto).',
        optionExplanations: {
          a: '"Siamo andati" = passato prossimo — implies a specific completed trip, not a yearly habit.',
          c: '"Andiamo" = present tense.',
          d: '"Siamo andavamo" is not a valid Italian form.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-ppvi-05',
      question: '"Leggevo il giornale quando ___ mia moglie." (my wife came in)',
      options: [
        { value: 'a', label: 'entrava' },
        { value: 'b', label: 'è entrata' },
        { value: 'c', label: 'entrava e basta' },
        { value: 'd', label: 'ha entrato' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "È entrata" — the completed interrupting event in passato prossimo.',
        incorrect: 'The correct answer is "è entrata".',
        explanation:
          '"Leggevo" (imperfetto) = ongoing background. "Entrare" = the single completed event that happened during the reading → passato prossimo: è entrata (essere verb, fem. sing. agreement).',
        optionExplanations: {
          a: '"Entrava" would imply she was in the process of entering (ongoing), which is technically possible but the standard pattern for "interruption" uses passato prossimo.',
          c: 'Same issue as (a).',
          d: '"Ha entrato" uses avere — entrare takes essere.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-ppvi-06',
      verb: 'Choose: PP or IMP for each context',
      tense: 'Write the correct form of "andare" for each context',
      pronouns: [
        'io — ieri (single event)',
        'io — ogni estate (habit)',
        'lui — improvvisamente (sudden event)',
        'noi — mentre mangiavamo (simultaneous)',
        'voi — da ragazzi (childhood habit)',
        'loro — stamattina (this morning)',
      ],
      answers: [
        'sono andato/a',
        'andavo',
        'è andato',
        'andavamo',
        'andavate',
        'sono andati/e',
      ],
      feedback: {
        explanation:
          'Pattern: ieri/stamattina/improvvisamente + passato prossimo (sono andato/a, è andato, sono andati/e). Ogni estate/da ragazzi/mentre + imperfetto (andavo, andavate, andavamo). The context word is the key clue.',
      },
    },
    {
      type: 'match',
      id: 'a2-ppvi-07',
      instruction: 'Match each sentence fragment with the correct tense choice.',
      pairs: [
        { left: 'Di solito uscivo alle otto...', right: 'Imperfetto (habit)' },
        { left: 'Ieri mattina sono uscito alle otto...', right: 'Passato Prossimo (specific)' },
        { left: 'Mentre dormiva, ha squillato il telefono.', right: 'IMP + PP (background + event)' },
        { left: 'Aveva i capelli lunghi e gli occhi azzurri.', right: 'Imperfetto (description)' },
        { left: "All'improvviso è caduta.", right: 'Passato Prossimo (sudden event)' },
      ],
      feedback: {
        explanation:
          'The five core uses: "di solito" → imperfetto habit; specific time marker → passato prossimo; mentre + ongoing → imperfetto, interruption → passato prossimo; physical descriptions → imperfetto; "all\'improvviso" → passato prossimo.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-ppvi-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['mentre', 'ha', 'Giulia', 'studiava', 'chiamato', 'Marco'],
      answer: ['Mentre', 'Giulia', 'studiava', 'Marco', 'ha', 'chiamato'],
      feedback: {
        correct: 'Perfetto! "Mentre Giulia studiava, Marco ha chiamato."',
        explanation:
          '"Mentre Giulia studiava" = while Giulia was studying (imperfetto, background). "Marco ha chiamato" = Marco called (passato prossimo, completed interrupting event). Classic IMP + PP structure.',
      },
    },
    {
      type: 'translation',
      id: 'a2-ppvi-09',
      source: 'I used to live in Rome when I was young, but last year I moved to Milan.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Abitavo a Roma quando ero giovane, ma l\'anno scorso mi sono trasferito a Milano.',
        'Vivevo a Roma quando ero giovane, ma l\'anno scorso mi sono trasferito a Milano.',
        'Abitavo a Roma quando ero giovane, ma l\'anno scorso mi sono trasferita a Milano.',
      ],
      feedback: {
        explanation:
          '"Used to live" = abitavo/vivevo (imperfetto, habitual state). "Was young" = ero (essere, imperfetto). "Moved" = mi sono trasferito/a (trasferirsi, reflexive → essere, passato prossimo). "L\'anno scorso" (last year) triggers passato prossimo.',
        modelAnswer: 'Abitavo a Roma quando ero giovane, ma l\'anno scorso mi sono trasferito a Milano.',
      },
    },
  ],
};
