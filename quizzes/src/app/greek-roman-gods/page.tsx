'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { TOTAL_GODS, GOD_ROWS, matchGod } from '@/lib/greek-roman-gods';

type GameState = 'playing' | 'given-up' | 'complete';

export default function GreekRomanGodsQuiz() {
  const [guessed, setGuessed] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const saved = localStorage.getItem('greek-roman-gods-guessed');
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window === 'undefined') return 'playing';
    try {
      return (localStorage.getItem('greek-roman-gods-gamestate') as GameState) || 'playing';
    } catch { return 'playing'; }
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gameState === 'playing') inputRef.current?.focus();
  }, [gameState]);

  useEffect(() => {
    try { localStorage.setItem('greek-roman-gods-guessed', JSON.stringify(Array.from(guessed))); }
    catch { /* ignore */ }
  }, [guessed]);

  useEffect(() => {
    try { localStorage.setItem('greek-roman-gods-gamestate', gameState); }
    catch { /* ignore */ }
  }, [gameState]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (gameState !== 'playing') return;
    const val = input.trim();
    if (!val) return;
    const matched = matchGod(val);
    if (matched && !guessed.has(matched)) {
      const next = new Set(guessed).add(matched);
      setGuessed(next);
      setInput('');
      if (next.size === TOTAL_GODS) setGameState('complete');
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleGiveUp = () => setGameState('given-up');

  const handleReset = () => {
    try {
      localStorage.removeItem('greek-roman-gods-guessed');
      localStorage.removeItem('greek-roman-gods-gamestate');
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

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Greek &amp; Roman Gods</h1>
      <p className="text-gray-500 text-sm mb-4">Name all {TOTAL_GODS} deities — Greek or Roman names accepted</p>

      <div className="text-lg font-bold text-gray-800 mb-4 tabular-nums">
        {score}<span className="text-gray-400 font-normal">/{TOTAL_GODS}</span>
      </div>

      {gameState === 'playing' && (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a god's name..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className={`border-2 rounded px-3 py-1.5 text-sm text-gray-900 outline-none focus:border-blue-500 w-64 ${
              shake ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          />
        </form>
      )}

      {gameState === 'complete' && <p className="text-green-600 font-semibold mb-4">You named all {TOTAL_GODS} deities!</p>}
      {gameState === 'given-up' && <p className="text-gray-500 mb-4">You got {score} out of {TOTAL_GODS}.</p>}

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

      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {GOD_ROWS.map(row => {
            if (row.type === 'header') {
              return (
                <tr key={`h-${row.text}`}>
                  <td colSpan={4} style={{ border: '1px solid black', padding: '4px 10px', background: '#e5e7eb', fontWeight: 'bold', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#374151' }}>
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
                  width: '140px',
                  background: isGuessed ? '#dcfce7' : isMissed ? '#fee2e2' : '#f3f4f6',
                  color: isGuessed ? '#166534' : isMissed ? '#b91c1c' : '#f3f4f6',
                  fontWeight: isGuessed ? 500 : 'normal',
                  userSelect: 'none',
                }}>
                  {isGuessed || isMissed ? row.name : '\u00A0'}
                </td>
                <td style={{
                  border: '1px solid black',
                  padding: '4px 8px',
                  width: '100px',
                  background: '#f9fafb',
                  color: isGuessed || isMissed ? '#6b7280' : '#d1d5db',
                  fontSize: '12px',
                  userSelect: 'none',
                }}>
                  {isGuessed || isMissed ? row.roman : '\u00A0'}
                </td>
                <td style={{
                  border: '1px solid black',
                  padding: '4px 8px',
                  width: '220px',
                  background: '#f9fafb',
                  color: '#9ca3af',
                  fontSize: '12px',
                }}>
                  {row.domain}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
