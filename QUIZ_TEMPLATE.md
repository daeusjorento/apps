# How to Add a New Quiz

Quizzes live as subroutes of the `quizzes/` Next.js app. Each quiz is a self-contained page under `quizzes/src/app/<slug>/`.

## Current quizzes

| Slug | Route | Description |
|------|-------|-------------|
| `us-states` | `/us-states` | Name all 50 US states from memory |
| `us-capitals` | `/us-capitals` | Match each state to its capital city |

## Steps

### 1. Add data to `src/lib/`

Put static answer data and a normalize/match helper in `quizzes/src/lib/`:

```ts
// quizzes/src/lib/presidents.ts
export const PRESIDENTS = ['George Washington', 'John Adams', ...];

export function matchPresident(guess: string): string | null {
  // return canonical answer or null
}
```

### 2. Create the route

```
quizzes/src/app/<your-slug>/page.tsx
```

The page should be `'use client'` and follow this pattern (see `us-states/page.tsx` or `us-capitals/page.tsx` for full examples):

```tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type GameState = 'playing' | 'given-up' | 'complete';
const LS_GUESSED = 'your-slug-guessed';
const LS_STATE  = 'your-slug-gamestate';

export default function YourQuiz() {
  // Restore from localStorage on load
  const [guessed, setGuessed] = useState<Set<string>>(() => { ... });
  const [gameState, setGameState] = useState<GameState>(() => { ... });

  // Persist to localStorage on change
  useEffect(() => { localStorage.setItem(LS_GUESSED, JSON.stringify(Array.from(guessed))); }, [guessed]);
  useEffect(() => { localStorage.setItem(LS_STATE, gameState); }, [gameState]);

  // handleSubmit, handleGiveUp, handleReset ...

  return ( /* numbered grid, input, Give Up / Play Again / Reset buttons */ );
}
```

### 3. Register it on the hub

Add an entry to the `quizzes` array in `quizzes/src/app/page.tsx`:

```ts
const quizzes = [
  { slug: 'us-states',   title: 'US States',   description: '...', count: '50 states' },
  { slug: 'us-capitals', title: 'US Capitals',  description: '...', count: '50 capitals' },
  { slug: 'your-slug',   title: 'Your Quiz',    description: '...', count: 'N items' }, // ← add here
];
```

The hub renders a card linking to `/<slug>` automatically.

## Conventions

- Pages are `'use client'` (all quiz interaction is client-side)
- Use plain Tailwind — no DaisyUI or other UI frameworks
- White background, dark text, black border on empty grid cells
- Green (`bg-green-100 border-green-400 text-green-800`) for correct answers
- Red (`bg-red-100 border-red-300 text-red-700`) for revealed/missed answers
- localStorage keys are prefixed with the quiz slug to avoid collisions
- Grid is numbered 1–N, alphabetical (or logical) order
