import type { Course } from '../types';
import { ChevronRight, Sun, Moon } from './Icons';
import { accentVars } from '../lib/accent';

interface Props {
  courses: Course[];
  onOpen: (id: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Home({ courses, onOpen, theme, onToggleTheme }: Props) {
  return (
    <div className="home">
      <div className="home__brandrow">
        <div className="brand">
          <div className="brand__mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M5 6h14M5 12h14M5 18h9" />
            </svg>
          </div>
          <div>
            <div className="brand__name">Reel Finance Academy</div>
            <div className="brand__tag">Learn by swiping · verified curricula</div>
          </div>
        </div>
        <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>

      <div className="home__hero">
        <div className="home__eyebrow">Finance certifications, reimagined</div>
        <h1 className="home__title">
          Master finance exams, <em>one swipe</em> at a time.
        </h1>
        <p className="home__sub">
          Six flagship certifications broken into bite-size reels — full syllabus, exam
          patterns, and exam-frequent MCQs. Swipe up to learn.
        </p>
      </div>

      <div className="home__sectionlabel">Choose a course</div>
      <div className="course-grid">
        {courses.map((c) => {
          const topics = c.modules.reduce((a, m) => a + m.topics.length, 0);
          const mcqs = c.modules.reduce(
            (a, m) => a + m.topics.reduce((b, t) => b + t.mcqs.length, 0),
            0
          );
          return (
            <button
              className="course-card"
              key={c.id}
              onClick={() => onOpen(c.id)}
              style={accentVars(c.accent)}
            >
              <div className="course-card__glyph">{c.glyph}</div>
              <div className="course-card__body">
                <div className="course-card__provider" style={{ color: c.accent }}>
                  {c.provider}
                </div>
                <div className="course-card__title">{c.title}</div>
                <div className="course-card__tagline">{c.tagline}</div>
                <div className="course-card__meta">
                  <span>
                    <b>{c.modules.length}</b> modules
                  </span>
                  <span>
                    <b>{topics}</b> topics
                  </span>
                  <span>
                    <b>{mcqs}+</b> MCQs
                  </span>
                </div>
              </div>
              <span className="course-card__arrow">
                <ChevronRight size={20} />
              </span>
            </button>
          );
        })}
      </div>

      <div className="home__foot">
        <b>Verified content.</b> Every course is distilled from its official provider
        curriculum and recognised study material — Bloomberg for Market Concepts, NISM /
        SEBI, CFI, CFA Institute, NSE Academy and standard financial-accounting texts.
        This app is an independent study aid and is not affiliated with or endorsed by
        these organisations.
      </div>
    </div>
  );
}
