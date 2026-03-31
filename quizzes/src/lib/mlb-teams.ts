const TEAM_DATA: { name: string; accept: string[] }[] = [
  // AL East
  { name: 'Baltimore Orioles',    accept: ['baltimore orioles', 'orioles', 'baltimore', 'o\'s', 'os'] },
  { name: 'Boston Red Sox',       accept: ['boston red sox', 'red sox', 'boston', 'sox', 'redsox'] },
  { name: 'New York Yankees',     accept: ['new york yankees', 'yankees', 'new york', 'ny yankees', 'yanks'] },
  { name: 'Tampa Bay Rays',       accept: ['tampa bay rays', 'rays', 'tampa bay', 'tampa'] },
  { name: 'Toronto Blue Jays',    accept: ['toronto blue jays', 'blue jays', 'toronto', 'jays'] },
  // AL Central
  { name: 'Chicago White Sox',    accept: ['chicago white sox', 'white sox', 'whitesox', 'chisox', 'pale hose'] },
  { name: 'Cleveland Guardians',  accept: ['cleveland guardians', 'guardians', 'cleveland'] },
  { name: 'Detroit Tigers',       accept: ['detroit tigers', 'tigers', 'detroit'] },
  { name: 'Kansas City Royals',   accept: ['kansas city royals', 'royals', 'kansas city', 'kc royals', 'kc'] },
  { name: 'Minnesota Twins',      accept: ['minnesota twins', 'twins', 'minnesota'] },
  // AL West
  { name: 'Houston Astros',       accept: ['houston astros', 'astros', 'houston'] },
  { name: 'Los Angeles Angels',   accept: ['los angeles angels', 'angels', 'la angels', 'anaheim angels', 'california angels', 'los angeles angels of anaheim'] },
  { name: 'Athletics',            accept: ['athletics', "a's", 'as', 'oakland athletics', 'oakland', 'las vegas athletics', 'sacramento athletics'] },
  { name: 'Seattle Mariners',     accept: ['seattle mariners', 'mariners', 'seattle', 'm\'s', 'ms'] },
  { name: 'Texas Rangers',        accept: ['texas rangers', 'rangers', 'texas'] },
  // NL East
  { name: 'Atlanta Braves',       accept: ['atlanta braves', 'braves', 'atlanta'] },
  { name: 'Miami Marlins',        accept: ['miami marlins', 'marlins', 'miami', 'florida marlins'] },
  { name: 'New York Mets',        accept: ['new york mets', 'mets', 'ny mets'] },
  { name: 'Philadelphia Phillies', accept: ['philadelphia phillies', 'phillies', 'philadelphia', 'philly', 'phils'] },
  { name: 'Washington Nationals', accept: ['washington nationals', 'nationals', 'washington', 'nats'] },
  // NL Central
  { name: 'Chicago Cubs',         accept: ['chicago cubs', 'cubs', 'chicago', 'cubbies'] },
  { name: 'Cincinnati Reds',      accept: ['cincinnati reds', 'reds', 'cincinnati', 'cincy'] },
  { name: 'Milwaukee Brewers',    accept: ['milwaukee brewers', 'brewers', 'milwaukee', 'brew crew'] },
  { name: 'Pittsburgh Pirates',   accept: ['pittsburgh pirates', 'pirates', 'pittsburgh', 'bucs', 'buccos'] },
  { name: 'St. Louis Cardinals',  accept: ['st. louis cardinals', 'st louis cardinals', 'cardinals', 'st. louis', 'st louis', 'cards'] },
  // NL West
  { name: 'Arizona Diamondbacks', accept: ['arizona diamondbacks', 'diamondbacks', 'arizona', 'd-backs', 'd backs', 'dbacks'] },
  { name: 'Colorado Rockies',     accept: ['colorado rockies', 'rockies', 'colorado'] },
  { name: 'Los Angeles Dodgers',  accept: ['los angeles dodgers', 'dodgers', 'la dodgers', 'los angeles'] },
  { name: 'San Diego Padres',     accept: ['san diego padres', 'padres', 'san diego', 'friars'] },
  { name: 'San Francisco Giants', accept: ['san francisco giants', 'giants', 'san francisco', 'sf giants', 'sf'] },
];

const TEAM_MAP = new Map<string, string>();
TEAM_DATA.forEach(t => t.accept.forEach(a => TEAM_MAP.set(a, t.name)));

export const MLB_TEAMS = TEAM_DATA.map(t => t.name);

export const MLB_SECTIONS: { header: string; teams: string[] }[] = [
  { header: 'AL East',    teams: ['Baltimore Orioles', 'Boston Red Sox', 'New York Yankees', 'Tampa Bay Rays', 'Toronto Blue Jays'] },
  { header: 'AL Central', teams: ['Chicago White Sox', 'Cleveland Guardians', 'Detroit Tigers', 'Kansas City Royals', 'Minnesota Twins'] },
  { header: 'AL West',    teams: ['Houston Astros', 'Los Angeles Angels', 'Athletics', 'Seattle Mariners', 'Texas Rangers'] },
  { header: 'NL East',    teams: ['Atlanta Braves', 'Miami Marlins', 'New York Mets', 'Philadelphia Phillies', 'Washington Nationals'] },
  { header: 'NL Central', teams: ['Chicago Cubs', 'Cincinnati Reds', 'Milwaukee Brewers', 'Pittsburgh Pirates', 'St. Louis Cardinals'] },
  { header: 'NL West',    teams: ['Arizona Diamondbacks', 'Colorado Rockies', 'Los Angeles Dodgers', 'San Diego Padres', 'San Francisco Giants'] },
];

export function matchMLBTeam(guess: string): string | null {
  return TEAM_MAP.get(guess.trim().toLowerCase()) ?? null;
}
