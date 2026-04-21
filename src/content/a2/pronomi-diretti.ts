import type { Lesson } from '../types';

export const pronomiDiretti: Lesson = {
  slug: 'pronomi-diretti',
  title: 'Pronomi Diretti',
  level: 'a2',
  order: 7,
  explanation: {
    text: `## Pronomi Diretti (Direct Object Pronouns)

Direct object pronouns replace the **direct object** of a sentence (the noun receiving the action directly, with no preposition).

### The Pronouns

| Person | Singular | Plural |
|--------|----------|--------|
| 1st | **mi** (me) | **ci** (us) |
| 2nd | **ti** (you, informal) | **vi** (you all) |
| 3rd masc. | **lo** (him / it) | **li** (them masc.) |
| 3rd fem. | **la** (her / it) | **le** (them fem.) |
| Formal 2nd | **La** (you, formal) | **Li/Le** |

### Position

Direct object pronouns go **before** the conjugated verb:
*Mangio la pizza → La mangio.* (I eat it.)
*Chiamo Marco → Lo chiamo.* (I call him.)

With infinitives, they attach to the **end** (dropping the final -e):
*Voglio mangiare la pizza → Voglio mangiarla.*
*Devo chiamare Marco → Devo chiamarlo.*

### Elision before Vowels

**Lo** and **la** elide to **l'** before verbs starting with a vowel or h:
*L'ho vista.* (I saw her.) *L'ho mangiato.* (I ate it.)

### Agreement with Passato Prossimo

When **lo/la/li/le** precede the auxiliary **avere**, the participle **agrees** with the pronoun:
- *Ho mangiato la pasta → L'ho mangiata.* (-a agrees with la)
- *Ho visto i film → Li ho visti.* (-i agrees with li)
- *Ho letto le lettere → Le ho lette.* (-e agrees with le)

**Mi, ti, ci, vi** can optionally trigger agreement but often don't in spoken Italian.`,
    tables: [
      {
        caption: 'Direct Object Pronoun Positions',
        headers: ['Original', 'With pronoun', 'Note'],
        rows: [
          ['Compro il giornale.', 'Lo compro.', 'before verb'],
          ['Aspetto Maria.', 'La aspetto / L\'aspetto.', 'la → l\' before vowel'],
          ['Vedo i miei amici.', 'Li vedo.', 'masc. plur.'],
          ['Chiamo le ragazze.', 'Le chiamo.', 'fem. plur.'],
          ['Voglio leggere il libro.', 'Voglio leggerlo.', 'attached to infinitive'],
          ['Ho visto Maria.', 'L\'ho vista.', 'agreement with PP'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-prdir-01',
      prompt: 'Dove hai messo il libro? — ___ ho messo sul tavolo. (I put it on the table.)',
      answer: 'Lo',
      hint: 'il libro = masc. sing. → lo',
      feedback: {
        correct: 'Esatto! "Lo" — masculine singular direct object pronoun.',
        incorrect: 'The correct answer is "Lo".',
        explanation:
          '"Il libro" is masculine singular → direct object pronoun = lo. Before "ho" (vowel): lo ho → l\'ho is also accepted, but "Lo ho" is standard written form. "Ho messo" → past participle messo does not agree with lo (optional with avere for lo/la/li/le).',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-prdir-02',
      prompt: 'Hai chiamato le tue amiche? — Sì, ___ ho chiamate ieri.',
      answer: 'le',
      hint: 'le amiche = fem. plur. → le; participio agrees: chiamate.',
      feedback: {
        correct: 'Perfetto! "Le ho chiamate" — femm. plur. pronoun + agreement.',
        incorrect: 'The correct answer is "le".',
        explanation:
          '"Le amiche" = feminine plural → le. When le precedes avere, the participle agrees: chiamare → chiamata (fem.) → chiamate (fem. plur.). "Le ho chiamate" is fully correct.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-prdir-03',
      prompt: 'Devo comprare il pane. → Devo comprare___ . (I need to buy it.)',
      answer: 'lo',
      hint: 'With infinitive, attach pronoun to the end (drop the -e of the infinitive).',
      feedback: {
        correct: 'Bravo/a! "Comprarlo" — pronoun attaches to infinitive.',
        incorrect: 'The correct answer is "lo" (making "comprarlo").',
        explanation:
          '"Comprare" + lo → drop the -e of comprare → comprar + lo = comprarlo. The prompt shows the blank after "comprare" — fill with "lo" to form comprarlo. With modal + infinitive, the pronoun attaches to the infinitive.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-prdir-04',
      question: 'Replace the object: "Ho visto i ragazzi." → ___',
      options: [
        { value: 'a', label: 'Lo ho visti.' },
        { value: 'b', label: 'Li ho visto.' },
        { value: 'c', label: 'Li ho visti.' },
        { value: 'd', label: 'Le ho visti.' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Corretto! "Li ho visti" — masc. plur. pronoun + agreement.',
        incorrect: 'The correct answer is "Li ho visti."',
        explanation:
          '"I ragazzi" = masculine plural → li. When li precedes avere, participle agrees with li (masc. plur.): visto → visti. So: Li ho visti.',
        optionExplanations: {
          a: '"Lo" is masculine singular; "i ragazzi" is plural → li.',
          b: '"Visto" is masculine singular; with li (masc. plur.) it must become visti.',
          d: '"Le" is feminine plural; "i ragazzi" is masculine.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-prdir-05',
      question: '"Posso aiutare___ ?" = Can I help you? (informal singular)',
      options: [
        { value: 'a', label: 'Posso aiutarvi?' },
        { value: 'b', label: 'Posso aiutarmi?' },
        { value: 'c', label: 'Posso aiutarti?' },
        { value: 'd', label: 'Posso aiutarla?' },
      ],
      answer: 'c',
      feedback: {
        correct: 'Esatto! "Aiutarti" — ti (you, informal singular) attaches to the infinitive.',
        incorrect: 'The correct answer is "Posso aiutarti?"',
        explanation:
          'Informal singular "you" = ti. With infinitive: aiutare → aiutar + ti = aiutarti. Posso aiutarti = Can I help you?',
        optionExplanations: {
          a: '"Vi" = you all (plural); "aiutarvi" = can I help you all?',
          b: '"Mi" = me (reflexive); "aiutarmi" = can I help myself? (no sense here)',
          d: '"La" = formal "you" or "her"; "aiutarla" = can I help her/you (formal)?',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-prdir-06',
      verb: 'Replace with direct object pronoun (lo/la/li/le)',
      tense: 'Ho visto + [noun] → [pronoun] + ho visto/vista/visti/viste',
      pronouns: [
        'il film (masc. sing.)',
        'la pizza (fem. sing.)',
        'i libri (masc. plur.)',
        'le foto (fem. plur.)',
        'Marco (masc. sing.)',
        'Maria e Lucia (fem. plur.)',
      ],
      answers: [
        'L\'ho visto',
        'L\'ho vista',
        'Li ho visti',
        'Le ho viste',
        'L\'ho visto',
        'Le ho viste',
      ],
      feedback: {
        explanation:
          'Pattern: lo/la → l\' before vowel "ho". Li/le remain unchanged. Participle agreement: -o (masc. sing.), -a (fem. sing.), -i (masc. plur.), -e (fem. plur.). "Marco" = lo → l\'ho visto. "Maria e Lucia" = le → le ho viste (fem. plur.).',
      },
    },
    {
      type: 'match',
      id: 'a2-prdir-07',
      instruction: 'Match each sentence with the correct pronoun replacement.',
      pairs: [
        { left: 'Compro la frutta.', right: 'La compro.' },
        { left: 'Ascolto i podcast.', right: 'Li ascolto.' },
        { left: 'Chiamo te (tu, informale).', right: 'Ti chiamo.' },
        { left: 'Aspettiamo voi.', right: 'Vi aspettiamo.' },
        { left: 'Vedo noi stessi.', right: 'Ci vediamo.' },
      ],
      feedback: {
        explanation:
          'La compro (la frutta, fem. sing.), li ascolto (i podcast, masc. plur.), ti chiamo (te, 2nd pers. sing.), vi aspettiamo (voi, 2nd pers. plur.), ci vediamo (noi, 1st pers. plur.). Pronoun position: always before the conjugated verb.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-prdir-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['ho', 'Non', 'ancora', 'letto', 'la', 'l\'', ],
      answer: ['Non', 'l\'', 'ho', 'ancora', 'letto'],
      feedback: {
        correct: 'Perfetto! "Non l\'ho ancora letto." (I haven\'t read it yet.)',
        explanation:
          '"L\'" replaces "la" (fem. sing.) before "ho". "Non … ancora" = not yet. "Ancora" goes between auxiliary and participle: non l\'ho ancora letto. Note: if the original was a feminine noun (e.g., la lettera), participle would be "letta".',
      },
    },
    {
      type: 'translation',
      id: 'a2-prdir-09',
      source: 'I know that book — I read it last year and I loved it.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Conosco quel libro — l\'ho letto l\'anno scorso e l\'ho adorato.',
        'Conosco quel libro — l\'ho letto l\'anno scorso e mi è piaciuto molto.',
      ],
      feedback: {
        explanation:
          '"I read it" = l\'ho letto (lo → l\' before ho; letto, masc. sing. agree). "I loved it" = l\'ho adorato OR mi è piaciuto molto (piacere construction). "L\'anno scorso" = last year. Both pronouns elide before "ho".',
        modelAnswer: 'Conosco quel libro — l\'ho letto l\'anno scorso e l\'ho adorato.',
      },
    },
  ],
};
