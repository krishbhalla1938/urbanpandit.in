import { useState } from 'react';
import type { Course } from '../types';
import CourseFeed from './CourseFeed';
import TestsHub from './TestsHub';
import SubView from './SubView';
import { FormulaSheet, Flashcards, Glossary, SyllabusView } from './FeatureViews';
import { getCourseStats } from '../lib/progress';
import {
  ArrowLeft,
  Play,
  ListIcon,
  Sigma,
  Cards,
  BookOpen,
  Target,
  Briefcase,
  Info,
  ChevronRight,
  Calendar,
  CheckSquare,
  Bulb,
  Rocket,
  TrendingUp,
} from './Icons';

type View =
  | 'hub'
  | 'learn'
  | 'syllabus'
  | 'formulas'
  | 'flashcards'
  | 'glossary'
  | 'tests'
  | 'guide'
  | 'careers';

interface Props {
  course: Course;
  onExit: () => void;
}

export default function CourseHub({ course, onExit }: Props) {
  const [view, setView] = useState<View>('hub');
  const accentStyle = { ['--accent' as string]: course.accent } as React.CSSProperties;
  const back = () => setView('hub');

  let inner;
  switch (view) {
    case 'learn':
      inner = <CourseFeed course={course} onExit={back} />;
      break;
    case 'syllabus':
      inner = <SyllabusView course={course} onBack={back} />;
      break;
    case 'formulas':
      inner = <FormulaSheet course={course} onBack={back} />;
      break;
    case 'flashcards':
      inner = <Flashcards course={course} onBack={back} />;
      break;
    case 'glossary':
      inner = <Glossary course={course} onBack={back} />;
      break;
    case 'tests':
      inner = <TestsHub course={course} onBack={back} />;
      break;
    case 'guide':
      inner = <Guide course={course} onBack={back} />;
      break;
    case 'careers':
      inner = <Careers course={course} onBack={back} />;
      break;
    default:
      inner = <Hub course={course} onExit={onExit} go={setView} />;
  }

  return (
    <div style={{ ...accentStyle, height: '100%' }}>
      {inner}
    </div>
  );
}

/* --------------------------------------------------------------- The hub */

function Hub({
  course,
  onExit,
  go,
}: {
  course: Course;
  onExit: () => void;
  go: (v: View) => void;
}) {
  const totalTopics = course.meta?.syllabus.reduce((a, g) => a + g.points.length, 0) ?? 0;
  const totalMcqs = course.modules.reduce(
    (a, m) => a + m.topics.reduce((b, t) => b + t.mcqs.length, 0),
    0
  );
  const stats = getCourseStats(course.id);

  const features: { v: View; icon: React.ReactNode; label: string; desc: string }[] = [
    { v: 'syllabus', icon: <ListIcon size={19} />, label: 'Syllabus', desc: `${totalTopics} topics` },
    { v: 'tests', icon: <Target size={19} />, label: 'Tests & Mocks', desc: `${totalMcqs} MCQs` },
    { v: 'formulas', icon: <Sigma size={19} />, label: 'Formula Sheet', desc: `${course.meta?.formulas.length ?? 0} formulas` },
    { v: 'flashcards', icon: <Cards size={19} />, label: 'Flashcards', desc: 'Flip to revise' },
    { v: 'glossary', icon: <BookOpen size={19} />, label: 'Glossary', desc: `${course.meta?.glossary.length ?? 0}+ terms` },
    { v: 'careers', icon: <Briefcase size={19} />, label: 'Careers & Fees', desc: 'Jobs · salary · books' },
  ];

  return (
    <div className="hub">
      <div className="hub__bar">
        <button className="topbar__back" onClick={onExit} aria-label="All courses">
          <ArrowLeft size={19} />
        </button>
        <span className="topbar__title">All courses</span>
      </div>

      <div className="hub__scroll">
        <div className="hub__header">
          <div className="hub__glyph">{course.glyph}</div>
          <div className="hub__provider" style={{ color: course.accent }}>
            {course.provider}
          </div>
          <h1 className="hub__title">{course.title}</h1>
          <p className="hub__tag">{course.tagline}</p>
        </div>

        {/* Performance + completion tracker */}
        <div className="tracker">
          <div className="tracker__item">
            <div className="tracker__ic"><TrendingUp size={16} /></div>
            <div>
              <div className="tracker__v">{stats.testsTaken}</div>
              <div className="tracker__k">Tests taken</div>
            </div>
          </div>
          <div className="tracker__item">
            <div className="tracker__ic"><Target size={16} /></div>
            <div>
              <div className="tracker__v">{stats.avgPct}%</div>
              <div className="tracker__k">Avg score</div>
            </div>
          </div>
          <div className="tracker__item">
            <div className="tracker__ic"><CheckSquare size={16} /></div>
            <div>
              <div className="tracker__v">{stats.viewedTopics}</div>
              <div className="tracker__k">Topics seen</div>
            </div>
          </div>
        </div>

        <button className="hub__cta" onClick={() => go('learn')}>
          <Play size={18} />
          <span>Start learning — swipe through reels</span>
        </button>

        <div className="hub__gridlabel">Study tools</div>
        <div className="hub__grid">
          {features.map((f) => (
            <button className="ftile" key={f.v} onClick={() => go(f.v)}>
              <div className="ftile__ic">{f.icon}</div>
              <div className="ftile__label">{f.label}</div>
              <div className="ftile__desc">{f.desc}</div>
            </button>
          ))}
        </div>

        <div className="hub__gridlabel">Course guide</div>
        <button className="hub__row" onClick={() => go('guide')}>
          <div className="hub__rowic"><Info size={18} /></div>
          <div className="hub__rowbody">
            <div className="hub__rowtitle">Overview, eligibility, fees & exam pattern</div>
            <div className="hub__rowdesc">Registration · passing criteria · validity · study plan</div>
          </div>
          <ChevronRight size={18} />
        </button>

        <div className="hub__quickfacts">
          <QuickFact k="Eligibility" v={course.meta?.eligibility ?? '—'} />
          <QuickFact k="Fee" v={course.meta?.fee ?? course.examPattern.fee ?? '—'} />
          <QuickFact k="Validity" v={course.meta?.validity ?? course.examPattern.validity ?? '—'} />
        </div>

        <div className="hub__disclaimer">
          Study aid only — not affiliated with or endorsed by the certification providers.
          Figures are indicative; confirm current details on the official site.
        </div>
      </div>
    </div>
  );
}

function QuickFact({ k, v }: { k: string; v: string }) {
  return (
    <div className="qfact">
      <div className="qfact__k">{k}</div>
      <div className="qfact__v">{v}</div>
    </div>
  );
}

/* ------------------------------------------------------------- Guide view */

function Guide({ course, onBack }: { course: Course; onBack: () => void }) {
  const e = course.examPattern;
  const m = course.meta;
  return (
    <SubView title="Course Guide" subtitle={course.shortTitle} onBack={onBack}>
      <Section icon={<Info size={16} />} title="Overview">
        {course.overview.map((p, i) => (
          <p className="reel__para" key={i}>
            {p}
          </p>
        ))}
      </Section>

      <Section icon={<Rocket size={16} />} title="Eligibility">
        <p className="reel__para">{m?.eligibility}</p>
      </Section>

      <Section icon={<Target size={16} />} title="Exam Pattern & Passing">
        <div className="exam-list">
          {(
            [
              ['Format', e.format],
              ['Duration', e.duration],
              ['Questions', e.questions],
              ['Passing', e.passing],
              ['Negative marking', e.negativeMarking],
              ['Validity', m?.validity ?? e.validity],
              ['Fee', m?.fee ?? e.fee],
            ] as [string, string | undefined][]
          )
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div className="exam-row" key={k}>
                <span className="exam-row__k">{k}</span>
                <span className="exam-row__v">{v}</span>
              </div>
            ))}
        </div>
      </Section>

      {m?.registration && (
        <Section icon={<CheckSquare size={16} />} title="Registration Process">
          <ol className="steps">
            {m.registration.map((s, i) => (
              <li key={i}>
                <span className="steps__n">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {m?.studyPlan && (
        <Section icon={<Calendar size={16} />} title="Recommended Study Plan">
          <div className="plan">
            {m.studyPlan.map((p, i) => (
              <div className="planrow" key={i}>
                <div className="planrow__phase">{p.phase}</div>
                <div className="planrow__focus">{p.focus}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {m?.mnemonics && (
        <Section icon={<Bulb size={16} />} title="Memory Tricks">
          <div className="terms">
            {m.mnemonics.map((mn, i) => (
              <div className="term" key={i}>
                <div className="term__t">{mn.topic}</div>
                <div className="term__d">{mn.trick}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {m?.revisionChecklist && (
        <Section icon={<CheckSquare size={16} />} title="Final Revision Checklist">
          <div className="checklist">
            {m.revisionChecklist.map((c, i) => (
              <label className="checkrow" key={i}>
                <input type="checkbox" />
                <span>{c}</span>
              </label>
            ))}
          </div>
        </Section>
      )}
    </SubView>
  );
}

/* ----------------------------------------------------------- Careers view */

function Careers({ course, onBack }: { course: Course; onBack: () => void }) {
  const m = course.meta;
  return (
    <SubView title="Careers, Fees & Resources" subtitle={course.shortTitle} onBack={onBack}>
      <Section icon={<Briefcase size={16} />} title="Career Opportunities & Salary">
        <div className="careers">
          {m?.careers.map((c, i) => (
            <div className="careerrow" key={i}>
              <div className="careerrow__role">{c.role}</div>
              <div className="careerrow__salary">{c.salary}</div>
            </div>
          ))}
        </div>
        <p className="hub__disclaimer" style={{ marginTop: 12 }}>
          Salary ranges are indicative (India / US where noted) and vary widely by role,
          city, employer and experience.
        </p>
      </Section>

      <Section icon={<BookOpen size={16} />} title="Recommended Books & Resources">
        <div className="books">
          {m?.books.map((b, i) => (
            <div className="bookrow" key={i}>
              <BookOpen size={15} />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<Info size={16} />} title="Official Sources">
        <div className="src-list">
          {course.sources.map((s) => (
            <a className="src" href={s.url} target="_blank" rel="noreferrer" key={s.url}>
              <span className="src__name">{s.name}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>
      </Section>
    </SubView>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="gsection">
      <div className="gsection__head">
        <span className="gsection__ic">{icon}</span>
        {title}
      </div>
      <div className="gsection__body">{children}</div>
    </div>
  );
}
