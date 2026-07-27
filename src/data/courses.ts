import type { Course, Topic } from '../types';
import { bmc } from './bmc';
import { nism } from './nism';
import { fmva } from './fmva';
import { cfa } from './cfa';
import { ncfm } from './ncfm';
import { accounting } from './accounting';
import { extraTopics } from './extras';
import { courseMeta } from './meta';
import { moreMcqs } from './moreMcqs';

// Merge the deeper "Deep Dive & Exam Traps" topics into each module so every
// module carries its core topic plus a tricky, exam-frequent practice topic —
// without bloating the individual course files. Also append the supplementary
// per-topic MCQs (moreMcqs) so every topic reaches 10+ questions, and attach
// portal metadata.
function withMoreMcqs(topic: Topic): Topic {
  const more = moreMcqs[topic.id];
  return more ? { ...topic, mcqs: [...topic.mcqs, ...more] } : topic;
}

function assemble(course: Course): Course {
  return {
    ...course,
    meta: courseMeta[course.id],
    modules: course.modules.map((m) => {
      const extra = extraTopics[m.id] ?? [];
      const topics = [...m.topics, ...extra].map(withMoreMcqs);
      return { ...m, topics };
    }),
  };
}

// Ordered exactly as requested by the learner.
export const courses: Course[] = [bmc, nism, fmva, cfa, ncfm, accounting].map(assemble);
