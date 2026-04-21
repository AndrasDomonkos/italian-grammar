import type { Lesson } from '../types';

export const congiuntivoPresente: Lesson = {
  slug: 'congiuntivo-presente',
  title: 'Congiuntivo Presente',
  level: 'b1',
  order: 1,
  explanation: {
    text: `## Il Congiuntivo Presente (Present Subjunctive)

The **congiuntivo** (subjunctive) is a mood used in dependent clauses to express doubt, opinion, emotion, desire, possibility, and necessity. It is triggered by specific main clause expressions.

### When to Use

The congiuntivo is required after:
- **Verbs of opinion/doubt:** *pensare che, credere che, supporre che, dubitare che*
- **Verbs of desire/will:** *volere che, preferire che, sperare che, desiderare che*
- **Verbs of emotion:** *essere contento che, avere paura che, dispiacere che*
- **Impersonal expressions:** *è importante che, è necessario che, è possibile che, bisogna che, sembra che, pare che*
- **Certain conjunctions:** *affinché, benché/sebbene (although), prima che, a meno che, purché*

**Key rule:** the subject of the main clause must **differ** from the subject of the dependent clause. If same subject → use infinitive.
*Voglio andare.* (I want to go — same subject, infinitive)
*Voglio che tu vada.* (I want you to go — different subjects, congiuntivo)

### Regular Formation

| Person | -are (parlare) | -ere (scrivere) | -ire (dormire) | -ire (finire) |
|--------|----------------|-----------------|----------------|----------------|
| io | parli | scriva | dorma | finisca |
| tu | parli | scriva | dorma | finisca |
| lui/lei | parli | scriva | dorma | finisca |
| noi | parliamo | scriviamo | dormiamo | finiamo |
| voi | parliate | scriviate | dormiate | finiate |
| loro | parlino | scrivano | dormano | finiscano |

Note: io/tu/lui share the same form — context makes the subject clear.

### Key Irregular Congiuntivi

| Verb | io/tu/lui | noi | voi | loro |
|------|-----------|-----|-----|------|
| essere | sia | siamo | siate | siano |
| avere | abbia | abbiamo | abbiate | abbiano |
| andare | vada | andiamo | andiate | vadano |
| fare | faccia | facciamo | facciate | facciano |
| venire | venga | veniamo | veniate | vengano |
| dire | dica | diciamo | diciate | dicano |
| potere | possa | possiamo | possiate | possano |
| volere | voglia | vogliamo | vogliate | vogliano |`,
    tables: [
      {
        caption: 'Congiuntivo Presente — essere / avere',
        headers: ['Person', 'essere', 'avere'],
        rows: [
          ['io', 'sia', 'abbia'],
          ['tu', 'sia', 'abbia'],
          ['lui/lei', 'sia', 'abbia'],
          ['noi', 'siamo', 'abbiamo'],
          ['voi', 'siate', 'abbiate'],
          ['loro', 'siano', 'abbiano'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "penso che sia", translation: "I think it is", example: "Penso che questo libro sia molto utile.", exampleTranslation: "I think this book is very useful." },
    { word: "credo che abbia", translation: "I believe he/she has", example: "Credo che Luca abbia ragione.", exampleTranslation: "I believe Luca is right." },
    { word: "spero che venga", translation: "I hope he/she comes", example: "Spero che venga anche Anna alla festa.", exampleTranslation: "I hope Anna comes to the party too." },
    { word: "voglio che tu faccia", translation: "I want you to do", example: "Voglio che tu faccia del tuo meglio.", exampleTranslation: "I want you to do your best." },
    { word: "dubito che sia vero", translation: "I doubt it is true", example: "Dubito che sia vero quello che dice.", exampleTranslation: "I doubt that what he says is true." },
    { word: "bisogna che", translation: "it is necessary that", example: "Bisogna che tu studi di piu.", exampleTranslation: "It is necessary that you study more." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-congp-01',
      prompt: 'Penso che Marco ___ (essere) a casa. (I think Marco is at home.)',
      answer: 'sia',
      hint: 'pensare che → congiuntivo; essere → sia',
      feedback: {
        correct: 'Esatto! "Penso che Marco sia a casa" — sia is the congiuntivo of essere.',
        incorrect: 'The correct answer is "sia".',
        explanation:
          '"Pensare che" triggers the congiuntivo. "Essere" → congiuntivo: sia (for io/tu/lui/lei). The subject of the main clause (io) differs from the dependent clause (Marco) → congiuntivo required.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congp-02',
      prompt: 'È importante che voi ___ (finire) i compiti. (It\'s important that you finish your homework.)',
      answer: 'finiate',
      hint: 'finire (isc- type) → congiuntivo voi: finiate',
      feedback: {
        correct: 'Perfetto! "Finiate" — congiuntivo of finire, voi form.',
        incorrect: 'The correct answer is "finiate".',
        explanation:
          '"È importante che" is an impersonal expression → congiuntivo. "Finire" (-isc- type): congiuntivo voi = finiate. Note: finisca (io/tu/lui), finiamo (noi), finiate (voi), finiscano (loro).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-congp-03',
      prompt: 'Voglio che tu ___ (venire) alla mia festa. (I want you to come to my party.)',
      answer: 'venga',
      hint: 'venire is irregular: venga (io/tu/lui/lei)',
      feedback: {
        correct: 'Bravo/a! "Venga" — irregular congiuntivo of venire.',
        incorrect: 'The correct answer is "venga".',
        explanation:
          '"Volere che" + different subject → congiuntivo. "Venire" → irregular congiuntivo: venga (io/tu/lui/lei), veniamo (noi), veniate (voi), vengano (loro). The stem veng- comes from the present indicative (vengo).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congp-04',
      question: '"Benché ___ stanco, continua a lavorare." (Although he is tired, he keeps working.)',
      options: [
        { value: 'a', label: 'è' },
        { value: 'b', label: 'sia' },
        { value: 'c', label: 'sarà' },
        { value: 'd', label: 'era' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Benché sia" — benché always takes the congiuntivo.',
        incorrect: 'The correct answer is "sia".',
        explanation:
          '"Benché" (although) is a concessive conjunction that always requires the congiuntivo: benché sia, benché abbia, benché faccia. "È" (indicative) would be used with "anche se" (even though): anche se è stanco.',
        optionExplanations: {
          a: '"È" = indicative — use with "anche se," not "benché."',
          c: '"Sarà" = futuro — not triggered here.',
          d: '"Era" = imperfetto — past state, wrong tense.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-congp-05',
      question: 'Which sentence DOES NOT require the congiuntivo?',
      options: [
        { value: 'a', label: 'Penso che Maria stia bene.' },
        { value: 'b', label: 'So che Maria sta bene.' },
        { value: 'c', label: 'È possibile che Maria stia bene.' },
        { value: 'd', label: 'Ho paura che Maria non stia bene.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "So che" uses the indicative — certainty, not doubt.',
        incorrect: 'The correct answer is (b) "So che Maria sta bene."',
        explanation:
          '"Sapere che" expresses certainty → indicative (sta). Congiuntivo is for doubt, opinion, emotion. "Pensare che" (opinion), "è possibile che" (possibility), "avere paura che" (fear) all require the congiuntivo.',
        optionExplanations: {
          a: '"Penso che" = opinion → congiuntivo (stia).',
          c: '"È possibile che" = possibility → congiuntivo (stia).',
          d: '"Ho paura che" = emotion/fear → congiuntivo (stia).',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-congp-06',
      verb: 'andare — congiuntivo presente',
      tense: 'Congiuntivo Presente',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['vada', 'vada', 'vada', 'andiamo', 'andiate', 'vadano'],
      feedback: {
        explanation:
          '"Andare" → irregular congiuntivo stem: vad- (from vado). Io/tu/lui share the same form: vada. Noi = andiamo (same as present indicative). Voi = andiate. Loro = vadano. Pattern: io/tu/lui same, noi/voi/loro different stem.',
      },
    },
    {
      type: 'match',
      id: 'b1-congp-07',
      instruction: 'Match each main clause trigger with the correct congiuntivo use.',
      pairs: [
        { left: 'Penso che...', right: 'opinion/belief' },
        { left: 'Bisogna che...', right: 'necessity (impersonal)' },
        { left: 'Ho paura che...', right: 'emotion (fear)' },
        { left: 'Benché...', right: 'concession (although)' },
        { left: 'Affinché...', right: 'purpose (so that)' },
      ],
      feedback: {
        explanation:
          'Five trigger categories: pensare/credere che (opinion), bisogna/è necessario che (necessity), avere paura/essere contento che (emotion), benché/sebbene/nonostante (concession), affinché/perché (purpose). All require the congiuntivo in the dependent clause.',
      },
    },
    {
      type: 'reorder',
      id: 'b1-congp-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['venga', 'che', 'È', 'possibile', 'domani', 'Marco'],
      answer: ['È', 'possibile', 'che', 'Marco', 'venga', 'domani'],
      feedback: {
        correct: 'Perfetto! "È possibile che Marco venga domani."',
        explanation:
          '"È possibile che" = impersonal expression → congiuntivo. "Venga" = congiuntivo of venire (lui/lei: venga). "Domani" = tomorrow (time at end). Word order: impersonal expression + che + subject + congiuntivo verb.',
      },
    },
    {
      type: 'translation',
      id: 'b1-congp-09',
      source: 'I hope that my friends can come to the party, although it might rain.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Spero che i miei amici possano venire alla festa, benché possa piovere.',
        'Spero che i miei amici possano venire alla festa, anche se potrebbe piovere.',
        'Spero che i miei amici vengano alla festa, benché possa piovere.',
      ],
      feedback: {
        explanation:
          '"I hope that" = spero che → congiuntivo. "Can come" = possano venire (potere congiuntivo: possano). "Although" = benché → congiuntivo. "It might rain" = possa piovere (potere congiuntivo impersonal). Two congiuntivo clauses.',
        modelAnswer: 'Spero che i miei amici possano venire alla festa, benché possa piovere.',
      },
    },
  ],
};
