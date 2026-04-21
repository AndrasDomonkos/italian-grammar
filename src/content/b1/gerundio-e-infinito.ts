import type { Lesson } from '../types';

export const gerundioInfinito: Lesson = {
  slug: 'gerundio-e-infinito',
  title: 'Gerundio e Infinito in Proposizioni',
  level: 'b1',
  order: 14,
  explanation: {
    text: `## Gerundio e Infinito in Proposizioni Subordinate

Both the gerundio and the infinito can introduce dependent clauses, reducing the need for full subordinate clauses. Choosing between them depends on whether the subjects are the same or different.

---

## Il Gerundio in Proposizioni

The gerundio (present: -ando/-endo; past: avendo/essendo + participio) always refers to the **same subject** as the main clause.

### Present Gerundio — simultaneous or means

**Expressing time (while/as):**
*Camminando, ho incontrato Marco.* (While walking, I met Marco.)
*Studiando molto, ho migliorato.* (By studying a lot, I improved.)

**Expressing manner/means (by -ing):**
*Parlando lentamente, capisce tutti.* (By speaking slowly, everyone understands him.)

**Expressing condition (if):**
*Volendo, potremmo farcela.* (If willing / wanting to, we could do it.)

### Past Gerundio — prior action (avendo/essendo + participio)

*Avendo studiato tutta la notte, ero esausto.*
(Having studied all night, I was exhausted.)

*Essendo arrivata tardi, non ha trovato posto.*
(Having arrived late, she didn't find a seat.)

---

## L'Infinito in Proposizioni Subordinate

### After Prepositions

| Preposition | Structure | Example |
|-------------|-----------|---------|
| di | before indirect speech, opinions | Credo di capire. |
| a | purpose or after certain verbs | Vengo a studiare. |
| da | passive/purpose | Un problema da risolvere. |
| per | purpose (in order to) | Studio per imparare. |
| prima di | before doing | Prima di uscire, mangia. |
| dopo | after doing (perfect inf.) | Dopo aver mangiato. |
| senza | without doing | Senza parlare. |
| invece di | instead of | Invece di lavorare. |

### Infinito as Subject or Object

*Studiare è importante.* (Studying is important.)
*Mi piace leggere.* (I like reading / to read.)
*Ho deciso di andare.* (I decided to go.)`,
    tables: [
      {
        caption: 'Gerundio vs Infinito — When to Use Each',
        headers: ['Construction', 'Use', 'Example'],
        rows: [
          ['Gerundio presente', 'Simultaneous action (same subj.)', 'Leggendo, imparo.'],
          ['Gerundio passato', 'Prior action (same subj.)', 'Avendo letto, sapevo la risposta.'],
          ['Stare + gerundio', 'Progressive action', 'Sto leggendo.'],
          ['per + infinito', 'Purpose', 'Studio per imparare.'],
          ['prima di + infinito', 'Before doing', 'Prima di uscire, mangio.'],
          ['dopo + inf. perfetto', 'After doing', 'Dopo aver mangiato.'],
          ['senza + infinito', 'Without doing', 'Uscito senza dire niente.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-gerund-01',
      prompt: '___ (ascoltare — gerundio presente) musica, mi rilasso. (By listening to music, I relax.)',
      answer: 'Ascoltando',
      feedback: {
        correct: 'Esatto! "Ascoltando" — present gerundio of ascoltare (-ando).',
        incorrect: 'The correct answer is "Ascoltando".',
        explanation:
          '"Ascoltare" → gerundio: ascoltando (-are → -ando). Same subject as main clause (io). Expresses means/manner: "by listening." Always same subject → gerundio.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-gerund-02',
      prompt: '___ (avere — passato gerundio) studiato molto, ha superato l\'esame. (Having studied a lot, she passed the exam.)',
      answer: 'Avendo',
      hint: 'Past gerundio = avendo/essendo + participio; studiare uses avere.',
      feedback: {
        correct: 'Perfetto! "Avendo studiato molto" — past gerundio expressing prior action.',
        incorrect: 'The correct answer is "Avendo".',
        explanation:
          'Past gerundio = avendo + participio (for avere verbs) or essendo + participio (for essere verbs). "Avendo studiato molto" = having studied a lot. The action preceded the main clause (passing the exam).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-gerund-03',
      prompt: 'Studio italiano ___ (per — purpose) migliorare la mia carriera. (I study Italian in order to improve my career.)',
      answer: 'per',
      hint: '"In order to" → per + infinito',
      feedback: {
        correct: 'Bravo/a! "Studio italiano per migliorare" — per + infinito for purpose.',
        incorrect: 'The correct answer is "per".',
        explanation:
          '"Per + infinitivo" = in order to / for the purpose of. "Studio per migliorare" = I study in order to improve. Note: "per" can also express cause (per stanchezza = due to tiredness).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-gerund-04',
      question: '"___ arrivata tardi, non ha trovato posto." (Having arrived late, she didn\'t find a seat.)',
      options: [
        { value: 'a', label: 'Arrivando' },
        { value: 'b', label: 'Essendo arrivata' },
        { value: 'c', label: 'Avendo arrivato' },
        { value: 'd', label: 'Dopo arrivata' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Essendo arrivata" — past gerundio with essere + fem. agreement.',
        incorrect: 'The correct answer is "Essendo arrivata".',
        explanation:
          '"Arrivare" uses essere. Past gerundio with essere: essendo + participio. The participio agrees with the subject (lei = fem.) → arrivata. "Essendo arrivata tardi" = having arrived late.',
        optionExplanations: {
          a: '"Arrivando" = present gerundio — implies simultaneous, not prior.',
          c: '"Avendo arrivato" uses avere — arrivare takes essere.',
          d: '"Dopo arrivata" is not standard — use "dopo essere arrivata."',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-gerund-05',
      question: '"È uscito ___ salutare." (He left without saying goodbye.)',
      options: [
        { value: 'a', label: 'prima di' },
        { value: 'b', label: 'per non' },
        { value: 'c', label: 'senza' },
        { value: 'd', label: 'invece di' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Senza salutare" — senza + infinito = without doing.',
        incorrect: 'The correct answer is "senza".',
        explanation:
          '"Senza + infinito" = without doing something. "È uscito senza salutare" = he left without saying goodbye.',
        optionExplanations: {
          a: '"Prima di salutare" = before saying goodbye — different meaning.',
          b: '"Per non salutare" = in order not to say goodbye — implies intentional avoidance.',
          d: '"Invece di salutare" = instead of saying goodbye — different meaning.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-gerund-06',
      verb: 'Form the past gerundio (avendo/essendo + participio)',
      tense: 'Past gerundio',
      pronouns: [
        'mangiare (avere)',
        'arrivare (essere)',
        'studiare (avere)',
        'uscire (essere)',
        'fare (avere)',
        'venire (essere)',
      ],
      answers: [
        'avendo mangiato',
        'essendo arrivato/a',
        'avendo studiato',
        'essendo uscito/a',
        'avendo fatto',
        'essendo venuto/a',
      ],
      feedback: {
        explanation:
          'Avere verbs → avendo + participio: avendo mangiato, avendo studiato, avendo fatto. Essere verbs → essendo + participio (agrees with subject): essendo arrivato/a, essendo uscito/a, essendo venuto/a. Note "fare" irregular participio: fatto.',
      },
    },
    {
      type: 'match',
      id: 'b1-gerund-07',
      instruction: 'Match each gerundio/infinito construction with its meaning.',
      pairs: [
        { left: 'Camminando, penso.', right: 'While walking, I think.' },
        { left: 'Per imparare, bisogna studiare.', right: 'To learn, one must study.' },
        { left: 'Avendo finito, sono uscito.', right: 'Having finished, I went out.' },
        { left: 'Prima di partire, chiama.', right: 'Before leaving, call.' },
        { left: 'Invece di lavorare, guarda la TV.', right: 'Instead of working, he watches TV.' },
      ],
      feedback: {
        explanation:
          '"Camminando" = while walking (simultaneous). "Per imparare" = in order to learn (purpose). "Avendo finito" = having finished (prior). "Prima di partire" = before leaving (before). "Invece di lavorare" = instead of working (substitution).',
      },
    },
    {
      type: 'reorder',
      id: 'b1-gerund-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['studiando', 'italiano', 'Ascoltando', 'musica', 'imparo'],
      answer: ['Ascoltando', 'musica', 'italiana', 'imparo', 'studiando'],
      feedback: {
        correct: 'Perfetto! "Ascoltando musica italiana, imparo studiando."',
        explanation:
          '"Ascoltando musica italiana" = while listening to Italian music (gerundio, manner/time). "Imparo studiando" = I learn by studying (gerundio as means). Two gerundio clauses: the first sets the context, the second explains the method.',
      },
    },
    {
      type: 'translation',
      id: 'b1-gerund-09',
      source: 'By speaking Italian every day, you improve. Having studied for years, she speaks perfectly.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Parlando italiano ogni giorno, si migliora. Avendo studiato per anni, parla perfettamente.',
        'Parlando italiano ogni giorno, miglioreresti. Avendo studiato per anni, parla alla perfezione.',
      ],
      feedback: {
        explanation:
          '"By speaking" = parlando (gerundio means). "You improve" = si migliora (si impersonale) or migliori (tu). "Having studied for years" = avendo studiato per anni (past gerundio, avere). "She speaks perfectly" = parla perfettamente.',
        modelAnswer: 'Parlando italiano ogni giorno, si migliora. Avendo studiato per anni, parla perfettamente.',
      },
    },
  ],
};
