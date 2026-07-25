import { useMemo, useState } from 'react';
import type { Course, MCQ } from '../types';
import SubView from './SubView';
import TestRunner from './TestRunner';
import { getBest } from '../lib/progress';
import { Target, ChevronRight, Flame } from './Icons';

interface TestDef {
  id: string;
  title: string;
  group: string;
  mcqs: MCQ[];
  shuffle?: boolean;
}

interface Props {
  course: Course;
  onBack: () => void;
}

export default function TestsHub({ course, onBack }: Props) {
  const [active, setActive] = useState<TestDef | null>(null);

  const tests = useMemo<TestDef[]>(() => {
    const allMcqs = course.modules.flatMap((m) => m.topics).flatMap((t) => t.mcqs);
    const list: TestDef[] = [];

    // Full-length mock — a shuffled draw from the whole bank.
    list.push({
      id: 'mock',
      title: 'Full-Length Mock Test',
      group: 'Mock',
      mcqs: allMcqs.slice(0, Math.min(25, allMcqs.length)),
      shuffle: true,
    });

    // Module tests — every MCQ in a module.
    course.modules.forEach((m) => {
      const mcqs = m.topics.flatMap((t) => t.mcqs);
      if (mcqs.length)
        list.push({ id: `mod-${m.id}`, title: m.title, group: 'Module tests', mcqs });
    });

    // Topic tests — each topic's own set.
    course.modules.forEach((m) =>
      m.topics.forEach((t) => {
        if (t.mcqs.length)
          list.push({ id: `top-${t.id}`, title: t.title, group: 'Topic tests', mcqs: t.mcqs });
      })
    );

    return list;
  }, [course]);

  if (active) {
    return (
      <TestRunner
        courseId={course.id}
        testId={active.id}
        title={active.title}
        mcqs={active.mcqs}
        shuffle={active.shuffle}
        onExit={() => setActive(null)}
      />
    );
  }

  const groups = ['Mock', 'Module tests', 'Topic tests'];

  return (
    <SubView title="Tests & Mocks" subtitle="Practice, then track your best scores" onBack={onBack}>
      {groups.map((grp) => {
        const items = tests.filter((t) => t.group === grp);
        if (!items.length) return null;
        return (
          <div className="testgroup" key={grp}>
            <div className="testgroup__label">{grp}</div>
            {items.map((t) => {
              const best = getBest(course.id, t.id);
              const trickyCount = t.mcqs.filter((m) => m.tricky).length;
              return (
                <button className="testrow" key={t.id} onClick={() => setActive(t)}>
                  <div className="testrow__ic">
                    <Target size={18} />
                  </div>
                  <div className="testrow__body">
                    <div className="testrow__title">{t.title}</div>
                    <div className="testrow__meta">
                      {t.mcqs.length} Qs
                      {trickyCount > 0 && (
                        <span className="testrow__tricky">
                          <Flame size={10} /> {trickyCount}
                        </span>
                      )}
                      {best && (
                        <span className="testrow__best">
                          Best {Math.round((best.correct / best.total) * 100)}%
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight size={18} />
                </button>
              );
            })}
          </div>
        );
      })}
    </SubView>
  );
}
