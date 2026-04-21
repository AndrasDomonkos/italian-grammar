import type { Lesson } from '../types';

export const verbiModali: Lesson = {
  slug: 'verbi-modali',
  title: 'Verbi Modali',
  level: 'a2',
  order: 16,
  explanation: {
    text: `## Verbi Modali (Modal Verbs)

The three main Italian modal verbs are **potere** (can/may), **dovere** (must/have to), and **volere** (want to). They are always followed by an infinitive.

### Present Tense

| Person | potere | dovere | volere |
|--------|--------|--------|--------|
| io | posso | devo | voglio |
| tu | puoi | devi | vuoi |
| lui/lei | può | deve | vuole |
| noi | possiamo | dobbiamo | vogliamo |
| voi | potete | dovete | volete |
| loro | possono | devono | vogliono |

### Meanings

**potere:** ability (*Posso nuotare.* I can swim.) / permission (*Posso uscire?* May I go out?) / possibility (*Potrebbe piovere.* It might rain.)

**dovere:** obligation (*Devo studiare.* I have to study.) / logical necessity (*Dev'essere tardi.* It must be late.)

**volere:** desire/will (*Voglio imparare.* I want to learn.) / "would like" in conditional: *vorrei*

### Passato Prossimo — Avere or Essere?

In passato prossimo, modals take **avere** OR **essere** depending on the dependent infinitive:
- With an avere verb: *Ho dovuto lavorare.* (I had to work.)
- With an essere verb: *Sono dovuto/a andare.* (I had to go.)

In spoken Italian, **avere** is increasingly used for all modals regardless of the dependent verb.

### Sapere vs Potere

*Sapere* (to know how to / can intellectually):
*So nuotare.* (I know how to swim / I can swim [learned skill].)
*Posso nuotare.* (I can swim [= I am allowed / I am physically able right now].)`,
    tables: [
      {
        caption: 'Modal + Infinitive Structures',
        headers: ['Modal', 'Meaning', 'Example'],
        rows: [
          ['Posso + inf.', 'I can / I am able to', 'Posso aiutarti.'],
          ['Devo + inf.', 'I must / I have to', 'Devo andare.'],
          ['Voglio + inf.', 'I want to', 'Voglio mangiare.'],
          ['Vorrei + inf.', 'I would like to', 'Vorrei un caffè.'],
          ['Potrei + inf.', 'I could', 'Potrei venire domani.'],
          ['Dovrei + inf.', 'I should', 'Dovrei studiare.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-mod-01',
      prompt: 'Non ___ (io, potere) venire alla festa stasera — sono malato.',
      answer: 'posso',
      feedback: {
        correct: 'Esatto! "Non posso venire" — potere, io form.',
        incorrect: 'The correct answer is "posso".',
        explanation:
          '"Potere" → io: posso. Posso venire = I can come. Non posso venire = I can\'t come. The dependent verb "venire" stays as infinitive.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-mod-02',
      prompt: 'Voi ___ (dovere) finire i compiti prima di uscire. (You must finish your homework before going out.)',
      answer: 'dovete',
      feedback: {
        correct: 'Perfetto! "Dovete" — dovere, voi form.',
        incorrect: 'The correct answer is "dovete".',
        explanation:
          '"Dovere" → voi: dovete. Dovete finire = you must/have to finish. Note: "prima di + infinitive" = before doing something.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-mod-03',
      prompt: 'Ho provato ma non ___ aprire la bottiglia. (I tried but couldn\'t open the bottle.) — riuscire',
      answer: 'sono riuscito',
      hint: '"Riuscire a + infinitive" = to manage to / succeed in (not potere in this context).',
      feedback: {
        correct: 'Bravo/a! "Non sono riuscito ad aprire" — riuscire expresses managed/succeeded.',
        incorrect: 'The correct answer is "sono riuscito" (making "non sono riuscito ad aprire").',
        explanation:
          '"Riuscire a + infinitive" = to manage to / be able to (succeed in doing). It is an essere verb: sono riuscito/a. "Non sono riuscito ad aprire" = I couldn\'t manage to open (tried but failed). More specific than "non ho potuto" (= wasn\'t allowed / wasn\'t physically able).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-mod-04',
      question: '"___ suonare il pianoforte da quando avevo cinque anni." (I\'ve been able to play piano since I was five.)',
      options: [
        { value: 'a', label: 'Posso' },
        { value: 'b', label: 'So' },
        { value: 'c', label: 'Voglio' },
        { value: 'd', label: 'Devo' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "So suonare" — sapere for a learned skill.',
        incorrect: 'The correct answer is "So".',
        explanation:
          '"Sapere + infinitive" = to know how to (a learned, acquired skill). "So suonare il pianoforte" = I know how to play piano. "Posso suonare" would mean "I\'m allowed to play / I\'m physically capable right now," not "I know how."',
        optionExplanations: {
          a: '"Posso suonare" implies current ability/permission, not acquired skill.',
          c: '"Voglio suonare" = I want to play.',
          d: '"Devo suonare" = I must play.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-mod-05',
      question: 'Which sentence correctly says "She had to leave early"?',
      options: [
        { value: 'a', label: 'Ha dovuto partire presto.' },
        { value: 'b', label: 'È dovuta partire presto.' },
        { value: 'c', label: 'Both (a) and (b) are accepted.' },
        { value: 'd', label: 'Doveva partire presto.' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! Both are accepted — (a) is more common in modern spoken Italian.',
        incorrect: 'The correct answer is (c) — both are accepted.',
        explanation:
          '"Partire" is an essere verb. Formally: è dovuta partire (essere, agreement: dovuta). Colloquially: ha dovuto partire (avere, no agreement). Both are grammatically correct; in modern spoken Italian "ha dovuto" is more common.',
        optionExplanations: {
          d: '"Doveva partire presto" = imperfetto — she was supposed to leave early (ongoing/habitual obligation), not a completed event.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-mod-06',
      verb: 'volere — presente indicativo',
      tense: 'Present',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'],
      feedback: {
        explanation:
          '"Volere" is highly irregular in the present: voglio/vuoi/vuole/vogliamo/volete/vogliono. Note the stem changes: vog- (io), vu- (tu, lui/lei), vog- (noi, loro), vol- (voi). Memorise the six forms; they appear constantly in everyday Italian.',
      },
    },
    {
      type: 'match',
      id: 'a2-mod-07',
      instruction: 'Match each sentence with its most natural English translation.',
      pairs: [
        { left: 'Non posso dormire.', right: 'I can\'t sleep.' },
        { left: 'Non riesco a dormire.', right: 'I\'m unable to sleep (trying but failing).' },
        { left: 'Non devo mangiare tardi.', right: 'I must not eat late.' },
        { left: 'Non voglio mangiare.', right: 'I don\'t want to eat.' },
        { left: 'Sai cucinare?', right: 'Do you know how to cook?' },
      ],
      feedback: {
        explanation:
          '"Non posso" = I can\'t (general inability/not allowed). "Non riesco a" = I\'m unable to (trying but not managing). "Non devo" = I must not (prohibition). "Non voglio" = I don\'t want to (desire). "Sai" (sapere) = do you know how (learned skill).',
      },
    },
    {
      type: 'reorder',
      id: 'a2-mod-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['studiare', 'Devi', 'se', 'più', 'passare', 'vuoi', "l'esame"],
      answer: ['Devi', 'studiare', 'di', 'più', 'se', 'vuoi', 'passare', "l'esame"],
      feedback: {
        correct: "Perfetto! \"Devi studiare di più se vuoi passare l'esame.\"",
        explanation:
          '"Devi studiare" = you must study (dovere + infinitive). "Di più" = more (not "più" alone when modifying a verb — use "di più"). "Se vuoi" = if you want. "Passare l\'esame" = to pass the exam. Note "di più" was split in the word bank.',
      },
    },
    {
      type: 'translation',
      id: 'a2-mod-09',
      source: 'Can you help me? I want to learn Italian but I can\'t understand the grammar.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Puoi aiutarmi? Voglio imparare l\'italiano ma non riesco a capire la grammatica.',
        'Puoi aiutarmi? Voglio imparare l\'italiano ma non capisco la grammatica.',
        'Mi puoi aiutare? Voglio imparare l\'italiano ma non riesco a capire la grammatica.',
      ],
      feedback: {
        explanation:
          '"Can you help me?" = Puoi aiutarmi? / Mi puoi aiutare? (potere, tu). "I want to learn" = voglio imparare (volere + infinitive). "I can\'t understand" = non riesco a capire (riuscire a + infinitive — implies trying but not managing) or non capisco (present).',
        modelAnswer: "Puoi aiutarmi? Voglio imparare l'italiano ma non riesco a capire la grammatica.",
      },
    },
  ],
};
