const MOON_DATA: { name: string; accept: string[] }[] = [
  // Earth
  { name: 'Moon',     accept: ['moon', 'luna', 'the moon'] },
  // Mars
  { name: 'Phobos',   accept: ['phobos'] },
  { name: 'Deimos',   accept: ['deimos'] },
  // Jupiter (Galilean moons)
  { name: 'Io',       accept: ['io'] },
  { name: 'Europa',   accept: ['europa'] },
  { name: 'Ganymede', accept: ['ganymede'] },
  { name: 'Callisto', accept: ['callisto'] },
  // Saturn
  { name: 'Titan',    accept: ['titan'] },
  { name: 'Enceladus', accept: ['enceladus'] },
  { name: 'Mimas',    accept: ['mimas'] },
  { name: 'Tethys',   accept: ['tethys'] },
  { name: 'Dione',    accept: ['dione'] },
  { name: 'Rhea',     accept: ['rhea'] },
  { name: 'Iapetus',  accept: ['iapetus'] },
  { name: 'Hyperion', accept: ['hyperion'] },
  { name: 'Phoebe',   accept: ['phoebe'] },
  // Uranus
  { name: 'Miranda',  accept: ['miranda'] },
  { name: 'Ariel',    accept: ['ariel'] },
  { name: 'Umbriel',  accept: ['umbriel'] },
  { name: 'Titania',  accept: ['titania'] },
  { name: 'Oberon',   accept: ['oberon'] },
  // Neptune
  { name: 'Triton',   accept: ['triton'] },
  { name: 'Nereid',   accept: ['nereid'] },
  { name: 'Proteus',  accept: ['proteus'] },
];

const MOON_MAP = new Map<string, string>();
MOON_DATA.forEach(m => m.accept.forEach(a => MOON_MAP.set(a, m.name)));

export const MOONS = MOON_DATA.map(m => m.name);

export const MOON_SECTIONS: { header: string; moons: string[] }[] = [
  { header: 'Earth',   moons: ['Moon'] },
  { header: 'Mars',    moons: ['Phobos', 'Deimos'] },
  { header: 'Jupiter', moons: ['Io', 'Europa', 'Ganymede', 'Callisto'] },
  { header: 'Saturn',  moons: ['Titan', 'Enceladus', 'Mimas', 'Tethys', 'Dione', 'Rhea', 'Iapetus', 'Hyperion', 'Phoebe'] },
  { header: 'Uranus',  moons: ['Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon'] },
  { header: 'Neptune', moons: ['Triton', 'Nereid', 'Proteus'] },
];

export function matchMoon(guess: string): string | null {
  return MOON_MAP.get(guess.trim().toLowerCase()) ?? null;
}
