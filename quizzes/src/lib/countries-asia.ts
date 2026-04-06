const COUNTRY_DATA: { name: string; accept: string[] }[] = [
  { name: 'Afghanistan',        accept: ['afghanistan'] },
  { name: 'Armenia',            accept: ['armenia'] },
  { name: 'Azerbaijan',         accept: ['azerbaijan'] },
  { name: 'Bahrain',            accept: ['bahrain'] },
  { name: 'Bangladesh',         accept: ['bangladesh'] },
  { name: 'Bhutan',             accept: ['bhutan'] },
  { name: 'Brunei',             accept: ['brunei', 'brunei darussalam'] },
  { name: 'Cambodia',           accept: ['cambodia', 'kampuchea'] },
  { name: 'China',              accept: ['china', "people's republic of china", 'prc'] },
  { name: 'Cyprus',             accept: ['cyprus'] },
  { name: 'Georgia',            accept: ['georgia'] },
  { name: 'India',              accept: ['india'] },
  { name: 'Indonesia',          accept: ['indonesia'] },
  { name: 'Iran',               accept: ['iran', 'islamic republic of iran'] },
  { name: 'Iraq',               accept: ['iraq'] },
  { name: 'Israel',             accept: ['israel'] },
  { name: 'Japan',              accept: ['japan'] },
  { name: 'Jordan',             accept: ['jordan'] },
  { name: 'Kazakhstan',         accept: ['kazakhstan'] },
  { name: 'Kuwait',             accept: ['kuwait'] },
  { name: 'Kyrgyzstan',         accept: ['kyrgyzstan', 'kyrgyz republic'] },
  { name: 'Laos',               accept: ['laos', 'lao', 'lao pdr'] },
  { name: 'Lebanon',            accept: ['lebanon'] },
  { name: 'Malaysia',           accept: ['malaysia'] },
  { name: 'Maldives',           accept: ['maldives'] },
  { name: 'Mongolia',           accept: ['mongolia'] },
  { name: 'Myanmar',            accept: ['myanmar', 'burma'] },
  { name: 'Nepal',              accept: ['nepal'] },
  { name: 'North Korea',        accept: ['north korea', 'dprk', 'democratic peoples republic of korea'] },
  { name: 'Oman',               accept: ['oman'] },
  { name: 'Pakistan',           accept: ['pakistan'] },
  { name: 'Palestine',          accept: ['palestine', 'palestinian territories', 'west bank', 'gaza'] },
  { name: 'Philippines',        accept: ['philippines'] },
  { name: 'Qatar',              accept: ['qatar'] },
  { name: 'Saudi Arabia',       accept: ['saudi arabia', 'saudi'] },
  { name: 'Singapore',          accept: ['singapore'] },
  { name: 'South Korea',        accept: ['south korea', 'republic of korea', 'korea'] },
  { name: 'Sri Lanka',          accept: ['sri lanka', 'ceylon'] },
  { name: 'Syria',              accept: ['syria'] },
  { name: 'Tajikistan',         accept: ['tajikistan'] },
  { name: 'Thailand',           accept: ['thailand', 'siam'] },
  { name: 'Timor-Leste',        accept: ['timor-leste', 'east timor', 'timor leste'] },
  { name: 'Turkey',             accept: ['turkey', 'türkiye', 'turkiye'] },
  { name: 'Turkmenistan',       accept: ['turkmenistan'] },
  { name: 'United Arab Emirates', accept: ['united arab emirates', 'uae'] },
  { name: 'Uzbekistan',         accept: ['uzbekistan'] },
  { name: 'Vietnam',            accept: ['vietnam', 'viet nam'] },
  { name: 'Yemen',              accept: ['yemen'] },
];

const COUNTRY_MAP = new Map<string, string>();
COUNTRY_DATA.forEach(c => c.accept.forEach(a => COUNTRY_MAP.set(a, c.name)));

export const COUNTRIES_ASIA = COUNTRY_DATA.map(c => c.name);

export function matchCountry(guess: string): string | null {
  return COUNTRY_MAP.get(guess.trim().toLowerCase()) ?? null;
}
