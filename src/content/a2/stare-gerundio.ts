import type { Lesson } from '../types';

export const stareGerundio: Lesson = {
  slug: 'stare-gerundio',
  title: 'Stare + Gerundio',
  level: 'a2',
  order: 15,
  explanation: {
    text: `## Stare + Gerundio (The Progressive)

The construction **stare + gerundio** expresses an action that is in progress right now — the equivalent of English "be + -ing."

### The Gerundio

Form the gerundio by removing the infinitive ending and adding:

| Infinitive | Ending | Gerundio |
|------------|--------|----------|
| -are | **-ando** | parlare → parlando |
| -ere | **-endo** | scrivere → scrivendo |
| -ire | **-endo** | dormire → dormendo |

**Irregular gerundios:**
- *fare → facendo* (stem: fac-)
- *dire → dicendo* (stem: dic-)
- *bere → bevendo* (stem: bev-)
- *tradurre → traducendo*

### The Construction

**stare (conjugated) + gerundio**

*Sto mangiando.* (I am eating.)
*Stai leggendo?* (Are you reading?)
*Sta piovendo.* (It is raining.)
*Stiamo studiando.* (We are studying.)

### Past Progressive

Use the **imperfetto of stare** for "was/were -ing":
*Stavo mangiando quando è arrivato.* (I was eating when he arrived.)
*Cosa stavi facendo?* (What were you doing?)

### Pronouns with Gerundio

Pronouns attach to the gerundio (or can come before stare):
*Lo sto guardando. / Sto guardandolo.* (I'm watching it.)
*Mi sta parlando. / Sta parlandomi.* (He's talking to me.)

### Gerundio as Adverb (without stare)

The gerundio can also be used independently to express manner, cause, or time:
*Studiando molto, ho migliorato.* (By studying a lot, I improved.)
*Essendo stanco, sono andato a letto.* (Being tired, I went to bed.)`,
    tables: [
      {
        caption: 'Stare + Gerundio — Present',
        headers: ['Stare', 'Gerundio of parlare', 'Together'],
        rows: [
          ['sto', 'parlando', 'sto parlando'],
          ['stai', 'parlando', 'stai parlando'],
          ['sta', 'parlando', 'sta parlando'],
          ['stiamo', 'parlando', 'stiamo parlando'],
          ['state', 'parlando', 'state parlando'],
          ['stanno', 'parlando', 'stanno parlando'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-ger-01',
      prompt: 'Silenzio! Il bambino ___ (dormire). (Quiet! The baby is sleeping.)',
      answer: 'sta dormendo',
      hint: 'stare (lui/lei) + gerundio of dormire',
      feedback: {
        correct: 'Esatto! "Sta dormendo" — progressive with -ire verb.',
        incorrect: 'The correct answer is "sta dormendo".',
        explanation:
          '"Dormire" → gerundio: dorm- + -endo = dormendo. "Lui/lei" form of stare = sta. Sta dormendo = he/she/it is sleeping.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-ger-02',
      prompt: 'Cosa ___ (tu, fare) in questo momento? (What are you doing right now?)',
      answer: 'stai facendo',
      hint: 'fare → gerundio: facendo (irregular stem fac-)',
      feedback: {
        correct: 'Perfetto! "Stai facendo" — fare has an irregular gerundio: facendo.',
        incorrect: 'The correct answer is "stai facendo".',
        explanation:
          '"Fare" → irregular gerundio: facendo (stem fac-, not far-). Tu form of stare = stai. Stai facendo = you are doing.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-ger-03',
      prompt: '___ (io, mangiare) quando mi hai chiamato. (I was eating when you called me.)',
      answer: 'Stavo mangiando',
      hint: 'Past progressive = imperfetto of stare + gerundio.',
      feedback: {
        correct: 'Bravo/a! "Stavo mangiando" — past progressive (was eating).',
        incorrect: 'The correct answer is "Stavo mangiando".',
        explanation:
          'Past progressive = imperfetto di stare + gerundio. "Io" imperfetto of stare = stavo. Mangiare → mangiando. "Stavo mangiando quando mi hai chiamato" = I was eating when you called me (background + interruption).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-ger-04',
      question: 'Which is the correct gerundio of "bere"?',
      options: [
        { value: 'a', label: 'berendo' },
        { value: 'b', label: 'bevendo' },
        { value: 'c', label: 'beendo' },
        { value: 'd', label: 'berando' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Bevendo" — bere has the irregular stem bev-.',
        incorrect: 'The correct answer is "bevendo".',
        explanation:
          '"Bere" has an irregular gerundio: bevendo (stem bev-, same as imperfetto). This follows the same pattern as the imperfect: bevevo, bevevi… Similarly: dire → dicendo, fare → facendo.',
        optionExplanations: {
          a: '"Berendo" uses the infinitive stem incorrectly.',
          c: '"Beendo" omits the consonant.',
          d: '"Berando" uses the -are ending.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-ger-05',
      question: '"___ italiano, ho fatto molti amici in Italia." (By speaking Italian, I made many friends.)',
      options: [
        { value: 'a', label: 'Parlavo' },
        { value: 'b', label: 'Parlare' },
        { value: 'c', label: 'Parlando' },
        { value: 'd', label: 'Avendo parlato' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Parlando" — gerundio used adverbially to express means/manner.',
        incorrect: 'The correct answer is "Parlando".',
        explanation:
          'The gerundio without stare functions as an adverb expressing manner, cause, or means: "parlando italiano" = by speaking Italian / while speaking Italian. This use does not require stare.',
        optionExplanations: {
          a: '"Parlavo" = imperfetto — a past tense, not expressing manner.',
          b: '"Parlare" = infinitive — can\'t start a clause in this adverbial function.',
          d: '"Avendo parlato" = perfect gerundio (having spoken) — possible but implies the action was completed before making friends, while "parlando" implies it was the ongoing activity.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-ger-06',
      verb: 'Gerundio formation',
      tense: 'Give the gerundio for each verb',
      pronouns: ['parlare', 'scrivere', 'dormire', 'fare', 'dire', 'bere'],
      answers: ['parlando', 'scrivendo', 'dormendo', 'facendo', 'dicendo', 'bevendo'],
      feedback: {
        explanation:
          'Regular: parlare → parlando (-ando), scrivere → scrivendo (-endo), dormire → dormendo (-endo). Irregular (stem changes): fare → facendo (fac-), dire → dicendo (dic-), bere → bevendo (bev-). These three are the main irregular gerundios.',
      },
    },
    {
      type: 'match',
      id: 'a2-ger-07',
      instruction: 'Match each Italian progressive sentence with its English meaning.',
      pairs: [
        { left: 'Sto studiando per l\'esame.', right: 'I am studying for the exam.' },
        { left: 'Stava dormendo quando ho chiamato.', right: 'He was sleeping when I called.' },
        { left: 'Stanno mangiando.', right: 'They are eating.' },
        { left: 'Lo sta leggendo.', right: 'He/she is reading it.' },
        { left: 'Sto cercandola.', right: 'I am looking for her/it.' },
      ],
      feedback: {
        explanation:
          '"Lo sta leggendo" vs "Sto leggendolo" — both correct, pronoun can precede stare or attach to gerundio. "Sto cercandola" = pronoun attached to gerundio (cerca + la → cercandola). With stare + gerundio, pronoun position is flexible.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-ger-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['telefonando', 'Smetti', 'di', 'guidare', 'mentre', 'stai'],
      answer: ['Smetti', 'di', 'telefonare', 'mentre', 'stai', 'guidando'],
      feedback: {
        correct: 'Perfetto! "Smetti di telefonare mentre stai guidando."',
        explanation:
          '"Smettere di + infinitive" = to stop doing something. "Telefonare" = infinitive (after "di"). "Mentre stai guidando" = while you are driving (stai + guidando). Note the reorder from the scrambled words.',
      },
    },
    {
      type: 'translation',
      id: 'a2-ger-09',
      source: 'What are you all doing? We are watching a film and drinking wine.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Cosa state facendo? Stiamo guardando un film e bevendo del vino.',
        'Cosa state facendo? Stiamo guardando un film e stiamo bevendo del vino.',
        'Cosa fate? Stiamo guardando un film e bevendo del vino.',
      ],
      feedback: {
        explanation:
          '"What are you all doing?" = Cosa state facendo? (voi form: state + facendo). "We are watching" = stiamo guardando. "And drinking" = e bevendo (gerundio can continue without repeating stiamo). "Del vino" = some wine (partitive di + il).',
        modelAnswer: 'Cosa state facendo? Stiamo guardando un film e bevendo del vino.',
      },
    },
  ],
};
