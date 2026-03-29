'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';

export default function Home() {
  const { user, loading, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/quiz');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-4"
      style={{ background: 'radial-gradient(ellipse at 60% 20%, #1e3a5f 0%, #0f172a 60%)' }}>
      <div className="text-center max-w-lg">
        <div className="text-7xl mb-4">🗺️</div>
        <h1 className="text-5xl font-extrabold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
          Name All 50 States
        </h1>
        <p className="text-base-content/60 text-lg mb-8">
          No timer. No ads. Just you and a map. Can you name every US state from memory?
        </p>
        <button
          onClick={signIn}
          className="btn btn-primary btn-lg gap-3 shadow-lg shadow-primary/20"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          Sign in with Google to Play
        </button>
        <p className="text-base-content/40 text-sm mt-4">
          Sign in to track your scores and see the leaderboard.
        </p>
      </div>
    </main>
  );
}
