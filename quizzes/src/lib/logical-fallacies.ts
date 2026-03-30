const FALLACY_DATA: { name: string; accept: string[] }[] = [
  { name: 'Ad Hominem',              accept: ['ad hominem', 'ad hom'] },
  { name: 'Anecdotal Evidence',      accept: ['anecdotal evidence', 'anecdotal', 'anecdote'] },
  { name: 'Appeal to Authority',     accept: ['appeal to authority', 'argument from authority', 'argumentum ad verecundiam'] },
  { name: 'Appeal to Emotion',       accept: ['appeal to emotion', 'emotional appeal', 'argumentum ad passiones'] },
  { name: 'Appeal to Nature',        accept: ['appeal to nature', 'naturalistic fallacy'] },
  { name: 'Appeal to Tradition',     accept: ['appeal to tradition', 'argumentum ad antiquitatem', 'traditional wisdom'] },
  { name: 'Bandwagon',               accept: ['bandwagon', 'appeal to popularity', 'ad populum', 'argumentum ad populum'] },
  { name: 'Begging the Question',    accept: ['begging the question', 'circular reasoning', 'circular argument', 'petitio principii'] },
  { name: 'Black-or-White',          accept: ['black-or-white', 'black or white', 'false dichotomy', 'false dilemma', 'either/or fallacy', 'either or fallacy'] },
  { name: 'Burden of Proof',         accept: ['burden of proof', 'shifting the burden', 'onus probandi'] },
  { name: 'Composition/Division',    accept: ['composition/division', 'composition division', 'fallacy of composition', 'fallacy of division', 'composition fallacy'] },
  { name: 'Equivocation',            accept: ['equivocation', 'equivocating'] },
  { name: 'False Equivalence',       accept: ['false equivalence', 'false equivalency'] },
  { name: 'Gambler\'s Fallacy',       accept: ["gambler's fallacy", 'gamblers fallacy', 'monte carlo fallacy'] },
  { name: 'Genetic Fallacy',         accept: ['genetic fallacy', 'genetic'] },
  { name: 'Hasty Generalization',    accept: ['hasty generalization', 'hasty generalisation', 'overgeneralization', 'over-generalization'] },
  { name: 'Loaded Question',         accept: ['loaded question', 'complex question', 'trick question'] },
  { name: 'No True Scotsman',        accept: ['no true scotsman', 'no true scotsman fallacy', 'no-true-scotsman'] },
  { name: 'Post Hoc',                accept: ['post hoc', 'post hoc ergo propter hoc', 'correlation causation', 'correlation implies causation'] },
  { name: 'Red Herring',             accept: ['red herring', 'ignoratio elenchi'] },
  { name: 'Slippery Slope',          accept: ['slippery slope', 'slippery slope fallacy'] },
  { name: 'Straw Man',               accept: ['straw man', 'strawman', 'straw person'] },
  { name: 'Texas Sharpshooter',      accept: ['texas sharpshooter', 'texas sharpshooter fallacy', 'cherry picking', 'clustering illusion'] },
  { name: 'Tu Quoque',               accept: ['tu quoque', 'two wrongs make a right', 'two wrongs', 'whataboutism', 'appeal to hypocrisy'] },
  { name: 'Slothful Induction',      accept: ['slothful induction', 'appeal to coincidence'] },
  { name: 'Middle Ground',           accept: ['middle ground', 'false compromise', 'argument to moderation', 'argumentum ad temperantiam'] },
];

const FALLACY_MAP = new Map<string, string>();
FALLACY_DATA.forEach(f => f.accept.forEach(a => FALLACY_MAP.set(a, f.name)));

export const FALLACIES = FALLACY_DATA.map(f => f.name);

export function matchFallacy(guess: string): string | null {
  return FALLACY_MAP.get(guess.trim().toLowerCase()) ?? null;
}
