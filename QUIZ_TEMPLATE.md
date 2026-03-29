# How to Add a New Quiz

Quizzes live as subroutes of the `quizzes/` Next.js app. Each quiz is a self-contained page under `quizzes/src/app/<slug>/`.

## Current quizzes

| Slug | Route | Description |
|------|-------|-------------|
| `us-states` | `/us-states` | Name all 50 US states from memory |
| `us-capitals` | `/us-capitals` | Match each state to its capital city |

## Steps

### 1. Add data to `src/lib/`

```ts
// quizzes/src/lib/presidents.ts
export const PRESIDENTS = ['George Washington', 'John Adams', ...];

const NORMALIZED = new Map(PRESIDENTS.map(p => [p.toLowerCase(), p]));

export function matchPresident(guess: string): string | null {
  return NORMALIZED.get(guess.trim().toLowerCase()) ?? null;
}
```

### 2. Create the route

```
quizzes/src/app/<your-slug>/page.tsx
```

Follow this pattern (see `us-states/page.tsx` for a minimal example):

```tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type GameState = 'playing' | 'given-up' | 'complete';
const LS_GUESSED = 'your-slug-guessed';
const LS_STATE   = 'your-slug-gamestate';

export default function YourQuiz() {
  const [guessed, setGuessed] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const saved = localStorage.getItem(LS_GUESSED);
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window === 'undefined') return 'playing';
    try { return (localStorage.getItem(LS_STATE) as GameState) || 'playing'; }
    catch { return 'playing'; }
  });

  useEffect(() => {
    try { localStorage.setItem(LS_GUESSED, JSON.stringify(Array.from(guessed))); }
    catch { /* ignore */ }
  }, [guessed]);

  useEffect(() => {
    try { localStorage.setItem(LS_STATE, gameState); }
    catch { /* ignore */ }
  }, [gameState]);

  // handleSubmit, handleGiveUp, handleReset ...

  return (
    <div className="min-h-screen bg-white px-8 py-8">
      <Link href="/">← All Quizzes</Link>
      {/* title, counter, input, buttons */}

      {/* Table grid — spreadsheet style */}
      <table className="border-collapse text-sm">
        <tbody>
          {ITEMS.map((item, i) => {
            const isGuessed = guessed.has(item);
            const isMissed  = isOver && !isGuessed;
            return (
              <tr key={item}>
                <td className="border border-black bg-gray-50 text-gray-500 px-2 py-1 text-right w-10 select-none">
                  {i + 1}.
                </td>
                <td className={`border border-black px-3 py-1 w-48 ${
                  isGuessed ? 'bg-green-100 text-green-800 font-medium'
                  : isMissed ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-100 select-none'
                }`}>
                  {isGuessed || isMissed ? item : '\u00A0'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
```

For quizzes that show a prompt (like capitals), add a third column for the answer and keep the prompt column always visible (see `us-capitals/page.tsx`).

### 3. Register it on the hub

Add a link to `quizzes/src/app/page.tsx`:

```tsx
<li><Link href="/your-slug" className="text-blue-600 hover:underline">Your Quiz</Link></li>
```

## Conventions

- Pages are `'use client'`
- Plain Tailwind — no UI frameworks
- White page background (`bg-white`)
- Table grid with `border-collapse`, every cell has `border border-black`
- Number column: `bg-gray-50`, narrow, right-aligned
- Empty answer cell: `bg-gray-100`, text hidden (`text-gray-100`)
- Correct: `bg-green-100 text-green-800`
- Missed/revealed: `bg-red-100 text-red-700`
- localStorage keys prefixed with quiz slug to avoid collisions
