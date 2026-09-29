# Performance Audit — 2026-09 (round 2)

Read-only audit of the production build on `main` (post Vite/rolldown migration,
post premium-experience merge). Evidence-based — lab measurements via LHCI
(median-of-3), direct CDP probes, and sourcemap analysis. No code was modified.
Supersedes nothing in `performance-optimization-plan.md` — this is the current
state re-measured; that file remains the history of what was already shipped.

**Lab caveat:** no RUM exists (`web-vitals` removed intentionally, no sink).
All numbers are lab. LHCI mobile uses simulated throttling; the headless
Chromium doing these runs has **software rasterization** — desktop-preset runs
inflate raster work ~4× (1440×900 vs 390×844) and are not representative of
GPU-equipped real desktops.

## Measured baseline (LHCI mobile, median of 3)

| Metric            | Value                  | Repo budget | Status                       |
| ----------------- | ---------------------- | ----------- | ---------------------------- |
| Performance score | 0.72                   | ≥ 0.60      | ✅                           |
| FCP               | 1.74 s                 | —           | —                            |
| **LCP**           | **2.67 s**             | < 3.5 s     | ✅ gate / ⚠️ vs 2.5 s "good" |
| TBT               | ~1.1 s                 | < 2.0 s     | ✅                           |
| CLS               | 0                      | < 0.05      | ✅                           |
| Speed Index       | 3.16 s                 | —           | —                            |
| TTI               | ~4.0 s                 | —           | —                            |
| Transfer          | 241 KB                 | < 300 KB    | ✅                           |
| Bundle            | 169 KB gz single chunk | < 250 KB gz | ✅                           |

**LCP element:** hero portrait `img` (`light_theme_profile.webp`, 640×640,
rendered 300×300, `fetchpriority="high"`). Phase breakdown: TTFB 21 ms /
load delay 29 ms / load duration 24 ms / **render delay 1825 ms (96%)** —
the image waits on SPA mount, same conclusion as the prior audit.

**Main-thread (mobile sim):** Style & Layout 2191 ms, Script Eval 1143 ms,
Rendering 630 ms, Other 2470 ms.

**Interaction long tasks (4× CPU, measured via CDP):**

- Mount: one 3.1 s task
- Fast scroll round-trip: ~28 tasks of 50–350 ms (entrance-animation churn)
- Theme toggle: 678 ms task (full-document CSS-var restyle + `isDark` consumers)
- Language switch: 1561 ms task (every `useContent` consumer re-renders)
- Desktop unthrottled: mount ~250 ms, two small tasks, CLS 0, DCL 93 ms

**Network:** 21 requests (LHCI run), zero render-blocking, zero third-party.
Video correctly deferred (`preload="metadata"` → 0.4 KB range request).
Portrait preload resolves to the same URL as the `<img>` on the production
base path (double-fetch seen on :3100 is a serve-e2e artifact, not prod).

**Bundle composition (sourcemap `sourcesContent` shares):**
framer-motion family ~472 KB, react-dom 131 KB, react-scroll ~73 KB,
styled-components stack ~64 KB, app source ~190 KB. `react-icons` shows
6.7 MB of _source_ — tree-shaken barrel artifact only, not shipped code
(confirmed prior finding). Single chunk — the async `features()` split was
removed (documented `INEFFECTIVE_DYNAMIC_IMPORT`; `m.*` statically imports
the same graph).

## Findings

### H1 — LCP is ~96% render delay (SPA mount gate) — ⚠️ TRIED, REVERTED

- **Finding:** the LCP `<img>` doesn't exist until React mounts; image itself
  loads in ~24 ms.
- **Evidence:** LCP phases — render delay 1825 ms of ~1.9 s total; mount long
  task 3.1 s at 4× CPU.
- **Implemented then measured (2026-09):** full build-time prerender pipeline
  (`vite build --ssr` of a `src/prerender.js` entry → `renderToString` +
  `ServerStyleSheet` → injected markup + inline styles → `hydrateRoot` with
  recoverable-error filtering; `data-theme` bootstrap patched the baked
  light-variant img src for saved-dark users; saved-language swapped silently
  at hydration). All gates green including axe scans — the plumbing worked.
- **Why it was reverted — the win never materialized:**
  - Hydration's commit repaints the LCP node and **re-stamps LCP at JS-boot
    time anyway** — same-session A/B on identical code: SSR ~1.5–1.6 s vs
    CSR ~1.4–1.8 s unthrottled; ~2.5–3.9 s vs ~3.3 s under 4× CPU.
  - **Pure static HTML with the JS bundle removed entirely still painted the
    LCP img at ~1.5–2 s** (loaded at ~120–800 ms): the real floor is the hero
    entrance animation (`slideInRight`/`fadeInUp`/`slideInLeft` —
    `opacity: 0` → 1 with `both` fill + 0.2–0.4 s delays). Chrome withholds
    the LCP candidate until the opacity ramp resolves.
  - Deferred-hydration variants (rIC, rAF+0, setTimeout 1500) couldn't open a
    paint slot under 4× CPU — boot eval saturates the main thread either way.
  - Side effects found & fixed during the attempt: `preload="metadata"` video
    painted frame 1 and became the LCP element in static markup; `loading="lazy"`
    carousel imgs fetched ~415 KB at parse (Chrome lazy-distance) → needed
    `preload="none"` + IO-assigned `src`. Both reverted with the pipeline
    since the behavior only appears under SSR.
- **Verdict:** prerender buys content-in-HTML (crawler/no-JS) at the cost of a
  permanent SSR-safety contract (no render-path `window`/`localStorage`,
  `ssr.noExternal` bundling, hydration-mismatch surface) — not worth it for a
  single-route portfolio with neutral LCP.
- **Actual remaining LCP lever:** the hero entrance animation — a
  transform-only slide (drop the `opacity` component / `both` fill) on
  `ImageContainer` would let the portrait paint ~0.8–1 s earlier on every
  device class, no build machinery required. Visible design change; unowned.

### H2 — Single 525 KB chunk; no below-fold deferral — HIGH (conditional)

- **Finding:** Projects/Contact/Footer + all of framer-motion load before
  first paint; 57 KB unused JS at load.
- **Evidence:** `unused-javascript` audit; single `index-*.js` chunk.
- **Approach:** `React.lazy` below-fold sections with measured `min-height`
  placeholders.
- **Expected benefit:** ~200–400 ms off mount.
- **Risk:** medium — the `content-visibility` anchor-drift failure mode
  (HIGH-003) applies; react-scroll measures offsets at click time, so
  placeholders must be accurate.
- **Note:** subsumed by H1 if SSG ships — do one, not both.

### M1 — Style & Layout dominates main-thread — MEDIUM

- **Finding:** 2.19 s style/layout on mobile sim; ~28 long tasks (50–350 ms)
  during a fast scroll — `whileInView` triggers + styled-components recalcs.
- **Approach:** convert the simplest `whileInView` fade/slide entrances to
  CSS (`animation-timeline: view()` or IO + class). Carousel `drag` must
  stay on FM.
- **Risk:** medium (behavior parity across browsers; `view()` needs fallback).

### M2 — Heavy rare interactions — MEDIUM-LOW — ✅ DONE

- **Finding:** language switch 1.56 s, theme toggle 678 ms (4× CPU).
  User-initiated and infrequent; real-device INP likely "needs improvement".
- **Shipped:** `startTransition` wraps `setLanguage`/`toggleTheme`
  (`LanguageProvider`, `ThemeModeProvider`) — React chunks the repaint so
  input interleaves.
- **Verified (4× CPU probe):** theme peak task 678 → 356 ms, language peak
  1561 → 851 ms; work total unchanged, responsiveness improved.

### M3 — Eager video poster fetch — LOW — ✅ DONE

- **Finding:** `profileImage.webp` (13.7 KB) downloads at ~600 ms in light
  theme where the dark video never displays; `poster` fetches regardless of
  play state and the layered `ProfileImage` still already covers the visual.
- **Shipped:** `poster` prop dropped (`TalkingPortrait`/`Home`); the video is
  opacity-0 until `playing`, so the poster never painted anyway.
- **Verified:** `profileImage.webp` absent from idle-load requests;
  −13.7 KB, −1 request.

### L1 — Non-memoized context values — INFORMATIONAL

- `LanguageProvider`/`ThemeModeProvider` pass `{...}` literals. Providers
  re-render only on state change, so cost is nil today; revisit only if those
  trees gain state.

### INFORMATIONAL — environment/hosting

- No RUM/CrUX — all data is lab; treat absolute values as bounds.
- Desktop-preset LHCI here (0.41–0.46) reflects software rasterization, not
  real desktops; direct CDP shows ~250 ms mount, CLS 0.
- GH Pages serves gzip/brotli automatically; no headers control — nothing
  actionable.

## Phases

**Phase 1 — Highest impact / lowest risk** — ✅ DONE

- ~~M3: drop redundant `poster` attr.~~ Shipped + verified.
- ~~M2: `startTransition` on language/theme setters.~~ Shipped + verified.

**Phase 2 — Structural**

- ~~H1: build-time prerender of hero/Home~~ — **implemented, measured,
  reverted** (see H1: hydration repaint re-stamps LCP; entrance animation is
  the real floor; LCP-neutral for a permanent SSR contract).
- Hero entrance animation → transform-only slide (emerged as the true LCP
  floor during H1 measurement — design-visible change, user decision pending).
- H2 (still available): `React.lazy` below-fold sections with measured
  `min-height` placeholders to protect anchor offsets — ~200–400 ms off mount,
  medium anchor-risk (HIGH-003 class).

**Phase 3 — Optional**

- M1: CSS `view()`-timeline entrances for simple fade-ins.
- RUM only if a real sink is wanted (`web-vitals` was removed deliberately).

## Do NOT change (evidence-backed)

- `react-scroll` → native: ~70 lines of replacement for ~8 KB gz — rejected
  prior, still valid.
- `react-icons` "reduction": already tree-shaken; sourcemap figure is
  `sourcesContent` noise.
- styled-components → static CSS: 0 unused CSS, no evidence for a rewrite.
- `content-visibility` on section roots: verified first-click anchor drift —
  do not re-add without re-measuring anchor accuracy.
- Webfont `<link>`: measured ~1 s LCP regression — system stack is final.
- Broad memoization / dynamic imports / animation removal.
