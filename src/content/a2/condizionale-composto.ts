import type { Lesson } from '../types';

export const condizionaleComposto: Lesson = {
  slug: 'condizionale-composto',
  title: 'Condizionale Composto',
  level: 'a2',
  order: 12,
  explanation: {
    text: `## Il Condizionale Composto (The Conditional Perfect)

The **condizionale composto** expresses what "would have" happened — a hypothetical action in the past that did not occur.

### Formation

**Condizionale semplice of avere or essere + participio passato**

- *avrei mangiato* (I would have eaten)
- *sarei andato/a* (I would have gone)

The choice of avere/essere follows the same rules as passato prossimo.

### Uses

**1. Hypothetical past (result clause of if-sentences with trapassato):**
*Se avessi studiato di più, avrei superato l'esame.*
(If I had studied more, I would have passed the exam.)

**2. "Would have" — action that didn't happen:**
*Avrei chiamato, ma non avevo il numero.*
(I would have called, but I didn't have the number.)

**3. Reported speech — future in the past (indirecto libero):**
*Ha detto che sarebbe venuto.* (He said he would come — reported future.)

**4. Regret or criticism:**
*Avresti dovuto dirmelo prima!* (You should have told me sooner!)
*Avrebbero potuto aspettare.* (They could have waited.)

### Agreement

As with passato prossimo, the participle agrees with the subject when using **essere**:
*Sarebbe venuta, ma era stanca.* (She would have come, but she was tired.)`,
    tables: [
      {
        caption: 'Condizionale Composto — mangiare / andare',
        headers: ['Person', 'avrei mangiato', 'sarei andato/a'],
        rows: [
          ['io', 'avrei mangiato', 'sarei andato/a'],
          ['tu', 'avresti mangiato', 'saresti andato/a'],
          ['lui/lei', 'avrebbe mangiato', 'sarebbe andato/a'],
          ['noi', 'avremmo mangiato', 'saremmo andati/e'],
          ['voi', 'avreste mangiato', 'sareste andati/e'],
          ['loro', 'avrebbero mangiato', 'sarebbero andati/e'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "avrei fatto", translation: "I would have done", example: "Avrei fatto di piu se avessi avuto tempo.", exampleTranslation: "I would have done more if I had had time." },
    { word: "sarebbe venuto", translation: "he would have come", example: "Sarebbe venuto ma era malato.", exampleTranslation: "He would have come but he was ill." },
    { word: "avrei detto", translation: "I would have said", example: "Non avrei mai detto una cosa del genere.", exampleTranslation: "I would never have said such a thing." },
    { word: "saresti partita", translation: "you (f.) would have left", example: "Saresti partita prima?", exampleTranslation: "Would you have left earlier?" },
    { word: "avremmo visto", translation: "we would have seen", example: "Avremmo visto il concerto se avessimo i biglietti.", exampleTranslation: "We would have seen the concert if we had the tickets." },
    { word: "avrebbe potuto", translation: "he/she could have", example: "Avrebbe potuto telefonare prima.", exampleTranslation: "He/she could have called beforehand." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-condc-01',
      prompt: 'Se avessi avuto più tempo, ___ (io, finire) il libro. (If I had had more time, I would have finished the book.)',
      answer: 'avrei finito',
      feedback: {
        correct: 'Esatto! "Avrei finito" — condizionale composto with avere.',
        incorrect: 'The correct answer is "avrei finito".',
        explanation:
          '"Finire" uses avere. Condizionale composto: avrei (io, cond. of avere) + finito (participio). This is the result clause of a hypothetical past sentence: se + trapassato congiuntivo → condizionale composto.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-condc-02',
      prompt: 'Ha detto che ___ (lei, venire) alla festa. (She said she would come to the party.)',
      answer: 'sarebbe venuta',
      hint: 'Reported future in the past → condizionale composto; venire uses essere.',
      feedback: {
        correct: 'Perfetto! "Sarebbe venuta" — reported future + essere + fem. agreement.',
        incorrect: 'The correct answer is "sarebbe venuta".',
        explanation:
          '"Venire" uses essere. Condizionale composto: sarebbe (lei, cond. of essere) + venuta (fem. sing. agreement). This is "future in the past" in indirect speech: she said [that she would come].',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-condc-03',
      prompt: '___ (tu, dovere) dirmelo prima! (You should have told me sooner!)',
      answer: 'Avresti dovuto',
      hint: 'dovere in condizionale composto + infinitive',
      feedback: {
        correct: 'Bravo/a! "Avresti dovuto dirmelo" — condizionale composto of dovere.',
        incorrect: 'The correct answer is "Avresti dovuto".',
        explanation:
          '"Dovere" in condizionale composto: avresti (tu) + dovuto. This is always with avere. Then the infinitive follows: avresti dovuto + dirmi + lo = avresti dovuto dirmelo. "Avresti dovuto + inf." = you should have done.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-condc-04',
      question: '"Se avesse piovuto, ___." (If it had rained, we would have stayed home.)',
      options: [
        { value: 'a', label: 'saremmo rimasti a casa.' },
        { value: 'b', label: 'resteremmo a casa.' },
        { value: 'c', label: 'siamo rimasti a casa.' },
        { value: 'd', label: 'rimarremmo a casa.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Corretto! "Saremmo rimasti" — condizionale composto, essere verb.',
        incorrect: 'The correct answer is "saremmo rimasti a casa."',
        explanation:
          '"Se + congiuntivo trapassato → condizionale composto." "Rimanere" uses essere: saremmo (noi, cond. of essere) + rimasti (masc. plur.). This is the fully hypothetical past condition.',
        optionExplanations: {
          b: '"Resteremmo" = condizionale semplice — used with a present/open condition, not a past counterfactual.',
          c: '"Siamo rimasti" = passato prossimo — a real past event, not hypothetical.',
          d: '"Rimarremmo" = condizionale semplice — correct structure for open conditions only.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-condc-05',
      question: 'Which expresses "They could have helped but they didn\'t"?',
      options: [
        { value: 'a', label: 'Potevano aiutare.' },
        { value: 'b', label: 'Potrebbero aiutare.' },
        { value: 'c', label: 'Avrebbero potuto aiutare.' },
        { value: 'd', label: 'Avevano potuto aiutare.' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Avrebbero potuto aiutare" — condizionale composto of potere.',
        incorrect: 'The correct answer is "Avrebbero potuto aiutare."',
        explanation:
          '"Could have done" = avrebbero potuto + infinitive. "Potere" in condizionale composto: avrebbero (loro) + potuto. Then the dependent infinitive: aiutare.',
        optionExplanations: {
          a: '"Potevano" = imperfetto (they were able to / they could) — past ability, not hypothetical.',
          b: '"Potrebbero" = condizionale semplice (they could now) — present, not past.',
          d: '"Avevano potuto" = trapassato prossimo (they had been able to) — past perfect, not conditional.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-condc-06',
      verb: 'partire (essere) — male speaker',
      tense: 'Condizionale Composto',
      pronouns: ['io', 'tu', 'lui', 'noi', 'voi', 'loro'],
      answers: ['sarei partito', 'saresti partito', 'sarebbe partito', 'saremmo partiti', 'sareste partiti', 'sarebbero partiti'],
      feedback: {
        explanation:
          '"Partire" uses essere. Condizionale composto: cond. of essere (sarei/saresti/sarebbe/saremmo/sareste/sarebbero) + partito. Masc. sing. = partito, masc. plur. = partiti. Female speaker: partita/partite.',
      },
    },
    {
      type: 'match',
      id: 'a2-condc-07',
      instruction: 'Match each Italian sentence with its English translation.',
      pairs: [
        { left: 'Avrei mangiato, ma non avevo fame.', right: 'I would have eaten, but I wasn\'t hungry.' },
        { left: 'Avresti potuto dirlo prima.', right: 'You could have said it sooner.' },
        { left: 'Sarebbe venuto, ma era malato.', right: 'He would have come, but he was ill.' },
        { left: 'Avremmo comprato la casa.', right: 'We would have bought the house.' },
        { left: 'Ha detto che sarebbe tornata.', right: 'She said she would return.' },
      ],
      feedback: {
        explanation:
          'Five uses: (1) hypothetical past: avrei mangiato; (2) reproach/regret: avresti potuto; (3) hypothetical past with essere: sarebbe venuto; (4) plain "would have": avremmo comprato; (5) reported future: ha detto che sarebbe tornata.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-condc-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['studiato', 'esame', 'avuto', 'Se', 'avessi', 'avrei', 'superato', "l'"],
      answer: ['Se', 'avessi', 'studiato', 'avrei', 'superato', "l'", 'esame'],
      feedback: {
        correct: "Perfetto! \"Se avessi studiato, avrei superato l'esame.\"",
        explanation:
          '"Se avessi studiato" = if I had studied (congiuntivo trapassato: avessi + studiato). "Avrei superato" = I would have passed (condizionale composto: avrei + superato). "L\'esame" = the exam (lo → l\' before vowel).',
      },
    },
    {
      type: 'translation',
      id: 'a2-condc-09',
      source: 'I would have called you, but I didn\'t have your number.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Ti avrei chiamato, ma non avevo il tuo numero.',
        'Ti avrei chiamata, ma non avevo il tuo numero.',
        'Avrei chiamato te, ma non avevo il tuo numero.',
      ],
      feedback: {
        explanation:
          '"Would have called" = avrei chiamato (cond. comp. of chiamare). "You" = ti (direct obj., informal). "But I didn\'t have" = ma non avevo (imperfetto). "Your number" = il tuo numero.',
        modelAnswer: 'Ti avrei chiamato, ma non avevo il tuo numero.',
      },
    },
  ],
};
