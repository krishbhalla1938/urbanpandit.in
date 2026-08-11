import { useMemo, useState } from 'react';
import type { MCQ } from '../types';
import { recordTest } from '../lib/progress';
import { Check, X, ArrowLeft, Flame } from './Icons';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

interface Props {
  courseId: string;
  testId: string;
  title: string;
  mcqs: MCQ[];
  /** Shuffle questions (used by mock tests). */
  shuffle?: boolean;
  onExit: () => void;
}

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Full-screen test with per-question feedback, scoring and progress saving. */
export default function TestRunner({ courseId, testId, title, mcqs, shuffle, onExit }: Props) {
  const questions = useMemo(() => (shuffle ? shuffled(mcqs) : mcqs), [mcqs, shuffle]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [saved, setSaved] = useState(false);

  const q = questions[i];
  const answered = picked !== null;
  const isLast = i === questions.length - 1;

  function choose(idx: number) {
    if (answered) return;
    setPicked(idx);
    if (idx === q.answer) setCorrect((c) => c + 1);
  }
  function next() {
    if (isLast) {
      if (!saved) {
        recordTest(courseId, testId, { correct, total: questions.length, at: Date.now() });
        setSaved(true);
      }
      setDone(true);
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
  }
  function restart() {
    setI(0);
    setPicked(null);
    setCorrect(0);
    setDone(false);
    setSaved(false);
  }

  if (done) {
    const pct = Math.round((correct / questions.length) * 100);
    const pass = pct >= 60;
    return (
      <div className="testview">
        <div className="testbar">
          <button className="topbar__back" onClick={onExit} aria-label="Back">
            <ArrowLeft size={19} />
          </button>
          <span className="testbar__title">{title}</span>
        </div>
        <div className="result">
          <div
            className="result__ring"
            style={{ background: `conic-gradient(var(--accent) ${pct * 3.6}deg, var(--line) 0deg)` }}
          >
            <div className="result__ringinner">
              <div className="result__score">{pct}%</div>
              <div className="result__scoresub">
                {correct}/{questions.length}
              </div>
            </div>
          </div>
          <h2>{pass ? 'Passed 🎉' : 'Keep practising'}</h2>
          <p>
            {pass
              ? 'Your best score for this test has been saved to your analytics.'
              : 'Aim for 60%+. Review the reels and retake — your best score is tracked.'}
          </p>
          <div style={{ display: 'flex', gap: 10, width: '100%', maxWidth: 320 }}>
            <button className="btn btn--ghost" onClick={restart}>
              Retake
            </button>
            <button className="btn" onClick={onExit}>
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="testview">
      <div className="testbar">
        <button className="topbar__back" onClick={onExit} aria-label="Back">
          <ArrowLeft size={19} />
        </button>
        <span className="testbar__title">{title}</span>
        <span className="topbar__count">
          {i + 1}/{questions.length}
        </span>
      </div>
      <div className="testbar__rail">
        <div className="testbar__railfill" style={{ width: `${((i + (answered ? 1 : 0)) / questions.length) * 100}%` }} />
      </div>

      <div className="testview__body">
        <div className="quiz__progress">
          Question {i + 1} of {questions.length}
          {q.tricky && (
            <span className="tricky-badge">
              <Flame size={11} /> Tricky
            </span>
          )}
        </div>
        <div className="quiz__q">{q.q}</div>

        <div className="quiz__options">
          {q.options.map((opt, idx) => {
            let cls = 'opt';
            if (answered) {
              if (idx === q.answer) cls += ' opt--correct';
              else if (idx === picked) cls += ' opt--wrong';
              else cls += ' opt--muted';
            }
            return (
              <button key={idx} className={cls} onClick={() => choose(idx)} disabled={answered}>
                <span className="opt__letter">
                  {answered && idx === q.answer ? (
                    <Check size={14} />
                  ) : answered && idx === picked ? (
                    <X size={14} />
                  ) : (
                    LETTERS[idx]
                  )}
                </span>
                <span className="opt__text">{opt}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="explain">
            <div className="explain__label">{picked === q.answer ? 'Correct' : 'Explanation'}</div>
            <div className="explain__text">{q.explanation}</div>
          </div>
        )}
      </div>

      {answered && (
        <div className="testview__foot">
          <button className="btn" onClick={next}>
            {isLast ? 'Finish & score' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}
