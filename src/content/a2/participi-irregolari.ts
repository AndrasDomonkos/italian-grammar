import type { Lesson } from '../types';

export const participiIrregolari: Lesson = {
  slug: 'participi-irregolari',
  title: 'Participi Passati Irregolari',
  level: 'a2',
  order: 2,
  explanation: {
    text: `## Participi Passati Irregolari (Irregular Past Participles)

Many common Italian verbs have irregular past participles that must be memorised. They do **not** follow the regular -ato/-uto/-ito pattern.

### Patterns to Notice

Many irregular participles end in **-to**, **-so**, or **-sto**:

**-tto group:**
*fare → fatto*, *dire → detto*, *scrivere → scritto*, *leggere → letto*, *mettere → messo* (note: -sso)

**-rto / -lto group:**
*aprire → aperto*, *offrire → offerto*, *coprire → coperto*, *scegliere → scelto*, *raccogliere → raccolto*, *togliere → tolto*

**-so group:**
*prendere → preso*, *accendere → acceso*, *perdere → perso*, *rispondere → risposto*, *chiudere → chiuso*, *decidere → deciso*

**-sto group:**
*rimanere → rimasto*, *chiedere → chiesto*, *vedere → visto* (also veduto)

**-to irregular stems:**
*venire → venuto*, *tenere → tenuto*, *vivere → vissuto*, *rompere → rotto*, *correre → corso*, *nascere → nato*, *morire → morto*, *essere → stato*

### Why It Matters

The participle is the unchanging core in **avere** sentences, but **agrees with subject** in **essere** sentences. With pronouns, the participle agrees with the object:
*Li ho visti.* (I saw them — masc. plur.)
*Le ho lette.* (I read them — fem. plur.)`,
    tables: [
      {
        caption: 'Key Irregular Participles',
        headers: ['Infinitive', 'Participio', 'Group'],
        rows: [
          ['fare', 'fatto', '-tto'],
          ['dire', 'detto', '-tto'],
          ['scrivere', 'scritto', '-tto'],
          ['leggere', 'letto', '-tto'],
          ['aprire', 'aperto', '-rto'],
          ['scegliere', 'scelto', '-lto'],
          ['prendere', 'preso', '-so'],
          ['chiudere', 'chiuso', '-so'],
          ['decidere', 'deciso', '-so'],
          ['rimanere', 'rimasto', '-sto'],
          ['chiedere', 'chiesto', '-sto'],
          ['vivere', 'vissuto', 'irregular stem'],
          ['rompere', 'rotto', 'double -tt-'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "fatto", translation: "done / made", example: "Ho fatto i compiti dopo cena.", exampleTranslation: "I did the homework after dinner." },
    { word: "detto", translation: "said / told", example: "Ha detto la verita al professore.", exampleTranslation: "He told the truth to the teacher." },
    { word: "scritto", translation: "written", example: "Abbiamo scritto una email al direttore.", exampleTranslation: "We wrote an email to the director." },
    { word: "aperto", translation: "opened", example: "Ho aperto la finestra perche fa caldo.", exampleTranslation: "I opened the window because it is hot." },
    { word: "preso", translation: "taken", example: "Ha preso il treno delle otto.", exampleTranslation: "He took the eight o'clock train." },
    { word: "visto", translation: "seen", example: "Avete visto il nuovo film di Sorrentino?", exampleTranslation: "Have you seen the new Sorrentino film?" },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-part-01',
      prompt: 'Ho ___ la finestra perché faceva freddo. (I closed the window because it was cold.) — chiudere',
      answer: 'chiuso',
      feedback: {
        correct: 'Esatto! "Chiuso" is the irregular participle of chiudere.',
        incorrect: 'The correct answer is "chiuso".',
        explanation:
          '"Chiudere" → participio: chiuso (not *chiuduto*). It belongs to the -so group: chiudere → chiuso. Ho + chiuso = ho chiuso.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-part-02',
      prompt: 'Maria ha ___ di andare a Roma. (Maria decided to go to Rome.) — decidere',
      answer: 'deciso',
      feedback: {
        correct: 'Perfetto! "Deciso" is correct.',
        incorrect: 'The correct answer is "deciso".',
        explanation:
          '"Decidere" → deciso (-so group). Note the pattern: decidere → decis-o. Ha (lei) + deciso = ha deciso.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-part-03',
      prompt: 'I ragazzi hanno ___ tutta la notte. (The boys lived all night — i.e., lived it up.) — vivere',
      answer: 'vissuto',
      hint: 'vivere → vissuto (irregular stem, -uto ending).',
      feedback: {
        correct: 'Bravo/a! "Vissuto" is correct.',
        incorrect: 'The correct answer is "vissuto".',
        explanation:
          '"Vivere" → vissuto (irregular: stem changes viv- → viss-). Not *vivuto*. Hanno + vissuto = hanno vissuto.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-part-04',
      question: 'What is the correct participle of "scegliere"?',
      options: [
        { value: 'a', label: 'scegliuto' },
        { value: 'b', label: 'scelto' },
        { value: 'c', label: 'sceglito' },
        { value: 'd', label: 'scelso' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Scelto" — scegliere belongs to the -lto group.',
        incorrect: 'The correct answer is "scelto".',
        explanation:
          '"Scegliere" → scelto. The -lto group: scegliere → scelto, raccogliere → raccolto, togliere → tolto. The -gli- stem contracts to -lt-.',
        optionExplanations: {
          a: '"Scegliuto" applies the regular -uto ending — scegliere is irregular.',
          c: '"Sceglito" applies -ito — also wrong; scegliere is -ere class, not -ire.',
          d: '"Scelso" does not exist.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-part-05',
      question: 'Choose the sentence with the correct participle: "He broke the glass."',
      options: [
        { value: 'a', label: 'Ha romputo il bicchiere.' },
        { value: 'b', label: 'Ha rotto il bicchiere.' },
        { value: 'c', label: 'Ha romso il bicchiere.' },
        { value: 'd', label: 'Ha rompito il bicchiere.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Rotto" — rompere → rotto.',
        incorrect: 'The correct answer is "Ha rotto il bicchiere."',
        explanation:
          '"Rompere" → rotto (irregular, -tto pattern). Ha + rotto = ha rotto il bicchiere.',
        optionExplanations: {
          a: '"Romputo" applies the regular -uto ending — rompere is irregular.',
          c: '"Romso" does not exist.',
          d: '"Rompito" is not a word.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-part-06',
      verb: 'Irregular Participles',
      tense: 'Write the participio passato for each verb',
      pronouns: ['fare', 'dire', 'aprire', 'prendere', 'chiedere', 'correre'],
      answers: ['fatto', 'detto', 'aperto', 'preso', 'chiesto', 'corso'],
      feedback: {
        explanation:
          'Six key irregular participles: fatto (fare), detto (dire), aperto (aprire), preso (prendere), chiesto (chiedere), corso (correre). Each comes from a different pattern — these must be memorised individually.',
      },
    },
    {
      type: 'match',
      id: 'a2-part-07',
      instruction: 'Match each infinitive with its irregular participio passato.',
      pairs: [
        { left: 'scrivere', right: 'scritto' },
        { left: 'perdere', right: 'perso' },
        { left: 'offrire', right: 'offerto' },
        { left: 'accendere', right: 'acceso' },
        { left: 'rimanere', right: 'rimasto' },
      ],
      feedback: {
        explanation:
          'Patterns: scritto (-tto, scrivere), perso (-so, perdere), offerto (-rto, offrire), acceso (-so, accendere), rimasto (-sto, rimanere). "Accendere" and "perdere" share the -so ending despite different infinitives.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-part-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['hai', 'Dove', 'le', 'chiavi', 'messo'],
      answer: ['Dove', 'hai', 'messo', 'le', 'chiavi'],
      feedback: {
        correct: 'Perfetto! "Dove hai messo le chiavi?"',
        explanation:
          '"Mettere" → messo (irregular, -sso pattern). "Dove hai messo" = where did you put. "Le chiavi" = the keys (fem. plur., definite article le). Question word "dove" comes first.',
      },
    },
    {
      type: 'translation',
      id: 'a2-part-09',
      source: 'I chose the red dress and she offered me a coffee.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Ho scelto il vestito rosso e lei mi ha offerto un caffè.',
        'Ho scelto l\'abito rosso e lei mi ha offerto un caffè.',
      ],
      feedback: {
        explanation:
          '"I chose" = ho scelto (scegliere → scelto). "She offered" = ha offerto (offrire → offerto). Both are irregular. "Dress" = vestito or abito. "Mi" = to me (indirect object pronoun before ha).',
        modelAnswer: 'Ho scelto il vestito rosso e lei mi ha offerto un caffè.',
      },
    },
  ],
};
