import type { Lesson } from '../types';

export const pronomiIndiretti: Lesson = {
  slug: 'pronomi-indiretti',
  title: 'Pronomi Indiretti',
  level: 'a2',
  order: 8,
  explanation: {
    text: `## Pronomi Indiretti (Indirect Object Pronouns)

Indirect object pronouns replace the **indirect object** — the person or thing receiving the action **indirectly**, usually answering "to whom?" or "for whom?"

### The Pronouns

| Person | Singular | Plural |
|--------|----------|--------|
| 1st | **mi** (to me) | **ci** (to us) |
| 2nd | **ti** (to you) | **vi** (to you all) |
| 3rd | **gli** (to him) | **gli** (to them — spoken) |
| 3rd fem. | **le** (to her) | **loro** (to them — formal written) |
| Formal 2nd | **Le** (to you, formal) | |

**Key difference from direct:** Only 3rd person differs: **lo/la/li/le** (direct) vs **gli/le/gli** (indirect).

### Position

Like direct pronouns: **before** the conjugated verb, or **attached** to the infinitive.

*Gli parlo.* (I speak to him.) / *Voglio parlargli.* (I want to speak to him.)

### Common Verbs Taking Indirect Objects

*parlare a, scrivere a, telefonare a, mandare a, dare a, dire a, chiedere a, rispondere a, regalare a, portare a, insegnare a, spiegare a, sembrare a, piacere a*

### No Agreement

Unlike direct pronouns, **indirect pronouns do NOT trigger participle agreement**:
*Gli ho parlato.* (not: *gli ho parlata*)
*Le ho scritto.* (not: *le ho scritta*)

### Piacere with Indirect Pronouns

The verb *piacere* (to please/like) uses indirect pronouns:
*Mi piace la pizza.* = Pizza pleases me. = I like pizza.
*Gli piacciono i film.* = Films please him. = He likes films.`,
    tables: [
      {
        caption: 'Direct vs Indirect Comparison',
        headers: ['Person', 'Direct', 'Indirect', 'Example (indirect)'],
        rows: [
          ['io', 'mi', 'mi', 'Mi ha detto la verità.'],
          ['tu', 'ti', 'ti', 'Ti scrivo domani.'],
          ['lui', 'lo', 'gli', 'Gli parlo spesso.'],
          ['lei', 'la', 'le', 'Le mando un messaggio.'],
          ['noi', 'ci', 'ci', 'Ci ha spiegato tutto.'],
          ['voi', 'vi', 'vi', 'Vi telefono stasera.'],
          ['loro', 'li/le', 'gli (spoken)', 'Gli scrivo una lettera.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-prind-01',
      prompt: '___ scrivo una email stasera. (I\'ll write her an email tonight.) — a lei',
      answer: 'Le',
      hint: 'a lei → le (indirect, 3rd pers. fem. sing.)',
      feedback: {
        correct: 'Esatto! "Le scrivo" — le = indirect object pronoun for lei.',
        incorrect: 'The correct answer is "Le".',
        explanation:
          '"Scrivere a qualcuno" = to write to someone. "A lei" → indirect pronoun "le" (not "la" which is direct). Le scrivo una email = I write her an email / I write an email to her.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-prind-02',
      prompt: 'Ho incontrato Marco e ___ ho detto la notizia. (I met Marco and told him the news.)',
      answer: 'gli',
      feedback: {
        correct: 'Perfetto! "Gli ho detto" — gli = indirect for lui.',
        incorrect: 'The correct answer is "gli".',
        explanation:
          '"Dire a qualcuno" = to tell someone. "A Marco" (masc. sing.) → indirect pronoun "gli". Note: no participle agreement with indirect pronouns — "detto" stays unchanged.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-prind-03',
      prompt: 'Professore, ___ posso fare una domanda? (Professor, can I ask you a question?) — formal',
      answer: 'Le',
      hint: 'Formal "you" (Lei) → indirect pronoun = Le (capital L)',
      feedback: {
        correct: 'Bravo/a! "Le posso fare una domanda?" — formal indirect pronoun.',
        incorrect: 'The correct answer is "Le".',
        explanation:
          'Formal address (Lei = you): indirect pronoun = Le (capital L to distinguish from "le" = to her). "Fare una domanda a qualcuno" = to ask someone a question.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-prind-04',
      question: 'Which is correct? "She gave us the book."',
      options: [
        { value: 'a', label: 'Ci ha dato il libro.' },
        { value: 'b', label: 'Vi ha dato il libro.' },
        { value: 'c', label: 'Gli ha dato il libro.' },
        { value: 'd', label: 'Le ha dato il libro.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Corretto! "Ci ha dato" — ci = to us (1st pers. plur. indirect).',
        incorrect: 'The correct answer is "Ci ha dato il libro."',
        explanation:
          '"Us" (noi) as indirect object = ci. "Dare a noi" → ci. "Il libro" is the direct object (given). Ci ha dato il libro = she gave the book to us.',
        optionExplanations: {
          b: '"Vi" = to you all (2nd pers. plur.); "ci" = to us (1st pers. plur.).',
          c: '"Gli" = to him or to them; not "to us".',
          d: '"Le" = to her; not "to us".',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-prind-05',
      question: 'Fill in: "___ piacciono molto i film d\'azione." — He likes action films a lot.',
      options: [
        { value: 'a', label: 'Lo' },
        { value: 'b', label: 'Li' },
        { value: 'c', label: 'Gli' },
        { value: 'd', label: 'Le' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Gli piacciono" — gli = indirect for lui + piacere.',
        incorrect: 'The correct answer is "Gli".',
        explanation:
          '"Piacere" uses indirect object pronouns: mi/ti/gli/le/ci/vi/gli. "A lui" → gli. "I film d\'azione" (plur.) → piacciono (3rd plur. of piacere). Gli piacciono = they please him = he likes them.',
        optionExplanations: {
          a: '"Lo" is a direct object pronoun; piacere uses indirect pronouns.',
          b: '"Li" is a direct object pronoun (masc. plur.).',
          d: '"Le" = to her; the sentence says "he likes".',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-prind-06',
      verb: 'Replace with indirect pronoun: "Ho telefonato a ___"',
      tense: 'Indirect Object Pronoun replacement',
      pronouns: [
        'a te (informal)',
        'a mia madre',
        'a Marco',
        'a noi',
        'a voi',
        'ai miei amici',
      ],
      answers: ['ti ho telefonato', 'le ho telefonato', 'gli ho telefonato', 'ci ho telefonato', 'vi ho telefonato', 'gli ho telefonato'],
      feedback: {
        explanation:
          'Indirect pronouns: a te → ti, a mia madre (fem.) → le, a Marco (masc.) → gli, a noi → ci, a voi → vi, ai miei amici (plur.) → gli (spoken Italian). No participle agreement: telefonato stays unchanged throughout.',
      },
    },
    {
      type: 'match',
      id: 'a2-prind-07',
      instruction: 'Match each sentence with its English translation.',
      pairs: [
        { left: 'Ti ho mandato un messaggio.', right: 'I sent you a message.' },
        { left: 'Gli spiego la grammatica.', right: 'I explain the grammar to him.' },
        { left: 'Le piace il caffè.', right: 'She likes coffee.' },
        { left: 'Ci ha risposto subito.', right: 'She/he replied to us immediately.' },
        { left: 'Voglio parlargli.', right: 'I want to speak to him.' },
      ],
      feedback: {
        explanation:
          'Note "le piace il caffè" = lit. "coffee pleases her" = she likes coffee (piacere with indirect le). "Parlargli" = infinitive + gli attached. "Ci ha risposto" = no agreement — indirect pronoun ci never triggers it.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-prind-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['regalo', 'Gli', 'un', 'libro', 'per', 'compleanno', 'il', 'suo'],
      answer: ['Gli', 'regalo', 'un', 'libro', 'per', 'il', 'suo', 'compleanno'],
      feedback: {
        correct: 'Perfetto! "Gli regalo un libro per il suo compleanno."',
        explanation:
          '"Gli regalo" = I give him (indirect gli before verb). "Un libro" = a book (direct object). "Per il suo compleanno" = for his birthday (per + definite article + possessive + noun).',
      },
    },
    {
      type: 'translation',
      id: 'a2-prind-09',
      source: 'I wrote to my parents and told them about my new job.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Ho scritto ai miei genitori e gli ho raccontato del mio nuovo lavoro.',
        'Ho scritto ai miei genitori e ho raccontato loro del mio nuovo lavoro.',
        'Gli ho scritto e gli ho raccontato del mio nuovo lavoro.',
      ],
      feedback: {
        explanation:
          '"I wrote to" = ho scritto a → gli ho scritto (gli = to them, spoken). "I told them" = gli ho raccontato (raccontare a qualcuno). "Loro" can also be used post-verb in formal writing. "Del mio nuovo lavoro" = di + il = del.',
        modelAnswer: 'Ho scritto ai miei genitori e gli ho raccontato del mio nuovo lavoro.',
      },
    },
  ],
};
