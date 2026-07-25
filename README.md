# Reel Finance Academy 📈

A **reel-format learning app** for finance certifications — swipe up/down to move
through full-screen "reels" that teach a syllabus and then quiz you on it, in a
warm, editorial, premium reading experience.

Built with **React + TypeScript + Vite**. No backend, no external calls at
runtime — all content is bundled, so it works offline once loaded.

## Courses included

All six flagship certifications, each with a subject overview, exam pattern,
100% syllabus in reel format, and **10+ frequently-asked MCQs per topic**:

| # | Course | Provider |
|---|--------|----------|
| 1 | Bloomberg Market Concepts (BMC) | Bloomberg for Education |
| 2 | NISM Certifications | NISM · SEBI |
| 3 | Financial Modeling & Valuation Analyst (FMVA) | Corporate Finance Institute |
| 4 | CFA Investment Foundations | CFA Institute |
| 5 | NCFM Certification | NSE Academy |
| 6 | Financial Accounting Fundamentals | Core Curriculum |

Every module carries **two topics** — a core teaching topic and a **"Deep Dive
& Exam Traps"** topic full of tricky, exam-frequent questions — for **460+
practice MCQs** in total (230 core + 230 tricky), each with an explanation.

## Features

- **Easy navigation, five ways:**
  - **Swipe up / down** vertical reel feed (native scroll-snap).
  - **On-screen prev / next buttons** (bottom-right) for tap-only movement.
  - **Jump-to menu** (☰) — a table of contents to leap to any module, topic, or
    quiz in one tap.
  - **Tappable progress rail** — tap a segment to jump to that module.
  - **Keyboard** — arrows / `j`·`k` / `PageUp`·`PageDown`, `Esc` to exit.
- **Cover → Overview → Exam pattern → Full syllabus → Module → Topic → Reels →
  Quiz → Sources** for every course.
- **Interactive MCQ decks** — answer, see the explanation, get a scored summary.
  Tricky questions are flagged with a 🔥 badge.
- **Premium, comfortable reading UI** — Fraunces serif display + Inter body on a
  warm paper palette, with a full **light/dark theme** toggle.
- **Verified sourcing** — each course links its official curriculum sources.

## Run locally

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.tsx                 # shell: home vs. course feed, theme
  types.ts                # content data model
  styles/global.css       # design system (palette, type, components)
  components/
    Home.tsx              # course picker
    CourseFeed.tsx        # flattens a course into the swipeable reel feed
    Quiz.tsx              # interactive MCQ deck
    Icons.tsx             # icon set
  data/
    courses.ts            # course index (merges core + deep-dive topics)
    bmc.ts nism.ts fmva.ts cfa.ts ncfm.ts accounting.ts
    extras.ts             # per-module "Deep Dive & Exam Traps" tricky MCQs
```

Adding or editing content only touches the `src/data/*.ts` files — the feed,
quizzes and navigation are generated automatically from the data.

## Sources & disclaimer

Content is distilled from each certification's official curriculum and recognised
study material (Bloomberg, NISM/SEBI, CFI, CFA Institute, NSE Academy, and
standard financial-accounting texts such as IFRS/GAAP references). Source links
appear on the final "You finished" reel of each course.

This app is an independent study aid and is **not affiliated with or endorsed by**
any of these organisations. Always confirm current exam patterns, fees and
syllabi on the official provider websites before an exam.
