import type { Lesson } from '../types';

export const avere: Lesson = {
  slug: 'avere',
  title: 'Avere — To Have',
  level: 'a1',
  order: 4,
  explanation: {
    text: `## Avere (To Have)

**Avere** is the second essential Italian verb. It is irregular in the present tense and has two main roles: expressing **possession** and forming the **passato prossimo** (covered in Lesson 18). It also appears in many idiomatic expressions about physical and emotional states.

### Present Tense Conjugation

- **io ho** — I have
- **tu hai** — you have
- **lui / lei ha** — he/she has
- **noi abbiamo** — we have
- **voi avete** — you have (plural)
- **loro hanno** — they have

⚠️ **Important:** *ho*, *hai*, *ha*, and *hanno* are written with a silent **h** to distinguish them from other common words: *o* (or), *ai* (to the), *a* (to/at), *anno* (year).

### Uses of Avere

**1. Possession:**
*Ho una macchina nuova.* — I have a new car.
*Hai un fratello?* — Do you have a brother?
*Loro hanno una casa grande.* — They have a big house.

**2. Age** — Italian uses *avere* for age, not *essere*:
*Ho vent'anni.* — I am twenty years old. (lit. I have twenty years.)
*Quanti anni hai?* — How old are you?

**3. Idiomatic expressions with avere** — Many physical/emotional states use *avere + noun* in Italian where English uses "to be + adjective":

- *avere fame* — to be hungry (lit. to have hunger)
- *avere sete* — to be thirsty
- *avere caldo* — to be hot (of a person)
- *avere freddo* — to be cold (of a person)
- *avere sonno* — to be sleepy
- *avere paura* — to be afraid
- *avere fretta* — to be in a hurry
- *avere ragione* — to be right
- *avere torto* — to be wrong

**4. Negation and questions:**
*Non ho fame.* — I'm not hungry.
*Avete una penna?* — Do you have a pen?`,
    tables: [
      {
        caption: 'Avere — Present Tense',
        headers: ['Pronoun', 'Form', 'Example'],
        rows: [
          ['io', 'ho', 'Ho un cane.'],
          ['tu', 'hai', 'Hai freddo?'],
          ['lui / lei', 'ha', 'Ha vent\'anni.'],
          ['noi', 'abbiamo', 'Abbiamo fretta.'],
          ['voi', 'avete', 'Avete paura?'],
          ['loro', 'hanno', 'Hanno una bella casa.'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: 'fame', translation: 'hunger', example: 'Ho fame, voglio mangiare.', exampleTranslation: 'I am hungry, I want to eat.' },
    { word: 'sete', translation: 'thirst', example: "Hai sete? Vuoi dell'acqua?", exampleTranslation: 'Are you thirsty? Do you want some water?' },
    { word: 'fratello', translation: 'brother', example: 'Ho un fratello più giovane.', exampleTranslation: 'I have a younger brother.' },
    { word: 'sorella', translation: 'sister', example: 'Lei ha due sorelle.', exampleTranslation: 'She has two sisters.' },
    { word: 'paura', translation: 'fear', example: 'I bambini hanno paura del buio.', exampleTranslation: 'The children are afraid of the dark.' },
    { word: 'ragione', translation: 'right, reason', example: 'Hai ragione, è un bel film.', exampleTranslation: 'You are right, it is a good film.' },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-avere-01',
      prompt: 'Io ___ molta fame. (I am very hungry.)',
      answer: 'ho',
      feedback: {
        correct: 'Perfetto! "Ho" is correct.',
        incorrect: 'The correct answer is "ho".',
        explanation:
          'In Italian, hunger is expressed with "avere fame" (to have hunger), not "essere affamato". The 1st person singular of avere is "ho" — with a silent h to distinguish it from "o" (or).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-avere-02',
      prompt: 'Quanti anni ___ tua sorella? (How old is your sister?)',
      answer: 'ha',
      hint: 'tua sorella = your sister (3rd person singular).',
      feedback: {
        correct: 'Esatto! "Ha" is correct.',
        incorrect: 'The correct answer is "ha".',
        explanation:
          'Italian uses avere (to have) for age: "Quanti anni ha?" = "How old is she?" (lit. "How many years does she have?"). The 3rd person singular is "ha" (with silent h).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-avere-03',
      prompt: 'Noi ___ una riunione importante domani. (We have an important meeting tomorrow.)',
      answer: 'abbiamo',
      feedback: {
        correct: 'Bravo/a! "Abbiamo" is right.',
        incorrect: 'The correct answer is "abbiamo".',
        explanation:
          '"Noi" takes "abbiamo" — the 1st person plural of avere. Note that "abbiamo" is quite different from the infinitive "avere"; it must be memorised.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-avere-04',
      question: 'Choose the correct translation: "They have a big house."',
      options: [
        { value: 'hanno', label: 'Loro hanno una casa grande.' },
        { value: 'avete', label: 'Loro avete una casa grande.' },
        { value: 'abbiamo', label: 'Loro abbiamo una casa grande.' },
        { value: 'ha', label: 'Loro ha una casa grande.' },
      ],
      answer: 'hanno',
      feedback: {
        correct: 'Corretto! "Hanno" is the 3rd person plural.',
        incorrect: 'The correct answer is "hanno" — "Loro hanno una casa grande."',
        explanation:
          '"Loro" (they) takes "hanno". Note the double "n" in hanno — this is the spelling that distinguishes it from "anno" (year). The silent h at the start is consistent with all avere forms (ho, hai, ha, hanno).',
        optionExplanations: {
          avete: '"Avete" is the 2nd person plural (voi), meaning "you all have". "Loro" is 3rd person plural.',
          abbiamo: '"Abbiamo" is 1st person plural (noi), meaning "we have". "Loro" is 3rd person.',
          ha: '"Ha" is 3rd person singular. "Loro" is plural, so we need the plural form "hanno".',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-avere-05',
      question: 'How do you say "I am right" in Italian?',
      options: [
        { value: 'a', label: 'Ho ragione.' },
        { value: 'b', label: 'Sono ragione.' },
        { value: 'c', label: 'Ho torto.' },
        { value: 'd', label: 'Sono giusto.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Ho ragione" is right.',
        incorrect: 'The correct answer is "Ho ragione."',
        explanation:
          '"To be right" in Italian is "avere ragione" (lit. "to have reason"). This is one of many Italian idioms where English uses "to be + adjective" but Italian uses "avere + noun".',
        optionExplanations: {
          b: '"Sono ragione" is grammatically wrong. "Ragione" is not a predicate adjective that follows essere.',
          c: '"Ho torto" means "I am wrong" (lit. I have wrong) — the opposite of "ho ragione".',
          d: '"Essere giusto" can mean "to be right" in the sense of being a just/correct person, but "avere ragione" is the standard idiom for being correct in a statement.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-avere-06',
      verb: 'avere',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
      feedback: {
        explanation:
          'All forms of avere in the present: ho / hai / ha / abbiamo / avete / hanno. The h in ho/hai/ha/hanno is silent and purely orthographic — it distinguishes these from o (or), ai (to the), a (to/at), anno (year).',
      },
    },
    {
      type: 'match',
      id: 'a1-avere-07',
      instruction: 'Match the Italian expression (using avere) with its English meaning.',
      pairs: [
        { left: 'avere fame', right: 'to be hungry' },
        { left: 'avere sete', right: 'to be thirsty' },
        { left: 'avere freddo', right: 'to be cold' },
        { left: 'avere sonno', right: 'to be sleepy' },
        { left: 'avere fretta', right: 'to be in a hurry' },
        { left: 'avere paura', right: 'to be afraid' },
      ],
      feedback: {
        explanation:
          'These are all idiomatic uses of "avere" where English uses "to be". They all use a noun after avere: fame (hunger), sete (thirst), freddo (cold), sonno (sleep), fretta (hurry), paura (fear). Memorise them as fixed phrases.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-avere-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['anni', 'sorella', 'venti', 'Mia', 'ha'],
      answer: ['Mia', 'sorella', 'ha', 'venti', 'anni'],
      feedback: {
        correct: 'Perfetto! "Mia sorella ha venti anni."',
        explanation:
          'Age in Italian: subject + avere + number + anni. "Ha venti anni" = "She is twenty years old" (lit. "She has twenty years"). Note: "anni" (years) always follows the number.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-avere-09',
      prompt: 'Non ___ paura, il cane è buono! (Don\'t be afraid, the dog is nice!)',
      answer: 'avere',
      hint: 'This is a negative imperative (informal command): non + infinitive.',
      feedback: {
        correct: 'Esatto! "Non avere" is the negative imperative.',
        incorrect: 'The correct answer is "avere".',
        explanation:
          'In Italian, the negative imperative for "tu" (you singular) uses "non + infinitive": non avere paura = don\'t be afraid. The expression "avere paura" means "to be afraid" (lit. to have fear).',
      },
    },
    {
      type: 'translation',
      id: 'a1-avere-10',
      source: 'Are you thirsty? I have cold water.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Hai sete? Ho dell\'acqua fredda.',
        'Hai sete? Ho acqua fredda.',
        'Avete sete? Ho acqua fredda.',
      ],
      feedback: {
        explanation:
          '"Are you thirsty?" uses avere sete: "Hai sete?" (informal singular) or "Avete sete?" (plural). "I have cold water": "Ho acqua fredda." or "Ho dell\'acqua fredda." Note: "fredda" follows "acqua" and agrees in gender (feminine).',
        modelAnswer: "Hai sete? Ho dell'acqua fredda.",
      },
    },
  ],
};
