import type { Lesson } from '../types';

export const futuroAnteriore: Lesson = {
  slug: 'futuro-anteriore',
  title: 'Futuro Anteriore',
  level: 'a2',
  order: 6,
  explanation: {
    text: `## Il Futuro Anteriore (The Future Perfect)

The **futuro anteriore** expresses an action that will have been completed **before** another future action. It is the "future perfect" of Italian.

### Formation

**Futuro semplice of avere or essere + participio passato**

With **avere:** *avrò mangiato* (I will have eaten)
With **essere:** *sarò arrivato/a* (I will have arrived)

The choice of avere vs essere follows the same rules as passato prossimo: essere for motion/state verbs and reflexives; avere for transitive verbs.

### Uses

**1. Action completed before a future moment:**
*Quando avrò finito il libro, te lo presterò.*
(When I have finished the book, I'll lend it to you.)

*Appena sarò arrivato, ti chiamo.*
(As soon as I've arrived, I'll call you.)

**2. Probability about a past action (spoken Italian):**
*Sarà andato a letto presto.* (He must have gone to bed early.)
*Avranno già mangiato.* (They've probably already eaten.)

### Key Conjunctions

**dopo che, quando, appena, non appena** — all trigger the futuro anteriore when the dependent action will be completed before the main clause action:

*Dopo che avrai studiato, puoi uscire.*
(After you've studied, you can go out.)

*Appena avranno firmato il contratto, inizieranno i lavori.*
(As soon as they've signed the contract, work will begin.)`,
    tables: [
      {
        caption: 'Futuro Anteriore — mangiare / partire',
        headers: ['Person', 'avrò mangiato', 'sarò partito/a'],
        rows: [
          ['io', 'avrò mangiato', 'sarò partito/a'],
          ['tu', 'avrai mangiato', 'sarai partito/a'],
          ['lui/lei', 'avrà mangiato', 'sarà partito/a'],
          ['noi', 'avremo mangiato', 'saremo partiti/e'],
          ['voi', 'avrete mangiato', 'sarete partiti/e'],
          ['loro', 'avranno mangiato', 'saranno partiti/e'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-futa-01',
      prompt: 'Quando ___ (tu, finire) i compiti, potrai guardare la TV.',
      answer: 'avrai finito',
      hint: 'finire uses avere; futuro anteriore = futuro of avere + participio.',
      feedback: {
        correct: 'Esatto! "Avrai finito" — futuro anteriore with avere.',
        incorrect: 'The correct answer is "avrai finito".',
        explanation:
          '"Quando" + future action completed before main clause → futuro anteriore. "Finire" uses avere. Tu → avrai + finito (regular -ire participio). "Potrai guardare" (futuro semplice) is the main clause.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-futa-02',
      prompt: 'Appena ___ (loro, arrivare) a Roma, ci manderanno un messaggio.',
      answer: 'saranno arrivati',
      feedback: {
        correct: 'Perfetto! "Saranno arrivati" — essere verb, loro form.',
        incorrect: 'The correct answer is "saranno arrivati".',
        explanation:
          '"Arrivare" uses essere. "Appena" (as soon as) triggers futuro anteriore. Loro → saranno + arrivati (masc. plur. default). The main clause "manderanno" is futuro semplice.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-futa-03',
      prompt: 'Marco non è ancora qui — ___ (lui, perdere) l\'autobus. (He must have missed the bus.)',
      answer: 'avrà perso',
      hint: 'Futuro anteriore can express probability about a past action.',
      feedback: {
        correct: 'Bravo/a! "Avrà perso" — futuro anteriore for probability.',
        incorrect: 'The correct answer is "avrà perso".',
        explanation:
          '"Avrà perso" expresses probability/supposition about a past event: "he must have missed." Perdere → perso (irregular). Avere + lui: avrà + perso = avrà perso.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-futa-04',
      question: 'Which sentence is correct? "After she has graduated, she will look for a job."',
      options: [
        { value: 'a', label: 'Dopo che si laureerà, cercherà lavoro.' },
        { value: 'b', label: 'Dopo che si sarà laureata, cercherà lavoro.' },
        { value: 'c', label: 'Dopo che si è laureata, cercherà lavoro.' },
        { value: 'd', label: 'Dopo che si laureava, cercherà lavoro.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Si sarà laureata" — futuro anteriore for the completed prior action.',
        incorrect: 'The correct answer is "Dopo che si sarà laureata, cercherà lavoro."',
        explanation:
          '"Dopo che" + action completed before another future action → futuro anteriore. "Laurearsi" is reflexive → essere. Lei: si sarà laureata (fem. agreement). The main clause "cercherà" is futuro semplice.',
        optionExplanations: {
          a: '"Si laureerà" = futuro semplice — implies both actions happen simultaneously, which is not the intended meaning.',
          c: '"Si è laureata" = passato prossimo — past tense, not future.',
          d: '"Si laureava" = imperfetto — past habitual, not future.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-futa-05',
      question: '"Non rispondono al telefono — ___ dormire." (They must have gone to sleep.)',
      options: [
        { value: 'a', label: 'saranno andati a' },
        { value: 'b', label: 'sono andati a' },
        { value: 'c', label: 'andranno a' },
        { value: 'd', label: 'andavano a' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Saranno andati a dormire" — futuro anteriore for probability about the past.',
        incorrect: 'The correct answer is "saranno andati a dormire".',
        explanation:
          'When you want to say "they must have done X," use futuro anteriore: "saranno andati" = they must have gone. "Andare" uses essere → saranno andati (masc. plur.).',
        optionExplanations: {
          b: '"Sono andati" = passato prossimo — a definite statement, not a supposition.',
          c: '"Andranno" = futuro semplice — they will go (not "must have gone").',
          d: '"Andavano" = imperfetto — habitual past.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-futa-06',
      verb: 'partire (essere) — futuro anteriore, male speaker',
      tense: 'Futuro Anteriore',
      pronouns: ['io', 'tu', 'lui', 'noi', 'voi', 'loro'],
      answers: ['sarò partito', 'sarai partito', 'sarà partito', 'saremo partiti', 'sarete partiti', 'saranno partiti'],
      feedback: {
        explanation:
          '"Partire" uses essere. Futuro anteriore = futuro of essere (sarò/sarai/sarà/saremo/sarete/saranno) + partito. Agreement: masc. sing. = partito, masc. plur. = partiti. For female speakers: partita/partite.',
      },
    },
    {
      type: 'match',
      id: 'a2-futa-07',
      instruction: 'Match each clause with its correct completion.',
      pairs: [
        { left: 'Quando avrò finito,', right: 'ti chiamo.' },
        { left: 'Appena sarà partita,', right: 'la casa sarà silenziosa.' },
        { left: 'Dopo che avranno mangiato,', right: 'laveremo i piatti.' },
        { left: 'Non è ancora arrivato —', right: 'avrà perso il treno.' },
        { left: 'Saranno già andati via —', right: 'erano stanchi.' },
      ],
      feedback: {
        explanation:
          'Quando/appena/dopo che + futuro anteriore introduce the completed prior action; the main clause uses futuro semplice or present. The "avrà perso" and "saranno già andati" examples show futuro anteriore for present-moment probability about past events.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-futa-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['avranno', 'Quando', 'firmato', 'inizierà', 'il', 'contratto', 'lavoro', 'il'],
      answer: ['Quando', 'avranno', 'firmato', 'il', 'contratto', 'inizierà', 'il', 'lavoro'],
      feedback: {
        correct: 'Perfetto! "Quando avranno firmato il contratto, inizierà il lavoro."',
        explanation:
          '"Quando avranno firmato" = futuro anteriore (loro, firmare, avere). "Il contratto" = the contract. "Inizierà il lavoro" = the work will begin (futuro semplice). The "quando" clause comes first.',
      },
    },
    {
      type: 'translation',
      id: 'a2-futa-09',
      source: 'As soon as you have read the email, please reply.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Appena avrai letto la email, rispondi per favore.',
        'Appena avrai letto la mail, rispondi per favore.',
        'Non appena avrai letto la email, rispondi.',
      ],
      feedback: {
        explanation:
          '"As soon as" = appena / non appena. "You have read" = avrai letto (futuro anteriore: avrai + letto, irregular). "Reply" = rispondi (imperativo, tu). "Per favore" = please (optional).',
        modelAnswer: 'Appena avrai letto la email, rispondi per favore.',
      },
    },
  ],
};
