import type { Lesson } from '../types';

export const participioAggettivo: Lesson = {
  slug: 'participio-come-aggettivo',
  title: 'Participio come Aggettivo e in Proposizioni',
  level: 'b1',
  order: 13,
  explanation: {
    text: `## Il Participio Passato come Aggettivo e in Proposizioni

The past participle in Italian goes far beyond compound tenses. It functions as an adjective, as a reduced relative clause, and in absolute constructions.

### 1. Participio as Adjective

The participio passato can describe a noun like an adjective. It agrees in gender and number:

*una porta aperta* (an open door — aperta, fem. sing.)
*i libri scritti in italiano* (books written in Italian — scritti, masc. plur.)
*una donna innamorata* (a woman in love — innamorata, fem. sing.)
*gli esami superati* (the passed exams — superati, masc. plur.)

### 2. Participio in Reduced Relative Clauses

A past participle phrase can replace a full relative clause:

*Il libro **scritto da Calvino*** = il libro **che è stato scritto da Calvino**
(The book written by Calvino)

*Gli studenti **arrivati ieri*** = gli studenti **che sono arrivati ieri**
(The students who arrived yesterday)

*La lettera **mandata la settimana scorsa*** = la lettera **che ho mandato la settimana scorsa**

### 3. Participio in Absolute Constructions (Proposizione Participiale)

A participle phrase with its own subject, used to express time, cause, or condition. The subject differs from the main clause:

*Finita la riunione, siamo andati a casa.*
(The meeting finished, we went home. / Once the meeting was over…)

*Detto questo, ho lasciato la stanza.*
(Having said this, I left the room.)

*Arrivati gli ospiti, abbiamo iniziato a cenare.*
(When the guests arrived / The guests having arrived, we started to dine.)

### 4. Participio Presente (brief intro)

The present participle (-ante/-ente) is used as adjective or noun:
*interessante* (interesting), *corrente* (current, running), *studente* (student = one who studies), *abitante* (inhabitant).

Less common as a verbal form in modern Italian.`,
    tables: [
      {
        caption: 'Participio Passato as Adjective — Agreement',
        headers: ['Noun', 'Participio', 'Example'],
        rows: [
          ['libro (masc. sing.)', 'scritto', 'un libro scritto bene'],
          ['porta (fem. sing.)', 'aperta', 'la porta aperta'],
          ['libri (masc. plur.)', 'scritti', 'libri scritti a mano'],
          ['porte (fem. plur.)', 'aperte', 'le finestre aperte'],
          ['ragazzi (masc. plur.)', 'stanchi', 'i ragazzi stanchi'],
          ['storie (fem. plur.)', 'raccontate', 'storie raccontate bene'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "stanco", translation: "tired (masc.)", example: "Sono tornato a casa stanco dopo una lunga giornata.", exampleTranslation: "I came home tired after a long day." },
    { word: "aperto", translation: "open", example: "Il negozio e aperto fino alle nove di sera.", exampleTranslation: "The shop is open until nine in the evening." },
    { word: "scritto a mano", translation: "handwritten", example: "Ha consegnato una lettera scritta a mano.", exampleTranslation: "He handed in a handwritten letter." },
    { word: "la porta chiusa", translation: "the closed door", example: "Ha bussato alla porta chiusa.", exampleTranslation: "She knocked on the closed door." },
    { word: "una storia raccontata", translation: "a story told", example: "E una storia raccontata da generazioni.", exampleTranslation: "It is a story told by generations." },
    { word: "cotto al forno", translation: "baked / oven-cooked", example: "Preferisco il pesce cotto al forno.", exampleTranslation: "I prefer oven-baked fish." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-part-01',
      prompt: 'La finestra è rimasta ___ tutta la notte. (The window remained open all night.) — aprire',
      answer: 'aperta',
      hint: 'aperto agrees with la finestra (fem. sing.) → aperta',
      feedback: {
        correct: 'Esatto! "Aperta" — participio as adjective, fem. sing. agreement.',
        incorrect: 'The correct answer is "aperta".',
        explanation:
          '"Aprire" → participio: aperto. As adjective, it agrees: aperto/a/i/e. "La finestra" = fem. sing. → aperta.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-part-02',
      prompt: '___ la cena, abbiamo guardato un film. (The dinner finished, we watched a film.)',
      answer: 'Finita',
      hint: 'Absolute participio: agrees with "la cena" (fem. sing.)',
      feedback: {
        correct: 'Perfetto! "Finita la cena" — absolute participio construction.',
        incorrect: 'The correct answer is "Finita".',
        explanation:
          '"Finita la cena" = the dinner having finished / once the dinner was finished. The participio agrees with its subject "la cena" (fem. sing. → finita). This is an absolute construction — the participio has its own subject different from the main clause.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-part-03',
      prompt: 'Gli studenti ___ (arrivare) ieri sono molto bravi. (The students who arrived yesterday are very talented.)',
      answer: 'arrivati',
      hint: 'Reduced relative clause: participio agrees with gli studenti (masc. plur.)',
      feedback: {
        correct: 'Bravo/a! "Gli studenti arrivati ieri" — reduced relative with participio.',
        incorrect: 'The correct answer is "arrivati".',
        explanation:
          '"Gli studenti arrivati ieri" = gli studenti che sono arrivati ieri. The participio replaces the full relative clause. "Arrivare" → arrivato → agrees with gli studenti (masc. plur.) = arrivati.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-part-04',
      question: '"___ il problema, il tecnico ha riavviato il computer." (The problem having been solved,…)',
      options: [
        { value: 'a', label: 'Risolto' },
        { value: 'b', label: 'Risolta' },
        { value: 'c', label: 'Risolvendo' },
        { value: 'd', label: 'Risolti' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Corretto! "Risolto il problema" — masc. sing. agreement with "il problema."',
        incorrect: 'The correct answer is "Risolto".',
        explanation:
          'Absolute participio construction. "Il problema" = masc. sing. → risolvere → risolto (masc. sing.). The participio agrees with its noun subject. Then the main clause follows: il tecnico ha riavviato il computer.',
        optionExplanations: {
          b: '"Risolta" = fem. sing. — "il problema" is masculine.',
          c: '"Risolvendo" = gerundio — different construction (mentre risolveva il problema).',
          d: '"Risolti" = masc. plur. — "il problema" is singular.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-part-05',
      question: 'Which sentence uses the participio correctly as a reduced relative clause?',
      options: [
        { value: 'a', label: 'Il film vedere ieri era noioso.' },
        { value: 'b', label: 'Il film visto ieri era noioso.' },
        { value: 'c', label: 'Il film vedendo ieri era noioso.' },
        { value: 'd', label: 'Il film ha visto ieri era noioso.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Il film visto ieri" — participio as reduced relative clause.',
        incorrect: 'The correct answer is "Il film visto ieri era noioso."',
        explanation:
          '"Visto ieri" = che ho visto ieri (reduced relative). "Il film visto ieri" = the film [that I] watched yesterday. The participio agrees with "il film" (masc. sing. → visto).',
        optionExplanations: {
          a: '"Vedere" = infinitive — cannot function as a relative clause modifier.',
          c: '"Vedendo" = gerundio — expresses manner/time, not a relative clause.',
          d: '"Ha visto" = passato prossimo — this would need "che" to introduce a relative clause.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-part-06',
      verb: 'Participio come aggettivo — agree with each noun',
      tense: 'Use the participio of the given verb, agreed with the noun',
      pronouns: [
        'la porta (chiudere)',
        'i documenti (firmare)',
        'le finestre (aprire)',
        'il lavoro (finire)',
        'gli studenti (stancare)',
        'una storia (raccontare)',
      ],
      answers: [
        'chiusa',
        'firmati',
        'aperte',
        'finito',
        'stanchi',
        'raccontata',
      ],
      feedback: {
        explanation:
          'Agreement rules: la porta (fem. sing.) → chiusa. I documenti (masc. plur.) → firmati. Le finestre (fem. plur.) → aperte. Il lavoro (masc. sing.) → finito. Gli studenti (masc. plur.) → stanchi. Una storia (fem. sing.) → raccontata.',
      },
    },
    {
      type: 'match',
      id: 'b1-part-07',
      instruction: 'Match each participio construction with its full-clause equivalent.',
      pairs: [
        { left: 'Il libro scritto da Eco', right: 'Il libro che è stato scritto da Eco' },
        { left: 'Finita la lezione', right: 'Quando la lezione è finita' },
        { left: 'Arrivati a casa', right: 'Quando siamo arrivati a casa' },
        { left: 'Detto questo', right: 'Dopo aver detto questo' },
        { left: 'Gli errori trovati', right: 'Gli errori che sono stati trovati' },
      ],
      feedback: {
        explanation:
          'Participio as adjective/reduced relative: scritto da Eco = che è stato scritto. Absolute participio with different subject: finita la lezione = quando la lezione è finita. Absolute with same subject: arrivati a casa = quando siamo arrivati. Frozen expression: detto questo = after saying this.',
      },
    },
    {
      type: 'reorder',
      id: 'b1-part-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['ospiti', 'cominciato', 'Arrivati', 'abbiamo', 'gli', 'a', 'festeggiare'],
      answer: ['Arrivati', 'gli', 'ospiti', 'abbiamo', 'cominciato', 'a', 'festeggiare'],
      feedback: {
        correct: 'Perfetto! "Arrivati gli ospiti, abbiamo cominciato a festeggiare."',
        explanation:
          '"Arrivati gli ospiti" = absolute participio construction (the guests having arrived). "Gli ospiti" = masc. plur. → arrivati. "Abbiamo cominciato a festeggiare" = main clause. "Cominciare a + infinitivo" = to start to do.',
      },
    },
    {
      type: 'translation',
      id: 'b1-part-09',
      source: 'The letter written by my grandfather was found in an old box. Once read, it moved everyone.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'La lettera scritta da mio nonno è stata trovata in una vecchia scatola. Letta, ha commosso tutti.',
        'La lettera scritta da mio nonno è stata trovata in una vecchia scatola. Una volta letta, ha commosso tutti.',
      ],
      feedback: {
        explanation:
          '"Written by my grandfather" = scritta da mio nonno (participio adj., fem. sing. — la lettera). "Was found" = è stata trovata (passive). "Once read" = letta (absolute participio, fem. sing., agrees with la lettera). "Moved everyone" = ha commosso tutti (commuovere → commosso).',
        modelAnswer: 'La lettera scritta da mio nonno è stata trovata in una vecchia scatola. Letta, ha commosso tutti.',
      },
    },
  ],
};
