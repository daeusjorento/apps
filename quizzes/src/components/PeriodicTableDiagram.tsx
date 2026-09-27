'use client';

import { ELEMENTS } from '@/lib/periodic-table';

interface PeriodicTableDiagramProps {
  guessed: Set<string>;
  isOver: boolean;
}

const CELL_SIZE = 64;
const CELL_STEP = 68;
const LEFT = 30;
const TOP = 26;

function cellX(column: number) {
  return LEFT + (column - 1) * CELL_STEP;
}

function cellY(row: number) {
  if (row === 9) return 530;
  if (row === 10) return 598;
  return TOP + (row - 1) * CELL_STEP;
}

export function PeriodicTableDiagram({ guessed, isOver }: PeriodicTableDiagramProps) {
  return (
    <div>
      <div className="overflow-x-auto pb-2">
        <svg
          viewBox="0 0 1285 690"
          className="w-full min-w-[900px]"
          role="img"
          aria-label="Periodic table showing guessed, missed, and remaining elements"
        >
          <text x="218" y="554" textAnchor="end" fontSize="13" fill="#6b7280">Lanthanoids</text>
          <text x="218" y="622" textAnchor="end" fontSize="13" fill="#6b7280">Actinoids</text>

          {[
            { row: 6, label: '57–71' },
            { row: 7, label: '89–103' },
          ].map(item => (
            <g key={item.row}>
              <rect
                x={cellX(3)}
                y={cellY(item.row)}
                width={CELL_SIZE}
                height={CELL_SIZE}
                rx="2"
                fill="#f9fafb"
                stroke="#9ca3af"
                strokeDasharray="4 3"
              />
              <text
                x={cellX(3) + CELL_SIZE / 2}
                y={cellY(item.row) + CELL_SIZE / 2 + 4}
                textAnchor="middle"
                fontSize="11"
                fill="#9ca3af"
              >
                {item.label}
              </text>
            </g>
          ))}

          {ELEMENTS.map(element => {
            const isGuessed = guessed.has(element.name);
            const isMissed = isOver && !isGuessed;
            const revealed = isGuessed || isMissed;
            const fill = isGuessed ? '#374151' : isMissed ? '#d1d5db' : '#f3f4f6';
            const textColor = isGuessed ? '#ffffff' : '#374151';
            const x = cellX(element.column);
            const y = cellY(element.row);

            return (
              <g key={element.atomicNumber}>
                <rect
                  x={x}
                  y={y}
                  width={CELL_SIZE}
                  height={CELL_SIZE}
                  rx="2"
                  fill={fill}
                  stroke="#4b5563"
                  strokeWidth="1"
                />
                {revealed && (
                  <>
                    <text x={x + 5} y={y + 12} fontSize="9" fill={textColor}>{element.atomicNumber}</text>
                    <text x={x + CELL_SIZE / 2} y={y + 37} textAnchor="middle" fontSize="22" fontWeight="700" fill={textColor}>
                      {element.symbol}
                    </text>
                    <text x={x + CELL_SIZE / 2} y={y + 53} textAnchor="middle" fontSize="8" fill={textColor}>
                      {element.name}
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-500">
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-gray-700" /> Guessed</span>
        {isOver && <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-gray-300 border border-gray-400" /> Missed</span>}
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-gray-100 border border-gray-500" /> Remaining</span>
      </div>
    </div>
  );
}
