'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import Link from 'next/link';

interface Attempt {
  id: string;
  uid: string;
  displayName: string;
  photoURL: string | null;
  score: number;
  gaveUp: boolean;
  total: number;
  createdAt: { seconds: number } | null;
}

export default function LeaderboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push('/');
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, 'attempts'),
      orderBy('score', 'desc'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    getDocs(q)
      .then(snap => {
        setAttempts(snap.docs.map(d => ({ id: d.id, ...d.data() } as Attempt)));
      })
      .finally(() => setFetching(false));
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0f172a' }}>
      <nav className="navbar bg-base-300/60 backdrop-blur border-b border-base-content/10 px-4">
        <div className="flex-1">
          <span className="text-lg font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            🏆 Leaderboard
          </span>
        </div>
        <div className="flex-none flex items-center gap-3">
          <Link href="/quiz" className="btn btn-ghost btn-sm">
            🗺️ Play
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

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>
          Top Scores
        </h2>

        {fetching ? (
          <div className="flex justify-center py-16">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : attempts.length === 0 ? (
          <div className="text-center text-base-content/50 py-16">
            No attempts yet. <Link href="/quiz" className="link link-primary">Be the first!</Link>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {attempts.map((a, i) => (
              <div
                key={a.id}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 border ${
                  a.uid === user.uid
                    ? 'bg-primary/10 border-primary/30'
                    : 'bg-base-200/40 border-base-content/10'
                }`}
              >
                <span className="text-xl font-bold w-8 text-center text-base-content/40">
                  {i + 1}
                </span>
                {a.photoURL && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={a.photoURL} alt="" className="w-8 h-8 rounded-full" />
                )}
                <span className="flex-1 font-medium">
                  {a.displayName}
                  {a.uid === user.uid && <span className="ml-2 text-xs text-primary">(you)</span>}
                </span>
                <span className={`font-bold text-lg tabular-nums ${a.score === 50 ? 'text-success' : 'text-primary'}`}>
                  {a.score}/50
                </span>
                {a.gaveUp && <span className="badge badge-error badge-sm">gave up</span>}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
