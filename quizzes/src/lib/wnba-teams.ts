const WNBA_TEAM_DATA: { name: string; accept: string[] }[] = [
  // Eastern Conference
  { name: 'Atlanta Dream',           accept: ['atlanta dream', 'dream', 'atlanta'] },
  { name: 'Chicago Sky',             accept: ['chicago sky', 'sky', 'chicago'] },
  { name: 'Connecticut Sun',         accept: ['connecticut sun', 'sun', 'connecticut'] },
  { name: 'Indiana Fever',           accept: ['indiana fever', 'fever', 'indiana'] },
  { name: 'New York Liberty',        accept: ['new york liberty', 'liberty', 'new york', 'ny liberty'] },
  { name: 'Washington Mystics',      accept: ['washington mystics', 'mystics', 'washington'] },
  // Western Conference
  { name: 'Dallas Wings',            accept: ['dallas wings', 'wings', 'dallas'] },
  { name: 'Golden State Valkyries',  accept: ['golden state valkyries', 'valkyries', 'golden state', 'gsv'] },
  { name: 'Las Vegas Aces',          accept: ['las vegas aces', 'aces', 'las vegas', 'lv aces'] },
  { name: 'Los Angeles Sparks',      accept: ['los angeles sparks', 'sparks', 'la sparks', 'los angeles'] },
  { name: 'Minnesota Lynx',          accept: ['minnesota lynx', 'lynx', 'minnesota'] },
  { name: 'Phoenix Mercury',         accept: ['phoenix mercury', 'mercury', 'phoenix'] },
  { name: 'Seattle Storm',           accept: ['seattle storm', 'storm', 'seattle'] },
];

const WNBA_MAP = new Map<string, string>();
WNBA_TEAM_DATA.forEach(t => t.accept.forEach(a => WNBA_MAP.set(a, t.name)));

export const WNBA_TEAMS = WNBA_TEAM_DATA.map(t => t.name);

export const WNBA_SECTIONS: { header: string; teams: string[] }[] = [
  { header: 'Eastern Conference', teams: ['Atlanta Dream', 'Chicago Sky', 'Connecticut Sun', 'Indiana Fever', 'New York Liberty', 'Washington Mystics'] },
  { header: 'Western Conference', teams: ['Dallas Wings', 'Golden State Valkyries', 'Las Vegas Aces', 'Los Angeles Sparks', 'Minnesota Lynx', 'Phoenix Mercury', 'Seattle Storm'] },
];

export function matchWNBATeam(guess: string): string | null {
  return WNBA_MAP.get(guess.trim().toLowerCase()) ?? null;
}
