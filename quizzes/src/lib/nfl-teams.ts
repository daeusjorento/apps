const NFL_TEAM_DATA: { name: string; accept: string[] }[] = [
  { name: 'Arizona Cardinals',      accept: ['arizona cardinals', 'cardinals', 'arizona', 'cards'] },
  { name: 'Atlanta Falcons',        accept: ['atlanta falcons', 'falcons', 'atlanta'] },
  { name: 'Baltimore Ravens',       accept: ['baltimore ravens', 'ravens', 'baltimore'] },
  { name: 'Buffalo Bills',          accept: ['buffalo bills', 'bills', 'buffalo'] },
  { name: 'Carolina Panthers',      accept: ['carolina panthers', 'panthers', 'carolina'] },
  { name: 'Chicago Bears',          accept: ['chicago bears', 'bears', 'chicago'] },
  { name: 'Cincinnati Bengals',     accept: ['cincinnati bengals', 'bengals', 'cincinnati'] },
  { name: 'Cleveland Browns',       accept: ['cleveland browns', 'browns', 'cleveland'] },
  { name: 'Dallas Cowboys',         accept: ['dallas cowboys', 'cowboys', 'dallas'] },
  { name: 'Denver Broncos',         accept: ['denver broncos', 'broncos', 'denver'] },
  { name: 'Detroit Lions',          accept: ['detroit lions', 'lions', 'detroit'] },
  { name: 'Green Bay Packers',      accept: ['green bay packers', 'packers', 'green bay'] },
  { name: 'Houston Texans',         accept: ['houston texans', 'texans', 'houston'] },
  { name: 'Indianapolis Colts',     accept: ['indianapolis colts', 'colts', 'indianapolis', 'indy colts'] },
  { name: 'Jacksonville Jaguars',   accept: ['jacksonville jaguars', 'jaguars', 'jacksonville', 'jags'] },
  { name: 'Kansas City Chiefs',     accept: ['kansas city chiefs', 'chiefs', 'kansas city', 'kc chiefs'] },
  { name: 'Las Vegas Raiders',      accept: ['las vegas raiders', 'raiders', 'las vegas'] },
  { name: 'Los Angeles Chargers',   accept: ['los angeles chargers', 'chargers', 'la chargers'] },
  { name: 'Los Angeles Rams',       accept: ['los angeles rams', 'rams', 'la rams'] },
  { name: 'Miami Dolphins',         accept: ['miami dolphins', 'dolphins', 'miami'] },
  { name: 'Minnesota Vikings',      accept: ['minnesota vikings', 'vikings', 'minnesota'] },
  { name: 'New England Patriots',   accept: ['new england patriots', 'patriots', 'new england', 'pats'] },
  { name: 'New Orleans Saints',     accept: ['new orleans saints', 'saints', 'new orleans'] },
  { name: 'New York Giants',        accept: ['new york giants', 'giants', 'ny giants'] },
  { name: 'New York Jets',          accept: ['new york jets', 'jets', 'ny jets'] },
  { name: 'Philadelphia Eagles',    accept: ['philadelphia eagles', 'eagles', 'philadelphia', 'philly eagles'] },
  { name: 'Pittsburgh Steelers',    accept: ['pittsburgh steelers', 'steelers', 'pittsburgh'] },
  { name: 'San Francisco 49ers',    accept: ['san francisco 49ers', '49ers', 'san francisco', 'niners', 'forty niners', 'sf 49ers'] },
  { name: 'Seattle Seahawks',       accept: ['seattle seahawks', 'seahawks', 'seattle'] },
  { name: 'Tampa Bay Buccaneers',   accept: ['tampa bay buccaneers', 'buccaneers', 'tampa bay', 'bucs', 'tampa'] },
  { name: 'Tennessee Titans',       accept: ['tennessee titans', 'titans', 'tennessee'] },
  { name: 'Washington Commanders',  accept: ['washington commanders', 'commanders', 'washington'] },
];

const NFL_MAP = new Map<string, string>();
NFL_TEAM_DATA.forEach(t => t.accept.forEach(a => NFL_MAP.set(a, t.name)));

export const NFL_TEAMS = NFL_TEAM_DATA.map(t => t.name);

export const NFL_SECTIONS: { header: string; teams: string[] }[] = [
  { header: 'AFC East',  teams: ['Buffalo Bills', 'Miami Dolphins', 'New England Patriots', 'New York Jets'] },
  { header: 'AFC North', teams: ['Baltimore Ravens', 'Cincinnati Bengals', 'Cleveland Browns', 'Pittsburgh Steelers'] },
  { header: 'AFC South', teams: ['Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Tennessee Titans'] },
  { header: 'AFC West',  teams: ['Denver Broncos', 'Kansas City Chiefs', 'Las Vegas Raiders', 'Los Angeles Chargers'] },
  { header: 'NFC East',  teams: ['Dallas Cowboys', 'New York Giants', 'Philadelphia Eagles', 'Washington Commanders'] },
  { header: 'NFC North', teams: ['Chicago Bears', 'Detroit Lions', 'Green Bay Packers', 'Minnesota Vikings'] },
  { header: 'NFC South', teams: ['Atlanta Falcons', 'Carolina Panthers', 'New Orleans Saints', 'Tampa Bay Buccaneers'] },
  { header: 'NFC West',  teams: ['Arizona Cardinals', 'Los Angeles Rams', 'San Francisco 49ers', 'Seattle Seahawks'] },
];

export function matchNFLTeam(guess: string): string | null {
  return NFL_MAP.get(guess.trim().toLowerCase()) ?? null;
}
