import { css } from "styled-components";

// JS mirror of the resolved --color-background per theme — used by
// ThemeModeProvider to set the theme-color meta without a getComputedStyle
// layout read. Keep in sync with the CSS vars interpolated below.
export const themeBackground = {
  light: "#ffffff",
  dark: "#0a0f1c",
};

export const tokens = css`
  :root {
    /* Light theme colors */
    --color-primary: #2563eb;
    --color-primary-hover: #1d4ed8;
    --color-secondary: #64748b;
    --color-accent: #06b6d4;
    --color-background: ${themeBackground.light};
    --color-surface: #f8fafc;
    --color-surface-rgb: 248, 250, 252;
    --color-text-primary: #0f172a;
    --color-text-primary-rgb: 15, 23, 42;
    --color-text-secondary: #475569;
    --color-border: #e2e8f0;
    --color-shadow: rgba(0, 0, 0, 0.1);

    /* Dark theme colors */
    --color-dark-primary: #2b8de4;
    --color-dark-primary-hover: #1e6fd6;
    --color-dark-secondary: #94a3b8;
    --color-dark-accent: #22d3ee;
    --color-dark-background: ${themeBackground.dark};
    --color-dark-surface: rgba(17, 24, 39, 0.8);
    --color-dark-text-primary: #ffffff;
    --color-dark-text-secondary: #94a3b8;
    --color-dark-border: #1e293b;
    --color-dark-shadow: rgba(0, 0, 0, 0.4);

    /* Portfolio accent / glass tokens */
    --color-cyan: #00a3ff;
    --color-cyan-rgb: 0, 163, 255;
    --color-cyan-light: #28c9ff;
    --color-cyan-dark: #0a84c7;
    --color-deep-navy: #020617;
    --color-navy: #041126;
    --color-panel-rgb: 226, 232, 240;
    --color-off-white: #0f172a;
    --color-slate: #475569;
    --color-contact-tile-bg: rgba(255, 255, 255, 0.6);
    --color-contact-tile-border: rgba(15, 23, 42, 0.08);
    --color-contact-shadow: rgba(0, 0, 0, 0.08);
    --color-white: #ffffff;
    --color-white-rgb: 255, 255, 255;
    --color-black: #000000;
    --color-black-rgb: 0, 0, 0;

    /* Component tokens */
    --color-tooltip: rgba(40, 142, 221, 0.95);
    --color-tooltip-rgb: 40, 142, 221;
    --color-terminal-bg: #f6f8fa;
    --color-terminal-header-bg: rgba(0, 0, 0, 0.04);
    --color-terminal-border: rgba(0, 0, 0, 0.1);
    --color-terminal-shadow: rgba(0, 0, 0, 0.15);
    --color-code-red: #ff5f56;
    --color-code-yellow: #ffbd2e;
    --color-code-green: #27c93f;
    --color-code-text: #24292f;
    --color-code-comment: #6e7781;
    --color-code-keyword: #cf222e;
    --color-code-type: #953800;
    --color-code-string: #0a3069;
    --color-code-property: #0550ae;
    --color-code-boolean: #0550ae;
    --color-code-variable: #e36209;
    --color-sun-orange: #ffb347;
    --color-sun-yellow: #ffcc33;
    --color-sun-yellow-rgb: 255, 204, 51;
    --color-sun-text: #222222;
    --color-sun-backdrop-rgb: 20, 20, 20;
    --color-sun-button-bg-rgb: 30, 30, 30;
    --color-primary-rgb: 37, 99, 235;
    --color-dark-background-rgb: 10, 15, 28;
    --color-hero-nav-bg: rgba(15, 23, 42, 0.7);

    /* Footer theme tokens (light mode defaults) */
    --color-footer-bg-start: rgba(241, 245, 249, 0.75);
    --color-footer-bg-end: rgba(226, 232, 240, 0.75);
    --color-footer-border: rgba(15, 23, 42, 0.08);
    --color-footer-texture-opacity: 0.25;

    /* Layout tokens */
    --container-max-width: 1200px;

    /* Spacing */
    --spacing-xxs: 0.125rem;
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;

    /* Border radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md:
      0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg:
      0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl:
      0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

    /* Transitions */
    --transition-fast: 150ms ease-in-out;
    --transition-normal: 250ms ease-in-out;
    --transition-slow: 350ms ease-in-out;

    /* Layout helpers */
    --nav-height: 64px;
    --nav-height-mobile: 80px;
    --breakpoint-xl2: 1100px;
  }

  [data-theme="dark"] {
    --color-primary: var(--color-dark-primary);
    --color-primary-hover: var(--color-dark-primary-hover);
    --color-secondary: var(--color-dark-secondary);
    --color-accent: var(--color-dark-accent);
    --color-background: var(--color-dark-background);
    --color-surface: var(--color-dark-surface);
    --color-surface-rgb: 17, 24, 39;
    --color-text-primary: var(--color-dark-text-primary);
    --color-text-primary-rgb: 255, 255, 255;
    --color-text-secondary: var(--color-dark-text-secondary);
    --color-border: var(--color-dark-border);
    --color-shadow: var(--color-dark-shadow);
    --color-panel-rgb: 8, 18, 37;
    --color-off-white: #f8fafc;
    --color-slate: #94a3b8;
    --color-contact-tile-bg: rgba(255, 255, 255, 0.04);
    --color-contact-tile-border: rgba(255, 255, 255, 0.08);
    --color-contact-shadow: rgba(0, 0, 0, 0.45);
    --color-footer-bg-start: rgba(2, 6, 23, 0.75);
    --color-footer-bg-end: rgba(4, 17, 38, 0.75);
    --color-footer-border: rgba(var(--color-white-rgb), 0.06);
    --color-footer-texture-opacity: 0.4;

    /* Code terminal dark palette */
    --color-terminal-bg: #0b1220;
    --color-terminal-header-bg: rgba(255, 255, 255, 0.03);
    --color-terminal-border: rgba(255, 255, 255, 0.1);
    --color-terminal-shadow: rgba(0, 0, 0, 0.5);
    --color-code-text: #abb2bf;
    --color-code-comment: #5c6370;
    --color-code-keyword: #c678dd;
    --color-code-type: #e5c07b;
    --color-code-string: #98c379;
    --color-code-property: #e06c75;
    --color-code-boolean: #56b6c2;
    --color-code-variable: #61afef;
  }
`;
