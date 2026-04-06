const COUNTRY_DATA: { name: string; accept: string[] }[] = [
  { name: 'Argentina', accept: ['argentina'] },
  { name: 'Bolivia',   accept: ['bolivia'] },
  { name: 'Brazil',    accept: ['brazil', 'brasil'] },
  { name: 'Chile',     accept: ['chile'] },
  { name: 'Colombia',  accept: ['colombia'] },
  { name: 'Ecuador',   accept: ['ecuador'] },
  { name: 'Guyana',    accept: ['guyana'] },
  { name: 'Paraguay',  accept: ['paraguay'] },
  { name: 'Peru',      accept: ['peru'] },
  { name: 'Suriname',  accept: ['suriname', 'surinam'] },
  { name: 'Uruguay',   accept: ['uruguay'] },
  { name: 'Venezuela', accept: ['venezuela'] },
];

const COUNTRY_MAP = new Map<string, string>();
COUNTRY_DATA.forEach(c => c.accept.forEach(a => COUNTRY_MAP.set(a, c.name)));

export const COUNTRIES_SOUTH_AMERICA = COUNTRY_DATA.map(c => c.name);

export function matchCountry(guess: string): string | null {
  return COUNTRY_MAP.get(guess.trim().toLowerCase()) ?? null;
}
