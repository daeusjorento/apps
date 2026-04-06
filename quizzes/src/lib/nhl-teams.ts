const NHL_TEAM_DATA: { name: string; accept: string[] }[] = [
  // Atlantic
  { name: 'Boston Bruins',          accept: ['boston bruins', 'bruins', 'boston'] },
  { name: 'Buffalo Sabres',         accept: ['buffalo sabres', 'sabres', 'buffalo'] },
  { name: 'Detroit Red Wings',      accept: ['detroit red wings', 'red wings', 'detroit'] },
  { name: 'Florida Panthers',       accept: ['florida panthers', 'florida'] },
  { name: 'Montreal Canadiens',     accept: ['montreal canadiens', 'canadiens', 'montreal', 'habs'] },
  { name: 'Ottawa Senators',        accept: ['ottawa senators', 'senators', 'ottawa', 'sens'] },
  { name: 'Tampa Bay Lightning',    accept: ['tampa bay lightning', 'lightning', 'tampa bay', 'tampa', 'bolts'] },
  { name: 'Toronto Maple Leafs',    accept: ['toronto maple leafs', 'maple leafs', 'toronto', 'leafs'] },
  // Metropolitan
  { name: 'Carolina Hurricanes',    accept: ['carolina hurricanes', 'hurricanes', 'carolina', 'canes'] },
  { name: 'Columbus Blue Jackets',  accept: ['columbus blue jackets', 'blue jackets', 'columbus', 'jackets', 'cbj'] },
  { name: 'New Jersey Devils',      accept: ['new jersey devils', 'devils', 'new jersey', 'nj devils'] },
  { name: 'New York Islanders',     accept: ['new york islanders', 'islanders', 'ny islanders', 'isles'] },
  { name: 'New York Rangers',       accept: ['new york rangers', 'rangers', 'ny rangers'] },
  { name: 'Philadelphia Flyers',    accept: ['philadelphia flyers', 'flyers', 'philadelphia'] },
  { name: 'Pittsburgh Penguins',    accept: ['pittsburgh penguins', 'penguins', 'pittsburgh', 'pens'] },
  { name: 'Washington Capitals',    accept: ['washington capitals', 'capitals', 'washington', 'caps'] },
  // Central
  { name: 'Chicago Blackhawks',     accept: ['chicago blackhawks', 'blackhawks', 'chicago', 'hawks'] },
  { name: 'Colorado Avalanche',     accept: ['colorado avalanche', 'avalanche', 'colorado', 'avs'] },
  { name: 'Dallas Stars',           accept: ['dallas stars', 'stars', 'dallas'] },
  { name: 'Minnesota Wild',         accept: ['minnesota wild', 'wild', 'minnesota'] },
  { name: 'Nashville Predators',    accept: ['nashville predators', 'predators', 'nashville', 'preds'] },
  { name: 'St. Louis Blues',        accept: ['st. louis blues', 'st louis blues', 'blues', 'st. louis', 'st louis'] },
  { name: 'Utah Hockey Club',       accept: ['utah hockey club', 'utah hc', 'utah'] },
  { name: 'Winnipeg Jets',          accept: ['winnipeg jets', 'jets', 'winnipeg'] },
  // Pacific
  { name: 'Anaheim Ducks',          accept: ['anaheim ducks', 'ducks', 'anaheim'] },
  { name: 'Calgary Flames',         accept: ['calgary flames', 'flames', 'calgary'] },
  { name: 'Edmonton Oilers',        accept: ['edmonton oilers', 'oilers', 'edmonton'] },
  { name: 'Los Angeles Kings',      accept: ['los angeles kings', 'kings', 'la kings', 'los angeles'] },
  { name: 'San Jose Sharks',        accept: ['san jose sharks', 'sharks', 'san jose'] },
  { name: 'Seattle Kraken',         accept: ['seattle kraken', 'kraken', 'seattle'] },
  { name: 'Vancouver Canucks',      accept: ['vancouver canucks', 'canucks', 'vancouver'] },
  { name: 'Vegas Golden Knights',   accept: ['vegas golden knights', 'golden knights', 'vegas', 'vgk'] },
];

const NHL_MAP = new Map<string, string>();
NHL_TEAM_DATA.forEach(t => t.accept.forEach(a => NHL_MAP.set(a, t.name)));

export const NHL_TEAMS = NHL_TEAM_DATA.map(t => t.name);

export const NHL_SECTIONS: { header: string; teams: string[] }[] = [
  { header: 'Atlantic',      teams: ['Boston Bruins', 'Buffalo Sabres', 'Detroit Red Wings', 'Florida Panthers', 'Montreal Canadiens', 'Ottawa Senators', 'Tampa Bay Lightning', 'Toronto Maple Leafs'] },
  { header: 'Metropolitan',  teams: ['Carolina Hurricanes', 'Columbus Blue Jackets', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'Pittsburgh Penguins', 'Washington Capitals'] },
  { header: 'Central',       teams: ['Chicago Blackhawks', 'Colorado Avalanche', 'Dallas Stars', 'Minnesota Wild', 'Nashville Predators', 'St. Louis Blues', 'Utah Hockey Club', 'Winnipeg Jets'] },
  { header: 'Pacific',       teams: ['Anaheim Ducks', 'Calgary Flames', 'Edmonton Oilers', 'Los Angeles Kings', 'San Jose Sharks', 'Seattle Kraken', 'Vancouver Canucks', 'Vegas Golden Knights'] },
];

export function matchNHLTeam(guess: string): string | null {
  return NHL_MAP.get(guess.trim().toLowerCase()) ?? null;
}
