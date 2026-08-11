import type { CSSProperties } from 'react';

/**
 * Build the accent CSS variables for a course from its hex colour. The tints
 * are derived with color-mix against the (theme-aware) --bg / --ink so a
 * course's fills and accent-text always match its hue in light and dark mode.
 * Using the literal hex here (rather than nesting var(--accent)) guarantees the
 * tints recompute per course — nested custom-property var() does not.
 */
export function accentVars(hex: string): CSSProperties {
  return {
    ['--accent' as string]: hex,
    ['--accent-deep' as string]: `color-mix(in srgb, ${hex} 86%, #1a1a17)`,
    ['--accent-soft' as string]: `color-mix(in srgb, ${hex} 15%, var(--bg))`,
    ['--accent-ink' as string]: `color-mix(in srgb, ${hex} 72%, var(--ink))`,
  } as CSSProperties;
}
