import type { Lesson } from '../types';

export const presenteEre: Lesson = {
  slug: 'presente-ere',
  title: 'Presente Indicativo: Verbi -ERE',
  level: 'a1',
  order: 8,
  explanation: {
    text: `## Presente Indicativo: Verbi in -ERE

The **-ere** group is the second conjugation. The endings are slightly different from -are verbs — note especially the **noi** form (-iamo is the same) and the **voi** form (-ete instead of -ate).

### How to Conjugate -ERE Verbs

Remove **-ere** to get the stem, then add:

| Pronoun | Ending | Example (scrivere → scriv-) |
|---------|--------|---------------------------|
| io | -o | scrivo |
| tu | -i | scrivi |
| lui/lei | -e | scrive |
| noi | -iamo | scriviamo |
| voi | -ete | scrivete |
| loro | -ono | scrivono |

Key differences from -are: 3rd sing. is **-e** (not -a), voi is **-ete** (not -ate), loro is **-ono** (not -ano).

### Common -ERE Verbs

*scrivere* (to write), *leggere* (to read), *vedere* (to see), *credere* (to believe), *ricevere* (to receive), *vendere* (to sell), *rispondere* (to answer), *prendere* (to take), *chiudere* (to close), *aprire* → wait, that's -ire. *correre* (to run), *vivere* (to live), *decidere* (to decide), *perdere* (to lose), *chiedere* (to ask).

### Stress Pattern

In -ere verbs, the stress in the **loro** form falls on the **stem**, not the ending: *SCRIvono*, *VEdono*, *LEGgono*. This is different from -are verbs where the stress is also on the stem: *PARlano*.

### -ERE vs. -ARE Comparison

| Pronoun | -ARE (parlare) | -ERE (scrivere) |
|---------|---------------|-----------------|
| io | parlo | scrivo |
| tu | parli | scrivi |
| lui | parla | **scrive** |
| noi | parliamo | scriviamo |
| voi | parlate | **scrivete** |
| loro | parlano | **scrivono** |

The three bolded forms are different between -are and -ere.`,
    tables: [
      {
        caption: 'scrivere — Present Tense',
        headers: ['Pronoun', 'Form'],
        rows: [
          ['io', 'scrivo'],
          ['tu', 'scrivi'],
          ['lui / lei', 'scrive'],
          ['noi', 'scriviamo'],
          ['voi', 'scrivete'],
          ['loro', 'scrivono'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "leggere", translation: "to read", example: "Leggo un libro interessante.", exampleTranslation: "I read an interesting book." },
    { word: "scrivere", translation: "to write", example: "Scrivi una lettera alla nonna.", exampleTranslation: "You write a letter to grandma." },
    { word: "vedere", translation: "to see", example: "Vediamo il mare dalla finestra.", exampleTranslation: "We see the sea from the window." },
    { word: "prendere", translation: "to take", example: "Prendo un caffe al bar.", exampleTranslation: "I take a coffee at the bar." },
    { word: "credere", translation: "to believe", example: "Credo che sia vero.", exampleTranslation: "I believe that it is true." },
    { word: "chiedere", translation: "to ask", example: "Chiedo informazioni alla reception.", exampleTranslation: "I ask for information at the reception." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-pres-ere-01',
      prompt: 'Ogni mattina io ___ il giornale. (Every morning I read the newspaper.)',
      answer: 'leggo',
      hint: 'leggere (to read): irregular in io form — leggo, not *leggo*.',
      feedback: {
        correct: 'Perfetto! "Leggo" is correct.',
        incorrect: 'The correct answer is "leggo".',
        explanation:
          '"Leggere" is a common -ere verb. The io form follows the regular -o ending: legg- + o = leggo. Note the double g is part of the stem (legg-), preserved in all forms: leggo, leggi, legge, leggiamo, leggete, leggono.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-pres-ere-02',
      prompt: 'Voi ___ il bus alle otto. (You all take the bus at eight.)',
      answer: 'prendete',
      hint: 'prendere = to take; voi ending is -ete.',
      feedback: {
        correct: 'Esatto! "Prendete" is the voi form.',
        incorrect: 'The correct answer is "prendete".',
        explanation:
          'For voi, -ere verbs take -ete: prend- + -ete = prendete. This is one of the key differences from -are verbs, which use -ate for voi: parlate vs. prendete.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-pres-ere-03',
      prompt: 'Marco ___ molte email al giorno. (Marco writes many emails a day.)',
      answer: 'scrive',
      feedback: {
        correct: 'Bravo/a! "Scrive" is correct.',
        incorrect: 'The correct answer is "scrive".',
        explanation:
          'The 3rd person singular of -ere verbs ends in -e: scriv- + -e = scrive. Compare -are: parla (ends in -a). This is another key difference between the two conjugations.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-pres-ere-04',
      question: 'Which form of "rispondere" (to answer) goes with "loro"?',
      options: [
        { value: 'rispondono', label: 'rispondono' },
        { value: 'rispondano', label: 'rispondano' },
        { value: 'rispondete', label: 'rispondete' },
        { value: 'rispondono', label: 'risponde' },
      ],
      answer: 'rispondono',
      feedback: {
        correct: 'Corretto! "Rispondono" is the loro form.',
        incorrect: 'The correct answer is "rispondono".',
        explanation:
          'The loro form of -ere verbs ends in -ono: rispond- + -ono = rispondono. Compare -are: parlano (ends in -ano). The -ono vs. -ano difference helps you identify the conjugation group.',
        optionExplanations: {
          rispondano: '"Rispondano" is the 3rd person plural of the SUBJUNCTIVE mood (congiuntivo), not the indicative. Here we need the indicative present: rispondono.',
          rispondete: '"Rispondete" is the voi (you plural) form. The question asks for "loro" (they).',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-pres-ere-05',
      question: 'Complete: "Lucia e Carlo ___ a Roma." (Lucia and Carlo live in Rome.) — vivere',
      options: [
        { value: 'vivono', label: 'vivono' },
        { value: 'vivano', label: 'vivano' },
        { value: 'vivete', label: 'vivete' },
        { value: 'viviamo', label: 'viviamo' },
      ],
      answer: 'vivono',
      feedback: {
        correct: 'Esatto! "Vivono" is the 3rd person plural of vivere.',
        incorrect: 'The correct answer is "vivono".',
        explanation:
          '"Lucia e Carlo" is a 3rd person plural subject (= loro). "Vivere" is an -ere verb: viv- + -ono = vivono. This is the indicative present.',
        optionExplanations: {
          vivano: '"Vivano" would be the congiuntivo (subjunctive) form — not used here. Indicative: vivono.',
          vivete: '"Vivete" is the voi (you plural) form, not the 3rd person plural.',
          viviamo: '"Viviamo" is the noi (we) form: viv- + -iamo = viviamo.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-pres-ere-06',
      verb: 'vedere',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['vedo', 'vedi', 'vede', 'vediamo', 'vedete', 'vedono'],
      feedback: {
        explanation:
          '-ere endings: -o / -i / -e / -iamo / -ete / -ono. Stem: ved-. The noi -iamo ending is the same as -are verbs. The distinctive forms are 3rd sing. (-e), voi (-ete), and loro (-ono).',
      },
    },
    {
      type: 'match',
      id: 'a1-pres-ere-07',
      instruction: 'Match each pronoun with the correct form of "leggere" (to read).',
      pairs: [
        { left: 'io', right: 'leggo' },
        { left: 'tu', right: 'leggi' },
        { left: 'lui/lei', right: 'legge' },
        { left: 'noi', right: 'leggiamo' },
        { left: 'voi', right: 'leggete' },
        { left: 'loro', right: 'leggono' },
      ],
      feedback: {
        explanation:
          '"Leggere" follows the regular -ere pattern (stem: legg-). The double g in "leggo, leggi, legge..." is part of the stem, not a spelling change. All regular -ere verbs work the same way.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-pres-ere-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['risponde', 'al', 'Non', 'telefono', 'mai'],
      answer: ['Non', 'risponde', 'mai', 'al', 'telefono'],
      feedback: {
        correct: 'Perfetto! "Non risponde mai al telefono."',
        explanation:
          '"Risponde" is the 3rd person singular of "rispondere" (lui/lei). "Mai" (never) typically comes after the verb in negations. "Al telefono" = "al" is a preposition + article contraction (a + il = al).',
      },
    },
    {
      type: 'translation',
      id: 'a1-pres-ere-09',
      source: 'Do you (singular, informal) believe everything you read?',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Credi tutto quello che leggi?',
        'Credi a tutto quello che leggi?',
        'Tu credi tutto quello che leggi?',
      ],
      feedback: {
        explanation:
          '"Credere" (to believe): tu → credi. "Leggere" (to read): tu → leggi. "Everything you read" = tutto quello che leggi. Note the -ere verb endings: -i for tu in both credere and leggere.',
        modelAnswer: 'Credi tutto quello che leggi?',
      },
    },
  ],
};
