# Production Audit — Action Plan

Remediation plan from the full production-quality engineering audit (2026-09-25).
Audit is read-only evidence; this file tracks the follow-up work.

## Verified measurements (audit baseline)

- Lighthouse mobile: Perf 62 / A11y 100 / Best Practices 100 / SEO 100
- LCP 3.6s (budget ≤4.0s — passes), TBT 1,760ms, CLS 0, FCP 0.7s, TTI 4.5s
- Transfer: 363 KiB mobile run · 20 initial requests · JS gzip: main 128.5 KB + framer chunk 30.1 KB
- Main-thread: 6.6s total — `other` 2.3s, styleLayout 2.2s, scriptEval 1.3s, paint 0.7s
- Tests: 25/25 unit ✓, 5/5 E2E ✓ — but `test:coverage` FAILS (branches 41.99%, functions 69.47% vs 70% floor)
- `format:check` FAILS on 20 files (uncommitted formatting drift)
- `.lighthouseci/assertion-results.json` = `[]` (assert gate may be vacuous)
- `npm audit`: 36 vulns — all transitive dev/build chain, none ship

---

## Phase 1 — Immediate (before presenting the portfolio)

### 1.1 Fix the coverage gate [P1] — DONE

`test:coverage` was failing its own thresholds AND was not run in CI.
Resolved — the gate now passes (58 tests / 11 suites, exit 0) and CI runs it.

- [x] Add unit tests for `ProjectModal.js` → `ProjectModal.test.js` (19 tests):
      Escape-close, Tab/Shift+Tab focus trap (all 3 paths), ArrowLeft/Right nav +
      bounds, body scroll lock + `scrollY`/focus restore, backdrop vs inside click,
      img dims fallback, CTAs, comingSoon. File coverage 1.35% → 94.6% lines.
      (`Backdrop` gained `data-testid="project-modal-backdrop"` — `no-node-access`
      forbids `parentElement`.)
- [x] Add unit tests for `Projects/index.js` → `Projects.test.js` (9 tests):
      dot select + `aria-current`, arrow buttons + bound-hiding, window arrow keys,
      inactive-slide click, modal open/nav/close
- [x] Raise `OrbitSection.js` branch coverage (26.8% → 95%+) →
      `OrbitSection.test.js` (5 tests): desktop orbit, mobile marquee ×2, <1024
      compact dims, tap-pause/resume/outside-pointerdown, live resize
- [x] `ci.yml` runs `npm run test:coverage` (replaces `npm run test` — one suite
      run + thresholds, no duplicate)
- [x] `npm run test:coverage` exits 0 — all 70% floors met

Remaining thin spots (gate is global, so passing): `Projects/index.js` drag /
idle-prefetch callbacks (55% branches — framer/IO internals), `CarouselSlide/
index.js` 63% lines, `TalkingPortrait.js` 50% functions.

### 1.2 Clean the working tree [P2] — DONE

- [x] `npx prettier --write src` — normalized 20 files; `format:check` green.
      lint / size-check / 58 tests all still pass

### 1.3 Remove the menu pull-to-reload [P2] — DONE

- [x] `src/common/Navigation/index.js` — deleted `handlePullStart`,
      `handlePullMove`, `touchStartY`, `reloadTriggered` and the `onTouch*` props
      on `MobileMenuBackdrop`/`MobileMenuPanel`. Scrolling the menu no longer
      reloads the page

### 1.4 Verify the Lighthouse assert gate [P2] — DONE (works)

- [x] Verified NOT vacuous: scratch config with `lcp maxNumericValue: 1`
      against the existing report correctly failed with
      `expected <= 1, found 3592` and `Assertion failed. Exiting with status
code 1`. The `.lighthouserc.js` gate enforces LCP ≤4s / CLS ≤0.1 as intended

---

## Phase 2 — Next (meaningful engineering value)

### 2.1 Pin the quality-gate tooling [P2] — DONE

`npx --yes` floats versions — gates are non-reproducible.

- [x] `prettier@3.9.8`, `@lhci/cli@0.15.1`, `cross-env@10.1.0` moved to
      pinned devDependencies (prettier 3.9.9 skipped — published <7 days ago)
- [x] Scripts updated: `format:check` → `prettier --check src`,
      `lighthouse:check` → `cross-env PUBLIC_URL=. npm run build && lhci autorun`
- [x] `depcheck` pinned as `npx --yes depcheck@1.4.7` in `ci.yml` — kept out
      of devDeps (CI-only; avoids its vue2/detective tree in local installs)
- [x] **Bonus fix — `npm ci` was already broken in CI**: the lockfile pinned
      `typescript@5.9.3` (madge peerOptional `^5.4.4`) against react-scripts'
      `peerOptional typescript@^4` → ERESOLVE on every `npm ci`. Resolved via
      `.npmrc` `legacy-peer-deps=true` (matches how the lock was generated) +
      explicit `typescript@5.9.3` devDep so the root-hoisted copy madge's
      detectives `require()` stays in place. Verified: `npm ci` clean install +
      `check:circular` pass

### 2.2 Fix `ExpandButton` light-theme contrast [P2] — DONE

- [x] `CarouselSlide/styled.js` — `color: var(--color-white)` →
      `var(--color-text-primary)`: dark icon on the light translucent chip in
      light mode, unchanged appearance in dark mode

### 2.3 Give `Slide` real semantics [P2] — DONE

- [x] `Slide` is now `role="group"` + `aria-roledescription="slide"` +
      `aria-label={title}` — the W3C carousel pattern. A real `<button>` or
      `role="button"` was rejected: `ExpandButton`/CTAs live inside (repo's
      nested-interactive rule), and selection is already keyboard-reachable via
      dots/arrows
- [x] Found and fixed a second bug: inactive slides' CTA links sat translated
      `y:100%` but still in the tab order / a11y tree — they now render only when
      the slide is active
- [x] New tests: labelled-group role, CTA links absent on inactive slides

### 2.4 Scope carousel arrow keys [P3] — DONE

- [x] Window-level `keydown` listener removed — `onKeyDown` now lives on
      `ProjectsWrapper` (`role="region"`), so arrows only navigate when focus is
      inside the carousel. Handled keys `preventDefault` (no more scroll+move
      double action). New test asserts outside-region keys are ignored

### 2.5 i18n parity for alt text [P3] — DONE

- [x] `screenshotAlt: "{title} — …"` added to EN/PL/ES; `CarouselSlide` and
      `ProjectModal` alts now come from translations. Also localized the
      `Live Demo`/`GitHub` CTA fallbacks (`liveDemoLabel`, `repoLabel`)

### 2.6 SEO social meta [P3] — DONE

- [x] `public/index.html` — added `og:image` (+width/height/alt),
      `twitter:card` (`summary_large_image`) + `twitter:title`/`description`/
      `image`, `<link rel="canonical">`, and `apple-touch-icon`
- [x] `public/apple-touch-icon.png` — new 180×180 PNG rendered from
      `icon.webp` via `sharp-cli` (iOS ignores webp; the old CRA `logo192.png`
      was the React logo, not brand)

### 2.7 Profile before optimizing [P2] — DONE

Traced the prod build with CDP `devtools.timeline` (+ source-mapped stacks)
via `measure-trace-tmp.js`. Three forced-layout call sites, all fixed:

- [x] **`spy={true}` on `ViewMyWorkButton` (~171ms)** — a dead prop that
      mounted react-scroll's entire scrollSpy machinery: document scroll
      listener + `currentPositionX`/`getBoundingClientRect` reads during commit
      and on every scroll. Removed the prop.
- [x] **`OrbitSection` `useLayoutEffect` `getBoundingClientRect` (~130ms →
      ~20ms)** — synchronous layout read inside React commit. Moved to
      `useEffect` (ResizeObserver still measures post-paint).
- [x] **`ThemeModeProvider` `getComputedStyle` (~21ms)** — forced style
      resolution to read `--color-background`. Replaced with exported
      `themeBackground` constants in `tokens.js` (interpolated into the CSS
      vars — single source of truth).

Result: stack-attributed forced layout ~300ms → ~34ms. Remaining
styleLayout cost is styled-components v6 `insertRule` across the mount
tree + normal layout — no obvious single offender left; deeper cuts would
need render deferral, not worth it at this size.

---

## Phase 3 — Later (useful, non-critical) — DONE

- [x] Dead code deleted: unused keyframes (`fadeInLeft`, `fadeInRight`,
      `floatAbout`, `slideFromLeft` + their aliases) from `animations.js`,
      commented `HeaderImage` JSX from `Home/index.js`; root `manifest.json`
      confirmed absent (`public/manifest.json` is the real asset)
- [x] Breakpoints normalized to `themes.js` tokens: `ProjectModal`
      (`lg`), `getOrbitDimensions` (`xl`, parsed), `base.js` (`lg`/`xl`)
- [x] `Navigation` `getIcon` switches on `item.slug` (stable), not
      translated names
- [x] `LanguageSwitch` keyboard support: ArrowDown opens + focuses first
      option, ArrowUp/Down rove with wrap, Escape closes + refocuses globe
      (closed options are `visibility:hidden` — unreachable by Tab)
- [x] `ExpandButton` aria-label localized: `"Expand {title}"` +
      translations (`expandLabel` key, EN/PL/ES)
- [x] `MobileMenuBackdrop`: `calc(100vh - 100%)` → `position: absolute;
top: 100%; height: calc(100vh - var(--navbar-height))`. Note: `fixed`
      was tried first and collapsed to zero height — the nav's
      `backdrop-filter` makes it the containing block for fixed descendants
- [x] E2E expanded: modal open/focus-trap/Escape/focus-restore, modal
      arrow-key navigation, carousel arrow-key region scoping, mobile (375px)
      hamburger open/close + backdrop tap — 10 tests green
- [x] `npm audit fix` applied (9 pkgs, 44→38 vulns); remainder all
      dev-chain-only, fixes need `--force` breaking changes — resolved by the
      CRA → Vite migration (Phase 4, shipped)
- [x] `bundle:check` total budget added: 250 KiB gzip (actual ~156 KiB),
      `BUNDLE_TOTAL_LIMIT` env-overridable

## Phase 4 — Optional / strategic (decide, don't rush)

- **CRA → Vite** — ✅ SHIPPED (see `audit-remediation-plan.md` item 12 and
  `post-migration-audit-remediation.md`). Rolldown-based Vite 8 is now the
  build pipeline; the CRA-vuln motivation this entry cited is resolved.
- **React 19 / RTL 16 / jest-dom 7 / user-event 14 / framer 13 /
  styled-components 6.5 / react-icons 5.7 / gh-pages 6.3** — pinned upgrades,
  batch and verify; no urgency
- **`sanitize` modal description** — currently `dangerouslySetInnerHTML` on
  author-owned static data (acceptable); document the trust boundary or add
  a tiny sanitizer if content ever becomes externally sourced
- **Container queries fallback** — `cqw`/`container-type` in `BottomBar`
  needs Safari 16+; verify graceful degradation once on an older target

## Explicitly out of scope (per conventions)

- No state library, router, backend, TypeScript, design-system infra,
  visual-regression stack, or framework migration for its own sake
- No `useMemo`/`useCallback`/`React.memo` additions without a measured need
- No `content-visibility: auto` on section roots (verified anchor drift)
- No `scroll-behavior: smooth` (react-scroll owns scrolling)
- No webfonts via CSS `@import` (measured ~1s LCP cost)

## Verify after each phase

```
npm run test:coverage  # CI=true, all green + 70% floors
npm run lint
npm run format:check
npm run check:colors
npm run check:circular
npm run size-check
npm run build
npm run test:e2e        # needs the build above
npm run lighthouse:check
```
