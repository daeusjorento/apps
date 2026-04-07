interface God {
  name: string;       // Greek name (canonical)
  roman: string;      // Roman equivalent
  domain: string;     // Hint shown in table
  accept: string[];   // All accepted guesses (lowercase)
}

const GOD_DATA: { header: string; gods: God[] }[] = [
  {
    header: 'The Twelve Olympians',
    gods: [
      { name: 'Zeus',       roman: 'Jupiter',  domain: 'King of Gods / Thunder',   accept: ['zeus', 'jupiter'] },
      { name: 'Hera',       roman: 'Juno',     domain: 'Marriage / Queen of Gods', accept: ['hera', 'juno'] },
      { name: 'Poseidon',   roman: 'Neptune',  domain: 'Sea / Earthquakes',        accept: ['poseidon', 'neptune'] },
      { name: 'Demeter',    roman: 'Ceres',    domain: 'Harvest / Agriculture',    accept: ['demeter', 'ceres'] },
      { name: 'Athena',     roman: 'Minerva',  domain: 'Wisdom / Warfare',         accept: ['athena', 'minerva'] },
      { name: 'Apollo',     roman: 'Apollo',   domain: 'Sun / Music / Prophecy',   accept: ['apollo'] },
      { name: 'Artemis',    roman: 'Diana',    domain: 'Hunt / Moon',              accept: ['artemis', 'diana'] },
      { name: 'Ares',       roman: 'Mars',     domain: 'War',                      accept: ['ares', 'mars'] },
      { name: 'Aphrodite',  roman: 'Venus',    domain: 'Love / Beauty',            accept: ['aphrodite', 'venus'] },
      { name: 'Hephaestus', roman: 'Vulcan',   domain: 'Fire / Forge',             accept: ['hephaestus', 'hephaistos', 'vulcan'] },
      { name: 'Hermes',     roman: 'Mercury',  domain: 'Messengers / Commerce',    accept: ['hermes', 'mercury'] },
      { name: 'Dionysus',   roman: 'Bacchus',  domain: 'Wine / Revelry',           accept: ['dionysus', 'dionysos', 'bacchus'] },
    ],
  },
  {
    header: 'Other Major Deities',
    gods: [
      { name: 'Hades',       roman: 'Pluto',      domain: 'Underworld / Dead',     accept: ['hades', 'pluto'] },
      { name: 'Persephone',  roman: 'Proserpina', domain: 'Queen of Underworld',   accept: ['persephone', 'proserpina'] },
      { name: 'Hestia',      roman: 'Vesta',      domain: 'Hearth / Home',         accept: ['hestia', 'vesta'] },
      { name: 'Eros',        roman: 'Cupid',      domain: 'Romantic Love',         accept: ['eros', 'cupid'] },
      { name: 'Nike',        roman: 'Victoria',   domain: 'Victory',               accept: ['nike', 'victoria'] },
      { name: 'Helios',      roman: 'Sol',        domain: 'Sun (Titan)',            accept: ['helios', 'sol'] },
      { name: 'Selene',      roman: 'Luna',       domain: 'Moon (Titan)',           accept: ['selene', 'luna'] },
      { name: 'Eos',         roman: 'Aurora',     domain: 'Dawn',                  accept: ['eos', 'aurora'] },
      { name: 'Hypnos',      roman: 'Somnus',     domain: 'Sleep',                 accept: ['hypnos', 'somnus'] },
      { name: 'Morpheus',    roman: 'Morpheus',   domain: 'Dreams',                accept: ['morpheus'] },
      { name: 'Nemesis',     roman: 'Invidia',    domain: 'Retribution / Envy',    accept: ['nemesis', 'invidia'] },
      { name: 'Pan',         roman: 'Faunus',     domain: 'Nature / Wilderness',   accept: ['pan', 'faunus'] },
      { name: 'Hecate',      roman: 'Trivia',     domain: 'Magic / Crossroads',    accept: ['hecate', 'hekate', 'trivia'] },
      { name: 'Iris',        roman: 'Iris',       domain: 'Rainbow / Messenger',   accept: ['iris'] },
    ],
  },
];

const GOD_MAP = new Map<string, string>();
GOD_DATA.forEach(section =>
  section.gods.forEach(g => g.accept.forEach(a => GOD_MAP.set(a, g.name)))
);

export const TOTAL_GODS = GOD_DATA.reduce((n, s) => n + s.gods.length, 0);

export type GodRow =
  | { type: 'header'; text: string }
  | { type: 'god'; name: string; roman: string; domain: string; index: number };

const _rows: GodRow[] = [];
let _idx = 0;
GOD_DATA.forEach(section => {
  _rows.push({ type: 'header', text: section.header });
  section.gods.forEach(g => _rows.push({ type: 'god', name: g.name, roman: g.roman, domain: g.domain, index: _idx++ }));
});
export const GOD_ROWS = _rows;

export function matchGod(guess: string): string | null {
  return GOD_MAP.get(guess.trim().toLowerCase()) ?? null;
}
