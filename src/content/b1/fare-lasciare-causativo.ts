import type { Lesson } from '../types';

export const fareLasciareCausativo: Lesson = {
  slug: 'fare-lasciare-causativo',
  title: 'Fare e Lasciare Causativo',
  level: 'b1',
  order: 12,
  explanation: {
    text: `## Fare e Lasciare + Infinitivo (Causative Construction)

The **causative** construction expresses that the subject causes or allows someone else to do something. In Italian it uses **fare** (to make/have) or **lasciare** (to let/allow) + infinitive.

### Fare Causativo — "to make/have someone do something"

**fare + infinitivo** (the action is done by someone else, caused by the subject)

*Faccio pulire la casa.* (I'm having the house cleaned / I'm making someone clean the house.)
*La maestra fa studiare gli alunni.* (The teacher makes the students study.)
*Mi ha fatto aspettare un'ora.* (He made me wait an hour.)

### Lasciare Causativo — "to let/allow someone do something"

**lasciare + infinitivo**

*Lasciami parlare!* (Let me speak!)
*I genitori lasciano uscire i figli.* (The parents let the children go out.)
*Non la lascio guidare.* (I won't let her drive.)

### Pronouns with Fare/Lasciare Causativo

When the causative has **only one extra person/thing** (agent or object):
- Use **direct object pronoun** if the infinitive is intransitive (no object):
  *Faccio cantare Maria → La faccio cantare.* (I make her sing.)

When the causative has **two nouns** (both an agent and a direct object of the infinitive):
- The **agent** becomes an **indirect object** (gli, le, loro):
  *Faccio riparare la macchina al meccanico → Gliela faccio riparare.*
  (I'm having the mechanic fix the car → I'm having him fix it.)

### "Farsi + Infinitivo" — getting something done to yourself

*Mi sono fatto tagliare i capelli.* (I had my hair cut / I got a haircut.)
*Si è fatta operare.* (She had an operation / She got herself operated on.)

### In Passato Prossimo — agreement

With "fare" in passato prossimo, the participle **does not agree** (frozen as "fatto"):
*Li ho fatti aspettare.* — wait, actually agreement IS possible but is often skipped.
Common practice: *L'ho fatta cantare.* (agreement with la = her).`,
    tables: [
      {
        caption: 'Fare Causativo — Key Examples',
        headers: ['Structure', 'Example', 'Meaning'],
        rows: [
          ['fare + inf. (no agent)', 'Faccio riparare la macchina.', 'I\'m having the car repaired.'],
          ['fare + inf. + a/agent', 'Faccio riparare la macchina al meccanico.', 'I\'m having the mechanic fix the car.'],
          ['farsi + inf.', 'Mi faccio tagliare i capelli.', 'I\'m getting my hair cut.'],
          ['lasciare + inf.', 'Lasciami dormire!', 'Let me sleep!'],
          ['pronoun + fare + inf.', 'Lo faccio studiare.', 'I make him study.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-caus-01',
      prompt: 'La mamma ___ (fare, presente) i bambini mangiare la verdura. (The mother makes the children eat vegetables.)',
      answer: 'fa',
      feedback: {
        correct: 'Esatto! "Fa mangiare i bambini la verdura" — fare causativo.',
        incorrect: 'The correct answer is "fa".',
        explanation:
          '"Fare + infinitivo" = causative. "Fa" = 3rd person singular of fare. The structure: fa [verb] [agent/person]. "Fa mangiare la verdura ai bambini" is also correct.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-caus-02',
      prompt: 'Non ___ (lasciare) entrare nessuno senza biglietto. (Don\'t let anyone in without a ticket.) — voi form',
      answer: 'lasciate',
      feedback: {
        correct: 'Perfetto! "Non lasciate entrare" — lasciare causativo, voi imperative.',
        incorrect: 'The correct answer is "lasciate".',
        explanation:
          '"Lasciare + infinitivo" = to let/allow. Imperative voi of lasciare = lasciate. "Non lasciate entrare nessuno" = don\'t let anyone in. "Senza biglietto" = without a ticket.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-caus-03',
      prompt: '___ (io, farsi) tagliare i capelli dal parrucchiere. (I\'m getting my hair cut at the hairdresser\'s.) — presente',
      answer: 'Mi faccio',
      hint: 'Reflexive causative: mi + fare + infinitivo.',
      feedback: {
        correct: 'Bravo/a! "Mi faccio tagliare i capelli" — reflexive causative.',
        incorrect: 'The correct answer is "Mi faccio".',
        explanation:
          '"Farsi + infinitivo" = to get something done to oneself. "Mi faccio tagliare" = I\'m having [someone] cut [my hair]. The reflexive mi indicates the action is done to/for the subject.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-caus-04',
      question: '"Ho fatto ___ Marco." (I made Marco wait.) — indirect or direct?',
      options: [
        { value: 'a', label: 'aspettare' },
        { value: 'b', label: 'aspettare a' },
        { value: 'c', label: 'aspettato a' },
        { value: 'd', label: 'ad aspettare' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Corretto! "Ho fatto aspettare Marco" — infinitive immediately follows fare.',
        incorrect: 'The correct answer is "aspettare" (Ho fatto aspettare Marco).',
        explanation:
          '"Fare + infinitivo" — the infinitive immediately follows fare, then the person: ho fatto aspettare Marco. The person/agent can also come before: ho fatto aspettare Marco or ho fatto Marco aspettare. No preposition between fare and the infinitive.',
        optionExplanations: {
          b: '"Aspettare a Marco" — "a" is used when there\'s also a direct object, making Marco the agent: ho fatto riparare la macchina a Marco.',
          c: '"Aspettato a" — participio, wrong.',
          d: '"Ad aspettare" — the "ad" construction is not used with fare causativo.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-caus-05',
      question: '"Faccio riparare la macchina al meccanico." → with pronouns → ___',
      options: [
        { value: 'a', label: 'La faccio riparare gli.' },
        { value: 'b', label: 'Gliela faccio riparare.' },
        { value: 'c', label: 'La gli faccio riparare.' },
        { value: 'd', label: 'Gli faccio la riparare.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Gliela faccio riparare" — combined pronoun (gli + la = gliela).',
        incorrect: 'The correct answer is "Gliela faccio riparare."',
        explanation:
          '"La macchina" (direct object) = la. "Al meccanico" (agent becomes indirect) = gli. Combined: gli + la = gliela. Before fare: gliela faccio riparare.',
        optionExplanations: {
          a: '"Gli" cannot come after the verb; pronouns go before conjugated verb.',
          c: '"La gli" is not a valid combined form.',
          d: '"Gli faccio la riparare" is incorrect — they must combine and precede the verb.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-caus-06',
      verb: 'Fare/Lasciare causativo — pronouns',
      tense: 'Replace the object/agent with pronouns',
      pronouns: [
        'Faccio cantare Maria. (Maria → la)',
        'Lascio parlare Marco. (Marco → lo)',
        'Faccio studiare la figlia alla madre. (madre=indirect, figlia=direct)',
        'Lasciamo entrare i bambini. (bambini → li)',
        'Mi faccio tagliare i capelli. (capelli = i capelli → li)',
        'Fai aspettare noi. (noi → ci)',
      ],
      answers: [
        'La faccio cantare.',
        'Lo lascio parlare.',
        'Gliela faccio studiare.',
        'Li lasciamo entrare.',
        'Me li faccio tagliare.',
        'Ci fai aspettare.',
      ],
      feedback: {
        explanation:
          '"La faccio cantare" (Maria → la, direct). "Lo lascio parlare" (Marco → lo). "Gliela faccio studiare" (madre=gli → indirect, figlia=la → direct → combined gliela). "Li lasciamo entrare" (i bambini → li). "Me li faccio tagliare" (reflexive mi → me + li → me li). "Ci fai aspettare" (noi → ci, direct).',
      },
    },
    {
      type: 'match',
      id: 'b1-caus-07',
      instruction: 'Match each causative sentence with its English equivalent.',
      pairs: [
        { left: 'Faccio pulire la casa.', right: 'I\'m having the house cleaned.' },
        { left: 'Mi ha fatto ridere.', right: 'He made me laugh.' },
        { left: 'Lasciami stare!', right: 'Leave me alone / Let me be!' },
        { left: 'Si è fatto operare.', right: 'He had an operation.' },
        { left: 'Non lascio che entrino.', right: 'I\'m not letting them come in.' },
      ],
      feedback: {
        explanation:
          '"Faccio pulire" = I\'m having it cleaned (agent unspecified). "Mi ha fatto ridere" = made me laugh (mi = direct, io = agent). "Lasciami stare" = let me be (stare alone = to be left alone). "Si è fatto operare" = he had himself operated on. "Non lascio che + congiuntivo" = alternative to lasciare + infinitive.',
      },
    },
    {
      type: 'reorder',
      id: 'b1-caus-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['Il', 'gli', 'parlare', 'professore', 'non', 'lascio'],
      answer: ['Non', 'lascio', 'parlare', 'il', 'professore'],
      feedback: {
        correct: 'Perfetto! "Non lascio parlare il professore." (I don\'t let the professor speak.)',
        explanation:
          '"Lasciare + infinitivo" = to let. "Non lascio parlare il professore" = I don\'t let the professor speak. The agent "il professore" comes after the infinitive. OR: Non lo lascio parlare (with pronoun lo).',
      },
    },
    {
      type: 'translation',
      id: 'b1-caus-09',
      source: 'I had the documents translated by a professional. She let the children play in the garden.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Ho fatto tradurre i documenti da un professionista. Ha lasciato giocare i bambini in giardino.',
        'Ho fatto tradurre i documenti a un professionista. Ha lasciato i bambini giocare in giardino.',
      ],
      feedback: {
        explanation:
          '"I had translated" = ho fatto tradurre (fare causativo passato prossimo). Agent: "da/a un professionista." "She let play" = ha lasciato giocare (lasciare + infinitivo). "The children" = i bambini (agent). "In giardino" = in the garden.',
        modelAnswer: 'Ho fatto tradurre i documenti da un professionista. Ha lasciato giocare i bambini in giardino.',
      },
    },
  ],
};
