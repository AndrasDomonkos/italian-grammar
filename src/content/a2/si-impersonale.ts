import type { Lesson } from '../types';

export const siImpersonale: Lesson = {
  slug: 'si-impersonale',
  title: 'Si Impersonale e Passivante',
  level: 'a2',
  order: 17,
  explanation: {
    text: `## Si Impersonale e Si Passivante

Italian uses **si** in two important constructions that have no direct parallel in English.

---

## 1. Si Impersonale (Impersonal "One")

Used to express what "one does," "people do," or "you do" in general:

*In Italia si mangia molta pasta.* (In Italy, one eats / people eat a lot of pasta.)
*Come si dice "hello" in italiano?* (How do you say "hello" in Italian?)
*Si può parcheggiare qui?* (Can one park here? / Is parking allowed here?)

**Rules:**
- The verb is always **3rd person singular** (regardless of the noun)
- Exception: if what follows is a **plural noun**, the verb is **3rd person plural**:
  *Si mangiano molte verdure.* (People eat a lot of vegetables.)

**With adjectives/participles after si impersonale:**
The adjective/participle uses the **plural masculine** form:
*Quando si è stanchi, si dorme meglio.* (When one is tired, one sleeps better.)

---

## 2. Si Passivante (Passive "si")

Replaces the passive construction. Used when the agent (who does the action) is unknown or unimportant:

*Si vendono appartamenti.* (Apartments are sold / Apartments for sale.)
*Si parla italiano qui.* (Italian is spoken here.)
*Si cercano collaboratori.* (Collaborators wanted / Being sought.)

**The verb agrees with the subject (noun):**
*Si vende una casa.* (A house is for sale.) ← singular
*Si vendono due case.* (Two houses are for sale.) ← plural

### Distinguishing the Two

The distinction is subtle — both use si + verb. The key is: if there is a specific noun that the action relates to, it's often passivante; if it describes general human behavior, it's impersonale.`,
    tables: [
      {
        caption: 'Si Impersonale vs Si Passivante',
        headers: ['Type', 'Structure', 'Example', 'English'],
        rows: [
          ['Impersonale', 'si + verb (3rd sing.)', 'Si mangia alle otto.', 'One eats / People eat at eight.'],
          ['Impersonale + plur.', 'si + verb (3rd plur.)', 'Si mangiano le verdure.', 'People eat vegetables.'],
          ['Passivante (sing.)', 'si + verb (3rd sing.) + noun', 'Si vende una casa.', 'A house is for sale.'],
          ['Passivante (plur.)', 'si + verb (3rd plur.) + noun', 'Si vendono appartamenti.', 'Apartments for sale.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-si-01',
      prompt: 'Come ___ "goodbye" in italiano? (How do you say "goodbye" in Italian?)',
      answer: 'si dice',
      hint: 'si impersonale + 3rd person singular of dire',
      feedback: {
        correct: 'Esatto! "Come si dice" — si impersonale for general "how does one say."',
        incorrect: 'The correct answer is "si dice".',
        explanation:
          '"Si dice" is the standard expression for "how do you say / how does one say." It uses si impersonale + 3rd person singular of dire. This is extremely common: come si dice, come si scrive, come si pronuncia.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-si-02',
      prompt: 'In questo negozio ___ libri usati. (In this shop, second-hand books are sold.) — vendere',
      answer: 'si vendono',
      hint: 'libri (plur.) → si passivante → verb agrees: vendono',
      feedback: {
        correct: 'Perfetto! "Si vendono libri usati" — si passivante, plural agreement.',
        incorrect: 'The correct answer is "si vendono".',
        explanation:
          '"Libri" is plural → si passivante uses 3rd person plural: si vendono. If it were "si vende un libro" (singular) → 3rd person singular. The noun following determines the verb number.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-si-03',
      prompt: 'Quando ___ (si + essere) giovani, non si pensa al futuro.',
      answer: 'si è',
      hint: 'si impersonale + adjective → adjective is plural masculine; verb is singular',
      feedback: {
        correct: 'Bravo/a! "Quando si è giovani" — si è + plural adjective.',
        incorrect: 'The correct answer is "si è".',
        explanation:
          'With si impersonale + essere + adjective: the verb is 3rd person SINGULAR (si è), but the adjective is PLURAL MASCULINE (giovani, not giovane). This is a fixed rule: quando si è stanchi/giovani/tristi.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-si-04',
      question: 'Which sentence correctly says "In this restaurant, you eat very well"?',
      options: [
        { value: 'a', label: 'In questo ristorante, si mangia benissimo.' },
        { value: 'b', label: 'In questo ristorante, si mangiano benissimo.' },
        { value: 'c', label: 'In questo ristorante, si mangiamo benissimo.' },
        { value: 'd', label: 'In questo ristorante, mangi benissimo.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Corretto! "Si mangia benissimo" — si impersonale + 3rd singular.',
        incorrect: 'The correct answer is "si mangia benissimo."',
        explanation:
          'Si impersonale + verb of activity (mangiare) with no following noun → 3rd person singular: si mangia. "Benissimo" = superlativo assoluto of bene (very well).',
        optionExplanations: {
          b: '"Si mangiano" would be needed if followed by a plural noun (si mangiano molti piatti). No noun here → singular.',
          c: '"Si mangiamo" is not a valid form — si impersonale never uses noi ending.',
          d: '"Mangi benissimo" = you eat very well — this addresses the person, not general "one."',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-si-05',
      question: '"___ collaboratori per il progetto." (Collaborators are sought for the project.)',
      options: [
        { value: 'a', label: 'Si cerca' },
        { value: 'b', label: 'Si cercano' },
        { value: 'c', label: 'Si cercate' },
        { value: 'd', label: 'Si cerchiamo' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Si cercano" — collaboratori is plural → si passivante agrees.',
        incorrect: 'The correct answer is "Si cercano".',
        explanation:
          '"Collaboratori" = masculine plural noun. Si passivante: verb agrees with the noun. Cercare + loro → cercano. Si + cercano = si cercano. This is the standard Italian equivalent of "collaborators wanted."',
        optionExplanations: {
          a: '"Si cerca" = singular — would be for "si cerca un collaboratore."',
          c: '"Si cercate" is not possible — si impersonale never uses voi form.',
          d: '"Si cerchiamo" is not possible.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-si-06',
      verb: 'Si impersonale — complete each general statement',
      tense: 'Use si + 3rd person (sing. or plur. as needed)',
      pronouns: [
        'In Italia ___ molta pasta. (mangiare)',
        'Come ___ "thanks"? (dire)',
        'Qui ___ tre lingue. (parlare)',
        'Non ___ fumare qui. (potere)',
        'D\'estate ___ al mare. (andare)',
        'Quando ___ stanchi, ___ meglio. (essere / dormire)',
      ],
      answers: [
        'si mangia',
        'si dice',
        'si parlano',
        'si può',
        'si va',
        'si è stanchi, si dorme',
      ],
      feedback: {
        explanation:
          '"Si mangia" (no noun → singular). "Si dice" (singular, impersonal). "Si parlano tre lingue" (tre lingue = plural → parlano). "Non si può fumare" (potere modal + inf.). "Si va" (andare, singular). "Si è stanchi" (essere + adj. → adj. plural masc., verb singular).',
      },
    },
    {
      type: 'match',
      id: 'a2-si-07',
      instruction: 'Match each si construction with its English equivalent.',
      pairs: [
        { left: 'Si parla inglese qui.', right: 'English is spoken here.' },
        { left: 'Come si scrive?', right: 'How do you spell/write it?' },
        { left: 'Si vendono case.', right: 'Houses for sale.' },
        { left: "Si è felici quando si mangia bene.", right: "One is happy when one eats well." },
        { left: 'Non si entra senza biglietto.', right: 'No entry without a ticket.' },
      ],
      feedback: {
        explanation:
          '"Si parla inglese" = passivante (language is spoken). "Come si scrive" = impersonale (general how). "Si vendono case" = passivante (plural). "Si è felici" = impersonale + adj. (plural adj. felici). "Non si entra" = impersonale prohibition (one doesn\'t enter = no entry).',
      },
    },
    {
      type: 'reorder',
      id: 'a2-si-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['qui', 'non', 'Si', 'fotografare', 'può'],
      answer: ['Si', 'non', 'può', 'fotografare', 'qui'],
      feedback: {
        correct: 'Perfetto! "Non si può fotografare qui." (Photography is not allowed here.)',
        explanation:
          '"Non si può + infinitive" = one cannot / it is not permitted to. Si impersonale with potere. "Fotografare" = to take photos. This sign-type sentence is very common in Italian museums and official spaces.',
      },
    },
    {
      type: 'translation',
      id: 'a2-si-09',
      source: 'In Italy, people eat a lot of vegetables in summer, and they speak very quickly.',
      direction: 'en-to-it',
      acceptedAnswers: [
        "In Italia, d'estate si mangiano molte verdure e si parla molto velocemente.",
        "In Italia, d'estate si mangiano tante verdure e si parla molto velocemente.",
        "In Italia, in estate si mangiano molte verdure e si parla molto velocemente.",
      ],
      feedback: {
        explanation:
          '"People eat vegetables" = si mangiano molte verdure (verdure is plural → si mangiano). "They speak quickly" = si parla molto velocemente (general activity, no noun → singular). "In summer" = d\'estate / in estate. Two si constructions in one sentence.',
        modelAnswer: "In Italia, d'estate si mangiano molte verdure e si parla molto velocemente.",
      },
    },
  ],
};
