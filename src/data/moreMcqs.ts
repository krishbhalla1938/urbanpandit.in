import type { MCQ } from '../types';
import { mcqBmc } from './mcq/bmc';

// Supplementary per-topic MCQs, keyed by topic id, merged into each topic in
// courses.ts so every topic reaches 10+ questions. Populated course by course.
export const moreMcqs: Record<string, MCQ[]> = {
  ...mcqBmc,
};
