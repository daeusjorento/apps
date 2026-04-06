const CHARACTER_DATA: { name: string; accept: string[] }[] = [
  // Fellowship
  { name: 'Frodo',          accept: ['frodo', 'frodo baggins'] },
  { name: 'Samwise',        accept: ['samwise', 'sam', 'samwise gamgee', 'sam gamgee'] },
  { name: 'Merry',          accept: ['merry', 'meriadoc', 'meriadoc brandybuck', 'merry brandybuck'] },
  { name: 'Pippin',         accept: ['pippin', 'peregrin', 'peregrin took', 'pippin took'] },
  { name: 'Gandalf',        accept: ['gandalf', 'mithrandir', 'gandalf the grey', 'gandalf the white', 'olorin', 'olórin'] },
  { name: 'Aragorn',        accept: ['aragorn', 'strider', 'elessar', 'aragorn ii'] },
  { name: 'Legolas',        accept: ['legolas'] },
  { name: 'Gimli',          accept: ['gimli'] },
  { name: 'Boromir',        accept: ['boromir'] },
  { name: 'Bilbo',          accept: ['bilbo', 'bilbo baggins'] },
  { name: 'Gollum',         accept: ['gollum', 'sméagol', 'smeagol'] },
  // Rohan
  { name: 'Théoden',        accept: ['theoden', 'théoden', 'king theoden'] },
  { name: 'Éowyn',          accept: ['eowyn', 'éowyn'] },
  { name: 'Éomer',          accept: ['eomer', 'éomer'] },
  { name: 'Grima',          accept: ['grima', 'wormtongue', 'grima wormtongue'] },
  { name: 'Treebeard',      accept: ['treebeard', 'fangorn'] },
  // Gondor
  { name: 'Denethor',       accept: ['denethor'] },
  { name: 'Faramir',        accept: ['faramir'] },
  { name: 'Imrahil',        accept: ['imrahil', 'prince imrahil'] },
  { name: 'Beregond',       accept: ['beregond'] },
  // Mordor
  { name: 'Sauron',         accept: ['sauron', 'the dark lord', 'dark lord'] },
  { name: 'Saruman',        accept: ['saruman', 'curunir', 'curunír', 'saruman the white'] },
  { name: 'The Witch-king', accept: ['witch-king', 'witch king', 'witch-king of angmar', 'lord of the nazgul', 'lord of the nazgûl'] },
  { name: 'Shelob',         accept: ['shelob'] },
  { name: 'Gothmog',        accept: ['gothmog'] },
  // Other (Hobbit & Silmarillion)
  { name: 'Elrond',         accept: ['elrond'] },
  { name: 'Galadriel',      accept: ['galadriel'] },
  { name: 'Celeborn',       accept: ['celeborn'] },
  { name: 'Arwen',          accept: ['arwen', 'arwen undómiel', 'arwen undomiel'] },
  { name: 'Glorfindel',     accept: ['glorfindel'] },
  { name: 'Tom Bombadil',   accept: ['tom bombadil', 'bombadil'] },
  { name: 'Radagast',       accept: ['radagast', 'radagast the brown'] },
  { name: 'Círdan',         accept: ['cirdan', 'círdan'] },
  { name: 'Thranduil',      accept: ['thranduil'] },
  { name: 'Smaug',          accept: ['smaug'] },
  { name: 'Thorin',         accept: ['thorin', 'thorin oakenshield'] },
  { name: 'Bard',           accept: ['bard', 'bard the bowman'] },
  { name: 'Morgoth',        accept: ['morgoth', 'melkor'] },
  { name: 'Fëanor',         accept: ['feanor', 'fëanor'] },
  { name: 'Lúthien',        accept: ['luthien', 'lúthien'] },
  { name: 'Beren',          accept: ['beren'] },
  { name: 'Eärendil',       accept: ['earendil', 'eärendil'] },
  { name: 'Glaurung',       accept: ['glaurung'] },
];

const CHARACTER_MAP = new Map<string, string>();
CHARACTER_DATA.forEach(c => c.accept.forEach(a => CHARACTER_MAP.set(a, c.name)));

export const LOTR_CHARACTERS = CHARACTER_DATA.map(c => c.name);

export const LOTR_SECTIONS: { header: string; characters: string[] }[] = [
  {
    header: 'Fellowship',
    characters: ['Frodo', 'Samwise', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', 'Boromir', 'Bilbo', 'Gollum'],
  },
  {
    header: 'Rohan',
    characters: ['Théoden', 'Éowyn', 'Éomer', 'Grima', 'Treebeard'],
  },
  {
    header: 'Gondor',
    characters: ['Denethor', 'Faramir', 'Imrahil', 'Beregond'],
  },
  {
    header: 'Mordor',
    characters: ['Sauron', 'Saruman', 'The Witch-king', 'Shelob', 'Gothmog'],
  },
  {
    header: 'Other',
    characters: ['Elrond', 'Galadriel', 'Celeborn', 'Arwen', 'Glorfindel', 'Tom Bombadil', 'Radagast', 'Círdan', 'Thranduil', 'Smaug', 'Thorin', 'Bard', 'Morgoth', 'Fëanor', 'Lúthien', 'Beren', 'Eärendil', 'Glaurung'],
  },
];

export function matchCharacter(guess: string): string | null {
  return CHARACTER_MAP.get(guess.trim().toLowerCase()) ?? null;
}
