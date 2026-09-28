# Architecture Playbook — Derek.dev Portfolio

This document records the major architectural decisions in the `feature/ui-refresh` branch of the portfolio app, what was implemented, why it was chosen, the trade-offs involved, and how future decisions should be made.

---

## 1. Build & Runtime Environment

### Decision: Vite 8 (rolldown) + Vitest with React 18

- **What:** `vite@8.3.0` + `@vitejs/plugin-react`, `vitest@5` (jsdom, v8 coverage), React 18.2.0, React-DOM client root in `src/index.js`. Root `index.html` is the Vite entry; `public/` is copied verbatim to `build/`.
- **Why:** Supersedes CRA — `react-scripts@5.0.1` is frozen upstream and anchored most npm-audit findings (38 → 12 after the migration). Vite builds in ~0.7s vs ~15s and Vitest runs the suite in ~26s vs ~61s. Measured improvement on the same code: Lighthouse perf 0.70 → 0.94, TBT ~1.4s → ~215ms.
- **Migration notes:** `process.env.PUBLIC_URL` → `import.meta.env.BASE_URL` (includes the trailing `/`, so `BASE_URL + "x"` not `BASE_URL + "/x"`). The GitHub Pages base is `base: "/Software_Engineer_Portfolio/"` in `vite.config.mjs`; `lighthouse:check` rebuilds with `--base=./` so lhci's root-served `build/` resolves assets. JSX lives in `.js` files — a `transformWithOxc` pre-plugin in `vite.config.mjs` handles it (rolldown's parser rejects JSX in `.js`); bare `src/` specifiers resolve via generated `resolve.alias` entries (needed for Vitest too, which doesn't consult `resolveId` plugins). `jest.*` → `vi.*` (globals: true). Landmine: `index.html` links the manifest as `./manifest.json` (page lives at a trailing-slash URL, so it resolves correctly in dev and prod); under `--base=./` (the lighthouse build) Vite resolves that href as a build asset against **project root** — a stray root-level `manifest.json` (e.g. lhci's run-manifest, pre-`outputDir` config) gets bundled as the app manifest and fails parsing in-browser. Keep the repo root free of stray `manifest.json`/report files; lhci output goes to `.lighthouseci/`.
- **Future guidance:** If SEO or SSG become priorities, evaluate Next.js. The remaining audit findings live in tooling deps (playwright/lhci/madge chains) — revisit when they publish fixes.

---

## 2. State Management

### Decision: React Context for language and general UI state

- **What:** `src/common/LanguageProvider` and `src/common/ContactVisibilityProvider` wrap the app in `src/index.js`. `useLanguage` returns `{ language, setLanguage }`; `useContactVisibility` returns `{ isContactVisible, setContactVisibility }`.
- **Why:** `language` (a string) and `isContactVisible` (a boolean) are the only global states. Context removes the `@reduxjs/toolkit` and `react-redux` dependencies and the `Provider`/store boilerplate while still giving any component a stable, single source of truth.
- **Trade-offs:** Context does not provide automatic memoization like `createSelector`; context consumers re-render whenever the provider value changes. With only these two small states and infrequent updates, this is acceptable. If API or complex state is added later, re-evaluate Redux Toolkit, Zustand, or Jotai.
- **Future guidance:** Keep global UI flags in dedicated providers under `src/common/*Provider/`. Avoid mixing data fetching with UI state. If more than three providers are needed, compose them in a single `AppProviders` component.

---

## 3. Styling & Theming

### Decision: CSS custom properties as the single source of truth, with `styled-components` for scoped styles

- **What:** `src/GlobalStyles.js` declares `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`, `var(--shadow-*)`, and `var(--transition-*)`. Dark mode flips these values via the `data-theme="dark"` attribute on `<html>`. `Main` and `StarField` were moved to `src/common/Main/` and `src/common/StarField/` so `GlobalStyles` contains only global rules.
- **Why:** CSS variables update instantly without re-rendering the styled-components tree; `styled-components` still provides scoped, co-located styles for components; theming is decoupled from JavaScript. Moving UI components out of `GlobalStyles` keeps it from becoming a dumping ground and makes `StarField` independently testable.
- **Trade-offs:** `styled-components` `ThemeProvider` is kept only to inject `theme.breakpoint`; it no longer drives color/spacing values, which reduces its dynamic capabilities.
- **Future guidance:** Add any new design token to `:root` and its `data-theme="dark"` mirror. Never hardcode colors or spacing in `styled.js` files. Keep `GlobalStyles` free of component definitions; if it approaches 200 lines, split it.

### Decision: Add portfolio accent tokens and a hardcoded-color guardrail

- **What:** `src/styles/tokens.js` exposes the full palette as CSS custom properties, including semantic component tokens for tooltips, terminal code blocks, sun gradients, and reusable RGB values for translucent overlays. All `src/**/styled.js` files have been migrated from literal hex/RGB values to `var(--color-*)` tokens. `scripts/check-hardcoded-colors.js` scans all `src/**/*.js` and `src/**/*.jsx` files for hardcoded colors (with an allowlist for `tokens.js`, `contactIcons.js`, and `animations.js`), is exposed as `npm run check:colors`, and is now a blocking step in `.github/workflows/ci.yml`.
- **Why:** Hardcoded colors are the most common AI drift. Centralizing the palette in `src/styles/tokens.js` and adding a mechanical scanner keeps the design-token contract intact and makes dark-mode flips reliable.
- **Trade-offs:** Adding one-off tokens for component-specific accents (`--color-sun-*`, `--color-code-*`) keeps `styled.js` files clean but slightly expands the token surface. If the palette keeps growing, consider splitting `tokens.js` into `tokens/colors.js` and `tokens/layout.js`.
- **Future guidance:** Always add a new token to `src/styles/tokens.js` before using a new color. Run `npm run check:colors` before committing any `styled.js` change.

### Decision: Add Playwright E2E tests for critical user paths

- **What:** `playwright.config.js` runs Chromium against `http://localhost:3100` (dedicated e2e port — the dev server owns 3000 via `server.port`), with `e2e/portfolio.spec.js` covering the critical paths (scroll nav, language switch, theme toggle, carousel, modal focus trap, mobile menu) and `e2e/accessibility.spec.js` running axe-core WCAG scans. `npm run test:e2e` and `npm run test:e2e:ui` are available in `package.json`. CI installs Playwright browsers and runs `test:e2e` after the build step.
- **Why:** These paths are the most likely to be silently broken by AI-led refactors: fixed slugs are tied to `react-scroll`, i18n is client-side, dark mode relies on `document.documentElement` manipulation, and the carousel depends on active-index state transitions. Playwright catches them faster than unit tests alone.
- **Trade-offs:** Playwright adds a dev dependency and a Chromium download; CI must build and serve the app before running tests. The `test:e2e` script assumes `build/` exists, so CI runs `npm run build` first. E2E adds ~30–60s to CI runtime.
- **Future guidance:** Add more E2E scenarios only when they are cheaper to maintain in Playwright than in the Vitest suite. Keep the E2E suite under 60 seconds. Only Chromium is tested in CI (no Firefox/WebKit).

### Decision: Reduce `src/themes.js` to breakpoints only

- **What:** `src/themes.js` now exports an object with only `breakpoint`. Color, spacing, radius, shadow, and transition maps were removed, and `translations` are no longer spread into the theme. Components read localized copy through `src/common/useContent.js`.
- **Why:** Those maps duplicated the CSS custom properties in `GlobalStyles.js`; keeping both in sync was error-prone. Separating breakpoints from translations removes a recurring boundary mistake where AI edits put text inside a style-only object and makes `useTheme()` semantically honest.
- **Trade-offs:** Components must import `useContent` alongside `useSelector` where they need both language and copy; this is a small, mechanical change.
- **Future guidance:** If more JavaScript-only tokens are needed, split `src/themes.js` into `src/themes/breakpoints.js` and `src/themes/index.js`. Never put content strings in the theme object.

---

## 4. Navigation & Routing

### Decision: `react-scroll` instead of React Router

- **What:** `src/common/Navigation/index.js` uses `react-scroll` `<Link>` components to scroll to section IDs. The section IDs are now fixed slugs (`home`, `about`, `projects`, `contact`) defined in `menuItems[language][index].slug` and used in `src/App.js`. Translated labels from `menuItems[language][index].name` are only used for visible menu text.
- **Why:** The app is a true single-page experience. Fixed slugs keep `react-scroll` anchors, deep links, and tests stable across language switches.
- **Trade-offs:** The URL still does not change as the user scrolls; `offset` values for smooth scrolling are hardcoded in `src/common/Navigation/menuItems.js`.
- **Future guidance:** If deep linking or URL-based section navigation becomes required, add `react-router-hash-link` or a custom `useEffect` that reads `window.location.hash`. Do not derive anchors from translated text.

---

## 5. Content & Internationalization

### Decision: Store multi-language content in JS modules rather than JSON or an i18n library

- **What:** English, Polish, and Spanish copy lives in `src/content/translations/{en,pl,es}.js` (including `home.toolsShowcase` for the technology section). Project data lives in `src/content/projects.js`; `jsconfig.json` sets `baseUrl: "src"` so image imports use `src`-relative `images/...` paths. Menu items remain in `src/common/Navigation/menuItems.js`. (`src/content/skillsets/` was deleted with the unmounted `SkillsetContainer` in `a42600b`.)
- **Why:** No extra i18n dependency is needed; content can contain HTML strings and be co-located with the consuming feature; imports are static and simple.
- **Trade-offs:** No fallback language chain, no runtime language lazy-loading, and content is bundled into the JavaScript. Adding a language requires updating every content file.
- **Future guidance:** If a CMS or more languages are added, migrate to a `src/locales/` JSON structure or introduce `react-i18next`. Until then, keep content objects isomorphic across all three languages.

### Decision: `LanguageSwitch` calls `setLanguage` from context; components read `useLanguage`

- **What:** `src/common/LanguageSwitch/index.js` uses `setLanguage` from `useLanguage()`. `App.js` and section components use `useLanguage()` to choose localized content via `src/common/useContent.js`. `Navigation` also reads `isContactVisible` from `useContactVisibility()` to highlight the contact menu item.
- **Why:** Two small pieces of global UI state do not justify the bundle and boilerplate of Redux. `useContent` centralizes the `translations[language]` lookup so components do not call `useTheme()` for copy.
- **Trade-offs:** Context does not memoize selectors; consumers re-render when the provider value changes. With only language and contact visibility, this is acceptable.
- **Future guidance:** If adding a new language, add a test or CI step that validates all language objects have the same keys and that `menuItems` includes the new language. If a third global UI state appears, evaluate Zustand or Redux Toolkit before creating another provider.

---

## 6. Component Architecture

### Decision: `common/` for shared UI, `features/portfolio/` for page sections

- **What:** Reusable controls such as `Navigation`, `DarkModeToggle`, `LanguageSwitch`, and shared `animations.js` live in `src/common/`. Page sections live in `src/features/portfolio/<Section>/` with `index.js` for logic and `styled.js` for styles.
- **Why:** Styles are co-located with components; `App.js` becomes a flat composer of sections; the structure mirrors Feature-Sliced Design conventions.
- **Trade-offs:** For a one-page portfolio, `features/portfolio` is one feature with nested sub-folders, creating deep relative imports such as `../../../common/animations`.
- **Future guidance:** For a single-page site, `src/sections/` may be flatter. If more features are added, keep `features/`; bare `src/` specifiers are already aliased via `resolve.alias` in `vite.config.mjs`.

### Decision: `App.js` as a section composer

- **What:** `src/App.js` renders `Navigation`, a `<Main>` element containing `Home`, `About`, `Projects`, and `Contact`, and then `Footer` outside `<Main>`.
- **Why:** Each section is independently scrollable and receives a stable `id` for `react-scroll`. `Footer` is visually distinct from the main content wrapper.
- **Trade-offs:** IDs are generated at runtime from the current language; layout changes to `Main` must not break `Footer` positioning.
- **Future guidance:** If the scroll offset or `Main` max-width changes, verify both `Navigation` and `Footer` still render correctly at all breakpoints.

### Decision: Create a shared `Card` primitive in `src/common/Card/`

- **What:** `src/common/Card/styled.js` exports a single `Card` component with prop-driven variants: `$glass` (frosted-glass background + border), `$bordered` (basic border), and `$hoverable` (background/border hover transition). It is used by `About/FeatureCard`, `ToolsShowcase/showcaseLayout/FeatureCard` (with `as={motion.div}`), `Contact/ContactTile` (with `as="a"`), `Footer/SocialLink` (with `as="a"`), and `Projects/Tile/ProjectWrapper` (`$bordered` + `$hoverable`).
- **Why:** `About`, `Contact`, `Footer`, `Projects`, and `ToolsShowcase` all repeated the same glass/border/hover markup. A shared primitive gives AI a single vocabulary for card-like surfaces and keeps hover transitions consistent.
- **Trade-offs:** Not every card in the app is identical; `TechCard` and `ExploreChip` have unique gradients or accents and remain local. The primitive is intentionally minimal to avoid becoming a generic grab-bag. Some surfaces keep per-component overrides for glow, accent colors, or 3D lift; these live in the consuming `styled.js` rather than the Card itself.
- **Future guidance:** Do not add a new card-like component until it has been evaluated against `src/common/Card`. If a new surface needs a new variant, extend `Card` rather than creating a one-off styled `div`. Prefer adding a boolean variant over ad-hoc background/border/hover styles.

---

### Decision: Split content files by language once they exceed the 300-line budget

- **What:** `src/content/skillsets/{en,pl,es}.js` was deleted along with the dead `SkillsetContainer` (`a42600b`); its copy now lives in `src/content/translations/` under `home.toolsShowcase`. `src/content/projects.js` (~390 lines) is kept as a single module and is the only file listed in `scripts/check-file-size.js` exclusions.
- **Why:** `projects.js` is a list of objects with per-language fields, so a language split would force awkward re-composition; keeping it whole is acceptable while it stays under 450 lines.
- **Trade-offs:** Splitting adds an aggregator and more files, but reduces the blast radius of content edits. Exclusions must be revisited as files grow.
- **Future guidance:** Any content file that exceeds 300 lines and does not gain clarity from a language split should either be split or added to `check-file-size.js` exclusions with a documented trigger (e.g., "re-evaluate at 450 lines"). Content parity tests must always pass after a split.

---

## 7. Animation Strategy

### Decision: Centralize keyframes in `src/common/animations.js`

- **What:** All keyframe animations (`gradientFade` (driven by the `gradientDrift` mixin — accent text crossfades a `::before` opacity clone, never `background-position`, so it stays composited), `waveHand`, `fadeInUp`, `float`, `spin`, etc.) are exported from `src/common/animations.js` and imported by `styled.js` files.
- **Why:** Reduces duplication across components; a single file controls animation timing and naming; build passes without stale local keyframes.
- **Trade-offs:** A shared animation file can grow into a generic grab-bag; importing from a long relative path is awkward for deeply nested components.
- **Future guidance:** Only add an animation to `src/common/animations.js` when it is reused. Keep one-off keyframes local to the component.

### Decision: Keep `framer-motion` for scroll-triggered and layout animations

- **What:** `framer-motion` is used in `src/features/portfolio/Home/ToolsShowcase/` (`OrbitSection`, explore track, feature grid) and `src/features/portfolio/Projects/CarouselSlide/styled.js` (`Slide`, `Overlay`). It provides `whileInView`, `variants`, `staggerChildren`, `whileHover`, `spring` transitions, and `layout` animations.
- **Why:** The orbit relies on per-card `whileInView` entry with staggered `spring` delays and responsive `whileHover` scaling. The explore track and feature grid use `whileInView`/`staggerChildren` triggered by viewport entry. `CarouselSlide` uses `layout` and `animate` for the active/hover overlay reveal. Replicating all of this with CSS keyframes would require a custom `IntersectionObserver` + JS state for scroll triggers, and the `layout` morphing cannot be done with CSS alone without significant manual math.
- **Trade-offs:** `framer-motion` is one of the heavier dependencies. Current bundle is ~`173 KB` gzipped total (main chunk alone ~`173 KB`), well under the dual budget (250 KB total / 350 KB per-chunk), so the cost is acceptable for now.
- **Future guidance:** If the bundle budget tightens, the first candidates for CSS-only replacement are the `CarouselSlide` hover overlay and the `ExploreChip` hover effect. Do not remove `framer-motion` until those pieces are replaced and the `OrbitSection` has a clear CSS/JS fallback that preserves the staggered reveal and spring feel.

---

## 8. Dark Mode

### Decision: Toggle `data-theme="dark"` on `<html>` and persist the choice in `localStorage`

- **What:** `src/common/DarkModeToggle/index.js` uses `useState` and `useEffect`. On mount it checks `localStorage` and `prefers-color-scheme`; on click it toggles the `data-theme` attribute and stores the preference.
- **Why:** CSS variables react immediately; no `ThemeProvider` re-render is needed; user preference persists across sessions.
- **Trade-offs:** The toggle directly mutates `document.documentElement`, which is a side effect. This is acceptable because the app is client-side only and has no SSR.
- **Future guidance:** If other components need to react to the theme, move the theme state to Redux. For now, keep it encapsulated in `DarkModeToggle`.

---

## 9. Deployment

### Decision: GitHub Pages via `gh-pages`

- **What:** `package.json` declares `"homepage": "https://boostertech.github.io/Front-End-Dev-Portfolio/"`. `npm run deploy` runs `gh-pages -d build` after `npm run build`.
- **Why:** Free, version-controlled hosting with a single npm script deployment.
- **Trade-offs:** Client-side routing is not supported; all assets must be referenced through `import.meta.env.BASE_URL` or `./` relative paths; `index.html` metadata is static.
- **Future guidance:** Before each deploy, confirm the `homepage` value. If a custom domain is added, place a `CNAME` file in `public/`.

---

## 10. Accessibility, SEO, and Performance

### Decision: Fix `index.html` metadata

- **Current state:** The invalid `<meta name="Derek.dev" ...>` was replaced with `name="description"`, and Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`) were added in the root `index.html` (Vite entry — there is no `public/index.html`). The `<html lang>` attribute is now updated dynamically by `LanguageProvider` via a `useEffect` that sets `document.documentElement.lang` to `en`, `pl`, or `es` based on the selected language.
- **Why it matters:** Search engines and social sharing rely on `name="description"` and Open Graph tags. The `lang` attribute is critical for screen readers to pronounce content correctly.
- **Trade-offs:** The dynamic `lang` update is a side effect in `LanguageProvider`. This is acceptable because the app is client-side only with no SSR.
- **Future guidance:** When adding a new language, update the `LANG_MAP` in `LanguageProvider/index.js` to include the new ISO 639-1 code.

### Decision: Centralize `dangerouslySetInnerHTML` through a `RichText` component

- **Current state:** `src/common/RichText/index.js` is the shared wrapper for raw HTML (`dangerouslySetInnerHTML`), consumed as `JourneyParagraph` in `About/styled.js`. Two call sites bypass it and embed `dangerouslySetInnerHTML` directly: `About/CodeTerminal.js` (a hardcoded syntax-highlighted literal, `aria-hidden`) and `ProjectModal.js` (`project.description` from `content/projects.js`). All three sources are first-party static strings, so XSS exposure is theoretical — the convention exists so a sanitizer has few seam points if content ever becomes dynamic.
- **Why it matters:** Raw HTML is an XSS risk if content ever becomes user-supplied or API-driven. Keeping the call in one place makes it easy to swap in a sanitizer or a markdown-to-JSX solution later.
- **Trade-offs:** The author controls all content, so the current risk is low. Converting long About paragraphs and project descriptions to JSX or structured content is laborious.
- **Future guidance:** If content comes from an API or CMS, replace `RichText` with `react-markdown` or a structured content model. For now, keep content in trusted JS modules.

---

## 11. Decision Framework

When adding or changing anything, prefer the following order:

1. **CSS variables first.** Add new design tokens to `src/GlobalStyles.js` and mirror them in `data-theme="dark"`.
2. **Centralization second.** Shared styles, keyframes, and content belong in `src/common/` or `src/content/`.
3. **React Context for global UI state;** local `useState` for component-only concerns.
4. **Run `npm run build` before committing** to catch missing modules, import path errors, and syntax issues early.
5. **Avoid hardcoded colors, spacing, and breakpoints** in `styled.js`; use `var(--*)` and `theme.breakpoint.*`.
6. **Document any new architecture decision in this playbook** using the same Decision/What/Why/Trade-offs/Future guidance structure.

---

## 12. Dependency & Bundle Hygiene

### Decision: Run `depcheck` in CI and document every flag

- **What:** `.github/workflows/ci.yml` runs `npx --yes depcheck` after `npm ci`. A `.depcheckrc` file records which flagged items are intentional: jsconfig `baseUrl` aliases are not npm packages and `typescript` is a `madge` runtime peer (`detective-typescript` `require()`s it).
- **Why:** Unused dependencies are the fastest way for a small project to become heavy. `depcheck` turns dependency cleanup from a manual chore into a CI-enforced rule and forces a one-line justification for every package that is kept despite not being imported.
- **Trade-offs:** `npx --yes depcheck` downloads the package on every CI run. Pinning `depcheck` to `devDependencies` could be added later if install time or reproducibility becomes an issue.
- **Future guidance:** Do not add a dependency without importing it or documenting why it is kept. Remove anything `depcheck` flags unless the `.depcheckrc` comment is defensible.

### Decision: Block circular dependencies with `madge`

- **What:** `madge` is a devDependency. `npm run check:circular` runs `scripts/check-circular.js`, which uses the `madge` API to scan `src/` for cycles and exits with code 1 if any are found. `.github/workflows/ci.yml` runs `npm run check:circular` immediately after `npx --yes depcheck`.
- **Why:** Circular imports are the most common source of silent module-initialization bugs. A dedicated check catches them before they reach `npm run build`.
- **Trade-offs:** `madge` resolves `jsconfig` `baseUrl` aliases only with extra configuration, but relative-path cycles are still caught reliably. (The old `--legacy-peer-deps` requirement died with `react-scripts` — madge's `typescript` peer is now satisfied by the pinned `typescript@5.9.3`; `.npmrc` was removed.)
- **Future guidance:** If `madge` misses cycles involving `common/` aliases, add a `webpackConfig` or `requireConfig` option to `scripts/check-circular.js`, or migrate to `dependency-cruiser` with a matching `.dependency-cruiser.js` config.

### Decision: Tighten bundle-size budget (350 KB/chunk, 250 KB total)

- **What:** `scripts/bundle-size.js` enforces two limits: `BUNDLE_SIZE_LIMIT` defaults to `350 * 1024` per chunk and `BUNDLE_TOTAL_LIMIT` to `250 * 1024` for the whole gzipped bundle. The main chunk is ~`173 KB`, so the budget still provides headroom.
- **Why:** A 600 KB budget lets the bundle triple before anyone notices. The per-chunk cap catches a single bloated asset while the tighter total cap tracks real download weight.
- **Trade-offs:** Very large images or animations can hit this limit. Monitor the `bundle:check` output and split lazy-loaded chunks if the main bundle approaches the cap.
- **Future guidance:** Before adding a new package or animation library, run `npm run build && npm run bundle:check` and confirm the budget is still respected.

### Decision: Bundle-impact gate for PRs

- **What:** `.github/pull_request_template.md` includes a bundle-impact checklist: “Run `npm run build && npm run bundle:check`”, confirm no chunk exceeds the 350 KB gzipped per-chunk budget and the total stays under 250 KB, and confirm the bundle did not grow significantly. The CI already runs `npm run bundle:check` after every build, so the template is a human double-check against accidental bloat.
- **Why:** PR templates make the bundle budget explicit before code is reviewed. It is the cheapest place to stop one-off libraries or oversized assets from entering the codebase.
- **Trade-offs:** A CI step that auto-posts bundle delta as a comment was considered but not added; the existing `bundle:check` job already fails the build on budget violations. The template can be converted to a bot comment later if manual checks slip.
- **Future guidance:** If the budget is repeatedly challenged, add a `dependency-cruiser` or `bundlephobia` pre-merge check and a `GITHUB_STEP_SUMMARY` output showing delta per chunk.

### Decision: Keep `framer-motion` because `ToolsShowcase` uses `m.*` styled components

- **What:** `framer-motion` is imported in `features/portfolio/Home/ToolsShowcase/{OrbitSection.styles,exploreLayout,showcaseLayout}.js` and used as `styled(m.div)`, `styled(m.section)`, etc. The app wraps everything in `LazyMotion` with the static `domMax` set and `strict` — `motion.*` throws in dev, so `m.*` is enforced. An async `features()` thunk was tried and removed: framer-motion is statically imported app-wide, so it cannot split out of the main chunk (rolldown warns `INEFFECTIVE_DYNAMIC_IMPORT`).
- **Why:** The orbit and explore-scroll animations rely on `framer-motion` for performant, declarative motion. Removing it would require re-implementing those animations.
- **Trade-offs:** `framer-motion` adds bundle weight. If the orbit is simplified or removed in a future redesign, re-run `depcheck` and consider removing it.
- **Future guidance:** Do not add `framer-motion` for trivial hover transitions; use CSS keyframes in `src/common/animations.js` instead. If `depcheck` ever flags `framer-motion`, confirm these four files still import it before keeping.

---

## 13. Quality & CI

### Decision: `test:coverage` with a 70% threshold

- **What:** `package.json` has a `test:coverage` script (`vitest run --coverage`) and v8 `coverage.thresholds` of 70% across branches, functions, lines, and statements in `vite.config.mjs`. The project has 13 suites with 80 tests covering providers, share action, scroll spy, carousel/modal, translations parity, and the App smoke test.
- **Why:** A 70% floor forces test coverage growth alongside new code. The previous 50% threshold was too lenient to catch regressions.
- **Trade-offs:** 70% is still not 100%; some branches in OrbitSection and Projects/index.js remain uncovered. Full coverage is not the goal for a static portfolio.
- **Future guidance:** Re-run `npm run test:coverage` after any new component or test. Raise the threshold only when the new value is stable across several runs.

### Decision: Add Lighthouse CI with performance budgets

- **What:** `.lighthouserc.js` configures `@lhci/cli` to serve `build/` and assert five error-level budgets: `largest-contentful-paint <= 3500 ms`, `cumulative-layout-shift <= 0.05`, `total-blocking-time <= 2000 ms`, `total-byte-weight <= 300 KiB`, `categories:performance >= 0.6` — each over a median of `numberOfRuns: 3` (single-run metrics swing ±20%, so the median stops noise from flapping the gate). `npm run lighthouse:check` rebuilds with `vite build --base=./` so assets resolve from the build root, then runs `lhci autorun`. The CI step in `.github/workflows/ci.yml` is blocking (`continue-on-error` removed).
- **Why:** A portfolio is judged on speed and visual stability. A numeric, automated budget is cheaper than manual Lighthouse runs and catches regressions early — TBT and byte-weight assertions specifically guard against heavy JS/asset creep, which the LCP-only gate could not see. Making it blocking means PRs that violate the budget cannot merge.
- **Trade-offs:** Headless CI runs vary run-to-run; the median-of-3 absorbs most of it, at ~3× the collect time. The sensor ceilings sit ~20–50% above measured medians (~1.3s TBT, ~235 KiB, LCP ~2.8s, perf ~0.68) — they catch regressions, not noise. If the check still becomes flaky, re-enable `continue-on-error` temporarily rather than loosening thresholds.
- **Future guidance:** Do not raise the numeric thresholds to make the check pass. If a metric regresses, investigate the offending asset (likely a large image/video or heavier dependency) rather than relaxing the budget.

### Decision: Create a shared `Button` primitive in `src/common/Button/`

- **What:** `src/common/Button/styled.js` exports `Button` (styled.a) and `ScrollButton` (styled `react-scroll` Link). The `$variant` prop selects `"primary"` (gradient bg, white text), `"outline"` (transparent bg, border), or default (gradient → transparent on hover). The `$size` prop supports `"sm"` for compact carousel CTAs. Used by `ViewMyWorkButton` (ScrollButton), `DownloadCVButton` (Button $variant="outline"), `ProjectLink` (styled(Button) with shimmer), and `CTAButton` (styled(Button) with $secondary).
- **Why:** Four different button implementations across the codebase gave AI inconsistent signals. A single primitive with variant props gives AI one vocabulary for CTA-style buttons, just like `Card` does for surfaces.
- **Trade-offs:** Not every button is identical; `CarouselButton` (circular nav), `CloseButton`, `ArrowButton`, and `NavDot` remain local because they're functional UI controls, not CTA links. The `CTAButton` keeps its own `$secondary` prop and per-component overrides for the slide-specific hover styles.
- **Future guidance:** Do not create a new styled.a or styled(Link) for a CTA button without evaluating `common/Button` first. Extend `Button` with a new `$variant` rather than creating a one-off.

### Decision: Use `matchMedia` for responsive JS behavior in Navigation

- **What:** `Navigation/index.js` uses `window.matchMedia("(max-width: 1099px)")` with a `useState` + `useEffect` listener to switch between text labels and icons. SSR-safe with `typeof window !== "undefined"` guard.
- **Why:** The previous approach read `getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-xl2")` during every render, coupling JS to DOM layout and causing unnecessary re-reads. `matchMedia` is the idiomatic browser API for breakpoint-based JS behavior and integrates cleanly with React state.
- **Trade-offs:** The breakpoint value (1099px) is hardcoded in JS rather than read from CSS. This mirrors the `themes.js` breakpoint.xl2 value (1100px). A mismatch would cause icon/text switching at the wrong width.
- **Future guidance:** If the breakpoint changes, update both `themes.js` and the `matchMedia` query in `Navigation/index.js`. Consider extracting a shared constant if more components need the same breakpoint.

### Decision: Optimize images to WebP with lazy loading

- **What:** All PNG/JPG images converted to WebP using `sharp` (quality 80, resized to max display dimensions). `scripts/convert-images.js` handles conversion; `npm run optimize:images` runs it. All below-the-fold `<img>` tags have `loading="lazy"`. ~94 MB of unused images deleted from `src/images/` and `public/`.
- **Why:** The profile image alone was 50.7 MB PNG (converted to 20 KB WebP). Background images were 1.3–2.2 MB each. Total image weight dropped from ~68 MB to ~0.5 MB (99.3% reduction). This dramatically improves LCP, bandwidth, and deploy time.
- **Trade-offs:** WebP is not supported by very old browsers (IE11, old Safari < 14), but all modern browsers support it. The conversion script is a manual step (`npm run optimize:images`), not integrated into CI — run it when adding new images.
- **Future guidance:** When adding a new image, place the original in `src/images/` or `public/`, run `npm run optimize:images`, then update imports to reference the `.webp` file. Delete the original after conversion. Always add `loading="lazy"` to below-the-fold images.

### Decision: Run Playwright E2E tests in CI

- **What:** `.github/workflows/ci.yml` installs Playwright Chromium + WebKit browsers (`npx playwright install --with-deps chromium webkit`) and runs `npm run test:e2e` after the build step. The Playwright config's `webServer` automatically serves the `build/` directory on port 3100 via `scripts/serve-e2e.js` — a zero-dep Node static server that strips the `/Software_Engineer_Portfolio` GitHub Pages prefix so tests exercise the real prefixed production bundle. Missing paths with a file extension get a real 404 (only extensionless SPA routes fall back to `index.html`), and `e2e/fixtures.js` wraps `page` with a console/`pageerror` watchdog — any console error fails the test.
- **Why:** E2E tests existed but only ran locally. Without CI enforcement, regressions in scroll navigation, language switching, dark mode, and carousel behavior could merge undetected.
- **Trade-offs:** E2E tests add ~30–60s to CI runtime per engine; WebKit roughly doubles that and its axe injection is ~2× slower (the accessibility describe runs with a 60s timeout). The `webServer` requires a production build first, which is already a CI step.
- **Future guidance:** When adding new E2E tests, ensure they work with the `scripts/serve-e2e.js` setup (`npm run build` must run first). Use `baseURL` (`http://localhost:3100`) for navigation. Avoid hardcoded timeouts where possible — use Playwright auto-waiting.

### Decision: Accessibility — ARIA roles, keyboard navigation, dynamic `<html lang>`

- **What:** `LanguageProvider` sets `document.documentElement.lang` via `useEffect`. Projects carousel responds to Arrow Left/Right keys. `DarkModeToggle` has `role="switch"` + `aria-checked` + keyboard support. `LanguageSwitch` flags have `role="button"` + `aria-pressed` + keyboard support. `ProjectModal` fullscreen has `role="dialog"` + `aria-modal` + Escape-to-close (with explicit `returnFocusRef` trigger restore — WebKit doesn't focus buttons on click, so `document.activeElement` isn't reliable). Navigation has `aria-label="Main navigation"`; the mobile menu closes on Escape and returns focus to the hamburger toggle.
- **Why:** Screen readers and keyboard users need semantic roles and keyboard equivalents for all interactive elements. A static `<html lang="en">` misreports the page language when the user switches to Polish or Spanish.
- **Trade-offs:** Added ~354 B to the bundle from ARIA attributes. The global arrow-key listener on the Projects section could conflict with other keyboard handlers if the user is focused on an input, but the portfolio has no text inputs.
- **Future guidance:** Always add `role`, `aria-label`, and keyboard handlers to any new interactive element that isn't a native `<button>` or `<a>`. Update `LANG_MAP` in `LanguageProvider` when adding new languages.

### Decision: Eliminate barrel re-exports (`export * from`)

- **What:** Deleted `Home/styled.js` and `ToolsShowcase/styled.js`, which were barrel files that re-exported all symbols from `homeStyles.js`/`heroStyles.js` and `showcaseLayout.js`/`exploreLayout.js` respectively. Consumers now import directly from the source files.
- **Why:** `export * from` hides the actual source of a symbol, making it harder for AI and developers to trace where a styled component is defined. It also hurts tree-shaking because bundlers must include all exports from all re-exported modules even if only one is used.
- **Trade-offs:** Consumers must know which source file to import from, but this is already clear from the file structure. The barrel files provided no aggregation logic — they were pure pass-through.
- **Future guidance:** Never create `export * from` barrel files. If aggregation is needed, use explicit named re-exports (`export { Foo } from "./source"`) so the source is visible.

---

## 14. Appendix: `feature/ui-refresh` changes

- Removed dead code: unused `ScrollWatcher` import in `App.js`, unused `slideToggle` keyframes in `DarkModeToggle`, and unused `ref` parameter in `Footer`.
- Deleted the dead `src/common/ScrollWatcher` folder during the 30-day stabilization pass.
- Removed the unused `react-router` dependency from `package.json`.
- Moved `skillsets.js` data from `src/features/portfolio/Home/SkillsetContainer` to `src/content/skillsets.js`.
- Moved `projects.js` data from `src/features/portfolio/Projects` to `src/content/projects.js` after adding `jsconfig.json` with `baseUrl: "src"`.
- Updated `.github/workflows/ci.yml` to run `npm ci`, `npm run size-check`, `npm run test`, and `npm run build` on every push/PR.
- Added `src/App.test.js` as a smoke test that renders `<App />` and checks for the welcome label.
- Updated `scripts/check-file-size.js` and `npm run size-check` to fail on source files over 300 lines; the script exits with code 1 when offenders are found.
- Guarded `IntersectionObserver` usage in `src/features/portfolio/Contact/index.js` so the component does not crash in test/SSR environments where the API is missing.
- Moved the `FrontEndSpinner` SVG from `src/features/portfolio/About/SpinnerSvg.js` to `public/spinner.svg` and imported it as a `PUBLIC_URL` asset.
- Split `src/features/portfolio/Home/styled.js` into `homeStyles.js` and `heroStyles.js` to keep each file under 300 lines.
- Created and completed `plan/next-30-days-a29356.md` for the 30-day architecture stabilization plan.
- Fixed the broken `App.js` JSX from the quick-wins pass.
- Created `src/common/animations.js` and updated all `styled.js` files to import shared keyframes.
- Removed duplicated color/spacing/radius/shadow/transition maps from `src/themes.js`.
- Moved English, Polish, and Spanish copy to `src/content/translations.js`.
- Replaced hardcoded colors and values in `SkillsetContainer`, `LanguageSwitch`, and `Projects` with CSS variables and correct breakpoints.
- Updated `README.md` and `plan/portfolio-refresh-plan.md` to reflect the actual state of the project.
- Added `--nav-height` and `--nav-height-mobile` CSS variables and removed `!important` from `HomeWrapper`.
- Extracted `GradientHeading` to `src/common/GradientHeading` and reused it in `Home` and `About`.
- Added `variant: "comingSoon"` to `projects.js` and made `Projects/index.js` data-driven for the special case.
- Fixed `public/index.html` metadata and added Open Graph tags.
- Created `src/common/RichText` to centralize raw HTML rendering.
- `npm run build` passes cleanly after all changes.
- The size-check currently excludes only `projects.js` (data module, not logic). `ToolsShowcase/styled.js` was deleted (barrel re-export removed).
- Added `.eslintrc.js` (extending `react-app` with `import/order` as error and `import/no-relative-parent-imports` as warn until Week 2) and `.prettierrc`.
- Added `npm run lint` and `npm run format:check` to the CI pipeline. `npm run lint` now passes with 44 warnings for `import/no-relative-parent-imports`; `npm run format:check` passes after formatting.
- Added `scripts/bundle-size.js` and `npm run bundle:check` to the CI pipeline. The main JS chunk is currently `185.33 KB` with a `350 KB` budget.
- Added `src/types.js` JSDoc type declarations and annotated high-touch content shapes (`Project`, `SkillSet`, `SkillDescriptions`, `TranslationSet`, `LanguageState`, `GeneralState`) and component props (`Tile`, `SkillsetList`, `About`).
- Normalized all `../` imports to `jsconfig` base-URL aliases (`common/...`, `content/...`, `features/portfolio/...`) and promoted `import/no-relative-parent-imports` to `error`.
- Renamed `src/Redux` to `src/slices` to avoid the `redux` package name collision and updated all `Redux/...` imports to `slices/...`.
- `npm run lint`, `npm run format:check`, and `npm run build` all pass with no warnings or errors.
- `Navigation/index.js` no longer imports `themes.js` for runtime breakpoints; it uses `window.matchMedia("(max-width: 1099px)")` with an event listener for responsive icon/text switching (replaced previous `getComputedStyle` approach).
- Centered the hero section on the screen by adjusting `HomeWrapper` padding and adding `align-content: center` plus `min-height: calc(100vh - var(--nav-height))` to `ContentImageContainer`.
- Added `src/content/translations.test.js` to assert that `translations.js`, `skillsets.js` exports, and `projects.js` all use `English`, `Polish`, and `Spanish` consistently.
- Decided to keep `src/content/projects.js` and `src/content/skillsets.js` as JS data modules and exclude them from the 300-line size check; content parity is enforced by the test suite instead.
- Verified `framer-motion` is still used by `ToolsShowcase` (via `motion.*` styled components in `showcaseLayout.js`, `exploreLayout.js`, and `OrbitSection.styles.js`) and kept it in `package.json`.
- Added component regression tests for `Navigation`, `LanguageSwitch`, `Tile`, `Contact`, `RichText`, `SkillsetContainer`, `ComingSoonProject`, and `CarouselSlide`, plus `src/test-utils.js` and a `matchMedia` mock in `src/setupTests.js`.
- Consolidated 4 button patterns (`ViewMyWorkButton`, `DownloadCVButton`, `ProjectLink`, `CTAButton`) into a shared `src/common/Button/` primitive with `$variant` (`primary` | `outline` | default) and `$size` (`sm`) props. `ScrollButton` variant wraps `react-scroll` `Link`.
- Raised Jest coverage threshold from 50% to 70%; added 20 new unit tests bringing total to 32 tests across 10 suites.
- Extended `check-hardcoded-colors.js` to scan all `.js`/`.jsx` files (not just `styled.js`) with an allowlist for `tokens.js`, `contactIcons.js`, and `animations.js`.
- Extracted `DarkModeToggle` styled components from `index.js` to `styled.js`; deduplicated `Tile/index.js` even/odd JSX into a single render path.
- Added 2 Playwright E2E tests for carousel navigation (next/prev button + dot selection), bringing total E2E to 5 tests.
- Deleted dead code: `src/slices/` (71 lines), `orbitDecorations.js` (194 lines), 5 dead exports from `homeStyles.js` (~80 lines). Total ~345 lines removed.
- `README.md` and `plan/ai-readiness-30-day-plan.md` updated to reflect the completed 30-day AI Readiness & Proportionality work.
- Split `ToolsShowcase/styled.js` into `showcaseLayout.js` and `exploreLayout.js` (barrel re-export later removed; imports now point directly to source files). `orbitDecorations.js` was deleted as dead code. Split `OrbitSection.js` into `OrbitSection.styles.js`, `useWindowWidth.js`, and `getOrbitDimensions.js` so all files are under 300 lines.
- Simplified `OrbitSection` by removing the `BreathingRing` pulse and reducing orbit dimensions so the `MY TECHNOLOGY STACK` text fits without cropping; kept `LinesSvg` connecting lines and removed the `ToolsShowcaseWrapper` top/bottom section borders.
- Redesigned the `About` section with a two-column layout: a `CodeTerminal` component showing the "From Embedded to Full-Stack" class on the left and a `MY JOURNEY` content panel with a gradient heading, journey paragraph, and four feature cards on the right.
- Completed Week 1 of the 30-day cleanup: moved `StarField` and `Main` out of `src/GlobalStyles.js` into `src/common/StarField/` and `src/common/Main/`, made `StarField` deterministic with a seeded pseudo-random generator, and split `translations` out of `src/themes.js` by introducing `src/common/useContent.js`.
- `src/themes.js` now exports only the `breakpoint` map; all localized copy is read through `useContent` in `About`, `Contact`, `Footer`, `Home`, and `ToolsShowcase`.
- `npm run lint`, `npm run size-check`, and `npm test` pass after the Week 1 boundary cleanup.

### 2026-09-21 — Gate integrity + AI-readiness pass

- Fixed stale test suites: `Navigation.test.js` now scopes queries via `desktop-menu`/`mobile-menu`/`nav-link-*` testids and mocks `matchMedia`; `CarouselSlide.test.js` updated to the active→`onExpand` / inactive→`onClick` contract. Suite green: 9 suites / 28 tests.
- `check:colors` now reports zero violations; `ProjectModal.styles.js` uses `rgb(var(--color-black-rgb) / …)`.
- Deleted dead `SkillsetContainer/` component + test, orphaned `src/content/skillsets/` module, and the `SkillSet`/`SkillDescriptions`/`SkillsetListProps` typedefs (−561 lines).
- Added `AGENTS.md` conventions contract (breakpoints, token rules, rail patterns, testing hooks, verification commands).
- Localized all ToolsShowcase copy into `home.toolsShowcase` translations (EN/PL/ES), reusing `skillsetHeader`/`learnNextHeader`; icons remain index-mapped in the component.
- README refreshed: real project list with live URLs, current exploring items, corrected architecture notes.
