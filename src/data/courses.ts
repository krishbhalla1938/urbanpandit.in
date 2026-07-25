import type { Course } from '../types';
import { bmc } from './bmc';
import { nism } from './nism';
import { fmva } from './fmva';
import { cfa } from './cfa';
import { ncfm } from './ncfm';
import { accounting } from './accounting';
import { extraTopics } from './extras';
import { courseMeta } from './meta';

// Merge the deeper "Deep Dive & Exam Traps" topics into each module so every
// module carries its core topic plus a tricky, exam-frequent practice topic —
// without bloating the individual course files. Also attach portal metadata.
function assemble(course: Course): Course {
  return {
    ...course,
    meta: courseMeta[course.id],
    modules: course.modules.map((m) => {
      const extra = extraTopics[m.id];
      return extra ? { ...m, topics: [...m.topics, ...extra] } : m;
    }),
  };
}

// Ordered exactly as requested by the learner.
export const courses: Course[] = [bmc, nism, fmva, cfa, ncfm, accounting].map(assemble);
