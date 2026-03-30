export interface City {
  name: string;
  state: string;
}

// Top 25 most populous US cities (2020 Census / 2022 estimates)
export const US_CITIES: City[] = [
  { name: 'New York City',  state: 'New York' },
  { name: 'Los Angeles',    state: 'California' },
  { name: 'Chicago',        state: 'Illinois' },
  { name: 'Houston',        state: 'Texas' },
  { name: 'Phoenix',        state: 'Arizona' },
  { name: 'Philadelphia',   state: 'Pennsylvania' },
  { name: 'San Antonio',    state: 'Texas' },
  { name: 'San Diego',      state: 'California' },
  { name: 'Dallas',         state: 'Texas' },
  { name: 'San Jose',       state: 'California' },
  { name: 'Austin',         state: 'Texas' },
  { name: 'Jacksonville',   state: 'Florida' },
  { name: 'Fort Worth',     state: 'Texas' },
  { name: 'Columbus',       state: 'Ohio' },
  { name: 'Charlotte',      state: 'North Carolina' },
  { name: 'Indianapolis',   state: 'Indiana' },
  { name: 'San Francisco',  state: 'California' },
  { name: 'Seattle',        state: 'Washington' },
  { name: 'Denver',         state: 'Colorado' },
  { name: 'Nashville',      state: 'Tennessee' },
  { name: 'Oklahoma City',  state: 'Oklahoma' },
  { name: 'El Paso',        state: 'Texas' },
  { name: 'Washington',     state: 'D.C.' },
  { name: 'Las Vegas',      state: 'Nevada' },
  { name: 'Louisville',     state: 'Kentucky' },
];

const CITY_MAP = new Map<string, string>();
const CITY_ALTS: [string, string][] = [
  ['new york city', 'New York City'],
  ['new york', 'New York City'],
  ['nyc', 'New York City'],
  ['los angeles', 'Los Angeles'],
  ['la', 'Los Angeles'],
  ['chicago', 'Chicago'],
  ['houston', 'Houston'],
  ['phoenix', 'Phoenix'],
  ['philadelphia', 'Philadelphia'],
  ['philly', 'Philadelphia'],
  ['san antonio', 'San Antonio'],
  ['san diego', 'San Diego'],
  ['dallas', 'Dallas'],
  ['san jose', 'San Jose'],
  ['austin', 'Austin'],
  ['jacksonville', 'Jacksonville'],
  ['jax', 'Jacksonville'],
  ['fort worth', 'Fort Worth'],
  ['ft worth', 'Fort Worth'],
  ['ft. worth', 'Fort Worth'],
  ['columbus', 'Columbus'],
  ['charlotte', 'Charlotte'],
  ['indianapolis', 'Indianapolis'],
  ['indy', 'Indianapolis'],
  ['san francisco', 'San Francisco'],
  ['sf', 'San Francisco'],
  ['san fran', 'San Francisco'],
  ['seattle', 'Seattle'],
  ['denver', 'Denver'],
  ['nashville', 'Nashville'],
  ['oklahoma city', 'Oklahoma City'],
  ['okc', 'Oklahoma City'],
  ['el paso', 'El Paso'],
  ['washington', 'Washington'],
  ['washington dc', 'Washington'],
  ['washington d.c.', 'Washington'],
  ['dc', 'Washington'],
  ['las vegas', 'Las Vegas'],
  ['vegas', 'Las Vegas'],
  ['louisville', 'Louisville'],
];

CITY_ALTS.forEach(([alias, canonical]) => CITY_MAP.set(alias, canonical));

export function matchCity(guess: string): string | null {
  return CITY_MAP.get(guess.trim().toLowerCase()) ?? null;
}
