import type { Lesson } from '../types';

export const pronomiCombinati: Lesson = {
  slug: 'pronomi-combinati',
  title: 'Pronomi Combinati',
  level: 'b1',
  order: 7,
  explanation: {
    text: `## Pronomi Combinati (Combined Pronouns)

When an **indirect** object pronoun and a **direct** object pronoun occur together, they combine into a single unit. The indirect pronoun comes first and its final vowel changes.

### The Combinations

Indirect pronouns mi/ti/si/ci/vi change their final -i to **-e** before direct pronouns lo/la/li/le/ne:

| Indirect | + lo | + la | + li | + le | + ne |
|----------|------|------|------|------|------|
| mi | **me lo** | **me la** | **me li** | **me le** | **me ne** |
| ti | **te lo** | **te la** | **te li** | **te le** | **te ne** |
| si | **se lo** | **se la** | **se li** | **se le** | **se ne** |
| ci | **ce lo** | **ce la** | **ce li** | **ce le** | **ce ne** |
| vi | **ve lo** | **ve la** | **ve li** | **ve le** | **ve ne** |
| gli/le | **glielo** | **gliela** | **glieli** | **gliele** | **gliene** |

Note: **gli + le** and **gli/le + lo/la/li/le/ne** all merge into **glie-**: glielo, gliela, glieli, gliele, gliene.

### Position

Combined pronouns go **before** the conjugated verb, or **attach to infinitive/gerundio/imperativo**:

*Me lo dai?* (Will you give it to me?) — before verb
*Vuoi darmelo?* (Do you want to give it to me?) — attached to infinitive
*Dammelo!* (Give it to me!) — attached to imperative

### Agreement with Passato Prossimo

When combined pronouns precede avere, the participle agrees with the **direct** pronoun:
*Me l'ha data.* (She gave it to me — la → -a, la pizza → data)
*Ce li hanno mandati.* (They sent them to us — li → -i, masc. plur.)

### Usage Examples

*Ti do il libro → Te lo do.* (I'll give you the book → I'll give it to you.)
*Gli mando la lettera → Gliela mando.* (I send him the letter → I send it to him.)
*Ci porta le valigie → Ce le porta.* (He brings us the suitcases → He brings them to us.)`,
    tables: [
      {
        caption: 'Most Common Combined Pronouns',
        headers: ['Combination', 'Example', 'Meaning'],
        rows: [
          ['me lo/la', 'Me lo dai?', 'Will you give it to me?'],
          ['te lo/la', 'Te lo spiego.', 'I\'ll explain it to you.'],
          ['glielo/la', 'Glielo dico.', 'I\'ll tell him/her it.'],
          ['ce lo/la', 'Ce lo porta.', 'He brings it to us.'],
          ['ve lo/la', 'Ve lo mando.', 'I\'ll send it to you all.'],
          ['gliene', 'Gliene parlo.', 'I\'ll talk to him/her about it.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'b1-procomb-01',
      prompt: 'Puoi darmi il libro? → ___ puoi dare? (Can you give it to me?)',
      answer: 'Me lo',
      hint: 'mi (to me) + lo (il libro, masc. sing.) → me lo',
      feedback: {
        correct: 'Esatto! "Me lo puoi dare?" — mi + lo = me lo.',
        incorrect: 'The correct answer is "Me lo".',
        explanation:
          '"Mi" (to me) + "lo" (il libro, masc. sing.) → me lo. "Mi" changes to "me" before direct pronouns: mi + lo = me lo. Position: before the conjugated verb "puoi".',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-procomb-02',
      prompt: 'Voglio spiegare la situazione a Marco. → Voglio ___ spiegare. (I want to explain it to him.)',
      answer: 'gliela',
      hint: 'gli (to him) + la (la situazione, fem. sing.) → gliela',
      feedback: {
        correct: 'Perfetto! "Voglio gliela spiegare" — gli + la = gliela.',
        incorrect: 'The correct answer is "gliela".',
        explanation:
          '"Gli" (to him) + "la" (la situazione, fem. sing.) → gliela. With gli/le, the combination is glie + direct: glielo, gliela, glieli, gliele. Attached to infinitive spiegare → spiegarGLIela is also possible: voglio spiegarGliela.',
      },
    },
    {
      type: 'fill-blank',
      id: 'b1-procomb-03',
      prompt: 'Hai portato le foto a noi? — Sì, ___ ho portate. (Yes, I brought them to you all.)',
      answer: 've le',
      hint: 'vi (to you all) + le (le foto, fem. plur.) → ve le; agreement: portate',
      feedback: {
        correct: 'Bravo/a! "Ve le ho portate" — vi + le = ve le, with agreement.',
        incorrect: 'The correct answer is "ve le".',
        explanation:
          '"Vi" (to you all) + "le" (le foto, fem. plur.) → ve le. With passato prossimo + direct pronoun: participle agrees with direct pronoun. Le (fem. plur.) → portate (not portato).',
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-procomb-04',
      question: '"Hai mandato il messaggio a Maria?" → "Sì, ___ ho mandato."',
      options: [
        { value: 'a', label: 'le lo' },
        { value: 'b', label: 'glielo' },
        { value: 'c', label: 'gliela' },
        { value: 'd', label: 'le la' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Glielo ho mandato" — gli/le + lo = glielo.',
        incorrect: 'The correct answer is "glielo".',
        explanation:
          '"A Maria" (fem. indirect) = le. "Il messaggio" (masc. sing.) = lo. Le + lo = glielo (not "le lo" — gli/le always merge with glie-). Participle "mandato" agrees with lo (masc. sing.).',
        optionExplanations: {
          a: '"Le lo" is not a valid combined form — use glielo.',
          c: '"Gliela" would be for a feminine direct object (gliela ho mandata).',
          d: '"Le la" is not valid.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'b1-procomb-05',
      question: '"Dammi il sale!" with combined pronoun → ___',
      options: [
        { value: 'a', label: 'Dame lo!' },
        { value: 'b', label: 'Me lo da\'!' },
        { value: 'c', label: 'Dammelo!' },
        { value: 'd', label: 'Dammi lo!' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Dammelo!" — me lo attaches to the imperative (da\' + me + lo).',
        incorrect: 'The correct answer is "Dammelo!"',
        explanation:
          '"Dare" tu imperative = da\'. With combined pronoun: da\' + mi + lo → dammelo. "Mi" changes to "me," and then attaches: da\' + me + lo = dammelo. The m doubles: da\' + me = damme, + lo = dammelo.',
        optionExplanations: {
          a: '"Dame lo" is not standard.',
          b: '"Me lo da\'" = he/she gives it to me (3rd person) — not an imperative.',
          d: '"Dammi lo" keeps them separate — incorrect, they must combine.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'b1-procomb-06',
      verb: 'Replace with combined pronouns: "Ho dato ___ a ___"',
      tense: 'mi/ti/gli/le/ci/vi + lo → me lo etc.',
      pronouns: [
        'il libro (lo) a te',
        'la pizza (la) a lui',
        'i soldi (li) a loro',
        'le chiavi (le) a lei',
        'del pane (ne) a noi',
        'il regalo (lo) a voi',
      ],
      answers: [
        'Te lo ho dato / Te lo ho dato',
        'Glielo ho dato',
        'Glieli ho dati',
        'Gliela ho data',
        'Ce ne ho dato',
        'Ve lo ho dato',
      ],
      feedback: {
        explanation:
          'a te + lo → te lo (ti → te). a lui + lo → glielo. a loro + li → glieli (gli + li = glieli). a lei + la → gliela. a noi + ne → ce ne (ci → ce). a voi + lo → ve lo (vi → ve). Agreement: glielo dato (masc.), gliela data (fem.), glieli dati (masc. plur.).',
      },
    },
    {
      type: 'match',
      id: 'b1-procomb-07',
      instruction: 'Match each sentence with its correct combined pronoun replacement.',
      pairs: [
        { left: 'Spiego la grammatica a te.', right: 'Te la spiego.' },
        { left: 'Porto il caffè a lei.', right: 'Glielo porto.' },
        { left: 'Mando le foto a voi.', right: 'Ve le mando.' },
        { left: 'Racconto la storia a loro.', right: 'Gliela racconto.' },
        { left: 'Do del denaro a noi.', right: 'Ce ne dà.' },
      ],
      feedback: {
        explanation:
          'Te la (ti + la), glielo (gli + lo), ve le (vi + le), gliela (gli + la for loro too in spoken), ce ne (ci + ne). Remember: with "ne" the indirect pronoun changes too: mi ne → me ne, ti ne → te ne, ci ne → ce ne.',
      },
    },
    {
      type: 'reorder',
      id: 'b1-procomb-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['ha', 'Glielo', 'mandato', 'ieri', 'lei'],
      answer: ['Lei', 'glielo', 'ha', 'mandato', 'ieri'],
      feedback: {
        correct: 'Perfetto! "Lei glielo ha mandato ieri."',
        explanation:
          '"Glielo" = gli/le + lo combined. Before auxiliary "ha." "Mandato" = participio (masc. sing., agrees with lo). "Ieri" = yesterday (time at end). "Lei" = subject, at the start.',
      },
    },
    {
      type: 'translation',
      id: 'b1-procomb-09',
      source: 'She told me the news and I explained it to him.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Me l\'ha detta e io glielo ho spiegato.',
        'Me l\'ha raccontata e io glielo ho spiegato.',
        'Me lo ha detto e io glielo ho spiegato.',
      ],
      feedback: {
        explanation:
          '"She told me the news" = me l\'ha detta (mi + la → me la; la notizia = fem. → me l\'ha detta, agreement). OR me lo ha detto (if treating as general info, masc.). "I explained it to him" = glielo ho spiegato (gli + lo). Two combined pronouns in one sentence.',
        modelAnswer: 'Me l\'ha detta e io glielo ho spiegato.',
      },
    },
  ],
};
