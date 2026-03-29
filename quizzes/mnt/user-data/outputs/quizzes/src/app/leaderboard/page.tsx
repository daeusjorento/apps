'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { db } from '@/lib/firebase';
import {
  collection, query, orderBy, limit, getDocs, where, Timestamp
} from 'firebase/firestore';
import Link from 'next/link';

interface Attempt {
  id: string;
  uid: string;
  displayName: string;
  photoURL: string | null;
  score: number;
  gaveUp: boolean;
  createdAt: Timestamp;
}

interface BestScore {
  uid: string;
  displayName: string;
  photoURL: string | null;
  score: number;
  gaveUp: boolean;
  createdAt: Timestamp;
}

export default function LeaderboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [top, setTop] = useState<BestScore[]>([]);
  const [myAttempts, setMyAttempts] = useState<Attempt[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push('/');
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setFetching(true);
      try {
        // Top scores — get recent attempts and pick best per user client-side
        const q = query(
          collection(db, 'attempts'),
          orderBy('score', 'desc'),
          orderBy('createdAt', 'desc'),
          limit(200)
        );
        const snap = await getDocs(q);
        const all = snap.docs.map(d => ({ id: d.id, ...d.data() } as Attempt));

        // Best score per user
        const bestMap = new Map<string, BestScore>();
        for (const a of all) {
          const existing = bestMap.get(a.uid);
          if (!existing || a.score > existing.score) {
            bestMap.set(a.uid, a);
          }
        }
        const sorted = Array.from(bestMap.values())
          .sort((a, b) => b.score - a.score)
          .slice(0, 20);
        setTop(sorted);

        // My attempts
        const myQ = query(
          collection(db, 'attempts'),
          where('uid', '==', user.uid),
          orderBy('createdAt', 'desc'),
          limit(10)
        );
        const mySnap = await getDocs(myQ);
        setMyAttempts(mySnap.docs.map(d => ({ id: d.id, ...d.data() } as Attempt)));
      } catch (e) {
        console.error(e);
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, [user]);

  const medal = (i: number) => {
    if (i === 0) return '🥇';
    if (i === 1) return '🥈';
    if (i === 2) return '🥉';
    return `${i + 1}.`;
  };

  const formatDate = (ts: Timestamp) => {
    if (!ts?.toDate) return '';
    return ts.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#0f172a' }}>
      <nav className="navbar bg-base-300/60 backdrop-blur border-b border-base-content/10 px-4">
        <div className="flex-1">
          <Link href="/quiz" className="btn btn-ghost gap-2">
            ← Back to Quiz
          </Link>
        </div>
        <div className="flex-none">
          <span className="text-lg font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            🏆 Leaderboard
          </span>
        </div>
        <div className="flex-1"></div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {fetching ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            {/* Global top scores */}
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              🌎 Best Scores
            </h2>
            <div className="card bg-base-200/40 border border-base-content/10 mb-8">
              <div className="card-body p-0">
                {top.length === 0 ? (
                  <p className="text-center text-base-content/40 py-8">No scores yet. Be the first!</p>
                ) : (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th className="text-right">Score</th>
                        <th className="text-right hidden sm:table-cell">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {top.map((entry, i) => (
                        <tr key={entry.uid} className={entry.uid === user.uid ? 'bg-primary/10' : ''}>
                          <td className="font-bold text-lg w-12">{medal(i)}</td>
                          <td>
                            <div className="flex items-center gap-2">
                              {entry.photoURL && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={entry.photoURL} alt="" className="w-7 h-7 rounded-full" />
                              )}
                              <span className={entry.uid === user.uid ? 'text-primary font-semibold' : ''}>
                                {entry.displayName}
                                {entry.uid === user.uid && ' (you)'}
                              </span>
                            </div>
                          </td>
                          <td className="text-right">
                            <span className={`font-bold text-lg ${entry.score === 50 ? 'text-success' : 'text-primary'}`}>
                              {entry.score}
                            </span>
                            <span className="text-base-content/40">/50</span>
                          </td>
                          <td className="text-right text-base-content/50 text-sm hidden sm:table-cell">
                            {formatDate(entry.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* My history */}
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              📋 My Recent Attempts
            </h2>
            <div className="card bg-base-200/40 border border-base-content/10">
              <div className="card-body p-0">
                {myAttempts.length === 0 ? (
                  <p className="text-center text-base-content/40 py-8">
                    No attempts yet.{' '}
                    <Link href="/quiz" className="link link-primary">Start playing!</Link>
                  </p>
                ) : (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Score</th>
                        <th>Result</th>
                        <th className="text-right">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myAttempts.map(a => (
                        <tr key={a.id}>
                          <td>
                            <span className={`font-bold ${a.score === 50 ? 'text-success' : 'text-primary'}`}>
                              {a.score}/50
                            </span>
                          </td>
                          <td>
                            {a.score === 50
                              ? <span className="badge badge-success">Perfect!</span>
                              : a.gaveUp
                              ? <span className="badge badge-error badge-outline">Gave up</span>
                              : <span className="badge badge-ghost">Completed</span>
                            }
                          </td>
                          <td className="text-right text-base-content/50 text-sm">
                            {formatDate(a.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/quiz" className="btn btn-primary">
                Play Again
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
