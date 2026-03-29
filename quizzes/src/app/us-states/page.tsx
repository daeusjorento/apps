'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { US_STATES, normalizeGuess } from '@/lib/states';

const USMap = dynamic(() => import('@/components/USMap'), { ssr: false });

type GameState = 'playing' | 'given-up' | 'complete';

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
    try {
      localStorage.setItem('us-states-guessed', JSON.stringify(Array.from(guessed)));
    } catch { /* ignore */ }
  }, [guessed]);

  useEffect(() => {
    try {
      localStorage.setItem('us-states-gamestate', gameState);
    } catch { /* ignore */ }
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
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      {/* Back link */}
      <div className="w-full max-w-6xl mb-6">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← All Quizzes
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-1">US States</h1>
      <p className="text-gray-400 text-sm mb-5">Type a state name and press Enter</p>

      {/* Counter */}
      <div className="text-2xl font-bold text-gray-800 mb-4 tabular-nums">
        {score}
        <span className="text-gray-400 font-normal text-lg">/50 states</span>
      </div>

      {/* Input */}
      {gameState === 'playing' && (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mb-5">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a state name..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className={`w-full border-2 rounded-lg px-4 py-2 text-gray-900 text-base outline-none focus:border-blue-500 transition-colors ${
              shake ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          />
        </form>
      )}

      {/* Status messages */}
      {gameState === 'complete' && (
        <p className="text-green-600 font-semibold mb-4">🎉 You got all 50 states!</p>
      )}
      {gameState === 'given-up' && (
        <p className="text-gray-500 mb-4">
          You got <span className="font-bold text-gray-800">{score}</span> out of 50.
        </p>
      )}

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        {gameState === 'playing' && (
          <button
            onClick={handleGiveUp}
            className="px-4 py-2 rounded-lg border border-red-300 text-red-600 text-sm font-medium hover:bg-red-50 transition-colors"
          >
            Give Up
          </button>
        )}
        {isOver && (
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Play Again
          </button>
        )}
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-500 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Grid + Map */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-start">
        {/* Numbered grid — 5 cols × 10 rows, alphabetical */}
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <div className="grid grid-cols-5 gap-1.5">
            {US_STATES.map((state, i) => {
              const isGuessed = guessed.has(state);
              const isMissed = isOver && !isGuessed;

              return (
                <div
                  key={state}
                  className={`
                    relative rounded-md border-2 px-1 py-2 text-center transition-all duration-300
                    ${isGuessed
                      ? 'bg-green-100 border-green-400 state-pop'
                      : isMissed
                      ? 'bg-red-100 border-red-300'
                      : 'bg-white border-black'
                    }
                  `}
                >
                  <span className={`
                    absolute top-0.5 left-1 text-[9px] font-bold leading-none
                    ${isGuessed ? 'text-green-600' : isMissed ? 'text-red-500' : 'text-black'}
                  `}>
                    {i + 1}
                  </span>
                  <span className={`
                    block text-[10px] font-semibold leading-tight mt-2
                    ${isGuessed ? 'text-green-800' : isMissed ? 'text-red-700' : 'text-white select-none'}
                  `}>
                    {isGuessed || isMissed ? state : '\u00A0'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SVG Map */}
        <div className="w-full lg:flex-1">
          <USMap guessed={guessed} gameState={gameState} />
        </div>
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }
        @keyframes pop {
          0% { transform: scale(0.85); }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .state-pop { animation: pop 0.25s ease; }
      `}</style>
    </div>
  );
}
