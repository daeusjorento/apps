const ORGAN_DATA: { name: string; accept: string[] }[] = [
  { name: 'Brain',            accept: ['brain', 'cerebrum', 'cerebral cortex'] },
  { name: 'Eyes',             accept: ['eyes', 'eye'] },
  { name: 'Ears',             accept: ['ears', 'ear'] },
  { name: 'Tongue',           accept: ['tongue'] },
  { name: 'Trachea',          accept: ['trachea', 'windpipe'] },
  { name: 'Esophagus',        accept: ['esophagus', 'oesophagus', 'food pipe', 'gullet'] },
  { name: 'Thyroid',          accept: ['thyroid', 'thyroid gland'] },
  { name: 'Thymus',           accept: ['thymus', 'thymus gland'] },
  { name: 'Lungs',            accept: ['lungs', 'lung', 'pulmonary'] },
  { name: 'Heart',            accept: ['heart', 'cardiac'] },
  { name: 'Diaphragm',        accept: ['diaphragm'] },
  { name: 'Liver',            accept: ['liver', 'hepatic'] },
  { name: 'Stomach',          accept: ['stomach', 'gastric'] },
  { name: 'Spleen',           accept: ['spleen', 'splenic'] },
  { name: 'Pancreas',         accept: ['pancreas', 'pancreatic'] },
  { name: 'Gallbladder',      accept: ['gallbladder', 'gall bladder', 'bile sac'] },
  { name: 'Adrenal Glands',   accept: ['adrenal glands', 'adrenal gland', 'adrenals', 'suprarenal glands', 'suprarenal gland'] },
  { name: 'Kidneys',          accept: ['kidneys', 'kidney', 'renal'] },
  { name: 'Small Intestine',  accept: ['small intestine', 'small bowel', 'small intestines'] },
  { name: 'Large Intestine',  accept: ['large intestine', 'large bowel', 'large intestines', 'colon'] },
  { name: 'Appendix',         accept: ['appendix'] },
  { name: 'Bladder',          accept: ['bladder', 'urinary bladder'] },
  { name: 'Skin',             accept: ['skin', 'dermis', 'epidermis'] },
  { name: 'Uterus',           accept: ['uterus', 'womb'] },
  { name: 'Ovaries',          accept: ['ovaries', 'ovary'] },
  { name: 'Testes',           accept: ['testes', 'testis', 'testicles', 'testicle'] },
];

const ORGAN_MAP = new Map<string, string>();
ORGAN_DATA.forEach(o => o.accept.forEach(a => ORGAN_MAP.set(a, o.name)));

export const ORGANS = ORGAN_DATA.map(o => o.name);

export function matchOrgan(guess: string): string | null {
  return ORGAN_MAP.get(guess.trim().toLowerCase()) ?? null;
}
