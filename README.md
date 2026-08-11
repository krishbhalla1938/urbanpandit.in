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

## Study portal

Opening a course lands on a **hub** that turns it into a full study portal:

- **Course Guide** — overview, eligibility, fees, registration steps, exam
  pattern, passing criteria, validity, a recommended **study plan**, **memory
  tricks**, and a tickable **final revision checklist**.
- **Module-wise Syllabus** — the complete topic list for every module.
- **Formula Sheet** — curated key formulas per course.
- **Flashcards** — flip cards built from every key term and glossary entry.
- **Glossary** — searchable financial terms.
- **Tests & Mocks** — topic tests, module tests and a shuffled full-length mock,
  all drawn from the MCQ bank, with your **best score saved** per test.
- **Careers & Fees** — career paths with indicative salary, recommended books,
  and official source links.
- **Performance analytics & completion tracker** — tests taken, average score
  and topics seen, persisted locally (no account needed).

## Learning features

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
  App.tsx                 # shell: home vs. course hub, theme
  types.ts                # content + portal data model
  styles/global.css       # design system (palette, type, components)
  lib/progress.ts         # localStorage analytics + completion tracker
  components/
    Home.tsx              # course picker
    CourseHub.tsx         # per-course portal: routing, guide, careers
    CourseFeed.tsx        # flattens a course into the swipeable reel feed
    FeatureViews.tsx      # Formula Sheet, Flashcards, Glossary, Syllabus
    TestsHub.tsx          # topic / module / mock test launcher
    TestRunner.tsx        # scored test runner (saves best scores)
    Quiz.tsx              # inline MCQ deck (in the reel feed)
    SubView.tsx  Icons.tsx
  data/
    courses.ts            # course index (merges topics + meta)
    bmc.ts nism.ts fmva.ts cfa.ts ncfm.ts accounting.ts
    extras.ts             # per-module "Deep Dive & Exam Traps" tricky MCQs
    meta.ts               # portal meta: eligibility, fees, careers, formulas…
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
