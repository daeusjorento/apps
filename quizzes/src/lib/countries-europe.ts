const COUNTRY_DATA: { name: string; accept: string[] }[] = [
  { name: 'Albania',               accept: ['albania'] },
  { name: 'Andorra',               accept: ['andorra'] },
  { name: 'Austria',               accept: ['austria'] },
  { name: 'Belarus',               accept: ['belarus'] },
  { name: 'Belgium',               accept: ['belgium'] },
  { name: 'Bosnia and Herzegovina', accept: ['bosnia and herzegovina', 'bosnia', 'herzegovina', 'bosnia-herzegovina'] },
  { name: 'Bulgaria',              accept: ['bulgaria'] },
  { name: 'Croatia',               accept: ['croatia'] },
  { name: 'Czech Republic',        accept: ['czech republic', 'czechia', 'czech'] },
  { name: 'Denmark',               accept: ['denmark'] },
  { name: 'Estonia',               accept: ['estonia'] },
  { name: 'Finland',               accept: ['finland'] },
  { name: 'France',                accept: ['france'] },
  { name: 'Germany',               accept: ['germany'] },
  { name: 'Greece',                accept: ['greece'] },
  { name: 'Hungary',               accept: ['hungary'] },
  { name: 'Iceland',               accept: ['iceland'] },
  { name: 'Ireland',               accept: ['ireland', 'republic of ireland'] },
  { name: 'Italy',                 accept: ['italy'] },
  { name: 'Latvia',                accept: ['latvia'] },
  { name: 'Liechtenstein',         accept: ['liechtenstein'] },
  { name: 'Lithuania',             accept: ['lithuania'] },
  { name: 'Luxembourg',            accept: ['luxembourg'] },
  { name: 'Malta',                 accept: ['malta'] },
  { name: 'Moldova',               accept: ['moldova', 'republic of moldova'] },
  { name: 'Monaco',                accept: ['monaco'] },
  { name: 'Montenegro',            accept: ['montenegro'] },
  { name: 'Netherlands',           accept: ['netherlands', 'holland', 'the netherlands'] },
  { name: 'North Macedonia',       accept: ['north macedonia', 'macedonia'] },
  { name: 'Norway',                accept: ['norway'] },
  { name: 'Poland',                accept: ['poland'] },
  { name: 'Portugal',              accept: ['portugal'] },
  { name: 'Romania',               accept: ['romania'] },
  { name: 'Russia',                accept: ['russia', 'russian federation'] },
  { name: 'San Marino',            accept: ['san marino'] },
  { name: 'Serbia',                accept: ['serbia'] },
  { name: 'Slovakia',              accept: ['slovakia'] },
  { name: 'Slovenia',              accept: ['slovenia'] },
  { name: 'Spain',                 accept: ['spain'] },
  { name: 'Sweden',                accept: ['sweden'] },
  { name: 'Switzerland',           accept: ['switzerland'] },
  { name: 'Ukraine',               accept: ['ukraine'] },
  { name: 'United Kingdom',        accept: ['united kingdom', 'uk', 'great britain', 'britain'] },
  { name: 'Vatican City',          accept: ['vatican city', 'vatican', 'holy see'] },
];

const COUNTRY_MAP = new Map<string, string>();
COUNTRY_DATA.forEach(c => c.accept.forEach(a => COUNTRY_MAP.set(a, c.name)));

export const COUNTRIES_EUROPE = COUNTRY_DATA.map(c => c.name);

export function matchCountry(guess: string): string | null {
  return COUNTRY_MAP.get(guess.trim().toLowerCase()) ?? null;
}
