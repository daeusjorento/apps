const PROVINCE_DATA: { name: string; accept: string[] }[] = [
  { name: 'Alberta',                   accept: ['alberta', 'ab'] },
  { name: 'British Columbia',          accept: ['british columbia', 'bc'] },
  { name: 'Manitoba',                  accept: ['manitoba', 'mb'] },
  { name: 'New Brunswick',             accept: ['new brunswick', 'nb'] },
  { name: 'Newfoundland and Labrador', accept: ['newfoundland and labrador', 'newfoundland', 'labrador', 'nl'] },
  { name: 'Northwest Territories',     accept: ['northwest territories', 'nwt', 'nt'] },
  { name: 'Nova Scotia',               accept: ['nova scotia', 'ns'] },
  { name: 'Nunavut',                   accept: ['nunavut', 'nu'] },
  { name: 'Ontario',                   accept: ['ontario', 'on'] },
  { name: 'Prince Edward Island',      accept: ['prince edward island', 'pei', 'pe'] },
  { name: 'Quebec',                    accept: ['quebec', 'québec', 'qc'] },
  { name: 'Saskatchewan',              accept: ['saskatchewan', 'sk'] },
  { name: 'Yukon',                     accept: ['yukon', 'yukon territory', 'yt'] },
];

const PROVINCE_MAP = new Map<string, string>();
PROVINCE_DATA.forEach(p => p.accept.forEach(a => PROVINCE_MAP.set(a, p.name)));

export const CANADA_PROVINCES = PROVINCE_DATA.map(p => p.name);

export function matchProvince(guess: string): string | null {
  return PROVINCE_MAP.get(guess.trim().toLowerCase()) ?? null;
}
