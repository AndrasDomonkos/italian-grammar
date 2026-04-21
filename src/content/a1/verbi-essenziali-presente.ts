import type { Lesson } from '../types';

export const verbiEssenzialiPresente: Lesson = {
  slug: 'verbi-essenziali-presente',
  title: 'Verbi Essenziali — Present Tense Drill',
  level: 'a1',
  order: 19,
  explanation: {
    text: `## Verbi Essenziali al Presente (Essential Verbs — Present Tense)

The six most important Italian verbs are all irregular. They must be memorised completely; no regular pattern applies. This lesson gives you a full conjugation reference and mixed drills across all six verbs.

### The Six Forms: io · tu · lui/lei · noi · voi · loro

| Verb | io | tu | lui/lei | noi | voi | loro |
|------|----|----|---------|-----|-----|------|
| **essere** (to be) | sono | sei | è | siamo | siete | sono |
| **avere** (to have) | ho | hai | ha | abbiamo | avete | hanno |
| **andare** (to go) | vado | vai | va | andiamo | andate | vanno |
| **fare** (to do/make) | faccio | fai | fa | facciamo | fate | fanno |
| **venire** (to come) | vengo | vieni | viene | veniamo | venite | vengono |
| **stare** (to be/stay) | sto | stai | sta | stiamo | state | stanno |

### Key Facts

**Essere vs Stare:** Both translate as "to be" in English, but they are not interchangeable.
- *Essere* = permanent identity, profession, nationality, time: *Sono italiano. È medico.*
- *Stare* = temporary state, health, the progressive tense: *Sto bene. Sta studiando.*

**Avere:** Used for possession and many idiomatic expressions — *avere fame* (to be hungry), *avere sete* (to be thirsty), *avere freddo* (to be cold), *avere ragione* (to be right), *avere X anni* (to be X years old).

**Andare:** Used with *a* before a city/activity (*vado a Roma, vado a studiare*) and with *in* before a country/region (*vado in Italia, vado in centro*).

**Fare:** Appears in dozens of fixed expressions: *fare colazione* (to have breakfast), *fare la spesa* (to go shopping), *fare una domanda* (to ask a question), *fa caldo/freddo* (it is hot/cold).

**Venire:** The io form *vengo* and the loro form *vengono* use a -ng- stem. *Vieni!* = Come! (tu imperative).

**Stare:** The noi form *stiamo* and voi form *state* look like -are verb endings, which can confuse learners.`,
    tables: [
      {
        caption: 'Essential Verbs — Full Conjugation',
        headers: ['Pronoun', 'essere', 'avere', 'andare', 'fare', 'venire', 'stare'],
        rows: [
          ['io', 'sono', 'ho', 'vado', 'faccio', 'vengo', 'sto'],
          ['tu', 'sei', 'hai', 'vai', 'fai', 'vieni', 'stai'],
          ['lui / lei', 'è', 'ha', 'va', 'fa', 'viene', 'sta'],
          ['noi', 'siamo', 'abbiamo', 'andiamo', 'facciamo', 'veniamo', 'stiamo'],
          ['voi', 'siete', 'avete', 'andate', 'fate', 'venite', 'state'],
          ['loro', 'sono', 'hanno', 'vanno', 'fanno', 'vengono', 'stanno'],
        ],
      },
    ],
  },
  vocabulary: [
    { word: 'fame', translation: 'hunger', example: 'Ho molta fame dopo la palestra.', exampleTranslation: 'I am very hungry after the gym.' },
    { word: 'sete', translation: 'thirst', example: 'Hai sete? Prendo una bottiglia d\'acqua.', exampleTranslation: 'Are you thirsty? I\'ll get a bottle of water.' },
    { word: 'ragione', translation: 'reason / right', example: 'Hai ragione, fa troppo freddo.', exampleTranslation: 'You are right, it is too cold.' },
    { word: 'spesa', translation: 'shopping (food)', example: 'Facciamo la spesa ogni sabato.', exampleTranslation: 'We go grocery shopping every Saturday.' },
    { word: 'caldo', translation: 'hot / heat', example: 'Oggi fa molto caldo.', exampleTranslation: 'Today it is very hot.' },
    { word: 'freddo', translation: 'cold', example: 'Stanno a casa perché fa freddo.', exampleTranslation: 'They are staying home because it is cold.' },
  ],
  exercises: [
    // --- essere ---
    {
      type: 'conjugation',
      id: 'a1-vep-01',
      verb: 'essere',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
      feedback: {
        explanation:
          'Essere is entirely irregular. Memorise: sono · sei · è · siamo · siete · sono. The accent on è distinguishes it from e (and). Io and loro share the same form; context makes the meaning clear.',
      },
    },
    // --- avere ---
    {
      type: 'conjugation',
      id: 'a1-vep-02',
      verb: 'avere',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
      feedback: {
        explanation:
          'Avere drops the -v- in the singular: ho / hai / ha (no h sound — the h is silent). The plural shifts: abbiamo / avete / hanno. Watch the double -nn- in hanno.',
      },
    },
    // --- andare ---
    {
      type: 'conjugation',
      id: 'a1-vep-03',
      verb: 'andare',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
      feedback: {
        explanation:
          'Andare has two stems: vad-/va- (singular + loro) and and- (noi/voi). Singular: vado · vai · va. Noi/voi follow the -are pattern: andiamo · andate. Loro: vanno (double -nn-).',
      },
    },
    // --- fare ---
    {
      type: 'conjugation',
      id: 'a1-vep-04',
      verb: 'fare',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'],
      feedback: {
        explanation:
          'Fare (from Latin facere) has an irregular io: faccio. Then fai · fa follow a va/vai pattern. Noi: facciamo (double -cc-). Voi: fate (shorter). Loro: fanno (double -nn-).',
      },
    },
    // --- venire ---
    {
      type: 'conjugation',
      id: 'a1-vep-05',
      verb: 'venire',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'],
      feedback: {
        explanation:
          'Venire uses a -ng- stem in io (vengo) and loro (vengono). The tu/lui forms diphthongise: vieni · viene. Noi/voi are more regular: veniamo · venite.',
      },
    },
    // --- stare ---
    {
      type: 'conjugation',
      id: 'a1-vep-06',
      verb: 'stare',
      tense: 'Presente Indicativo',
      pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
      answers: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'],
      feedback: {
        explanation:
          'Stare looks similar to andare: sto · stai · sta. Noi: stiamo. Voi: state (same as voi imperative of stare — context-dependent). Loro: stanno (double -nn-).',
      },
    },
    // --- fill-blank mixed ---
    {
      type: 'fill-blank',
      id: 'a1-vep-07',
      prompt: 'Noi ___ in Italia. (We are in Italy.) [essere]',
      answer: 'siamo',
      feedback: {
        correct: 'Esatto! Noi siamo in Italia.',
        incorrect: 'The answer is "siamo".',
        explanation: 'Noi + essere = siamo. Essere expresses location (where you are): Siamo in Italia.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-vep-08',
      prompt: 'Loro ___ molto lavoro oggi. (They have a lot of work today.) [avere]',
      answer: 'hanno',
      feedback: {
        correct: 'Perfetto! Hanno molto lavoro.',
        incorrect: 'The answer is "hanno".',
        explanation: 'Loro + avere = hanno (double -nn-). "Avere lavoro" = to have work to do.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-vep-09',
      prompt: 'Tu ___ a scuola ogni mattina. (You go to school every morning.) [andare]',
      answer: 'vai',
      feedback: {
        correct: 'Bravo/a! Tu vai a scuola.',
        incorrect: 'The answer is "vai".',
        explanation: 'Tu + andare = vai. Before activities and cities, andare takes "a": vai a scuola.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-vep-10',
      prompt: 'Io ___ colazione alle sette. (I have breakfast at seven.) [fare]',
      answer: 'faccio',
      feedback: {
        correct: 'Ottimo! Faccio colazione alle sette.',
        incorrect: 'The answer is "faccio".',
        explanation: 'Io + fare = faccio. "Fare colazione" is the Italian expression for having breakfast — never use avere here.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-vep-11',
      prompt: 'Voi ___ a casa mia stasera? (Are you all coming to my place tonight?) [venire]',
      answer: 'venite',
      feedback: {
        correct: 'Corretto! Venite a casa mia.',
        incorrect: 'The answer is "venite".',
        explanation: 'Voi + venire = venite. "A casa mia" = to my home. The voi form ends in -ite, following the regular -ire pattern.',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-vep-12',
      prompt: 'Come ___ ? — ___ bene, grazie! (How are you? — I\'m fine, thanks!) [stare / stare]',
      answer: ['stai', 'sto'],
      feedback: {
        correct: 'Perfetto! Come stai? Sto bene.',
        incorrect: 'The answers are "stai" and "sto".',
        explanation: 'The standard greeting: Come stai? (tu form) — Sto bene! (io form). Stare is used for health and temporary states, not essere.',
      },
    },
    // --- multiple-choice mixed ---
    {
      type: 'multiple-choice',
      id: 'a1-vep-13',
      question: 'Marco ___ fame — non mangia da stamattina. (Marco is hungry.)',
      options: [
        { value: 'ha', label: 'ha' },
        { value: 'è', label: 'è' },
        { value: 'fa', label: 'fa' },
        { value: 'sta', label: 'sta' },
      ],
      answer: 'ha',
      feedback: {
        correct: 'Esatto! Marco ha fame.',
        incorrect: 'The correct form is "ha" (avere).',
        explanation: '"Avere fame" = to be hungry (Italian uses avere, not essere, for hunger). Marco = 3rd person singular → ha.',
        optionExplanations: {
          è: '"Essere" expresses identity or permanent traits, not bodily states like hunger.',
          fa: '"Fare" = to do/make — not used for expressing hunger.',
          sta: '"Stare" expresses temporary condition or location, but the Italian expression for hunger is avere fame.',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-vep-14',
      question: 'Voi ___ a Roma domani? (Are you all going to Rome tomorrow?)',
      options: [
        { value: 'andate', label: 'andate' },
        { value: 'vanno', label: 'vanno' },
        { value: 'vai', label: 'vai' },
        { value: 'andiamo', label: 'andiamo' },
      ],
      answer: 'andate',
      feedback: {
        correct: 'Bravo/a! Voi andate a Roma.',
        incorrect: 'The correct form is "andate".',
        explanation: 'Voi + andare = andate. This is the voi form, which looks like a regular -are verb ending: and- + -ate = andate.',
        optionExplanations: {
          vanno: '"Vanno" is the loro (3rd plural) form, not voi.',
          vai: '"Vai" is the tu (2nd singular) form.',
          andiamo: '"Andiamo" is the noi (1st plural) form. Let\'s go = Andiamo!',
        },
      },
    },
    {
      type: 'multiple-choice',
      id: 'a1-vep-15',
      question: 'Io e Luca ___ una passeggiata nel parco. (Luca and I take a walk in the park.)',
      options: [
        { value: 'facciamo', label: 'facciamo' },
        { value: 'faccio', label: 'faccio' },
        { value: 'fanno', label: 'fanno' },
        { value: 'fate', label: 'fate' },
      ],
      answer: 'facciamo',
      feedback: {
        correct: 'Ottimo! Io e Luca facciamo una passeggiata.',
        incorrect: 'The correct form is "facciamo".',
        explanation: '"Io e Luca" = two people including the speaker = noi. Noi + fare = facciamo. "Fare una passeggiata" = to take a walk.',
        optionExplanations: {
          faccio: '"Faccio" is for io only. "Io e Luca" is a compound subject = noi.',
          fanno: '"Fanno" is the loro (3rd plural) form.',
          fate: '"Fate" is the voi (2nd plural) form.',
        },
      },
    },
    // --- match ---
    {
      type: 'match',
      id: 'a1-vep-16',
      instruction: 'Match each subject to the correct form of the verb in brackets.',
      pairs: [
        { left: 'Io ___ [andare]', right: 'vado' },
        { left: 'Tu ___ [fare]', right: 'fai' },
        { left: 'Lei ___ [venire]', right: 'viene' },
        { left: 'Noi ___ [stare]', right: 'stiamo' },
        { left: 'Voi ___ [avere]', right: 'avete' },
        { left: 'Loro ___ [essere]', right: 'sono' },
      ],
      feedback: {
        explanation:
          'Summary: io vado · tu fai · lei viene · noi stiamo · voi avete · loro sono. Each verb has its own unique irregular paradigm — mixed drills like this train your brain to switch between them quickly.',
      },
    },
    // --- reorder ---
    {
      type: 'reorder',
      id: 'a1-vep-17',
      instruction: 'Arrange the words to form a correct Italian sentence.',
      words: ['la', 'Voi', 'spesa', 'al', 'fate', 'mercato'],
      answer: ['Voi', 'fate', 'la', 'spesa', 'al', 'mercato'],
      feedback: {
        correct: 'Perfetto! "Voi fate la spesa al mercato."',
        explanation: '"Fare la spesa" = to go food shopping. Word order: Subject + verb + direct object + location. "Al mercato" = at the market (a + il = al).',
      },
    },
    // --- translation ---
    {
      type: 'translation',
      id: 'a1-vep-18',
      source: 'They come from Rome and they go to Milan every week.',
      direction: 'en-to-it',
      acceptedAnswers: [
        'Vengono da Roma e vanno a Milano ogni settimana.',
        'Loro vengono da Roma e vanno a Milano ogni settimana.',
        'Vengono da Roma e ogni settimana vanno a Milano.',
      ],
      feedback: {
        explanation:
          '"They come" = vengono (venire, loro). "From Rome" = da Roma. "They go" = vanno (andare, loro). "To Milan" = a Milano. "Every week" = ogni settimana. Subject pronouns (loro) can be omitted when the verb ending is unambiguous.',
        modelAnswer: 'Vengono da Roma e vanno a Milano ogni settimana.',
      },
    },
    // --- fill-blank: essere/stare distinction ---
    {
      type: 'fill-blank',
      id: 'a1-vep-19',
      prompt: 'Mio padre ___ medico. (My father is a doctor.) [essere or stare?]',
      answer: 'è',
      feedback: {
        correct: 'Esatto! Mio padre è medico.',
        incorrect: 'The answer is "è" (essere).',
        explanation: 'Profession = permanent identity → essere, NOT stare. Also note: Italian omits the article with professions after essere: "è medico" (not "è un medico").',
      },
    },
    {
      type: 'fill-blank',
      id: 'a1-vep-20',
      prompt: 'Come ___ tua sorella? — ___ bene. (How is your sister? — She is fine.) [stare/stare]',
      answer: ['sta', 'sta'],
      feedback: {
        correct: 'Perfetto! Come sta? — Sta bene.',
        incorrect: 'Both answers are "sta".',
        explanation: 'Health and well-being → stare. "Come sta?" (formal/3rd person) — "Sta bene." Third person singular = sta. Compare: Come stai? (tu, informal).',
      },
    },
  ],
};
