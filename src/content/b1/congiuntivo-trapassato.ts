import type { Lesson } from '../types';

export const congiuntivoTrapassato: Lesson = {
  slug: 'congiuntivo-trapassato',
  title: 'Congiuntivo Trapassato',
  level: 'b1',
  order: 5,
  explanation: {
    text: `## Il Congiuntivo Trapassato (Past Perfect Subjunctive)

The **congiuntivo trapassato** expresses a completed past action in a dependent clause where the main clause is in the past or conditional. It is the "had done" of the subjunctive.

### Formation

**Congiuntivo imperfetto of avere or essere + participio passato**

- *avessi mangiato* (had eaten)
- *fossi andato/a* (had gone)

### Sequence of Tenses — Full Table

| Main clause | Dependent: simultaneous | Dependent: prior |
|-------------|------------------------|------------------|
| Present/Future | Congiuntivo presente | Congiuntivo passato |
| Past/Conditional | Congiuntivo imperfetto | Congiuntivo trapassato |

*Penso che sia andato.* → present + prior completed → congiuntivo passato
*Pensavo che fosse andato.* → past + prior completed → congiuntivo trapassato

### Uses

**1. Past main + completed dependent action:**
*Credevo che avesse già mangiato.* (I believed he had already eaten.)
*Non sapevo che fossi stato malato.* (I didn't know you had been ill.)

**2. Contrary-to-fact past conditions (if-clauses):**
*Se avessi studiato, avrei superato l'esame.*
(If I had studied, I would have passed the exam.)

**3. After past impersonal expressions:**
*Era necessario che avessero firmato prima.* (It was necessary that they had signed beforehand.)

### Counterfactual Conditional Summary

| If-clause | Result clause |
|-----------|---------------|
| Se + imperfetto congiuntivo | + condizionale semplice (present) |
| Se + trapassato congiuntivo | + condizionale composto (past) |`,
    tables: [
      {
        caption: 'Congiuntivo Trapassato — mangiare / partire',
        headers: ['Person', 'avessi mangiato', 'fossi partito/a'],
        rows: [
          ['io', 'avessi mangiato', 'fossi partito/a'],
          ['tu', 'avessi mangiato', 'fossi partito/a'],
          ['lui/lei', 'avesse mangiato', 'fosse partito/a'],
          ['noi', 'avessimo mangiato', 'fossimo partiti/e'],
          ['voi', 'aveste mangiato', 'foste partiti/e'],
          ['loro', 'avessero mangiato', 'fossero partiti/e'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-congtrap-01',
      prompt: 'Credevo che Marco ___ (già, partire) per Roma. (I believed Marco had already left for Rome.)',
      answer: 'fosse già partito',
      hint: 'Past main (credevo) + completed prior action → congiuntivo trapassato; partire uses essere.',
      feedback: {
        correct: 'Esatto! "Credevo che fosse già partito" — congiuntivo trapassato with essere.',
        incorrect: 'The correct answer is "fosse già partito".',
        explanation:
          'Past main (credevo) + prior completed action → congiuntivo trapassato. "Partire" uses essere: fosse (lui, congiuntivo imperfetto of essere) + partito (masc. sing.). Contrast with present: "Credo che sia già partito" (passato).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congtrap-02',
      prompt: 'Se ___ (tu, studiare) di più, avresti superato l\'esame.',
      answer: 'avessi studiato',
      hint: 'Contrary-to-fact past: se + congiuntivo trapassato → condizionale composto.',
      feedback: {
        correct: 'Perfetto! "Se avessi studiato, avresti superato l\'esame."',
        incorrect: 'The correct answer is "avessi studiato".',
        explanation:
          'Past counterfactual: se + congiuntivo trapassato (avessi studiato) → condizionale composto (avresti superato). This implies you did NOT study and did NOT pass.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congtrap-03',
      prompt: 'Non sapevo che voi ___ (essere) già stati in Italia. (I didn\'t know you had already been to Italy.)',
      answer: 'foste già stati',
      hint: 'Past main + completed prior action with essere; voi form.',
      feedback: {
        correct: 'Bravo/a! "Foste già stati" — congiuntivo trapassato, voi, essere.',
        incorrect: 'The correct answer is "foste già stati".',
        explanation:
          '"Non sapevo che" = past main → congiuntivo. Prior completed action → trapassato. "Essere" → congiuntivo imperfetto voi: foste. + stati (masc. plur. agreement with voi).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congtrap-04',
      question: '"Se ___ la verità, avrei reagito diversamente." (If I had known the truth, I would have reacted differently.)',
      options: [
        { value: 'a', label: 'sapessi' },
        { value: 'b', label: 'avessi saputo' },
        { value: 'c', label: 'sapevo' },
        { value: 'd', label: 'abbi saputo' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Se avessi saputo" — congiuntivo trapassato for past counterfactual.',
        incorrect: 'The correct answer is "avessi saputo".',
        explanation:
          'Past counterfactual (result: avrei reagito = condizionale composto) → se + congiuntivo trapassato: avessi saputo. "Sapere" uses avere: avessi (io, congiuntivo imp. avere) + saputo.',
        optionExplanations: {
          a: '"Sapessi" = congiuntivo imperfetto — for present/open hypothetical: se sapessi la verità, reagirei.',
          c: '"Sapevo" = imperfetto indicativo — not subjunctive.',
          d: '"Abbi saputo" does not exist as a standard Italian form.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congtrap-05',
      question: 'Which is the correct sequence: "She was surprised that he had already left."',
      options: [
        { value: 'a', label: 'Era sorpresa che fosse già partito.' },
        { value: 'b', label: 'Era sorpresa che sia già partito.' },
        { value: 'c', label: 'Era sorpresa che è già partito.' },
        { value: 'd', label: 'Era sorpresa che partisse.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Fosse già partito" — past main + prior action → congiuntivo trapassato.',
        incorrect: 'The correct answer is "Era sorpresa che fosse già partito."',
        explanation:
          'Past main (era sorpresa) + prior completed action (had already left) → congiuntivo trapassato: fosse partito. "Già" = already, placed between fosse and partito.',
        optionExplanations: {
          b: '"Sia partito" = congiuntivo passato — used with present main: è sorpresa che sia partito.',
          c: '"È partito" = indicativo — cannot follow era sorpresa che.',
          d: '"Partisse" = congiuntivo imperfetto — for simultaneous action, not prior.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-congtrap-06',
      verb: 'venire (essere) — congiuntivo trapassato, male speaker',
      tense: 'Congiuntivo Trapassato',
      pronouns: ['io', 'tu', 'lui', 'noi', 'voi', 'loro'],
      answers: ['fossi venuto', 'fossi venuto', 'fosse venuto', 'fossimo venuti', 'foste venuti', 'fossero venuti'],
      feedback: {
        explanation:
          '"Venire" uses essere. Congiuntivo trapassato = congiuntivo imperfetto of essere + venuto. Essere forms: fossi/fossi/fosse/fossimo/foste/fossero. + venuto (masc. sing.) or venuti (masc. plur. for noi/voi/loro).',
      },
    },
    {
      type: 'match',
      id: 'b1-congtrap-07',
      instruction: 'Match each if-clause type with its result clause.',
      pairs: [
        { left: 'Se fossi ricco (now)...', right: '...comprerei una villa.' },
        { left: 'Se fossi stato ricco (then)...', right: '...avrei comprato una villa.' },
        { left: 'Se avesse studiato...', right: '...avrebbe superato l\'esame.' },
        { left: 'Se studiasse...', right: '...supererebbe l\'esame.' },
        { left: 'Se avesse piovuto...', right: '...saremmo rimasti a casa.' },
      ],
      feedback: {
        explanation:
          'Two counterfactual types: (1) present unreal: se + imp. congiuntivo → condizionale semplice. (2) past unreal: se + trapassato congiuntivo → condizionale composto. "Se fossi" vs "se fossi stato": the former = not rich now; the latter = was not rich then.',
      },
    },
    {
      type: 'reorder',
      id: 'b1-congtrap-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['avessi', 'dormito', 'meglio', 'Se', 'più', 'stanco', 'sarei'],
      answer: ['Se', 'avessi', 'dormito', 'di', 'più', 'sarei', 'meno', 'stanco'],
      feedback: {
        correct: 'Perfetto! "Se avessi dormito di più, sarei meno stanco."',
        explanation:
          '"Se avessi dormito di più" = if I had slept more (congiuntivo trapassato). "Sarei meno stanco" = I would be less tired (condizionale semplice — mixed conditional: past condition affecting present state). "Di più" = more. "Meno stanco" = less tired.',
      },
    },
    {
      type: 'translation',
      id: 'b1-congtrap-09',
      source: 'If she had told me earlier, I would have helped her.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Se me lo avesse detto prima, l\'avrei aiutata.',
        'Se me lo avesse detto prima, avrei potuto aiutarla.',
        'Se mi avesse detto prima, l\'avrei aiutata.',
      ],
      feedback: {
        explanation:
          '"If she had told me" = se me lo avesse detto (congiuntivo trapassato: avesse + detto, dire irregular). "Earlier" = prima. "I would have helped her" = l\'avrei aiutata (condizionale composto: avrei + aiutata, agreement with l\' = la = her).',
        modelAnswer: 'Se me lo avesse detto prima, l\'avrei aiutata.',
      },
    },
  ],
};
