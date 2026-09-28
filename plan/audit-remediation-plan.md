# Audit Remediation Plan

Source: full engineering audit, 2026-01 (branch `feature/share-icon`).
Severity model: P0 critical · P1 high · P2 medium · P3 low · P4 informational.
Audit evidence: Lighthouse perf 0.68 / a11y 1.0 / BP 1.0 / SEO 1.0,
LCP 3.0 s, TBT 1,640 ms, CLS 0, total bytes ~1,593 KiB, bundle 157.3 KB gz.

## Immediate (P0/P1)

### 1. Defer the talking-portrait video — `preload="metadata"` ✅ DONE

- **File:** `src/features/portfolio/Home/TalkingPortrait.js`
- **SHIPPED:** `preload="auto"` → `preload="metadata"`; test assertion updated
  to guard the deferral (`TalkingPortrait.test.js`). `play()` on tap triggers
  the real download — no explicit `load()` needed.
- **MEASURED (Lighthouse, same config):** total bytes 1,593 KiB → **380 KiB
  (−76%)**; MP4 not fetched on initial load at all; LCP element moved from
  `<video>` to the portrait `<img>`; LCP ~2.9 s (paint-bound, unchanged);
  CLS 0. Perf score ~unchanged (TBT-dominated, single-run noise).
- **Remaining verify:** confirm tap-to-play still works on the A22 on the
  deployed build (metadata preload adds a small fetch on first tap).

### 2. Triage `npm audit` (38 vulns, 21 high — transitive tooling)

- **FACT:** findings live in dev/build chains (`react-scripts` → SVGO/PostCSS,
  `@lhci/cli` → puppeteer/`extract-zip`, `serialize-javascript`, `tmp`,
  `underscore`, `uuid`). `npm audit fix --force` proposes breaking downgrades
  (`react-scripts@0.0.0`) — rejected.
- **IMPACT:** low runtime exposure (static site, no secrets, no server);
  real exposure is the CI/dev machines running the toolchain.
- **FIX:** no forced fixes. Track as strategic debt (item 11). CI already
  pins via `npm ci`.

## Next (P2)

### 3. Replace fake-SVG icon `styledcomponents.svg` ✅ DONE

- **SHIPPED:** extracted the embedded 1984×1984 WebP from the SVG wrapper and
  re-encoded to a real `src/images/styledcomponents.webp` at 200×200 (2× the
  ~100 px max card render, per the repo rule). `ToolsShowcase/index.js` import
  + `iconWidth`/`iconHeight` updated; fake SVG deleted.
- **MEASURED:** 194 KB source / ~142 KB transferred → **6.9 KB** (−95%).

### 4. Harden the Lighthouse gate ✅ DONE

- **File:** `.lighthouserc.js`
- **SHIPPED:** `numberOfRuns: 1 → 3` (median kills ±20% run noise) plus three
  new error-level assertions: `total-blocking-time ≤ 2,600 ms`,
  `total-byte-weight ≤ 400 KiB`, `categories:performance ≥ 0.5`.
  Ceilings sit above measured baselines — regression sensors, not budgets.
- **MEASURED (median of 3, post-remediation):** perf 0.70 · LCP 2,789 ms ·
  TBT 1,432 ms · CLS 0 · **244 KiB** total weight. All assertions pass.

### 5. Decorative-animation budget for low-end devices ✅ MEASURED — pause skipped

- **MEASURED (CDP trace, prod build, 4× CPU throttle, 6 s steady-state
  windows, run→freeze→run):** freezing all 60 star animations
  (`animation: none`) saved ~880 ms/6 s of renderer time — **below the
  1,330 ms run-to-run noise floor**. The twinkle is compositor-cheap; a
  pause mechanism has no measurable main-thread payoff. Chrome also already
  suspends compositor animation in hidden tabs, so `document.hidden`
  wiring would buy ~0. Perf-motivated pause: **rejected on evidence**.
- **SIDE FINDING:** `UpdateLayoutTree` burns 2.0–2.8 s per 6 s idle window
  in *every* state (stars frozen included) — something else continuously
  dirties layout at idle (`gradientShift`/marquee/IO churn are candidates).
  Separate investigation if TBT becomes a priority.
- **REMAINING → DONE (a11y, not perf):** `StarField` spans now honor
  `prefers-reduced-motion: reduce` (`animation: none` — stars render
  static). Verified in prod build via Playwright media emulation.

### 6. Recompress `social_preview.png` ✅ DONE

- **SHIPPED:** replaced with `public/social_preview.jpg` — same 1200×630 dims,
  JPEG q85, **113 KB** (−88%). Updated `og:image` + `twitter:image` in
  `public/index.html` and the share-attach path/type in
  `useShareAction.js` (`preview.jpg`, `image/jpeg`); PNG deleted.
- **WHY JPEG over WebP:** og:image WebP support is still inconsistent across
  scrapers (Facebook documents jpg/png/gif); JPEG q85 is universal and the
  card has no alpha.

## Later (P3)

### 7. Mobile menu Escape key ✅ DONE

- **SHIPPED:** `keydown` listener active while `isMenuOpen` — Escape closes
  the panel and returns focus to the hamburger toggle (`hamburgerRef`).
  Covered by a unit test (Navigation.test.js) and the new E2E case.

### 8. Unify nav-height tokens ✅ DONE

- **SHIPPED:** `--navbar-height` deleted from `tokens.js`. `base.js`
  `scroll-padding-top` and the `MobileMenuBackdrop` height now use
  `var(--nav-height-actual, var(--nav-height[-mobile]))` — the measured
  ResizeObserver value first, static token as the no-JS fallback. Bonus
  correctness: mobile `scroll-padding` now pads against the real 80px nav,
  not the 64px desktop constant.

### 9. E2E hardening ✅ DONE

- **SHIPPED:** all 10 `waitForTimeout` sleeps replaced with
  `expect.poll`/`toHaveAttribute`/`toBeFocused` condition waits; carousel
  assertions moved from `getComputedStyle().backgroundColor` to `aria-current`
  on `NavDot`. Added the share-row and Escape-close mobile cases —
  **12 E2E tests, all green, zero sleeps**.

### 10. `.gitattributes` for line endings ✅ DONE

- **FACT:** `format:check` fails on Windows (54 files flagged) because
  `autocrlf` checks out CRLF while Prettier expects LF; Ubuntu CI is green.
  Newly written files are LF — the tree is mixed.
- **SHIPPED:** `.gitattributes` (`* text=auto eol=lf`) + one-time worktree
  refresh (`git rm -r --cached .` + `git reset --hard`). `git ls-files
  --eol` showed the index was already all-LF (autocrlf converted on commit)
  — only the 100 on-disk copies were CRLF — so **no renormalize commit was
  needed at all**. `format:check` is now green on Windows (was 54 flags).

### 11. Branch coverage headroom ✅ DONE

- **SHIPPED:** branch coverage **72.03% → 74.72%** via targeted edge tests —
  `useShareAction` legacy `execCommand` fallback both outcomes (64%→86%
  branches), `TalkingPortrait` `onError` + synchronous `play()` throw,
  new `useScrollSpy.test.js` (spy-band, bottom-forcing, scroll-locked
  early-return). No number-chasing — all three guard real behaviors.

## Optional / Strategic

### 12. CRA → Vite toolchain migration — ✅ SHIPPED

- `react-scripts` removed → `vite@8.3.0` + `@vitejs/plugin-react@6.1.1`,
  `vitest@5.0.1` + `@vitest/coverage-v8@5.0.1` (jsdom@29, `globals: true`,
  `vi.*` API). npm audit findings dropped **38 → 12**; build ~15s → ~0.7s;
  unit suite ~61s → ~26s; Lighthouse perf 0.70 → 0.94, TBT ~1.4s → ~215ms.
- Ports: `process.env.PUBLIC_URL` → `import.meta.env.BASE_URL`; `%PUBLIC_URL%`
  → `./` relative paths in the root `index.html` (GitHub Pages base lives in
  `vite.config.mjs` as `base: "/Software_Engineer_Portfolio/"`; output stays
  `build/` so `serve-e2e.js` and `gh-pages -d build` are unchanged).
- Jest → Vitest: `jest.*` → `vi.*`, `@testing-library/jest-dom` →
  `/vitest` entry, coverage thresholds moved to `vite.config.mjs`,
  `testTimeout: 30s` (LazyMotion's async feature bundle is slow under
  v8 instrumentation). `.eslintrc.js`/`eslintConfig` → flat
  `eslint.config.js`; react-app-only rules (`prop-types`, export-map
  `import/*` rules that need a tsconfig) disabled; new react-hooks
  compiler-era rules caught and fixed two real smells
  (`directionRef`-read-in-render → state, `useMediaQuery` →
  `useSyncExternalStore`). `cross-env` and `.npmrc` `legacy-peer-deps`
  removed — the peer conflict died with react-scripts.
- JSX-in-`.js`: rolldown rejects it — `vite.config.mjs` carries a
  `transformWithOxc` pre-plugin scoped to `src/*.js` (Windows path
  normalization required — ids arrive backslashed).
- Bundle: 167.7 KB gzip single chunk (limit 250 KB). Rolldown warns that
  `framer-motion` is statically + dynamically imported so the dynamic
  `LazyMotion` features import can't split — accepted: LazyMotion semantics
  are preserved and the budget is met.

### 13. axe-core in tests — ✅ SHIPPED

- `@axe-core/playwright@4.13.0` added; `e2e/accessibility.spec.js` scans five
  states: homepage light/dark, open project modal, scrolled-page + modal dark
  (reaches the whileInView-mounted terminal), open mobile menu. Violations
  fail the test; `wcag2a/2aa/21a/21aa` tags.
- axe immediately caught what Lighthouse's static audit missed — three real
  contrast bugs: white text on `--color-dark-primary` CTAs (3.48 → fixed via
  new `--color-on-primary` token), `body` had no `background-color` (backdrop
  was a `body::before` image axe can't resolve — now a solid fallback under
  it), and terminal palette tokens under 4.5:1 (comment + variable, both
  themes). All fixed; 15/15 axe runs green.
- Convention recorded in `AGENTS.md`: scans must wait for finite animations
  to finish first (mid-fade opacity sampling produces flaky contrast reads).

## Field findings (post-audit, during verification)

- **Windows share Copy broken by file attachment** ✅ FIXED — with a file
  payload in `navigator.share()`, the Windows OS share dialog's Copy put the
  image on the clipboard instead of the URL (paste yields nothing). File
  attach is now mobile-only in `useShareAction.js`; desktop shares URL-only.
  Guarded by a dedicated test; convention recorded in `AGENTS.md`.

## Quick wins (≤1 day total, low regression risk)

| # | Change | Saving |
|---|---|---|
| 1 | `preload="metadata"` | ~1.2 MB initial payload |
| 3 | WebP for styled-components icon | ~135 KB |
| 6 | Recompress social preview | ~600 KB per fetch |
| 4 | `numberOfRuns: 3` + TBT assert | real regression gate |
| 10 | `.gitattributes` eol=lf | kills CRLF false-failures |

## Do not change (verified good — regression risk of "improvement")

- LazyMotion + `domMax` + `m.*` discipline
- `.portrait-playing` animation freeze (verified on-device fix)
- Theme bootstrap preload script in `index.html` (keeps `href`/`src`
  identical — required for the preload to dedupe)
- `react-scroll` owning all scrolling; no CSS `scroll-behavior`
- Two-context state model — no state library
- `dangerouslySetInnerHTML` on trusted static copy (document the contract)
- System font stack (measured Inter preload ≈1 s LCP — rejected)
- No `content-visibility` on section roots (measured anchor drift)
- Chromium-only E2E for this scope

## Order of execution

1. ~~Video preload (1)~~ ✅ DONE — −1.2 MB initial payload.
2. ~~Icon replacement (3) + preview recompress (6)~~ ✅ DONE — −135 KB page
   weight, −820 KB per share/scrape.
3. ~~Lighthouse assertions (4)~~ ✅ DONE — median-of-3 + TBT/byte-weight/
   perf-score sensors (baselines: TBT ~1.4 s, weight 244 KiB).
4. ~~StarField pause (5)~~ ✅ MEASURED — delta inside noise floor; only the
   `prefers-reduced-motion` a11y fix remains worthwhile.
5. ~~P3 batch (7–11)~~ ✅ DONE — item 10 resolved via `.gitattributes` +
   worktree refresh (index was already LF; no renormalize commit needed).
6. Strategic items (12–13) — roadmap discussion, not now.
