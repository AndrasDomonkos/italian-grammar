import type { Lesson } from '../types';

export const neECi: Lesson = {
  slug: 'ne-e-ci',
  title: 'Ne e Ci',
  level: 'a2',
  order: 9,
  explanation: {
    text: `## Ne e Ci — Two Special Pronouns

**Ne** and **ci** (also **vi**) are particles with multiple functions. They are among the most used pronouns in everyday Italian.

---

## NE

### 1. Partitive ne (quantity replacement)

Replaces "di + noun" when referring to an unspecified quantity. It answers "how much/many?":
*Vuoi del caffè? — Sì, ne voglio un po'.* (Do you want some coffee? — Yes, I want some.)
*Hai dei fratelli? — Ne ho due.* (Do you have brothers? — I have two [of them].)

**With passato prossimo:** the participle agrees with ne (as if it were a direct object):
*Ne ho mangiati tre.* (I ate three of them — masc. plur.)
*Ne ho comprata una.* (I bought one of them — fem. sing.)

### 2. Ne = di lui/lei/loro/esso/essa (of him, of it, of them)
*Cosa ne pensi?* — What do you think of it/them?
*Non ne sono sicuro.* — I'm not sure about it.

### 3. Ne = "from there" (literary/frozen phrases)
*Vado via di qui → Me ne vado.* (I'm leaving / I'm out of here.)

---

## CI

### 1. Ci = "there" (replaces a + place or in + place)
*Vai a Roma? — Sì, ci vado domani.* (Are you going to Rome? — Yes, I'm going there tomorrow.)
*Sei mai stato a Parigi? — Ci sono stato l'anno scorso.* (Have you ever been to Paris? — I was there last year.)

### 2. Ci = "about it / on it" (replaces a + noun/idea)
*Hai pensato alla proposta? — Sì, ci ho pensato.* (Did you think about the proposal? — Yes, I thought about it.)
*Non ci credo.* (I don't believe it.)

### 3. Ci = us / ourselves (reflexive/reciprocal — review from A1)
*Ci vediamo domani.* (We see each other tomorrow.)`,
    tables: [
      {
        caption: 'Ne and Ci at a Glance',
        headers: ['Pronoun', 'Function', 'Example', 'Translation'],
        rows: [
          ['ne', 'quantity', 'Ne voglio due.', 'I want two (of them).'],
          ['ne', 'di + idea', 'Ne parliamo dopo.', 'We\'ll talk about it later.'],
          ['ne', 'me ne vado', 'Me ne vado.', 'I\'m leaving.'],
          ['ci', 'place', 'Ci vado domani.', 'I\'m going there tomorrow.'],
          ['ci', 'a + idea', 'Ci penso io.', 'I\'ll think about it.'],
          ['ci', 'us / we', 'Ci vediamo!', 'See you! / We see each other.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-neci-01',
      prompt: 'Quante pizze hai mangiato? — ___ ho mangiate due. (I ate two of them.)',
      answer: 'Ne',
      hint: 'ne replaces the partitive/quantity reference to pizze.',
      feedback: {
        correct: 'Esatto! "Ne ho mangiate due" — ne + agreement (pizze = fem. plur. → mangiate).',
        incorrect: 'The correct answer is "Ne".',
        explanation:
          '"Ne" replaces the quantity reference. "Pizze" = feminine plural → participio agrees: mangiate (not mangiato). Ne ho mangiate due = I ate two of them.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-neci-02',
      prompt: 'Sei mai andato a Tokyo? — Sì, ___ sono andato l\'anno scorso. (Yes, I went there last year.)',
      answer: 'ci',
      hint: 'ci replaces "a Tokyo" (place).',
      feedback: {
        correct: 'Perfetto! "Ci sono andato" — ci replaces "a + place".',
        incorrect: 'The correct answer is "ci".',
        explanation:
          '"Ci" replaces "a Tokyo" (a + place noun). Ci sono andato = I went there. "Andare" uses essere → sono andato (agree with subject, masc. sing.).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-neci-03',
      prompt: 'Hai pensato alla mia proposta? — No, non ___ ho ancora pensato.',
      answer: 'ci',
      hint: 'ci replaces "a + idea/concept".',
      feedback: {
        correct: 'Bravo/a! "Non ci ho ancora pensato" — ci = a + idea.',
        incorrect: 'The correct answer is "ci".',
        explanation:
          '"Pensare a qualcosa" = to think about something. "A + idea" → ci. Non ci ho ancora pensato = I haven\'t thought about it yet. Note: "ancora" goes between auxiliary and participle.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-neci-04',
      question: '"Hai del latte? — Sì, ___ ho ancora un litro."',
      options: [
        { value: 'a', label: 'lo' },
        { value: 'b', label: 'ci' },
        { value: 'c', label: 'ne' },
        { value: 'd', label: 'gli' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Corretto! "Ne ho ancora un litro" — ne for quantity of latte.',
        incorrect: 'The correct answer is "ne".',
        explanation:
          '"Ne ho ancora un litro" = I still have a litre of it. "Ne" replaces the partitive "del latte" and allows the quantity "un litro" to follow. This is the classic partitive ne construction.',
        optionExplanations: {
          a: '"Lo" would replace the specific object entirely: "lo ho" = I have it (no room for "un litro").',
          b: '"Ci" replaces places or a + idea, not quantities of nouns.',
          d: '"Gli" is an indirect pronoun (to him).',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-neci-05',
      question: '"Non ___ credo." What does this sentence mean?',
      options: [
        { value: 'a', label: 'I don\'t believe her.' },
        { value: 'b', label: 'I don\'t believe it / I don\'t believe in it.' },
        { value: 'c', label: 'I don\'t believe him.' },
        { value: 'd', label: 'I don\'t believe anything.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Non ci credo" = I don\'t believe it.',
        incorrect: 'The correct answer is (b) — I don\'t believe it.',
        explanation:
          '"Credere a qualcosa" = to believe in something. "A + idea" → ci. "Non ci credo" = I don\'t believe it/in it. This is a very common expression.',
        optionExplanations: {
          a: '"I don\'t believe her" = Non le credo (le = indirect, to her).',
          c: '"I don\'t believe him" = Non gli credo (gli = indirect, to him).',
          d: '"I don\'t believe anything" = Non credo a niente.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-neci-06',
      verb: 'NE — quantity. Answer "Quanti/e ___ hai?" with the given number.',
      tense: 'Replace with ne + agreement',
      pronouns: [
        'caffè (masc.) — 3',
        'pizze (fem.) — 2',
        'libri (masc.) — 5',
        'bottiglie (fem.) — 1',
        'biglietti (masc.) — 4',
        'arance (fem.) — 6',
      ],
      answers: [
        'Ne ho presi tre',
        'Ne ho mangiate due',
        'Ne ho letti cinque',
        'Ne ho comprata una',
        'Ne ho presi quattro',
        'Ne ho comprate sei',
      ],
      feedback: {
        explanation:
          'With "ne" replacing a partitive direct object in passato prossimo, the participle agrees: masc. sing. → -o, masc. plur. → -i, fem. sing. → -a, fem. plur. → -e. The quantity follows: ne ho presi tre, ne ho mangiate due, etc.',
      },
    },
    {
      type: 'match',
      id: 'a2-neci-07',
      instruction: 'Match each sentence with the correct meaning of ne or ci.',
      pairs: [
        { left: 'Ne voglio ancora.', right: 'ne = quantity (more of it)' },
        { left: 'Ci vado spesso.', right: 'ci = place (there)' },
        { left: 'Cosa ne pensi?', right: 'ne = about it/them' },
        { left: 'Me ne vado.', right: 'ne = away from here' },
        { left: 'Ci ho messo un\'ora.', right: 'ci = to do it (time/effort)' },
      ],
      feedback: {
        explanation:
          '"Metterci" = to take (time): ci ho messo un\'ora = it took me an hour. "Me ne vado" = I\'m leaving (andarsene, reflexive + ne). "Cosa ne pensi?" = what do you think of it (ne = di + cosa). Each use of ci/ne must be learnt in context.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-neci-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['cinque', 'ne', 'Ho', 'comprati', 'al', 'mercato'],
      answer: ['Ne', 'ho', 'comprati', 'cinque', 'al', 'mercato'],
      feedback: {
        correct: 'Perfetto! "Ne ho comprati cinque al mercato."',
        explanation:
          '"Ne ho comprati cinque" = I bought five of them. "Ne" before auxiliary "ho". Participle "comprati" agrees with the implied masculine plural noun. "Al mercato" = at the market (a + il = al).',
      },
    },
    {
      type: 'translation',
      id: 'a2-neci-09',
      source: 'Do you go to the gym often? — Yes, I go there three times a week.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Vai spesso in palestra? — Sì, ci vado tre volte a settimana.',
        'Vai spesso in palestra? — Sì, ci vado tre volte alla settimana.',
        'Vai spesso in palestra? — Sì, ci vado tre volte per settimana.',
      ],
      feedback: {
        explanation:
          '"There" → ci (replaces "in palestra" = a + place). "Ci vado" = I go there. "Three times a week" = tre volte a settimana. "Spesso" (often) can also go before "in palestra": vai in palestra spesso? Both word orders are natural.',
        modelAnswer: 'Vai spesso in palestra? — Sì, ci vado tre volte a settimana.',
      },
    },
  ],
};
