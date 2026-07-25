import { useMemo, useState } from 'react';
import type { Course, GlossaryItem, KeyTerm } from '../types';
import SubView from './SubView';
import { Sigma, ChevronRight } from './Icons';

/* ----------------------------------------------------------- Formula Sheet */

export function FormulaSheet({ course, onBack }: { course: Course; onBack: () => void }) {
  // Curated formulas from meta, plus any formulas embedded in the reels.
  const reelFormulas = course.modules
    .flatMap((m) => m.topics)
    .flatMap((t) => t.reels)
    .filter((r) => r.formula)
    .map((r) => ({ name: r.title, formula: r.formula!, note: undefined as string | undefined }));

  const seen = new Set<string>();
  const all = [...(course.meta?.formulas ?? []), ...reelFormulas].filter((f) => {
    const k = f.formula.replace(/\s/g, '');
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  return (
    <SubView title="Formula Sheet" subtitle={`${all.length} key formulas`} onBack={onBack}>
      <div className="fsheet">
        {all.map((f, i) => (
          <div className="fcard" key={i}>
            <div className="fcard__ic">
              <Sigma size={16} />
            </div>
            <div className="fcard__body">
              <div className="fcard__name">{f.name}</div>
              <div className="fcard__formula">{f.formula}</div>
              {f.note && <div className="fcard__note">{f.note}</div>}
            </div>
          </div>
        ))}
      </div>
    </SubView>
  );
}

/* -------------------------------------------------------------- Flashcards */

export function Flashcards({ course, onBack }: { course: Course; onBack: () => void }) {
  const cards = useMemo<KeyTerm[]>(() => {
    const fromReels = course.modules
      .flatMap((m) => m.topics)
      .flatMap((t) => t.reels)
      .flatMap((r) => r.keyTerms ?? []);
    const fromGlossary: KeyTerm[] = (course.meta?.glossary ?? []).map((g) => ({
      term: g.term,
      def: g.def,
    }));
    const seen = new Set<string>();
    return [...fromReels, ...fromGlossary].filter((c) => {
      const k = c.term.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, [course]);

  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!cards.length) {
    return (
      <SubView title="Flashcards" onBack={onBack}>
        <p className="reel__para">No flashcards yet for this course.</p>
      </SubView>
    );
  }

  const card = cards[i];
  function go(dir: number) {
    setFlipped(false);
    setI((n) => (n + dir + cards.length) % cards.length);
  }

  return (
    <SubView title="Flashcards" subtitle={`${i + 1} of ${cards.length} · tap to flip`} onBack={onBack}>
      <button
        className={`flashcard ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        aria-label="Flip card"
      >
        <div className="flashcard__inner">
          <div className="flashcard__face flashcard__front">
            <span className="flashcard__hint">TERM</span>
            <span className="flashcard__term">{card.term}</span>
            <span className="flashcard__tap">Tap to reveal</span>
          </div>
          <div className="flashcard__face flashcard__back">
            <span className="flashcard__hint">DEFINITION</span>
            <span className="flashcard__def">{card.def}</span>
          </div>
        </div>
      </button>
      <div className="flashnav">
        <button className="btn btn--ghost" onClick={() => go(-1)}>
          Previous
        </button>
        <button className="btn" onClick={() => go(1)}>
          Next card
        </button>
      </div>
    </SubView>
  );
}

/* ---------------------------------------------------------------- Glossary */

export function Glossary({ course, onBack }: { course: Course; onBack: () => void }) {
  const [query, setQuery] = useState('');
  const items: GlossaryItem[] = useMemo(() => {
    const fromMeta = course.meta?.glossary ?? [];
    const fromTerms = course.modules
      .flatMap((m) => m.topics)
      .flatMap((t) => t.reels)
      .flatMap((r) => r.keyTerms ?? [])
      .map((k) => ({ term: k.term, def: k.def }));
    const seen = new Set<string>();
    return [...fromMeta, ...fromTerms]
      .filter((g) => {
        const k = g.term.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [course]);

  const filtered = items.filter(
    (g) =>
      g.term.toLowerCase().includes(query.toLowerCase()) ||
      g.def.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SubView title="Glossary" subtitle={`${items.length} financial terms`} onBack={onBack}>
      <input
        className="search"
        placeholder="Search terms…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="glist">
        {filtered.map((g, i) => (
          <div className="gitem" key={i}>
            <div className="gitem__term">{g.term}</div>
            <div className="gitem__def">{g.def}</div>
          </div>
        ))}
        {!filtered.length && <p className="reel__para">No terms match “{query}”.</p>}
      </div>
    </SubView>
  );
}

/* ------------------------------------------------------------- Syllabus */

export function SyllabusView({ course, onBack }: { course: Course; onBack: () => void }) {
  const groups = course.meta?.syllabus ?? [];
  const total = groups.reduce((a, g) => a + g.points.length, 0);
  return (
    <SubView title="Module-wise Syllabus" subtitle={`${groups.length} modules · ${total} topics`} onBack={onBack}>
      <div className="syllabus-full">
        {groups.map((g, i) => (
          <div className="sfgroup" key={i}>
            <div className="sfgroup__head">
              <span className="syl__num">{String(i + 1).padStart(2, '0')}</span>
              {g.module}
            </div>
            <div className="sfgroup__points">
              {g.points.map((p) => (
                <div className="sfpoint" key={p}>
                  <ChevronRight size={13} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SubView>
  );
}
