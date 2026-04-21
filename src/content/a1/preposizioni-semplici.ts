import type { Lesson } from '../types';

export const preposizioniSemplici: Lesson = {
  slug: 'preposizioni-semplici',
  title: 'Preposizioni Semplici',
  level: 'a1',
  order: 13,
  explanation: {
    text: `## Preposizioni Semplici (Simple Prepositions)

Italian has eight core simple prepositions. Unlike English, each has a fairly predictable set of uses, though some must be memorised as fixed expressions.

### Di (of / from / about)

- Possession: *il libro di Marco* (Marco's book)
- Origin/material: *è di Roma* (she's from Rome), *una borsa di pelle* (a leather bag)
- Partitive: *un po' di acqua* (a little water)
- Topic: *parliamo di politica* (we talk about politics)

### A (to / at / in)

- Location in cities: *vivo a Roma* (I live in Rome), *sono a casa* (I'm at home)
- Destination: *vado a scuola* (I go to school)
- Time: *alle tre* (at three o'clock), *a mezzogiorno* (at noon)
- Before infinitive: *vengo a mangiare* (I come to eat)

### Da (from / since / for / at someone's place)

- Origin: *vengo da Milano* (I come from Milan)
- Duration from past to present: *studio italiano da due anni* (I've been studying Italian for two years)
- At someone's place: *sono da Marco* (I'm at Marco's place)
- Purpose: *una tazza da caffè* (a coffee cup)

### In (in / to — with countries and regions)

- Location/destination with countries: *vivo in Italia*, *vado in Francia*
- Rooms of house: *sono in cucina* (I'm in the kitchen)
- Seasons: *in estate* (in summer), *in inverno* (in winter)
- Means of transport: *vado in macchina* (I go by car), *in treno*

### Con (with)

*vengo con te* (I'm coming with you), *un caffè con il latte* (a coffee with milk)

### Su (on / about)

*il libro è sul tavolo* (the book is on the table), *un articolo su Dante* (an article about Dante)

### Per (for / in order to / through)

*questo regalo è per te* (this gift is for you), *studio per imparare* (I study to learn), *passo per Roma* (I pass through Rome)

### Tra / Fra (between / among / in [future time])

*tra me e te* (between me and you), *tra cinque minuti* (in five minutes), *fra gli amici* (among friends). *Tra* and *fra* are interchangeable.`,
    tables: [
      {
        caption: 'Key Preposition Uses',
        headers: ['Preposition', 'Main use', 'Example'],
        rows: [
          ['di', 'possession, origin', 'il libro di Anna'],
          ['a', 'location in cities, time', 'sono a Firenze / alle otto'],
          ['da', 'origin, duration, at someone\'s place', 'vengo da Napoli / da tre anni'],
          ['in', 'countries, rooms, seasons, transport', 'in Italia / in macchina'],
          ['con', 'with', 'con gli amici'],
          ['su', 'on, about', 'sul tavolo'],
          ['per', 'for, in order to', 'per te / per studiare'],
          ['tra/fra', 'between, in (time)', 'tra 5 minuti'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-prep-01',
      prompt: 'Vivo ___ Berlino da tre anni. (I have been living in Berlin for three years.)',
      answer: 'a',
      hint: 'Berlino is a city → a.',
      feedback: {
        correct: 'Esatto! "A Berlino" — cities take "a".',
        incorrect: 'The correct answer is "a".',
        explanation:
          'Use "a" before city names for location and destination: a Roma, a Milano, a Berlino. Use "in" for countries and regions: in Italia, in Toscana. "Da tre anni" uses "da" for duration from past to present.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-prep-02',
      prompt: 'Questo regalo è ___ te. (This gift is for you.)',
      answer: 'per',
      feedback: {
        correct: 'Perfetto! "Per te" = for you.',
        incorrect: 'The correct answer is "per".',
        explanation:
          '"Per" expresses purpose or destination when referring to a person: un regalo per te (a gift for you). Do not confuse with "da" which expresses origin or with "di" which expresses possession.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-prep-03',
      prompt: 'Studio l\'italiano ___ due anni. (I have been studying Italian for two years.)',
      answer: 'da',
      hint: 'Action that started in the past and continues now → da.',
      feedback: {
        correct: 'Esatto! "Da due anni" = for two years (ongoing).',
        incorrect: 'The correct answer is "da".',
        explanation:
          '"Da" + time period expresses an action that began in the past and continues in the present: studio da due anni = I have been studying for two years (and still am). This corresponds to English "for" with the present perfect continuous.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-prep-04',
      question: 'Complete: "Vado ___ Francia la settimana prossima." (I\'m going to France next week.)',
      options: [
        { value: 'a', label: 'a Francia' },
        { value: 'in', label: 'in Francia' },
        { value: 'da', label: 'da Francia' },
        { value: 'di', label: 'di Francia' },
      ],
      answer: 'in',
      feedback: {
        correct: 'Corretto! "In Francia" — countries take "in".',
        incorrect: 'The correct answer is "in Francia".',
        explanation:
          'Use "in" before country names (and continents): in Italia, in Francia, in Germania, in America. Use "a" before city names: a Parigi, a Roma. Exception: some small islands take "a": a Cuba, a Malta.',
        optionExplanations: {
          a: '"A" is used before cities. France is a country → "in". If you said "a Parigi" (to Paris), "a" would be correct.',
          da: '"Da" expresses origin (I come FROM France = Vengo dalla Francia) or duration, not destination.',
          di: '"Di" expresses possession or origin as an adjective (vino di Francia), not destination.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-prep-05',
      question: 'Which preposition completes: "Arrivo ___ cinque minuti." (I\'ll arrive in five minutes.)',
      options: [
        { value: 'in', label: 'in cinque minuti' },
        { value: 'tra', label: 'tra cinque minuti' },
        { value: 'per', label: 'per cinque minuti' },
        { value: 'da', label: 'da cinque minuti' },
      ],
      answer: 'tra',
      feedback: {
        correct: 'Esatto! "Tra cinque minuti" = in five minutes (future).',
        incorrect: 'The correct answer is "tra cinque minuti".',
        explanation:
          '"Tra/fra + time" expresses a point in the future: tra cinque minuti (in five minutes), tra una settimana (in a week). "Fra" is interchangeable with "tra". Note: "in" is used for time periods in Italian in other contexts (in estate = in summer).',
        optionExplanations: {
          in: '"In cinque minuti" is not standard for future time in Italian. For future: tra/fra. "In" is used for seasons, transport, and rooms.',
          per: '"Per cinque minuti" means "for five minutes" (duration), not "in five minutes".',
          da: '"Da cinque minuti" means "for five minutes" counting from the past (I\'ve been waiting for five minutes).',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-prep-06',
      verb: 'Preposizioni — Completamento',
      tense: 'Choose the correct preposition for each phrase',
      pronouns: [
        'vivo ___ Roma (city)',
        'vado ___ Spagna (country)',
        'un caffè ___ zucchero (with)',
        'il libro ___ Maria (possession)',
        'studio ___ capire (purpose)',
        'arrivo ___ dieci minuti (future time)',
      ],
      answers: ['a', 'in', 'con', 'di', 'per', 'tra'],
      feedback: {
        explanation:
          'Summary: a + city, in + country, con = with, di = possession/of, per = purpose/for, tra = in (future). These are the core uses you need to know at A1 level.',
      },
    },
    {
      type: 'match',
      id: 'a1-prep-07',
      instruction: 'Match each sentence fragment with the correct preposition.',
      pairs: [
        { left: 'Sono ___ casa.', right: 'a' },
        { left: 'Vengo ___ Napoli.', right: 'da' },
        { left: 'Parliamo ___ musica.', right: 'di' },
        { left: 'Il gatto è ___ tavolo.', right: 'sul' },
        { left: 'Vado ___ treno.', right: 'in' },
        { left: 'Tra me ___ te.', right: 'e' },
      ],
      feedback: {
        explanation:
          '"Sul tavolo" = on the table (su + il = sul, a contraction). "In treno" = by train (means of transport). "Vengo da Napoli" = I come from Naples. "Tra me e te" = between you and me.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-prep-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['anni', 'italiano', 'da', 'due', 'Studia'],
      answer: ['Studia', 'italiano', 'da', 'due', 'anni'],
      feedback: {
        correct: 'Perfetto! "Studia italiano da due anni."',
        explanation:
          '"Da" + duration expresses an ongoing action from the past. "Studia" is 3rd person singular present of studiare. Sentence structure: Subject + verb + object + da + duration.',
      },
    },
    {
      type: 'translation',
      id: 'a1-prep-09',
      source: 'I am going to Spain with my friends in July.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Vado in Spagna con i miei amici a luglio.',
        'Vado in Spagna con i miei amici in luglio.',
        'Vado in Spagna con gli amici a luglio.',
      ],
      feedback: {
        explanation:
          '"Spain" = Spagna (country → in): in Spagna. "With my friends" = con i miei amici. "In July" = a luglio (months usually use "a" or "in"/"ad" — both are used regionally, "a luglio" is most common).',
        modelAnswer: 'Vado in Spagna con i miei amici a luglio.',
      },
    },
  ],
};
