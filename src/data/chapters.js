/**
 * chapters.js
 * ----------------------------------------------------------------
 * This file contains ALL grammar tutorial data.
 * Each chapter object has: id, title, section, icon, overview,
 * keyConcepts (array of {label, value, example}), visualTip,
 * patterns (array of {structure, examples[]}), mistakes (array of
 * {wrong, right, explanation}), and quiz (array of {question, answer}).
 *
 * Keeping data separate from UI components makes the app modular
 * and easy to update with new chapters later.
 * ----------------------------------------------------------------
 */

export const CHAPTERS = [
  // ============ PRESENT TENSES ============
  {
    id: 1,
    title: 'The Present Simple',
    section: 'Present Tenses',
    icon: '🕐',
    overview:
      'The present simple describes facts, habits, and things that are always true. Use it for things that happen regularly (every day, usually, often) or for general truths.',
    keyConcepts: [
      { label: 'I / You / We / They', value: 'base form (eat, work, go)', example: 'I eat breakfast at 7 AM.' },
      { label: 'He / She / It', value: 'base form + -s or -es', example: 'She eats breakfast at 7 AM.' },
    ],
    visualTip: 'Think of the present simple as a timeline with repeating dots. Each dot is the same action happening again and again (habit/routine).',
    patterns: [
      { structure: 'Subject + verb [+s/es] + rest of sentence', examples: ['They live in London.', 'My father works in a hospital.'] },
      { structure: 'Subject + be (am/is/are) + complement', examples: ['I am a student.', 'The books are on the table.'] },
      { structure: 'Subject + have/has + object', examples: ['We have two cats.', 'She has a new phone.'] },
    ],
    mistakes: [
      { wrong: '❌ He work in an office.', right: '✅ He works in an office.', explanation: 'With he/she/it, you must add -s or -es to the verb.' },
      { wrong: '❌ I am eat breakfast every day.', right: '✅ I eat breakfast every day.', explanation: 'Do not use do or be as an extra word in positive present simple sentences.' },
      { wrong: '❌ She haves a car.', right: '✅ She has a car.', explanation: 'Have is irregular. The third person form is has, not haves.' },
    ],
    quiz: [
      { question: 'She ____ (play) tennis every weekend.', answer: 'plays' },
      { question: 'They ____ (not / watch) TV in the morning.', answer: "don't watch" },
      { question: 'Water ____ (boil) at 100 degrees Celsius.', answer: 'boils' },
    ],
  },
  {
    id: 2,
    title: 'The Present Simple Negative',
    section: 'Present Tenses',
    icon: '🚫',
    overview:
      'Negative sentences say that something is NOT true or does NOT happen. Use not with be, or do not / does not with other verbs.',
    keyConcepts: [
      { label: 'be (am/is/are)', value: 'Add not after be', example: 'She is not happy.' },
      { label: 'All other verbs', value: 'Use do/does + not + base form', example: 'She does not work here.' },
    ],
    visualTip: 'Picture a big NOT sign you put into the sentence. Positive: Subject + Verb. Negative: Subject + do/does + not + base verb.',
    patterns: [
      { structure: 'Subject + be + not + complement', examples: ["I'm not tired.", "They aren't at home."] },
      { structure: 'Subject + do/does + not + base verb + rest', examples: ["He doesn't like coffee.", "We don't eat meat."] },
    ],
    mistakes: [
      { wrong: "❌ She doesn't likes pizza.", right: "✅ She doesn't like pizza.", explanation: 'After doesn't or don't, always use the base form of the verb. Never add -s!' },
      { wrong: '❌ He no is a teacher.', right: '✅ He is not a teacher. / He isn\'t a teacher.', explanation: 'For the verb be, put not after the verb, not before.' },
    ],
    quiz: [
      { question: 'I ____ (not / speak) French very well.', answer: "don't speak" },
      { question: 'She ____ (not / be) from Canada.', answer: "isn't / is not" },
      { question: 'My brother ____ (not / play) the guitar.', answer: "doesn't play" },
    ],
  },
  {
    id: 3,
    title: 'The Present Continuous',
    section: 'Present Tenses',
    icon: '▶️',
    overview:
      'The present continuous describes actions happening RIGHT NOW, at this exact moment. It is also used for future plans. Form it with be (am/is/are) + verb-ing.',
    keyConcepts: [
      { label: 'am/is/are + verb-ing', value: 'Add -ing to base verb', example: 'He is reading a book.' },
      { label: 'Verbs ending in -e', value: 'Remove e, add -ing', example: 'make → making' },
      { label: 'Verbs ending in -ie', value: 'Change ie to y, add -ing', example: 'lie → lying' },
      { label: 'Short CVC verbs', value: 'Double last letter, add -ing', example: 'run → running' },
    ],
    visualTip: 'Imagine a video playing right now. Present simple = a photo of a habit. Present continuous = a video of right now.',
    patterns: [
      { structure: 'Subject + am/is/are + verb-ing + rest', examples: ["I'm reading a great book.", "Look! It's snowing outside."] },
      { structure: 'Question: Am/Is/Are + subject + verb-ing + rest?', examples: ['Are you coming to the party?', 'Is she working today?'] },
      { structure: 'Negative: Subject + am/is/are + not + verb-ing', examples: ["They aren't watching TV.", "I'm not feeling well."] },
    ],
    mistakes: [
      { wrong: '❌ I am knowing the answer.', right: '✅ I know the answer.', explanation: 'State verbs (know, like, believe, want, have) describe states, not actions. Do not use them in continuous tenses.' },
      { wrong: '❌ He runing very fast.', right: '✅ He is running very fast.', explanation: 'Always use be (am/is/are) before the -ing verb. For short CVC verbs, double the last letter.' },
    ],
    quiz: [
      { question: 'Look! The children ____ (play) in the garden.', answer: 'are playing' },
      { question: 'Please be quiet. I ____ (study).', answer: "'m studying / am studying" },
      { question: 'She ____ (not / sleep) right now.', answer: "isn't sleeping" },
    ],
  },

  // ============ PAST TENSES ============
  {
    id: 4,
    title: 'The Past Simple',
    section: 'Past Tenses',
    icon: '⏮️',
    overview:
      'The past simple describes finished actions in the past. Use it for things that happened at a specific time (yesterday, last week, in 2010). Regular verbs add -ed; irregular verbs have special forms.',
    keyConcepts: [
      { label: 'Regular verbs', value: 'Add -ed', example: 'walk → walked' },
      { label: 'Ending in -e', value: 'Add -d', example: 'love → loved' },
      { label: 'Consonant + y', value: 'y → i + ed', example: 'study → studied' },
      { label: 'Short CVC (stressed)', value: 'Double last letter + ed', example: 'stop → stopped' },
      { label: 'Irregular verbs', value: 'Learn the forms!', example: 'go → went, eat → ate' },
    ],
    visualTip: 'Think of the past simple as a single point on a timeline. The action started and finished at one point in the past.',
    patterns: [
      { structure: 'Subject + past verb + rest', examples: ['I visited my grandmother last weekend.', 'They went to Paris in 2020.'] },
      { structure: 'Negative: Subject + did not + base verb + rest', examples: ["She didn't come to the party.", "We didn't see the movie."] },
      { structure: 'Question: Did + subject + base verb + rest?', examples: ['Did you finish your homework?', 'Did he call you yesterday?'] },
    ],
    mistakes: [
      { wrong: "❌ I didn't went to school.", right: "✅ I didn't go to school.", explanation: 'After didn't, always use the base form of the verb, never the past form.' },
      { wrong: '❌ Did you ate breakfast?', right: '✅ Did you eat breakfast?', explanation: 'In questions with did, the main verb stays in its base form.' },
    ],
    quiz: [
      { question: 'Last year, I ____ (travel) to Japan.', answer: 'traveled / travelled' },
      { question: 'She ____ (not / go) to the meeting yesterday.', answer: "didn't go" },
      { question: '____ you ____ (watch) the game last night?', answer: 'Did / watch' },
    ],
  },
  {
    id: 5,
    title: 'The Present Perfect Simple',
    section: 'Past Tenses',
    icon: '🔗',
    overview:
      'The present perfect connects the past and the present. Use it for past actions that still matter now, for recent news, or for things that happened in your life (no specific time).',
    keyConcepts: [
      { label: 'Life experience', value: 'Something you have done in your life', example: "I've visited three countries." },
      { label: 'Recent news', value: 'Something that just happened', example: 'She has lost her keys.' },
      { label: 'Unfinished action', value: 'Started in past, still true now', example: "We've lived here for 5 years." },
    ],
    visualTip: 'Picture a line from the past to now. The action started in the past and has a connection to the present moment.',
    patterns: [
      { structure: 'Subject + have/has + past participle + rest', examples: ["I've already seen that movie.", 'He has never tried sushi.'] },
      { structure: 'Question: Have/Has + subject + past participle + rest?', examples: ['Have you ever been to Mexico?', 'Has she finished her report yet?'] },
    ],
    mistakes: [
      { wrong: '❌ I have saw that movie.', right: '✅ I have seen that movie.', explanation: 'The present perfect uses the past participle, not the past simple form. Saw is past simple; seen is the past participle.' },
      { wrong: '❌ I have visited Paris last year.', right: '✅ I visited Paris last year. / I have visited Paris.', explanation: 'Do not use the present perfect with a specific past time (last year, yesterday). Use past simple instead.' },
    ],
    quiz: [
      { question: 'I ____ (never / try) sushi before.', answer: 'have never tried' },
      { question: 'She ____ (just / arrive) from the airport.', answer: 'has just arrived' },
      { question: 'They ____ (live) here since 2018.', answer: 'have lived' },
    ],
  },
  {
    id: 6,
    title: 'The Past Perfect Simple',
    section: 'Past Tenses',
    icon: '⏪',
    overview:
      'The past perfect describes an action that happened BEFORE another action in the past. It is the past of the past. Use had + past participle.',
    keyConcepts: [
      { label: 'First (earlier past)', value: 'Past Perfect', example: 'I had eaten dinner...' },
      { label: 'Second (later past)', value: 'Past Simple', example: '...when you arrived.' },
    ],
    visualTip: 'Two points in the past. The past perfect is the earlier past — it happened first.',
    patterns: [
      { structure: 'Past Perfect ... before ... Past Simple', examples: ['I had finished my homework before I went to bed.', 'She had never seen snow before she moved to Canada.'] },
      { structure: 'Past Simple ... after ... Past Perfect', examples: ['I felt much better after I had talked to her.', 'They left the restaurant after they had paid the bill.'] },
    ],
    mistakes: [
      { wrong: '❌ When I arrived, he already left.', right: '✅ When I arrived, he had already left.', explanation: 'When one past action happened before another, use the past perfect for the earlier action.' },
      { wrong: '❌ I had saw him before.', right: '✅ I had seen him before.', explanation: 'Past perfect uses had + past participle. Seen is the past participle of see.' },
    ],
    quiz: [
      { question: 'By the time we arrived, the movie ____ (already / start).', answer: 'had already started' },
      { question: "She couldn't find her keys because she ____ (lose) them.", answer: 'had lost' },
      { question: 'After I ____ (read) the book, I watched the movie.', answer: 'had read' },
    ],
  },

  // ============ FUTURE TENSES ============
  {
    id: 7,
    title: 'The Future: Will and Going to',
    section: 'Future Tenses',
    icon: '⏭️',
    overview:
      'English uses will and going to to talk about the future. Will is for predictions, decisions made now, and offers. Going to is for plans made earlier and predictions with evidence.',
    keyConcepts: [
      { label: 'Will — Use for', value: 'Predictions, instant decisions, offers, promises', example: 'I think it will rain tomorrow.' },
      { label: 'Going to — Use for', value: 'Plans made in advance, predictions with evidence', example: "Look at those clouds! It's going to rain." },
    ],
    visualTip: 'Will = a thought or prediction from your head. Going to = a plan you made before, or evidence you can see now.',
    patterns: [
      { structure: 'Subject + will + base verb + rest', examples: ["I'll help you carry those bags. (instant offer)", 'People will live on Mars one day. (prediction)'] },
      { structure: 'Subject + be + going to + base verb + rest', examples: ["We're going to visit my parents next weekend. (plan)", "She's going to have a baby. (evidence)"] },
    ],
    mistakes: [
      { wrong: '❌ I will buy a new car next week. (if you already decided)', right: "✅ I'm going to buy a new car next week.", explanation: 'If the plan was made before now, use going to, not will.' },
      { wrong: '❌ I going to study tonight.', right: "✅ I am going to study tonight. / I'm going to study tonight.", explanation: 'Going to needs be (am/is/are) before it. Do not forget the verb be!' },
    ],
    quiz: [
      { question: "I'm hungry. I think I ____ make a sandwich.", answer: "'ll / will" },
      { question: "We've booked the tickets. We ____ fly to Rome next month.", answer: "'re going to / are going to" },
      { question: 'Look at that car! It ____ crash!', answer: "'s going to / is going to" },
    ],
  },

  // ============ PASSIVE VOICE ============
  {
    id: 8,
    title: 'The Passive Voice',
    section: 'Passive Voice',
    icon: '🔄',
    overview:
      'In active sentences, the subject does the action. In passive sentences, the subject RECEIVES the action. Use the passive when the doer is unknown, unimportant, or obvious.',
    keyConcepts: [
      { label: 'Active Voice', value: 'Subject + verb + object — Focus: who does the action', example: 'Someone stole my bike.' },
      { label: 'Passive Voice', value: 'Subject + be + past participle — Focus: what receives the action', example: 'My bike was stolen.' },
    ],
    visualTip: 'Active: person does action to thing (focus on the person). Passive: thing receives action (focus on the thing).',
    patterns: [
      { structure: 'Object of active becomes subject + be + past participle', examples: ['Active: They make these shoes in Italy. Passive: These shoes are made in Italy.', 'Active: Someone has broken the window. Passive: The window has been broken.'] },
      { structure: 'Passive with by (to say who did it)', examples: ['This painting was painted by Van Gogh.', 'The new hospital will be opened by the mayor.'] },
    ],
    mistakes: [
      { wrong: '❌ The letter was write by my secretary.', right: '✅ The letter was written by my secretary.', explanation: 'The passive uses the past participle, not the base form or past simple form.' },
      { wrong: '❌ I born in 1995.', right: '✅ I was born in 1995.', explanation: 'Born is always passive. You need was/were born — never born alone.' },
    ],
    quiz: [
      { question: 'These cars ____ (make) in Germany.', answer: 'are made' },
      { question: 'The bridge ____ (build) in 1920.', answer: 'was built' },
      { question: 'Your homework must ____ (finish) by Friday.', answer: 'be finished' },
    ],
  },

  // ============ CONDITIONALS ============
  {
    id: 9,
    title: 'Zero & First Conditionals',
    section: 'Conditionals',
    icon: '🔀',
    overview:
      'Zero conditionals describe general truths (facts that are always true). First conditionals describe real, possible situations in the future.',
    keyConcepts: [
      { label: 'Zero Conditional', value: 'If + present simple, present simple — General truth / fact', example: 'If you heat water to 100 C, it boils.' },
      { label: 'First Conditional', value: 'If + present simple, will + base verb — Real future possibility', example: "If it rains tomorrow, we'll stay at home." },
    ],
    visualTip: 'Zero: always true, like a science fact. First: possible, likely to happen.',
    patterns: [
      { structure: 'If + present simple, present simple (Zero Conditional)', examples: ['If you heat water to 100 C, it boils.', "If people don't eat, they get hungry."] },
      { structure: 'If + present simple, will + base verb (First Conditional)', examples: ["If it rains tomorrow, we'll stay at home.", 'If you study hard, you will pass the exam.'] },
    ],
    mistakes: [
      { wrong: "❌ If it will rain, I'll take an umbrella.", right: "✅ If it rains, I'll take an umbrella.", explanation: 'Never use will in the if-clause of a first conditional. Use present simple.' },
      { wrong: '❌ If I will have time, I call you.', right: "✅ If I have time, I'll call you.", explanation: 'The if-clause uses present simple; the main clause uses will + base verb.' },
    ],
    quiz: [
      { question: 'If you ____ (mix) red and blue, you get purple.', answer: 'mix' },
      { question: 'If she ____ (come) to the party, I will be surprised.', answer: 'comes' },
      { question: 'I ____ (buy) you a coffee if you want one.', answer: "'ll buy / will buy" },
    ],
  },
  {
    id: 10,
    title: 'Second & Third Conditionals',
    section: 'Conditionals',
    icon: '🌀',
    overview:
      'Second conditionals describe imaginary or unlikely situations in the present/future. Third conditionals describe imaginary situations in the past (things that did not happen).',
    keyConcepts: [
      { label: 'Second Conditional', value: 'If + past simple, would + base verb — Unreal present', example: 'If I won the lottery, I would buy a big house.' },
      { label: 'Third Conditional', value: 'If + past perfect, would have + p.p. — Unreal past (regret)', example: "If I had woken up earlier, I wouldn't have missed the bus." },
    ],
    visualTip: 'Second: imaginary — I am NOT rich. Third: regret — I DID NOT study.',
    patterns: [
      { structure: 'If + past simple, would + base verb (Second Conditional)', examples: ["If I won the lottery, I'd buy a big house.", 'If she were president, she would change many laws.'] },
      { structure: 'If + past perfect, would have + past participle (Third Conditional)', examples: ["If I had woken up earlier, I wouldn't have missed the bus.", 'If they had taken a map, they would not have got lost.'] },
    ],
    mistakes: [
      { wrong: '❌ If I would have more time, I would travel.', right: '✅ If I had more time, I would travel.', explanation: 'Do not use would in the if-clause. Use past simple for second conditional.' },
      { wrong: '❌ If I was you, I would apologize.', right: '✅ If I were you, I would apologize.', explanation: 'In second conditional, we use were for all subjects (I/he/she/it). If I were you is a common phrase for giving advice.' },
    ],
    quiz: [
      { question: 'If I ____ (be) you, I would study medicine.', answer: 'were' },
      { question: 'She would have passed the test if she ____ (study) harder.', answer: 'had studied' },
      { question: 'If they spoke English, they ____ (understand) this song.', answer: "'d understand / would understand" },
    ],
  },

  // ============ QUESTIONS ============
  {
    id: 11,
    title: 'Forming Questions',
    section: 'Questions',
    icon: '❓',
    overview:
      'Questions in English are formed in two ways. If the main verb is be or there is an auxiliary verb, swap the subject and verb. Otherwise, add do/does/did at the beginning.',
    keyConcepts: [
      { label: 'Verb is be', value: 'Swap subject and be', example: 'You are happy. → Are you happy?' },
      { label: 'Auxiliary verb present', value: 'Swap subject and auxiliary', example: 'She has arrived. → Has she arrived?' },
      { label: 'No auxiliary (present simple)', value: 'Add Do/Does + subject + base verb', example: 'He works here. → Does he work here?' },
      { label: 'No auxiliary (past simple)', value: 'Add Did + subject + base verb', example: 'They left early. → Did they leave early?' },
    ],
    visualTip: 'Think of questions as flipping the order. Statement: Subject + Verb. Question with be: Verb + Subject. Question with other verbs: Do/Does/Did + Subject + base verb.',
    patterns: [
      { structure: 'Be + subject + rest? (Yes/No questions with be)', examples: ['Is he your brother?', 'Are they ready to leave?'] },
      { structure: 'Do/Does/Did + subject + base verb + rest?', examples: ['Do you like chocolate?', 'Did she go to the concert?'] },
      { structure: 'Question word + auxiliary + subject + main verb + rest?', examples: ['Where do you live?', 'What is she doing?'] },
    ],
    mistakes: [
      { wrong: '❌ Do you can swim?', right: '✅ Can you swim?', explanation: 'If there is already an auxiliary verb (can, have, is, etc.), do not add do. Just swap the subject and auxiliary.' },
      { wrong: '❌ Did he went to school?', right: '✅ Did he go to school?', explanation: 'After do/does/did, the main verb is always in the base form. Never use past tense or -s form.' },
    ],
    quiz: [
      { question: '____ (be) you from Australia?', answer: 'Are' },
      { question: '____ she ____ (work) in a hospital?', answer: 'Does / work' },
      { question: 'What time ____ you ____ (arrive) yesterday?', answer: 'did / arrive' },
    ],
  },

  // ============ REPORTED SPEECH ============
  {
    id: 12,
    title: 'Reported Speech',
    section: 'Reported Speech',
    icon: '💬',
    overview:
      'Reported speech (or indirect speech) tells what someone said without using their exact words. When the reporting verb is in the past, the verb in the sentence usually moves one step back in tense.',
    keyConcepts: [
      { label: 'Present Simple → Past Simple', value: 'I work → He said he worked', example: 'I work → He said he worked' },
      { label: 'Present Continuous → Past Continuous', value: "I'm going → She said she was going", example: "I'm going → She said she was going" },
      { label: 'Past Simple → Past Perfect', value: 'I left → He said he had left', example: 'I left → He said he had left' },
      { label: 'Will → Would', value: "I'll come → He said he would come", example: "I'll come → He said he would come" },
      { label: 'Can → Could', value: 'I can help → She said she could help', example: 'I can help → She said she could help' },
    ],
    visualTip: 'Imagine moving the whole sentence back in time. Present becomes Past, Past becomes Past Perfect, Will becomes Would.',
    patterns: [
      { structure: 'Subject + said (that) + subject + verb (backshifted)', examples: ['Direct: "I am hungry." Reported: She said (that) she was hungry.', 'Direct: "I will call you." Reported: He said (that) he would call me.'] },
      { structure: 'Subject + told + object + (that) + clause', examples: ['He told me (that) he was tired.', 'She told us (that) she had already eaten.'] },
    ],
    mistakes: [
      { wrong: '❌ She said me that she was busy.', right: '✅ She told me that she was busy. / She said that she was busy.', explanation: 'Say does not take a person directly. Use tell + person, or say + (that) clause.' },
      { wrong: '❌ He said he will come tomorrow.', right: '✅ He said he would come the next day.', explanation: 'In reported speech, will becomes would, and time words change too (tomorrow becomes the next day).' },
    ],
    quiz: [
      { question: '"I love chocolate." → She said she ____ chocolate.', answer: 'loved' },
      { question: '"I will be late." → He told me he ____ late.', answer: 'would be' },
      { question: '"I have finished my homework." → She said she ____ her homework.', answer: 'had finished' },
    ],
  },

  // ============ MODAL VERBS ============
  {
    id: 13,
    title: 'Modal Verbs',
    section: 'Modal Verbs',
    icon: '🗣️',
    overview:
      'Modal verbs (can, could, must, should, will, would, may, might) are special auxiliary verbs. They do not change form (no -s, no -ed) and are followed by the base form of the main verb.',
    keyConcepts: [
      { label: 'can', value: 'Ability (present), permission (informal)', example: 'I can swim.' },
      { label: 'could', value: 'Ability (past), polite request', example: 'Could you help me?' },
      { label: 'must', value: 'Strong obligation, certainty', example: 'You must wear a seatbelt.' },
      { label: 'have to', value: 'Obligation (from outside)', example: 'I have to work on Saturday.' },
      { label: 'should', value: 'Advice, recommendation', example: 'You should see a doctor.' },
      { label: 'might / may', value: 'Possibility', example: 'It might rain later.' },
    ],
    visualTip: 'Modal verbs are helper verbs that sit before the main verb. They never change form. Just plug them in!',
    patterns: [
      { structure: 'Subject + modal + base verb + rest', examples: ['She can speak three languages. (ability)', "You mustn't park here. (prohibition)"] },
      { structure: 'Modal + subject + base verb + rest? (Question)', examples: ['Can I use your phone? (permission)', 'Should we leave now? (suggestion)'] },
    ],
    mistakes: [
      { wrong: '❌ He can to swim very well.', right: '✅ He can swim very well.', explanation: 'Modal verbs are followed directly by the base form of the verb. No to in between!' },
      { wrong: '❌ She musts study tonight.', right: '✅ She must study tonight.', explanation: 'Modal verbs never add -s for he/she/it. They stay the same for all subjects.' },
      { wrong: "❌ You don't must smoke here.", right: "✅ You mustn't smoke here. / You don't have to smoke here.", explanation: 'Must not means it is prohibited. Do not have to means it is not necessary. They are very different!' },
    ],
    quiz: [
      { question: 'You ____ (obligation) wear a helmet on a motorcycle.', answer: 'must / have to' },
      { question: '____ (ability) you play the piano?', answer: 'Can' },
      { question: 'I think you ____ (advice) see a dentist about that toothache.', answer: 'should' },
    ],
  },

  // ============ ARTICLES ============
  {
    id: 14,
    title: 'Articles (A / An / The)',
    section: 'Articles',
    icon: '📝',
    overview:
      'English has two types of articles. A/an means one of many (indefinite). The means this specific one (definite). Sometimes no article is needed.',
    keyConcepts: [
      { label: 'A / An', value: 'First mention, one of many, any one', example: 'I saw a bird. The bird was blue.' },
      { label: 'The', value: 'Specific thing, both know which one, only one', example: 'Look at the moon!' },
      { label: 'No article', value: 'Plural/general, uncountable nouns, most place names', example: 'Dogs are friendly. I drink coffee.' },
    ],
    visualTip: 'A/An = here is one thing (you do not know which specific one yet). The = you know which one I am talking about. No article = talking about things in general.',
    patterns: [
      { structure: 'A/An + singular countable noun (first mention / any one)', examples: ['I need a new pen. (any pen)', 'She is an engineer. (job, any engineer)'] },
      { structure: 'The + noun (specific / both know / only one)', examples: ['Can you pass the salt? (the salt on this table)', 'The sun rises in the east. (there is only one sun)'] },
      { structure: 'No article (general plural / uncountable / most place names)', examples: ['Cats like fish. (general)', 'I live in London. (city name)'] },
    ],
    mistakes: [
      { wrong: '❌ I go to the school every day.', right: '✅ I go to school every day.', explanation: 'When you talk about the purpose of a place (studying at school, being sick in hospital), use no article. Use the only for the building itself.' },
      { wrong: '❌ I have a information for you.', right: '✅ I have some information for you.', explanation: 'Information is uncountable. You cannot use a/an with uncountable nouns. Use some or a piece of.' },
    ],
    quiz: [
      { question: 'I bought ____ book yesterday. ____ book is very interesting.', answer: 'a / The' },
      { question: 'She lives in ____ small apartment in ____ Paris.', answer: 'a / no article' },
      { question: '____ water is essential for life.', answer: 'no article' },
    ],
  },

  // ============ NOUNS ============
  {
    id: 15,
    title: 'Countable & Uncountable Nouns',
    section: 'Nouns',
    icon: '🏷️',
    overview:
      'Countable nouns are things you can count (one apple, two apples). Uncountable nouns are things you cannot count individually (water, rice, information). This affects which words you use with them.',
    keyConcepts: [
      { label: 'Countable', value: 'Yes (1 book, 2 books). Use many, few, a few.', example: 'Many people are here.' },
      { label: 'Uncountable', value: "No (water, not '2 waters'). Use much, little, a little.", example: 'Much information is online.' },
    ],
    visualTip: 'Countable: you can count them one by one. Uncountable: you measure it, like water or rice.',
    patterns: [
      { structure: 'How many + countable noun...? / How much + uncountable noun...?', examples: ['How many books do you have?', 'How much money do you need?'] },
      { structure: 'Some / Any (both countable plural and uncountable)', examples: ['I have some friends here. / I do not have any friends here.', 'I need some advice. / I do not need any advice.'] },
    ],
    mistakes: [
      { wrong: '❌ I have much books.', right: '✅ I have many books.', explanation: 'Use many with countable nouns and much with uncountable nouns.' },
      { wrong: '❌ Can you give me an advice?', right: '✅ Can you give me some advice? / Can you give me a piece of advice?', explanation: 'Advice is uncountable. You cannot use a/an with it. Use some or a piece of.' },
      { wrong: '❌ The news are very bad.', right: '✅ The news is very bad.', explanation: 'News looks plural but is actually uncountable. It always takes a singular verb.' },
    ],
    quiz: [
      { question: 'How ____ (many / much) apples do you want?', answer: 'many' },
      { question: 'There ____ (is / are) too much traffic today.', answer: 'is' },
      { question: 'I need ____ (some / a) information about the course.', answer: 'some' },
    ],
  },

  // ============ PRONOUNS ============
  {
    id: 16,
    title: 'Personal Pronouns',
    section: 'Pronouns',
    icon: '🙋',
    overview:
      'Personal pronouns replace nouns in sentences. Subject pronouns do the action. Object pronouns receive the action. Use them to avoid repeating names or nouns.',
    keyConcepts: [
      { label: 'Subject Pronouns', value: 'I, you, he, she, it, we, they — Do the action', example: 'She works at a bank.' },
      { label: 'Object Pronouns', value: 'me, you, him, her, it, us, them — Receive the action', example: 'Can you help me?' },
      { label: 'Possessive Adjectives', value: 'my, your, his, her, its, our, their — Show ownership', example: 'This is my book.' },
    ],
    visualTip: 'Subject: does the action — comes before the verb. Object: receives the action — comes after the verb or preposition.',
    patterns: [
      { structure: 'Subject pronoun + verb + rest', examples: ['She works at a bank.', 'They are coming to the party.'] },
      { structure: 'Verb / preposition + object pronoun', examples: ['Can you help me?', 'I went to the cinema with him.'] },
    ],
    mistakes: [
      { wrong: '❌ Me and Tom went shopping.', right: '✅ Tom and I went shopping.', explanation: 'When the pronoun is the subject of the verb, use a subject pronoun (I, he, she, we, they). It is also polite to put yourself last.' },
      { wrong: '❌ The gift is for he.', right: '✅ The gift is for him.', explanation: 'After a preposition (for, to, with, about, etc.), use an object pronoun (me, him, her, us, them).' },
    ],
    quiz: [
      { question: 'My sister and ____ (I / me) went to the park.', answer: 'I' },
      { question: 'Please call ____ (she / her) tomorrow.', answer: 'her' },
      { question: 'This book belongs to ____ (they / them).', answer: 'them' },
    ],
  },

  // ============ ADJECTIVES ============
  {
    id: 17,
    title: 'Comparative & Superlative Adjectives',
    section: 'Adjectives',
    icon: '🎨',
    overview:
      'Comparatives compare two things (A is bigger than B). Superlatives say something is the most extreme in a group (A is the biggest of all).',
    keyConcepts: [
      { label: 'Short (1 syllable)', value: '-er / -est', example: 'small → smaller → the smallest' },
      { label: 'Short CVC', value: 'double last letter + -er/-est', example: 'big → bigger → the biggest' },
      { label: 'Ends in -y', value: 'y → i + -er/-est', example: 'happy → happier → the happiest' },
      { label: 'Long (2+ syllables)', value: 'more / the most', example: 'beautiful → more beautiful → the most beautiful' },
      { label: 'Irregular', value: 'good → better → best; bad → worse → worst', example: 'good → better → the best' },
    ],
    visualTip: 'Comparative: comparing TWO things. Superlative: one is the most of a GROUP.',
    patterns: [
      { structure: 'Subject + verb + comparative + than + noun/pronoun', examples: ['My brother is taller than me.', 'This book is more interesting than that one.'] },
      { structure: 'Subject + verb + the + superlative + noun + (in/of group)', examples: ['Everest is the highest mountain in the world.', 'She is the most intelligent student in our class.'] },
    ],
    mistakes: [
      { wrong: '❌ My house is more bigger than yours.', right: '✅ My house is bigger than yours.', explanation: 'Never use both -er and more together. Use one or the other.' },
      { wrong: '❌ He is best student in the class.', right: '✅ He is the best student in the class.', explanation: 'Superlatives almost always need the before them.' },
    ],
    quiz: [
      { question: 'An elephant is ____ (big) than a dog.', answer: 'bigger' },
      { question: 'This is ____ (good) movie I have ever seen.', answer: 'the best' },
      { question: 'Math is ____ (difficult) than English.', answer: 'more difficult' },
    ],
  },

  // ============ ADVERBS ============
  {
    id: 18,
    title: 'Adverbs of Frequency',
    section: 'Adverbs',
    icon: '⚡',
    overview:
      'Adverbs of frequency tell us HOW OFTEN something happens. They go in specific positions in a sentence — usually before the main verb but after be.',
    keyConcepts: [
      { label: 'always', value: '100% of the time', example: 'always' },
      { label: 'usually / normally', value: '~90%', example: 'usually' },
      { label: 'often / frequently', value: '~70%', example: 'often' },
      { label: 'sometimes', value: '~50%', example: 'sometimes' },
      { label: 'seldom / rarely', value: '~15%', example: 'seldom' },
      { label: 'never', value: '0%', example: 'never' },
    ],
    visualTip: 'Word order rules: After be: She is always late. Before main verb: She always arrives late. Between auxiliary and main verb: She has always been late.',
    patterns: [
      { structure: 'Subject + be + adverb of frequency + complement', examples: ['They are usually at home on Sundays.', 'She is never angry.'] },
      { structure: 'Subject + adverb of frequency + main verb + rest', examples: ['I often go swimming on weekends.', 'He sometimes plays video games after school.'] },
      { structure: 'How often + auxiliary + subject + verb + rest? (Question)', examples: ['How often do you exercise?', 'How often does she visit her parents?'] },
    ],
    mistakes: [
      { wrong: '❌ I go often to the gym.', right: '✅ I often go to the gym.', explanation: 'Adverbs of frequency go BEFORE the main verb, not after it.' },
      { wrong: '❌ She always is on time.', right: '✅ She is always on time.', explanation: 'With the verb be, adverbs of frequency go AFTER be, not before.' },
    ],
    quiz: [
      { question: 'She ____ (always / be) early for class.', answer: 'is always' },
      { question: 'They ____ (sometimes / eat) out on Friday nights.', answer: 'sometimes eat' },
      { question: 'How ____ do you go to the cinema?', answer: 'often' },
    ],
  },

  // ============ PREPOSITIONS ============
  {
    id: 19,
    title: 'Prepositions of Time',
    section: 'Prepositions',
    icon: '📍',
    overview:
      'Prepositions of time (in, on, at, for, since, from...to) tell us WHEN something happens. Use in for longer periods, on for days/dates, and at for specific times.',
    keyConcepts: [
      { label: 'in', value: 'Months, years, seasons, parts of day, centuries', example: 'in January, in 2024, in summer, in the morning' },
      { label: 'on', value: 'Days of the week, specific dates, specific days', example: 'on Monday, on May 5th, on my birthday' },
      { label: 'at', value: 'Specific times, mealtimes, night', example: 'at 3 PM, at noon, at breakfast, at night' },
      { label: 'for', value: 'How long (duration)', example: 'I studied for two hours.' },
      { label: 'since', value: 'Starting point (until now)', example: "I've lived here since 2015." },
    ],
    visualTip: 'Think of it like zooming in: IN (big: year, month, season) then ON (medium: day, date) then AT (small: exact time).',
    patterns: [
      { structure: 'in / on / at + time expression', examples: ["We're going on vacation in July.", 'The meeting is on Tuesday morning.', 'I wake up at 6:30 every day.'] },
      { structure: 'for + period of time / since + point in time', examples: ['She has worked here for ten years.', 'She has worked here since 2014.'] },
    ],
    mistakes: [
      { wrong: "❌ I'll see you on next Monday.", right: "✅ I'll see you next Monday.", explanation: 'Do not use on before next, last, this, or every + day/week/month/year.' },
      { wrong: "❌ I'm studying English since three years.", right: "✅ I've been studying English for three years. / I've been studying English since 2021.", explanation: 'Use for with a period of time (three years). Use since with a starting point (2021). Use present perfect, not present simple, with for and since.' },
    ],
    quiz: [
      { question: 'My birthday is ____ March 15th.', answer: 'on' },
      { question: "The concert starts ____ 8 o'clock.", answer: 'at' },
      { question: 'I have lived in this city ____ five years.', answer: 'for' },
    ],
  },

  // ============ CONJUNCTIONS ============
  {
    id: 20,
    title: 'Conjunctions',
    section: 'Conjunctions',
    icon: '🔗',
    overview:
      'Conjunctions join words, phrases, or clauses. Coordinating conjunctions (and, but, or, so) join equal parts. Subordinating conjunctions (because, if, when, although) join a main clause and a dependent clause.',
    keyConcepts: [
      { label: 'and', value: 'adds information', example: 'I like tea and coffee.' },
      { label: 'but', value: 'shows contrast', example: "It's cold but sunny." },
      { label: 'or', value: 'gives a choice', example: 'Tea or coffee? You choose.' },
      { label: 'so', value: 'shows result', example: 'I was tired, so I went to bed.' },
      { label: 'because', value: 'gives a reason', example: 'I stayed home because I was sick.' },
      { label: 'although / though', value: 'shows surprise/contrast', example: 'Although it rained, we had fun.' },
      { label: 'if / unless', value: 'condition', example: "I'll go if it doesn't rain." },
    ],
    visualTip: 'Coordinating: two equal things joined together. Subordinating: one main clause plus a smaller clause that depends on it.',
    patterns: [
      { structure: 'Clause + coordinating conjunction + clause', examples: ['It was raining, but we went for a walk anyway.', 'She studied hard, so she passed the exam.'] },
      { structure: 'Subordinating conjunction + clause, + main clause', examples: ['Because he was late, he missed the train.', 'Although she was tired, she finished her work.'] },
    ],
    mistakes: [
      { wrong: '❌ Because I was tired, so I went home.', right: '✅ Because I was tired, I went home. / I was tired, so I went home.', explanation: 'Do not use because and so together in the same sentence. Use one or the other.' },
      { wrong: '❌ Although he is rich, but he is not happy.', right: "✅ Although he is rich, he's not happy. / He is rich, but he's not happy.", explanation: 'Do not use although and but together. They both show contrast — use only one.' },
    ],
    quiz: [
      { question: 'I was hungry, ____ I made a sandwich. (result)', answer: 'so' },
      { question: '____ it was raining, we played outside. (contrast)', answer: 'Although / Though / Even though' },
      { question: 'You can have tea ____ coffee. Which one do you want? (choice)', answer: 'or' },
    ],
  },

  // ============ WORD FORMATION ============
  {
    id: 21,
    title: 'Prefixes & Suffixes',
    section: 'Word Formation',
    icon: '🔤',
    overview:
      'Prefixes go at the beginning of a word to change its meaning. Suffixes go at the end and often change the word type (verb to noun, adjective to adverb, etc.).',
    keyConcepts: [
      { label: 'un- / dis- / im-', value: 'not / opposite', example: 'happy → unhappy, agree → disagree' },
      { label: 're-', value: 'again', example: 'write → rewrite' },
      { label: 'mis-', value: 'wrongly / badly', example: 'understand → misunderstand' },
      { label: '-tion / -ment', value: 'noun suffix', example: 'educate → education, develop → development' },
      { label: '-ful / -less', value: 'adjective (full of / without)', example: 'beauty → beautiful, hope → hopeless' },
      { label: '-ly', value: 'adverb suffix', example: 'quick → quickly' },
      { label: '-er / -or', value: 'person noun', example: 'teach → teacher, act → actor' },
    ],
    visualTip: 'Prefix: add something at the START. Suffix: add something at the END. Prefixes change meaning; suffixes often change word type.',
    patterns: [
      { structure: 'prefix + root word (same word type, different meaning)', examples: ["It's impossible to finish in one day. (im + possible = not possible)", 'Could you rewrite this paragraph? (re + write = write again)'] },
      { structure: 'root word + suffix (different word type)', examples: ['She sings beautifully. (beautiful + ly becomes adverb)', 'His happiness makes everyone smile. (happy + ness becomes noun)'] },
    ],
    mistakes: [
      { wrong: '❌ He ran fastly to the bus stop.', right: '✅ He ran fast to the bus stop.', explanation: 'Not all adverbs end in -ly. Fast, hard, early, late, and well are adverbs that do not follow the -ly rule.' },
      { wrong: '❌ The information was uncorrect.', right: '✅ The information was incorrect.', explanation: 'Some words use in-, im-, il-, or ir- instead of un-. You need to learn which prefix each word uses.' },
    ],
    quiz: [
      { question: "I don't agree with you. I completely ____ (agree + opposite prefix).", answer: 'disagree' },
      { question: 'She is a very good ____ (sing + person suffix).', answer: 'singer' },
      { question: 'He drove very ____ (careful + adverb suffix) in the rain.', answer: 'carefully' },
    ],
  },
];

/**
 * Get unique section names from all chapters.
 * Used to group chapters in the list view.
 */
export const getSections = () => {
  const sections = [...new Set(CHAPTERS.map((c) => c.section))];
  return sections;
};

/**
 * Get all chapters belonging to a specific section.
 */
export const getChaptersBySection = (sectionName) => {
  return CHAPTERS.filter((c) => c.section === sectionName);
};

/**
 * Find a single chapter by its ID.
 * Returns undefined if not found.
 */
export const getChapterById = (id) => {
  return CHAPTERS.find((c) => c.id === id);
};
