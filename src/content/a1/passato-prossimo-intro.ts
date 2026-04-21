import type { Lesson } from '../types';

export const passatoProssimoIntro: Lesson = {
  slug: 'passato-prossimo-intro',
  title: 'Passato Prossimo con Avere',
  level: 'a1',
  order: 18,
  explanation: {
    text: `## Passato Prossimo con Avere (Present Perfect with Avere)

The **passato prossimo** is the most common past tense in spoken Italian. It expresses completed actions. In this lesson we focus on verbs that form it with **avere** (transitive verbs that can have a direct object).

### Structure

**Presente di avere + participio passato**

*ho mangiato* (I ate / I have eaten), *hai studiato* (you studied), *ha lavorato* (he worked)

### Regular Participles

Remove the infinitive ending and add:

| Infinitive ending | Participio passato | Example |
|---|---|---|
| -are | **-ato** | parlare → parlato |
| -ere | **-uto** | credere → creduto |
| -ire | **-ito** | dormire → dormito |

### Common Irregular Participles

These must be memorised:

| Infinitive | Participio |
|---|---|
| fare | fatto |
| dire | detto |
| scrivere | scritto |
| leggere | letto |
| vedere | visto |
| prendere | preso |
| aprire | aperto |
| chiudere | chiuso |
| mettere | messo |
| bere | bevuto |
| chiedere | chiesto |
| rispondere | risposto |

### Agreement

With **avere**, the participle **does not** agree with the subject:
*Marco ha mangiato. / Anna ha mangiato.* (same form)

### Common Time Expressions

*ieri* (yesterday), *ieri sera* (last night), *stamattina* (this morning), *la settimana scorsa* (last week), *l'anno scorso* (last year), *due giorni fa* (two days ago), *già* (already), *ancora non* (not yet), *appena* (just).`,
    tables: [
      {
        caption: 'Passato Prossimo di mangiare',
        headers: ['Pronoun', 'Avere', 'Participio', 'Together'],
        rows: [
          ['io', 'ho', 'mangiato', 'ho mangiato'],
          ['tu', 'hai', 'mangiato', 'hai mangiato'],
          ['lui/lei', 'ha', 'mangiato', 'ha mangiato'],
          ['noi', 'abbiamo', 'mangiato', 'abbiamo mangiato'],
          ['voi', 'avete', 'mangiato', 'avete mangiato'],
          ['loro', 'hanno', 'mangiato', 'hanno mangiato'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "ho mangiato", translation: "I ate", example: "Ho mangiato una buona pizza ieri sera.", exampleTranslation: "I ate a good pizza yesterday evening." },
    { word: "hai dormito", translation: "you slept", example: "Hai dormito bene stanotte?", exampleTranslation: "Did you sleep well last night?" },
    { word: "ha lavorato", translation: "he/she worked", example: "Ha lavorato tutto il giorno senza pausa.", exampleTranslation: "He worked all day without a break." },
    { word: "abbiamo visto", translation: "we saw", example: "Abbiamo visto un bel film ieri.", exampleTranslation: "We saw a good film yesterday." },
    { word: "avete finito", translation: "you (pl.) finished", example: "Avete finito i compiti per domani?", exampleTranslation: "Have you finished the homework for tomorrow?" },
    { word: "hanno scritto", translation: "they wrote", example: "Hanno scritto una lettera al direttore.", exampleTranslation: "They wrote a letter to the director." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-pp-01',
      prompt: 'Ieri sera io ___ una pizza buonissima. (Last night I ate a delicious pizza.) — mangiare',
      answer: 'ho mangiato',
      feedback: {
        correct: 'Perfetto! "Ho mangiato" is correct.',
        incorrect: 'The correct answer is "ho mangiato".',
        explanation:
          '"Mangiare" is a regular -are verb. Participio: mang- + -iato? No — remove -are and add -ato: mang → mangiato. Wait: mangi + ato = mangiato? Stem of mangiare = mangi-: mangiat-o. Ho (io) + mangiato = ho mangiato.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-pp-02',
      prompt: 'Marco ___ tre caffè questa mattina. (Marco drank three coffees this morning.) — bere',
      answer: 'ha bevuto',
      hint: 'bere → bevuto (irregular participio).',
      feedback: {
        correct: 'Esatto! "Ha bevuto" is correct.',
        incorrect: 'The correct answer is "ha bevuto".',
        explanation:
          '"Bere" has an irregular participle: bevuto (not *berto* or *buto*). "Marco" = 3rd person singular → ha. Ha + bevuto = ha bevuto.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-pp-03',
      prompt: 'Voi ___ già la pizza? (Have you all already eaten pizza?) — mangiare',
      answer: 'avete mangiato',
      feedback: {
        correct: 'Bravo/a! "Avete mangiato" is correct.',
        incorrect: 'The correct answer is "avete mangiato".',
        explanation:
          '"Voi" → avete. Participio of mangiare = mangiato. "Già" (already) comes between the auxiliary and the participle or after: avete già mangiato / avete mangiato già.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-pp-04',
      question: 'Choose the correct participle of "scrivere":',
      options: [
        { value: 'scritto', label: 'ho scritto' },
        { value: 'scrivuto', label: 'ho scrivuto' },
        { value: 'scrivo', label: 'ho scrivo' },
        { value: 'scrivato', label: 'ho scrivato' },
      ],
      answer: 'scritto',
      feedback: {
        correct: 'Corretto! "Scritto" is the irregular participle of scrivere.',
        incorrect: 'The correct answer is "ho scritto".',
        explanation:
          '"Scrivere" has an irregular participle: scritto. Many -ere verbs with -tt- participles follow a pattern: scrivere → scritto, dettare → detto (dire), mettere → messo, leggere → letto.',
        optionExplanations: {
          scrivuto: 'This would be the regular -uto form, but "scrivere" is irregular. Its participle is "scritto".',
          scrivo: '"Scrivo" is the present tense, 1st person singular — not a participle.',
          scrivato: 'This would be the -ato participle form, which applies to -are verbs, not -ere verbs.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-pp-05',
      question: 'Which sentence correctly uses the passato prossimo?',
      options: [
        { value: 'a', label: 'Ieri ho fatto colazione alle sette.' },
        { value: 'b', label: 'Ieri ho fato colazione alle sette.' },
        { value: 'c', label: 'Ieri avevo fatto colazione alle sette.' },
        { value: 'd', label: 'Ieri facevo colazione alle sette.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Ho fatto colazione" — fare → fatto.',
        incorrect: 'The correct answer is "Ieri ho fatto colazione alle sette."',
        explanation:
          '"Fare" has the irregular participle "fatto". "Ho fatto colazione" = I had breakfast. "Ieri" (yesterday) + passato prossimo is the standard combination for a completed past action.',
        optionExplanations: {
          b: '"Ho fato" is a spelling error — the participle of fare is "fatto" (double t).',
          c: '"Avevo fatto" is the trapassato prossimo (pluperfect) — used for actions completed before another past action, not a simple past narrative.',
          d: '"Facevo" is the imperfect — used for habitual/ongoing past actions. "Ogni giorno facevo colazione" (I used to have breakfast every day) would be fine, but with "ieri" the passato prossimo is more natural.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-pp-06',
      verb: 'leggere (irregular: letto)',
      tense: 'Passato Prossimo — ho/hai/ha/abbiamo/avete/hanno + letto',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['ho letto', 'hai letto', 'ha letto', 'abbiamo letto', 'avete letto', 'hanno letto'],
      feedback: {
        explanation:
          '"Leggere" → irregular participle "letto". The auxiliary avere conjugates normally: ho/hai/ha/abbiamo/avete/hanno. The participle stays fixed: letto. This is because there is no direct object pronoun preceding it.',
      },
    },
    {
      type: 'match',
      id: 'a1-pp-07',
      instruction: 'Match each infinitive with its correct participio passato.',
      pairs: [
        { left: 'fare', right: 'fatto' },
        { left: 'vedere', right: 'visto' },
        { left: 'aprire', right: 'aperto' },
        { left: 'prendere', right: 'preso' },
        { left: 'chiedere', right: 'chiesto' },
        { left: 'rispondere', right: 'risposto' },
      ],
      feedback: {
        explanation:
          'Six irregular -ere/-ire participles to memorise: fatto (fare), visto (vedere), aperto (aprire), preso (prendere), chiesto (chiedere), risposto (rispondere). Pattern: many end in -to or -so.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-pp-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['un', 'scorsa', 'Ho', 'bel', 'letto', 'libro', 'settimana', 'la'],
      answer: ['Ho', 'letto', 'un', 'bel', 'libro', 'la', 'settimana', 'scorsa'],
      feedback: {
        correct: 'Perfetto! "Ho letto un bel libro la settimana scorsa."',
        explanation:
          '"Ho letto" = passato prossimo of leggere (irregular: letto). "Un bel libro" = a nice book (bello before masc. sing. noun → bel). "La settimana scorsa" = last week (time expression at the end).',
      },
    },
    {
      type: 'translation',
      id: 'a1-pp-09',
      source: 'Yesterday we watched a film and then we drank a coffee.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Ieri abbiamo guardato un film e poi abbiamo bevuto un caffè.',
        'Ieri abbiamo visto un film e poi abbiamo bevuto un caffè.',
        'Ieri abbiamo guardato un film e poi abbiamo preso un caffè.',
      ],
      feedback: {
        explanation:
          '"We watched" = abbiamo guardato (guardare → guardato, regular -are). Or: abbiamo visto (vedere → visto). "We drank" = abbiamo bevuto (bere → bevuto, irregular). "Then" = poi.',
        modelAnswer: 'Ieri abbiamo guardato un film e poi abbiamo bevuto un caffè.',
      },
    },
  ],
};
