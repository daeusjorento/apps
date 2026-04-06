// 2024-25 Premier League season
const TEAM_DATA: { name: string; accept: string[] }[] = [
  { name: 'Arsenal',                    accept: ['arsenal', 'gunners'] },
  { name: 'Aston Villa',                accept: ['aston villa', 'villa'] },
  { name: 'Bournemouth',                accept: ['bournemouth', 'afc bournemouth', 'cherries'] },
  { name: 'Brentford',                  accept: ['brentford', 'bees'] },
  { name: 'Brighton & Hove Albion',     accept: ['brighton & hove albion', 'brighton and hove albion', 'brighton', 'seagulls', 'bha'] },
  { name: 'Chelsea',                    accept: ['chelsea', 'the blues'] },
  { name: 'Crystal Palace',             accept: ['crystal palace', 'palace', 'eagles'] },
  { name: 'Everton',                    accept: ['everton', 'toffees'] },
  { name: 'Fulham',                     accept: ['fulham', 'cottagers'] },
  { name: 'Ipswich Town',               accept: ['ipswich town', 'ipswich', 'tractor boys'] },
  { name: 'Leicester City',             accept: ['leicester city', 'leicester', 'foxes'] },
  { name: 'Liverpool',                  accept: ['liverpool', 'reds', 'the reds'] },
  { name: 'Manchester City',            accept: ['manchester city', 'man city', 'man. city', 'city', 'citizens'] },
  { name: 'Manchester United',          accept: ['manchester united', 'man united', 'man utd', 'united', 'red devils'] },
  { name: 'Newcastle United',           accept: ['newcastle united', 'newcastle', 'magpies', 'toon'] },
  { name: 'Nottingham Forest',          accept: ['nottingham forest', 'nottingham', 'forest'] },
  { name: 'Southampton',                accept: ['southampton', 'saints'] },
  { name: 'Tottenham Hotspur',          accept: ['tottenham hotspur', 'tottenham', 'spurs'] },
  { name: 'West Ham United',            accept: ['west ham united', 'west ham', 'hammers', 'irons'] },
  { name: 'Wolverhampton Wanderers',    accept: ['wolverhampton wanderers', 'wolverhampton', 'wolves'] },
];

const TEAM_MAP = new Map<string, string>();
TEAM_DATA.forEach(t => t.accept.forEach(a => TEAM_MAP.set(a, t.name)));

export const PREMIER_LEAGUE_TEAMS = TEAM_DATA.map(t => t.name);

export function matchPLTeam(guess: string): string | null {
  return TEAM_MAP.get(guess.trim().toLowerCase()) ?? null;
}
