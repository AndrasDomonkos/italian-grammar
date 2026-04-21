import type { Lesson } from '../types';

export const imperfetto: Lesson = {
  slug: 'imperfetto',
  title: 'Imperfetto',
  level: 'a2',
  order: 3,
  explanation: {
    text: `## L'Imperfetto (The Imperfect Tense)

The **imperfetto** is a past tense used for ongoing, repeated, or habitual actions in the past — things that "used to" happen or "were happening."

### When to Use the Imperfetto

**1. Ongoing/background actions** (what was happening when something else occurred):
*Leggevo quando è arrivato Marco.* (I was reading when Marco arrived.)

**2. Habitual/repeated past actions** (used to, would always):
*Da bambino mangiavo sempre la pasta.* (As a child I always ate pasta.)

**3. States and conditions in the past** (age, time, weather, feelings):
*Aveva dieci anni.* (He was ten years old.) / *Faceva freddo.* (It was cold.)

**4. Descriptions in the past** (how things looked/felt):
*La casa era grande e silenziosa.* (The house was big and quiet.)

### Regular Formation

Remove the infinitive ending and add the imperfect suffixes:

| Person | -are | -ere | -ire |
|--------|------|------|------|
| io | -avo | -evo | -ivo |
| tu | -avi | -evi | -ivi |
| lui/lei | -ava | -eva | -iva |
| noi | -avamo | -evamo | -ivamo |
| voi | -avate | -evate | -ivate |
| loro | -avano | -evano | -ivano |

### Irregular Imperfect Verbs

Only a few verbs are irregular in the imperfect:

- **essere**: ero, eri, era, eravamo, eravate, erano
- **fare**: facevo, facevi, faceva, facevamo, facevate, facevano
- **dire**: dicevo, dicevi, diceva, dicevamo, dicevate, dicevano
- **bere**: bevevo, bevevi, beveva, bevevamo, bevevate, bevevano

**Memory aid:** The imperfect endings are very regular — learn the -avo/-evo/-ivo pattern once and it covers almost everything.`,
    tables: [
      {
        caption: 'Imperfetto — parlare / credere / dormire',
        headers: ['Person', 'parlare', 'credere', 'dormire'],
        rows: [
          ['io', 'parlavo', 'credevo', 'dormivo'],
          ['tu', 'parlavi', 'credevi', 'dormivi'],
          ['lui/lei', 'parlava', 'credeva', 'dormiva'],
          ['noi', 'parlavamo', 'credevamo', 'dormivamo'],
          ['voi', 'parlavate', 'credevate', 'dormivate'],
          ['loro', 'parlavano', 'credevano', 'dormivano'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "studiavo", translation: "I used to study", example: "Da bambino studiavo il pianoforte.", exampleTranslation: "As a child I used to study piano." },
    { word: "abitava", translation: "he/she used to live", example: "Mia nonna abitava in un piccolo paese.", exampleTranslation: "My grandmother used to live in a small village." },
    { word: "andavamo", translation: "we used to go", example: "D'estate andavamo sempre al mare.", exampleTranslation: "In summer we used to go to the sea." },
    { word: "era", translation: "was / used to be", example: "Il tempo era bellissimo ieri.", exampleTranslation: "The weather was beautiful yesterday." },
    { word: "giocavano", translation: "they used to play", example: "I bambini giocavano in giardino.", exampleTranslation: "The children used to play in the garden." },
    { word: "capivo", translation: "I understood", example: "Non capivo bene il francese allora.", exampleTranslation: "I did not understand French well back then." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-imp-01',
      prompt: 'Da bambina, Maria ___ sempre in giardino. (As a child, Maria always played in the garden.) — giocare',
      answer: 'giocava',
      feedback: {
        correct: 'Esatto! "Giocava" — imperfetto of giocare, lei form.',
        incorrect: 'The correct answer is "giocava".',
        explanation:
          '"Giocare" is a regular -are verb. Imperfetto: io gioc-avo, tu -avi, lui/lei -ava. "Maria" = 3rd person singular → giocava. "Da bambina" + imperfetto = habitual childhood action.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-imp-02',
      prompt: 'Quando ___ piccolo, abitavo in campagna. (When I was little, I lived in the countryside.) — essere',
      answer: 'ero',
      hint: 'essere is irregular in the imperfetto: ero, eri, era…',
      feedback: {
        correct: 'Perfetto! "Ero" — irregular imperfetto of essere, io form.',
        incorrect: 'The correct answer is "ero".',
        explanation:
          '"Essere" has an irregular imperfetto: ero/eri/era/eravamo/eravate/erano. "Io" → ero. This is a state/condition in the past (age description).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-imp-03',
      prompt: 'Loro ___ la televisione ogni sera. (They used to watch TV every evening.) — guardare',
      answer: 'guardavano',
      feedback: {
        correct: 'Bravo/a! "Guardavano" is correct.',
        incorrect: 'The correct answer is "guardavano".',
        explanation:
          '"Guardare" → -are verb. Loro imperfetto = -avano: guardavano. "Ogni sera" (every evening) signals a repeated/habitual action → imperfetto.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-imp-04',
      question: 'Which sentence correctly uses the imperfetto for "It was raining and the children were playing inside"?',
      options: [
        { value: 'a', label: 'È piovuto e i bambini hanno giocato dentro.' },
        { value: 'b', label: 'Pioveva e i bambini giocavano dentro.' },
        { value: 'c', label: 'Piove e i bambini giocano dentro.' },
        { value: 'd', label: 'Pioveva e i bambini hanno giocato dentro.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Pioveva e i bambini giocavano" — both are background states/ongoing actions.',
        incorrect: 'The correct answer is "Pioveva e i bambini giocavano dentro."',
        explanation:
          'Both "raining" and "playing" are ongoing background conditions — neither is a completed event. The imperfetto (pioveva, giocavano) is correct for both. When two simultaneous ongoing actions occur, both use imperfetto.',
        optionExplanations: {
          a: 'È piovuto / hanno giocato = passato prossimo — for completed single events, not background states.',
          c: 'Piove / giocano = present tense — not past.',
          d: 'Mixing imperfetto (pioveva) with passato prossimo (hanno giocato) is possible but implies the playing was a completed event, not an ongoing background activity.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-imp-05',
      question: 'Complete: "Ogni estate noi ___ al mare." (Every summer we went/used to go to the beach.)',
      options: [
        { value: 'a', label: 'siamo andati' },
        { value: 'b', label: 'andiamo' },
        { value: 'c', label: 'andavamo' },
        { value: 'd', label: 'andremo' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Andavamo" — imperfetto for habitual past action.',
        incorrect: 'The correct answer is "andavamo".',
        explanation:
          '"Ogni estate" (every summer) signals a habitual recurring action → imperfetto. "Noi" → andavamo (-are: -avamo ending). This means "we used to go / would go every summer."',
        optionExplanations: {
          a: '"Siamo andati" = passato prossimo — for a specific completed trip, not a habitual pattern.',
          b: '"Andiamo" = present tense.',
          d: '"Andremo" = future tense.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-imp-06',
      verb: 'fare (irregular imperfetto)',
      tense: 'Imperfetto',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['facevo', 'facevi', 'faceva', 'facevamo', 'facevate', 'facevano'],
      feedback: {
        explanation:
          '"Fare" uses the stem fac- in the imperfetto (as in its present: faccio, fai → fac-). Then add regular -evo/-evi/-eva endings. This is one of only 4 irregular imperfetto verbs: essere, fare, dire, bere.',
      },
    },
    {
      type: 'match',
      id: 'a2-imp-07',
      instruction: 'Match each sentence with what type of past meaning it expresses.',
      pairs: [
        { left: 'Da giovane correvo ogni giorno.', right: 'Habitual action' },
        { left: 'Dormivo quando ha chiamato.', right: 'Ongoing background action' },
        { left: "Aveva vent'anni.", right: 'State/condition in the past' },
        { left: 'Il cielo era grigio.', right: 'Description in the past' },
        { left: 'Ogni inverno nevicava molto.', right: 'Repeated past event' },
      ],
      feedback: {
        explanation:
          'The imperfetto covers 4 main uses: (1) habits/routines with "da giovane, ogni giorno"; (2) background ongoing when interrupted by passato prossimo; (3) states like age, feelings, health; (4) scene-setting descriptions. All five sentences use the imperfetto appropriately.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-imp-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['scrivevo', 'sempre', 'bambino', 'Da', 'storie', 'corte'],
      answer: ['Da', 'bambino', 'scrivevo', 'sempre', 'storie', 'corte'],
      feedback: {
        correct: 'Perfetto! "Da bambino scrivevo sempre storie corte."',
        explanation:
          '"Da bambino" = as a child (time phrase at the start). "Scrivevo" = imperfetto of scrivere (-ere: -evo ending), io form. "Sempre" follows the verb. "Storie corte" = short stories (storie fem. plur., corte agrees).',
      },
    },
    {
      type: 'translation',
      id: 'a2-imp-09',
      source: 'When I was a student, I lived in a small apartment and I studied every day.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Quando ero studente, abitavo in un piccolo appartamento e studiavo ogni giorno.',
        'Quando ero studentessa, abitavo in un piccolo appartamento e studiavo ogni giorno.',
        'Quando ero studente, vivevo in un piccolo appartamento e studiavo ogni giorno.',
      ],
      feedback: {
        explanation:
          'Three imperfetti: ero (essere, irregular), abitavo/vivevo (abitare/vivere, regular -avo/-evo), studiavo (studiare, regular -avo). All are states or habitual actions → imperfetto throughout. "Studente/studentessa" = student (masc./fem. form).',
        modelAnswer: 'Quando ero studente, abitavo in un piccolo appartamento e studiavo ogni giorno.',
      },
    },
  ],
};
