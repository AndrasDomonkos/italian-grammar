import type { Lesson } from '../types';

export const congiuntivoPassato: Lesson = {
  slug: 'congiuntivo-passato',
  title: 'Congiuntivo Passato',
  level: 'b1',
  order: 2,
  explanation: {
    text: `## Il Congiuntivo Passato (Past Subjunctive)

The **congiuntivo passato** expresses a past or completed action in the dependent clause. It is triggered by the same expressions as the congiuntivo presente, but the action in the dependent clause happened before the main clause.

### Formation

**Congiuntivo presente of avere or essere + participio passato**

With avere: *abbia mangiato* (has eaten / ate)
With essere: *sia andato/a* (has gone / went)

Choose avere/essere by the same rules as passato prossimo.

### When to Use Congiuntivo Passato vs Presente

The tense of the main clause determines which congiuntivo to use:

| Main clause | Dependent action | Congiuntivo |
|-------------|------------------|-------------|
| Present | Simultaneous / future | Presente: *Penso che sia stanco.* |
| Present | Prior / completed | Passato: *Penso che sia partito.* |

*Penso che Marco **sia** stanco.* (I think Marco is tired — now)
*Penso che Marco **sia partito**.* (I think Marco left — he's already gone)
*È possibile che **abbia dimenticato**.* (It's possible he forgot.)
*Spero che **siano arrivati** bene.* (I hope they arrived safely.)

### Agreement

With essere, the participle agrees with the subject of the dependent clause:
*Penso che Maria sia arrivata.* (fem. sing. — arrivata)
*Credo che i ragazzi siano usciti.* (masc. plur. — usciti)`,
    tables: [
      {
        caption: 'Congiuntivo Passato — mangiare / partire',
        headers: ['Person', 'abbia mangiato', 'sia partito/a'],
        rows: [
          ['io', 'abbia mangiato', 'sia partito/a'],
          ['tu', 'abbia mangiato', 'sia partito/a'],
          ['lui/lei', 'abbia mangiato', 'sia partito/a'],
          ['noi', 'abbiamo mangiato', 'siamo partiti/e'],
          ['voi', 'abbiate mangiato', 'siate partiti/e'],
          ['loro', 'abbiano mangiato', 'siano partiti/e'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "penso che sia andato", translation: "I think he went", example: "Penso che sia andato a Roma la settimana scorsa.", exampleTranslation: "I think he went to Rome last week." },
    { word: "credo che abbia detto", translation: "I believe he said", example: "Credo che abbia detto la verita.", exampleTranslation: "I believe he told the truth." },
    { word: "spero che abbia capito", translation: "I hope he understood", example: "Spero che abbia capito la spiegazione.", exampleTranslation: "I hope he understood the explanation." },
    { word: "e possibile che sia successo", translation: "it is possible that it happened", example: "E possibile che sia successo un incidente.", exampleTranslation: "It is possible that an accident happened." },
    { word: "mi dispiace che tu abbia perso", translation: "I am sorry you lost", example: "Mi dispiace che tu abbia perso il treno.", exampleTranslation: "I am sorry that you missed the train." },
    { word: "benche abbia studiato", translation: "although he/she studied", example: "Benche abbia studiato, non ha passato l'esame.", exampleTranslation: "Although he studied, he did not pass the exam." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-congpass-01',
      prompt: 'Penso che Marco ___ (già partire) per Roma. (I think Marco has already left for Rome.)',
      answer: 'sia già partito',
      hint: 'partire uses essere; congiuntivo passato for a completed action.',
      feedback: {
        correct: 'Esatto! "Penso che Marco sia già partito" — congiuntivo passato with essere.',
        incorrect: 'The correct answer is "sia già partito".',
        explanation:
          '"Pensare che" → congiuntivo. "Partire" = essere verb. Congiuntivo passato: sia (congiuntivo of essere, lui) + partito (masc. sing. agreement). "Già" = already (between auxiliary and participle).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congpass-02',
      prompt: 'È possibile che lei ___ (dimenticare) il nostro appuntamento. (It\'s possible she forgot our appointment.)',
      answer: 'abbia dimenticato',
      feedback: {
        correct: 'Perfetto! "Abbia dimenticato" — congiuntivo passato with avere.',
        incorrect: 'The correct answer is "abbia dimenticato".',
        explanation:
          '"È possibile che" → congiuntivo. "Dimenticare" = avere verb. Congiuntivo passato: abbia (lei, congiuntivo of avere) + dimenticato (no agreement with avere). The action of forgetting happened before the present moment of speaking.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congpass-03',
      prompt: 'Sebbene ___ (loro, studiare) molto, non hanno superato l\'esame.',
      answer: 'abbiano studiato',
      hint: 'sebbene (although) + congiuntivo; studiare uses avere; loro.',
      feedback: {
        correct: 'Bravo/a! "Sebbene abbiano studiato" — congiuntivo passato, loro.',
        incorrect: 'The correct answer is "abbiano studiato".',
        explanation:
          '"Sebbene" (although) always requires the congiuntivo. Loro congiuntivo passato of studiare: abbiano (loro, congiuntivo avere) + studiato. The studying happened before (and despite it) they didn\'t pass.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congpass-04',
      question: 'Which is correct? "I hope they arrived safely."',
      options: [
        { value: 'a', label: 'Spero che arrivino bene.' },
        { value: 'b', label: 'Spero che siano arrivati bene.' },
        { value: 'c', label: 'Spero che sono arrivati bene.' },
        { value: 'd', label: 'Spero che arrivassero bene.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Siano arrivati bene" — congiuntivo passato for a completed arrival.',
        incorrect: 'The correct answer is "siano arrivati bene."',
        explanation:
          '"Arrivare" uses essere. They arrived before now (completed action) → congiuntivo passato: siano arrivati. "Bene" agrees in gender... wait: "bene" is an adverb, no agreement. "Arrivati" is masc. plur. (their = i ragazzi implied).',
        optionExplanations: {
          a: '"Arrivino" = congiuntivo presente — implies they are arriving now or will arrive.',
          c: '"Sono arrivati" = passato prossimo indicativo — not congiuntivo.',
          d: '"Arrivassero" = congiuntivo imperfetto — for past hypothetical conditions.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congpass-05',
      question: '"Credo che Maria ___ una buona scelta." (I believe Maria made a good choice.)',
      options: [
        { value: 'a', label: 'fa' },
        { value: 'b', label: 'faccia' },
        { value: 'c', label: 'abbia fatto' },
        { value: 'd', label: 'ha fatto' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Abbia fatto" — congiuntivo passato for past action.',
        incorrect: 'The correct answer is "abbia fatto".',
        explanation:
          '"Credere che" → congiuntivo. The choice was made in the past → congiuntivo passato: abbia fatto (fare → fatto, irregular participle; avere auxiliary). "Ha fatto" would be indicative (statement of fact).',
        optionExplanations: {
          a: '"Fa" = present indicative — not triggered by credere che.',
          b: '"Faccia" = congiuntivo presente — for present/simultaneous actions, not past.',
          d: '"Ha fatto" = passato prossimo indicativo — cannot be used after credere che.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-congpass-06',
      verb: 'venire (essere) — congiuntivo passato, male speaker',
      tense: 'Congiuntivo Passato',
      pronouns: ['io', 'tu', 'lui', 'noi', 'voi', 'loro'],
      answers: ['sia venuto', 'sia venuto', 'sia venuto', 'siamo venuti', 'siate venuti', 'siano venuti'],
      feedback: {
        explanation:
          '"Venire" uses essere. Congiuntivo passato = congiuntivo presente of essere + venuto. Essere congiuntivo: sia/sia/sia/siamo/siate/siano. + venuto (masc. sing.) or venuti (masc. plur. for noi/voi/loro).',
      },
    },
    {
      type: 'match',
      id: 'b1-congpass-07',
      instruction: 'Match each main clause with the correct congiuntivo type (presente vs passato).',
      pairs: [
        { left: 'Penso che Marco sia stanco (now).', right: 'Congiuntivo presente' },
        { left: 'Penso che Marco si sia stancato (yesterday).', right: 'Congiuntivo passato' },
        { left: 'È possibile che piova domani.', right: 'Congiuntivo presente' },
        { left: 'È possibile che abbia già piovuto.', right: 'Congiuntivo passato' },
        { left: 'Spero che stia bene.', right: 'Congiuntivo presente' },
      ],
      feedback: {
        explanation:
          'Rule: if the dependent action is simultaneous with or future to the main clause → congiuntivo presente. If the dependent action happened BEFORE the main clause moment → congiuntivo passato. "Si sia stancato" / "abbia piovuto" = completed before now.',
      },
    },
    {
      type: 'reorder',
      id: 'b1-congpass-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['abbiano', 'che', 'È', 'loro', 'già', 'strano', 'risposto'],
      answer: ['È', 'strano', 'che', 'loro', 'non', 'abbiano', 'ancora', 'risposto'],
      feedback: {
        correct: 'Perfetto! "È strano che loro non abbiano ancora risposto."',
        explanation:
          '"È strano che" = impersonal expression of surprise → congiuntivo. "Abbiano risposto" = congiuntivo passato of rispondere (avere). "Ancora" / "non ancora" = not yet. Note the scrambled words included "già" which becomes "ancora" in the negative.',
      },
    },
    {
      type: 'translation',
      id: 'b1-congpass-09',
      source: 'I\'m surprised that she hasn\'t called yet — maybe she forgot.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Sono sorpreso/a che non abbia ancora chiamato — forse ha dimenticato.',
        'Mi sorprende che non abbia ancora chiamato — forse ha dimenticato.',
        'Sono sorpreso/a che non abbia ancora telefonato — forse ha dimenticato.',
      ],
      feedback: {
        explanation:
          '"I\'m surprised that" = sono sorpreso/a che → congiuntivo. "Hasn\'t called" = non abbia ancora chiamato (congiuntivo passato, avere). "Maybe she forgot" = forse ha dimenticato (indicative — forse allows indicative for probability).',
        modelAnswer: 'Sono sorpreso/a che non abbia ancora chiamato — forse ha dimenticato.',
      },
    },
  ],
};
