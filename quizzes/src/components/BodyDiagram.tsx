'use client';

export interface BPDot {
  cx: number;
  cy: number;
  r: number;
}

export interface BodyPart {
  name: string;
  dots: BPDot[];
}

interface BodyDiagramProps {
  parts: BodyPart[];
  guessed: Set<string>;
  isOver: boolean;
}

const SILHOUETTE_FILL = '#d1d5db';

export function BodyDiagram({ parts, guessed, isOver }: BodyDiagramProps) {
  return (
    <svg viewBox="0 0 200 490" style={{ width: '100%', maxWidth: 200, height: 'auto' }}>
      {/* ── Silhouette ── */}
      {/* Head */}
      <circle cx="100" cy="42" r="30" fill={SILHOUETTE_FILL} />
      {/* Neck */}
      <rect x="90" y="70" width="20" height="20" rx="3" fill={SILHOUETTE_FILL} />
      {/* Torso */}
      <rect x="60" y="88" width="80" height="148" rx="6" fill={SILHOUETTE_FILL} />
      {/* Left upper arm */}
      <rect x="34" y="90" width="24" height="96" rx="5" fill={SILHOUETTE_FILL} />
      {/* Left lower arm */}
      <rect x="26" y="184" width="20" height="68" rx="5" fill={SILHOUETTE_FILL} />
      {/* Left hand */}
      <ellipse cx="34" cy="264" rx="14" ry="18" fill={SILHOUETTE_FILL} />
      {/* Right upper arm */}
      <rect x="142" y="90" width="24" height="96" rx="5" fill={SILHOUETTE_FILL} />
      {/* Right lower arm */}
      <rect x="154" y="184" width="20" height="68" rx="5" fill={SILHOUETTE_FILL} />
      {/* Right hand */}
      <ellipse cx="166" cy="264" rx="14" ry="18" fill={SILHOUETTE_FILL} />
      {/* Left upper leg */}
      <rect x="62" y="234" width="32" height="108" rx="5" fill={SILHOUETTE_FILL} />
      {/* Left lower leg */}
      <rect x="60" y="340" width="28" height="90" rx="5" fill={SILHOUETTE_FILL} />
      {/* Left foot */}
      <ellipse cx="66" cy="442" rx="18" ry="10" fill={SILHOUETTE_FILL} />
      {/* Right upper leg */}
      <rect x="106" y="234" width="32" height="108" rx="5" fill={SILHOUETTE_FILL} />
      {/* Right lower leg */}
      <rect x="112" y="340" width="28" height="90" rx="5" fill={SILHOUETTE_FILL} />
      {/* Right foot */}
      <ellipse cx="134" cy="442" rx="18" ry="10" fill={SILHOUETTE_FILL} />

      {/* ── Body-part dots ── */}
      {parts.map(part => {
        const isGuessed = guessed.has(part.name);
        const isMissed = isOver && !isGuessed;
        const fill = isGuessed ? '#374151' : isMissed ? '#9ca3af' : 'none';
        const stroke = isGuessed || isMissed ? 'none' : '#9ca3af';
        return part.dots.map((d, i) => (
          <circle
            key={`${part.name}-${i}`}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill={fill}
            stroke={stroke}
            strokeWidth={1.5}
            opacity={0.85}
          />
        ));
      })}
    </svg>
  );
}
