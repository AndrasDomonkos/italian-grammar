import type { Lesson } from '../types';

export const congiuntivoImperfetto: Lesson = {
  slug: 'congiuntivo-imperfetto',
  title: 'Congiuntivo Imperfetto',
  level: 'b1',
  order: 4,
  explanation: {
    text: `## Il Congiuntivo Imperfetto (Imperfect Subjunctive)

The **congiuntivo imperfetto** is used when the main clause is in the **past** or **conditional**, and the action in the dependent clause is simultaneous with or subsequent to the main clause.

### When to Use

**Concordanza dei tempi (Sequence of Tenses):**

| Main clause tense | Dependent action | Congiuntivo |
|-------------------|------------------|-------------|
| Present/Future | Simultaneous/future | Presente |
| Present/Future | Completed | Passato |
| Past/Conditional | Simultaneous | Imperfetto |
| Past/Conditional | Prior/completed | Trapassato |

*Penso che sia stanco.* → present main + simultaneous → congiuntivo presente
*Pensavo che fosse stanco.* → past main + simultaneous → congiuntivo imperfetto
*Vorrei che venisse.* → conditional main + action → congiuntivo imperfetto

### Regular Formation

Remove the infinitive ending and add:

| Person | -are | -ere | -ire |
|--------|------|------|------|
| io | -assi | -essi | -issi |
| tu | -assi | -essi | -issi |
| lui/lei | -asse | -esse | -isse |
| noi | -assimo | -essimo | -issimo |
| voi | -aste | -este | -iste |
| loro | -assero | -essero | -issero |

### Irregular Forms

| Verb | io | lui/lei | loro |
|------|----|---------|------|
| essere | fossi | fosse | fossero |
| avere | avessi | avesse | avessero |
| fare | facessi | facesse | facessero |
| dire | dicessi | dicesse | dicessero |
| stare | stessi | stesse | stessero |
| bere | bevessi | bevesse | bevessero |

### Conditional Sentences (if-clauses)

The congiuntivo imperfetto is the standard form in hypothetical if-clauses:
*Se avessi tempo, viaggerei.* (If I had time, I would travel.)
*Se fosse qui, sarei felice.* (If he were here, I'd be happy.)`,
    tables: [
      {
        caption: 'Congiuntivo Imperfetto — parlare / credere / dormire',
        headers: ['Person', 'parlare', 'credere', 'dormire'],
        rows: [
          ['io', 'parlassi', 'credessi', 'dormissi'],
          ['tu', 'parlassi', 'credessi', 'dormissi'],
          ['lui/lei', 'parlasse', 'credesse', 'dormisse'],
          ['noi', 'parlassimo', 'credessimo', 'dormissimo'],
          ['voi', 'parlaste', 'credeste', 'dormiste'],
          ['loro', 'parlassero', 'credessero', 'dormissero'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "se studiassi", translation: "if I studied", example: "Se studiassi di piu, passerei l'esame.", exampleTranslation: "If I studied more, I would pass the exam." },
    { word: "vorrei che tu venissi", translation: "I would like you to come", example: "Vorrei che tu venissi alla mia festa.", exampleTranslation: "I would like you to come to my party." },
    { word: "magari potessi", translation: "if only I could", example: "Magari potessi viaggiare di piu!", exampleTranslation: "If only I could travel more!" },
    { word: "come se fosse", translation: "as if it were", example: "Parla come se fosse il capo.", exampleTranslation: "He talks as if he were the boss." },
    { word: "sembrava che piovesse", translation: "it seemed that it was raining", example: "Sembrava che piovesse fuori.", exampleTranslation: "It seemed that it was raining outside." },
    { word: "speravo che arrivasse", translation: "I hoped he would arrive", example: "Speravo che arrivasse in tempo.", exampleTranslation: "I hoped he would arrive in time." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-congimp-01',
      prompt: 'Pensavo che Marco ___ (essere) a casa. (I thought Marco was at home.)',
      answer: 'fosse',
      hint: 'Past main (pensavo) + simultaneous action → congiuntivo imperfetto; essere → fosse.',
      feedback: {
        correct: 'Esatto! "Pensavo che fosse" — imperfetto congiuntivo after past main clause.',
        incorrect: 'The correct answer is "fosse".',
        explanation:
          'Past main clause (pensavo = imperfetto) + simultaneous dependent action → congiuntivo imperfetto. "Essere" → irregular: fosse (lui/lei form). Contrast: "Penso che sia" (present main → congiuntivo presente).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congimp-02',
      prompt: 'Vorrei che tu ___ (venire) con me. (I would like you to come with me.)',
      answer: 'venissi',
      hint: 'Conditional main (vorrei) + congiuntivo imperfetto for the dependent action.',
      feedback: {
        correct: 'Perfetto! "Vorrei che tu venissi" — congiuntivo imperfetto after conditional.',
        incorrect: 'The correct answer is "venissi".',
        explanation:
          '"Vorrei" (conditional) → congiuntivo imperfetto in dependent clause. "Venire" → venissi (io/tu), venisse (lui/lei), venissimo (noi), veniste (voi), venissero (loro).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congimp-03',
      prompt: 'Se ___ (io, avere) più soldi, comprerei una casa. (If I had more money, I would buy a house.)',
      answer: 'avessi',
      hint: 'Hypothetical if-clause → se + congiuntivo imperfetto.',
      feedback: {
        correct: 'Bravo/a! "Se avessi più soldi" — congiuntivo imperfetto in the if-clause.',
        incorrect: 'The correct answer is "avessi".',
        explanation:
          '"Avere" → congiuntivo imperfetto: avessi (io/tu), avesse (lui/lei), avessimo (noi), aveste (voi), avessero (loro). "Se + avessi" = if I had. The result clause "comprerei" = conditional.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congimp-04',
      question: '"Volevano che noi ___ prima delle otto." (They wanted us to arrive before eight.)',
      options: [
        { value: 'a', label: 'arriviamo' },
        { value: 'b', label: 'arrivassimo' },
        { value: 'c', label: 'arrivavamo' },
        { value: 'd', label: 'arriviamo' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Arrivassimo" — congiuntivo imperfetto, noi, after past main clause.',
        incorrect: 'The correct answer is "arrivassimo".',
        explanation:
          'Past main clause (volevano = imperfetto) + simultaneous action → congiuntivo imperfetto. "Arrivare" → arrivassimo (noi). Endings: -assimo for -are verbs.',
        optionExplanations: {
          a: '"Arriviamo" = present indicative (also congiuntivo presente noi, but wrong tense sequence).',
          c: '"Arrivavamo" = imperfetto indicativo — not the congiuntivo.',
          d: 'Same as (a).',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congimp-05',
      question: '"Se ___ (lui, essere) più puntuale, arriverebbe in orario."',
      options: [
        { value: 'a', label: 'è' },
        { value: 'b', label: 'sia' },
        { value: 'c', label: 'fosse' },
        { value: 'd', label: 'sarà' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Se fosse più puntuale" — congiuntivo imperfetto in the hypothetical if-clause.',
        incorrect: 'The correct answer is "fosse".',
        explanation:
          'Hypothetical (unreal) present condition: se + congiuntivo imperfetto → conditional result. "Essere" → fosse (lui/lei). "Se fosse puntuale, arriverebbe" = if he were punctual, he would arrive.',
        optionExplanations: {
          a: '"Se è" = real/open condition (indicativo) — implies it might actually happen.',
          b: '"Sia" = congiuntivo presente — used after "benché/che," not in "se" hypothetical clauses.',
          d: '"Se sarà" — future in "se" clauses is non-standard in Italian.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-congimp-06',
      verb: 'essere — congiuntivo imperfetto',
      tense: 'Congiuntivo Imperfetto',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['fossi', 'fossi', 'fosse', 'fossimo', 'foste', 'fossero'],
      feedback: {
        explanation:
          '"Essere" is highly irregular in the congiuntivo imperfetto: fossi/fossi/fosse/fossimo/foste/fossero. These forms are essential — they appear in all conditional sentences with "se" (se fossi, se fosse) and after past main clauses (pensavo che fosse).',
      },
    },
    {
      type: 'match',
      id: 'b1-congimp-07',
      instruction: 'Match each sentence with the correct explanation of why congiuntivo imperfetto is used.',
      pairs: [
        { left: 'Pensavo che fosse un errore.', right: 'Past main clause → imperfetto' },
        { left: 'Vorrei che tu capisse.', right: 'Conditional main → imperfetto' },
        { left: 'Se avessi tempo, uscirei.', right: 'Hypothetical if-clause' },
        { left: 'Era necessario che partissero.', right: 'Past impersonal → imperfetto' },
        { left: 'Sembrava che piovesse.', right: 'Past "seemed" → imperfetto' },
      ],
      feedback: {
        explanation:
          'Congiuntivo imperfetto triggers: past main (pensavo, era, sembrava) + simultaneous dependent; conditional main (vorrei, dovrei, potrei); hypothetical "se" clauses. The key is the main clause tense — past or conditional → imperfetto in the dependent.',
      },
    },
    {
      type: 'reorder',
      id: 'b1-congimp-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['potessi', 'Se', 'viaggerei', 'molto', 'di', 'più'],
      answer: ['Se', 'potessi', 'viaggerei', 'di', 'più'],
      feedback: {
        correct: 'Perfetto! "Se potessi, viaggerei di più."',
        explanation:
          '"Se potessi" = if I could (congiuntivo imperfetto of potere: potessi). "Viaggerei" = conditional of viaggiare (I would travel). "Di più" = more (not "molto di più" but "di più" is enough). Hypothetical: the condition is unreal.',
      },
    },
    {
      type: 'translation',
      id: 'b1-congimp-09',
      source: 'If I were you, I would study more. He wanted us to be quieter.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Se fossi in te, studierei di più. Voleva che fossimo più silenziosi.',
        'Se fossi al tuo posto, studierei di più. Voleva che fossimo più tranquilli.',
      ],
      feedback: {
        explanation:
          '"If I were you" = se fossi in te / se fossi al tuo posto (congiuntivo imperfetto of essere). "I would study more" = studierei di più (conditional). "He wanted us to be" = voleva che fossimo (past main: voleva → congiuntivo imperfetto: fossimo, noi). "Quieter" = più silenziosi/tranquilli.',
        modelAnswer: 'Se fossi in te, studierei di più. Voleva che fossimo più silenziosi.',
      },
    },
  ],
};
