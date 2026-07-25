// Minimal, consistent stroke-based icon set (inherits currentColor).
interface P {
  size?: number;
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const ChevronUp = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="m18 15-6-6-6 6" /></svg>
);
export const ChevronDown = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="m6 9 6 6 6-6" /></svg>
);
export const ChevronRight = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="m9 18 6-6-6-6" /></svg>
);
export const ArrowLeft = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
);
export const Sun = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const Moon = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
);
export const Check = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M20 6 9 17l-5-5" /></svg>
);
export const X = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M18 6 6 18M6 6l12 12" /></svg>
);
export const Book = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
  </svg>
);
export const Link = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
    <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
  </svg>
);
export const Spark = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
  </svg>
);
export const Menu = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);
export const ListIcon = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </svg>
);
export const Flame = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M12 2c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C9 8 9 5 12 2Z" />
  </svg>
);
