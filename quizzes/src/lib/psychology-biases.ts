const BIAS_DATA: { name: string; accept: string[] }[] = [
  { name: 'Anchoring Bias',              accept: ['anchoring bias', 'anchoring', 'anchoring effect'] },
  { name: 'Availability Heuristic',      accept: ['availability heuristic', 'availability bias'] },
  { name: 'Bandwagon Effect',            accept: ['bandwagon effect', 'bandwagon', 'herd mentality', 'groupthink'] },
  { name: 'Barnum Effect',               accept: ['barnum effect', 'forer effect', 'barnum', 'forer'] },
  { name: 'Bystander Effect',            accept: ['bystander effect', 'bystander', 'diffusion of responsibility'] },
  { name: 'Cognitive Dissonance',        accept: ['cognitive dissonance'] },
  { name: 'Confirmation Bias',           accept: ['confirmation bias', 'confirmation'] },
  { name: 'Dunning-Kruger Effect',       accept: ['dunning-kruger effect', 'dunning kruger effect', 'dunning-kruger', 'dunning kruger'] },
  { name: 'False Consensus Effect',      accept: ['false consensus effect', 'false consensus'] },
  { name: 'Framing Effect',              accept: ['framing effect', 'framing bias', 'framing'] },
  { name: 'Fundamental Attribution Error', accept: ['fundamental attribution error', 'attribution error', 'fundamental attribution', 'correspondence bias'] },
  { name: 'Gambler\'s Fallacy',          accept: ["gambler's fallacy", 'gamblers fallacy', 'monte carlo fallacy'] },
  { name: 'Halo Effect',                 accept: ['halo effect', 'halo'] },
  { name: 'Hindsight Bias',              accept: ['hindsight bias', 'hindsight', 'knew-it-all-along'] },
  { name: 'Illusory Correlation',        accept: ['illusory correlation'] },
  { name: 'In-Group Bias',               accept: ['in-group bias', 'ingroup bias', 'in group bias', 'in-group favoritism'] },
  { name: 'Negativity Bias',             accept: ['negativity bias', 'negativity effect'] },
  { name: 'Optimism Bias',               accept: ['optimism bias', 'optimistic bias'] },
  { name: 'Outcome Bias',                accept: ['outcome bias'] },
  { name: 'Overconfidence Effect',       accept: ['overconfidence effect', 'overconfidence bias', 'overconfidence'] },
  { name: 'Planning Fallacy',            accept: ['planning fallacy'] },
  { name: 'Recency Bias',               accept: ['recency bias', 'recency effect'] },
  { name: 'Self-Serving Bias',           accept: ['self-serving bias', 'self serving bias', 'self-serving', 'self serving'] },
  { name: 'Spotlight Effect',            accept: ['spotlight effect', 'spotlight bias'] },
  { name: 'Status Quo Bias',             accept: ['status quo bias', 'status quo'] },
  { name: 'Sunk Cost Fallacy',           accept: ['sunk cost fallacy', 'sunk cost'] },
  { name: 'Survivorship Bias',           accept: ['survivorship bias', 'survival bias', 'survivorship'] },
];

const BIAS_MAP = new Map<string, string>();
BIAS_DATA.forEach(b => b.accept.forEach(a => BIAS_MAP.set(a, b.name)));

export const BIASES = BIAS_DATA.map(b => b.name);

export function matchBias(guess: string): string | null {
  return BIAS_MAP.get(guess.trim().toLowerCase()) ?? null;
}
