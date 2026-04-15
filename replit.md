# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### UAS Quiz App (`artifacts/quiz-app`)
- **Type**: React + Vite (PWA)
- **Preview path**: `/`
- **Description**: A quiz app for UAS and C-UAS knowledge testing
- **Features**:
  - Config screen with category (UAS/C-UAS) and question count (5/10/15/20) selection
  - Quiz screen with A/B/C/D options, progress bar, confirm button, and post-answer explanations
  - Results screen with circular score ring, grade label, and full question review
  - 40 total questions (20 UAS + 20 C-UAS), randomly shuffled each game
  - PWA manifest for installability on Android (Add to Home Screen) and Desktop (Chrome/Edge)
- **Files**:
  - `src/data/questions.ts` — all 40 questions with explanations
  - `src/pages/ConfigScreen.tsx` — category/count selection screen
  - `src/pages/QuizScreen.tsx` — one-question-at-a-time quiz interface
  - `src/pages/ResultsScreen.tsx` — score ring and full review
  - `src/App.tsx` — top-level screen routing state machine
  - `public/manifest.json` — PWA manifest for installability
