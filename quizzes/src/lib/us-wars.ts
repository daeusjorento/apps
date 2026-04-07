// US wars ordered by start year — years shown as hint column
const WAR_DATA: { name: string; years: string; accept: string[] }[] = [
  { name: 'American Revolutionary War', years: '1775–1783', accept: ['american revolutionary war', 'revolutionary war', 'american revolution', 'war of independence', 'american war of independence'] },
  { name: 'War of 1812',                years: '1812–1815', accept: ['war of 1812'] },
  { name: 'Mexican-American War',       years: '1846–1848', accept: ['mexican-american war', 'mexican american war', 'mexican war'] },
  { name: 'Civil War',                  years: '1861–1865', accept: ['civil war', 'american civil war', 'war between the states'] },
  { name: 'Spanish-American War',       years: '1898',      accept: ['spanish-american war', 'spanish american war'] },
  { name: 'World War I',                years: '1917–1918', accept: ['world war i', 'world war 1', 'wwi', 'ww1', 'the great war', 'first world war', 'great war'] },
  { name: 'World War II',               years: '1941–1945', accept: ['world war ii', 'world war 2', 'wwii', 'ww2', 'second world war'] },
  { name: 'Korean War',                 years: '1950–1953', accept: ['korean war', 'forgotten war'] },
  { name: 'Vietnam War',                years: '1964–1973', accept: ['vietnam war', 'vietnam'] },
  { name: 'Gulf War',                   years: '1990–1991', accept: ['gulf war', 'persian gulf war', 'operation desert storm', 'desert storm'] },
  { name: 'War in Afghanistan',         years: '2001–2021', accept: ['war in afghanistan', 'afghanistan war', 'afghan war', 'afghanistan', 'operation enduring freedom'] },
  { name: 'Iraq War',                   years: '2003–2011', accept: ['iraq war', 'war in iraq', 'operation iraqi freedom', 'iraq', 'second gulf war'] },
];

const WAR_MAP = new Map<string, string>();
WAR_DATA.forEach(w => w.accept.forEach(a => WAR_MAP.set(a, w.name)));

export const US_WARS: { name: string; years: string }[] = WAR_DATA.map(w => ({ name: w.name, years: w.years }));

export function matchUSWar(guess: string): string | null {
  return WAR_MAP.get(guess.trim().toLowerCase()) ?? null;
}
