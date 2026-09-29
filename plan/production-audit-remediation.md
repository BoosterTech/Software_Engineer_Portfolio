# Production Audit — Remediation Plan

Source: evidence-based audit of `feature/ui-refresh` working tree (2026-01).
Stack reality: React 18 + CRA + JS (no Next.js/TS — audit sections scoped accordingly).
All findings verified at runtime against the production build or via the project's own gates.

## Phase 1 — Restore navigation integrity

### 1. HIGH-001: Nav anchors are not real links (keyboard-inaccessible) ✅ DONE

`react-scroll` `Link` renders `<a>` with no `href` → not focusable, not a semantic
link, not crawlable. Verified: all 9 nav anchors render `href=null`; Tab order skips
every nav link.

**Implemented:** `href` added to logo `Link`, `StyledScrollLink`, `MobileNavItem`
in `src/common/Navigation/index.js`. Verified at runtime: all 9 anchors now render
`#home/#about/#projects/#contact`; Tab order lands on every nav item; smooth scroll
still wins (react-scroll `preventDefault`s the native hash jump — `location.hash`
stays empty after click). 22/22 unit tests + lint + prettier green.

Convention recorded in `AGENTS.md` → "Navigation" section.

### 2. HIGH-003: First-click anchor drift (the reported bug) ✅ DONE

Verified on prod build (iPhone 12 profile): first Contact click landed
`contactTop` 175–400px off; every subsequent click landed exactly 90px.

**Implemented:** removed `content-visibility` + `contain-intrinsic-size` from
**all four** section roots (About, Projects, Contact, Footer). The plan's partial
fix (Contact/Footer only + re-measured About/Projects estimates) was tried first —
first-click error actually _worsened_ to a consistent ~300px, because
About/Projects still re-rendered mid-scroll and reflowed the document under the
running scroll animation. Full removal was required.

**Verified:** 3 fresh browser contexts — first click lands `contactTop` 90px,
identical to every subsequent click. Document height stable (5071) throughout
the scroll; no placeholder reflow. All 5 e2e tests pass (the `navigates to
About` test that caught the drift is green). 22/22 unit tests, lint, prettier.

**Risk realized: none** — LCP/TBT impact to be checked in step 9's Lighthouse run;
on this page the removed optimization had measurable cost (drift) and unmeasured
benefit.

## Phase 2 — Restore test safety net

### 3. HIGH-002: E2E suite — 4/5 tests fail on stale selectors ✅ DONE

- Selectors fixed: `a[href="#…"]` → `[data-testid="nav-link-…"]` (desktop-only
  hook — avoids strict-mode violations from the duplicated mobile menu), and
  `img[alt="Polish"]` → open `Select language` then `getByRole("option", { name:
"Polish" })`.
- **5/5 pass.** The `navigates to About` failure resolved with HIGH-003; a later
  flake (click landing before react-scroll's handler attached → slow native
  `href` scroll under CSS `scroll-behavior: smooth`) was fixed by removing that
  rule from `src/styles/base.js` — react-scroll owns all animated scrolling and
  no other code calls `scrollTo`/`scrollIntoView`, so the CSS rule only caused
  double-animation plus a mount-gap race.
- `reuseExistingServer` hardened — see MEDIUM-005 below.

### 4. MEDIUM-001: `format:check` red on 8 files ✅ DONE

`prettier --write` applied to all remaining failing files (`Button/styled.js`,
`ThemeIcon.js`, `LanguageProvider/index.js`, `LanguageSwitch/styled.js`,
`HamburgerIcon.js`, `menuItems.js`, `test-utils.js`). `npm run format:check` is
now fully green.

## Phase 3 — Behavior fixes

### 5. MEDIUM-002: Logo click resets language to English ✅ DONE

Removed `setLanguage("English")` from `handleClick` and dropped the now-unused
`setLanguage` from the `useLanguage()` destructure. Verified at runtime: switch
to Polish → click logo → nav still reads "O mnie".

### 6. MEDIUM-003: Pull-to-reload too sensitive ✅ DONE

Threshold raised 15px → 70px with a `reloadTriggered` once-guard; the duplicated
inline handlers on backdrop + panel were extracted to shared
`handlePullStart`/`handlePullMove` (`Navigation/index.js`).

### 7. MEDIUM-004: Carousel dots under WCAG 2.2 target size ✅ DONE

**Implemented:** `NavDot` is now a 24×24 button with `padding: 7px` +
`background-clip: content-box` — the visible dot stays 10px, the hit area meets
the 24px minimum (`Projects/styled.js`). Verified: all 9 dots measure 24×24 in
the built app at desktop and mobile widths.

### 7b. Axe sweep — violations found by clean-environment audit ✅ DONE

A post-implementation axe-core 4.7 run on the production build (no extensions —
the user's DevTools Lighthouse a11y-80 was polluted by BLACKBOX.AI / axe
DevTools injected DOM) found three `serious` violations; all fixed:

- **svg-img-alt:** `SiStripe`/`SiFramer` render `role="img"` with no name in
  `ToolsShowcase/index.js` — decorative next to text labels → `aria-hidden`.
- **listitem:** nav markup was `<div><a><li>` — `MenuContainer` is a `styled.div`,
  so `StyledListItem` had no list parent. `StyledListItem` is now `styled.div`
  (no list semantics needed inside `<nav>`).
- **nested-interactive:** `CarouselSlide` put `role="button"`/`tabIndex` on a
  `Slide` containing real `<a>` CTAs. Removed; added a real `ExpandButton`
  (corner icon button, `aria-label` = localized project title) rendered on the
  active slide — preserves keyboard access to the modal, verified: focus +
  Enter opens the dialog.

**Verified:** axe 0 violations at 1440px and 390px; 21/21 unit tests; 5/5 e2e;
lint, prettier, check:colors, size-check, build all green.

### 8. MEDIUM-006: Contact link accessible names ✅ DONE

Removed the `aria-label="Contact via …"` override from `ContactTile` — the
accessible name is now computed from the tile's visible text ("WhatsApp Chat
with me instantly"), so it leads with the visible label (WCAG 2.5.3
label-in-name). Verified: computed names + clean axe on `#contact`.

## Phase 4 — Perf gate + hygiene

### 9. HIGH-004: Lighthouse LCP 3.6s vs 2.5s budget ⏸ DEFERRED

**Partial fix shipped:** media-scoped `<link rel="preload">` for both theme
portraits in `public/index.html`; portraits copied to `public/` so the preload
and `<img>` URLs match exactly (single fetch); `width`/`height` attrs added
(CLS guard). Measured: LCP 3,590ms → **3,365ms** under LHCI throttle;
unthrottled probe ~1.6s. The ~2.6s "resource load delay" is gone — the image
now fetches in parallel with the JS.

**Still red:** the 2,500ms assertion in `.lighthouserc.js`. Remaining cost is
structural — the LCP element can't paint until the bundle parses and React
mounts. ~~Real fixes are prerendering (react-snap-style post-build step) or
cutting main-thread JS~~ — **update 2026-09:** prerendering was implemented
and measured (see `performance-audit-2026-09.md` §H1): hydration repaints
re-stamp the LCP element, so it's LCP-neutral, and even zero-JS static HTML
floors at ~1.5 s because the hero entrance animation gates the paint.
Remaining real lever: entrance-animation opacity on the hero containers
(design decision).

### 10. LOW sweep — hygiene ✅ DONE

- Deleted `.depcheckrc` (depcheck not installed, no script).
- Removed `sharp` devDep (zero references); lockfile synced via
  `npm install --legacy-peer-deps` (CRA5 peer strictness blocks plain install).
- Deleted `scripts/normalize-imports.js` (no npm script uses it).
- Moved `@testing-library/*` + `gh-pages` from `dependencies` to
  `devDependencies` — they're build/test/deploy tooling, not runtime.
- Fixed `manifest.json` `"Portflio"` → `"Portfolio"`.
- Replaced literal `1100-1`/`768` with `COMPACT_MAX_PX`/`DESKTOP_MIN_PX`
  derived from `themes.breakpoint.xl2`/`lg` in `Navigation/index.js`.
- Dropped duplicate `ThemeProvider` in `App.js` (`src/index.js` already wraps).

### 11. MEDIUM-005: Playwright server hardening ✅ DONE

`webServer` now runs `node scripts/serve-e2e.js` — a zero-dep static server on
**port 3100** that serves `build/` and strips the `/Front-End-Dev-Portfolio`
prefix. This fixes two real bugs: port 3000 collided with the dev server
(`reuseExistingServer` silently tested whatever was running there), and plain
`serve -s build` never actually worked standalone — prefixed asset requests
got the index.html fallback (`serve` doesn't apply repo-root `serve.json`
rewrites the way it was assumed). E2E now exercises the real prefixed
production bundle. Verified: `CI=true npx playwright test` → 5/5 on a fresh
server.

## Verification (full suite, after implementation)

```
CI=true npm test
npm run lint
npm run format:check
npm run check:colors
npm run check:circular
npm run size-check
npm run bundle:check
npx playwright test          # all 5 green
npm run build
npx @lhci/cli autorun        # or npm run lighthouse:check
```

Plus manual Playwright checks: Tab order reaches every nav link; fresh-context
hamburger→Contact lands at `contactTop` ≈ 90px on the **first** click.

## Do NOT

- Stage or commit — user request only.
- Add TypeScript, router, state library, or new tooling (audit found no
  justification; AGENTS.md explicitly defers).
