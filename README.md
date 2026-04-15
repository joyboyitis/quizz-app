# UAS/C-UAS Quiz App

  A Progressive Web App (PWA) for testing your knowledge on **Unmanned Aerial Systems (UAS)** and **Counter-UAS (C-UAS)** topics.

  ## Features

  - **Quiz Configuration** — Choose category (UAS or C-UAS) and number of questions (5, 10, 15, or 20)
  - **Quiz Screen** — One question at a time with A/B/C/D options, progress bar, confirm button, and post-answer explanation
  - **Results Screen** — Circular score ring, grade label, and full question-by-question review
  - **40 Questions** — 20 UAS + 20 C-UAS questions, randomly shuffled each game
  - **PWA Installable** — Works offline and can be installed on Android and Desktop

  ## Install as an App

  ### Android
  1. Open the site in Chrome
  2. Tap the menu (⋮) → "Add to Home Screen"
  3. Tap "Add" — the app appears on your home screen

  ### Desktop (Chrome/Edge)
  1. Open the site in Chrome or Edge
  2. Click the install icon (⊕) in the address bar
  3. Click "Install"

  ## Tech Stack

  - React + TypeScript
  - Vite
  - Tailwind CSS
  - PWA (Web App Manifest)

  ## Run Locally

  ```bash
  pnpm install
  pnpm --filter @workspace/quiz-app run dev
  ```
  