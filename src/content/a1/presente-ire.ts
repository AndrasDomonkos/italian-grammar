import type { Lesson } from '../types';

export const presenteIre: Lesson = {
  slug: 'presente-ire',
  title: 'Presente Indicativo: Verbi -IRE',
  level: 'a1',
  order: 9,
  explanation: {
    text: `## Presente Indicativo: Verbi in -IRE

The **-ire** group is the third conjugation. It has **two sub-patterns**: verbs that conjugate like *dormire* (the "simple" type) and verbs that insert **-isc-** in four forms (the "isc-" type, like *finire*).

### Type A — Simple -IRE (like dormire)

Remove **-ire**, add endings:

| Pronoun | Ending | dormire → dorm- |
|---------|--------|-----------------|
| io | -o | dormo |
| tu | -i | dormi |
| lui/lei | -e | dorme |
| noi | -iamo | dormiamo |
| voi | -ite | dormite |
| loro | -ono | dormono |

Other Type-A verbs: *partire* (to leave), *sentire* (to hear/feel), *aprire* (to open), *coprire* (to cover), *offrire* (to offer), *seguire* (to follow), *servire* (to serve).

### Type B — -ISC- Insertion (like finire)

Four forms (io, tu, lui, loro) add **-isc-** between stem and ending:

| Pronoun | Form |
|---------|------|
| io | finisco |
| tu | finisci |
| lui/lei | finisce |
| noi | finiamo ← no -isc-! |
| voi | finite ← no -isc-! |
| loro | finiscono |

Other -isc- verbs: *capire* (to understand), *preferire* (to prefer), *pulire* (to clean), *costruire* (to build), *guarire* (to recover/heal), *obbedire* (to obey), *spedire* (to send/dispatch).

### How to Tell Them Apart

Unfortunately, there is no rule from the infinitive — you must **learn** which type each verb belongs to. The most common -isc- verbs (capire, finire, preferire, pulire) appear very frequently, so you will quickly memorise them.

### Voi Ending

Note: the voi form is **-ite** for -ire verbs, compared to **-ate** (-are) and **-ete** (-ere). This is one of three key differences: lui/lei (-e), noi (-iamo, same), voi (**-ite**), loro (-ono, same as -ere).`,
    tables: [
      {
        caption: 'Type A: dormire vs Type B: finire',
        headers: ['Pronoun', 'dormire', 'finire'],
        rows: [
          ['io', 'dormo', 'finisco'],
          ['tu', 'dormi', 'finisci'],
          ['lui/lei', 'dorme', 'finisce'],
          ['noi', 'dormiamo', 'finiamo'],
          ['voi', 'dormite', 'finite'],
          ['loro', 'dormono', 'finiscono'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "dormire", translation: "to sleep", example: "Dormo otto ore ogni notte.", exampleTranslation: "I sleep eight hours every night." },
    { word: "partire", translation: "to leave", example: "Partiamo domani mattina.", exampleTranslation: "We leave tomorrow morning." },
    { word: "sentire", translation: "to hear", example: "Sento una bella melodia.", exampleTranslation: "I hear a beautiful melody." },
    { word: "aprire", translation: "to open", example: "Apri la finestra, per favore.", exampleTranslation: "Open the window, please." },
    { word: "finire", translation: "to finish", example: "Finisco i compiti alle cinque.", exampleTranslation: "I finish homework at five." },
    { word: "capire", translation: "to understand", example: "Capite la lezione di grammatica?", exampleTranslation: "Do you understand the grammar lesson?" },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-pres-ire-01',
      prompt: 'Non ___ bene ultimamente. (I haven\'t been sleeping well lately.) — dormire',
      answer: 'dormo',
      feedback: {
        correct: 'Esatto! "Dormo" is correct.',
        incorrect: 'The correct answer is "dormo".',
        explanation:
          '"Dormire" is a Type-A -ire verb (no -isc-). Io form: dorm- + -o = dormo. Non dormo = I don\'t sleep / I\'m not sleeping.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-pres-ire-02',
      prompt: 'Scusa, non ___ bene l\'italiano. (Sorry, I don\'t understand Italian well.) — capire',
      answer: 'capisco',
      hint: 'capire is a -isc- verb: io form = capisco.',
      feedback: {
        correct: 'Perfetto! "Capisco" is correct.',
        incorrect: 'The correct answer is "capisco".',
        explanation:
          '"Capire" is a Type-B -ire verb. It inserts -isc- in the io, tu, lui, and loro forms. Io: cap- + -isco = capisco. Tu: capisci. Lui: capisce. Loro: capiscono. Noi and voi do NOT use -isc-: capiamo, capite.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-pres-ire-03',
      prompt: 'Loro ___ sempre in ritardo. (They always leave late.) — partire',
      answer: 'partono',
      hint: 'partire is a Type-A verb; loro ending is -ono.',
      feedback: {
        correct: 'Bravo/a! "Partono" is correct.',
        incorrect: 'The correct answer is "partono".',
        explanation:
          '"Partire" is a Type-A -ire verb. Loro form: part- + -ono = partono. The -ono ending is the same for -ere and -ire verbs in the loro form. Only -are differs: -ano (parlano).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-pres-ire-04',
      question: 'Which form of "preferire" (to prefer) goes with "voi"?',
      options: [
        { value: 'preferite', label: 'preferite' },
        { value: 'preferiscono', label: 'preferiscono' },
        { value: 'preferete', label: 'preferete' },
        { value: 'preferiscite', label: 'preferiscite' },
      ],
      answer: 'preferite',
      feedback: {
        correct: 'Esatto! "Preferite" — the -isc- is NOT used for voi.',
        incorrect: 'The correct answer is "preferite".',
        explanation:
          '"Preferire" is a -isc- verb, BUT the -isc- insertion applies ONLY to io, tu, lui/lei, and loro. Noi and voi use the regular stem: prefer- + -ite = preferite (not *preferiscite*).',
        optionExplanations: {
          preferiscono: '"Preferiscono" is the loro form — correct for "they prefer", but the question asks for "voi".',
          preferete: '"Preferete" would be the voi form of a -ere verb. "Preferire" is an -ire verb: voi takes -ite → preferite.',
          preferiscite: 'This form does not exist. The -isc- is NEVER used with voi or noi.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-pres-ire-05',
      question: 'Identify the correct form: "___ la porta, per favore." (Open the door, please.) — tu, aprire',
      options: [
        { value: 'apre', label: 'Apre la porta' },
        { value: 'apri', label: 'Apri la porta' },
        { value: 'aprisci', label: 'Aprisci la porta' },
        { value: 'aprisce', label: 'Aprisce la porta' },
      ],
      answer: 'apri',
      feedback: {
        correct: 'Corretto! "Apri" is the 2nd person singular imperative/present.',
        incorrect: 'The correct answer is "Apri la porta".',
        explanation:
          '"Aprire" is a Type-A -ire verb (no -isc-). The tu form is: apr- + -i = apri. This also serves as the informal singular imperative. "Apre" would be lui/lei; "aprisci/aprisce" do not exist (aprire is NOT a -isc- verb).',
        optionExplanations: {
          apre: '"Apre" is the 3rd person singular (lui/lei apre). For a request to "you" (tu), we need "apri".',
          aprisci: 'This form does not exist — "aprire" does not use -isc- insertion.',
          aprisce: 'This form does not exist — "aprire" is a Type-A verb, not Type-B.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-pres-ire-06',
      verb: 'finire',
      tense: 'Presente Indicativo (Type-B, -isc- verb)',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['finisco', 'finisci', 'finisce', 'finiamo', 'finite', 'finiscono'],
      feedback: {
        explanation:
          'The -isc- pattern: finisco / finisci / finisce / finiamo / finite / finiscono. Key: -isc- appears in 4 forms (io, tu, lui, loro) but NOT in noi and voi. Noi: finiamo (NOT finisciamo). Voi: finite (NOT finiscite).',
      },
    },
    {
      type: 'match',
      id: 'a1-pres-ire-07',
      instruction: 'Match each subject with the correct form of "capire" (to understand).',
      pairs: [
        { left: 'io', right: 'capisco' },
        { left: 'tu', right: 'capisci' },
        { left: 'lui/lei', right: 'capisce' },
        { left: 'noi', right: 'capiamo' },
        { left: 'voi', right: 'capite' },
        { left: 'loro', right: 'capiscono' },
      ],
      feedback: {
        explanation:
          'Capire is a -isc- verb. The pattern is identical to finire: capisco/capisci/capisce/capiamo/capite/capiscono. Memorise: noi and voi NEVER use -isc-.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-pres-ire-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['il', 'finisce', 'alle', 'lavoro', 'sei', 'Lui'],
      answer: ['Lui', 'finisce', 'il', 'lavoro', 'alle', 'sei'],
      feedback: {
        correct: 'Perfetto! "Lui finisce il lavoro alle sei."',
        explanation:
          '"Finisce" is the 3rd person singular of finire (lui/lei). It uses -isc-: fin- + isce = finisce. "Alle sei" = at six o\'clock (a + le = alle). Word order: Subject + verb + object + time.',
      },
    },
    {
      type: 'translation',
      id: 'a1-pres-ire-09',
      source: 'Do you (plural) understand the grammar rule?',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Capite la regola grammaticale?',
        'Voi capite la regola grammaticale?',
        'Capite la regola di grammatica?',
      ],
      feedback: {
        explanation:
          '"You plural" = voi. "Capire" (to understand) is -isc- type, but voi uses the regular form: capite. "Grammar rule" = la regola grammaticale / la regola di grammatica.',
        modelAnswer: 'Capite la regola grammaticale?',
      },
    },
  ],
};
