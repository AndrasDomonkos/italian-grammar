import type { Lesson } from '../types';

export const passatoProssimoEssere: Lesson = {
  slug: 'passato-prossimo-essere',
  title: 'Passato Prossimo con Essere',
  level: 'a2',
  order: 1,
  explanation: {
    text: `## Passato Prossimo con Essere

Some Italian verbs form the passato prossimo with **essere** instead of **avere**. When essere is used, the past participle **agrees** with the subject in gender and number.

### Which Verbs Use Essere?

The main groups are:

**1. Verbs of motion/direction (intransitive):**
*andare* (to go), *venire* (to come), *arrivare* (to arrive), *partire* (to leave), *tornare* (to return), *uscire* (to go out), *entrare* (to enter), *salire* (to go up), *scendere* (to go down), *passare* (to pass by)

**2. Verbs of state/permanence:**
*essere* (to be), *stare* (to stay/be), *restare/rimanere* (to remain), *diventare* (to become)

**3. Verbs of change:**
*nascere* (to be born → nato), *morire* (to die → morto), *crescere* (to grow → cresciuto)

**4. All reflexive verbs** (mi sono alzato, ti sei lavata…)

### Agreement of the Participle

The past participle agrees with the **grammatical subject**:

| Subject | Example |
|---------|---------|
| Marco (masc. sing.) | Marco è andato. |
| Anna (fem. sing.) | Anna è andata. |
| i ragazzi (masc. plur.) | I ragazzi sono andati. |
| le ragazze (fem. plur.) | Le ragazze sono andate. |

**Memory trick:** Think of essere-verbs like adjectives — they agree just as adjectives do.

### Full Conjugation Example

*andare* → participio: **andato/a/i/e**

- io sono andato/a
- tu sei andato/a
- lui è andato / lei è andata
- noi siamo andati/e
- voi siete andati/e
- loro sono andati/e`,
    tables: [
      {
        caption: 'Common Essere Verbs + Irregular Participles',
        headers: ['Infinitive', 'Participio', 'Example'],
        rows: [
          ['andare', 'andato', 'Sono andato al bar.'],
          ['venire', 'venuto', 'È venuta a casa mia.'],
          ['arrivare', 'arrivato', 'Siamo arrivati tardi.'],
          ['partire', 'partito', 'Sono partiti ieri.'],
          ['nascere', 'nato', 'Sono nato nel 1995.'],
          ['morire', 'morto', 'Il nonno è morto.'],
          ['essere', 'stato', 'È stato gentile.'],
          ['rimanere', 'rimasto', 'Siamo rimasti a casa.'],
        ],
      },
    ],
  },
  exercises: [
    {
      type: 'fill-blank',
      id: 'a2-pp-esse-01',
      prompt: 'Anna ___ a Parigi la settimana scorsa. (Anna went to Paris last week.) — andare',
      answer: 'è andata',
      feedback: {
        correct: 'Esatto! "È andata" — essere + andata (feminine agreement).',
        incorrect: 'The correct answer is "è andata".',
        explanation:
          '"Andare" uses essere. "Anna" is feminine singular → participio must be feminine: andata (not andato). È + andata = è andata.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-pp-esse-02',
      prompt: 'I miei genitori ___ in Italia. (My parents were born in Italy.) — nascere',
      answer: 'sono nati',
      hint: 'genitori = parents → masculine plural.',
      feedback: {
        correct: 'Perfetto! "Sono nati" — masc. plur. agreement.',
        incorrect: 'The correct answer is "sono nati".',
        explanation:
          '"Nascere" → nato. Essere verb, so participio agrees. "Genitori" is masculine plural → nato → nati. Sono + nati = sono nati.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a2-pp-esse-03',
      prompt: 'Noi ___ a casa tutta la sera. (We stayed at home all evening.) — rimanere',
      answer: 'siamo rimasti',
      feedback: {
        correct: 'Bravo/a! "Siamo rimasti" is correct.',
        incorrect: 'The correct answer is "siamo rimasti".',
        explanation:
          '"Rimanere" → rimasto (irregular). Uses essere. "Noi" = 1st person plural. Masculine default for mixed groups → rimasti. Siamo + rimasti = siamo rimasti.',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-pp-esse-04',
      question: 'Which sentence is correct? "The girls went out last night."',
      options: [
        { value: 'a', label: 'Le ragazze sono usciti ieri sera.' },
        { value: 'b', label: 'Le ragazze sono uscite ieri sera.' },
        { value: 'c', label: 'Le ragazze hanno uscito ieri sera.' },
        { value: 'd', label: 'Le ragazze sono uscita ieri sera.' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Esatto! "Sono uscite" — feminine plural agreement.',
        incorrect: 'The correct answer is "Le ragazze sono uscite ieri sera."',
        explanation:
          '"Uscire" uses essere. "Le ragazze" is feminine plural → participio must be feminine plural: uscite (not usciti, uscito, uscita). Sono uscite.',
        optionExplanations: {
          a: '"Usciti" is masculine plural. "Ragazze" is feminine → must use "uscite".',
          c: '"Hanno uscito" uses avere — wrong. "Uscire" is an essere verb.',
          d: '"Uscita" is feminine singular. "Ragazze" is plural → "uscite".',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a2-pp-esse-05',
      question: 'Complete: "Quando ___ (tu, arrivare) a Roma?"',
      options: [
        { value: 'a', label: 'Quando hai arrivato a Roma?' },
        { value: 'b', label: 'Quando sei arrivato/a a Roma?' },
        { value: 'c', label: 'Quando hai arrivato/a a Roma?' },
        { value: 'd', label: 'Quando siete arrivati a Roma?' },
      ],
      answer: 'b',
      feedback: {
        correct: 'Corretto! "Sei arrivato/a" — essere, tu form.',
        incorrect: 'The correct answer is "Quando sei arrivato/a a Roma?"',
        explanation:
          '"Arrivare" uses essere. Tu form: sei + participio. The participio agrees with the subject — if tu is male: arrivato; if female: arrivata.',
        optionExplanations: {
          a: '"Hai arrivato" uses avere — wrong. "Arrivare" is an essere verb.',
          c: 'Same error as (a) — avere cannot be used with arrivare.',
          d: '"Siete" is the voi form, not tu.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a2-pp-esse-06',
      verb: 'venire (venuto) — male speaker',
      tense: 'Passato Prossimo con Essere',
      pronouns: ['io', 'tu', 'lui', 'noi', 'voi', 'loro (masc.)'],
      answers: ['sono venuto', 'sei venuto', 'è venuto', 'siamo venuti', 'siete venuti', 'sono venuti'],
      feedback: {
        explanation:
          'For a male speaker: venuto (masc. sing.) for io/tu/lui; venuti (masc. plur.) for noi/voi/loro. The auxiliary essere conjugates: sono/sei/è/siamo/siete/sono. If the speaker were female: venuta/venute.',
      },
    },
    {
      type: 'match',
      id: 'a2-pp-esse-07',
      instruction: 'Match each sentence with the correct participio form.',
      pairs: [
        { left: 'Marco è ___ (partire).', right: 'partito' },
        { left: 'Lucia è ___ (tornare).', right: 'tornata' },
        { left: 'I ragazzi sono ___ (arrivare).', right: 'arrivati' },
        { left: 'Le studentesse sono ___ (uscire).', right: 'uscite' },
        { left: 'Noi siamo ___ (rimanere).', right: 'rimasti' },
      ],
      feedback: {
        explanation:
          'Essere verbs require agreement: masc. sing. = -o, fem. sing. = -a, masc. plur. = -i, fem. plur. = -e. "Noi siamo rimasti" uses masculine default for unspecified gender.',
      },
    },
    {
      type: 'reorder',
      id: 'a2-pp-esse-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['a', 'siamo', 'notte', 'Noi', 'tornati', 'casa', 'tarda'],
      answer: ['Noi', 'siamo', 'tornati', 'a', 'casa', 'tarda', 'notte'],
      feedback: {
        correct: 'Perfetto! "Noi siamo tornati a casa tarda notte."',
        explanation:
          '"Tornare" uses essere. "Siamo tornati" — noi, masculine plural (default). "A casa" = home (a + casa, no article). "Tarda notte" = late at night.',
      },
    },
    {
      type: 'translation',
      id: 'a2-pp-esse-09',
      source: 'Maria and Lucia went out yesterday but came home early.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Maria e Lucia sono uscite ieri ma sono tornate a casa presto.',
        'Maria e Lucia sono uscite ieri ma sono rientrate a casa presto.',
      ],
      feedback: {
        explanation:
          'Both "uscire" and "tornare" use essere. Two female subjects → feminine plural: uscite, tornate. "Presto" = early. "Ma" = but.',
        modelAnswer: 'Maria e Lucia sono uscite ieri ma sono tornate a casa presto.',
      },
    },
  ],
};
