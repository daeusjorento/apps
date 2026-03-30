const SCHOOL_DATA: { name: string; accept: string[] }[] = [
  // Ivy League
  { name: 'Harvard University',         accept: ['harvard university', 'harvard'] },
  { name: 'Yale University',            accept: ['yale university', 'yale'] },
  { name: 'Princeton University',       accept: ['princeton university', 'princeton'] },
  { name: 'Columbia University',        accept: ['columbia university', 'columbia'] },
  { name: 'University of Pennsylvania', accept: ['university of pennsylvania', 'penn', 'upenn', 'u penn', 'u of penn', 'university of penn'] },
  { name: 'Brown University',           accept: ['brown university', 'brown'] },
  { name: 'Dartmouth College',          accept: ['dartmouth college', 'dartmouth'] },
  { name: 'Cornell University',         accept: ['cornell university', 'cornell'] },
  // NESCAC
  { name: 'Amherst College',            accept: ['amherst college', 'amherst'] },
  { name: 'Bates College',              accept: ['bates college', 'bates'] },
  { name: 'Bowdoin College',            accept: ['bowdoin college', 'bowdoin'] },
  { name: 'Colby College',              accept: ['colby college', 'colby'] },
  { name: 'Connecticut College',        accept: ['connecticut college', 'conn college', 'conn', 'conncoll'] },
  { name: 'Hamilton College',           accept: ['hamilton college', 'hamilton'] },
  { name: 'Middlebury College',         accept: ['middlebury college', 'middlebury', 'midd'] },
  { name: 'Trinity College',            accept: ['trinity college', 'trinity'] },
  { name: 'Tufts University',           accept: ['tufts university', 'tufts'] },
  { name: 'Wesleyan University',        accept: ['wesleyan university', 'wesleyan'] },
  { name: 'Williams College',           accept: ['williams college', 'williams'] },
];

const SCHOOL_MAP = new Map<string, string>();
SCHOOL_DATA.forEach(s => s.accept.forEach(a => SCHOOL_MAP.set(a, s.name)));

export const SCHOOLS = SCHOOL_DATA.map(s => s.name);

export const SCHOOL_SECTIONS: { header: string; schools: string[] }[] = [
  {
    header: 'Ivy League',
    schools: ['Harvard University', 'Yale University', 'Princeton University', 'Columbia University', 'University of Pennsylvania', 'Brown University', 'Dartmouth College', 'Cornell University'],
  },
  {
    header: 'NESCAC',
    schools: ['Amherst College', 'Bates College', 'Bowdoin College', 'Colby College', 'Connecticut College', 'Hamilton College', 'Middlebury College', 'Trinity College', 'Tufts University', 'Wesleyan University', 'Williams College'],
  },
];

export function matchSchool(guess: string): string | null {
  return SCHOOL_MAP.get(guess.trim().toLowerCase()) ?? null;
}
