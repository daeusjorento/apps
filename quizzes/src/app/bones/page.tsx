'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BONES, BONE_SECTIONS, matchBone } from '@/lib/bones';
import { BodyDiagram, BodyPart } from '@/components/BodyDiagram';

type GameState = 'playing' | 'given-up' | 'complete';
const TOTAL = BONES.length;

type TableRow =
  | { type: 'header'; text: string }
  | { type: 'bone'; name: string; index: number };

const TABLE_ROWS: TableRow[] = [];
let _idx = 0;
BONE_SECTIONS.forEach(s => {
  TABLE_ROWS.push({ type: 'header', text: s.header });
  s.bones.forEach(name => TABLE_ROWS.push({ type: 'bone', name, index: _idx++ }));
});

// Approximate positions on a 200×490 body silhouette
const BONE_PARTS: BodyPart[] = [
  // Skull & Face
  { name: 'Skull',           dots: [{ cx: 100, cy: 38, r: 22 }] },
  { name: 'Jaw',             dots: [{ cx: 100, cy: 65, r: 8 }] },
  { name: 'Cheekbone',       dots: [{ cx: 82, cy: 46, r: 6 }, { cx: 118, cy: 46, r: 6 }] },
  { name: 'Nasal bone',      dots: [{ cx: 100, cy: 51, r: 5 }] },
  { name: 'Occipital bone',  dots: [{ cx: 100, cy: 22, r: 8 }] },
  { name: 'Frontal bone',    dots: [{ cx: 100, cy: 26, r: 8 }] },
  { name: 'Hyoid',           dots: [{ cx: 100, cy: 78, r: 5 }] },
  // Spine & Torso
  { name: 'Spine',           dots: [{ cx: 100, cy: 155, r: 5 }] },
  { name: 'Sacrum',          dots: [{ cx: 100, cy: 242, r: 9 }] },
  { name: 'Tailbone',        dots: [{ cx: 100, cy: 256, r: 6 }] },
  { name: 'Breastbone',      dots: [{ cx: 100, cy: 145, r: 6 }] },
  { name: 'Ribs',            dots: [{ cx: 76, cy: 153, r: 8 }, { cx: 124, cy: 153, r: 8 }] },
  { name: 'Collarbone',      dots: [{ cx: 74, cy: 94, r: 7 }, { cx: 126, cy: 94, r: 7 }] },
  { name: 'Shoulder blade',  dots: [{ cx: 52, cy: 125, r: 9 }, { cx: 148, cy: 125, r: 9 }] },
  { name: 'Pelvis',          dots: [{ cx: 100, cy: 248, r: 13 }] },
  // Arms & Hands
  { name: 'Humerus',         dots: [{ cx: 44, cy: 140, r: 8 }, { cx: 156, cy: 140, r: 8 }] },
  { name: 'Radius',          dots: [{ cx: 37, cy: 207, r: 7 }, { cx: 163, cy: 207, r: 7 }] },
  { name: 'Ulna',            dots: [{ cx: 28, cy: 207, r: 7 }, { cx: 172, cy: 207, r: 7 }] },
  { name: 'Wrist bones',     dots: [{ cx: 32, cy: 250, r: 6 }, { cx: 168, cy: 250, r: 6 }] },
  { name: 'Hand bones',      dots: [{ cx: 33, cy: 262, r: 7 }, { cx: 167, cy: 262, r: 7 }] },
  { name: 'Finger bones',    dots: [{ cx: 33, cy: 276, r: 7 }, { cx: 167, cy: 276, r: 7 }] },
  // Legs & Feet
  { name: 'Femur',           dots: [{ cx: 78, cy: 292, r: 9 }, { cx: 122, cy: 292, r: 9 }] },
  { name: 'Kneecap',         dots: [{ cx: 76, cy: 342, r: 7 }, { cx: 124, cy: 342, r: 7 }] },
  { name: 'Tibia',           dots: [{ cx: 74, cy: 374, r: 8 }, { cx: 126, cy: 374, r: 8 }] },
  { name: 'Fibula',          dots: [{ cx: 65, cy: 376, r: 6 }, { cx: 135, cy: 376, r: 6 }] },
  { name: 'Heel bone',       dots: [{ cx: 65, cy: 446, r: 7 }, { cx: 135, cy: 446, r: 7 }] },
  { name: 'Ankle bones',     dots: [{ cx: 65, cy: 432, r: 6 }, { cx: 135, cy: 432, r: 6 }] },
  { name: 'Foot bones',      dots: [{ cx: 68, cy: 450, r: 8 }, { cx: 132, cy: 450, r: 8 }] },
  { name: 'Toe bones',       dots: [{ cx: 72, cy: 462, r: 7 }, { cx: 128, cy: 462, r: 7 }] },
];

export default function BonesQuiz() {
  const [guessed, setGuessed] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const saved = localStorage.getItem('bones-guessed');
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window === 'undefined') return 'playing';
    try {
      return (localStorage.getItem('bones-gamestate') as GameState) || 'playing';
    } catch { return 'playing'; }
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gameState === 'playing') inputRef.current?.focus();
  }, [gameState]);

  useEffect(() => {
    try { localStorage.setItem('bones-guessed', JSON.stringify(Array.from(guessed))); }
    catch { /* ignore */ }
  }, [guessed]);

  useEffect(() => {
    try { localStorage.setItem('bones-gamestate', gameState); }
    catch { /* ignore */ }
  }, [gameState]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (gameState !== 'playing') return;
    const val = input.trim();
    if (!val) return;
    const matched = matchBone(val);
    if (matched && !guessed.has(matched)) {
      const next = new Set(guessed).add(matched);
      setGuessed(next);
      setInput('');
      if (next.size === TOTAL) setGameState('complete');
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleGiveUp = () => setGameState('given-up');

  const handleReset = () => {
    try {
      localStorage.removeItem('bones-guessed');
      localStorage.removeItem('bones-gamestate');
    } catch { /* ignore */ }
    setGuessed(new Set());
    setInput('');
    setGameState('playing');
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const score = guessed.size;
  const isOver = gameState === 'given-up' || gameState === 'complete';

  return (
    <div className="min-h-screen bg-white px-8 py-8">
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">← All Quizzes</Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Bones of the Human Body</h1>
      <p className="text-gray-500 text-sm mb-4">Name {TOTAL} major bones — common or Latin names accepted</p>

      <div className="text-lg font-bold text-gray-800 mb-4 tabular-nums">
        {score}<span className="text-gray-400 font-normal">/{TOTAL}</span>
      </div>

      {gameState === 'playing' && (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a bone name..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className={`border-2 rounded px-3 py-1.5 text-sm text-gray-900 outline-none focus:border-blue-500 w-64 ${
              shake ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          />
        </form>
      )}

      {gameState === 'complete' && <p className="text-green-600 font-semibold mb-4">You named all {TOTAL} bones!</p>}
      {gameState === 'given-up' && <p className="text-gray-500 mb-4">You got {score} out of {TOTAL}.</p>}

      <div className="flex gap-3 mb-6">
        {gameState === 'playing' && (
          <button onClick={handleGiveUp} className="px-3 py-1.5 border border-red-300 text-red-600 text-sm rounded hover:bg-red-50">
            Give Up
          </button>
        )}
        {isOver && (
          <button onClick={handleReset} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
            Play Again
          </button>
        )}
        <button onClick={handleReset} className="px-3 py-1.5 border border-gray-300 text-gray-500 text-sm rounded hover:bg-gray-50">
          Reset
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <table style={{ borderCollapse: 'collapse', flexShrink: 0 }}>
          <tbody>
            {TABLE_ROWS.map(row => {
              if (row.type === 'header') {
                return (
                  <tr key={`h-${row.text}`}>
                    <td colSpan={2} style={{ border: '1px solid black', padding: '4px 10px', background: '#e5e7eb', fontWeight: 'bold', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#374151' }}>
                      {row.text}
                    </td>
                  </tr>
                );
              }
              const isGuessed = guessed.has(row.name);
              const isMissed = isOver && !isGuessed;
              return (
                <tr key={row.name}>
                  <td style={{ border: '1px solid black', padding: '4px 8px', background: '#f9fafb', color: '#6b7280', width: '40px', textAlign: 'right' }}>
                    {row.index + 1}.
                  </td>
                  <td style={{
                    border: '1px solid black',
                    padding: '4px 8px',
                    width: '220px',
                    background: isGuessed ? '#dcfce7' : isMissed ? '#fee2e2' : '#f3f4f6',
                    color: isGuessed ? '#166534' : isMissed ? '#b91c1c' : '#f3f4f6',
                    fontWeight: isGuessed ? 500 : 'normal',
                    userSelect: 'none',
                  }}>
                    {isGuessed || isMissed ? row.name : '\u00A0'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="md:sticky md:top-8">
          <BodyDiagram parts={BONE_PARTS} guessed={guessed} isOver={isOver} />
          <div className="flex gap-4 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full bg-gray-700" /> Guessed</span>
            {isOver && <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full bg-gray-400" /> Missed</span>}
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full border border-gray-400" /> Remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
}
