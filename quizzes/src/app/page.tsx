'use client';

import { useState, useRef, useEffect } from 'react';
import { US_STATES, normalizeGuess } from '@/lib/states';

type GameState = 'playing' | 'given-up' | 'complete';

export default function QuizPage() {
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [gameState, setGameState] = useState<GameState>('playing');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gameState === 'playing') inputRef.current?.focus();
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
    setGuessed(new Set());
    setInput('');
    setGameState('playing');
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const score = guessed.size;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Name All 50 States</h1>
      <p className="text-gray-500 mb-6 text-sm">Type a US state and press Enter</p>

      {/* Counter */}
      <div className="text-2xl font-bold text-gray-800 mb-4 tabular-nums">
        {score}<span className="text-gray-400 font-normal">/50 states</span>
      </div>

      {/* Input */}
      {gameState === 'playing' && (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mb-6">
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

      {/* Action buttons */}
      <div className="flex gap-3 mb-8">
        {gameState === 'playing' && (
          <button
            onClick={handleGiveUp}
            className="px-4 py-2 rounded-lg border border-red-300 text-red-600 text-sm font-medium hover:bg-red-50 transition-colors"
          >
            Give Up
          </button>
        )}
        {(gameState === 'given-up' || gameState === 'complete') && (
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Play Again
          </button>
        )}
      </div>

      {/* Grid: 5 cols x 10 rows, alphabetical */}
      <div className="grid grid-cols-5 gap-2 w-full max-w-2xl">
        {US_STATES.map(state => {
          const isGuessed = guessed.has(state);
          const isMissed = gameState !== 'playing' && !isGuessed;

          return (
            <div
              key={state}
              className={`
                rounded-lg px-2 py-2 text-xs text-center font-medium border transition-all duration-300
                ${isGuessed
                  ? 'bg-green-100 border-green-400 text-green-800 state-pop'
                  : isMissed
                  ? 'bg-red-100 border-red-300 text-red-700'
                  : 'bg-gray-100 border-gray-200 text-gray-100 select-none'
                }
              `}
            >
              {isGuessed || isMissed ? state : '\u00A0'}
            </div>
          );
        })}
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
          60% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .state-pop { animation: pop 0.3s ease; }
      `}</style>
    </div>
  );
}
