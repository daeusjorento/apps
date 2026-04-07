const PLANET_DATA: { name: string; accept: string[] }[] = [
  // Inner Planets
  { name: 'Mercury', accept: ['mercury'] },
  { name: 'Venus',   accept: ['venus'] },
  { name: 'Earth',   accept: ['earth', 'terra'] },
  { name: 'Mars',    accept: ['mars', 'red planet'] },
  // Outer Planets
  { name: 'Jupiter', accept: ['jupiter'] },
  { name: 'Saturn',  accept: ['saturn'] },
  { name: 'Uranus',  accept: ['uranus'] },
  { name: 'Neptune', accept: ['neptune'] },
];

const PLANET_MAP = new Map<string, string>();
PLANET_DATA.forEach(p => p.accept.forEach(a => PLANET_MAP.set(a, p.name)));

export const PLANETS = PLANET_DATA.map(p => p.name);

export const PLANET_SECTIONS: { header: string; planets: string[] }[] = [
  { header: 'Inner Planets', planets: ['Mercury', 'Venus', 'Earth', 'Mars'] },
  { header: 'Outer Planets', planets: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'] },
];

export function matchPlanet(guess: string): string | null {
  return PLANET_MAP.get(guess.trim().toLowerCase()) ?? null;
}
