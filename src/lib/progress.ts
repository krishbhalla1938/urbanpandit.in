// ---------------------------------------------------------------------------
// Lightweight localStorage-backed progress store. Powers the completion
// tracker and performance analytics — no backend required.
// ---------------------------------------------------------------------------

export interface TestResult {
  correct: number;
  total: number;
  at: number; // timestamp
}

interface Progress {
  /** Best test result keyed by `${courseId}:${testId}`. */
  bestScores: Record<string, TestResult>;
  /** Topic ids the learner has opened, keyed by course id. */
  viewedTopics: Record<string, string[]>;
}

const KEY = 'rfa-progress-v1';

function read(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Progress;
  } catch {
    /* ignore */
  }
  return { bestScores: {}, viewedTopics: {} };
}

function write(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* ignore */
  }
}

export function recordTest(courseId: string, testId: string, result: TestResult) {
  const p = read();
  const key = `${courseId}:${testId}`;
  const prev = p.bestScores[key];
  const better = !prev || result.correct / result.total > prev.correct / prev.total;
  if (better) p.bestScores[key] = result;
  write(p);
}

export function getBest(courseId: string, testId: string): TestResult | undefined {
  return read().bestScores[`${courseId}:${testId}`];
}

export function markTopicViewed(courseId: string, topicId: string) {
  const p = read();
  const list = p.viewedTopics[courseId] ?? [];
  if (!list.includes(topicId)) {
    p.viewedTopics[courseId] = [...list, topicId];
    write(p);
  }
}

export function getViewedTopics(courseId: string): string[] {
  return read().viewedTopics[courseId] ?? [];
}

/** Aggregate stats for a course, used by the analytics / tracker card. */
export function getCourseStats(courseId: string) {
  const p = read();
  const scores = Object.entries(p.bestScores)
    .filter(([k]) => k.startsWith(`${courseId}:`))
    .map(([, v]) => v);
  const testsTaken = scores.length;
  const totalCorrect = scores.reduce((a, s) => a + s.correct, 0);
  const totalQs = scores.reduce((a, s) => a + s.total, 0);
  const avgPct = totalQs ? Math.round((totalCorrect / totalQs) * 100) : 0;
  return {
    testsTaken,
    avgPct,
    viewedTopics: (p.viewedTopics[courseId] ?? []).length,
  };
}
