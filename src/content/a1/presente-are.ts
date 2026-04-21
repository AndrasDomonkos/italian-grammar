import type { Lesson } from '../types';

export const presenteAre: Lesson = {
  slug: 'presente-are',
  title: 'Presente Indicativo: Verbi -ARE',
  level: 'a1',
  order: 7,
  explanation: {
    text: `## Presente Indicativo: Verbi in -ARE

Regular Italian verbs fall into three groups based on their infinitive ending: **-are**, **-ere**, and **-ire**. The **-are** group is the largest and most productive.

### How to Conjugate -ARE Verbs

Take the infinitive, remove **-are** to get the **stem**, then add the endings:

| Pronoun | Ending | Example (parlare → parl-) |
|---------|--------|--------------------------|
| io | -o | parlo |
| tu | -i | parli |
| lui/lei | -a | parla |
| noi | -iamo | parliamo |
| voi | -ate | parlate |
| loro | -ano | parlano |

### Common -ARE Verbs

*parlare* (to speak), *mangiare* (to eat), *lavorare* (to work), *abitare* (to live/reside), *studiare* (to study), *ascoltare* (to listen), *guardare* (to watch), *comprare* (to buy), *camminare* (to walk), *cantare* (to sing), *imparare* (to learn), *portare* (to carry/bring), *tornare* (to return), *chiamare* (to call).

### Special Spelling Rules

**Verbs in -care / -gare** add an **h** before -i endings to keep the hard sound:
*cercare* → *cerchi* (tu), *cercate* (voi) — never *cerci*
*pagare* → *paghi* (tu), *pagate* (voi)

**Verbs in -iare** drop the double -i:
*mangiare* → *mangi* (tu, NOT *mangii*), *mangia* (lui)
*studiare* → *studi* (tu), *studia* (lui), *studiamo* (noi — one i, not two)

### Present Tense Meaning

The Italian present tense translates three English forms:
*Parlo italiano.* = I speak / I am speaking / I do speak Italian.`,
    tables: [
      {
        caption: 'parlare — Present Tense',
        headers: ['Pronoun', 'Form'],
        rows: [
          ['io', 'parlo'],
          ['tu', 'parli'],
          ['lui / lei', 'parla'],
          ['noi', 'parliamo'],
          ['voi', 'parlate'],
          ['loro', 'parlano'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "parlare", translation: "to speak", example: "Io parlo italiano ogni giorno.", exampleTranslation: "I speak Italian every day." },
    { word: "mangiare", translation: "to eat", example: "Noi mangiamo la pizza a cena.", exampleTranslation: "We eat pizza for dinner." },
    { word: "lavorare", translation: "to work", example: "Lei lavora in un ufficio.", exampleTranslation: "She works in an office." },
    { word: "ascoltare", translation: "to listen", example: "Lui ascolta la musica classica.", exampleTranslation: "He listens to classical music." },
    { word: "camminare", translation: "to walk", example: "Camminiamo nel parco insieme.", exampleTranslation: "We walk in the park together." },
    { word: "comprare", translation: "to buy", example: "Compro il pane al supermercato.", exampleTranslation: "I buy bread at the supermarket." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-pres-are-01',
      prompt: 'Maria ___ il francese molto bene. (Maria speaks French very well.)',
      answer: 'parla',
      feedback: {
        correct: 'Esatto! "Parla" is the 3rd person singular.',
        incorrect: 'The correct answer is "parla".',
        explanation:
          '"Maria" is 3rd person singular (lui/lei). The -are ending for 3rd person singular is -a: parl- + -a = parla.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-pres-are-02',
      prompt: 'Dove ___ (tu)? A Milano o a Roma? (Where do you live? In Milan or Rome?)',
      answer: 'abiti',
      hint: 'abitare = to live/reside. tu = 2nd person singular.',
      feedback: {
        correct: 'Perfetto! "Abiti" is the 2nd person singular.',
        incorrect: 'The correct answer is "abiti".',
        explanation:
          '"Tu" takes -i ending: abit- + -i = abiti. The subject pronoun "tu" is often omitted in Italian since the verb ending indicates the person.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-pres-are-03',
      prompt: 'Noi ___ in un ristorante stasera. (We are eating at a restaurant tonight.)',
      answer: 'mangiamo',
      hint: 'mangiare → drop -iare, add -iamo.',
      feedback: {
        correct: 'Bravo/a! "Mangiamo" is correct.',
        incorrect: 'The correct answer is "mangiamo".',
        explanation:
          '"Mangiare" ends in -iare. For noi, the ending is -iamo, giving "mangiamo" (not "mangiiamo" — no double i). The stem is mangi- and we add -amo: mangi + amo = mangiamo.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-pres-are-04',
      question: 'Choose the correct form of "cercare" (to look for) for "tu":',
      options: [
        { value: 'cerci', label: 'cerci' },
        { value: 'cerchi', label: 'cerchi' },
        { value: 'cerca', label: 'cerca' },
        { value: 'cercate', label: 'cercate' },
      ],
      answer: 'cerchi',
      feedback: {
        correct: 'Esatto! "Cerchi" preserves the hard /k/ sound.',
        incorrect: 'The correct answer is "cerchi".',
        explanation:
          '"Cercare" ends in -care. Before the -i ending of "tu", an h is inserted: cerca- + h + i = cerchi. Without the h, "cerci" would be pronounced /tʃertʃi/ (different sound). Same rule for pagare → paghi.',
        optionExplanations: {
          cerci: '"Cerci" would be pronounced with a soft /tʃ/ sound (like "ch" in church) — wrong. The h in "cerchi" preserves the hard /k/ sound of the infinitive.',
          cerca: '"Cerca" is the 3rd person singular (lui/lei cerca). The question asks for "tu".',
          cercate: '"Cercate" is the 2nd person plural (voi). The question asks for "tu" (singular).',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-pres-are-05',
      question: 'What does "Lavorano in un ospedale" mean?',
      options: [
        { value: 'a', label: 'We work in a hospital.' },
        { value: 'b', label: 'They work in a hospital.' },
        { value: 'c', label: 'You all work in a hospital.' },
        { value: 'd', label: 'He works in a hospital.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Lavorano" is the 3rd person plural.',
        incorrect: 'The correct answer is "They work in a hospital."',
        explanation:
          'The -ano ending signals 3rd person plural (loro). Lavorano = they work. The -iamo ending is "we work" (lavoriamo), -ate is "you all work" (lavorate), -a is "he/she works" (lavora).',
        optionExplanations: {
          a: '"Lavoriamo" (with -iamo) means "we work". "-ano" is the 3rd person plural, not 1st person plural.',
          c: '"Lavorate" (with -ate) means "you all work". "-ano" is loro (they), not voi (you all).',
          d: '"Lavora" (with -a) means "he/she works". "-ano" is the plural form.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-pres-are-06',
      verb: 'lavorare',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['lavoro', 'lavori', 'lavora', 'lavoriamo', 'lavorate', 'lavorano'],
      feedback: {
        explanation:
          'The -are present tense endings: -o / -i / -a / -iamo / -ate / -ano. The stem is lavorare → lavor-. Apply the endings: lavoro, lavori, lavora, lavoriamo, lavorate, lavorano.',
      },
    },
    {
      type: 'match',
      id: 'a1-pres-are-07',
      instruction: 'Match each subject pronoun with the correct form of "guardare" (to watch).',
      pairs: [
        { left: 'io', right: 'guardo' },
        { left: 'tu', right: 'guardi' },
        { left: 'lui/lei', right: 'guarda' },
        { left: 'noi', right: 'guardiamo' },
        { left: 'voi', right: 'guardate' },
        { left: 'loro', right: 'guardano' },
      ],
      feedback: {
        explanation:
          '"Guardare" ends in -are (stem: guard-). All -are verbs follow the same ending pattern. The "i" in "guardiamo" and "guardate" is part of the stem, not the ending.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-pres-are-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['italiano', 'studio', 'ogni', 'Io', 'giorno'],
      answer: ['Io', 'studio', 'italiano', 'ogni', 'giorno'],
      feedback: {
        correct: 'Perfetto! "Io studio italiano ogni giorno."',
        explanation:
          '"Studio" is the 1st person singular of "studiare" (io + -o → studio; -iare verb, no double i). Word order: Subject + verb + object + time expression. The subject pronoun "io" can be omitted in natural speech.',
      },
    },
    {
      type: 'translation',
      id: 'a1-pres-are-09',
      source: 'We listen to music and sing every evening.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Ascoltiamo musica e cantiamo ogni sera.',
        'Noi ascoltiamo musica e cantiamo ogni sera.',
        'Ascoltiamo la musica e cantiamo ogni sera.',
      ],
      feedback: {
        explanation:
          '"We listen" = ascoltiamo (ascoltare, noi, -iamo). "We sing" = cantiamo (cantare, noi, -iamo). Both are regular -are verbs. "Every evening" = ogni sera.',
        modelAnswer: 'Ascoltiamo musica e cantiamo ogni sera.',
      },
    },
  ],
};
