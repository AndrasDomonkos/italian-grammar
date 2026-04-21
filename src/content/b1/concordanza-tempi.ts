import type { Lesson } from '../types';

export const concordanzaTempi: Lesson = {
  slug: 'concordanza-tempi',
  title: 'Concordanza dei Tempi',
  level: 'b1',
  order: 11,
  explanation: {
    text: `## La Concordanza dei Tempi (Sequence of Tenses)

The **concordanza dei tempi** governs which tense/mood to use in a dependent clause based on the tense of the main clause. It applies to congiuntivo, infinitive, and conditional clauses.

### With the Congiuntivo

The main clause tense determines the congiuntivo tense:

| Main clause | Dependent action: SIMULTANEOUS | Dependent action: PRIOR |
|-------------|-------------------------------|------------------------|
| Present / Future | Congiuntivo presente | Congiuntivo passato |
| Past / Conditional | Congiuntivo imperfetto | Congiuntivo trapassato |

**Examples:**
*Penso che **sia** stanco.* (I think he is tired — present, simultaneous → cong. presente)
*Penso che **sia stato** stanco.* (I think he was tired — present, prior → cong. passato)
*Pensavo che **fosse** stanco.* (I thought he was tired — past, simultaneous → cong. imperfetto)
*Pensavo che **fosse stato** stanco.* (I thought he had been tired — past, prior → cong. trapassato)

### With Infinitives in Dependent Clauses

After verbs like *volere, sperare, credere* when **same subject**:

| Tense relationship | Construction |
|--------------------|--------------|
| Simultaneous / future | di + presente infinito |
| Prior / completed | di + essere/avere + participio (perfect infinitive) |

*Spero **di andare**.* (I hope to go — simultaneous)
*Credo **di aver fatto** un errore.* (I believe I made a mistake — prior)
*Sono contento **di averlo fatto**.* (I'm happy to have done it — prior)

### After "Dopo" + Infinitive

*Dopo + perfect infinitive* (avere/essere + participio):
*Dopo **aver mangiato**, sono uscito.* (After eating, I went out.)
*Dopo **essere arrivata**, si è riposata.* (After arriving, she rested.)

### Prima di + Infinitive

*Prima di + presente infinitive:*
*Prima **di uscire**, chiudi la porta.* (Before going out, close the door.)`,
    tables: [
      {
        caption: 'Concordanza dei Tempi — Quick Reference',
        headers: ['Main clause', 'Dependent: simultaneous', 'Dependent: prior'],
        rows: [
          ['Penso che...', 'sia / abbia (cong. pres.)', 'sia stato / abbia avuto (cong. pass.)'],
          ['Pensavo che...', 'fosse / avesse (cong. imp.)', 'fosse stato / avesse avuto (cong. trap.)'],
          ['Spero di...', 'andare (inf. pres.)', 'essere andato / aver fatto (inf. perf.)'],
          ['Dopo...', '— (not used)', 'aver fatto / essere andato (inf. perf.)'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-conc-01',
      prompt: 'Credo ___ fatto un errore. (I believe I made a mistake — same subject, prior action.)',
      answer: 'di aver',
      hint: 'Same subject (io) + prior completed action → di + perfect infinitive (aver/essere + participio).',
      feedback: {
        correct: 'Esatto! "Credo di aver fatto un errore" — di + perfect infinitive for prior action.',
        incorrect: 'The correct answer is "di aver".',
        explanation:
          'Same subject (io) → di + infinitive. Prior action (the mistake happened before) → perfect infinitive: di aver fatto. "Avere" perfect infinitive: aver + participio. If the same subject uses essere: di essere andato/a.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-conc-02',
      prompt: 'Dopo ___ (mangiare), sono uscito. (After eating, I went out.)',
      answer: 'aver mangiato',
      hint: 'Dopo + perfect infinitive (aver/essere + participio).',
      feedback: {
        correct: 'Perfetto! "Dopo aver mangiato" — dopo always takes the perfect infinitive.',
        incorrect: 'The correct answer is "aver mangiato".',
        explanation:
          '"Dopo + perfect infinitive" = after doing something. "Mangiare" → avere: aver mangiato. For essere verbs: dopo essere arrivato/a. The subject of the main clause must match the implicit subject of "dopo."',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-conc-03',
      prompt: 'Pensava che io ___ (già, partire) per Milano. (She thought I had already left for Milan.)',
      answer: 'fossi già partito',
      hint: 'Past main (pensava) + prior completed action → congiuntivo trapassato; partire uses essere.',
      feedback: {
        correct: 'Bravo/a! "Fossi già partito" — congiuntivo trapassato.',
        incorrect: 'The correct answer is "fossi già partito".',
        explanation:
          'Past main (pensava) + prior action → congiuntivo trapassato. "Partire" uses essere: fossi (io, cong. imp. essere) + partito (masc. sing.).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-conc-04',
      question: '"Spero ___ arrivare in tempo." (I hope to arrive on time — same subject, future)',
      options: [
        { value: 'a', label: 'che io' },
        { value: 'b', label: 'di' },
        { value: 'c', label: 'di essere' },
        { value: 'd', label: 'che' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Spero di arrivare" — same subject → di + presente infinitive.',
        incorrect: 'The correct answer is "di".',
        explanation:
          'Same subject (io in both): spero di arrivare = I hope to arrive. Use "di + presente infinitive" for simultaneous/future actions with the same subject. Use "che + congiuntivo" only when subjects differ.',
        optionExplanations: {
          a: '"Che io" would introduce a separate subject → che io arrivi (congiuntivo).',
          c: '"Di essere arrivato" = perfect infinitive — for prior completed action (I hope to have arrived).',
          d: '"Che" alone is incomplete.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-conc-05',
      question: 'Choose the correct sequence: "He said he would come." (reported speech, future → conditional)',
      options: [
        { value: 'a', label: 'Ha detto che viene.' },
        { value: 'b', label: 'Ha detto che venisse.' },
        { value: 'c', label: 'Ha detto che sarebbe venuto.' },
        { value: 'd', label: 'Ha detto che sia venuto.' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Sarebbe venuto" — futuro shifts to condizionale composto in past reported speech.',
        incorrect: 'The correct answer is "sarebbe venuto."',
        explanation:
          'In reported speech with past main clause (ha detto): futuro → condizionale composto. "Verrò" → "sarebbe venuto" (condizionale composto of venire, essere verb, masc. sing.).',
        optionExplanations: {
          a: '"Viene" = presente — no backshift (only valid with present main: dice che viene).',
          b: '"Venisse" = congiuntivo imperfetto — for simultaneous action after past main (ha detto che venisse = he said he should come).',
          d: '"Sia venuto" = congiuntivo passato — for present main + prior action.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-conc-06',
      verb: 'Choose the correct dependent clause form',
      tense: 'Main clause given → complete the dependent clause with the right tense',
      pronouns: [
        'Penso che Marco ___ (essere) stanco. [SIMULTANEOUS]',
        'Pensavo che Marco ___ (essere) stanco. [SIMULTANEOUS]',
        'Penso che Marco ___ (essere) stanco ieri. [PRIOR]',
        'Pensavo che Marco ___ (essere) stanco ieri. [PRIOR]',
        'Sono contento di ___ (finire) in tempo. [PRIOR, same subj.]',
        'Dopo ___ (arrivare, lui). [PRIOR, implicit subj.]',
      ],
      answers: [
        'sia',
        'fosse',
        'sia stato',
        'fosse stato',
        'aver finito',
        'essere arrivato',
      ],
      feedback: {
        explanation:
          'Rule: present main + simultaneous → cong. presente (sia). Past main + simultaneous → cong. imperfetto (fosse). Present main + prior → cong. passato (sia stato). Past main + prior → cong. trapassato (fosse stato). Same subject + prior → perfect infinitive (aver finito). Dopo + prior → essere/aver + participio (essere arrivato).',
      },
    },
    {
      type: 'match',
      id: 'b1-conc-07',
      instruction: 'Match each dependent clause with its correct tense label.',
      pairs: [
        { left: 'Penso che sia arrivato.', right: 'Congiuntivo passato (present main, prior)' },
        { left: 'Pensavo che fosse arrivato.', right: 'Congiuntivo trapassato (past main, prior)' },
        { left: 'Pensavo che arrivasse.', right: 'Congiuntivo imperfetto (past main, simultaneous)' },
        { left: 'Spero di arrivare.', right: 'Infinitive presente (same subject, future)' },
        { left: 'Dopo essere arrivato, ho mangiato.', right: 'Infinitive perfetto (dopo + prior)' },
      ],
      feedback: {
        explanation:
          'Four key concordanza patterns: (1) present + prior → cong. passato. (2) past + prior → cong. trapassato. (3) past + simultaneous → cong. imperfetto. (4) same subject + any tense → infinitive. (5) dopo + always perfect infinitive.',
      },
    },
    {
      type: 'reorder',
      id: 'b1-conc-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['di', 'Sono', 'contenta', 'aver', 'finalmente', 'finito'],
      answer: ['Sono', 'contenta', 'di', 'aver', 'finalmente', 'finito'],
      feedback: {
        correct: 'Perfetto! "Sono contenta di aver finalmente finito."',
        explanation:
          '"Essere contento/a di" + same subject + prior action → di + perfect infinitive: aver finito. "Finalmente" = finally, placed before the participle. "Sono contenta" = fem. speaker (contenta, not contento).',
      },
    },
    {
      type: 'translation',
      id: 'b1-conc-09',
      source: 'I think she has already left. I thought she would stay, but after thinking about it, she decided to go.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Penso che sia già partita. Pensavo che restasse, ma dopo averci pensato, ha deciso di andare.',
        'Credo che sia già partita. Pensavo che rimanesse, ma dopo averci pensato, ha deciso di partire.',
      ],
      feedback: {
        explanation:
          '"I think she has already left" = penso che sia già partita (present + prior → cong. passato, essere, fem.). "I thought she would stay" = pensavo che restasse (past + simultaneous → cong. imperfetto). "After thinking about it" = dopo averci pensato (dopo + perfect inf.). "She decided to go" = ha deciso di andare (same subject → di + inf.).',
        modelAnswer: 'Penso che sia già partita. Pensavo che restasse, ma dopo averci pensato, ha deciso di andare.',
      },
    },
  ],
};
