// Major named characters from The Wire (all 5 seasons)
// Display name = formal/full character name; accept includes common nickname
const WIRE_DATA: { name: string; accept: string[] }[] = [
  { name: 'Jimmy McNulty',         accept: ['jimmy mcnulty', 'mcnulty', 'jimmy'] },
  { name: 'William Moreland',      accept: ['william moreland', 'bunk', 'moreland'] },
  { name: 'Lester Freamon',        accept: ['lester freamon', 'lester', 'freamon'] },
  { name: 'Kima Greggs',           accept: ['kima greggs', 'kima', 'greggs'] },
  { name: 'Ellis Carver',          accept: ['ellis carver', 'carver', 'ellis'] },
  { name: 'Thomas Hauk',           accept: ['thomas hauk', 'herc', 'hauk'] },
  { name: 'Cedric Daniels',        accept: ['cedric daniels', 'daniels', 'cedric'] },
  { name: 'Rhonda Pearlman',       accept: ['rhonda pearlman', 'pearlman', 'rhonda'] },
  { name: 'William Rawls',         accept: ['william rawls', 'rawls'] },
  { name: 'Ervin Burrell',         accept: ['ervin burrell', 'burrell', 'ervin'] },
  { name: 'Jay Landsman',          accept: ['jay landsman', 'landsman'] },
  { name: 'Roland Pryzbylewski',   accept: ['roland pryzbylewski', 'prez', 'pryzbylewski', 'roland'] },
  { name: 'Omar Little',           accept: ['omar little', 'omar'] },
  { name: 'Avon Barksdale',        accept: ['avon barksdale', 'avon', 'barksdale'] },
  { name: 'Stringer Bell',         accept: ['stringer bell', 'stringer', 'string', 'bell'] },
  { name: "D'Angelo Barksdale",    accept: ["d'angelo barksdale", "d'angelo", 'dangelo', 'd angelo'] },
  { name: 'Bodie Broadus',         accept: ['bodie broadus', 'bodie', 'broadus'] },
  { name: 'Poot Carr',             accept: ['poot carr', 'poot'] },
  { name: 'Wallace',               accept: ['wallace'] },
  { name: 'Wee-Bey Brice',         accept: ['wee-bey brice', 'wee-bey', 'wee bey', 'weebey'] },
  { name: 'Reginald Cousins',      accept: ['reginald cousins', 'bubbles', 'bubs', 'reginald'] },
  { name: 'Proposition Joe',       accept: ['proposition joe', 'prop joe', 'prop. joe'] },
  { name: 'Clay Davis',            accept: ['clay davis', 'clay', 'senator davis'] },
  { name: 'Nick Sobotka',          accept: ['nick sobotka', 'nick', 'sobotka'] },
  { name: 'Frank Sobotka',         accept: ['frank sobotka', 'frank'] },
  { name: 'Ziggy Sobotka',         accept: ['ziggy sobotka', 'ziggy'] },
  { name: 'The Greek',             accept: ['the greek', 'greek'] },
  { name: 'Spiros Vondas',         accept: ['spiros vondas', 'vondas', 'spiros'] },
  { name: 'Marlo Stanfield',       accept: ['marlo stanfield', 'marlo', 'stanfield'] },
  { name: 'Chris Partlow',         accept: ['chris partlow', 'chris', 'partlow'] },
  { name: 'Snoop',                 accept: ['snoop'] },
  { name: 'Dennis Wise',           accept: ['dennis wise', 'cutty', 'dennis'] },
  { name: 'Tommy Carcetti',        accept: ['tommy carcetti', 'carcetti', 'tommy'] },
  { name: 'Norman Wilson',         accept: ['norman wilson', 'norman'] },
  { name: 'Howard Colvin',         accept: ['howard colvin', 'bunny', 'bunny colvin', 'colvin', 'howard'] },
  { name: 'Slim Charles',          accept: ['slim charles', 'slim'] },
  { name: 'Cheese',                accept: ['cheese', 'cheese wagstaff', 'melvin wagstaff'] },
  { name: 'Michael Lee',           accept: ['michael lee', 'michael'] },
  { name: 'Randy Wagstaff',        accept: ['randy wagstaff', 'randy'] },
  { name: 'Namond Brice',          accept: ['namond brice', 'namond'] },
  { name: 'Duquan Weems',          accept: ['duquan weems', 'dukie', 'duquan'] },
  { name: 'Kenard',                accept: ['kenard'] },
  { name: 'Monk Metcalf',          accept: ['monk metcalf', 'monk'] },
  { name: 'Gus Haynes',            accept: ['gus haynes', 'gus', 'haynes'] },
  { name: 'Scott Templeton',       accept: ['scott templeton', 'templeton', 'scott'] },
];

const WIRE_MAP = new Map<string, string>();
WIRE_DATA.forEach(c => c.accept.forEach(a => WIRE_MAP.set(a, c.name)));

export const WIRE_CHARACTERS = WIRE_DATA.map(c => c.name);

export function matchWireCharacter(guess: string): string | null {
  return WIRE_MAP.get(guess.trim().toLowerCase()) ?? null;
}
