import type { Lesson } from '../types';

export const formaPassiva: Lesson = {
  slug: 'forma-passiva',
  title: 'Forma Passiva',
  level: 'b1',
  order: 10,
  explanation: {
    text: `## La Forma Passiva (The Passive Voice)

In the passive voice, the grammatical subject **receives** the action rather than performing it. Italian has several ways to form the passive.

### Method 1 — Essere + Participio Passato (Main Passive)

**essere (in any tense) + participio passato (agrees with subject)**

*Il libro è scritto da Umberto Eco.* (The book is written by Umberto Eco.)
*La casa è stata venduta.* (The house was/has been sold.)
*Il progetto sarà completato domani.* (The project will be completed tomorrow.)

The participle agrees with the **subject** in gender and number.

### The "da" Agent

The agent (who performs the action) is introduced by **da**:
*La torta è stata mangiata **da** Marco.* (The cake was eaten **by** Marco.)
*Il problema è stato risolto **dai** tecnici.* (The problem was solved **by** the technicians.)

### Method 2 — Venire + Participio (Process/Action Passive)

**venire** (to come) replaces essere to emphasize the action in progress (NOT for compound tenses):
*La posta viene consegnata ogni mattina.* (The mail is delivered every morning.)
*Le domande vengono corrette dal professore.* (The questions are corrected by the professor.)

⚠️ Venire cannot be used in compound tenses: *la posta è stata consegnata* (passato prossimo) — NOT *è venuta consegnata*.

### Method 3 — Andare + Participio (Obligation)

**andare + participio** = must be / should be (expresses necessity):
*Questo modulo va compilato.* (This form must be filled in.)
*Le istruzioni vanno lette con attenzione.* (The instructions must be read carefully.)

### Method 4 — Si Passivante (review)

*Si vende una casa.* (A house is being sold.)
*Si parlano tre lingue.* (Three languages are spoken.)`,
    tables: [
      {
        caption: 'Passive with Essere — Key Tenses',
        headers: ['Tense', 'Active', 'Passive'],
        rows: [
          ['Presente', 'Scrivono il libro.', 'Il libro è scritto.'],
          ['Passato prossimo', 'Hanno scritto il libro.', 'Il libro è stato scritto.'],
          ['Imperfetto', 'Scrivevano il libro.', 'Il libro era scritto.'],
          ['Futuro', 'Scriveranno il libro.', 'Il libro sarà scritto.'],
          ['Condizionale', 'Scriverebbero il libro.', 'Il libro sarebbe scritto.'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "e stato scritto", translation: "it was written", example: "Il romanzo e stato scritto nel 1987.", exampleTranslation: "The novel was written in 1987." },
    { word: "viene prodotto", translation: "it is produced", example: "Questo vino viene prodotto in Toscana.", exampleTranslation: "This wine is produced in Tuscany." },
    { word: "e stata costruita", translation: "it was built (fem.)", example: "La cattedrale e stata costruita nel Medioevo.", exampleTranslation: "The cathedral was built in the Middle Ages." },
    { word: "vengono venduti", translation: "they are sold", example: "I biglietti vengono venduti online.", exampleTranslation: "The tickets are sold online." },
    { word: "e stato scoperto", translation: "it was discovered", example: "Il vaccino e stato scoperto nel secolo scorso.", exampleTranslation: "The vaccine was discovered in the last century." },
    { word: "sara pubblicato", translation: "it will be published", example: "Il libro sara pubblicato in primavera.", exampleTranslation: "The book will be published in spring." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-passiva-01',
      prompt: 'La lettera ___ (scrivere — presente passivo) da Marco ogni settimana. (The letter is written by Marco every week.)',
      answer: 'è scritta',
      hint: 'essere (presente) + participio, agrees with la lettera (fem. sing.)',
      feedback: {
        correct: 'Esatto! "È scritta" — passive: essere presente + scritta (fem. sing.).',
        incorrect: 'The correct answer is "è scritta".',
        explanation:
          '"Scrivere" → participio: scritto. Passive: essere (presente, 3rd sing.) + scritta (fem. sing. agrees with "la lettera"). "Da Marco" = by Marco.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-passiva-02',
      prompt: 'I documenti ___ (firmare — passato prossimo passivo) dal direttore. (The documents were signed by the director.)',
      answer: 'sono stati firmati',
      hint: 'essere passato prossimo + participio, agree with i documenti (masc. plur.)',
      feedback: {
        correct: 'Perfetto! "Sono stati firmati" — passato prossimo passivo, masc. plur.',
        incorrect: 'The correct answer is "sono stati firmati".',
        explanation:
          'Passato prossimo passivo: essere (passato prossimo: sono stati) + firmati (masc. plur., agrees with "i documenti"). "Sono stati" = the passato prossimo of essere, masc. plur.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-passiva-03',
      prompt: 'Questo modulo ___ (andare + compilare) entro venerdì. (This form must be filled in by Friday.)',
      answer: 'va compilato',
      hint: 'andare + participio = must be done; agree with "questo modulo" (masc. sing.)',
      feedback: {
        correct: 'Bravo/a! "Va compilato" — andare + participio for obligation.',
        incorrect: 'The correct answer is "va compilato".',
        explanation:
          '"Andare + participio" = must be / has to be. "Va" = lui/lei form of andare (present). "Compilato" = masc. sing. agrees with "il modulo."',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-passiva-04',
      question: 'Convert to passive: "I tecnici hanno riparato il computer."',
      options: [
        { value: 'a', label: 'Il computer è riparato dai tecnici.' },
        { value: 'b', label: 'Il computer è stato riparato dai tecnici.' },
        { value: 'c', label: 'Il computer viene stato riparato dai tecnici.' },
        { value: 'd', label: 'Il computer fu riparato dai tecnici.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "È stato riparato" — passato prossimo passivo matches "hanno riparato."',
        incorrect: 'The correct answer is "Il computer è stato riparato dai tecnici."',
        explanation:
          'Active passato prossimo (hanno riparato) → passive passato prossimo (è stato riparato). "Riparato" = masc. sing. agrees with "il computer." Passive agent: "dai tecnici" (da + i = dai).',
        optionExplanations: {
          a: '"È riparato" = presente passivo — mismatches the active passato prossimo.',
          c: '"Viene stato" is impossible — venire cannot be used in compound tenses.',
          d: '"Fu riparato" = passato remoto passivo — technically possible but mismatches the passato prossimo.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-passiva-05',
      question: '"La spazzatura ___ ogni martedì." (The rubbish is collected every Tuesday.) — venire',
      options: [
        { value: 'a', label: 'è raccolta' },
        { value: 'b', label: 'viene raccolta' },
        { value: 'c', label: 'va raccolta' },
        { value: 'd', label: 'si raccoglie' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Viene raccolta" — venire passive for recurring actions/processes.',
        incorrect: 'The correct answer is "viene raccolta".',
        explanation:
          '"Venire + participio" emphasizes the action as a process that happens regularly. For recurring events (ogni martedì), "viene raccolta" is preferred over "è raccolta." Agreement: raccolta (fem. sing., la spazzatura).',
        optionExplanations: {
          a: '"È raccolta" is grammatically correct but "viene raccolta" is preferred for processes.',
          c: '"Va raccolta" = must be collected — obligation, not just description.',
          d: '"Si raccoglie" = si passivante — also correct but asked specifically about venire.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-passiva-06',
      verb: 'Build the passive for each tense (subject: il libro — masc. sing.)',
      tense: 'Essere + participio of leggere (letto)',
      pronouns: [
        'Presente',
        'Imperfetto',
        'Passato prossimo',
        'Futuro',
        'Condizionale semplice',
        'Andare (obligation)',
      ],
      answers: [
        'è letto',
        'era letto',
        'è stato letto',
        'sarà letto',
        'sarebbe letto',
        'va letto',
      ],
      feedback: {
        explanation:
          'Passive = essere in tense + letto (masc. sing. agreement with il libro). Presente: è. Imperfetto: era. Passato prossimo: è stato (essere passato prossimo: è stato). Futuro: sarà. Condizionale: sarebbe. Obligation (andare): va letto.',
      },
    },
    {
      type: 'match',
      id: 'b1-passiva-07',
      instruction: 'Match each passive sentence with its active equivalent.',
      pairs: [
        { left: 'Il premio è stato assegnato da Marco.', right: 'Marco ha assegnato il premio.' },
        { left: 'Le regole vengono spiegate.', right: 'Spiegano le regole.' },
        { left: 'Il lavoro va fatto bene.', right: 'Bisogna fare il lavoro bene.' },
        { left: 'La finestra era aperta da qualcuno.', right: 'Qualcuno apriva la finestra.' },
        { left: 'Il contratto sarà firmato.', right: 'Firmeranno il contratto.' },
      ],
      feedback: {
        explanation:
          '"È stato assegnato da Marco" → Marco ha assegnato. "Vengono spiegate" → spiegano (they explain — impersonal active). "Va fatto" → bisogna fare (obligation). "Era aperta" → apriva (imperfect passive → imperfect active). "Sarà firmato" → firmeranno (future passive → active).',
      },
    },
    {
      type: 'reorder',
      id: 'b1-passiva-08',
      instruction: 'Arrange the words to form a correct passive sentence.',
      words: ['lette', 'attentamente', 'istruzioni', 'Le', 'devono', 'essere'],
      answer: ['Le', 'istruzioni', 'devono', 'essere', 'lette', 'attentamente'],
      feedback: {
        correct: 'Perfetto! "Le istruzioni devono essere lette attentamente."',
        explanation:
          '"Devono essere lette" = modal + passive infinitive. "Dovere" + "essere + participio" = must be read. "Lette" = fem. plur. agrees with "le istruzioni." "Attentamente" = carefully (adverb at end).',
      },
    },
    {
      type: 'translation',
      id: 'b1-passiva-09',
      source: 'The new law was approved by Parliament. All citizens must be informed.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'La nuova legge è stata approvata dal Parlamento. Tutti i cittadini devono essere informati.',
        'La nuova legge è stata approvata dal Parlamento. Tutti i cittadini vanno informati.',
      ],
      feedback: {
        explanation:
          '"Was approved" = è stata approvata (passato prossimo passivo, fem. sing. — la legge). "By Parliament" = dal Parlamento (da + il). "Must be informed" = devono essere informati (modal + passive) OR vanno informati (andare passive for obligation). "Tutti i cittadini" = all citizens (masc. plur. → informati).',
        modelAnswer: 'La nuova legge è stata approvata dal Parlamento. Tutti i cittadini devono essere informati.',
      },
    },
  ],
};
