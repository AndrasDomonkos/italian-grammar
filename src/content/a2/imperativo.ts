import type { Lesson } from '../types';

export const imperativo: Lesson = {
  slug: 'imperativo',
  title: 'Imperativo',
  level: 'a2',
  order: 10,
  explanation: {
    text: `## L'Imperativo (The Imperative)

The **imperativo** is used for commands, instructions, requests, and advice. In Italian it exists for tu, noi, and voi (and Lei for formal).

### Regular Formation

**-ARE verbs** (parlare):
- tu: parl**a** / noi: parl**iamo** / voi: parl**ate**

**-ERE verbs** (scrivere):
- tu: scriv**i** / noi: scriv**iamo** / voi: scriv**ete**

**-IRE verbs** (dormire / finire):
- tu: dorm**i** / noi: dorm**iamo** / voi: dorm**ite**
- finire (isc-type): finisc**i** / finiamo / finit**e**

### Irregular Imperatives (tu form)

| Verb | tu | noi | voi |
|------|----|-----|-----|
| essere | sii | siamo | siate |
| avere | abbi | abbiamo | abbiate |
| andare | va' (vai) | andiamo | andate |
| fare | fa' (fai) | facciamo | fate |
| dire | di' | diciamo | dite |
| dare | da' (dai) | diamo | date |
| stare | sta' (stai) | stiamo | state |
| venire | vieni | veniamo | venite |

### Negative Imperative

**Tu form:** non + infinitive: *Non parlare!* (Don't speak!)
**Noi/Voi:** non + imperativo: *Non parlate!*

### Pronouns with Imperativo

With positive commands, pronouns **attach** to the verb (tu/noi/voi) — except with formal Lei:
*Dimmi!* (Tell me!) / *Guardalo!* (Look at it!)

With the short tu forms (va', fa', da', sta', di'), the consonant **doubles** when a pronoun is attached:
*va' + ci = vacci* / *fa' + lo = fallo* / *di' + mi = dimmi*

### Formal Imperative (Lei)

The formal singular imperative uses the **subjunctive** present (3rd person):
*parlare → parli!* / *scrivere → scriva!* / *venire → venga!*

With pronouns, they go **before** the verb: *Lo prenda.* (Take it, formal.)`,
    tables: [
      {
        caption: 'Regular Imperativo',
        headers: ['Verb', 'tu', 'noi', 'voi'],
        rows: [
          ['parlare', 'parla!', 'parliamo!', 'parlate!'],
          ['scrivere', 'scrivi!', 'scriviamo!', 'scrivete!'],
          ['dormire', 'dormi!', 'dormiamo!', 'dormite!'],
          ['finire', 'finisci!', 'finiamo!', 'finite!'],
          ['andare', "va'!", 'andiamo!', 'andate!'],
          ['fare', "fa'!", 'facciamo!', 'fate!'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-imp-01',
      prompt: '___ (tu, aspettare) un momento, per favore! (Wait a moment, please!)',
      answer: 'Aspetta',
      feedback: {
        correct: 'Esatto! "Aspetta" — imperativo tu of aspettare (-are).',
        incorrect: 'The correct answer is "Aspetta".',
        explanation:
          '"Aspettare" is a regular -are verb. Tu imperativo: remove -are, add -a → aspetta. For -are verbs, the tu imperative = the lui/lei present form.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-imp-02',
      prompt: 'Non ___ (tu, parlare) così forte! (Don\'t speak so loudly!)',
      answer: 'parlare',
      hint: 'Negative tu imperative = non + infinitive.',
      feedback: {
        correct: 'Perfetto! "Non parlare così forte!" — non + infinitive for negative tu.',
        incorrect: 'The correct answer is "parlare".',
        explanation:
          'For the negative imperative with tu, use "non + infinitive": non parlare, non andare, non fare. For noi/voi: non + imperative form (non parlate, non andate).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-imp-03',
      prompt: '___ (tu, dirmi) la verità! (Tell me the truth!) — dire',
      answer: 'Dimmi',
      hint: "di' + mi = dimmi (consonant doubles with short forms)",
      feedback: {
        correct: 'Bravo/a! "Dimmi" — di\' + mi, with consonant doubling.',
        incorrect: 'The correct answer is "Dimmi".',
        explanation:
          '"Dire" → tu imperativo = di\'. When a pronoun is attached to a short form (va\', fa\', da\', sta\', di\'), the initial consonant of the pronoun doubles: di\' + mi = dimmi, di\' + lo = dillo, di\' + le = dille.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-imp-04',
      question: 'Choose the correct formal imperative (Lei): "Please sit down."',
      options: [
        { value: 'a', label: 'Siediti, per favore.' },
        { value: 'b', label: 'Siedi, per favore.' },
        { value: 'c', label: 'Si sieda, per favore.' },
        { value: 'd', label: 'Si sieda pure.' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Corretto! "Si sieda" — formal Lei imperative (subjunctive form).',
        incorrect: 'The correct answer is "Si sieda, per favore."',
        explanation:
          'Formal (Lei) imperatives use the present subjunctive 3rd person. "Sedersi" → si sieda (the reflexive si stays before the verb with formal Lei). "Per favore" = please.',
        optionExplanations: {
          a: '"Siediti" = tu informal imperative with ti attached. Not formal.',
          b: '"Siedi" = tu informal imperative. Not formal.',
          d: '"Si sieda pure" = please do sit down (pure softens it) — grammatically correct but (c) is the standard form without pure.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-imp-05',
      question: '"___ (voi, fare) silenzio!" — Be quiet! (plural)',
      options: [
        { value: 'a', label: 'Facciate silenzio!' },
        { value: 'b', label: 'Fate silenzio!' },
        { value: 'c', label: "Fa' silenzio!" },
        { value: 'd', label: 'Facete silenzio!' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Fate silenzio!" — voi imperative of fare.',
        incorrect: 'The correct answer is "Fate silenzio!"',
        explanation:
          '"Fare" → voi imperativo = fate (regular). The tu form is fa\' (irregular short form); the voi form is simply fate. "Fare silenzio" = to be quiet / make silence.',
        optionExplanations: {
          a: '"Facciate" does not exist as an imperative form.',
          c: '"Fa\' silenzio!" is the tu form — for one person, not plural.',
          d: '"Facete" does not exist.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-imp-06',
      verb: 'Imperativo — tu form',
      tense: 'Give the tu imperative',
      pronouns: ['essere', 'avere', 'venire', 'dare', 'stare', 'andare'],
      answers: ['sii', 'abbi', 'vieni', "da'", "sta'", "va'"],
      feedback: {
        explanation:
          'Six irregular tu imperatives: sii (essere), abbi (avere), vieni (venire), da\' (dare), sta\' (stare), va\' (andare). The short forms da\', sta\', va\', fa\', di\' double consonants when pronouns attach: dallo, stammi, vacci, fallo, dimmi.',
      },
    },
    {
      type: 'match',
      id: 'a2-imp-07',
      instruction: 'Match each command with its English meaning.',
      pairs: [
        { left: 'Mangialo!', right: 'Eat it! (tu)' },
        { left: 'Non lo mangiare!', right: "Don't eat it! (tu)" },
        { left: 'Mangiatelo!', right: 'Eat it! (voi)' },
        { left: 'Mangiamolo!', right: "Let's eat it! (noi)" },
        { left: 'Lo mangi!', right: 'Eat it! (formal Lei)' },
      ],
      feedback: {
        explanation:
          'Pronoun position: positive tu/noi/voi → attach to verb (mangialo, mangiatelo, mangiamolo). Negative tu → non + infinitive + pronoun (non lo mangiare) OR non + infinitive + attached (non mangiarlo). Formal Lei → pronoun before verb (lo mangi).',
      },
    },
    {
      type: 'reorder',
      id: 'a2-imp-08',
      instruction: 'Arrange the words to form a correct Italian command.',
      words: ['e', 'questo', 'Leggi', 'dimmi', 'libro', 'cosa', 'pensi'],
      answer: ['Leggi', 'questo', 'libro', 'e', 'dimmi', 'cosa', 'pensi'],
      feedback: {
        correct: 'Perfetto! "Leggi questo libro e dimmi cosa pensi."',
        explanation:
          '"Leggi" = tu imperativo of leggere (-ere: leggi). "Questo libro" = this book (demonstrative + noun). "Dimmi" = di\' + mi (doubled). "Cosa pensi" = what you think. Two imperatives linked by "e".',
      },
    },
    {
      type: 'translation',
      id: 'a2-imp-09',
      source: 'Children, be good and don\'t make noise!',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Bambini, siate bravi e non fate rumore!',
        'Bambini, siate buoni e non fate rumore!',
        'Bambini, siate bravi e non fate chiasso!',
      ],
      feedback: {
        explanation:
          '"Siate" = voi imperativo of essere (irregular: siate). "Bravi/buoni" = good (masc. plur., agrees with bambini). "Non fate" = don\'t make (negative voi: non + fate). "Rumore/chiasso" = noise. "Fare rumore/chiasso" = to make noise.',
        modelAnswer: 'Bambini, siate bravi e non fate rumore!',
      },
    },
  ],
};
