# Quizzes

A quiz hub built with Next.js. The root route (`/`) lists all available quizzes. Each quiz lives at its own subroute.

## Stack

- **Frontend**: Next.js 14 (App Router) + React 18
- **Styling**: Tailwind CSS
- **Map**: react-simple-maps (US SVG map)
- **Data**: Firebase Firestore (future use)
- **Deploy**: Vercel — root directory: `quizzes`

## Quizzes

| Route | Description |
|-------|-------------|
| `/us-states` | Name all 50 US states from memory |

## Local Development

```bash
cd quizzes
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

1. Push to GitHub
2. New Project → Import repo
3. **Root Directory** → set to `quizzes`
4. Framework Preset → **Next.js** (auto-detected)
5. Deploy

No environment variables required.

## Structure

```
quizzes/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css
│   │   ├── page.tsx              # Hub: lists all quizzes
│   │   └── us-states/
│   │       └── page.tsx          # 50 states quiz
│   ├── components/
│   │   └── USMap.tsx             # Interactive SVG US map
│   └── lib/
│       ├── firebase.ts           # Firebase init (reserved for future use)
│       └── states.ts             # US states list + normalization
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

## Adding a new quiz

See `QUIZ_TEMPLATE.md` at the repo root.
