export const BONES: string[] = [
  // Cranial (skull)
  'Frontal bone',
  'Parietal bone',
  'Temporal bone',
  'Occipital bone',
  'Sphenoid bone',
  'Ethmoid bone',
  // Facial
  'Maxilla',
  'Mandible',
  'Zygomatic bone',
  'Nasal bone',
  'Lacrimal bone',
  'Palatine bone',
  'Inferior nasal concha',
  'Vomer',
  // Ear ossicles
  'Malleus',
  'Incus',
  'Stapes',
  // Neck
  'Hyoid bone',
  // Vertebral column
  'Atlas',
  'Axis',
  'Cervical vertebra',
  'Thoracic vertebra',
  'Lumbar vertebra',
  'Sacrum',
  'Coccyx',
  // Thorax
  'Sternum',
  'Rib',
  // Pectoral girdle
  'Clavicle',
  'Scapula',
  // Upper arm
  'Humerus',
  // Forearm
  'Radius',
  'Ulna',
  // Carpals
  'Scaphoid',
  'Lunate',
  'Triquetrum',
  'Pisiform',
  'Trapezium',
  'Trapezoid',
  'Capitate',
  'Hamate',
  // Hand
  'Metacarpal',
  'Proximal phalanx',
  'Middle phalanx',
  'Distal phalanx',
  // Pelvic girdle
  'Ilium',
  'Ischium',
  'Pubis',
  // Lower limb
  'Femur',
  'Patella',
  'Tibia',
  'Fibula',
  // Tarsals
  'Calcaneus',
  'Talus',
  'Navicular',
  'Cuboid',
  'Medial cuneiform',
  'Intermediate cuneiform',
  'Lateral cuneiform',
  // Foot
  'Metatarsal',
];

// Also accept names without " bone" suffix (e.g. "frontal" → "Frontal bone")
const BONES_MAP = new Map<string, string>();
BONES.forEach(bone => {
  const lower = bone.toLowerCase();
  BONES_MAP.set(lower, bone);
  if (lower.endsWith(' bone')) {
    BONES_MAP.set(lower.slice(0, -5), bone);
  }
});

export function matchBone(guess: string): string | null {
  return BONES_MAP.get(guess.trim().toLowerCase()) ?? null;
}
