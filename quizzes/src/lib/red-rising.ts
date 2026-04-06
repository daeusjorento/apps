const CHARACTER_DATA: { name: string; accept: string[] }[] = [
  // Arc 1 — Red Rising
  { name: 'Darrow',    accept: ['darrow', 'reaper', 'darrow of lykos', 'darrow au andromedus'] },
  { name: 'Eo',        accept: ['eo'] },
  { name: 'Fitchner',  accept: ['fitchner', 'fitchner au barca', 'ares'] },
  { name: 'Sevro',     accept: ['sevro', 'sevro au barca', 'goblin'] },
  { name: 'Virginia',  accept: ['virginia', 'mustang', 'virginia au augustus', 'sovereign'] },
  { name: 'Cassius',   accept: ['cassius', 'cassius au bellona'] },
  { name: 'Roque',     accept: ['roque', 'roque au fabii'] },
  { name: 'Tactus',    accept: ['tactus', 'tactus au rath'] },
  { name: 'Quinn',     accept: ['quinn'] },
  { name: 'Pax',       accept: ['pax'] },
  { name: 'Lea',       accept: ['lea'] },
  { name: 'Adrius',    accept: ['adrius', 'jackal', 'adrius au augustus', 'the jackal'] },
  { name: 'Mickey',    accept: ['mickey'] },
  { name: 'Harmony',   accept: ['harmony'] },
  { name: 'Dancer',    accept: ['dancer'] },
  // Arc 2 — Golden Son / Morning Star
  { name: 'Ragnar',    accept: ['ragnar', 'ragnar volarus'] },
  { name: 'Victra',    accept: ['victra', 'victra au julii'] },
  { name: 'Kavax',     accept: ['kavax', 'kavaxas', 'kavax au telemanus'] },
  { name: 'Daxo',      accept: ['daxo', 'daxo au telemanus'] },
  { name: 'Antonia',   accept: ['antonia', 'antonia au severus-julii'] },
  { name: 'Holiday',   accept: ['holiday', 'holiday ti nakamura'] },
  { name: 'Theodora',  accept: ['theodora'] },
  // Arc 3 — Iron Gold / Dark Age / Light Bringer
  { name: 'Lyria',       accept: ['lyria', 'lyria of lagalos'] },
  { name: 'Lysander',    accept: ['lysander', 'lysander au lune'] },
  { name: 'Ephraim',     accept: ['ephraim', 'ephraim ti horn'] },
  { name: 'Ajax',        accept: ['ajax', 'ajax au grimmus'] },
  { name: 'Atalantia',   accept: ['atalantia', 'atalantia au grimmus'] },
  { name: 'Diomedes',    accept: ['diomedes', 'diomedes au raa'] },
  { name: 'Apollonius',  accept: ['apollonius', 'apollonius au valii-rath', 'minotaur', 'the minotaur'] },
  { name: 'Rhonna',      accept: ['rhonna'] },
  { name: 'Atlas',       accept: ['atlas', 'atlas au raa'] },
  { name: 'Seraphina',   accept: ['seraphina', 'seraphina au raa'] },
  { name: 'Pytha',       accept: ['pytha'] },
  { name: 'Thraxa',      accept: ['thraxa', 'thraxa au telemanus'] },
  { name: 'Wulfgar',     accept: ['wulfgar'] },
];

const CHARACTER_MAP = new Map<string, string>();
CHARACTER_DATA.forEach(c => c.accept.forEach(a => CHARACTER_MAP.set(a, c.name)));

export const RED_RISING_CHARACTERS = CHARACTER_DATA.map(c => c.name);

export const RED_RISING_SECTIONS: { header: string; characters: string[] }[] = [
  {
    header: 'Arc 1 — Red Rising',
    characters: ['Darrow', 'Eo', 'Fitchner', 'Sevro', 'Virginia', 'Cassius', 'Roque', 'Tactus', 'Quinn', 'Pax', 'Lea', 'Adrius', 'Mickey', 'Harmony', 'Dancer'],
  },
  {
    header: 'Arc 2 — Golden Son / Morning Star',
    characters: ['Ragnar', 'Victra', 'Kavax', 'Daxo', 'Antonia', 'Holiday', 'Theodora'],
  },
  {
    header: 'Arc 3 — Iron Gold / Dark Age / Light Bringer',
    characters: ['Lyria', 'Lysander', 'Ephraim', 'Ajax', 'Atalantia', 'Diomedes', 'Apollonius', 'Rhonna', 'Atlas', 'Seraphina', 'Pytha', 'Thraxa', 'Wulfgar'],
  },
];

export function matchCharacter(guess: string): string | null {
  return CHARACTER_MAP.get(guess.trim().toLowerCase()) ?? null;
}
