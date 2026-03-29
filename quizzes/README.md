# 🗺️ 50 States Quiz

A no-timer, no-ads quiz app — name all 50 US states from memory. Built with Next.js, DaisyUI, Firebase Auth + Firestore, deployable to Vercel.

## Stack

- **Frontend**: Next.js 14 (App Router) + React 18
- **Styling**: Tailwind CSS + DaisyUI (`night` theme)
- **Auth**: Firebase Authentication (Google sign-in)
- **Database**: Firestore (attempt history + leaderboard)
- **Deploy**: Vercel

---

## Local Development

```bash
cd quizzes
npm install
npm run dev
# → http://localhost:3000
```

---

## Firebase Setup (one-time)

### 1. Enable Google Auth
In [Firebase Console](https://console.firebase.google.com) → **Authentication** → **Sign-in method** → enable **Google**.

### 2. Add authorized domains
**Authentication** → **Settings** → **Authorized domains** → add:
- `localhost`
- Your Vercel domain (e.g. `quizzes-xyz.vercel.app`)

### 3. Deploy Firestore rules & indexes

Install Firebase CLI if needed:
```bash
npm install -g firebase-tools
firebase login
firebase use quiz-96b67
```

Deploy rules and indexes:
```bash
cd quizzes
firebase deploy --only firestore:rules,firestore:indexes
```

Or copy-paste from `firestore.rules` and `firestore.indexes.json` manually in the Firebase Console.

### 4. Firestore indexes (required for leaderboard queries)

Two composite indexes are needed (defined in `firestore.indexes.json`):

| Collection | Fields | Order |
|------------|--------|-------|
| `attempts` | `score` ↓, `createdAt` ↓ | Global leaderboard |
| `attempts` | `uid` ↑, `createdAt` ↓ | Per-user history |

When you first visit the leaderboard, Firestore may show a console error with a direct link to create the missing index — just click it.

---

## Deploy to Vercel

### Option A: Deploy the subfolder directly (recommended)

```bash
cd quizzes
npx vercel
```

Vercel will auto-detect Next.js. Set the **Root Directory** to `quizzes` if deploying from the parent repo.

### Option B: Via Vercel Dashboard

1. Push the whole repo to GitHub
2. New Project → Import repo
3. **Root Directory** → set to `quizzes`
4. Framework Preset → **Next.js** (auto-detected)
5. Deploy

No environment variables needed — Firebase config is baked in (public keys, safe for client-side).

---

## How It Works

### Quiz flow
1. User signs in with Google → redirected to `/quiz`
2. Type a state name + Enter → if correct, cell in the 50-state grid turns green
3. Case-insensitive: `nebraska`, `Nebraska`, `NEBRASKA` all work
4. Hit **Give Up** → all remaining states reveal in red
5. Score is saved to Firestore on completion or give-up (once per attempt)

### Leaderboard (`/leaderboard`)
- Shows best score per user across all attempts (top 20)
- Shows your own last 10 attempts with dates
- You're highlighted in the leaderboard

### Firestore schema

```
attempts/
  {docId}
    uid: string
    displayName: string
    photoURL: string | null
    score: number        // 0–50
    gaveUp: boolean
    total: 50
    createdAt: Timestamp
```

---

## File Structure

```
quizzes/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, AuthProvider wrapper
│   │   ├── page.tsx            # Landing / sign-in page
│   │   ├── globals.css
│   │   ├── quiz/
│   │   │   └── page.tsx        # Main quiz (grid, input, give up)
│   │   └── leaderboard/
│   │       └── page.tsx        # Leaderboard + my history
│   ├── components/
│   │   └── AuthProvider.tsx    # Firebase auth context
│   └── lib/
│       ├── firebase.ts         # Firebase init
│       └── states.ts           # 50 states data + normalization
├── firestore.rules             # Security rules
├── firestore.indexes.json      # Composite index definitions
├── tailwind.config.js
├── next.config.js
└── vercel.json
```

---

## Iterating

Some ideas for next steps:
- **US map SVG** — fill states in as they're guessed (swap the grid for an interactive SVG map)
- **Timer mode** — optional countdown for a challenge variant
- **Streak tracking** — how many days in a row you've gotten 50/50
- **Share results** — tweet your score
- **Hints** — show first letter of a random missing state
