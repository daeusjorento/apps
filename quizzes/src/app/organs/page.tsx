'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ORGANS, matchOrgan } from '@/lib/organs';
import { BodyDiagram, BodyPart } from '@/components/BodyDiagram';

type GameState = 'playing' | 'given-up' | 'complete';
const TOTAL = ORGANS.length;

const ORGAN_PARTS: BodyPart[] = [
  { name: 'Brain',           dots: [{ cx: 100, cy: 32, r: 20 }] },
  { name: 'Eyes',            dots: [{ cx: 86, cy: 40, r: 5 }, { cx: 114, cy: 40, r: 5 }] },
  { name: 'Ears',            dots: [{ cx: 66, cy: 44, r: 5 }, { cx: 134, cy: 44, r: 5 }] },
  { name: 'Tongue',          dots: [{ cx: 100, cy: 62, r: 6 }] },
  { name: 'Trachea',         dots: [{ cx: 103, cy: 82, r: 4 }] },
  { name: 'Esophagus',       dots: [{ cx: 97, cy: 108, r: 4 }] },
  { name: 'Thyroid',         dots: [{ cx: 100, cy: 88, r: 6 }] },
  { name: 'Thymus',          dots: [{ cx: 100, cy: 114, r: 7 }] },
  { name: 'Lungs',           dots: [{ cx: 78, cy: 148, r: 13 }, { cx: 122, cy: 148, r: 13 }] },
  { name: 'Heart',           dots: [{ cx: 90, cy: 145, r: 10 }] },
  { name: 'Diaphragm',       dots: [{ cx: 100, cy: 208, r: 12 }] },
  { name: 'Liver',           dots: [{ cx: 88, cy: 178, r: 12 }] },
  { name: 'Stomach',         dots: [{ cx: 96, cy: 190, r: 9 }] },
  { name: 'Spleen',          dots: [{ cx: 76, cy: 188, r: 7 }] },
  { name: 'Pancreas',        dots: [{ cx: 100, cy: 200, r: 7 }] },
  { name: 'Gallbladder',     dots: [{ cx: 106, cy: 182, r: 6 }] },
  { name: 'Adrenal Glands',  dots: [{ cx: 82, cy: 216, r: 6 }, { cx: 118, cy: 216, r: 6 }] },
  { name: 'Kidneys',         dots: [{ cx: 80, cy: 222, r: 8 }, { cx: 120, cy: 222, r: 8 }] },
  { name: 'Small Intestine', dots: [{ cx: 100, cy: 220, r: 11 }] },
  { name: 'Large Intestine', dots: [{ cx: 100, cy: 232, r: 10 }] },
  { name: 'Appendix',        dots: [{ cx: 126, cy: 242, r: 5 }] },
  { name: 'Bladder',         dots: [{ cx: 100, cy: 254, r: 7 }] },
  { name: 'Skin',            dots: [{ cx: 100, cy: 128, r: 18 }] },
  { name: 'Uterus',          dots: [{ cx: 100, cy: 258, r: 7 }] },
  { name: 'Ovaries',         dots: [{ cx: 88, cy: 262, r: 5 }, { cx: 112, cy: 262, r: 5 }] },
  { name: 'Testes',          dots: [{ cx: 88, cy: 266, r: 5 }, { cx: 112, cy: 266, r: 5 }] },
];

export default function OrgansQuiz() {
  const [guessed, setGuessed] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const saved = localStorage.getItem('organs-guessed');
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window === 'undefined') return 'playing';
    try {
      return (localStorage.getItem('organs-gamestate') as GameState) || 'playing';
    } catch { return 'playing'; }
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gameState === 'playing') inputRef.current?.focus();
  }, [gameState]);

  useEffect(() => {
    try { localStorage.setItem('organs-guessed', JSON.stringify(Array.from(guessed))); }
    catch { /* ignore */ }
  }, [guessed]);

  useEffect(() => {
    try { localStorage.setItem('organs-gamestate', gameState); }
    catch { /* ignore */ }
  }, [gameState]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (gameState !== 'playing') return;
    const val = input.trim();
    if (!val) return;
    const matched = matchOrgan(val);
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
      localStorage.removeItem('organs-guessed');
      localStorage.removeItem('organs-gamestate');
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

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Human Organs</h1>
      <p className="text-gray-500 text-sm mb-4">Name all {TOTAL} organs — common or medical names accepted</p>

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
            placeholder="Type an organ name..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className={`border-2 rounded px-3 py-1.5 text-sm text-gray-900 outline-none focus:border-blue-500 w-64 ${
              shake ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          />
        </form>
      )}

      {gameState === 'complete' && <p className="text-green-600 font-semibold mb-4">You named all {TOTAL} organs!</p>}
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
            {ORGANS.map((name, i) => {
              const isGuessed = guessed.has(name);
              const isMissed = isOver && !isGuessed;
              return (
                <tr key={name}>
                  <td style={{ border: '1px solid black', padding: '4px 8px', background: '#f9fafb', color: '#6b7280', width: '40px', textAlign: 'right' }}>
                    {i + 1}.
                  </td>
                  <td style={{
                    border: '1px solid black',
                    padding: '4px 8px',
                    width: '192px',
                    background: isGuessed ? '#dcfce7' : isMissed ? '#fee2e2' : '#f3f4f6',
                    color: isGuessed ? '#166534' : isMissed ? '#b91c1c' : '#f3f4f6',
                    fontWeight: isGuessed ? 500 : 'normal',
                    userSelect: 'none',
                  }}>
                    {isGuessed || isMissed ? name : '\u00A0'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="md:sticky md:top-8">
          <BodyDiagram parts={ORGAN_PARTS} guessed={guessed} isOver={isOver} />
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
