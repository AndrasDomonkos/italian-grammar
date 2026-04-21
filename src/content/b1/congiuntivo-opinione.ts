import type { Lesson } from '../types';

export const congiuntivoOpinione: Lesson = {
  slug: 'congiuntivo-opinione',
  title: 'Congiuntivo — Opinioni e Dubbi',
  level: 'b1',
  order: 3,
  explanation: {
    text: `## Congiuntivo per Opinioni e Dubbi

This lesson focuses on the congiuntivo in everyday contexts of expressing personal opinions, reactions, doubts, and interpersonal wishes — the most frequent uses in modern Italian.

### Verbs and Expressions + che + Congiuntivo

**Expressing opinion/belief:**
*pensare che, credere che, ritenere che, supporre che, immaginare che*

**Expressing doubt/uncertainty:**
*dubitare che, non essere sicuro che, non sapere se (+ congiuntivo/indicative)*

**Expressing desire/preference:**
*volere che, preferire che, desiderare che, sperare che, augurare che*

**Expressing emotion:**
*essere contento/felice/triste/sorpreso che, dispiacere che, avere paura che, temere che*

**Impersonal expressions:**
*è bene/male/giusto/strano/ovvio/peccato/un peccato che*

### Congiuntivo vs Indicativo After Certain Verbs

Some verbs can take either mood depending on nuance:

| Expression | With Indicativo | With Congiuntivo |
|------------|-----------------|------------------|
| sembra | It seems (certain) | It seems (less certain) |
| è vero | It's true (fact) | N/A — always indicativo |
| è chiaro | It's clear (certain) | N/A — always indicativo |
| è possibile | N/A | It's possible — always congiuntivo |

**Remember:** verbs of certainty (sapere, essere sicuro, è ovvio, è chiaro, è vero) take the **indicative**. All others with doubt/opinion/emotion → congiuntivo.

### Spero di vs Spero che

When the subject is the **same** in both clauses → **di + infinitive** (no congiuntivo):
*Spero di venire.* (I hope to come — same subject)
*Spero che tu venga.* (I hope you come — different subjects)`,
    tables: [
      {
        caption: 'Triggers: Congiuntivo vs Indicativo',
        headers: ['Congiuntivo triggers', 'Indicativo triggers'],
        rows: [
          ['pensare che', 'sapere che'],
          ['credere che', 'è ovvio che'],
          ['sperare che', 'è chiaro che'],
          ['avere paura che', 'è vero che'],
          ['è possibile che', 'è certo che'],
          ['è strano che', 'è sicuro che'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "secondo me", translation: "in my opinion", example: "Secondo me, questa soluzione e la migliore.", exampleTranslation: "In my opinion, this solution is the best." },
    { word: "a mio avviso", translation: "in my view", example: "A mio avviso bisogna cambiare strategia.", exampleTranslation: "In my view, we need to change strategy." },
    { word: "ritengo che", translation: "I consider that", example: "Ritengo che il clima stia cambiando rapidamente.", exampleTranslation: "I consider that the climate is changing rapidly." },
    { word: "sembra che", translation: "it seems that", example: "Sembra che il progetto vada bene.", exampleTranslation: "It seems that the project is going well." },
    { word: "non mi sembra che", translation: "it does not seem to me that", example: "Non mi sembra che sia una buona idea.", exampleTranslation: "It does not seem to me that it is a good idea." },
    { word: "e ovvio che", translation: "it is obvious that", example: "E ovvio che ci voglia piu tempo.", exampleTranslation: "It is obvious that more time is needed." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-congop-01',
      prompt: 'È un peccato che lui non ___ (potere) venire. (It\'s a shame he can\'t come.)',
      answer: 'possa',
      hint: 'è un peccato che → congiuntivo; potere congiuntivo = possa',
      feedback: {
        correct: 'Esatto! "È un peccato che possa" — possa is the congiuntivo of potere.',
        incorrect: 'The correct answer is "possa".',
        explanation:
          '"È un peccato che" = impersonal expression of regret → congiuntivo. "Potere" → congiuntivo: possa (io/tu/lui/lei), possiamo (noi), possiate (voi), possano (loro).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congop-02',
      prompt: 'Sono contenta che voi ___ (venire) alla cena! (I\'m happy you\'re coming to dinner!)',
      answer: 'veniate',
      feedback: {
        correct: 'Perfetto! "Veniate" — congiuntivo of venire, voi form.',
        incorrect: 'The correct answer is "veniate".',
        explanation:
          '"Essere contento/a che" = emotion → congiuntivo. "Venire" → irregular congiuntivo voi: veniate. The main clause (io) differs from dependent clause (voi) → congiuntivo required.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congop-03',
      prompt: 'Spero ___ andare in vacanza quest\'estate. (I hope to go on holiday this summer.)',
      answer: 'di',
      hint: 'Same subject (io) → sperare di + infinitive, NOT che + congiuntivo.',
      feedback: {
        correct: 'Bravo/a! "Spero di andare" — di + infinitive (same subject).',
        incorrect: 'The correct answer is "di".',
        explanation:
          'When the subject is the same in both clauses, use "di + infinitive" after sperare, volere, preferire, etc.: spero di andare (I hope to go). Use "che + congiuntivo" only when subjects differ: spero che tu vada.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congop-04',
      question: 'Which sentence correctly uses the indicativo (not congiuntivo)?',
      options: [
        { value: 'a', label: 'È ovvio che Marco sia stanco.' },
        { value: 'b', label: 'È ovvio che Marco è stanco.' },
        { value: 'c', label: 'È possibile che Marco sia stanco.' },
        { value: 'd', label: 'È strano che Marco sia stanco.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "È ovvio che" = certainty → indicativo (è, not sia).',
        incorrect: 'The correct answer is "È ovvio che Marco è stanco."',
        explanation:
          '"È ovvio che" (it\'s obvious that) expresses certainty → indicativo: "è stanco." Expressions of certainty (è ovvio, è chiaro, è vero, è certo) take the indicativo. Expressions of possibility/doubt/emotion take the congiuntivo.',
        optionExplanations: {
          a: '"È ovvio che Marco sia stanco" is technically used colloquially, but strictly grammatically "ovvio" = certainty → indicativo.',
          c: '"È possibile che" → congiuntivo (sia) — correct.',
          d: '"È strano che" → congiuntivo (sia) — correct.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congop-05',
      question: '"Temo che lui ___ la verità." (I fear he doesn\'t know the truth.)',
      options: [
        { value: 'a', label: 'non sappia' },
        { value: 'b', label: 'non sa' },
        { value: 'c', label: 'non sapere' },
        { value: 'd', label: 'non sapesse' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Temo che non sappia" — temere triggers the congiuntivo.',
        incorrect: 'The correct answer is "non sappia".',
        explanation:
          '"Temere che" (to fear that) → congiuntivo. "Sapere" → congiuntivo: sappia (io/tu/lui/lei). "Non sappia la verità" = doesn\'t know the truth.',
        optionExplanations: {
          b: '"Non sa" = indicativo — cannot follow temere che.',
          c: '"Sapere" = infinitive — not valid here.',
          d: '"Sapesse" = congiuntivo imperfetto — used when main clause is past tense.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-congop-06',
      verb: 'fare — congiuntivo presente',
      tense: 'Congiuntivo Presente',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['faccia', 'faccia', 'faccia', 'facciamo', 'facciate', 'facciano'],
      feedback: {
        explanation:
          '"Fare" → congiuntivo stem: facc- (from faccio). All forms: faccia/faccia/faccia (io/tu/lui — same form), facciamo (noi — same as present indicative), facciate (voi), facciano (loro). The io/tu/lui sharing is characteristic of the congiuntivo.',
      },
    },
    {
      type: 'match',
      id: 'b1-congop-07',
      instruction: 'Match each expression with the correct mood it triggers.',
      pairs: [
        { left: 'È vero che...', right: 'Indicativo' },
        { left: 'Ho paura che...', right: 'Congiuntivo' },
        { left: 'È certo che...', right: 'Indicativo' },
        { left: 'Preferisco che...', right: 'Congiuntivo' },
        { left: 'È chiaro che...', right: 'Indicativo' },
      ],
      feedback: {
        explanation:
          'Certainty expressions (è vero, è certo, è chiaro, è sicuro, è ovvio, so) → indicativo. Doubt/emotion/desire/possibility expressions (ho paura, preferisco, è possibile, è strano, penso, spero) → congiuntivo.',
      },
    },
    {
      type: 'reorder',
      id: 'b1-congop-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['venga', 'preferisco', 'Io', 'che', 'presto', 'tu'],
      answer: ['Io', 'preferisco', 'che', 'tu', 'venga', 'presto'],
      feedback: {
        correct: 'Perfetto! "Io preferisco che tu venga presto."',
        explanation:
          '"Preferire che" + different subject → congiuntivo. "Tu venga" = tu form of congiuntivo of venire. "Presto" = early/soon (adverb at end). Subjects: io (main) ≠ tu (dependent) → congiuntivo required.',
      },
    },
    {
      type: 'translation',
      id: 'b1-congop-09',
      source: 'I think it\'s strange that they haven\'t responded yet. I\'m afraid there\'s a problem.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Penso che sia strano che non abbiano ancora risposto. Ho paura che ci sia un problema.',
        'Trovo strano che non abbiano ancora risposto. Temo che ci sia un problema.',
        'Mi sembra strano che non abbiano ancora risposto. Ho paura che ci sia un problema.',
      ],
      feedback: {
        explanation:
          '"I think it\'s strange" = penso che sia strano (doppio congiuntivo) / trovo strano che (trovo + congiuntivo directly). "Haven\'t responded" = non abbiano ancora risposto (congiuntivo passato). "I\'m afraid" = ho paura che / temo che → congiuntivo. "There\'s a problem" = ci sia un problema (ci essere + congiuntivo: sia).',
        modelAnswer: 'Penso che sia strano che non abbiano ancora risposto. Ho paura che ci sia un problema.',
      },
    },
  ],
};
