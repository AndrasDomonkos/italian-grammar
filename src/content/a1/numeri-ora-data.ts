import type { Lesson } from '../types';

export const numeriOraData: Lesson = {
  slug: 'numeri-ora-data',
  title: 'Numeri, Ora e Data',
  level: 'a1',
  order: 17,
  explanation: {
    text: `## Numeri, Ora e Data (Numbers, Time, and Dates)

### Cardinal Numbers

**0–20:** zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci, undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti

**Tens:** trenta (30), quaranta (40), cinquanta (50), sessanta (60), settanta (70), ottanta (80), novanta (90), cento (100)

**Combining:** 21 = ventuno (venti drops the final i before a vowel), 22 = ventidue, 23 = ventitrè (accent on three), 31 = trentuno, 33 = trentatrè, 100 = cento, 101 = centouno, 200 = duecento, 1000 = mille, 2000 = duemila.

⚠️ "Uno" becomes "un" before a masculine noun and "una/un'" before a feminine noun (follows indefinite article rules).

### Telling the Time — Che ora è? / Che ore sono?

- **È l'una.** — It's one o'clock. (only for 1, noon, midnight)
- **Sono le due / le tre / le dieci.** — It's two / three / ten o'clock.
- **Sono le tre e mezza.** — It's half past three (3:30).
- **Sono le tre e un quarto.** — It's quarter past three (3:15).
- **Sono le quattro meno un quarto.** — It's quarter to four (3:45).
- **Sono le otto e venti.** — It's 8:20.
- **È mezzogiorno.** — It's noon. **È mezzanotte.** — It's midnight.

For official times (trains, etc.), Italians use the 24-hour clock: *le quattordici e trenta* (14:30).

### Days of the Week — I Giorni della Settimana

lunedì (Mon), martedì (Tue), mercoledì (Wed), giovedì (Thu), venerdì (Fri), sabato (Sat), domenica (Sun)

Note: Days are lowercase in Italian. Only domenica is feminine; the rest are masculine. "On Monday" = lunedì (no preposition needed for regular events): *il lunedì vado in palestra* (on Mondays I go to the gym) or just *lunedì* for a specific day.

### Months and Dates — I Mesi e la Data

**Months:** gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre (all lowercase)

**Date format:** il + cardinal number + month: *il tre marzo* (March 3rd). For the 1st: *il primo gennaio* (ordinal number, not cardinal).

**Year:** nel + year: *nel 2024*, *nel millenovecentonovanta* (1990).`,
    tables: [
      {
        caption: 'Telling the Time',
        headers: ['Time', 'Italian'],
        rows: [
          ['1:00', "È l'una."],
          ['2:00', 'Sono le due.'],
          ['3:30', 'Sono le tre e mezza.'],
          ['4:15', 'Sono le quattro e un quarto.'],
          ['4:45', 'Sono le cinque meno un quarto.'],
          ['12:00', 'È mezzogiorno.'],
          ['0:00', 'È mezzanotte.'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "che ora è", translation: "what time is it", example: "Che ora è? Sono le tre e mezza.", exampleTranslation: "What time is it? It is half past three." },
    { word: "a che ora", translation: "at what time", example: "A che ora parte il treno?", exampleTranslation: "At what time does the train leave?" },
    { word: "oggi", translation: "today", example: "Oggi è lunedì, il primo di aprile.", exampleTranslation: "Today is Monday, the first of April." },
    { word: "domani", translation: "tomorrow", example: "Domani ho un esame importante.", exampleTranslation: "Tomorrow I have an important exam." },
    { word: "ieri", translation: "yesterday", example: "Ieri siamo andati al cinema.", exampleTranslation: "Yesterday we went to the cinema." },
    { word: "il compleanno", translation: "the birthday", example: "Il mio compleanno è il quindici maggio.", exampleTranslation: "My birthday is the fifteenth of May." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-num-01',
      prompt: 'Che ora è? — ___ le tre e mezza. (It\'s half past three.)',
      answer: 'Sono',
      hint: 'Use "sono" for all times except 1:00, noon, midnight.',
      feedback: {
        correct: 'Esatto! "Sono le tre e mezza."',
        incorrect: 'The correct answer is "Sono".',
        explanation:
          '"Sono le..." is used for all times except one o\'clock (È l\'una), noon (È mezzogiorno), and midnight (È mezzanotte). "Tre" is plural → "sono". "E mezza" = and a half = half past.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-num-02',
      prompt: 'Il treno parte ___ dodici e dieci. (The train leaves at twelve ten.)',
      answer: 'alle',
      hint: 'a + le = alle.',
      feedback: {
        correct: 'Bravo/a! "Alle dodici e dieci" is correct.',
        incorrect: 'The correct answer is "alle".',
        explanation:
          '"At [time]" in Italian uses "alle" (a + le) for most times: alle tre, alle dodici. For one o\'clock: all\'una (a + l\'). For noon/midnight: a mezzogiorno, a mezzanotte.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-num-03',
      prompt: 'Oggi è ___ cinque ottobre. (Today is the fifth of October.)',
      answer: 'il',
      feedback: {
        correct: 'Perfetto! "Il cinque ottobre" is correct.',
        incorrect: 'The correct answer is "il".',
        explanation:
          'Italian dates use "il + number + month": il cinque ottobre, il venti marzo. For the 1st, use the ordinal: il primo gennaio. No preposition "of" between number and month.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-num-04',
      question: 'How do you say "It\'s 1 o\'clock" in Italian?',
      options: [
        { value: 'a', label: "Sono l'una." },
        { value: 'b', label: "È le uno." },
        { value: 'c', label: "È l'una." },
        { value: 'd', label: "Sono le una." },
      ],
      answer: 'c',
      feedback: {
        correct: "Esatto! \"È l'una.\" — singular verb for 1 o'clock.",
        incorrect: "The correct answer is \"È l'una.\"",
        explanation:
          "For 1:00, use singular \"è\" (not \"sono\") and the definite article \"l'\" (not \"le\"): È l'una. This is the exception — all other hours use \"sono le + number\": sono le due, sono le dieci.",
        optionExplanations: {
          a: '"Sono l\'una" mixes the plural verb "sono" with the singular hour. Use "è" for 1:00.',
          b: '"È le uno" is wrong — for 1:00 use "l\'una" (feminine with article), not "le uno".',
          d: '"Sono le una" is wrong — "una" is singular, so "sono le" (plural) cannot be used here.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-num-05',
      question: 'What is 21 in Italian?',
      options: [
        { value: 'ventiuno', label: 'ventiuno' },
        { value: 'venti uno', label: 'venti uno' },
        { value: 'ventuno', label: 'ventuno' },
        { value: 'ventio', label: 'ventio' },
      ],
      answer: 'ventuno',
      feedback: {
        correct: 'Esatto! "Ventuno" — the final i of venti drops before a vowel.',
        incorrect: 'The correct answer is "ventuno".',
        explanation:
          'When venti (20) is combined with uno (1) or otto (8), the final vowel of venti drops: venti + uno = ventuno, venti + otto = ventotto. For other numbers it stays: ventidue (22), ventitrè (23).',
        optionExplanations: {
          ventiuno: '"Ventiuno" keeps both vowels — this is wrong. The i drops: ventuno.',
          'venti uno': 'Numbers are written as one word in Italian: ventuno, not "venti uno".',
          ventio: 'This is not an Italian number.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-num-06',
      verb: 'Telling the Time',
      tense: 'Write the Italian time expression for each time',
      pronouns: [
        '1:00',
        '2:00',
        '3:30',
        '4:15',
        '12:00 (noon)',
        '0:00 (midnight)',
      ],
      answers: ["È l'una.", 'Sono le due.', 'Sono le tre e mezza.', 'Sono le quattro e un quarto.', 'È mezzogiorno.', 'È mezzanotte.'],
      feedback: {
        explanation:
          'Rules: È l\'una (1:00 only). Sono le + number (2:00-11:00 and 13:00-23:00). È mezzogiorno (12:00). È mezzanotte (0:00/24:00). Add: e mezza (half past), e un quarto (+15), meno un quarto (-15).',
      },
    },
    {
      type: 'match',
      id: 'a1-num-07',
      instruction: 'Match each Italian time expression with its English equivalent.',
      pairs: [
        { left: 'Sono le otto e mezza.', right: '8:30' },
        { left: 'Sono le nove meno un quarto.', right: '8:45' },
        { left: "È l'una e venti.", right: '1:20' },
        { left: 'Sono le undici e cinque.', right: '11:05' },
        { left: 'È mezzogiorno e mezza.', right: '12:30' },
      ],
      feedback: {
        explanation:
          '"Meno" (minus/less) is used for times before the hour: "le nove meno un quarto" = 9:00 - 15 minutes = 8:45. "E" (and) is used for minutes after the hour: le otto e mezza = 8:30.',
      },
    },
    {
      type: 'reorder',
      id: 'a1-num-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['a', 'Ci', 'vediamo', 'mercoledì', "all'una"],
      answer: ['Ci', 'vediamo', 'mercoledì', "all'una"],
      feedback: {
        correct: "Perfetto! \"Ci vediamo mercoledì all'una.\"",
        explanation:
          '"Ci vediamo" = we see each other / see you (reflexive vedersi, noi). "Mercoledì" = on Wednesday (no preposition needed for a specific day). "All\'una" = at one o\'clock (a + l\'una = all\'una).',
      },
    },
    {
      type: 'translation',
      id: 'a1-num-09',
      source: 'My birthday is on the fifteenth of March.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Il mio compleanno è il quindici marzo.',
        'Il mio compleanno è il 15 marzo.',
        'Il mio compleanno cade il quindici marzo.',
      ],
      feedback: {
        explanation:
          '"My birthday" = il mio compleanno. "Is" = è. "On the fifteenth of March" = il quindici marzo. Italian dates: il + cardinal number + month (no preposition between number and month, no article before month).',
        modelAnswer: 'Il mio compleanno è il quindici marzo.',
      },
    },
  ],
};
