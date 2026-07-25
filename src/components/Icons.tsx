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
export const Play = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="m6 4 14 8-14 8V4Z" /></svg>
);
export const Sigma = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M18 5H7l6 7-6 7h11" /></svg>
);
export const Cards = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="6" width="13" height="14" rx="2" />
    <path d="M8 6V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-1" />
  </svg>
);
export const BookOpen = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M12 7v14M12 7a4 4 0 0 0-4-4H3v14h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5V3h-5a4 4 0 0 0-4 4Z" />
  </svg>
);
export const Target = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" />
  </svg>
);
export const Briefcase = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);
export const Calendar = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M3 9h18M8 2v4M16 2v4" />
  </svg>
);
export const TrendingUp = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="m3 17 6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
);
export const CheckSquare = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M9 11l3 3 8-8" /><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" /></svg>
);
export const Info = ({ size = 20 }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
);
export const Bulb = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c.7.7 1 1.5 1 2h6c0-.5.3-1.3 1-2a6 6 0 0 0-4-10Z" />
  </svg>
);
export const Rocket = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5a2.1 2.1 0 0 0-2.5-2.5Z" />
    <path d="M9 15l-3-3c1-4 4-8 10-9 -1 6 -5 9 -9 10Z" />
    <circle cx="14" cy="10" r="1.4" />
  </svg>
);
