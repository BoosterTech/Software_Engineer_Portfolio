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

### 5. Decorative-animation budget for low-end devices

- **FACT:** TBT 1,640 ms with 20 long tasks; `StarField` runs 60 always-on
  `opacity`/`transform` loops on a `position:fixed` layer (never offscreen),
  plus `gradientShift`, `float`, twinkle, and orbit observers. The
  `.portrait-playing` freeze already proved cumulative animation load stalls
  low-end Android.
- **FIX (cheapest first):** pause `StarField` when `document.hidden` and/or
  via IntersectionObserver on scroll-idle; consider dropping star count on
  `max-width: lg`. Measure TBT delta in Lighthouse before/after.

### 6. Recompress `social_preview.png` ✅ DONE

- **SHIPPED:** replaced with `public/social_preview.jpg` — same 1200×630 dims,
  JPEG q85, **113 KB** (−88%). Updated `og:image` + `twitter:image` in
  `public/index.html` and the share-attach path/type in
  `useShareAction.js` (`preview.jpg`, `image/jpeg`); PNG deleted.
- **WHY JPEG over WebP:** og:image WebP support is still inconsistent across
  scrapers (Facebook documents jpg/png/gif); JPEG q85 is universal and the
  card has no alpha.

## Later (P3)

### 7. Mobile menu Escape key

- **File:** `src/common/Navigation/index.js` — menu closes on link click,
  backdrop tap, and breakpoint change, but not Escape. Closed panel is
  correctly `visibility:hidden` (no focus trap), so this is a convenience
  gap, not a trap.
- **FIX:** `keydown` listener while `isMenuOpen`, Escape → close + return
  focus to the hamburger toggle.

### 8. Unify nav-height tokens

- **FACT:** three names for one concept — `--navbar-height` (base.js,
  backdrop), `--nav-height`/`--nav-height-mobile` (homeStyles), and runtime
  `--nav-height-actual` (ResizeObserver).
- **FIX:** consolidate to `--nav-height` + `--nav-height-mobile` tokens and
  keep `--nav-height-actual` as the measured override only.

### 9. E2E hardening

- **File:** `e2e/portfolio.spec.js`
- Replace `waitForTimeout` sleeps (×10) with state-based waits
  (`expect.poll`, `toHaveAttribute`, scroll-position assertions).
- Replace `getComputedStyle().backgroundColor` carousel assertions with the
  `aria-current` attribute on `NavDot` — user-facing, not implementation.
- Add a mobile-menu share-row case and an Escape-close case (pairs with #7).

### 10. `.gitattributes` for line endings

- **FACT:** `format:check` fails on Windows (54 files flagged) because
  `autocrlf` checks out CRLF while Prettier expects LF; Ubuntu CI is green.
  Newly written files are LF — the tree is mixed.
- **FIX:** `* text=auto eol=lf` in `.gitattributes`, then a one-time
  `git add --renormalize .` on a dedicated chore branch (do not mix into
  feature work).

### 11. Branch coverage headroom

- **FACT:** branch coverage 72.03% vs the 70% gate — ~2 pt margin.
- **FIX:** opportunistically cover error/edge paths (share error, video
  error, scroll-spy bottom forcing) rather than chasing a number.

## Optional / Strategic

### 12. CRA → Vite (or equivalent) toolchain migration

- **Limitation today:** `react-scripts@5.0.1` is frozen upstream; it anchors
  most of the 38 audit findings and the ejected-config debt never shrinks.
- **Benefit:** retires most transitive vulns, faster builds, modern plugins.
- **Cost:** moderate — config port, jest→vitest decision, `%PUBLIC_URL%`
  handling, `scripts/*` and Lighthouse/E2E wiring re-verification.
- **Risk:** low for a static SPA; biggest detail is preserving the
  `PUBLIC_URL=/Software_Engineer_Portfolio` deploy behavior and the
  `serve-e2e.js` prefix strip.
- **Verdict:** schedule when convenient — current setup is functional and
  all gates are green; this is not urgent.

### 13. axe-core in tests

- Add `@axe-core/playwright` to one E2E pass (or jest-axe to key components).
  Lighthouse a11y = 1.0 already; this catches what Lighthouse misses
  (focus order, live regions) as regression protection.

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
4. StarField pause (5) — measure, don't guess.
5. P3 batch (7–11) — opportunistic, one chore PR.
6. Strategic items (12–13) — roadmap discussion, not now.
