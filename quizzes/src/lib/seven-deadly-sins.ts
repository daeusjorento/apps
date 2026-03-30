const SIN_DATA: { name: string; accept: string[] }[] = [
  { name: 'Pride',    accept: ['pride', 'superbia'] },
  { name: 'Greed',    accept: ['greed', 'avaritia', 'avarice'] },
  { name: 'Lust',     accept: ['lust', 'luxuria'] },
  { name: 'Envy',     accept: ['envy', 'invidia'] },
  { name: 'Gluttony', accept: ['gluttony', 'gula'] },
  { name: 'Wrath',    accept: ['wrath', 'ira', 'anger', 'rage'] },
  { name: 'Sloth',    accept: ['sloth', 'acedia', 'tristitia', 'laziness'] },
];

const SIN_MAP = new Map<string, string>();
SIN_DATA.forEach(s => s.accept.forEach(a => SIN_MAP.set(a, s.name)));

export const SINS = SIN_DATA.map(s => s.name);

export function matchSin(guess: string): string | null {
  return SIN_MAP.get(guess.trim().toLowerCase()) ?? null;
}
