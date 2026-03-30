const NBA_TEAM_DATA: { name: string; accept: string[] }[] = [
  { name: 'Atlanta Hawks',            accept: ['atlanta hawks', 'hawks', 'atlanta'] },
  { name: 'Boston Celtics',           accept: ['boston celtics', 'celtics', 'boston'] },
  { name: 'Brooklyn Nets',            accept: ['brooklyn nets', 'nets', 'brooklyn'] },
  { name: 'Charlotte Hornets',        accept: ['charlotte hornets', 'hornets', 'charlotte'] },
  { name: 'Chicago Bulls',            accept: ['chicago bulls', 'bulls', 'chicago'] },
  { name: 'Cleveland Cavaliers',      accept: ['cleveland cavaliers', 'cavaliers', 'cleveland', 'cavs'] },
  { name: 'Dallas Mavericks',         accept: ['dallas mavericks', 'mavericks', 'dallas', 'mavs'] },
  { name: 'Denver Nuggets',           accept: ['denver nuggets', 'nuggets', 'denver'] },
  { name: 'Detroit Pistons',          accept: ['detroit pistons', 'pistons', 'detroit'] },
  { name: 'Golden State Warriors',    accept: ['golden state warriors', 'warriors', 'golden state', 'gsw'] },
  { name: 'Houston Rockets',          accept: ['houston rockets', 'rockets', 'houston'] },
  { name: 'Indiana Pacers',           accept: ['indiana pacers', 'pacers', 'indiana'] },
  { name: 'Los Angeles Clippers',     accept: ['los angeles clippers', 'clippers', 'la clippers'] },
  { name: 'Los Angeles Lakers',       accept: ['los angeles lakers', 'lakers', 'la lakers', 'la'] },
  { name: 'Memphis Grizzlies',        accept: ['memphis grizzlies', 'grizzlies', 'memphis'] },
  { name: 'Miami Heat',               accept: ['miami heat', 'heat', 'miami'] },
  { name: 'Milwaukee Bucks',          accept: ['milwaukee bucks', 'bucks', 'milwaukee'] },
  { name: 'Minnesota Timberwolves',   accept: ['minnesota timberwolves', 'timberwolves', 'minnesota', 'twolves', 't-wolves'] },
  { name: 'New Orleans Pelicans',     accept: ['new orleans pelicans', 'pelicans', 'new orleans'] },
  { name: 'New York Knicks',          accept: ['new york knicks', 'knicks', 'new york', 'ny knicks'] },
  { name: 'Oklahoma City Thunder',    accept: ['oklahoma city thunder', 'thunder', 'oklahoma city', 'okc', 'okc thunder'] },
  { name: 'Orlando Magic',            accept: ['orlando magic', 'magic', 'orlando'] },
  { name: 'Philadelphia 76ers',       accept: ['philadelphia 76ers', '76ers', 'philadelphia', 'sixers', 'philly', 'phila 76ers'] },
  { name: 'Phoenix Suns',             accept: ['phoenix suns', 'suns', 'phoenix'] },
  { name: 'Portland Trail Blazers',   accept: ['portland trail blazers', 'trail blazers', 'portland', 'blazers'] },
  { name: 'Sacramento Kings',         accept: ['sacramento kings', 'kings', 'sacramento'] },
  { name: 'San Antonio Spurs',        accept: ['san antonio spurs', 'spurs', 'san antonio'] },
  { name: 'Toronto Raptors',          accept: ['toronto raptors', 'raptors', 'toronto'] },
  { name: 'Utah Jazz',                accept: ['utah jazz', 'jazz', 'utah'] },
  { name: 'Washington Wizards',       accept: ['washington wizards', 'wizards', 'washington'] },
];

const NBA_MAP = new Map<string, string>();
NBA_TEAM_DATA.forEach(t => t.accept.forEach(a => NBA_MAP.set(a, t.name)));

export const NBA_TEAMS = NBA_TEAM_DATA.map(t => t.name);

export const NBA_SECTIONS: { header: string; teams: string[] }[] = [
  { header: 'Atlantic',  teams: ['Boston Celtics', 'Brooklyn Nets', 'New York Knicks', 'Philadelphia 76ers', 'Toronto Raptors'] },
  { header: 'Central',   teams: ['Chicago Bulls', 'Cleveland Cavaliers', 'Detroit Pistons', 'Indiana Pacers', 'Milwaukee Bucks'] },
  { header: 'Southeast', teams: ['Atlanta Hawks', 'Charlotte Hornets', 'Miami Heat', 'Orlando Magic', 'Washington Wizards'] },
  { header: 'Northwest', teams: ['Denver Nuggets', 'Minnesota Timberwolves', 'Oklahoma City Thunder', 'Portland Trail Blazers', 'Utah Jazz'] },
  { header: 'Pacific',   teams: ['Golden State Warriors', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Phoenix Suns', 'Sacramento Kings'] },
  { header: 'Southwest', teams: ['Dallas Mavericks', 'Houston Rockets', 'Memphis Grizzlies', 'New Orleans Pelicans', 'San Antonio Spurs'] },
];

export function matchNBATeam(guess: string): string | null {
  return NBA_MAP.get(guess.trim().toLowerCase()) ?? null;
}
