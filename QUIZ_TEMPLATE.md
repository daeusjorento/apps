# How to Add a New Quiz

Quizzes live as subroutes of the `quizzes/` Next.js app. Each quiz is a self-contained page under `quizzes/src/app/<slug>/`.

## Steps

### 1. Create the route

```
quizzes/src/app/<your-slug>/page.tsx
```

Example: a capitals quiz would go in `quizzes/src/app/us-capitals/page.tsx`.

### 2. Add data to `src/lib/`

Put any static data (answer lists, normalization helpers) in `quizzes/src/lib/`:

```ts
// quizzes/src/lib/capitals.ts
export const US_CAPITALS = ['Montgomery', 'Juneau', ...];

export function normalizeGuess(guess: string): string | null {
  // return canonical answer or null
}
```

### 3. Register it on the hub

Add an entry to the `quizzes` array in `quizzes/src/app/page.tsx`:

```ts
const quizzes = [
  {
    slug: 'us-states',
    title: 'US States',
    description: 'Can you name all 50 US states from memory?',
    count: '50 states',
  },
  {
    slug: 'us-capitals',        // ← add your quiz here
    title: 'US Capitals',
    description: 'Name the capital city of each US state.',
    count: '50 capitals',
  },
];
```

The hub page will automatically render a card linking to `/<slug>`.

### 4. Build the quiz page

A minimal quiz page needs:

- A `guessed: Set<string>` state
- An input form that calls `normalizeGuess()` and adds matches to `guessed`
- A grid or list showing guessed vs. unguessed answers
- A "Give Up" button that reveals remaining answers
- A "Play Again" button that resets state

See `quizzes/src/app/us-states/page.tsx` as a reference implementation.

## Conventions

- Pages are `'use client'` (all quiz interaction is client-side)
- Use plain Tailwind classes — no DaisyUI themes
- White background, dark text, black borders on grid cells
- Green (`bg-green-100 border-green-400 text-green-800`) for correct answers
- Red (`bg-red-100 border-red-300 text-red-700`) for revealed/missed answers
- Gray (`bg-gray-100 border-gray-300`) for empty slots
