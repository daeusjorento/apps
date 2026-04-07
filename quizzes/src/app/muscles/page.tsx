'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MUSCLES, MUSCLE_SECTIONS, matchMuscle } from '@/lib/muscles';
import { BodyDiagram, BodyPart } from '@/components/BodyDiagram';

type GameState = 'playing' | 'given-up' | 'complete';
const TOTAL = MUSCLES.length;

type TableRow =
  | { type: 'header'; text: string }
  | { type: 'muscle'; name: string; index: number };

const TABLE_ROWS: TableRow[] = [];
let _idx = 0;
MUSCLE_SECTIONS.forEach(s => {
  TABLE_ROWS.push({ type: 'header', text: s.header });
  s.muscles.forEach(name => TABLE_ROWS.push({ type: 'muscle', name, index: _idx++ }));
});

const MUSCLE_PARTS: BodyPart[] = [
  // Upper Body
  { name: 'Trapezius',         dots: [{ cx: 72, cy: 98, r: 9 }, { cx: 128, cy: 98, r: 9 }] },
  { name: 'Latissimus dorsi',  dots: [{ cx: 58, cy: 158, r: 9 }, { cx: 142, cy: 158, r: 9 }] },
  { name: 'Rhomboids',         dots: [{ cx: 84, cy: 132, r: 8 }, { cx: 116, cy: 132, r: 8 }] },
  { name: 'Pectoralis major',  dots: [{ cx: 80, cy: 140, r: 11 }, { cx: 120, cy: 140, r: 11 }] },
  { name: 'Deltoid',           dots: [{ cx: 48, cy: 118, r: 10 }, { cx: 152, cy: 118, r: 10 }] },
  { name: 'Rotator cuff',      dots: [{ cx: 50, cy: 108, r: 8 }, { cx: 150, cy: 108, r: 8 }] },
  { name: 'Serratus anterior', dots: [{ cx: 62, cy: 165, r: 8 }, { cx: 138, cy: 165, r: 8 }] },
  // Arms
  { name: 'Biceps brachii',   dots: [{ cx: 44, cy: 135, r: 8 }, { cx: 156, cy: 135, r: 8 }] },
  { name: 'Triceps brachii',  dots: [{ cx: 42, cy: 148, r: 8 }, { cx: 158, cy: 148, r: 8 }] },
  { name: 'Forearm muscles',  dots: [{ cx: 34, cy: 208, r: 8 }, { cx: 166, cy: 208, r: 8 }] },
  // Core
  { name: 'Rectus abdominis',     dots: [{ cx: 100, cy: 182, r: 9 }] },
  { name: 'Obliques',             dots: [{ cx: 73, cy: 190, r: 8 }, { cx: 127, cy: 190, r: 8 }] },
  { name: 'Transversus abdominis',dots: [{ cx: 100, cy: 198, r: 7 }] },
  { name: 'Erector spinae',       dots: [{ cx: 90, cy: 175, r: 6 }, { cx: 110, cy: 175, r: 6 }] },
  { name: 'Intercostals',         dots: [{ cx: 76, cy: 162, r: 7 }, { cx: 124, cy: 162, r: 7 }] },
  { name: 'Diaphragm',            dots: [{ cx: 100, cy: 212, r: 10 }] },
  // Lower Body
  { name: 'Quadriceps',      dots: [{ cx: 78, cy: 282, r: 10 }, { cx: 122, cy: 282, r: 10 }] },
  { name: 'Hamstrings',      dots: [{ cx: 78, cy: 308, r: 10 }, { cx: 122, cy: 308, r: 10 }] },
  { name: 'Gluteus maximus', dots: [{ cx: 74, cy: 248, r: 10 }, { cx: 126, cy: 248, r: 10 }] },
  { name: 'Gluteus medius',  dots: [{ cx: 62, cy: 242, r: 8 }, { cx: 138, cy: 242, r: 8 }] },
  { name: 'Hip flexors',     dots: [{ cx: 80, cy: 255, r: 7 }, { cx: 120, cy: 255, r: 7 }] },
  { name: 'Adductors',       dots: [{ cx: 84, cy: 298, r: 7 }, { cx: 116, cy: 298, r: 7 }] },
  { name: 'Piriformis',      dots: [{ cx: 76, cy: 258, r: 6 }, { cx: 124, cy: 258, r: 6 }] },
  { name: 'Sartorius',       dots: [{ cx: 82, cy: 302, r: 6 }, { cx: 118, cy: 302, r: 6 }] },
  { name: 'Calves',          dots: [{ cx: 72, cy: 380, r: 8 }, { cx: 128, cy: 380, r: 8 }] },
  { name: 'Soleus',          dots: [{ cx: 70, cy: 395, r: 7 }, { cx: 130, cy: 395, r: 7 }] },
  { name: 'Tibialis anterior', dots: [{ cx: 68, cy: 368, r: 7 }, { cx: 132, cy: 368, r: 7 }] },
];

export default function MusclesQuiz() {
  const [guessed, setGuessed] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const saved = localStorage.getItem('muscles-guessed');
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window === 'undefined') return 'playing';
    try {
      return (localStorage.getItem('muscles-gamestate') as GameState) || 'playing';
    } catch { return 'playing'; }
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gameState === 'playing') inputRef.current?.focus();
  }, [gameState]);

  useEffect(() => {
    try { localStorage.setItem('muscles-guessed', JSON.stringify(Array.from(guessed))); }
    catch { /* ignore */ }
  }, [guessed]);

  useEffect(() => {
    try { localStorage.setItem('muscles-gamestate', gameState); }
    catch { /* ignore */ }
  }, [gameState]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (gameState !== 'playing') return;
    const val = input.trim();
    if (!val) return;
    const matched = matchMuscle(val);
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
      localStorage.removeItem('muscles-guessed');
      localStorage.removeItem('muscles-gamestate');
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

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Muscles of the Human Body</h1>
      <p className="text-gray-500 text-sm mb-4">Name {TOTAL} major muscles — common or Latin names accepted</p>

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
            placeholder="Type a muscle name..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className={`border-2 rounded px-3 py-1.5 text-sm text-gray-900 outline-none focus:border-blue-500 w-64 ${
              shake ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          />
        </form>
      )}

      {gameState === 'complete' && <p className="text-green-600 font-semibold mb-4">You named all {TOTAL} muscles!</p>}
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
          <BodyDiagram parts={MUSCLE_PARTS} guessed={guessed} isOver={isOver} />
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
