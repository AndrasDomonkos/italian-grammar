import type { Lesson } from '../types';

export const pronomiRelativi: Lesson = {
  slug: 'pronomi-relativi',
  title: 'Pronomi Relativi',
  level: 'b1',
  order: 8,
  explanation: {
    text: `## Pronomi Relativi (Relative Pronouns)

Relative pronouns introduce a subordinate clause that describes a noun (the antecedent). They are the Italian equivalents of "who," "which," "that," "whose," "where."

### The Main Relative Pronouns

**che** (who, which, that)
Used for both persons and things, as subject or direct object (never after a preposition):
*L'uomo che parla è mio padre.* (The man who is speaking is my father.)
*Il libro che ho letto era interessante.* (The book that I read was interesting.)

**cui** (whom, which — after a preposition)
Used after prepositions (di, a, da, in, su, con, per, tra):
*La ragazza con cui studio si chiama Lucia.* (The girl with whom I study is called Lucia.)
*Il motivo per cui sono qui è importante.* (The reason why [for which] I am here is important.)
*Il libro di cui ti parlo è bellissimo.* (The book I'm talking to you about is beautiful.)

**il/la/i/le quale/quali** (who, which — formal)
Agrees in gender/number with the antecedent; used to avoid ambiguity:
*Il padre di Maria, il quale è medico…* (Maria's father, who is a doctor…)

**chi** (he/she who, whoever, the one who)
Always refers to people; used without antecedent:
*Chi studia, impara.* (He who studies, learns. / Whoever studies, learns.)
*Non so chi sia.* (I don't know who it is.)

**quello che / ciò che** (what, that which)
Replaces a non-specific antecedent:
*Quello che dici è vero.* (What you're saying is true.)
*Faccio ciò che posso.* (I do what I can.)

### cui with Article = "whose"

When "di cui" precedes a noun with an article, it expresses possession (= whose):
*Il professore il cui libro ho letto è famoso.*
(The professor whose book I read is famous.)`,
    tables: [
      {
        caption: 'Relative Pronoun Quick Reference',
        headers: ['Pronoun', 'Used for', 'Function', 'Example'],
        rows: [
          ['che', 'people / things', 'subject or direct obj.', 'L\'uomo che corre.'],
          ['cui', 'people / things', 'after prepositions', 'La città in cui vivo.'],
          ['il quale', 'people / things', 'formal, after prep', 'Il motivo per il quale…'],
          ['chi', 'people only', 'without antecedent', 'Chi studia, impara.'],
          ['quello che', 'things/ideas', 'no antecedent', 'Quello che dici è bello.'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "che", translation: "who / which / that", example: "Il libro che ho letto era bellissimo.", exampleTranslation: "The book that I read was beautiful." },
    { word: "cui", translation: "whom / which (after prep.)", example: "La ragazza con cui parlo e mia cugina.", exampleTranslation: "The girl I am talking with is my cousin." },
    { word: "il quale", translation: "who / which (masc.)", example: "Lo studente, il quale ha vinto il premio, e di Roma.", exampleTranslation: "The student, who won the prize, is from Rome." },
    { word: "la quale", translation: "who / which (fem.)", example: "La professoressa, la quale insegna storia, e bravissima.", exampleTranslation: "The teacher, who teaches history, is excellent." },
    { word: "chi", translation: "whoever / the one who", example: "Chi studia con impegno ottiene buoni risultati.", exampleTranslation: "Whoever studies diligently achieves good results." },
    { word: "quello che", translation: "what / that which", example: "Quello che dici e molto interessante.", exampleTranslation: "What you are saying is very interesting." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-prrel-01',
      prompt: 'La persona ___ lavora qui è molto brava. (The person who works here is very talented.)',
      answer: 'che',
      hint: '"Who" as subject, person → che',
      feedback: {
        correct: 'Esatto! "Che" — subject relative pronoun for both people and things.',
        incorrect: 'The correct answer is "che".',
        explanation:
          '"Che" = who/which/that as subject or direct object. "La persona che lavora" = the person who works. "Che" cannot follow a preposition; for that, use "cui."',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-prrel-02',
      prompt: 'La città in ___ abito è molto bella. (The city where I live is very beautiful.)',
      answer: 'cui',
      hint: '"In which" = in cui — cui follows prepositions.',
      feedback: {
        correct: 'Perfetto! "In cui" — cui after the preposition "in."',
        incorrect: 'The correct answer is "cui".',
        explanation:
          '"In which" = in cui. "Cui" always follows a preposition: in cui, con cui, di cui, a cui, per cui. Never use "che" after a preposition.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-prrel-03',
      prompt: 'Non capisco ___ vuoi dire. (I don\'t understand what you mean.)',
      answer: 'quello che',
      hint: '"What" with no specific antecedent → quello che / ciò che',
      feedback: {
        correct: 'Bravo/a! "Quello che vuoi dire" — quello che = what (no antecedent).',
        incorrect: 'The correct answer is "quello che".',
        explanation:
          '"Quello che" or "ciò che" = what (that which). Used when there is no specific noun antecedent. "Quello che dici" = what you say. "Ciò che" is more formal.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-prrel-04',
      question: '"Il motivo ___ ho chiamato è urgente." (The reason why I called is urgent.)',
      options: [
        { value: 'a', label: 'che' },
        { value: 'b', label: 'cui' },
        { value: 'c', label: 'per cui' },
        { value: 'd', label: 'di cui' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Corretto! "Per cui" — "il motivo per cui" = the reason why (for which).',
        incorrect: 'The correct answer is "per cui".',
        explanation:
          '"Il motivo per cui" = the reason why (for which I called). "Per cui" = for which / why. The preposition "per" is needed because we say "chiamare per un motivo" (to call for a reason).',
        optionExplanations: {
          a: '"Che" cannot follow a preposition.',
          b: '"Cui" alone without preposition would give "il motivo cui" — incorrect, "per" is needed.',
          d: '"Di cui" = of which / whose — wrong preposition for this context.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-prrel-05',
      question: '"___ fa del bene agli altri, vive felice." (Whoever does good to others, lives happily.)',
      options: [
        { value: 'a', label: 'Quello che' },
        { value: 'b', label: 'Che' },
        { value: 'c', label: 'Chi' },
        { value: 'd', label: 'Cui' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Chi" — whoever/he who, without a specific antecedent, for people.',
        incorrect: 'The correct answer is "Chi".',
        explanation:
          '"Chi" = whoever / he who / the one who. Used without an explicit antecedent to refer to people generally. "Chi studia, impara" = whoever studies, learns. It always refers to people.',
        optionExplanations: {
          a: '"Quello che" = what (that which) — refers to things/ideas, not people doing actions.',
          b: '"Che" requires a specific antecedent noun.',
          d: '"Cui" follows prepositions.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-prrel-06',
      verb: 'Complete with the correct relative pronoun',
      tense: 'Fill in: che / cui / chi / quello che',
      pronouns: [
        'Il libro ___ leggo è interessante.',
        'La persona con ___ lavoro è simpatica.',
        '___ studia, impara.',
        '___ dici mi sorprende.',
        'L\'amico ___ mi ha aiutato.',
        'Il paese da ___ vengo è in Romania.',
      ],
      answers: [
        'che',
        'cui',
        'Chi',
        'Quello che',
        'che',
        'cui',
      ],
      feedback: {
        explanation:
          '"Che" as direct object (leggo = I read it). "Con cui" = with whom (after preposition). "Chi" = whoever (no antecedent). "Quello che" = what (no antecedent, replaces a clause). "Che" as subject (mi ha aiutato = who helped me). "Da cui" = from which (after preposition).',
      },
    },
    {
      type: 'match',
      id: 'b1-prrel-07',
      instruction: 'Match each relative clause with its English translation.',
      pairs: [
        { left: 'La casa in cui abito', right: 'The house where I live' },
        { left: 'L\'uomo che vedi', right: 'The man you see' },
        { left: 'Il professore di cui parlo', right: 'The professor I\'m talking about' },
        { left: 'Quello che hai fatto', right: 'What you did' },
        { left: 'Chi non risica, non rosica.', right: 'Nothing ventured, nothing gained.' },
      ],
      feedback: {
        explanation:
          '"In cui" = where/in which. "Che" = whom/that (direct object). "Di cui" = about whom (after "parlare di"). "Quello che" = what. "Chi non risica, non rosica" is an Italian proverb (literally: whoever doesn\'t risk, doesn\'t gain).',
      },
    },
    {
      type: 'reorder',
      id: 'b1-prrel-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['cui', 'la', 'ragione', 'È', 'per', 'sono', 'qui'],
      answer: ['È', 'la', 'ragione', 'per', 'cui', 'sono', 'qui'],
      feedback: {
        correct: 'Perfetto! "È la ragione per cui sono qui."',
        explanation:
          '"La ragione per cui" = the reason why (for which). "Per cui" after preposition: cannot use "che." "Sono qui" = I am here. Full sentence: This is the reason why I am here.',
      },
    },
    {
      type: 'translation',
      id: 'b1-prrel-09',
      source: 'The friend with whom I studied is the one who passed the exam. What he did is impressive.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'L\'amico con cui ho studiato è quello che ha superato l\'esame. Quello che ha fatto è impressionante.',
        'L\'amico con cui studiavo è quello che ha superato l\'esame. Ciò che ha fatto è impressionante.',
      ],
      feedback: {
        explanation:
          '"With whom" = con cui. "The one who" = quello che (or chi). "What he did" = quello che ha fatto / ciò che ha fatto. Two different relative pronoun uses: "con cui" (after preposition) and "quello che" (no antecedent, "what").',
        modelAnswer: 'L\'amico con cui ho studiato è quello che ha superato l\'esame. Quello che ha fatto è impressionante.',
      },
    },
  ],
};
