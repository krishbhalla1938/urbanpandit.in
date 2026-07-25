// ---------------------------------------------------------------------------
// Shared data model for the Reel Finance Academy content.
// The whole app is driven by these types. Each course is a tree of
// Module -> Topic -> (Reels + MCQs). The reel feed flattens this tree into a
// vertical, swipe-up/down stream of full-screen "slides".
// ---------------------------------------------------------------------------

export interface Source {
  name: string;
  url: string;
}

export interface KeyTerm {
  term: string;
  def: string;
}

/** A single teaching slide in the vertical reel feed. */
export interface Reel {
  /** Visual style of the slide. */
  kind: 'concept' | 'formula' | 'insight' | 'list';
  title: string;
  subtitle?: string;
  /** Main teaching body — each string renders as its own paragraph / point. */
  body: string[];
  /** Optional highlighted terms shown as definition chips. */
  keyTerms?: KeyTerm[];
  /** Optional formula rendered in a monospace callout. */
  formula?: string;
  /** Optional "exam tip" shown in an accented callout. */
  tip?: string;
}

export interface MCQ {
  q: string;
  options: string[];
  /** Zero-based index of the correct option. */
  answer: number;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  reels: Reel[];
  mcqs: MCQ[];
}

export interface Module {
  id: string;
  title: string;
  summary: string;
  topics: Topic[];
}

export interface ExamPattern {
  format: string;
  duration: string;
  questions: string;
  passing: string;
  validity?: string;
  fee?: string;
  negativeMarking?: string;
}

export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  provider: string;
  /** Accent colour (hex) used across the course UI. */
  accent: string;
  /** Emoji glyph used on the course card. */
  glyph: string;
  tagline: string;
  overview: string[];
  examPattern: ExamPattern;
  sources: Source[];
  modules: Module[];
}

// -------- Flattened feed model (built at runtime) --------------------------

export type FeedItem =
  | { type: 'cover'; course: Course }
  | { type: 'overview'; course: Course }
  | { type: 'exam'; course: Course }
  | { type: 'syllabus'; course: Course }
  | { type: 'module'; course: Course; module: Module }
  | { type: 'topic'; course: Course; module: Module; topic: Topic }
  | { type: 'reel'; course: Course; module: Module; topic: Topic; reel: Reel; index: number; total: number }
  | { type: 'quiz'; course: Course; module: Module; topic: Topic }
  | { type: 'sources'; course: Course };
