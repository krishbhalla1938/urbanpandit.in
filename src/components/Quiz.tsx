import { useState } from 'react';
import type { MCQ } from '../types';
import { Check, X, Spark, Flame } from './Icons';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

interface Props {
  topicTitle: string;
  mcqs: MCQ[];
}

/**
 * An interactive MCQ deck that lives inside a single reel slide.
 * The learner answers one question at a time, sees the explanation, and
 * gets a score summary at the end — all without leaving the vertical feed.
 */
export default function Quiz({ topicTitle, mcqs }: Props) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = mcqs[i];
  const answered = picked !== null;
  const isLast = i === mcqs.length - 1;

  function choose(idx: number) {
    if (answered) return;
    setPicked(idx);
    if (idx === q.answer) setCorrect((c) => c + 1);
  }

  function next() {
    if (isLast) {
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
  }

  if (done) {
    const pct = Math.round((correct / mcqs.length) * 100);
    const pass = pct >= 60;
    return (
      <div className="result">
        <div
          className="result__ring"
          style={{
            background: `conic-gradient(var(--accent) ${pct * 3.6}deg, var(--line) 0deg)`,
          }}
        >
          <div
            style={{
              width: 108,
              height: 108,
              borderRadius: '50%',
              background: 'var(--bg)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div>
              <div className="result__score">{pct}%</div>
              <div className="result__scoresub">
                {correct}/{mcqs.length} correct
              </div>
            </div>
          </div>
        </div>
        <h2>{pass ? 'Strong work.' : 'Keep going.'}</h2>
        <p>
          {pass
            ? `You've got a solid grip on ${topicTitle}. Swipe up for the next topic.`
            : `Review the reels above and retry — repetition is how these exam facts stick.`}
        </p>
        <button className="btn btn--ghost" style={{ maxWidth: 200 }} onClick={restart}>
          Retry quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz__head">
        <span className="quiz__kicker">
          <Spark size={13} /> Exam practice · {topicTitle}
        </span>
        <div className="quiz__progress">
          Question {i + 1} of {mcqs.length}
          {q.tricky && (
            <span className="tricky-badge">
              <Flame size={11} /> Tricky
            </span>
          )}
        </div>
        <div className="quiz__q">{q.q}</div>
      </div>

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
          <div className="explain__label">
            {picked === q.answer ? 'Correct' : 'Explanation'}
          </div>
          <div className="explain__text">{q.explanation}</div>
        </div>
      )}

      {answered && (
        <div className="quiz__foot">
          <button className="btn" onClick={next}>
            {isLast ? 'See score' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}
