import type { MCQ } from '../types';
import { mcqBmc } from './mcq/bmc';
import { mcqNism } from './mcq/nism';
import { mcqFmva } from './mcq/fmva';
import { mcqCfa } from './mcq/cfa';
import { mcqNcfm } from './mcq/ncfm';
import { mcqAccounting } from './mcq/accounting';

// Supplementary per-topic MCQs, keyed by topic id, merged into each topic in
// courses.ts so every topic reaches 10+ questions. Populated course by course.
export const moreMcqs: Record<string, MCQ[]> = {
  ...mcqBmc,
  ...mcqNism,
  ...mcqFmva,
  ...mcqCfa,
  ...mcqNcfm,
  ...mcqAccounting,
};
