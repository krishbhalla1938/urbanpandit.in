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
  /** Mark exam-trap / higher-difficulty questions so the UI can flag them. */
  tricky?: boolean;
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

export interface CareerRole {
  role: string;
  salary: string;
}
export interface StudyPhase {
  phase: string;
  focus: string;
}
export interface FormulaItem {
  name: string;
  formula: string;
  note?: string;
}
export interface GlossaryItem {
  term: string;
  def: string;
}
export interface Mnemonic {
  topic: string;
  trick: string;
}
export interface SyllabusGroup {
  module: string;
  points: string[];
}

/** Rich, portal-level metadata that powers the course's feature screens. */
export interface CourseMeta {
  eligibility: string;
  fee: string;
  validity: string;
  registration: string[];
  studyPlan: StudyPhase[];
  careers: CareerRole[];
  books: string[];
  revisionChecklist: string[];
  mnemonics: Mnemonic[];
  formulas: FormulaItem[];
  glossary: GlossaryItem[];
  /** The complete module-wise syllabus (every listed topic). */
  syllabus: SyllabusGroup[];
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
  /** Portal metadata (eligibility, fees, careers, formulas, glossary, …). */
  meta?: CourseMeta;
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
