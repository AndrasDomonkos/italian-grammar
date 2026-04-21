import type { Lesson } from '../types';

export const periodoIpotetico: Lesson = {
  slug: 'periodo-ipotetico',
  title: 'Periodo Ipotetico',
  level: 'b1',
  order: 6,
  explanation: {
    text: `## Il Periodo Ipotetico (Conditional Sentences)

Italian has three main types of conditional sentences, based on how real or likely the condition is.

### Type 1 — Reale (Real/Likely)

Condition is possible or likely to happen.

**Se + presente indicativo → presente indicativo or futuro**

*Se studi, passi l'esame.* (If you study, you pass the exam.)
*Se studierò, passerò l'esame.* (If I study, I will pass.)
*Se hai fame, mangia qualcosa.* (If you're hungry, eat something.)

### Type 2 — Possibile/Irreale al Presente (Unlikely/Unreal — Present)

Condition is hypothetical or contrary to present reality.

**Se + congiuntivo imperfetto → condizionale semplice**

*Se avessi tempo, viaggerei.* (If I had time [but I don't], I would travel.)
*Se fossi te, parlerei con lui.* (If I were you, I would talk to him.)
*Se potesse, verrebbe.* (If he could [but he can't], he would come.)

### Type 3 — Irreale al Passato (Unreal — Past)

Condition contrary to past reality — something that didn't happen.

**Se + congiuntivo trapassato → condizionale composto**

*Se avessi studiato, avrei superato.* (If I had studied [but I didn't], I would have passed.)
*Se fosse venuta, l'avrei vista.* (If she had come [but she didn't], I would have seen her.)

### Mixed Conditionals

Sometimes the if-clause is past but the result is present (or vice versa):

*Se avessi studiato medicina, ora sarei un medico.*
(If I had studied medicine [past], I would be a doctor now [present].)
→ Se + trapassato congiuntivo → condizionale semplice

### Summary Table

| Type | Se-clause | Result clause | Reality |
|------|-----------|---------------|---------|
| 1 (real) | presente / futuro | presente / futuro / imperativo | possible |
| 2 (unreal present) | congiuntivo imperfetto | condizionale semplice | unlikely now |
| 3 (unreal past) | congiuntivo trapassato | condizionale composto | impossible (past) |`,
    tables: [
      {
        caption: 'Three Types at a Glance',
        headers: ['Type', 'If-clause', 'Result', 'Example'],
        rows: [
          ['Real', 'Se + presente', 'presente/futuro', 'Se piove, resto a casa.'],
          ['Unreal present', 'Se + cong. imperfetto', 'condizionale semplice', 'Se piovesse, resterei a casa.'],
          ['Unreal past', 'Se + cong. trapassato', 'condizionale composto', 'Se avesse piovuto, sarei rimasto.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-ipot-01',
      prompt: 'Se ___ (fare) bello domani, andiamo al mare. (If the weather is nice tomorrow, we\'ll go to the beach.)',
      answer: 'fa',
      hint: 'Real condition (possible future) → se + presente indicativo.',
      feedback: {
        correct: 'Esatto! "Se fa bello, andiamo" — Type 1: real/likely condition.',
        incorrect: 'The correct answer is "fa".',
        explanation:
          'Type 1 (reale): se + presente → presente or futuro in the result. "Fare bello" = to be nice weather (literally "to do nice"). Fa (lui/lei, fare present).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-ipot-02',
      prompt: 'Se ___ (io, vincere) alla lotteria, comprerei una villa. (If I won the lottery, I\'d buy a villa.)',
      answer: 'vincessi',
      hint: 'Type 2: unlikely → se + congiuntivo imperfetto.',
      feedback: {
        correct: 'Perfetto! "Se vincessi alla lotteria" — Type 2, congiuntivo imperfetto.',
        incorrect: 'The correct answer is "vincessi".',
        explanation:
          'Type 2 (irreale presente): se + congiuntivo imperfetto → condizionale semplice. "Vincere" → vincessi (io/tu), vincesse (lui/lei), vincessimo (noi), vinceste (voi), vincessero (loro).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-ipot-03',
      prompt: 'Se ___ (loro, arrivare) prima, avrebbero trovato posto. (If they had arrived earlier, they would have found a seat.)',
      answer: 'fossero arrivati',
      hint: 'Type 3: unreal past → se + congiuntivo trapassato; arrivare uses essere.',
      feedback: {
        correct: 'Bravo/a! "Se fossero arrivati prima" — Type 3, congiuntivo trapassato.',
        incorrect: 'The correct answer is "fossero arrivati".',
        explanation:
          'Type 3 (irreale passato): se + congiuntivo trapassato → condizionale composto. "Arrivare" uses essere: fossero (loro, cong. imp. essere) + arrivati (masc. plur. agreement).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-ipot-04',
      question: '"Se avessi saputo, ___ prima." (If I had known, I would have come sooner.)',
      options: [
        { value: 'a', label: 'verrei' },
        { value: 'b', label: 'sarei venuto' },
        { value: 'c', label: 'vengo' },
        { value: 'd', label: 'venissi' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Sarei venuto" — condizionale composto matches Type 3 if-clause.',
        incorrect: 'The correct answer is "sarei venuto".',
        explanation:
          'If-clause uses trapassato (avessi saputo) → result clause must be condizionale composto: sarei venuto (essere verb, masc. sing.). Type 3: past unreal.',
        optionExplanations: {
          a: '"Verrei" = condizionale semplice — for Type 2 (present unreal), not Type 3.',
          c: '"Vengo" = present indicativo — not a conditional result.',
          d: '"Venissi" = congiuntivo imperfetto — belongs in the if-clause of Type 2, not the result.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-ipot-05',
      question: 'Identify the correct Type 1 (real) conditional sentence:',
      options: [
        { value: 'a', label: 'Se avrei tempo, venivo.' },
        { value: 'b', label: 'Se avevo tempo, venivo.' },
        { value: 'c', label: 'Se avessi tempo, verrei.' },
        { value: 'd', label: 'Se hai tempo, vieni con noi.' },
      ],
      answer: 'd',
      feedback: {
        correct: 'Esatto! "Se hai tempo, vieni con noi" — Type 1: presente + imperativo.',
        incorrect: 'The correct answer is "Se hai tempo, vieni con noi."',
        explanation:
          'Type 1 (real): se + presente → any present/future/imperative result. "Hai" (presente) + "vieni" (imperativo) = standard Type 1.',
        optionExplanations: {
          a: '"Se avrei" is wrong — the conditional ("avrei") is never used in the se-clause.',
          b: '"Se avevo... venivo" can be used colloquially for past habit, but this is not a proper conditional sentence structure.',
          c: '"Se avessi tempo, verrei" = Type 2 (unreal present).',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-ipot-06',
      verb: 'Identify: write the if-clause verb form for each conditional type',
      tense: 'Using "andare" — write the correct verb form for "io" in the se-clause',
      pronouns: [
        'Type 1 (real, present)',
        'Type 2 (unreal present)',
        'Type 3 (unreal past)',
        'Type 1 (real, future)',
        'Type 2 with "essere" (se io fossi...)',
        'Type 3 with "essere" (se io fossi andato...)',
      ],
      answers: [
        'vado',
        'andassi',
        'fossi andato',
        'andrò',
        'fossi',
        'fossi andato',
      ],
      feedback: {
        explanation:
          'Type 1: present (vado) or future (andrò) in the se-clause. Type 2: congiuntivo imperfetto (andassi for andare, or fossi for essere). Type 3: congiuntivo trapassato (fossi andato for andare with essere). The result clause determines the type — you back-map to the appropriate if-clause form.',
      },
    },
    {
      type: 'match',
      id: 'b1-ipot-07',
      instruction: 'Match each conditional sentence with its type.',
      pairs: [
        { left: 'Se piove, prendo l\'ombrello.', right: 'Type 1 — real' },
        { left: 'Se piovesse, prenderei l\'ombrello.', right: 'Type 2 — unreal present' },
        { left: 'Se avesse piovuto, avrei preso l\'ombrello.', right: 'Type 3 — unreal past' },
        { left: 'Se avrà tempo, verrà.', right: 'Type 1 — real (future)' },
        { left: 'Se fossi più alto, giocherei a basket.', right: 'Type 2 — unreal present' },
      ],
      feedback: {
        explanation:
          'Type 1: se + indicative (present or future). Type 2: se + congiuntivo imperfetto → condizionale semplice. Type 3: se + congiuntivo trapassato → condizionale composto. "Se avrà" = future in real condition (acceptable in Italian, unlike Type 1 with present).',
      },
    },
    {
      type: 'reorder',
      id: 'b1-ipot-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['medicina', 'avessi', 'ora', 'Se', 'studiato', 'medico', 'sarei'],
      answer: ['Se', 'avessi', 'studiato', 'medicina', 'ora', 'sarei', 'un', 'medico'],
      feedback: {
        correct: 'Perfetto! "Se avessi studiato medicina, ora sarei un medico."',
        explanation:
          'Mixed conditional: past if-clause (avessi studiato = congiuntivo trapassato) → present result (sarei = condizionale semplice, not composto). "Ora" signals the result is about the present state. "Un medico" = a doctor (indefinite article).',
      },
    },
    {
      type: 'translation',
      id: 'b1-ipot-09',
      source: 'If you study every day, you will improve. If you studied more, you would be better. If you had studied earlier, you would have been excellent.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Se studi ogni giorno, migliorerai. Se studiassi di più, saresti migliore. Se avessi studiato prima, saresti stato/a ottimo/a.',
        'Se studi ogni giorno, migliorai. Se studiassi di più, miglioreresti. Se avessi studiato prima, saresti migliorato/a molto.',
      ],
      feedback: {
        explanation:
          'Three types: (1) se studi → migliorerai (Type 1 with futuro). (2) se studiassi → saresti migliore (Type 2: imperfetto cong. → condizionale semplice). (3) se avessi studiato → saresti stato ottimo (Type 3: trapassato cong. → condizionale composto). All three in sequence.',
        modelAnswer: 'Se studi ogni giorno, migliorerai. Se studiassi di più, saresti migliore. Se avessi studiato prima, saresti stato/a ottimo/a.',
      },
    },
  ],
};
