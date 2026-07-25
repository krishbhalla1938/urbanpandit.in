import { useEffect, useMemo, useRef, useState } from 'react';
import type { Course, FeedItem, Module, Reel } from '../types';
import Quiz from './Quiz';
import { ArrowLeft, ChevronDown, ChevronUp, Link as LinkIcon, Book, Menu, X, ListIcon } from './Icons';

/** Flatten a course tree into the ordered vertical feed of slides. */
function buildFeed(course: Course): FeedItem[] {
  const items: FeedItem[] = [];
  items.push({ type: 'cover', course });
  items.push({ type: 'overview', course });
  items.push({ type: 'exam', course });
  items.push({ type: 'syllabus', course });

  for (const module of course.modules) {
    items.push({ type: 'module', course, module });
    for (const topic of module.topics) {
      items.push({ type: 'topic', course, module, topic });
      topic.reels.forEach((reel, index) =>
        items.push({
          type: 'reel',
          course,
          module,
          topic,
          reel,
          index,
          total: topic.reels.length,
        })
      );
      if (topic.mcqs.length) items.push({ type: 'quiz', course, module, topic });
    }
  }
  items.push({ type: 'sources', course });
  return items;
}

interface OutlineTopic {
  id: string;
  title: string;
  index: number;
  quizIndex?: number;
}
interface OutlineModule {
  id: string;
  title: string;
  index: number;
  topics: OutlineTopic[];
}

/** Build the jump-to outline (module/topic → feed index) for the menu. */
function buildOutline(feed: FeedItem[]): OutlineModule[] {
  const mods: OutlineModule[] = [];
  feed.forEach((item, i) => {
    if (item.type === 'module') {
      mods.push({ id: item.module.id, title: item.module.title, index: i, topics: [] });
    } else if (item.type === 'topic') {
      mods[mods.length - 1]?.topics.push({ id: item.topic.id, title: item.topic.title, index: i });
    } else if (item.type === 'quiz') {
      const m = mods[mods.length - 1];
      const t = m?.topics[m.topics.length - 1];
      if (t) t.quizIndex = i;
    }
  });
  return mods;
}

interface Props {
  course: Course;
  onExit: () => void;
}

export default function CourseFeed({ course, onExit }: Props) {
  const feed = useMemo(() => buildFeed(course), [course]);
  const outline = useMemo(() => buildOutline(feed), [feed]);
  const feedRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply the course accent to this subtree. height:100% is required so the
  // scroll-snap feed inside can resolve its own 100% height.
  const accentStyle = {
    ['--accent' as string]: course.accent,
    height: '100%',
  } as React.CSSProperties;

  // Track the active slide via IntersectionObserver on scroll-snap children.
  useEffect(() => {
    const root = feedRef.current;
    if (!root) return;
    const slides = Array.from(root.querySelectorAll<HTMLElement>('.slide'));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            const idx = Number(e.target.getAttribute('data-idx'));
            setActive(idx);
          }
        }
      },
      { root, threshold: [0.6] }
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [feed]);

  // Keyboard navigation (desktop): arrows / space / j-k.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const root = feedRef.current;
      if (!root) return;
      if (e.key === 'Escape') {
        if (menuOpen) setMenuOpen(false);
        else onExit();
        return;
      }
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'j', 'k'].includes(e.key)) {
        e.preventDefault();
        const dir = e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'k' ? -1 : 1;
        goTo(active + dir);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, menuOpen]);

  function goTo(idx: number) {
    const root = feedRef.current;
    if (!root) return;
    const clamped = Math.max(0, Math.min(feed.length - 1, idx));
    const target = root.querySelector<HTMLElement>(`.slide[data-idx="${clamped}"]`);
    target?.scrollIntoView({ behavior: 'smooth' });
  }

  function jumpTo(idx: number) {
    setMenuOpen(false);
    // Let the drawer close first, then scroll.
    requestAnimationFrame(() => goTo(idx));
  }

  const current = feed[active];
  const currentModuleId = current && 'module' in current ? current.module.id : null;
  const moduleIndex = currentModuleId
    ? course.modules.findIndex((m) => m.id === currentModuleId)
    : -1;
  const topbarTitle =
    current && 'module' in current ? current.module.title : course.shortTitle;

  const atStart = active === 0;
  const atEnd = active === feed.length - 1;

  return (
    <div style={accentStyle}>
      {/* Top overlay bar */}
      <div className="topbar">
        <button className="topbar__back" onClick={onExit} aria-label="Back to courses">
          <ArrowLeft size={19} />
        </button>
        <span className="topbar__title">{topbarTitle}</span>
        <span className="topbar__count">
          {active + 1}/{feed.length}
        </span>
        <button
          className="topbar__menu"
          onClick={() => setMenuOpen(true)}
          aria-label="Open course menu"
        >
          <Menu size={19} />
        </button>
      </div>

      {/* Module progress rail — tap a segment to jump to that module */}
      <div className="railwrap">
        {course.modules.map((m, mi) => {
          const mo = outline.find((o) => o.id === m.id);
          return (
            <button
              className="rail"
              key={m.id}
              aria-label={`Go to module ${mi + 1}`}
              onClick={() => mo && goTo(mo.index)}
            >
              <div
                className="rail__fill"
                style={{
                  width: mi < moduleIndex ? '100%' : mi === moduleIndex ? '55%' : '0%',
                }}
              />
            </button>
          );
        })}
      </div>

      <div className="feed" ref={feedRef}>
        {feed.map((item, idx) => (
          <section className="slide" data-idx={idx} key={idx}>
            <SlideBody item={item} onExit={onExit} />
          </section>
        ))}
      </div>

      {/* On-screen prev / next buttons for tap-only navigation */}
      <div className="navbtns">
        <button
          className="navbtn"
          onClick={() => goTo(active - 1)}
          disabled={atStart}
          aria-label="Previous slide"
        >
          <ChevronUp size={22} />
        </button>
        <button
          className="navbtn navbtn--primary"
          onClick={() => goTo(active + 1)}
          disabled={atEnd}
          aria-label="Next slide"
        >
          <ChevronDown size={22} />
        </button>
      </div>

      {/* Jump-to menu (table of contents) */}
      {menuOpen && (
        <div className="drawer" onClick={() => setMenuOpen(false)}>
          <div className="drawer__panel" onClick={(e) => e.stopPropagation()}>
            <div className="drawer__head">
              <div>
                <div className="drawer__eyebrow">
                  <ListIcon size={13} /> Jump to
                </div>
                <div className="drawer__title">{course.shortTitle}</div>
              </div>
              <button className="icon-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            <div className="drawer__body">
              <button className="drawer__link drawer__link--top" onClick={() => jumpTo(0)}>
                Course cover
              </button>
              <button className="drawer__link drawer__link--top" onClick={() => jumpTo(2)}>
                Exam pattern
              </button>
              <button className="drawer__link drawer__link--top" onClick={() => jumpTo(3)}>
                Full syllabus
              </button>
              {outline.map((m, mi) => (
                <div className="drawer__mod" key={m.id}>
                  <button
                    className={`drawer__modhead ${m.id === currentModuleId ? 'is-active' : ''}`}
                    onClick={() => jumpTo(m.index)}
                  >
                    <span className="drawer__modnum">{String(mi + 1).padStart(2, '0')}</span>
                    <span>{m.title}</span>
                  </button>
                  {m.topics.map((t) => (
                    <div className="drawer__topicrow" key={t.id}>
                      <button className="drawer__topic" onClick={() => jumpTo(t.index)}>
                        {t.title}
                      </button>
                      {t.quizIndex !== undefined && (
                        <button
                          className="drawer__quiz"
                          onClick={() => jumpTo(t.quizIndex!)}
                          aria-label={`Quiz for ${t.title}`}
                        >
                          Quiz
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ))}
              <button className="drawer__link drawer__link--top" onClick={() => jumpTo(feed.length - 1)}>
                Sources &amp; finish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ----------------------------------------------------------- Slide bodies */

function SlideBody({ item, onExit }: { item: FeedItem; onExit: () => void }) {
  switch (item.type) {
    case 'cover':
      return <CoverSlide course={item.course} />;
    case 'overview':
      return <OverviewSlide course={item.course} />;
    case 'exam':
      return <ExamSlide course={item.course} />;
    case 'syllabus':
      return <SyllabusSlide course={item.course} />;
    case 'module':
      return <ModuleSlide course={item.course} module={item.module} />;
    case 'topic':
      return <TopicSlide module={item.module} topic={item.topic} />;
    case 'reel':
      return <ReelSlide reel={item.reel} index={item.index} total={item.total} />;
    case 'quiz':
      return <Quiz topicTitle={item.topic.title} mcqs={item.topic.mcqs} />;
    case 'sources':
      return <SourcesSlide course={item.course} onExit={onExit} />;
  }
}

function CoverSlide({ course }: { course: Course }) {
  return (
    <div className="slide__scroll cover">
      <div className="cover__glyph">{course.glyph}</div>
      <div className="cover__provider" style={{ color: 'var(--accent)' }}>
        {course.provider}
      </div>
      <h1>{course.title}</h1>
      <p className="cover__tag">{course.tagline}</p>
      <div className="cover__hint">
        <span className="swipe-arrow">
          <ChevronUp size={18} />
        </span>
        Swipe up · or use the arrows &amp; menu
      </div>
    </div>
  );
}

function OverviewSlide({ course }: { course: Course }) {
  const totalTopics = course.modules.reduce((a, m) => a + m.topics.length, 0);
  const totalMcqs = course.modules.reduce(
    (a, m) => a + m.topics.reduce((b, t) => b + t.mcqs.length, 0),
    0
  );
  return (
    <div className="slide__scroll">
      <span className="kicker">
        <span className="kicker__dot" /> Course overview
      </span>
      <h2>What this course is</h2>
      <div className="reel__body">
        {course.overview.map((p, i) => (
          <p className="reel__para" key={i}>
            {p}
          </p>
        ))}
      </div>
      <div className="stat-row">
        <div className="stat">
          <div className="stat__k">Modules</div>
          <div className="stat__v">{course.modules.length}</div>
        </div>
        <div className="stat">
          <div className="stat__k">Topics</div>
          <div className="stat__v">{totalTopics}</div>
        </div>
        <div className="stat">
          <div className="stat__k">Practice MCQs</div>
          <div className="stat__v">{totalMcqs}+</div>
        </div>
        <div className="stat">
          <div className="stat__k">Provider</div>
          <div className="stat__v" style={{ fontSize: '1rem' }}>
            {course.provider}
          </div>
        </div>
      </div>
      <MoreHint />
    </div>
  );
}

function ExamSlide({ course }: { course: Course }) {
  const e = course.examPattern;
  const rows: [string, string | undefined][] = [
    ['Format', e.format],
    ['Duration', e.duration],
    ['Questions', e.questions],
    ['Passing', e.passing],
    ['Negative marking', e.negativeMarking],
    ['Validity', e.validity],
    ['Fee', e.fee],
  ];
  return (
    <div className="slide__scroll">
      <span className="kicker">
        <span className="kicker__dot" /> Exam pattern
      </span>
      <h2>How you're tested</h2>
      <div className="exam-list">
        {rows
          .filter(([, v]) => v)
          .map(([k, v]) => (
            <div className="exam-row" key={k}>
              <span className="exam-row__k">{k}</span>
              <span className="exam-row__v">{v}</span>
            </div>
          ))}
      </div>
      <MoreHint />
    </div>
  );
}

function SyllabusSlide({ course }: { course: Course }) {
  return (
    <div className="slide__scroll">
      <span className="kicker">
        <span className="kicker__dot" /> Full syllabus
      </span>
      <h2>Everything you'll cover</h2>
      <div className="syl">
        {course.modules.map((m, i) => (
          <div className="syl__mod" key={m.id}>
            <div className="syl__modhead">
              <span className="syl__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="syl__modtitle">{m.title}</span>
            </div>
            <div className="syl__topics">{m.topics.map((t) => t.title).join(' · ')}</div>
          </div>
        ))}
      </div>
      <MoreHint />
    </div>
  );
}

function ModuleSlide({ course, module }: { course: Course; module: Module }) {
  const n = course.modules.findIndex((m) => m.id === module.id) + 1;
  return (
    <div className="slide__scroll center-col">
      <div className="module-intro__n">{String(n).padStart(2, '0')}</div>
      <span className="topic-intro__label">Module {n}</span>
      <h1>{module.title}</h1>
      <p className="reel__para" style={{ marginTop: 8 }}>
        {module.summary}
      </p>
      <div className="chips">
        {module.topics.map((t) => (
          <span className="chip" key={t.id}>
            {t.title}
          </span>
        ))}
      </div>
    </div>
  );
}

function TopicSlide({ module, topic }: { module: Module; topic: Module['topics'][0] }) {
  const tricky = topic.mcqs.filter((m) => m.tricky).length;
  return (
    <div className="slide__scroll center-col">
      <span className="topic-intro__label">{module.title}</span>
      <h1>{topic.title}</h1>
      <div className="chips" style={{ marginTop: 18 }}>
        <span className="chip">{topic.reels.length} reels</span>
        <span className="chip">{topic.mcqs.length} MCQs</span>
        {tricky > 0 && <span className="chip chip--tricky">{tricky} tricky</span>}
      </div>
      <MoreHint label="Swipe up to learn" />
    </div>
  );
}

function ReelSlide({ reel, index, total }: { reel: Reel; index: number; total: number }) {
  return (
    <div className="slide__scroll">
      <span className="kicker">
        <span className="kicker__dot" /> {reelKindLabel(reel.kind)} · {index + 1}/{total}
      </span>
      <h2>{reel.title}</h2>
      {reel.subtitle && <h3 className="reel__sub">{reel.subtitle}</h3>}

      <div className="reel__body">
        {reel.body.map((b, i) =>
          reel.kind === 'list' ? (
            <div className="reel__point" key={i}>
              <span className="reel__para">{b}</span>
            </div>
          ) : (
            <p className="reel__para" key={i}>
              {b}
            </p>
          )
        )}
      </div>

      {reel.formula && <div className="formula">{reel.formula}</div>}

      {reel.keyTerms && reel.keyTerms.length > 0 && (
        <div className="terms">
          {reel.keyTerms.map((t) => (
            <div className="term" key={t.term}>
              <div className="term__t">{t.term}</div>
              <div className="term__d">{t.def}</div>
            </div>
          ))}
        </div>
      )}

      {reel.tip && (
        <div className="tip">
          <b>Exam tip</b>
          <span>{reel.tip}</span>
        </div>
      )}
      <div style={{ height: 8 }} />
    </div>
  );
}

function SourcesSlide({ course, onExit }: { course: Course; onExit: () => void }) {
  return (
    <div className="slide__scroll">
      <span className="kicker">
        <span className="kicker__dot" /> You finished
      </span>
      <h2>{course.shortTitle} — complete</h2>
      <p className="reel__para" style={{ marginTop: 4 }}>
        Every module, topic and practice set for this course is behind you. Content is
        distilled from the official curriculum and verified sources below.
      </p>
      <div className="src-list">
        {course.sources.map((s) => (
          <a className="src" href={s.url} target="_blank" rel="noreferrer" key={s.url}>
            <span className="src__ic">
              <LinkIcon size={17} />
            </span>
            <span className="src__name">{s.name}</span>
            <span className="src__host">{hostOf(s.url)}</span>
          </a>
        ))}
      </div>
      <div className="finish">
        <button className="btn" onClick={onExit}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Book size={16} /> Back to all courses
          </span>
        </button>
      </div>
      <div style={{ height: 8 }} />
    </div>
  );
}

/* ------------------------------------------------------------------ bits */

function MoreHint({ label = 'Swipe up' }: { label?: string }) {
  return (
    <div className="morehint">
      <ChevronDown size={14} /> {label}
    </div>
  );
}

function reelKindLabel(kind: Reel['kind']) {
  switch (kind) {
    case 'formula':
      return 'Formula';
    case 'insight':
      return 'Key insight';
    case 'list':
      return 'Breakdown';
    default:
      return 'Concept';
  }
}

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return '';
  }
}
