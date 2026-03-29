# apps

A monorepo of small web apps, each deployed independently to Vercel.

## Structure

```
apps/
├── README.md
├── QUIZ_TEMPLATE.md     ← how to add a new quiz to the hub
└── quizzes/             ← quiz hub (Next.js), deployed at its own Vercel project
```

## Apps

| Directory | Description | Deploy |
|-----------|-------------|--------|
| `quizzes/` | Quiz hub with individual quizzes as subroutes | Vercel → root dir: `quizzes` |

## Adding a new app

1. Create a new directory at the repo root (e.g. `tools/`)
2. Set it up as its own Next.js (or other framework) project
3. Add a new Vercel project pointing to that subdirectory
4. Add it to the table above

Each app is independently deployable — they share only this repo, not any build config.
