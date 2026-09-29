# Performance Optimization Plan

Evidence-based plan from the performance audit. Lab measurements (LHCI + Lighthouse 13
desktop preset) on the production build. No RUM exists — all numbers are lab data.

## Measured baseline

| Metric                 | Mobile (LHCI)                                | Desktop | Budget  | Status               |
| ---------------------- | -------------------------------------------- | ------- | ------- | -------------------- |
| Performance score      | 0.77                                         | 0.99    | —       | mobile ⚠️            |
| FCP                    | 0.6 s                                        | 0.2 s   | —       | ✅                   |
| LCP                    | **3.05 s**                                   | 0.8 s   | ≤ 2.5 s | ❌ fails repo budget |
| TBT                    | 660 ms                                       | 30 ms   | —       | ⚠️                   |
| CLS                    | 0                                            | 0       | ≤ 0.1   | ✅                   |
| Speed Index            | 3.1 s                                        | 1.1 s   | —       | ✅                   |
| TTI                    | 3.8 s                                        | 0.8 s   | —       | ✅                   |
| Transfer               | ~330 KB                                      | ~545 KB | —       | ✅ lean              |
| Main-thread work       | 5.1 s (mount task 585 ms, styleLayout 1.6 s) | 1.9 s   | —       | ⚠️                   |
| Unused JS              | 65 KB                                        | 64 KB   | —       | ⚠️                   |
| Responsive-image waste | ~92 KB                                       | —       | —       | ⚠️                   |

LCP element: `section#home` portrait (`light_theme_profile.webp`, 19.5 KB, rendered
300×300). Load time 28 ms — **72% of LCP is render delay** waiting for `main.js`
(579 KB raw / 210 KB gz) to download + mount the SPA. The image is not the problem;
the mount gate is.

## Phase 1 — Highest Impact / Lowest Risk ✅ DONE

Measured after Phase 1 (LHCI mobile, median of 3 runs): LCP ~3.0–3.2 s
(unchanged — render delay is mount-bound, Phase 2 addresses it), requests 19→18,
transfer ~306 KB, responsive-image waste 92→80 KB. Gate now runs correctly and
reports the real LCP failure instead of NO_FCP.

### 1.1 Prioritize the LCP portrait — ✅ DONE

- `fetchpriority="high"` on the portrait (`Home/index.js`). No measurable LCP
  delta — correct prioritization, but mount delay remains the gate. A `<link
rel="preload">` was skipped: the asset is webpack-hashed and can't be
  hardcoded in `index.html`.

### 1.2 Render only the active theme's portrait — ✅ DONE

- `MutationObserver` on `<html data-theme>` drives a single `img`; the hidden
  theme variant no longer downloads. Verified: only `light_theme_profile.webp`
  in network requests (−20 KB). Dead `.light`/`.dark` opacity rules removed
  from `homeStyles.js`.

### 1.3 Font — ✅ DONE (decision: no webfont)

- Dead `@import` removed from `base.js`. The `<link>` + preconnect +
  `media="print"` async pattern was implemented and **measured**: LCP regressed
  ~1 s (4.05 s vs 3.0 s) because the font swap restyles the whole document
  mid-mount on throttled mobile (styleLayout 1597→2578 ms, TTI 3.8→6.3 s).
  Trimming to the 5 used weights (400–800) did not help. Reverted — the site has
  never rendered Inter in production, so the system stack is the status quo at
  zero visual cost. Self-hosting a subset remains a Phase 3 option.

### 1.4 Fix `lighthouse:check` under Git Bash — ✅ DONE

- `PUBLIC_URL=/` → `PUBLIC_URL=.` (`.` doesn't start with `/`, so MSYS leaves it
  alone; produces relative asset paths that serve fine at root). Verified
  end-to-end: `npm run lighthouse:check` now produces real metrics instead of
  `NO_FCP`.

### 1.5 Remove `reportWebVitals` — ✅ DONE

- Deleted `src/reportWebVitals.js`, the call in `index.js`, and the `web-vitals`
  dependency (`npm uninstall --legacy-peer-deps`; the repo has a pre-existing
  typescript peer conflict via madge→detective requiring that flag). The dead
  4.5 KB `453` chunk is gone from the build.

## Phase 2 — Structural Improvements

### 2.1 Framer Motion feature bundle — ✅ DONE (async `domMax`)

- **Done:** wrapped `<App />` in `LazyMotion` in `src/index.js`; converted all
  ~17 `styled(motion.*)` call sites to `styled(m.*)` across 7 styled files.
- **Correction to plan:** `domAnimation` was insufficient — the Projects carousel
  uses `drag="x"` + `dragConstraints`, which requires `domMax`. Used the async
  feature loader (`features={() => import("framer-motion").then(m => m.domMax)}`)
  so the feature bundle splits into a lazy 30 KB chunk.
- **Measured:** main.js **209.4 → 184.6 KB gz (−25 KB)**; new `0.*.chunk.js`
  30 KB gz (domMax, loads off the critical path). Hero paint needs no FM — its
  animations are CSS keyframes.
- **LCP delta:** none measurable under lab noise (render delay is mount-bound;
  see note below).

### 2.2 Defer below-fold render cost — ⛔ REVERTED (`content-visibility` removed)

> **Superseded 2026-09:** this optimization caused verified first-click anchor
> drift (~175–400px) — react-scroll measured while below-fold sections were
> still intrinsic-size placeholders. Removed from all four section roots;
> details in `plan/production-audit-remediation.md` (HIGH-003). Do not re-add.

Original entry (kept for history):

- **Done:** `content-visibility: auto` + measured `contain-intrinsic-size` on
  About, Projects, Contact, Footer section roots (desktop value + `lg` mobile
  override). Heights were **measured with Playwright** against the production
  build, not guessed:
  - About: 952 px desktop / 1472 px mobile → `auto 950px` / `auto 1470px`
  - Projects: 957 / 476 → `auto 960px` / `auto 480px`
  - Contact: 484 / 959 → `auto 480px` / `auto 960px`
  - Footer: 242 / 280 → `auto 240px` / `auto 280px`
- **Anchor risk:** bounded — react-scroll reads `offsetTop` at click time;
  estimates are within ~5% of real heights, and `auto` refines to exact sizes
  after first render.
- **Measured:** styleLayout ~1.6 s in the same noisy batch — inconclusive delta;
  kept as standard practice for real devices.

### ⚠️ Lab-environment caveat

LHCI runs on this machine show ±500 ms LCP variance between batches on
near-identical code (TBT has swung 660→1970→1010 ms without matching changes).
Trends within a batch are reliable; absolute values are not. The 2.5 s LCP
budget has not been met — the remaining gate is client-side boot cost of a
184 KB gz SPA under 4× CPU throttle + simulated 4G (~465 ms TTFB alone).
Options: accept a realistic budget (~3.2 s), or pursue deeper surgery
(React.lazy per-section with anchor placeholders — carries the same
offset-accuracy risk plus Suspense complexity for ~200–300 ms potential gain).

### 2.3 Right-size images — ✅ DONE

- **Done:** all 19 oversized assets resized to 2× their max render size and
  converted to WebP (sharp, quality 82). Orbit icons → 160 px, contact icons →
  72 px, flags → 48 px, portraits → 640 px, coming_soon badge → 320 px.
  `iconWidth`/`iconHeight` data updated to real intrinsic dims; all imports
  repointed to `.webp`; `coming_soon_icon.png` → `.webp`.
- **Measured (LHCI):** `uses-responsive-images` waste **92 → 9 KB**;
  total mobile transfer **328 → 230 KB**; `offscreen-images` 28 → 15 KB;
  `unused-javascript` 65 → 54 KB (side effect of 2.1).
- **Note:** `srcset`/`sizes` deliberately skipped — single-size assets at 2×
  render dims now cover all DPRs with negligible waste; srcset would add
  complexity for <10 KB.

## Phase 3 — Optional Optimisation

- **3.1** Data-URI inlining — ✅ REVIEWED, no change. After 2.3 all icons are
  0.8–3 KB (under webpack's 10 KB inline threshold → ~20 KB base64 in main.js).
  Inlining now _saves_ ~15 requests; the earlier 35 KB concern was pre-resize.
- **3.2** `react-scroll` → native — ❌ REJECTED on evidence. Active features:
  `spy`/`activeClass` (scroll-position link highlighting), `smooth`, per-item
  `offset`. Replacement ≈ 60–80 lines (IntersectionObserver spy + offset math)
  to save ~8 KB gz. Bad complexity/byte trade.
- **3.3** `.map` deploy exclusion — ✅ DONE. `scripts/remove-maps.js` removes
  ~8.3 MB of sourcemaps, wired into `predeploy` (local `build` keeps maps for
  debugging; deploy artifacts stay clean).
- **3.4** Desktop audit — ✅ documented (see below). RUM: accepted as "none" —
  `web-vitals` was removed in 1.5 rather than wired to a sink.
- **3.5** Re-run `npm run lighthouse:check` after changes.

Desktop audit (manual, run from repo root after `npm run build`):

```
node scripts/serve-e2e.js
npx --yes lighthouse http://localhost:3100/ --preset=desktop --view
```

(`serve -s build` alone does not work here — it has no path-prefix rewrite, so
`/Front-End-Dev-Portfolio/…` asset requests fall back to index.html.
`scripts/serve-e2e.js` serves `build/` on :3100 and strips the prefix.)

(Kept as manual steps — npm scripts on Windows run via cmd.exe where shell
job-control syntax is unreliable.)

## Explicitly out of scope

- react-icons "reduction" — already tree-shaken per-icon; the 6.2 MB sourcemap figure
  is the barrel file's `sourcesContent`, not shipped code.
- styled-components → static CSS migration — 0 unused CSS, no evidence worth a rewrite.
- Router / SSR / Next.js migration — unjustified for a single-route static site.
- Broad memoization, broad dynamic imports, animation removal, image quality cuts.

## Validation after each phase

```
npm test && npm run lint && npm run format:check
npm run check:colors && npm run check:circular && npm run size-check
MSYS_NO_PATHCONV=1 PUBLIC_URL=/ npm run build && npx --yes @lhci/cli autorun
```

Success criteria: mobile LCP ≤ 2.5 s (assertion passes), TBT < 300 ms, CLS stays 0,
desktop stays ≥ 0.95.
