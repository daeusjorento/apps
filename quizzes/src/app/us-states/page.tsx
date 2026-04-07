'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { US_STATES, normalizeGuess } from '@/lib/states';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

type GameState = 'playing' | 'given-up' | 'complete';

function USMap({ guessed, isOver }: { guessed: Set<string>; isOver: boolean }) {
  return (
    <ComposableMap projection="geoAlbersUsa" style={{ width: '100%', height: 'auto' }}>
      <Geographies geography={GEO_URL}>
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo: any) => {
            const name: string = geo.properties.name;
            const isGuessed = guessed.has(name);
            const isMissed = isOver && !isGuessed;
            const fill = isGuessed ? '#374151' : isMissed ? '#9ca3af' : '#e5e7eb';
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fill}
                stroke="#fff"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}

export default function USStatesQuiz() {
  const [guessed, setGuessed] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const saved = localStorage.getItem('us-states-guessed');
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window === 'undefined') return 'playing';
    try {
      return (localStorage.getItem('us-states-gamestate') as GameState) || 'playing';
    } catch { return 'playing'; }
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gameState === 'playing') inputRef.current?.focus();
  }, [gameState]);

  useEffect(() => {
    try { localStorage.setItem('us-states-guessed', JSON.stringify(Array.from(guessed))); }
    catch { /* ignore */ }
  }, [guessed]);

  useEffect(() => {
    try { localStorage.setItem('us-states-gamestate', gameState); }
    catch { /* ignore */ }
  }, [gameState]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (gameState !== 'playing') return;
    const val = input.trim();
    if (!val) return;
    const matched = normalizeGuess(val);
    if (matched && !guessed.has(matched)) {
      const next = new Set(guessed).add(matched);
      setGuessed(next);
      setInput('');
      if (next.size === 50) setGameState('complete');
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleGiveUp = () => setGameState('given-up');

  const handleReset = () => {
    try {
      localStorage.removeItem('us-states-guessed');
      localStorage.removeItem('us-states-gamestate');
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

      <h1 className="text-2xl font-bold text-gray-900 mb-1">US States</h1>
      <p className="text-gray-500 text-sm mb-4">Type a state name and press Enter</p>

      <div className="text-lg font-bold text-gray-800 mb-4 tabular-nums">
        {score}<span className="text-gray-400 font-normal">/50</span>
      </div>

      {gameState === 'playing' && (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a state name..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className={`border-2 rounded px-3 py-1.5 text-sm text-gray-900 outline-none focus:border-blue-500 w-64 ${
              shake ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          />
        </form>
      )}

      {gameState === 'complete' && <p className="text-green-600 font-semibold mb-4">You got all 50 states!</p>}
      {gameState === 'given-up' && <p className="text-gray-500 mb-4">You got {score} out of 50.</p>}

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
            {US_STATES.map((state, i) => {
              const isGuessed = guessed.has(state);
              const isMissed = isOver && !isGuessed;
              return (
                <tr key={state}>
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
                    {isGuessed || isMissed ? state : '\u00A0'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="w-full md:w-[520px] md:sticky md:top-8">
          <USMap guessed={guessed} isOver={isOver} />
          <div className="flex gap-4 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-gray-700" /> Guessed</span>
            {isOver && <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-gray-400" /> Missed</span>}
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-gray-200 border border-gray-300" /> Remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
}
