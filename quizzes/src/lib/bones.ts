// Each entry: canonical display name + every accepted guess (lowercase)
const BONE_DATA: { name: string; accept: string[] }[] = [
  { name: 'Skull',           accept: ['skull', 'cranium', 'head bone', 'skull bone'] },
  { name: 'Jaw',             accept: ['jaw', 'mandible', 'jawbone', 'lower jaw'] },
  { name: 'Cheekbone',       accept: ['cheekbone', 'cheek bone', 'zygomatic', 'zygomatic bone', 'malar bone', 'malar'] },
  { name: 'Collarbone',      accept: ['collarbone', 'collar bone', 'clavicle'] },
  { name: 'Shoulder blade',  accept: ['shoulder blade', 'shoulderblade', 'scapula'] },
  { name: 'Breastbone',      accept: ['breastbone', 'breast bone', 'sternum', 'chest bone'] },
  { name: 'Ribs',            accept: ['ribs', 'rib', 'rib cage', 'ribcage', 'costae', 'costa'] },
  { name: 'Spine',           accept: ['spine', 'backbone', 'back bone', 'vertebral column', 'vertebrae', 'vertebra', 'spinal column'] },
  { name: 'Sacrum',          accept: ['sacrum', 'sacral bone'] },
  { name: 'Tailbone',        accept: ['tailbone', 'tail bone', 'coccyx'] },
  { name: 'Pelvis',          accept: ['pelvis', 'hip bone', 'hipbone', 'hip', 'pelvic bone', 'pelvic girdle'] },
  { name: 'Humerus',         accept: ['humerus', 'upper arm bone', 'arm bone', 'upper arm'] },
  { name: 'Radius',          accept: ['radius', 'outer forearm bone', 'outer forearm'] },
  { name: 'Ulna',            accept: ['ulna', 'inner forearm bone', 'inner forearm', 'elbow bone'] },
  { name: 'Wrist bones',     accept: ['wrist bones', 'wrist bone', 'carpals', 'carpal bones', 'carpal', 'wrist'] },
  { name: 'Hand bones',      accept: ['hand bones', 'hand bone', 'metacarpals', 'metacarpal bones', 'metacarpal', 'palm bones', 'palm bone'] },
  { name: 'Finger bones',    accept: ['finger bones', 'finger bone', 'phalanges', 'phalanx', 'fingers', 'digits', 'digital bones'] },
  { name: 'Femur',           accept: ['femur', 'thigh bone', 'thighbone', 'upper leg bone'] },
  { name: 'Kneecap',         accept: ['kneecap', 'knee cap', 'patella', 'knee bone'] },
  { name: 'Tibia',           accept: ['tibia', 'shin bone', 'shinbone', 'shin', 'lower leg bone'] },
  { name: 'Fibula',          accept: ['fibula', 'calf bone', 'outer shin', 'outer lower leg'] },
  { name: 'Heel bone',       accept: ['heel bone', 'heel', 'calcaneus', 'calcaneum'] },
  { name: 'Ankle bones',     accept: ['ankle bones', 'ankle bone', 'tarsals', 'tarsal bones', 'tarsal', 'ankle', 'anklebone'] },
  { name: 'Foot bones',      accept: ['foot bones', 'foot bone', 'metatarsals', 'metatarsal bones', 'metatarsal'] },
  { name: 'Toe bones',       accept: ['toe bones', 'toe bone', 'toes', 'toe phalanges', 'digital bones of foot'] },
  { name: 'Hyoid',           accept: ['hyoid', 'hyoid bone', 'throat bone', 'tongue bone', 'neck bone'] },
  { name: 'Nasal bone',      accept: ['nasal bone', 'nasal', 'nose bone', 'nose', 'nasal bones'] },
  { name: 'Occipital bone',  accept: ['occipital bone', 'occipital', 'back of skull', 'base of skull'] },
  { name: 'Frontal bone',    accept: ['frontal bone', 'frontal', 'forehead bone', 'forehead'] },
];

const BONE_MAP = new Map<string, string>();
BONE_DATA.forEach(b => b.accept.forEach(a => BONE_MAP.set(a, b.name)));

export const BONES = BONE_DATA.map(b => b.name);

export function matchBone(guess: string): string | null {
  return BONE_MAP.get(guess.trim().toLowerCase()) ?? null;
}
