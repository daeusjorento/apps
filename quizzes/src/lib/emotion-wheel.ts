// Plutchik's Emotion Wheel — 3 rings of intensity
// Primary: the 8 core emotions (middle ring)
// Secondary: the 8 more intense versions (inner ring)
// Tertiary: the 8 milder versions (outer ring)

const EMOTION_DATA: { name: string; accept: string[] }[] = [
  // Primary (8)
  { name: 'Joy',           accept: ['joy', 'happiness', 'happy'] },
  { name: 'Trust',         accept: ['trust'] },
  { name: 'Fear',          accept: ['fear', 'afraid'] },
  { name: 'Surprise',      accept: ['surprise', 'surprised'] },
  { name: 'Sadness',       accept: ['sadness', 'sad', 'sorrow'] },
  { name: 'Disgust',       accept: ['disgust', 'disgusted'] },
  { name: 'Anger',         accept: ['anger', 'angry'] },
  { name: 'Anticipation',  accept: ['anticipation'] },
  // Secondary — intense (8)
  { name: 'Ecstasy',       accept: ['ecstasy', 'ecstatic'] },
  { name: 'Admiration',    accept: ['admiration', 'admire'] },
  { name: 'Terror',        accept: ['terror', 'terrified'] },
  { name: 'Amazement',     accept: ['amazement', 'amazed', 'amazed'] },
  { name: 'Grief',         accept: ['grief', 'grieve'] },
  { name: 'Loathing',      accept: ['loathing', 'loathe'] },
  { name: 'Rage',          accept: ['rage'] },
  { name: 'Vigilance',     accept: ['vigilance', 'vigilant'] },
  // Tertiary — mild (8)
  { name: 'Serenity',      accept: ['serenity', 'serene'] },
  { name: 'Acceptance',    accept: ['acceptance'] },
  { name: 'Apprehension',  accept: ['apprehension', 'apprehensive'] },
  { name: 'Distraction',   accept: ['distraction', 'distracted'] },
  { name: 'Pensiveness',   accept: ['pensiveness', 'pensive'] },
  { name: 'Boredom',       accept: ['boredom', 'bored'] },
  { name: 'Annoyance',     accept: ['annoyance', 'annoyed', 'annoy'] },
  { name: 'Interest',      accept: ['interest', 'interested'] },
];

const EMOTION_MAP = new Map<string, string>();
EMOTION_DATA.forEach(e => e.accept.forEach(a => EMOTION_MAP.set(a, e.name)));

export const EMOTIONS = EMOTION_DATA.map(e => e.name);

export const EMOTION_SECTIONS: { header: string; emotions: string[] }[] = [
  { header: 'Primary',   emotions: ['Joy', 'Trust', 'Fear', 'Surprise', 'Sadness', 'Disgust', 'Anger', 'Anticipation'] },
  { header: 'Secondary', emotions: ['Ecstasy', 'Admiration', 'Terror', 'Amazement', 'Grief', 'Loathing', 'Rage', 'Vigilance'] },
  { header: 'Tertiary',  emotions: ['Serenity', 'Acceptance', 'Apprehension', 'Distraction', 'Pensiveness', 'Boredom', 'Annoyance', 'Interest'] },
];

export function matchEmotion(guess: string): string | null {
  return EMOTION_MAP.get(guess.trim().toLowerCase()) ?? null;
}
