import type { Lesson } from '../types';

export const connettivisCoesione: Lesson = {
  slug: 'connettivi-coesione',
  title: 'Connettivi e Coesione Testuale',
  level: 'b1',
  order: 15,
  explanation: {
    text: `## Connettivi e Coesione Testuale (Discourse Connectives)

**Connettivi** are words and phrases that link ideas, sentences, and paragraphs. Mastering them is key to writing and speaking fluently at B1+ level.

### Addition

*inoltre* (furthermore, moreover), *anche* (also), *pure* (also, even), *altresì* (likewise, formal), *in aggiunta* (in addition), *allo stesso modo* (similarly), *per di più* (what's more)

*Il libro è lungo. **Inoltre**, è difficile.* (The book is long. Furthermore, it's difficult.)

### Contrast / Concession

*però* (but, however), *tuttavia* (however, nevertheless), *nonostante (che)* (despite, although), *benché* (although — + congiuntivo), *sebbene* (although — + congiuntivo), *eppure* (yet, and yet), *al contrario* (on the contrary), *invece* (instead, on the other hand), *mentre* (while, whereas), *d'altra parte* (on the other hand)

### Cause / Reason

*perché* (because), *poiché/siccome* (since, because), *dato che* (given that), *visto che* (since, given that), *per via di* (because of), *a causa di* (due to, because of — negative connotation), *grazie a* (thanks to — positive connotation)

### Consequence / Result

*quindi* (so, therefore), *perciò* (therefore), *dunque* (therefore, well then), *così* (so, thus), *di conseguenza* (consequently), *per questo* (for this reason), *pertanto* (therefore, formal)

### Purpose

*per* (in order to + infinitive), *affinché* (so that + congiuntivo), *perché* (so that + congiuntivo)

### Time

*quando* (when), *mentre* (while), *dopo che* (after), *prima che* (before + congiuntivo), *non appena / appena* (as soon as), *finché* (until/as long as), *ogni volta che* (every time that)

### Condition

*se* (if), *a meno che* (unless + congiuntivo), *purché* (provided that + congiuntivo), *nel caso in cui* (in the event that + congiuntivo)

### Example / Illustration

*per esempio / ad esempio* (for example), *come* (such as, like), *in particolare* (in particular), *tra cui* (among which)

### Summary / Conclusion

*insomma* (in short, basically), *in conclusione* (in conclusion), *in sintesi* (in summary), *alla fine* (in the end), *tutto sommato* (all things considered)`,
    tables: [
      {
        caption: 'Key Connectives by Function',
        headers: ['Function', 'Main connectives'],
        rows: [
          ['Addition', 'inoltre, anche, pure, per di più'],
          ['Contrast', 'però, tuttavia, nonostante, eppure, invece'],
          ['Cause', 'perché, poiché, dato che, visto che, a causa di'],
          ['Consequence', 'quindi, perciò, dunque, di conseguenza'],
          ['Condition', 'se, a meno che, purché, nel caso in cui'],
          ['Concession', 'benché, sebbene, nonostante (+ congiuntivo)'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-conn-01',
      prompt: 'Non ho studiato, ___ ho fallito l\'esame. (I didn\'t study, therefore I failed the exam.)',
      answer: 'quindi',
      hint: '"Therefore / so" → quindi, perciò, dunque',
      feedback: {
        correct: 'Esatto! "Quindi" — consequence/result connective.',
        incorrect: 'The correct answer is "quindi".',
        explanation:
          '"Quindi" = therefore / so (consequence). The second clause is the result of the first. Other options: perciò, dunque, per questo (all mean "therefore"). "Quindi" is the most common in spoken Italian.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-conn-02',
      prompt: 'Studia molto, ___ non ottiene buoni risultati. (He studies a lot, yet he doesn\'t get good results.)',
      answer: 'eppure',
      hint: '"Yet / and yet" = eppure — contrast/unexpected result.',
      feedback: {
        correct: 'Perfetto! "Eppure" — "yet/and yet" expresses unexpected contrast.',
        incorrect: 'The correct answer is "eppure".',
        explanation:
          '"Eppure" = yet, and yet — expresses a contrast where the second clause is unexpected given the first. "Studia molto, eppure…" = he studies a lot, yet… Compare: "però/tuttavia" = however (less emphatic surprise).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-conn-03',
      prompt: 'Non uscirò ___ smetta di piovere. (I won\'t go out unless it stops raining.)',
      answer: 'a meno che non',
      hint: '"Unless" = a meno che non + congiuntivo.',
      feedback: {
        correct: 'Bravo/a! "A meno che non smetta" — unless + congiuntivo.',
        incorrect: 'The correct answer is "a meno che non".',
        explanation:
          '"A meno che" = unless. Always followed by "non" + congiuntivo: a meno che non smetta (congiuntivo presente of smettere). Note: the "non" after "a meno che" is NOT a real negation — it\'s expletive (grammatically required but not meaning "not").',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-conn-04',
      question: 'Choose the correct connective: "___ si senta stanca, continua a lavorare." (Despite feeling tired, she keeps working.)',
      options: [
        { value: 'a', label: 'Perché' },
        { value: 'b', label: 'Nonostante' },
        { value: 'c', label: 'Quindi' },
        { value: 'd', label: 'Dato che' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Nonostante si senta stanca" — nonostante + congiuntivo for concession.',
        incorrect: 'The correct answer is "Nonostante".',
        explanation:
          '"Nonostante" (despite/although) is a concessive connective requiring the congiuntivo: nonostante si senta. Alternative: "Sebbene si senta," "benché si senta." "Anche se si sente" (even though = indicativo) is also possible.',
        optionExplanations: {
          a: '"Perché" = because — causal, not concessive.',
          c: '"Quindi" = therefore — consequence.',
          d: '"Dato che" = given that/since — causal.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-conn-05',
      question: '"Non posso venire ___ ho un impegno." (I can\'t come since/because I have an engagement.)',
      options: [
        { value: 'a', label: 'siccome' },
        { value: 'b', label: 'tuttavia' },
        { value: 'c', label: 'affinché' },
        { value: 'd', label: 'purché' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Siccome" — causal connective (since/because).',
        incorrect: 'The correct answer is "siccome".',
        explanation:
          '"Siccome" = since/because (causal). Unlike "perché," "siccome" introduces the CAUSE at the beginning of the sentence: "Siccome ho un impegno, non posso venire." Here it also works mid-sentence after the main clause with "perché."',
        optionExplanations: {
          b: '"Tuttavia" = however — contrast.',
          c: '"Affinché" = so that (purpose + congiuntivo).',
          d: '"Purché" = provided that (condition + congiuntivo).',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-conn-06',
      verb: 'Connective identification',
      tense: 'Identify the function of each connective',
      pronouns: [
        'Studia molto; tuttavia, non migliora.',
        'Ho mangiato poco, quindi ho fame.',
        'L\'ha fatto nonostante fosse stanco.',
        'Chiama prima che parta.',
        'Vengo purché tu sia lì.',
        'Dato che piove, resto a casa.',
      ],
      answers: [
        'contrast',
        'consequence',
        'concession',
        'time/before (+ congiuntivo)',
        'condition (+ congiuntivo)',
        'cause/reason',
      ],
      feedback: {
        explanation:
          '"Tuttavia" = contrast/however. "Quindi" = consequence/therefore. "Nonostante" = concession (despite). "Prima che" = before (time, + congiuntivo). "Purché" = condition provided that (+ congiuntivo). "Dato che" = cause/since.',
      },
    },
    {
      type: 'match',
      id: 'b1-conn-07',
      instruction: 'Match each Italian connective with its English equivalent.',
      pairs: [
        { left: 'tuttavia', right: 'however / nevertheless' },
        { left: 'dunque', right: 'therefore / well then' },
        { left: 'poiché', right: 'since / because' },
        { left: 'eppure', right: 'yet / and yet' },
        { left: 'affinché', right: 'so that (+ congiuntivo)' },
      ],
      feedback: {
        explanation:
          '"Tuttavia" = however (contrast). "Dunque" = therefore (consequence) — also used as "well" at start of response. "Poiché" = since/because (causal, formal). "Eppure" = yet (unexpected contrast, more emphatic than però). "Affinché" = so that / in order that (purpose + congiuntivo).',
      },
    },
    {
      type: 'reorder',
      id: 'b1-conn-08',
      instruction: 'Arrange the words to form a cohesive Italian sentence.',
      words: ['molto', 'Nonostante', 'non', 'lavorasse', 'abbastanza', 'guadagnava'],
      answer: ['Nonostante', 'lavorasse', 'molto', 'non', 'guadagnava', 'abbastanza'],
      feedback: {
        correct: 'Perfetto! "Nonostante lavorasse molto, non guadagnava abbastanza."',
        explanation:
          '"Nonostante" + congiuntivo imperfetto (lavorasse — past main clause context, concurrent). Main clause: non guadagnava abbastanza (imperfetto). "Lavorasse molto" = was working a lot. "Non guadagnava abbastanza" = wasn\'t earning enough.',
      },
    },
    {
      type: 'translation',
      id: 'b1-conn-09',
      source: 'Although it was raining, we decided to go out. We were cold; however, it was worth it. Since there was a beautiful sunset, we stayed longer.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Nonostante piovesse, abbiamo deciso di uscire. Avevamo freddo; tuttavia, ne valeva la pena. Dato che c\'era un bel tramonto, siamo rimasti più a lungo.',
        'Sebbene piovesse, abbiamo deciso di uscire. Faceva freddo; però, ne valeva la pena. Visto che c\'era un bel tramonto, siamo rimasti più a lungo.',
      ],
      feedback: {
        explanation:
          '"Although raining" = nonostante/sebbene piovesse (congiuntivo imperfetto, past context). "However" = tuttavia/però. "It was worth it" = ne valeva la pena (valere la pena). "Since there was" = dato che/visto che c\'era (indicativo). Three different connective types in one paragraph.',
        modelAnswer: 'Nonostante piovesse, abbiamo deciso di uscire. Avevamo freddo; tuttavia, ne valeva la pena. Dato che c\'era un bel tramonto, siamo rimasti più a lungo.',
      },
    },
  ],
};
