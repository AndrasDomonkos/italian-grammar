import type { Lesson } from '../types';

export const verbiRiflessivi: Lesson = {
  slug: 'verbi-riflessivi',
  title: 'Verbi Riflessivi al Presente',
  level: 'a1',
  order: 16,
  explanation: {
    text: `## Verbi Riflessivi al Presente (Reflexive Verbs in the Present)

Reflexive verbs express actions that the subject performs on **itself**. They are listed in the dictionary with the ending **-si**: *alzarsi* (to get up), *lavarsi* (to wash oneself).

### Reflexive Pronouns

Each person has a reflexive pronoun that goes **before** the conjugated verb:

| Person | Reflexive | Example |
|--------|-----------|---------|
| io | mi | Mi sveglio alle sette. |
| tu | ti | Ti lavi i capelli? |
| lui/lei | si | Si chiama Marco. |
| noi | ci | Ci alziamo presto. |
| voi | vi | Vi divertite? |
| loro | si | Si vestono eleganti. |

### How to Conjugate

Remove **-si** from the infinitive, conjugate the remaining verb normally, add the reflexive pronoun before:

*alzarsi* → remove -si → *alzare* → conjugate: alzo, alzi, alza… → add pronoun: *mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano*

### Common Reflexive Verbs

**Daily routine:**
*svegliarsi* (to wake up), *alzarsi* (to get up), *lavarsi* (to wash), *farsi la doccia* (to shower), *vestirsi* (to get dressed), *pettinarsi* (to comb one's hair), *truccarsi* (to put on make-up), *addormentarsi* (to fall asleep)

**Other common:**
*chiamarsi* (to be called/named), *sedersi* (to sit down), *divertirsi* (to enjoy oneself), *sentirsi* (to feel), *fermarsi* (to stop), *riposarsi* (to rest)

### Chiamarsi — Introducing Yourself

*Come ti chiami?* — What's your name? (lit. What do you call yourself?)
*Mi chiamo Marco.* — My name is Marco. (lit. I call myself Marco.)`,
    tables: [
      {
        caption: 'alzarsi — Present Tense',
        headers: ['Pronoun', 'Reflexive', 'Verb form', 'Together'],
        rows: [
          ['io', 'mi', 'alzo', 'mi alzo'],
          ['tu', 'ti', 'alzi', 'ti alzi'],
          ['lui/lei', 'si', 'alza', 'si alza'],
          ['noi', 'ci', 'alziamo', 'ci alziamo'],
          ['voi', 'vi', 'alzate', 'vi alzate'],
          ['loro', 'si', 'alzano', 'si alzano'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: "svegliarsi", translation: "to wake up", example: "Mi sveglio alle sette di mattina.", exampleTranslation: "I wake up at seven in the morning." },
    { word: "alzarsi", translation: "to get up", example: "Ti alzi tardi il fine settimana?", exampleTranslation: "Do you get up late at the weekend?" },
    { word: "lavarsi", translation: "to wash oneself", example: "Si lava i denti due volte al giorno.", exampleTranslation: "She brushes her teeth twice a day." },
    { word: "vestirsi", translation: "to get dressed", example: "Mi vesto in fretta la mattina.", exampleTranslation: "I get dressed quickly in the morning." },
    { word: "chiamarsi", translation: "to be called", example: "Come ti chiami?", exampleTranslation: "What is your name?" },
    { word: "addormentarsi", translation: "to fall asleep", example: "Mi addormento subito dopo cena.", exampleTranslation: "I fall asleep right after dinner." },
  ],
  exercises: [
    {
      type: 'fill-blank',
      id: 'a1-rifl-01',
      prompt: 'Come ___ ? — Mi chiamo Giulia. (What\'s your name? — My name is Giulia.)',
      answer: 'ti chiami',
      hint: 'chiamarsi — tu form.',
      feedback: {
        correct: 'Esatto! "Ti chiami" is the tu form of chiamarsi.',
        incorrect: 'The correct answer is "ti chiami".',
        explanation:
          '"Chiamarsi" (to be called/named): io mi chiamo, tu ti chiami, lui/lei si chiama. "Come ti chiami?" is the standard way to ask someone\'s name. Answer: "Mi chiamo ___".',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-rifl-02',
      prompt: 'La domenica io ___ tardi. (On Sundays I wake up late.) — svegliarsi',
      answer: 'mi sveglio',
      feedback: {
        correct: 'Perfetto! "Mi sveglio" is correct.',
        incorrect: 'The correct answer is "mi sveglio".',
        explanation:
          '"Svegliarsi" → io: mi + sveglio = mi sveglio. "La domenica" (on Sundays) = recurring day → present tense. The reflexive pronoun "mi" comes BEFORE the verb.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-rifl-03',
      prompt: 'I bambini ___ subito dopo cena. (The children fall asleep immediately after dinner.) — addormentarsi',
      answer: 'si addormentano',
      feedback: {
        correct: 'Bravo/a! "Si addormentano" is correct.',
        incorrect: 'The correct answer is "si addormentano".',
        explanation:
          '"Addormentarsi" is a reflexive -are verb. Loro form: si + addormentano. The reflexive pronoun for loro (and lui/lei) is "si".',
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-rifl-04',
      question: 'Choose the correct sentence: "We are having fun at the party."',
      options: [
        { value: 'a', label: 'Ci divertiamo alla festa.' },
        { value: 'b', label: 'Vi divertiamo alla festa.' },
        { value: 'c', label: 'Ci divertono alla festa.' },
        { value: 'd', label: 'Si divertiamo alla festa.' },
      ],
      answer: 'a',
      feedback: {
        correct: 'Corretto! "Ci divertiamo alla festa."',
        incorrect: 'The correct answer is "Ci divertiamo alla festa."',
        explanation:
          '"We" = noi. Reflexive pronoun for noi = "ci". "Divertirsi" is a -ire reflexive: noi → divertiamo (Type-A). Full form: ci divertiamo. "Alla festa" = at the party (a + la = alla).',
        optionExplanations: {
          b: '"Vi" is the reflexive pronoun for "voi" (you plural), not "noi" (we).',
          c: '"Ci divertono" mixes noi (ci) with loro ending (-ono) — inconsistent.',
          d: '"Si" is for lui/lei and loro, not noi.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-rifl-05',
      question: 'What does "Non mi sento bene" mean?',
      options: [
        { value: 'a', label: "I don't feel well." },
        { value: 'b', label: "I don't hear well." },
        { value: 'c', label: "I don't see well." },
        { value: 'd', label: "I can't get up." },
      ],
      answer: 'a',
      feedback: {
        correct: "Esatto! \"Non mi sento bene\" = I don't feel well.",
        incorrect: "The correct answer is \"I don't feel well.\"",
        explanation:
          '"Sentirsi" (reflexive) means "to feel" (health): mi sento bene (I feel well), non mi sento bene (I don\'t feel well). Non-reflexive "sentire" means "to hear" or "to smell".',
        optionExplanations: {
          b: '"I don\'t hear well" = Non sento bene (non-reflexive sentire). The reflexive mi sento changes the meaning to "I feel".',
          c: '"I don\'t see well" = Non ci vedo bene / Non vedo bene. Sentirsi is about feeling, not seeing.',
          d: '"I can\'t get up" = Non riesco ad alzarmi. Sentirsi relates to physical/emotional feeling.',
        },
      },
    },
    {
      type: 'conjugation',
      id: 'a1-rifl-06',
      verb: 'vestirsi',
      tense: 'Presente Indicativo — Riflessivo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['mi vesto', 'ti vesti', 'si veste', 'ci vestiamo', 'vi vestite', 'si vestono'],
      feedback: {
        explanation:
          '"Vestirsi" is a Type-A -ire reflexive. The underlying verb is "vestire": vesto/vesti/veste/vestiamo/vestite/vestono. Add the reflexive pronouns: mi/ti/si/ci/vi/si. Result: mi vesto, ti vesti, si veste, ci vestiamo, vi vestite, si vestono.',
      },
    },
    {
      type: 'match',
      id: 'a1-rifl-07',
      instruction: 'Match each Italian reflexive sentence with its English translation.',
      pairs: [
        { left: 'Mi alzo alle sei.', right: 'I get up at six.' },
        { left: 'Ti lavi i denti?', right: 'Are you brushing your teeth?' },
        { left: 'Si rilassa dopo il lavoro.', right: 'He/she relaxes after work.' },
        { left: 'Ci sediamo qui.', right: 'We sit down here.' },
        { left: 'Vi divertite?', right: 'Are you all having fun?' },
      ],
      feedback: {
        explanation:
          '"Lavarsi i denti" = to brush one\'s teeth (literally "wash one\'s teeth"). "Rilassarsi" = to relax (reflexive). "Sedersi" = to sit down (si siedo/mi siedo, ti siedi, si siede, ci sediamo, vi sedete, si siedono — slightly irregular).',
      },
    },
    {
      type: 'reorder',
      id: 'a1-rifl-08',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['ogni', 'si', 'Marco', 'la', 'mattina', 'fa', 'doccia'],
      answer: ['Marco', 'si', 'fa', 'la', 'doccia', 'ogni', 'mattina'],
      feedback: {
        correct: 'Perfetto! "Marco si fa la doccia ogni mattina."',
        explanation:
          '"Farsi la doccia" = to take a shower (reflexive). "Si fa" = lui/lei reflexive form. Note the word order: Subject + reflexive pronoun + verb + object + time. "Ogni mattina" = every morning (time expression at the end).',
      },
    },
    {
      type: 'translation',
      id: 'a1-rifl-09',
      source: 'What time do you (singular, informal) wake up? I wake up at seven.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'A che ora ti svegli? Mi sveglio alle sette.',
        'Che ore ti svegli? Mi sveglio alle sette.',
        'A che ora ti alzi? Mi alzo alle sette.',
      ],
      feedback: {
        explanation:
          '"What time" = a che ora. "Do you wake up" = ti svegli (svegliarsi, tu). "I wake up" = mi sveglio (io). "At seven" = alle sette (a + le = alle). Alternatively: "alzarsi" (to get up) is also a natural answer.',
        modelAnswer: 'A che ora ti svegli? Mi sveglio alle sette.',
      },
    },
  ],
};
