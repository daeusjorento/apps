const APPLE_DATA: { name: string; accept: string[] }[] = [
  { name: 'Fuji',             accept: ['fuji'] },
  { name: 'Gala',             accept: ['gala', 'royal gala'] },
  { name: 'Granny Smith',     accept: ['granny smith', 'granny', 'granny smiths'] },
  { name: 'Honeycrisp',       accept: ['honeycrisp', 'honey crisp'] },
  { name: 'McIntosh',         accept: ['mcintosh', 'macintosh', 'mac'] },
  { name: 'Golden Delicious', accept: ['golden delicious', 'golden', 'yellow delicious'] },
  { name: 'Red Delicious',    accept: ['red delicious', 'red'] },
  { name: 'Braeburn',         accept: ['braeburn'] },
  { name: 'Pink Lady',        accept: ['pink lady', 'cripps pink'] },
  { name: 'Jazz',             accept: ['jazz'] },
  { name: 'Empire',           accept: ['empire'] },
  { name: 'Cortland',         accept: ['cortland'] },
  { name: 'Jonathan',         accept: ['jonathan'] },
  { name: 'Rome',             accept: ['rome', 'rome beauty'] },
  { name: 'Winesap',          accept: ['winesap'] },
  { name: 'Jonagold',         accept: ['jonagold'] },
  { name: 'Macoun',           accept: ['macoun'] },
  { name: 'Gravenstein',      accept: ['gravenstein'] },
  { name: 'Mutsu',            accept: ['mutsu', 'crispin'] },
  { name: 'Zestar',           accept: ['zestar', 'zestar!'] },
  { name: 'Ambrosia',         accept: ['ambrosia'] },
  { name: 'Cameo',            accept: ['cameo'] },
  { name: 'Idared',           accept: ['idared', 'ida red'] },
  { name: 'Liberty',          accept: ['liberty'] },
  { name: 'Lodi',             accept: ['lodi'] },
  { name: 'Paula Red',        accept: ['paula red', 'paulared'] },
  { name: 'Stayman',          accept: ['stayman', 'stayman winesap'] },
  { name: 'Cox',              accept: ['cox', "cox's orange pippin", 'cox orange pippin'] },
  { name: 'Elstar',           accept: ['elstar'] },
  { name: 'Honeygold',        accept: ['honeygold', 'honey gold'] },
];

const APPLE_MAP = new Map<string, string>();
APPLE_DATA.forEach(a => a.accept.forEach(alias => APPLE_MAP.set(alias, a.name)));

export const APPLES = APPLE_DATA.map(a => a.name);

export function matchApple(guess: string): string | null {
  return APPLE_MAP.get(guess.trim().toLowerCase()) ?? null;
}
