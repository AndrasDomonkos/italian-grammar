import type { Lesson } from '../types';

export const discorsoIndiretto: Lesson = {
  slug: 'discorso-indiretto',
  title: 'Discorso Indiretto',
  level: 'b1',
  order: 9,
  explanation: {
    text: `## Il Discorso Indiretto (Reported Speech)

When you report what someone said without quoting them directly, you use **discorso indiretto** (indirect/reported speech). Several changes occur to tenses, pronouns, and time expressions.

### Tense Shifts (Backshift)

When the reporting verb is in the **past** (ha detto, disse, ha riferito…), tenses in the reported clause shift:

| Direct speech | → | Indirect speech (past reporting verb) |
|---------------|---|---------------------------------------|
| Presente | → | Imperfetto |
| Passato Prossimo | → | Trapassato Prossimo |
| Futuro | → | Condizionale Composto |
| Imperativo | → | di + Infinitive |
| Congiuntivo Presente | → | Congiuntivo Imperfetto |

**Present reporting verb — NO tense shift:**
*Dice che viene.* (He says he's coming — same present tense.)

**Past reporting verb — tense shift:**
*Ha detto che veniva.* (He said he was coming — presente → imperfetto.)
*Ha detto che sarebbe venuto.* (He said he would come — futuro → cond. composto.)

### Other Changes

**Pronouns:** 1st/2nd person often shift to 3rd:
*"Sono stanco" → Ha detto che era stanco.*

**Time expressions:**
- oggi → quel giorno
- ieri → il giorno prima
- domani → il giorno dopo / il giorno seguente
- adesso/ora → allora / in quel momento
- questa settimana → quella settimana
- qui → lì

### Questions in Reported Speech

**Yes/No questions:** use **se** (whether):
*"Vieni?" → Ha chiesto se venivo.*

**Wh-questions:** use the question word directly:
*"Dove vai?" → Ha chiesto dove andassi.*
(Question word triggers congiuntivo or indicativo depending on style.)`,
    tables: [
      {
        caption: 'Tense Backshift Summary',
        headers: ['Direct', 'Indirect (past reporting verb)', 'Example'],
        rows: [
          ['presente: sono', 'imperfetto: era', '"Sono stanco" → ha detto che era stanco.'],
          ['passato prossimo: ho fatto', 'trapassato: aveva fatto', '"Ho fatto" → ha detto che aveva fatto.'],
          ['futuro: andrò', 'cond. composto: sarebbe andato', '"Andrò" → ha detto che sarebbe andato.'],
          ['imperativo: vieni!', 'di + infinitive: di venire', '"Vieni!" → ha detto di venire.'],
          ['imperfetto: studiavo', 'imperfetto: studiava', '"Studiavo" → ha detto che studiava.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-discind-01',
      prompt: '"Sono stanco." → Ha detto che ___ stanco. (He said he was tired.)',
      answer: 'era',
      hint: 'Present (sono) → imperfetto (era) when reporting verb is past.',
      feedback: {
        correct: 'Esatto! "Era" — presente "sono" shifts to imperfetto "era" in indirect speech.',
        incorrect: 'The correct answer is "era".',
        explanation:
          'Tense backshift: direct speech presente (sono) → indirect imperfetto (era). "Ha detto" = past reporting verb → tense shift required. Pronoun: "sono" (io) → "era" (lui).',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-discind-02',
      prompt: '"Verrò domani." → Ha detto che ___ il giorno dopo. (She said she would come the next day.)',
      answer: 'sarebbe venuta',
      hint: 'Futuro (verrò) → condizionale composto (sarebbe venuto/a); tomorrow → il giorno dopo.',
      feedback: {
        correct: 'Perfetto! "Sarebbe venuta" — futuro shifts to condizionale composto; female speaker.',
        incorrect: 'The correct answer is "sarebbe venuta".',
        explanation:
          'Futuro → condizionale composto in reported speech. "Verrò" (venire, futuro) → "sarebbe venuta" (condizionale composto, essere verb, female speaker → -a). "Domani" → "il giorno dopo."',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-discind-03',
      prompt: '"Studia!" → Gli ha detto ___ studiare. (She told him to study.)',
      answer: 'di',
      hint: 'Imperative in direct speech → di + infinitive in indirect speech.',
      feedback: {
        correct: 'Bravo/a! "Gli ha detto di studiare" — imperativo → di + infinitive.',
        incorrect: 'The correct answer is "di".',
        explanation:
          'Commands (imperativo) in reported speech become "di + infinitive." "Studia!" → ha detto di studiare. With an indirect object pronoun: "gli ha detto di studiare" = she told him to study.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-discind-04',
      question: '"Hai mangiato?" → Ha chiesto se ___ mangiato.',
      options: [
        { value: 'a', label: 'avevo' },
        { value: 'b', label: 'ho' },
        { value: 'c', label: 'avessi' },
        { value: 'd', label: 'avrei' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Corretto! "Se avevo mangiato" — passato prossimo → trapassato in reported question.',
        incorrect: 'The correct answer is "avevo".',
        explanation:
          'Yes/No questions use "se" in reported speech. "Hai mangiato" (passato prossimo) → trapassato prossimo (avevo mangiato). Ha chiesto se avevo mangiato = he asked if I had eaten.',
        optionExplanations: {
          b: '"Ho mangiato" = passato prossimo — no backshift (only valid with present reporting verb).',
          c: '"Avessi mangiato" = congiuntivo trapassato — possible in formal Italian but trapassato indicativo is standard for reported questions.',
          d: '"Avrei mangiato" = condizionale composto — for futuro backshift, not passato prossimo.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-discind-05',
      question: 'Convert: "Dove abiti?" → Ha chiesto ___.',
      options: [
        { value: 'a', label: 'dove abitavo.' },
        { value: 'b', label: 'dove abito.' },
        { value: 'c', label: 'dove abiterei.' },
        { value: 'd', label: 'se abitavo.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Esatto! "Ha chiesto dove abitavo" — wh-question with backshift.',
        incorrect: 'The correct answer is "dove abitavo."',
        explanation:
          'Wh-questions in reported speech use the question word directly (dove), followed by the backshifted verb. "Abiti" (presente) → "abitavo" (imperfetto). Ha chiesto dove abitavo = he asked where I lived.',
        optionExplanations: {
          b: '"Dove abito" = no backshift — correct with present reporting verb (chiede dove abito).',
          c: '"Abiterei" = conditional — wrong tense.',
          d: '"Se" is for yes/no questions, not wh-questions.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-discind-06',
      verb: 'Tense backshift practice',
      tense: 'Convert direct to indirect (past reporting verb: ha detto che...)',
      pronouns: [
        '"Ho fame." (io)',
        '"Studiavo molto."',
        '"Andrò a Roma."',
        '"Ho parlato con Marco."',
        '"Vieni!" (command to tu)',
        '"Sto lavorando."',
      ],
      answers: [
        'aveva fame',
        'studiava molto',
        'sarebbe andato/a a Roma',
        'aveva parlato con Marco',
        'di venire',
        'stava lavorando',
      ],
      feedback: {
        explanation:
          'Backshifts: presente → imperfetto (ho fame → aveva fame). Imperfetto stays imperfetto (studiava). Futuro → condizionale composto (sarebbe andato/a). Passato prossimo → trapassato (aveva parlato). Imperativo → di + infinitive (di venire). Stare + gerundio → stava + gerundio.',
      },
    },
    {
      type: 'match',
      id: 'b1-discind-07',
      instruction: 'Match each direct speech with its reported speech version.',
      pairs: [
        { left: '"Parto domani."', right: 'Ha detto che sarebbe partito il giorno dopo.' },
        { left: '"Vai via!"', right: 'Ha detto di andare via.' },
        { left: '"Sei stanca?"', right: 'Ha chiesto se ero stanca.' },
        { left: '"Non capisco niente."', right: 'Ha detto che non capiva niente.' },
        { left: '"Quando arrivi?"', right: 'Ha chiesto quando arrivassi.' },
      ],
      feedback: {
        explanation:
          'Time shift: domani → il giorno dopo. Command → di + infinitive. Yes/no question → se + backshift. Presente → imperfetto (capisco → capiva). Wh-question (quando) + congiuntivo or indicativo backshift. "Arrivassi" = congiuntivo imperfetto (formal style).',
      },
    },
    {
      type: 'reorder',
      id: 'b1-discind-08',
      instruction: 'Arrange the words to form the correct reported speech version.',
      words: ['che', 'Ha', 'sarebbe', 'detto', 'tornato', 'il', 'dopo', 'giorno'],
      answer: ['Ha', 'detto', 'che', 'sarebbe', 'tornato', 'il', 'giorno', 'dopo'],
      feedback: {
        correct: 'Perfetto! "Ha detto che sarebbe tornato il giorno dopo."',
        explanation:
          'Direct: "Tornerò domani." → Reported: "Ha detto che sarebbe tornato il giorno dopo." Futuro (tornerò) → condizionale composto (sarebbe tornato). Time: domani → il giorno dopo.',
      },
    },
    {
      type: 'translation',
      id: 'b1-discind-09',
      source: 'Maria told me she had already finished and that she would call me the next day.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Maria mi ha detto che aveva già finito e che mi avrebbe chiamato il giorno dopo.',
        'Maria mi ha detto di aver già finito e che mi avrebbe chiamata il giorno dopo.',
      ],
      feedback: {
        explanation:
          '"She had already finished" = aveva già finito (passato prossimo → trapassato). "She would call" = mi avrebbe chiamato (futuro → condizionale composto). "The next day" = il giorno dopo (domani → il giorno dopo backshift). Two tense shifts in one sentence.',
        modelAnswer: 'Maria mi ha detto che aveva già finito e che mi avrebbe chiamato il giorno dopo.',
      },
    },
  ],
};
