const HERO_DATA: { name: string; accept: string[] }[] = [
  // Tanks
  { name: 'D.Va',          accept: ['d.va', 'dva', 'd va', 'hana song'] },
  { name: 'Doomfist',      accept: ['doomfist', 'doom', 'akande ogundimu'] },
  { name: 'Hazard',        accept: ['hazard'] },
  { name: 'Domina',        accept: ['domina'] },
  { name: 'Junker Queen',  accept: ['junker queen', 'junkerqueen', 'jq', 'odessa stone'] },
  { name: 'Mauga',         accept: ['mauga'] },
  { name: 'Orisa',         accept: ['orisa'] },
  { name: 'Ramattra',      accept: ['ramattra', 'ram'] },
  { name: 'Reinhardt',     accept: ['reinhardt', 'rein', 'rhein'] },
  { name: 'Roadhog',       accept: ['roadhog', 'hog', 'mako rutledge'] },
  { name: 'Sigma',         accept: ['sigma'] },
  { name: 'Winston',       accept: ['winston', 'monkey', 'gorilla', 'winston the gorilla'] },
  { name: 'Wrecking Ball', accept: ['wrecking ball', 'wreckingball', 'ball', 'hammond', 'hamster'] },
  { name: 'Zarya',         accept: ['zarya', 'aleksandra zaryanova'] },
  // Damage
  { name: 'Ashe',          accept: ['ashe', 'elizabeth caledonia ashe', 'calamity'] },
  { name: 'Bastion',       accept: ['bastion'] },
  { name: 'Cassidy',       accept: ['cassidy', 'mccree', 'cole cassidy', 'jesse mccree'] },
  { name: 'Echo',          accept: ['echo'] },
  { name: 'Anran',         accept: ['anran'] },
  { name: 'Emre',          accept: ['emre'] },
  { name: 'Freja',         accept: ['freja'] },
  { name: 'Genji',         accept: ['genji', 'genji shimada'] },
  { name: 'Hanzo',         accept: ['hanzo', 'hanzo shimada'] },
  { name: 'Junkrat',       accept: ['junkrat', 'rat', 'jamison fawkes'] },
  { name: 'Mei',           accept: ['mei', 'mei-ling zhou'] },
  { name: 'Pharah',        accept: ['pharah', 'fareeha amari'] },
  { name: 'Reaper',        accept: ['reaper', 'gabriel reyes', 'el muerte'] },
  { name: 'Sojourn',       accept: ['sojourn', 'vivian chase'] },
  { name: 'Soldier: 76',   accept: ['soldier: 76', 'soldier 76', 'soldier76', 'soldier', '76', 'jack morrison'] },
  { name: 'Sombra',        accept: ['sombra', 'olivia colomar'] },
  { name: 'Symmetra',      accept: ['symmetra', 'sym', 'symm', 'satya vaswani'] },
  { name: 'Torbjörn',      accept: ['torbjörn', 'torbjorn', 'torb', 'torbjorn lindstrom', 'torbjörn lindström'] },
  { name: 'Tracer',        accept: ['tracer', 'lena oxton'] },
  { name: 'Vendetta',      accept: ['vendetta'] },
  { name: 'Venture',       accept: ['venture', 'dr. evans'] },
  { name: 'Widowmaker',    accept: ['widowmaker', 'widow', 'amelie lacroix'] },
  { name: 'Wuyang',        accept: ['wuyang'] },
  // Support
  { name: 'Ana',           accept: ['ana', 'ana amari'] },
  { name: 'Baptiste',      accept: ['baptiste', 'bap', 'jean-baptiste augustin'] },
  { name: 'Brigitte',      accept: ['brigitte', 'brig', 'brigitte lindholm'] },
  { name: 'Illari',        accept: ['illari', 'illari quispe huanca'] },
  { name: 'Jetpack Cat',   accept: ['jetpack cat', 'jetpackcat'] },
  { name: 'Juno',          accept: ['juno'] },
  { name: 'Mizuki',        accept: ['mizuki'] },
  { name: 'Kiriko',        accept: ['kiriko', 'kiriko kamori'] },
  { name: 'Lifeweaver',    accept: ['lifeweaver', 'life weaver', 'niran pruksamanee'] },
  { name: 'Lúcio',         accept: ['lúcio', 'lucio', 'lúcio correia dos santos', 'lucio correia dos santos'] },
  { name: 'Mercy',         accept: ['mercy', 'angela ziegler'] },
  { name: 'Moira',         accept: ['moira', "moira o'deorain"] },
  { name: 'Zenyatta',      accept: ['zenyatta', 'zen', 'tekhartha zenyatta'] },
];

const HERO_MAP = new Map<string, string>();
HERO_DATA.forEach(h => h.accept.forEach(a => HERO_MAP.set(a, h.name)));

export const OW_HEROES = HERO_DATA.map(h => h.name);

export const OW_SECTIONS: { header: string; heroes: string[] }[] = [
  {
    header: 'Tank',
    heroes: ['D.Va', 'Domina', 'Doomfist', 'Hazard', 'Junker Queen', 'Mauga', 'Orisa', 'Ramattra', 'Reinhardt', 'Roadhog', 'Sigma', 'Winston', 'Wrecking Ball', 'Zarya'],
  },
  {
    header: 'Damage',
    heroes: ['Anran', 'Ashe', 'Bastion', 'Cassidy', 'Echo', 'Emre', 'Freja', 'Genji', 'Hanzo', 'Junkrat', 'Mei', 'Pharah', 'Reaper', 'Sojourn', 'Soldier: 76', 'Sombra', 'Symmetra', 'Torbjörn', 'Tracer', 'Vendetta', 'Venture', 'Widowmaker', 'Wuyang'],
  },
  {
    header: 'Support',
    heroes: ['Ana', 'Baptiste', 'Brigitte', 'Illari', 'Jetpack Cat', 'Juno', 'Kiriko', 'Lifeweaver', 'Lúcio', 'Mercy', 'Mizuki', 'Moira', 'Zenyatta'],
  },
];

export function matchOWHero(guess: string): string | null {
  return HERO_MAP.get(guess.trim().toLowerCase()) ?? null;
}
