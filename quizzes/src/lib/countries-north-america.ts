const COUNTRY_DATA: { name: string; accept: string[] }[] = [
  { name: 'Antigua and Barbuda',              accept: ['antigua and barbuda', 'antigua', 'barbuda'] },
  { name: 'Bahamas',                          accept: ['bahamas', 'the bahamas'] },
  { name: 'Barbados',                         accept: ['barbados'] },
  { name: 'Belize',                           accept: ['belize'] },
  { name: 'Canada',                           accept: ['canada'] },
  { name: 'Costa Rica',                       accept: ['costa rica'] },
  { name: 'Cuba',                             accept: ['cuba'] },
  { name: 'Dominica',                         accept: ['dominica'] },
  { name: 'Dominican Republic',               accept: ['dominican republic'] },
  { name: 'El Salvador',                      accept: ['el salvador', 'salvador'] },
  { name: 'Grenada',                          accept: ['grenada'] },
  { name: 'Guatemala',                        accept: ['guatemala'] },
  { name: 'Haiti',                            accept: ['haiti'] },
  { name: 'Honduras',                         accept: ['honduras'] },
  { name: 'Jamaica',                          accept: ['jamaica'] },
  { name: 'Mexico',                           accept: ['mexico'] },
  { name: 'Nicaragua',                        accept: ['nicaragua'] },
  { name: 'Panama',                           accept: ['panama'] },
  { name: 'Saint Kitts and Nevis',            accept: ['saint kitts and nevis', 'st kitts and nevis', 'saint kitts', 'st kitts', 'st. kitts'] },
  { name: 'Saint Lucia',                      accept: ['saint lucia', 'st lucia', 'st. lucia'] },
  { name: 'Saint Vincent and the Grenadines', accept: ['saint vincent and the grenadines', 'st vincent', 'saint vincent', 'st. vincent'] },
  { name: 'Trinidad and Tobago',              accept: ['trinidad and tobago', 'trinidad', 'tobago'] },
  { name: 'United States',                    accept: ['united states', 'usa', 'us', 'united states of america', 'america'] },
];

const COUNTRY_MAP = new Map<string, string>();
COUNTRY_DATA.forEach(c => c.accept.forEach(a => COUNTRY_MAP.set(a, c.name)));

export const COUNTRIES_NORTH_AMERICA = COUNTRY_DATA.map(c => c.name);

export function matchCountry(guess: string): string | null {
  return COUNTRY_MAP.get(guess.trim().toLowerCase()) ?? null;
}
