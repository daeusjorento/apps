# How to Add a New Quiz

Quizzes live as subroutes of the `quizzes/` Next.js app. Each quiz is a self-contained page under `quizzes/src/app/<slug>/`.

## Current quizzes

| Slug | Route | Items | Description |
|------|-------|-------|-------------|
| `us-states` | `/us-states` | 50 | Name all 50 US states from memory |
| `us-capitals` | `/us-capitals` | 50 | Match each state to its capital city |
| `us-presidents` | `/us-presidents` | 47 | Name all US presidents in order |
| `bones` | `/bones` | 59 | Name the major bones of the human body |
| `muscles` | `/muscles` | 87 | Name the major muscles of the human body |

## Steps

### 1. Add data to `src/lib/`

```ts
// quizzes/src/lib/myquiz.ts
export const ITEMS = ['Item One', 'Item Two', ...];

const MAP = new Map(ITEMS.map(item => [item.toLowerCase(), item]));

export function matchItem(guess: string): string | null {
  return MAP.get(guess.trim().toLowerCase()) ?? null;
}
```

### 2. Create the route

```
quizzes/src/app/<your-slug>/page.tsx
```

Follow this exact pattern (see `us-states/page.tsx` for the canonical example):

```tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ITEMS, matchItem } from '@/lib/myquiz';

type GameState = 'playing' | 'given-up' | 'complete';
const TOTAL = ITEMS.length;

export default function MyQuiz() {
  const [guessed, setGuessed] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const saved = localStorage.getItem('my-slug-guessed');
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window === 'undefined') return 'playing';
    try { return (localStorage.getItem('my-slug-gamestate') as GameState) || 'playing'; }
    catch { return 'playing'; }
  });

  // Persist on change
  useEffect(() => {
    try { localStorage.setItem('my-slug-guessed', JSON.stringify(Array.from(guessed))); }
    catch { /* ignore */ }
  }, [guessed]);
  useEffect(() => {
    try { localStorage.setItem('my-slug-gamestate', gameState); }
    catch { /* ignore */ }
  }, [gameState]);

  // handleSubmit, handleGiveUp, handleReset ...

  const isOver = gameState === 'given-up' || gameState === 'complete';

  return (
    <div className="min-h-screen bg-white px-8 py-8">
      <Link href="/">← All Quizzes</Link>
      {/* title, counter, input, buttons */}

      {/* Spreadsheet table — use inline styles, NOT Tailwind border classes */}
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {ITEMS.map((item, i) => {
            const isGuessed = guessed.has(item);
            const isMissed  = isOver && !isGuessed;
            return (
              <tr key={item}>
                <td style={{ border: '1px solid black', padding: '4px 8px', background: '#f9fafb', color: '#6b7280', width: '40px', textAlign: 'right' }}>
                  {i + 1}.
                </td>
                <td style={{
                  border: '1px solid black',
                  padding: '4px 8px',
                  width: '220px',
                  background: isGuessed ? '#dcfce7' : isMissed ? '#fee2e2' : '#f3f4f6',
                  color: isGuessed ? '#166534' : isMissed ? '#b91c1c' : '#f3f4f6',
                  fontWeight: isGuessed ? 500 : 'normal',
                  userSelect: 'none',
                }}>
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

**Important:** Always use inline `style` props for table borders — do **not** use Tailwind `border` classes on table cells, as they are unreliable with `border-collapse`.

For prompt-based quizzes (like `us-capitals`), add a third column that always shows the prompt and keep the answer column hidden until guessed.

### 3. Register it on the hub

Add a link in `quizzes/src/app/page.tsx`:

```tsx
<li><Link href="/my-slug" className="text-blue-600 hover:underline">My Quiz</Link></li>
```

## Conventions

- Pages are `'use client'`
- Plain Tailwind for layout; inline styles for all table borders
- `borderCollapse: 'collapse'` on `<table>`, `border: '1px solid black'` on every `<td>`
- Number column: `background: '#f9fafb'`, `color: '#6b7280'`, right-aligned
- Empty answer: `background: '#f3f4f6'`, `color: '#f3f4f6'` (hidden text)
- Correct: `background: '#dcfce7'`, `color: '#166534'`
- Missed: `background: '#fee2e2'`, `color: '#b91c1c'`
- localStorage keys prefixed with quiz slug
