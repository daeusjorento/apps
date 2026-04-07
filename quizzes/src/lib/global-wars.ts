// Global wars ordered by estimated casualty count (high to low)
// Estimates are approximate and vary widely by source
const WAR_DATA: { name: string; casualties: string; accept: string[] }[] = [
  { name: 'World War II',            casualties: '~70M', accept: ['world war ii', 'world war 2', 'wwii', 'ww2', 'second world war'] },
  { name: 'Mongol Conquests',        casualties: '~40M', accept: ['mongol conquests', 'mongol invasions', 'mongol empire', 'mongols', 'mongol conquest'] },
  { name: 'Taiping Rebellion',       casualties: '~25M', accept: ['taiping rebellion', 'taiping'] },
  { name: 'World War I',             casualties: '~20M', accept: ['world war i', 'world war 1', 'wwi', 'ww1', 'first world war', 'great war', 'the great war'] },
  { name: 'Second Sino-Japanese War', casualties: '~14M', accept: ['second sino-japanese war', 'sino-japanese war', 'second sino japanese war'] },
  { name: 'Russian Civil War',       casualties: '~9M',  accept: ['russian civil war'] },
  { name: 'Thirty Years\' War',      casualties: '~8M',  accept: ["thirty years' war", 'thirty years war', '30 years war'] },
  { name: 'Chinese Civil War',       casualties: '~7M',  accept: ['chinese civil war'] },
  { name: 'Napoleonic Wars',         casualties: '~5M',  accept: ['napoleonic wars', 'napoleonic war', 'napoleonic'] },
  { name: 'Second Congo War',        casualties: '~5M',  accept: ['second congo war', 'congo war'] },
  { name: 'Vietnam War',             casualties: '~3.5M', accept: ['vietnam war', 'vietnam'] },
  { name: 'Korean War',              casualties: '~3M',  accept: ['korean war'] },
  { name: 'Mexican Revolution',      casualties: '~2M',  accept: ['mexican revolution'] },
  { name: 'Soviet-Afghan War',       casualties: '~2M',  accept: ['soviet-afghan war', 'soviet afghan war', 'afghan war', 'soviet invasion of afghanistan'] },
  { name: 'American Civil War',      casualties: '~620K', accept: ['american civil war', 'civil war', 'war between the states'] },
];

const WAR_MAP = new Map<string, string>();
WAR_DATA.forEach(w => w.accept.forEach(a => WAR_MAP.set(a, w.name)));

export const GLOBAL_WARS: { name: string; casualties: string }[] = WAR_DATA.map(w => ({ name: w.name, casualties: w.casualties }));

export function matchGlobalWar(guess: string): string | null {
  return WAR_MAP.get(guess.trim().toLowerCase()) ?? null;
}
