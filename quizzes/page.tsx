'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { US_STATES, normalizeGuess } from '@/lib/states';
import Link from 'next/link';

type GameState = 'playing' | 'given-up' | 'complete';

export default function QuizPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>('playing');
  const [saved, setSaved] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && !user) router.push('/');
  }, [user, loading, router]);

  useEffect(() => {
    if (gameState === 'playing') inputRef.current?.focus();
  }, [gameState]);

  const saveAttempt = useCallback(async (score: number, gaveUp: boolean) => {
    if (!user || saved) return;
    setSaved(true);
    try {
      await addDoc(collection(db, 'attempts'), {
        uid: user.uid,
        displayName: user.displayName || 'Anonymous',
        photoURL: user.photoURL || null,
        score,
        gaveUp,
        total: 50,
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.error('Failed to save attempt:', e);
      setSaved(false);
    }
  }, [user, saved]);

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (gameState !== 'playing') return;
    const val = input.trim();
    if (!val) return;

    const matched = normalizeGuess(val);
    if (matched && !guessed.has(matched)) {
      const next = new Set(guessed).add(matched);
      setGuessed(next);
      setLastCorrect(matched);
      setInput('');
      setTimeout(() => setLastCorrect(null), 1500);

      if (next.size === 50) {
        setGameState('complete');
        saveAttempt(50, false);
      }
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleGiveUp = () => {
    setGameState('given-up');
    saveAttempt(guessed.size, true);
  };

  const handleRestart = () => {
    setGuessed(new Set());
    setInput('');
    setGameState('playing');
    setSaved(false);
    setLastCorrect(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const missed = US_STATES.filter(s => !guessed.has(s));
  const score = guessed.size;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0f172a' }}>
      {/* Navbar */}
      <nav className="navbar bg-base-300/60 backdrop-blur border-b border-base-content/10 px-4">
        <div className="flex-1">
          <span className="text-lg font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            🗺️ 50 States
          </span>
        </div>
        <div className="flex-none flex items-center gap-3">
          <Link href="/leaderboard" className="btn btn-ghost btn-sm">
            🏆 Leaderboard
          </Link>
          <div className="flex items-center gap-2">
            {user.photoURL && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full" />
            )}
            <span className="text-sm hidden sm:block text-base-content/70">{user.displayName}</span>
          </div>
          <button onClick={signOut} className="btn btn-ghost btn-sm">Sign out</button>
        </div>
      </nav>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {/* Score + status */}
        <div className="text-center mb-6">
          <div className="text-6xl font-extrabold tabular-nums" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="text-primary">{score}</span>
            <span className="text-base-content/30">/50</span>
          </div>
          {gameState === 'complete' && (
            <div className="alert alert-success mt-3 max-w-sm mx-auto">
              <span>🎉 You got all 50 states! Incredible!</span>
            </div>
          )}
          {gameState === 'given-up' && (
            <div className="mt-3 text-base-content/60">
              You got <strong className="text-primary">{score}</strong> out of 50.{' '}
              {score >= 40 ? '🔥 Great effort!' : score >= 25 ? '👍 Not bad!' : '📚 Keep practicing!'}
            </div>
          )}
          {lastCorrect && gameState === 'playing' && (
            <div className="mt-2 text-success font-semibold animate-bounce">
              ✓ {lastCorrect}!
            </div>
          )}
        </div>

        {/* Input area */}
        {gameState === 'playing' && (
          <form onSubmit={handleInput} className="flex gap-2 max-w-md mx-auto mb-6">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a state and hit Enter..."
              className={`input input-bordered flex-1 ${shake ? 'animate-[shake_0.4s_ease]' : ''}`}
              style={shake ? { animation: 'shake 0.4s ease' } : {}}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <button type="submit" className="btn btn-primary">Go</button>
          </form>
        )}

        {/* Action buttons */}
        <div className="flex justify-center gap-3 mb-8">
          {gameState === 'playing' && (
            <button onClick={handleGiveUp} className="btn btn-outline btn-error btn-sm">
              Give Up
            </button>
          )}
          {(gameState === 'given-up' || gameState === 'complete') && (
            <button onClick={handleRestart} className="btn btn-primary btn-sm">
              Try Again
            </button>
          )}
          <Link href="/leaderboard" className="btn btn-outline btn-sm">
            🏆 See Leaderboard
          </Link>
        </div>

        {/* State grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {US_STATES.map(state => {
            const isGuessed = guessed.has(state);
            const isMissed = gameState !== 'playing' && !isGuessed;

            return (
              <div
                key={state}
                className={`
                  state-cell rounded-lg px-3 py-2 text-sm text-center font-medium border transition-all
                  ${isGuessed
                    ? 'bg-success/20 border-success text-success correct'
                    : isMissed
                    ? 'bg-error/15 border-error/50 text-error/80'
                    : 'bg-base-200/40 border-base-content/10 text-base-content/40'
                  }
                `}
              >
                {isGuessed || isMissed ? state : '?'}
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <progress
            className="progress progress-primary w-full"
            value={score}
            max={50}
          ></progress>
          <p className="text-center text-xs text-base-content/40 mt-1">
            {50 - score} remaining
          </p>
        </div>
      </main>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
