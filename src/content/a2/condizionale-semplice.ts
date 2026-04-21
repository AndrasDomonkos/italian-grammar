import type { Lesson } from '../types';

export const condizionaleSemplice: Lesson = {
  slug: 'condizionale-semplice',
  title: 'Condizionale Semplice',
  level: 'a2',
  order: 11,
  explanation: {
    text: `## Il Condizionale Semplice (The Conditional)

The **condizionale semplice** (present conditional) is used to express what "would" happen, polite requests, desires, and hypothetical situations.

### When to Use

1. **"Would" statements:** *Mangerei una pizza.* (I would eat a pizza.)
2. **Polite requests:** *Potresti aiutarmi?* (Could you help me?)
3. **Wishes:** *Vorrei un caffè.* (I would like a coffee.)
4. **Advice:** *Dovresti studiare di più.* (You should study more.)
5. **Hypothetical (result clause of if-sentences):** *Se avessi tempo, viaggerei.* (If I had time, I would travel.)

### Formation

The conditional uses the **same stems as the future tense** but with different endings:

| Person | Ending |
|--------|--------|
| io | -rei |
| tu | -resti |
| lui/lei | -rebbe |
| noi | -remmo |
| voi | -reste |
| loro | -rebbero |

**-ARE verbs** change 'a' to 'e': parler- → *parlerei, parleresti, parlerebbe…*
**-ERE/-IRE verbs:** scriv**er**- → *scriverei*, dormir- → *dormirei*

### Irregular Conditional Stems (same as future stems)

| Infinitive | Stem | io form |
|------------|------|---------|
| essere | sar- | sarei |
| avere | avr- | avrei |
| andare | andr- | andrei |
| venire | verr- | verrei |
| fare | far- | farei |
| dovere | dovr- | dovrei |
| potere | potr- | potrei |
| volere | vorr- | vorrei |
| sapere | sapr- | saprei |

**Memory trick:** future stem + conditional endings = condizionale.`,
    tables: [
      {
        caption: 'Condizionale — parlare / essere',
        headers: ['Person', 'parlare', 'essere'],
        rows: [
          ['io', 'parlerei', 'sarei'],
          ['tu', 'parleresti', 'saresti'],
          ['lui/lei', 'parlerebbe', 'sarebbe'],
          ['noi', 'parleremmo', 'saremmo'],
          ['voi', 'parlereste', 'sareste'],
          ['loro', 'parlerebbero', 'sarebbero'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "vorrei", translation: "I would like", example: "Vorrei un caffe macchiato, grazie.", exampleTranslation: "I would like a macchiato coffee, thank you." },
    { word: "potrebbe", translation: "he/she/it could", example: "Potrebbe ripetere piu lentamente?", exampleTranslation: "Could you repeat more slowly?" },
    { word: "dovrebbe", translation: "he/she should", example: "Dovresti dormire di piu.", exampleTranslation: "You should sleep more." },
    { word: "sarebbe", translation: "it would be", example: "Sarebbe bello visitare Tokyo un giorno.", exampleTranslation: "It would be nice to visit Tokyo one day." },
    { word: "mi piacerebbe", translation: "I would like", example: "Mi piacerebbe imparare il giapponese.", exampleTranslation: "I would like to learn Japanese." },
    { word: "andresti", translation: "would you go", example: "Andresti in vacanza in Islanda?", exampleTranslation: "Would you go on holiday to Iceland?" },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-cond-01',
      prompt: '___ (io, volere) un caffè, per favore. (I would like a coffee, please.)',
      answer: 'Vorrei',
      feedback: {
        correct: 'Esatto! "Vorrei" — condizionale of volere, very common polite expression.',
        incorrect: 'The correct answer is "Vorrei".',
        explanation:
          '"Volere" → irregular stem vorr- + -ei (io) = vorrei. This is one of the most common uses of the conditional — polite requests and wishes. Much more polite than "voglio un caffè!"',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-cond-02',
      prompt: '___ (tu, potere) ripetere, per favore? (Could you repeat, please?)',
      answer: 'Potresti',
      hint: 'potere → stem: potr-',
      feedback: {
        correct: 'Perfetto! "Potresti" — condizionale of potere, polite request.',
        incorrect: 'The correct answer is "Potresti".',
        explanation:
          '"Potere" → irregular stem potr- + -esti (tu) = potresti. "Potresti + infinitive?" is the standard polite way to ask someone to do something.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-cond-03',
      prompt: 'Con più tempo libero, ___ (noi, viaggiare) di più. (With more free time, we would travel more.)',
      answer: 'viaggeremmo',
      feedback: {
        correct: 'Bravo/a! "Viaggeremmo" — noi conditional of viaggiare.',
        incorrect: 'The correct answer is "viaggeremmo".',
        explanation:
          '"Viaggiare" → stem: viagger- (note the -gg- to keep the hard g sound) + -emmo (noi) = viaggeremmo. This is the hypothetical use: "if we had… we would…"',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-cond-04',
      question: 'Choose the correct conditional: "You should rest more."',
      options: [
        { value: 'a', label: 'Devi riposare di più.' },
        { value: 'b', label: 'Dovresti riposare di più.' },
        { value: 'c', label: 'Dovevi riposare di più.' },
        { value: 'd', label: 'Dovresti riposaresti di più.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Dovresti" — dovere in the conditional = should.',
        incorrect: 'The correct answer is "Dovresti riposare di più."',
        explanation:
          '"Dovere" conditional = dovr- + -esti (tu) = dovresti. "Dovresti + infinitive" = you should/ought to do something. Only the modal goes in the conditional; the dependent verb stays as infinitive.',
        optionExplanations: {
          a: '"Devi" = present (you must) — stronger obligation, not a polite suggestion.',
          c: '"Dovevi" = imperfetto (you had to / you were supposed to) — past.',
          d: '"Riposaresti" puts the infinitive in conditional too — wrong, only the modal is conditional.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-cond-05',
      question: '"Se fossi ricco, ___ una villa in Italia." (If I were rich, I would buy a villa in Italy.)',
      options: [
        { value: 'a', label: 'compro' },
        { value: 'b', label: 'compravo' },
        { value: 'c', label: 'comprerei' },
        { value: 'd', label: 'comprerò' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Comprerei" — the result clause of a hypothetical uses the conditional.',
        incorrect: 'The correct answer is "comprerei".',
        explanation:
          'Italian hypothetical structure: Se + imperfetto congiuntivo (se fossi), conditional (comprerei). The result clause = condizionale. Comprare → comprer- + -ei (io) = comprerei.',
        optionExplanations: {
          a: '"Compro" = present — not hypothetical.',
          b: '"Compravo" = imperfetto — not the result clause of a conditional.',
          d: '"Comprerò" = futuro — not hypothetical.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-cond-06',
      verb: 'fare (irregular: far-)',
      tense: 'Condizionale Semplice',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['farei', 'faresti', 'farebbe', 'faremmo', 'fareste', 'farebbero'],
      feedback: {
        explanation:
          '"Fare" → conditional stem: far- (same as future: farò → far-). Add endings: -ei/-esti/-ebbe/-emmo/-este/-ebbero. Result: farei/faresti/farebbe/faremmo/fareste/farebbero.',
      },
    },
    {
      type: 'match',
      id: 'a2-cond-07',
      instruction: 'Match each conditional sentence with its English meaning.',
      pairs: [
        { left: 'Vorrei un bicchiere d\'acqua.', right: 'I would like a glass of water.' },
        { left: 'Dovreste studiare di più.', right: 'You should study more. (plural)' },
        { left: 'Potrebbe aiutarmi?', right: 'Could you help me? (formal)' },
        { left: 'Non saprei cosa dire.', right: "I wouldn't know what to say." },
        { left: 'Andrebbero in vacanza.', right: 'They would go on holiday.' },
      ],
      feedback: {
        explanation:
          '"Vorrei" (io, volere) = I would like. "Dovreste" (voi, dovere) = you should. "Potrebbe" (lui/lei/Lei) = could you/he/she. "Saprei" (io, sapere) = I would know. "Andrebbero" (loro, andare) = they would go.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-cond-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['al', 'Potreste', 'domani', 'venire', 'mio', 'compleanno'],
      answer: ['Potreste', 'venire', 'al', 'mio', 'compleanno', 'domani'],
      feedback: {
        correct: 'Perfetto! "Potreste venire al mio compleanno domani?"',
        explanation:
          '"Potreste" = condizionale of potere, voi form (potr- + -este). "Venire" = infinitive. "Al mio compleanno" = a + il = al. "Domani" = tomorrow (time expression at end).',
      },
    },
    {
      type: 'translation',
      id: 'a2-cond-09',
      source: 'I would love to live in Italy, but I should first learn the language.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Mi piacerebbe vivere in Italia, ma dovrei prima imparare la lingua.',
        'Adorerei vivere in Italia, ma dovrei prima imparare la lingua.',
        'Amerei vivere in Italia, ma dovrei prima imparare la lingua.',
      ],
      feedback: {
        explanation:
          '"Would love" = mi piacerebbe (piacere conditional: piacerebbe, it would please me) or adorerei/amerei (adorare/amare conditional). "Should" = dovrei (dovere, io conditional). "First" = prima. Both clauses use the conditional.',
        modelAnswer: 'Mi piacerebbe vivere in Italia, ma dovrei prima imparare la lingua.',
      },
    },
  ],
};
