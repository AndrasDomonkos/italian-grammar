import type { Lesson } from '../types';

export const verbiIrregolariComuni: Lesson = {
  slug: 'verbi-irregolari-comuni',
  title: 'Verbi Irregolari Comuni',
  level: 'a1',
  order: 10,
  explanation: {
    text: `## Verbi Irregolari Comuni (Common Irregular Verbs)

Five extremely frequent Italian verbs are highly irregular in the present tense and must be memorised: **andare** (to go), **fare** (to do/make), **stare** (to stay/be), **dare** (to give), **venire** (to come).

### Andare (to go)

*vado, vai, va, andiamo, andate, vanno*

"Andare" is used for going to places: *Vado a scuola* (I go to school). Before masculine countries and cities: *Vado in Italia* (not *a Italia*). With means of transport: *Vado in macchina* (I go by car), *Vado a piedi* (I walk).

### Fare (to do / to make)

*faccio, fai, fa, facciamo, fate, fanno*

"Fare" is one of the most used verbs. Common expressions:
*fare colazione* (to have breakfast), *fare la spesa* (to go grocery shopping), *fare una passeggiata* (to take a walk), *fare le vacanze* (to go on holiday), *fare sport* (to do sport), *fare una domanda* (to ask a question), *fare attenzione* (to pay attention).

### Stare (to stay / to be — temporary state)

*sto, stai, sta, stiamo, state, stanno*

"Stare" expresses temporary states and health: *Come stai?* (How are you?), *Sto bene* (I'm fine). It also forms the progressive tense: *Sto studiando* (I'm studying — see A2 for more). Note: *stare* ≠ *essere* — essere expresses permanent traits/identity, stare expresses temporary states.

### Dare (to give)

*do, dai, dà, diamo, date, danno*

⚠️ *dà* (3rd person sing.) has a grave accent to distinguish it from the preposition *da* (from/by/since). Common: *dare un esame* (to take an exam), *dare del tu* (to address informally).

### Venire (to come)

*vengo, vieni, viene, veniamo, venite, vengono*

*Venire* is used for coming to a place: *Vengo a casa tua* (I'm coming to your place). Note the 1st person singular: *vengo* (not *veno*).`,
    tables: [
      {
        caption: 'The Five Irregular Verbs — Present Tense',
        headers: ['Pronoun', 'andare', 'fare', 'stare', 'dare', 'venire'],
        rows: [
          ['io', 'vado', 'faccio', 'sto', 'do', 'vengo'],
          ['tu', 'vai', 'fai', 'stai', 'dai', 'vieni'],
          ['lui/lei', 'va', 'fa', 'sta', 'dà', 'viene'],
          ['noi', 'andiamo', 'facciamo', 'stiamo', 'diamo', 'veniamo'],
          ['voi', 'andate', 'fate', 'state', 'date', 'venite'],
          ['loro', 'vanno', 'fanno', 'stanno', 'danno', 'vengono'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "andare", translation: "to go", example: "Vado a scuola in bicicletta.", exampleTranslation: "I go to school by bike." },
    { word: "venire", translation: "to come", example: "Vieni a casa mia stasera?", exampleTranslation: "Are you coming to my place tonight?" },
    { word: "fare", translation: "to do / make", example: "Facciamo una passeggiata nel parco.", exampleTranslation: "We take a walk in the park." },
    { word: "dare", translation: "to give", example: "Do un regalo a mia sorella.", exampleTranslation: "I give a present to my sister." },
    { word: "stare", translation: "to stay / be", example: "Stai bene oggi?", exampleTranslation: "Are you well today?" },
    { word: "uscire", translation: "to go out", example: "Esco con gli amici il sabato sera.", exampleTranslation: "I go out with friends on Saturday evenings." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-irreg-01',
      prompt: 'Domani io ___ al cinema con gli amici. (Tomorrow I\'m going to the cinema with friends.)',
      answer: 'vado',
      hint: 'andare — io form.',
      feedback: {
        correct: 'Perfetto! "Vado" is the io form of andare.',
        incorrect: 'The correct answer is "vado".',
        explanation:
          '"Andare" is irregular: vado (not *ando*). The v- appears in vado, vai, va, and vanno — but disappears in andiamo and andate, which look more like the infinitive.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-irreg-02',
      prompt: 'Come ___ oggi, bene? (How are you doing today, well?) — stare, tu',
      answer: 'stai',
      feedback: {
        correct: 'Esatto! "Stai" is correct.',
        incorrect: 'The correct answer is "stai".',
        explanation:
          '"Stare" for health/state: io sto, tu stai, lui sta, noi stiamo, voi state, loro stanno. "Come stai?" is the standard greeting "How are you?" in Italian.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-irreg-03',
      prompt: 'Loro ___ sempre colazione alle sette. (They always have breakfast at seven.) — fare',
      answer: 'fanno',
      feedback: {
        correct: 'Bravo/a! "Fanno" is the loro form of fare.',
        incorrect: 'The correct answer is "fanno".',
        explanation:
          '"Fare" loro → fanno. Note: fanno (fare) vs. vanno (andare) vs. stanno (stare) vs. danno (dare) — all loro forms end in -anno in these four verbs.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-irreg-04',
      question: 'Choose the correct form: "Voi ___ a Roma questo weekend?" (Are you going to Rome this weekend?)',
      options: [
        { value: 'andate', label: 'andate' },
        { value: 'vadate', label: 'vadate' },
        { value: 'vanno', label: 'vanno' },
        { value: 'andiate', label: 'andiate' },
      ],
      answer: 'andate',
      feedback: {
        correct: 'Esatto! "Andate" is the voi form.',
        incorrect: 'The correct answer is "andate".',
        explanation:
          'For voi, andare uses "andate" — a regular-looking form based on the infinitive stem. The irregular forms (vado, vai, va, vanno) only appear in some persons. Andiamo (noi) and andate (voi) are regular.',
        optionExplanations: {
          vadate: '"Vadate" does not exist. The voi form of andare is "andate", not built on "va-".',
          vanno: '"Vanno" is the loro form (they go), not the voi form.',
          andiate: '"Andiate" is the voi form of the SUBJUNCTIVE mood (congiuntivo). The indicative is "andate".',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-irreg-05',
      question: 'What does "Vengo anch\'io!" mean?',
      options: [
        { value: 'a', label: "I'm coming too!" },
        { value: 'b', label: "We're coming too!" },
        { value: 'c', label: "He's coming too!" },
        { value: 'd', label: "Are you coming too?" },
      ],
      answer: 'a',
      feedback: {
        correct: "Corretto! \"Vengo\" is the io form of venire.",
        incorrect: "The correct answer is \"I'm coming too!\"",
        explanation:
          '"Vengo" is the 1st person singular (io) of venire. "Anch\'io" means "I too/me too". The irregular forms of venire: vengo, vieni, viene, veniamo, venite, vengono.',
        optionExplanations: {
          b: '"We\'re coming" = Veniamo anch\'noi. "Vengo" is singular (io), not plural (noi).',
          c: '"He\'s coming" = Viene anche lui. "Vengo" is 1st person, not 3rd person.',
          d: 'A question would use rising intonation or an explicit question word. "Vengo" is a statement, not a question.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-irreg-06',
      verb: 'fare',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'],
      feedback: {
        explanation:
          '"Fare" present: faccio / fai / fa / facciamo / fate / fanno. Note: io = faccio (double c), noi = facciamo. "Fare" is also used in many idioms: fare sport, fare colazione, fare una domanda, fare le vacanze.',
      },
    },
    {
      type: 'match',
      id: 'a1-irreg-07',
      instruction: 'Match each sentence fragment with the correct verb form.',
      pairs: [
        { left: 'Io ___ colazione alle otto. (fare)', right: 'faccio' },
        { left: 'Tu ___ a scuola a piedi. (andare)', right: 'vai' },
        { left: 'Lei ___ molto bene, grazie. (stare)', right: 'sta' },
        { left: 'Noi ___ i libri alla biblioteca. (dare)', right: 'diamo' },
        { left: 'Voi ___ a cena stasera? (venire)', right: 'venite' },
        { left: 'Loro ___ sempre in ritardo. (andare)', right: 'vanno' },
      ],
      feedback: {
        explanation:
          'Key irregular forms to remember: faccio (fare, io), vai (andare, tu), sta (stare, lui/lei), diamo (dare, noi — note: stem changes to di-), venite (venire, voi), vanno (andare, loro).',
      },
    },
    {
      type: 'reorder',
      id: 'a1-irreg-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['spesa', 'Mia', 'fa', 'la', 'sempre', 'madre', 'sabato'],
      answer: ['Mia', 'madre', 'fa', 'sempre', 'la', 'spesa', 'sabato'],
      feedback: {
        correct: 'Perfetto! "Mia madre fa sempre la spesa sabato."',
        explanation:
          '"Fare la spesa" = to do the grocery shopping (a fixed expression). "Fa" is the 3rd person singular of fare. "Sempre" (always) usually comes after the verb. "Sabato" (on Saturday) comes at the end.',
      },
    },
    {
      type: 'translation',
      id: 'a1-irreg-09',
      source: 'Where are you (plural) going? We are coming too.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Dove andate? Veniamo anche noi.',
        'Dove andate voi? Veniamo anche noi.',
        'Dove andate? Vengo anch\'io.',
      ],
      feedback: {
        explanation:
          '"Where are you going?" (voi) = Dove andate? (andare, voi form). "We are coming too" = Veniamo anche noi (venire, noi form). Note: andate and veniamo look more like their infinitives than vai/vanno or vengo/vengono.',
        modelAnswer: 'Dove andate? Veniamo anche noi.',
      },
    },
  ],
};
