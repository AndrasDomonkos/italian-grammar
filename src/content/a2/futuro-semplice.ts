import type { Lesson } from '../types';

export const futuroSemplice: Lesson = {
  slug: 'futuro-semplice',
  title: 'Futuro Semplice',
  level: 'a2',
  order: 5,
  explanation: {
    text: `## Il Futuro Semplice (The Simple Future)

The **futuro semplice** expresses future actions, predictions, and polite probability/supposition.

### Regular Formation

For **-are** and **-ere** verbs, drop the final -e from the infinitive and add endings.
For **-ire** verbs, drop the final -e and add the same endings.

**Note:** -are verbs change the 'a' of the infinitive to 'e': parl**a**re → parler-

| Person | -are (parlare) | -ere (scrivere) | -ire (dormire) |
|--------|----------------|-----------------|----------------|
| io | parlerò | scriverò | dormirò |
| tu | parlerai | scriverai | dormirai |
| lui/lei | parlerà | scriverà | dormirà |
| noi | parleremo | scriveremo | dormiremo |
| voi | parlerete | scriverete | dormirete |
| loro | parleranno | scriveranno | dormiranno |

### Irregular Future Stems

These verbs have irregular stems but use the **same endings**:

| Infinitive | Future stem | Example |
|------------|-------------|---------|
| essere | sar- | sarò, sarai… |
| avere | avr- | avrò, avrai… |
| andare | andr- | andrò, andrai… |
| venire | verr- | verrò, verrai… |
| fare | far- | farò, farai… |
| dire | dir- | dirò, dirai… |
| potere | potr- | potrò, potrai… |
| volere | vorr- | vorrò, vorrai… |
| dovere | dovr- | dovrò, dovrai… |
| sapere | sapr- | saprò, saprai… |

### Uses of the Future

1. **Future plans/predictions:** *Domani andrò al mercato.*
2. **Probability/supposition (present):** *Saranno le tre.* (It must be about 3 o'clock.)
3. **After quando/se with future meaning:** *Quando arriverai, ti chiamo.* (When you arrive, I'll call you.)`,
    tables: [
      {
        caption: 'Futuro Semplice — Key Irregular Stems',
        headers: ['Infinitive', 'Stem', 'io form', 'loro form'],
        rows: [
          ['essere', 'sar-', 'sarò', 'saranno'],
          ['avere', 'avr-', 'avrò', 'avranno'],
          ['andare', 'andr-', 'andrò', 'andranno'],
          ['venire', 'verr-', 'verrò', 'verranno'],
          ['fare', 'far-', 'farò', 'faranno'],
          ['potere', 'potr-', 'potrò', 'potranno'],
          ['volere', 'vorr-', 'vorrò', 'vorranno'],
          ['dovere', 'dovr-', 'dovrò', 'dovranno'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "parlero", translation: "I will speak", example: "Domani parlero con il direttore.", exampleTranslation: "Tomorrow I will speak with the director." },
    { word: "arrivera", translation: "he/she will arrive", example: "Il treno arrivera alle tre in punto.", exampleTranslation: "The train will arrive at three o'clock sharp." },
    { word: "andremo", translation: "we will go", example: "Quest'estate andremo in Sicilia.", exampleTranslation: "This summer we will go to Sicily." },
    { word: "sara", translation: "he/she/it will be", example: "Domani sara una bella giornata.", exampleTranslation: "Tomorrow will be a beautiful day." },
    { word: "avranno", translation: "they will have", example: "I bambini avranno una sorpresa.", exampleTranslation: "The children will have a surprise." },
    { word: "finira", translation: "it will finish", example: "Il film finira verso le undici.", exampleTranslation: "The film will finish around eleven." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-fut-01',
      prompt: 'Domani ___ (io, andare) in biblioteca. (Tomorrow I will go to the library.)',
      answer: 'andrò',
      hint: 'andare has an irregular future stem: andr-',
      feedback: {
        correct: 'Esatto! "Andrò" — irregular future of andare, io form.',
        incorrect: 'The correct answer is "andrò".',
        explanation:
          '"Andare" → irregular stem andr- + -ò (io): andrò. Note the grave accent on -ò for io. "Domani" (tomorrow) signals future tense.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-fut-02',
      prompt: 'Il concerto ___ (iniziare) alle otto. (The concert will start at eight.)',
      answer: 'inizierà',
      feedback: {
        correct: 'Perfetto! "Inizierà" — regular future, lui/lei form.',
        incorrect: 'The correct answer is "inizierà".',
        explanation:
          '"Iniziare" is regular: drop -are, change a→e: inizier- + -à (lui/lei) = inizierà. The accent on -à indicates 3rd person singular.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-fut-03',
      prompt: 'Quando ___ (tu, arrivare) a casa, chiamami! (When you arrive home, call me!)',
      answer: 'arriverai',
      hint: 'In Italian, use the future after "quando" when the main clause is also future.',
      feedback: {
        correct: 'Bravo/a! "Arriverai" — Italian uses future after quando (unlike English).',
        incorrect: 'The correct answer is "arriverai".',
        explanation:
          'Italian uses the future tense after "quando" if the main clause is future: "Quando arriverai… chiamami." English uses present ("when you arrive"), but Italian uses future. Arrivare → arriver- + -ai (tu).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-fut-04',
      question: 'What does "Saranno le cinque" most likely mean?',
      options: [
        { value: 'a', label: 'It will be five o\'clock (prediction about the future).' },
        { value: 'b', label: 'It must be about five o\'clock (probability about now).' },
        { value: 'c', label: 'It was five o\'clock.' },
        { value: 'd', label: 'They will be five people.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! The future of probability: "it must be / it\'s probably five o\'clock."',
        incorrect: 'The correct answer is option (b) — probability about the present.',
        explanation:
          'The futuro semplice is used for "probability/supposition" about the present: "Saranno le cinque" = it must be (about) five o\'clock. This is a common Italian use with no direct English equivalent — English says "must be" but Italian uses the future.',
        optionExplanations: {
          a: 'This interpretation is possible in context (e.g., "it will be five o\'clock when the train arrives"), but the most common use of bare "saranno le cinque" is probability.',
          c: 'Past meaning would use era (imperfetto) or sono state.',
          d: 'Technically possible grammar but not the idiomatic reading here.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-fut-05',
      question: 'Choose the correct future: "We will have to study a lot."',
      options: [
        { value: 'a', label: 'Dovremo studiare molto.' },
        { value: 'b', label: 'Dovremmo studiare molto.' },
        { value: 'c', label: 'Dovremo studieremo molto.' },
        { value: 'd', label: 'Avremmo da studiare molto.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Dovremo" — futuro semplice of dovere, noi form.',
        incorrect: 'The correct answer is "Dovremo studiare molto."',
        explanation:
          '"Dovere" → irregular stem: dovr- + -emo (noi) = dovremo. Followed by infinitive studiare. Only "dovere" goes in the future; the dependent verb stays as infinitive.',
        optionExplanations: {
          b: '"Dovremmo" = conditional (we should/would have to) — not future.',
          c: 'You cannot conjugate both modal and dependent verb: "dovremo studieremo" is wrong.',
          d: '"Avremmo da" is not a standard Italian construction.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-fut-06',
      verb: 'venire (irregular future: verr-)',
      tense: 'Futuro Semplice',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['verrò', 'verrai', 'verrà', 'verremo', 'verrete', 'verranno'],
      feedback: {
        explanation:
          '"Venire" has the irregular stem verr- (double r). Add the regular future endings: -ò/-ai/-à/-emo/-ete/-anno. Note the grave accents on verrò (io) and verrà (lui/lei) to mark stress. Same ending pattern as all future tenses.',
      },
    },
    {
      type: 'match',
      id: 'a2-fut-07',
      instruction: 'Match each future form with its infinitive + person.',
      pairs: [
        { left: 'faremo', right: 'fare — noi' },
        { left: 'saprai', right: 'sapere — tu' },
        { left: 'vorranno', right: 'volere — loro' },
        { left: 'sarà', right: 'essere — lui/lei' },
        { left: 'potrò', right: 'potere — io' },
      ],
      feedback: {
        explanation:
          'All irregular stems: far- (fare), sapr- (sapere), vorr- (volere), sar- (essere), potr- (potere). Endings: -emo (noi), -ai (tu), -anno (loro), -à (lui/lei), -ò (io). The endings are identical for all verbs — only stems differ.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-fut-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['a', 'parleremo', 'del', 'domani', 'Noi', 'problema'],
      answer: ['Noi', 'parleremo', 'del', 'problema', 'domani'],
      feedback: {
        correct: 'Perfetto! "Noi parleremo del problema domani."',
        explanation:
          '"Parleremo" = futuro semplice of parlare, noi form (parler- + -emo). "Del problema" = di + il + problema (contracted: del). "Domani" (tomorrow) = time expression, typically at end.',
      },
    },
    {
      type: 'translation',
      id: 'a2-fut-09',
      source: 'Next year Marco will move to Paris and will study French.',
      direction: 'en-to-it',
      acceptedAnswers: [
        "L'anno prossimo Marco si trasferirà a Parigi e studierà il francese.",
        "L'anno prossimo Marco si trasferirà a Parigi e studierà francese.",
      ],
      feedback: {
        explanation:
          '"Next year" = l\'anno prossimo. "Will move" = si trasferirà (trasferirsi, reflexive, futuro: trasferi- drop -e + -rà). "Will study" = studierà (studiare, regular: studier- + -à). Both are 3rd person singular (lui).',
        modelAnswer: "L'anno prossimo Marco si trasferirà a Parigi e studierà il francese.",
      },
    },
  ],
};
