'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ELEMENTS, ELEMENT_SECTIONS, matchElement } from '@/lib/periodic-table';
import { PeriodicTableDiagram } from '@/components/PeriodicTableDiagram';

type GameState = 'playing' | 'given-up' | 'complete';
const TOTAL = ELEMENTS.length;

export default function PeriodicTableQuiz() {
  const [guessed, setGuessed] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const saved = localStorage.getItem('periodic-table-guessed');
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window === 'undefined') return 'playing';
    try {
      return (localStorage.getItem('periodic-table-gamestate') as GameState) || 'playing';
    } catch { return 'playing'; }
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gameState === 'playing') inputRef.current?.focus();
  }, [gameState]);

  useEffect(() => {
    try { localStorage.setItem('periodic-table-guessed', JSON.stringify(Array.from(guessed))); }
    catch { /* ignore */ }
  }, [guessed]);

  useEffect(() => {
    try { localStorage.setItem('periodic-table-gamestate', gameState); }
    catch { /* ignore */ }
  }, [gameState]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (gameState !== 'playing') return;
    const matched = matchElement(input);
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

  const handleReset = () => {
    try {
      localStorage.removeItem('periodic-table-guessed');
      localStorage.removeItem('periodic-table-gamestate');
    } catch { /* ignore */ }
    setGuessed(new Set());
    setInput('');
    setGameState('playing');
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const isOver = gameState === 'given-up' || gameState === 'complete';

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-8">
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">← All Quizzes</Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Periodic Table of Elements</h1>
      <p className="text-gray-500 text-sm mb-4">Name all {TOTAL} elements — names or chemical symbols accepted</p>

      <div className="text-lg font-bold text-gray-800 mb-4 tabular-nums">
        {guessed.size}<span className="text-gray-400 font-normal">/{TOTAL}</span>
      </div>

      {gameState === 'playing' && (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type an element or symbol..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className={`border-2 rounded px-3 py-1.5 text-sm text-gray-900 outline-none focus:border-blue-500 w-64 ${
              shake ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          />
        </form>
      )}

      {gameState === 'complete' && <p className="text-green-600 font-semibold mb-4">You named all {TOTAL} elements!</p>}
      {gameState === 'given-up' && <p className="text-gray-500 mb-4">You got {guessed.size} out of {TOTAL}.</p>}

      <div className="flex gap-3 mb-6">
        {gameState === 'playing' && (
          <button onClick={() => setGameState('given-up')} className="px-3 py-1.5 border border-red-300 text-red-600 text-sm rounded hover:bg-red-50">
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

      <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '520px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '5px 8px', background: '#f9fafb', color: '#4b5563', width: '80px', textAlign: 'right', fontSize: '12px' }}>Number</th>
            <th style={{ border: '1px solid black', padding: '5px 8px', background: '#f9fafb', color: '#4b5563', width: '100px', textAlign: 'left', fontSize: '12px' }}>Shorthand</th>
            <th style={{ border: '1px solid black', padding: '5px 8px', background: '#f9fafb', color: '#4b5563', textAlign: 'left', fontSize: '12px' }}>Full name</th>
          </tr>
        </thead>
        <tbody>
          {ELEMENT_SECTIONS.map(section => (
            <Fragment key={section.header}>
              <tr>
                <td colSpan={3} style={{ border: '1px solid black', padding: '4px 10px', background: '#e5e7eb', fontWeight: 'bold', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#374151' }}>
                  {section.header}
                </td>
              </tr>
              {section.elements.map(element => {
                const isGuessed = guessed.has(element.name);
                const isMissed = isOver && !isGuessed;
                const revealed = isGuessed || isMissed;
                const answerStyle = {
                  border: '1px solid black',
                  padding: '4px 8px',
                  background: isGuessed ? '#dcfce7' : isMissed ? '#fee2e2' : '#f3f4f6',
                  color: isGuessed ? '#166534' : isMissed ? '#b91c1c' : '#f3f4f6',
                  fontWeight: isGuessed ? 500 : 'normal',
                  userSelect: 'none' as const,
                };

                return (
                  <tr key={element.atomicNumber}>
                    <td style={{ border: '1px solid black', padding: '4px 8px', background: '#f9fafb', color: '#6b7280', textAlign: 'right' }}>
                      {element.atomicNumber}
                    </td>
                    <td style={answerStyle}>{revealed ? element.symbol : '\u00A0'}</td>
                    <td style={answerStyle}>{revealed ? element.name : '\u00A0'}</td>
                  </tr>
                );
              })}
            </Fragment>
          ))}
        </tbody>
      </table>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Periodic Table</h2>
        <PeriodicTableDiagram guessed={guessed} isOver={isOver} />
      </div>
    </div>
  );
}
