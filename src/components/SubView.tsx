import type { ReactNode } from 'react';
import { ArrowLeft } from './Icons';

interface Props {
  title: string;
  subtitle?: string;
  onBack: () => void;
  children: ReactNode;
}

/** Standard scrollable sub-screen with a sticky header and back button. */
export default function SubView({ title, subtitle, onBack, children }: Props) {
  return (
    <div className="subview">
      <div className="subview__bar">
        <button className="topbar__back" onClick={onBack} aria-label="Back">
          <ArrowLeft size={19} />
        </button>
        <div className="subview__titles">
          <div className="subview__title">{title}</div>
          {subtitle && <div className="subview__sub">{subtitle}</div>}
        </div>
      </div>
      <div className="subview__body">{children}</div>
    </div>
  );
}
