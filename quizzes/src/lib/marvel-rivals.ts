const CHARACTER_DATA: { name: string; accept: string[] }[] = [
  // Vanguards
  { name: 'Captain America',  accept: ['captain america', 'cap', 'steve rogers', 'captain'] },
  { name: 'Doctor Strange',   accept: ['doctor strange', 'dr strange', 'dr. strange', 'stephen strange', 'strange'] },
  { name: 'Groot',            accept: ['groot', 'i am groot'] },
  { name: 'Hulk',             accept: ['hulk', 'bruce banner', 'the hulk', 'green giant'] },
  { name: 'Magneto',          accept: ['magneto', 'max eisenhardt', 'erik lehnsherr', 'magnus'] },
  { name: 'Mr. Fantastic',    accept: ['mr. fantastic', 'mr fantastic', 'mister fantastic', 'reed richards', 'reed'] },
  { name: 'Peni Parker',      accept: ['peni parker', 'peni'] },
  { name: 'The Thing',        accept: ['the thing', 'thing', 'ben grimm'] },
  { name: 'Thor',             accept: ['thor', 'god of thunder', 'thor odinson'] },
  { name: 'Venom',            accept: ['venom', 'eddie brock'] },
  // Duelists
  { name: 'Black Panther',    accept: ['black panther', 'tchalla', "t'challa"] },
  { name: 'Black Widow',      accept: ['black widow', 'natasha romanoff', 'natasha', 'nat', 'natalia romanova'] },
  { name: 'Hawkeye',          accept: ['hawkeye', 'clint barton', 'clint'] },
  { name: 'Hela',             accept: ['hela', 'goddess of death'] },
  { name: 'Human Torch',      accept: ['human torch', 'johnny storm', 'johnny', 'torch'] },
  { name: 'Iron Fist',        accept: ['iron fist', 'danny rand', 'iron fist danny'] },
  { name: 'Iron Man',         accept: ['iron man', 'tony stark', 'tony', 'ironman'] },
  { name: 'Magik',            accept: ['magik', 'illyana rasputin', 'illyana'] },
  { name: 'Moon Knight',      accept: ['moon knight', 'marc spector', 'moonknight'] },
  { name: 'Namor',            accept: ['namor', 'namor the sub-mariner', 'sub-mariner'] },
  { name: 'Psylocke',         accept: ['psylocke', 'betsy braddock', 'elizabeth braddock'] },
  { name: 'Scarlet Witch',    accept: ['scarlet witch', 'wanda maximoff', 'wanda', 'scarletwitch'] },
  { name: 'Squirrel Girl',    accept: ['squirrel girl', 'doreen green', 'squirrelgirl'] },
  { name: 'Star-Lord',        accept: ['star-lord', 'star lord', 'starlord', 'peter quill', 'quill'] },
  { name: 'Storm',            accept: ['storm', 'ororo munroe', 'ororo'] },
  { name: 'The Punisher',     accept: ['the punisher', 'punisher', 'frank castle'] },
  { name: 'Winter Soldier',   accept: ['winter soldier', 'bucky', 'bucky barnes', 'james barnes'] },
  { name: 'Wolverine',        accept: ['wolverine', 'logan', 'james howlett', 'weapon x'] },
  { name: 'Spider-Man',       accept: ['spider-man', 'spiderman', 'spider man', 'peter parker'] },
  // Strategists
  { name: 'Adam Warlock',     accept: ['adam warlock', 'warlock', 'adam'] },
  { name: 'Cloak & Dagger',   accept: ['cloak & dagger', 'cloak and dagger', 'cloak', 'dagger', 'tyrone johnson', 'tandy bowen'] },
  { name: 'Invisible Woman',  accept: ['invisible woman', 'sue storm', 'sue', 'susan storm', 'invisible'] },
  { name: 'Jeff the Land Shark', accept: ['jeff the land shark', 'jeff', 'land shark', 'jeff shark'] },
  { name: 'Loki',             accept: ['loki', 'loki laufeyson', 'god of mischief'] },
  { name: 'Luna Snow',        accept: ['luna snow', 'luna', 'seol hee'] },
  { name: 'Mantis',           accept: ['mantis', 'mantis masters'] },
  { name: 'Rocket Raccoon',   accept: ['rocket raccoon', 'rocket', 'raccoon'] },
];

const CHARACTER_MAP = new Map<string, string>();
CHARACTER_DATA.forEach(c => c.accept.forEach(a => CHARACTER_MAP.set(a, c.name)));

export const MR_CHARACTERS = CHARACTER_DATA.map(c => c.name);

export const MR_SECTIONS: { header: string; characters: string[] }[] = [
  {
    header: 'Vanguard',
    characters: ['Captain America', 'Doctor Strange', 'Groot', 'Hulk', 'Magneto', 'Mr. Fantastic', 'Peni Parker', 'The Thing', 'Thor', 'Venom'],
  },
  {
    header: 'Duelist',
    characters: ['Black Panther', 'Black Widow', 'Hawkeye', 'Hela', 'Human Torch', 'Iron Fist', 'Iron Man', 'Magik', 'Moon Knight', 'Namor', 'Psylocke', 'Scarlet Witch', 'Squirrel Girl', 'Star-Lord', 'Storm', 'The Punisher', 'Winter Soldier', 'Wolverine', 'Spider-Man'],
  },
  {
    header: 'Strategist',
    characters: ['Adam Warlock', 'Cloak & Dagger', 'Invisible Woman', 'Jeff the Land Shark', 'Loki', 'Luna Snow', 'Mantis', 'Rocket Raccoon'],
  },
];

export function matchMRCharacter(guess: string): string | null {
  return CHARACTER_MAP.get(guess.trim().toLowerCase()) ?? null;
}
