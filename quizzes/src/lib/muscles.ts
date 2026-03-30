const MUSCLE_DATA: { name: string; accept: string[] }[] = [
  { name: 'Trapezius',          accept: ['trapezius', 'traps', 'trap'] },
  { name: 'Latissimus dorsi',   accept: ['latissimus dorsi', 'lats', 'lat', 'latissimus', 'wings'] },
  { name: 'Rhomboids',          accept: ['rhomboids', 'rhomboid', 'mid back', 'middle back', 'upper back'] },
  { name: 'Pectoralis major',   accept: ['pectoralis major', 'chest', 'pecs', 'pec', 'pectorals', 'pectoral', 'pectoralis'] },
  { name: 'Deltoid',            accept: ['deltoid', 'deltoids', 'delts', 'delt', 'shoulders', 'shoulder muscles', 'shoulder muscle'] },
  { name: 'Rotator cuff',       accept: ['rotator cuff', 'rotator cuff muscles', 'shoulder rotators', 'rotators'] },
  { name: 'Serratus anterior',  accept: ['serratus anterior', 'serratus', "boxer's muscle", 'saw muscle'] },
  { name: 'Biceps brachii',     accept: ['biceps brachii', 'biceps', 'bicep', 'front arm'] },
  { name: 'Triceps brachii',    accept: ['triceps brachii', 'triceps', 'tricep', 'back arm', 'back of arm'] },
  { name: 'Forearm muscles',    accept: ['forearm muscles', 'forearms', 'forearm'] },
  { name: 'Rectus abdominis',   accept: ['rectus abdominis', 'abs', 'abdominals', 'abdominal', 'six pack', 'sixpack', '6 pack'] },
  { name: 'Obliques',           accept: ['obliques', 'oblique', 'side abs', 'external obliques', 'internal obliques'] },
  { name: 'Transversus abdominis', accept: ['transversus abdominis', 'transverse abdominis', 'tva', 'deep core', 'inner core', 'transverse abs'] },
  { name: 'Erector spinae',     accept: ['erector spinae', 'lower back', 'spinal erectors', 'erectors', 'erector', 'back extensors', 'spinal erector'] },
  { name: 'Intercostals',       accept: ['intercostals', 'intercostal', 'rib muscles', 'breathing muscles'] },
  { name: 'Diaphragm',          accept: ['diaphragm', 'breathing muscle', 'breath muscle'] },
  { name: 'Quadriceps',         accept: ['quadriceps', 'quads', 'quad', 'quadricep', 'front thigh', 'thigh muscles'] },
  { name: 'Hamstrings',         accept: ['hamstrings', 'hamstring', 'rear thigh', 'back of thigh', 'back thigh'] },
  { name: 'Gluteus maximus',    accept: ['gluteus maximus', 'glutes', 'glute', 'gluteus', 'butt', 'buttocks', 'rear', 'glutes maximus'] },
  { name: 'Gluteus medius',     accept: ['gluteus medius', 'glute medius', 'glute med', 'side glutes', 'hip abductors', 'hip abductor', 'outer hip'] },
  { name: 'Hip flexors',        accept: ['hip flexors', 'hip flexor', 'iliopsoas', 'psoas', 'iliacus'] },
  { name: 'Adductors',          accept: ['adductors', 'adductor', 'inner thigh', 'inner thighs', 'groin', 'groin muscles'] },
  { name: 'Piriformis',         accept: ['piriformis', 'piriform', 'deep glute', 'deep hip rotator', 'hip rotator'] },
  { name: 'Sartorius',          accept: ['sartorius', "tailor's muscle", 'tailor muscle'] },
  { name: 'Calves',             accept: ['calves', 'calf', 'gastrocnemius', 'gastroc', 'lower leg muscles'] },
  { name: 'Soleus',             accept: ['soleus', 'deep calf', 'lower calf'] },
  { name: 'Tibialis anterior',  accept: ['tibialis anterior', 'shin muscle', 'tibialis', 'shin muscles', 'shins', 'front of shin', 'shin'] },
];

const MUSCLE_MAP = new Map<string, string>();
MUSCLE_DATA.forEach(m => m.accept.forEach(a => MUSCLE_MAP.set(a, m.name)));

export const MUSCLES = MUSCLE_DATA.map(m => m.name);

export const MUSCLE_SECTIONS: { header: string; muscles: string[] }[] = [
  { header: 'Upper Body', muscles: ['Trapezius', 'Latissimus dorsi', 'Rhomboids', 'Pectoralis major', 'Deltoid', 'Rotator cuff', 'Serratus anterior'] },
  { header: 'Arms',       muscles: ['Biceps brachii', 'Triceps brachii', 'Forearm muscles'] },
  { header: 'Core',       muscles: ['Rectus abdominis', 'Obliques', 'Transversus abdominis', 'Erector spinae', 'Intercostals', 'Diaphragm'] },
  { header: 'Lower Body', muscles: ['Quadriceps', 'Hamstrings', 'Gluteus maximus', 'Gluteus medius', 'Hip flexors', 'Adductors', 'Piriformis', 'Sartorius', 'Calves', 'Soleus', 'Tibialis anterior'] },
];

export function matchMuscle(guess: string): string | null {
  return MUSCLE_MAP.get(guess.trim().toLowerCase()) ?? null;
}
