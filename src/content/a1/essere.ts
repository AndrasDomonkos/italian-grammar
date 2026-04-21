import type { Lesson } from '../types';

export const essere: Lesson = {
  slug: 'essere',
  title: 'Essere — To Be',
  level: 'a1',
  order: 3,
  explanation: {
    text: `## Essere (To Be)

**Essere** is the most fundamental Italian verb. It is highly irregular and must be memorised. It corresponds to English "to be" and is used to express identity, origin, characteristics, nationality, profession, and time.

### Present Tense Conjugation

The six forms are entirely unpredictable from the infinitive:

- **io sono** — I am
- **tu sei** — you are (informal singular)
- **lui / lei è** — he/she/it is
- **noi siamo** — we are
- **voi siete** — you are (plural)
- **loro sono** — they are

⚠️ Note: **io** and **loro** share the same form: *sono*. Context usually makes the meaning clear.

### Core Uses of Essere

**1. Identity and profession:**
*Sono uno studente.* — I am a student.
*Marco è professore.* — Marco is a teacher.

**2. Nationality and origin:**
*Sei italiano?* — Are you Italian?
*Siamo di Roma.* — We are from Rome.

**3. Permanent characteristics:**
*La casa è grande.* — The house is big.
*I fiori sono belli.* — The flowers are beautiful.

**4. Time expressions:**
*Che ora è? — È l'una. / Sono le tre.* — What time is it? — It's one o'clock. / It's three o'clock.

**5. Date and day:**
*Oggi è lunedì.* — Today is Monday.
*È il primo di maggio.* — It's the first of May.

### Negation and Questions

- Negative: place **non** before the verb: *Non sono stanco.* (I'm not tired.)
- Question: invert subject/verb OR use rising intonation: *Sei stanco?* (Are you tired?)

### Essere vs. Stare

Both mean "to be", but **stare** expresses temporary states and health: *Come stai?* (How are you?). *Essere* expresses permanent traits: *Sono alto.* (I am tall.)`,
    tables: [
      {
        caption: 'Essere — Present Tense',
        headers: ['Pronoun', 'Form', 'Example'],
        rows: [
          ['io', 'sono', 'Sono italiano.'],
          ['tu', 'sei', 'Sei stanco?'],
          ['lui / lei', 'è', "Marco è di Napoli."],
          ['noi', 'siamo', 'Siamo a casa.'],
          ['voi', 'siete', 'Siete pronti?'],
          ['loro', 'sono', 'Loro sono studenti.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-essere-01',
      prompt: 'Io ___ italiano. (I am Italian.)',
      answer: 'sono',
      feedback: {
        correct: 'Perfetto! "Sono" is correct.',
        incorrect: 'The correct answer is "sono".',
        explanation:
          'The first person singular (io) form of essere is "sono". Remember: io and loro both use "sono" — context distinguishes them.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-essere-02',
      prompt: 'Voi ___ pronti per l\'esame? (Are you all ready for the exam?)',
      answer: 'siete',
      feedback: {
        correct: 'Esatto! "Siete" is right.',
        incorrect: 'The correct answer is "siete".',
        explanation:
          '"Voi" (you plural) takes "siete" — unique among essere forms. Don\'t confuse with "siamo" (noi) or "sono" (loro).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-essere-03',
      prompt: 'Loro ___ di Milano. (They are from Milan.)',
      answer: 'sono',
      feedback: {
        correct: 'Bravo/a! "Sono" is correct.',
        incorrect: 'The correct answer is "sono".',
        explanation:
          'The third person plural (loro) form of essere is "sono" — the same as the first person singular (io sono). This is a unique feature of essere that learners must memorise.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-essere-04',
      question: 'Complete: "La pizza ___ buona." (The pizza is good.)',
      options: [
        { value: 'è', label: 'La pizza è buona.' },
        { value: 'sei', label: 'La pizza sei buona.' },
        { value: 'sono', label: 'La pizza sono buona.' },
        { value: 'siamo', label: 'La pizza siamo buona.' },
      ],
      answer: 'è',
      feedback: {
        correct: 'Corretto! "La pizza è buona."',
        incorrect: 'The correct answer is "è".',
        explanation:
          '"La pizza" is a third-person singular subject, so essere takes the 3rd person singular form "è" (note the grave accent). The accent distinguishes it from "e" meaning "and".',
        optionExplanations: {
          sei: '"Sei" is the 2nd person singular form (tu sei). "La pizza" is 3rd person, not 2nd person.',
          sono: '"Sono" is 1st or 3rd plural (io sono / loro sono). "La pizza" is singular.',
          siamo: '"Siamo" is 1st person plural (noi siamo). "La pizza" is 3rd person singular.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-essere-05',
      question: 'Choose the correct form: "Noi ___ studenti all\'università." (We are university students.)',
      options: [
        { value: 'siamo', label: 'siamo' },
        { value: 'siete', label: 'siete' },
        { value: 'sono', label: 'sono' },
        { value: 'sei', label: 'sei' },
      ],
      answer: 'siamo',
      feedback: {
        correct: 'Ottimo! "Siamo" is correct.',
        incorrect: 'The correct answer is "siamo".',
        explanation:
          '"Noi" (we) takes "siamo" — the 1st person plural form. A useful memory trick: "siamo" contains the letters of "siamo" = "noi siamo" → think of "we ARE".',
        optionExplanations: {
          siete: '"Siete" is for "voi" (you plural), not "noi" (we). A common confusion because both are plural.',
          sono: '"Sono" is for "io" (I) or "loro" (they), not "noi" (we).',
          sei: '"Sei" is for "tu" (you singular). "Noi" is 1st person plural, not 2nd person singular.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-essere-06',
      verb: 'essere',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
      feedback: {
        explanation:
          'Essere is completely irregular. The six forms to memorise: sono / sei / è / siamo / siete / sono. Note: è has a grave accent (è ≠ e = and). The 1st and 3rd plural share "sono" — only context distinguishes them.',
      },
    },
    {
      type: 'match',
      id: 'a1-essere-07',
      instruction: 'Match each sentence beginning with the correct form of "essere".',
      pairs: [
        { left: 'Io ___ felice.', right: 'sono' },
        { left: 'Tu ___ di Torino?', right: 'sei' },
        { left: 'Lei ___ professoressa.', right: 'è' },
        { left: 'Noi ___ a casa.', right: 'siamo' },
        { left: 'Voi ___ stanchi?', right: 'siete' },
        { left: 'Loro ___ giovani.', right: 'sono' },
      ],
      feedback: {
        explanation:
          'The 6 forms of essere are entirely unique — no regular pattern. The hardest to remember: siamo (noi) and siete (voi), as they are the most different from the infinitive "essere".',
      },
    },
    {
      type: 'reorder',
      id: 'a1-essere-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['medico', 'è', 'Mio', 'fratello'],
      answer: ['Mio', 'fratello', 'è', 'medico'],
      feedback: {
        correct: 'Perfetto! "Mio fratello è medico."',
        explanation:
          'Italian does NOT use the indefinite article with professions after essere: "è medico" (he is a doctor), NOT "è un medico". This differs from English. The word order is Subject + essere + predicate.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-essere-09',
      prompt: 'Tu e Marco ___ amici da molto tempo. (You and Marco have been friends for a long time.)',
      answer: 'siete',
      feedback: {
        correct: 'Esatto! "Siete" is correct.',
        incorrect: 'The correct answer is "siete".',
        explanation:
          '"Tu e Marco" = two people = a 2nd person plural subject (voi). When you combine "tu" with another person, the result is "voi", which takes "siete".',
      },
    },
    {
      type: 'translation',
      id: 'a1-essere-10',
      source: 'We are not tired, we are hungry.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Non siamo stanchi, siamo affamati.',
        'Non siamo stanchi, abbiamo fame.',
        'Noi non siamo stanchi, siamo affamati.',
        'Non siamo stanche, siamo affamate.',
      ],
      feedback: {
        explanation:
          '"We are not tired" = Non siamo stanchi (essere + adjective). "We are hungry" in Italian uses "avere fame" (to have hunger) or the adjective "affamati" — both are correct. Negation: non comes directly before the verb.',
        modelAnswer: 'Non siamo stanchi, siamo affamati.',
      },
    },
  ],
};
