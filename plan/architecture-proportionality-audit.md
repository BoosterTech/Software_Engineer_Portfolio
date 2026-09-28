# Architecture Proportionality & AI Readiness Audit

**Date:** 2026-09-02 (updated 2026-09-21)
**Scope:** Entire `Front-End-Dev-Portfolio` codebase
**Objective:** Maximize long-term maintainability while minimizing unnecessary complexity, with emphasis on AI coding readiness.

> **Changelog:**
>
> - 2026-09-21: Gate-integrity & AI-readiness pass completed. Fixed stale `Navigation`/`CarouselSlide` test suites (matchMedia mock, testid-scoped queries, `onExpand` contract) — 9 suites / 28 tests green. `check:colors` now reports zero violations (`ProjectModal` black-rgb tokens). Deleted dead `SkillsetContainer` + `content/skillsets/` + stale typedefs (−561 lines). Added `AGENTS.md` conventions contract. Localized all ToolsShowcase copy into `home.toolsShowcase` (EN/PL/ES).
> - 2026-09-02: Contact section light-mode refresh completed. Added 6 theme-aware contact tokens to `tokens.js`, swapped hardcoded `rgba()` values in `Contact/styled.js` for token references, fixed GitHub accent from `#f8fafc` to `#64748b`. Lint, color check, and build all pass. Bundle: 185.92 KB (+91 B).
> - 2026-09-02: Dead code cleanup & CI guard extension completed. Deleted `src/slices/` (71 lines), `orbitDecorations.js` (194 lines), 5 dead exports from `homeStyles.js` (~80 lines). Extended `check-hardcoded-colors.js` to scan all `.js`/`.jsx` files with allowlist; fixed 15 hardcoded colors across 8 files. Extracted `DarkModeToggle` styled components to `styled.js`. Added 2 Playwright carousel tests. Deduplicated `Tile/index.js` even/odd JSX (68 lines → 38 lines). Lint, colors, circular deps, build all pass. Bundle: 184.74 KB (−1.18 KB).
> - 2026-09-02: Final audit items completed. Consolidated 4 button patterns (`ViewMyWorkButton`, `DownloadCVButton`, `ProjectLink`, `CTAButton`) into shared `common/Button` with `$variant` prop. Replaced `getComputedStyle` in Navigation with `matchMedia` for responsive icon/text switching. Added 20 new unit tests (RichText, SkillsetContainer, ComingSoonProject, CarouselSlide, Navigation compact mode); raised coverage threshold from 50% to 70%. Coverage: 89.96% stmt / 78.21% branch / 85.77% func / 91.45% lines. All CI checks pass. Bundle: 184.92 KB.
> - 2026-09-02: Image optimization completed. Deleted ~94 MB of unused images (29 files from src/images/, 16 files from public/). Converted 18 images from PNG/JPG to WebP using sharp (quality 80, resized to max display dimensions). Total image weight: ~68 MB → ~0.5 MB (99.3% reduction). Profile image: 50.7 MB → 20 KB. Added `loading="lazy"` to all below-the-fold images. Added `npm run optimize:images` script. Bundle: 184.96 KB. All CI checks pass.
> - 2026-09-02: Accessibility improvements completed. Dynamic `<html lang>` attribute via `LanguageProvider` useEffect. Arrow-key navigation for Projects carousel. `role="switch"` + `aria-checked` on DarkModeToggle. `role="button"` + `aria-pressed` + keyboard handlers on LanguageSwitch flags. `role="dialog"` + `aria-modal` + Escape-to-close on ComingSoonProject fullscreen. `aria-label` on nav, carousel region, and active dot. Fixed E2E test alt text references. All CI checks pass. Bundle: 185.32 KB.
> - 2026-09-02: E2E tests added to CI pipeline. `.github/workflows/ci.yml` now installs Playwright browsers and runs `npm run test:e2e` after build. Fixed carousel next-button E2E test to check the initially active dot (project 2) instead of inactive dot 1. All 5 E2E tests pass locally.
> - 2026-09-02: Barrel re-exports eliminated. Deleted `Home/styled.js` and `ToolsShowcase/styled.js` (both used `export * from`). Updated `Home/index.js` to import directly from `./heroStyles` and `./homeStyles`. Updated `ToolsShowcase/index.js` to import directly from `./exploreLayout` and `./showcaseLayout`. All 10 audit items now resolved. Bundle: 185.33 KB. All CI checks pass.

---

## 1. Product Classification

| Attribute         | Value                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| **Product**       | Personal portfolio website (static SPA)                                                               |
| **Deployment**    | GitHub Pages — `boostertech.github.io/Front-End-Dev-Portfolio/`                                       |
| **Team size**     | 1 developer (solo, AI-assisted)                                                                       |
| **Maturity**      | MVP (polished)                                                                                        |
| **Backend**       | None                                                                                                  |
| **Auth**          | None                                                                                                  |
| **Database**      | None                                                                                                  |
| **Core features** | Scroll navigation, 3-language i18n, dark/light theme, project carousel, tools showcase, contact tiles |

---

## 2. Architecture Summary

### Strengths

1. **Design token system** — `src/styles/tokens.js` centralizes all CSS custom properties with dark-mode mirrors.
2. **Feature-based folder structure** — `features/portfolio/{Home,About,Projects,Contact,Footer}` with co-located `styled.js`.
3. **13-step CI pipeline** — depcheck, circular deps, file size, tests, lint, format, colors, build, bundle size, lighthouse, Playwright browser install, E2E tests.
4. **Import discipline** — `jsconfig.json` baseUrl + ESLint `import/order` + `import/no-relative-parent-imports: "error"`.
5. **Architecture documentation** — `plan/architecture-playbook.md` records decisions with rationale and trade-offs.
6. **Shared `Card` primitive** — Used by About, Contact, Footer, Projects, ToolsShowcase.
7. **Playwright E2E tests** — 5 critical paths: scroll nav, language switch, dark mode toggle, carousel next-button, carousel dot-click.
8. **Shared `Button` primitive** — `common/Button` with `$variant` prop consolidates 4 CTA button patterns into 1.
9. **70% coverage threshold** — 32 tests across 10 suites; 89.96% stmt / 78.21% branch coverage.

### Weaknesses

| #   | Weakness                                            | Evidence                                                                                                               | Status                                            |
| --- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| 1   | **Dead Redux code**                                 | `src/slices/` (3 files, 71 lines) never imported.                                                                      | ✅ Fixed — deleted                                |
| 2   | **Dead styled exports**                             | `homeStyles.js` had 5 unused exports (~80 lines). `orbitDecorations.js` had 11 unused exports (~194 lines).            | ✅ Fixed — deleted                                |
| 3   | **`ProjectLink` is `styled.button` used as anchor** | `Tile/styled.js:143` — already `styled.a`, not `styled.button`.                                                        | ✅ N/A — false alarm                              |
| 4   | **Hardcoded colors bypass guard**                   | `check-hardcoded-colors.js` only scanned `styled.js` files. 15 hardcoded colors found across 8 files.                  | ✅ Fixed — script extended, all colors tokenized  |
| 5   | **`getComputedStyle` in render**                    | `Navigation/index.js:20-25` read `--breakpoint-xl2` from DOM during every render.                                      | ✅ Fixed — replaced with `matchMedia`             |
| 6   | **Inconsistent button patterns**                    | `ProjectLink`, `CTAButton`, `DownloadCVButton`, `ViewMyWorkButton` — 4 different implementations.                      | ✅ Fixed — consolidated into `common/Button`      |
| 7   | **`DarkModeToggle` inline styles**                  | 5 styled components defined inline in `index.js` (105 lines) instead of separate `styled.js`.                          | ✅ Fixed — extracted to `styled.js`               |
| 8   | **Duplicated Tile JSX**                             | `Tile/index.js` lines 39-72 and 74-107 were nearly identical even/odd layouts (68 lines duplicated).                   | ✅ Fixed — single render path                     |
| 9   | **Low test coverage**                               | Was 50% threshold, 6 test files. Now 70% threshold, 10 test files, 32 tests.                                           | ✅ Fixed — threshold raised, 20 new tests added   |
| 10  | **Barrel re-exports**                               | `Home/styled.js` does `export * from "./homeStyles"; export * from "./heroStyles"` — hides source, hurts tree-shaking. | ✅ Fixed — imports point directly to source files |

---

## 3. AI Coding Readiness Scores

| Risk                         | Score | Notes                                                                    |
| ---------------------------- | ----- | ------------------------------------------------------------------------ |
| Architectural drift          | 9/10  | Dead code eliminated, button patterns consolidated.                      |
| Code duplication             | 9/10  | Tile JSX deduplicated. No major duplication remains.                     |
| Inconsistent patterns        | 9/10  | DarkModeToggle + Button convention established. Single button primitive. |
| Cross-domain violations      | 3/10  | Feature boundaries are clear, import rules enforced.                     |
| Tight coupling               | 5/10  | `getComputedStyle` replaced with `matchMedia`. Improved.                 |
| Large unmaintainable modules | 7/10  | `homeStyles.js` reduced to 149 lines. Well under limit.                  |
| God objects                  | 2/10  | None. Components are small and focused.                                  |
| Accidental complexity        | 9/10  | All dead code removed (~345 lines).                                      |

**Overall AI-readiness: 85/100** (+20 from all cleanup)

---

## 4. Architecture Maturity Scores

| Dimension       | Score      |
| --------------- | ---------- |
| Simplicity      | 90/100     |
| Maintainability | 85/100     |
| Modularity      | 87/100     |
| Scalability     | 62/100     |
| Reliability     | 78/100     |
| AI-readiness    | 85/100     |
| Governance      | 85/100     |
| **Overall**     | **82/100** |

---

## 5. Overengineering Assessment

No enterprise patterns or excessive abstractions detected. The architecture is proportional to a personal portfolio.

**Dead code removed (not overengineering, was maintenance debt):**

| Item                                                                                                             | Lines    | Status      |
| ---------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `src/slices/` (store.js, generalSlice.js, languageSlice.js)                                                      | 71       | ✅ Deleted  |
| `src/features/portfolio/Home/ToolsShowcase/orbitDecorations.js`                                                  | 194      | ✅ Deleted  |
| Dead exports in `homeStyles.js` (TechStackSpan, HeaderImage, HeaderParagraph, TechStackContainer, TechStackItem) | ~80      | ✅ Removed  |
| **Total dead code removed**                                                                                      | **~345** | **✅ Done** |

---

## 6. Proportional Protection Analysis

### Essential now

- ESLint import/order + no-relative-parent-imports
- Circular dependency check (madge)
- File size limit (300 lines)
- Bundle size budget (350 KB/chunk, 250 KB total gzipped)
- Lighthouse CI, median of 3 runs (LCP ≤ 3.5s, CLS ≤ 0.05, TBT ≤ 2s, weight ≤ 300 KiB, perf ≥ 0.6)
- Playwright E2E (17 specs × Chromium + WebKit = 34 tests, incl. axe-core WCAG scans and a console-error watchdog, in CI)
- Prettier formatting
- PR template with quality checklist
- Architecture playbook

### Useful soon

- Hardcoded colors check (✅ extended to all `.js`/`.jsx` files with allowlist)
- Coverage threshold (✅ raised from 50% to 70%; Vitest v8 provider since the migration)
- depcheck (already in CI)
- JSDoc types (expand to all component props)

### Not needed (premature for this project)

- TypeScript migration
- Storybook
- Monorepo / Nx
- i18n library (react-i18next)
- Custom ESLint rules
- State management library (Zustand, Jotai)
- CMS integration
- ~~Vite migration~~ → later shipped (audit-remediation item 12): deferred correctly at audit time, done once react-scripts' abandonment made the dependency debt material (audit findings 38 → 12)
- SSR / SSG
- GraphQL / tRPC
- Feature flags / A-B testing

---

## 7. Action Plan — Next 30 Days

### Completed

| #     | Task                                                                                                                                                                                  | Effort    | Status                                                     |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------- |
| ✅    | **Contact section light-mode refresh** — Added theme-aware contact tokens to `tokens.js`, swapped hardcoded `rgba()` in `Contact/styled.js`, fixed GitHub accent in `contactIcons.js` | 20 min    | **Done** — lint, colors, build pass                        |
| ✅    | **Delete `src/slices/`** and remove `@reduxjs/toolkit` from devDependencies                                                                                                           | 10 min    | **Done** — 71 lines removed                                |
| ✅    | **Delete `orbitDecorations.js`** and remove 5 dead exports from `homeStyles.js`                                                                                                       | 15 min    | **Done** — ~274 lines removed                              |
| ~~3~~ | ~~**Fix `ProjectLink`**~~ — Already `styled.a`, not `styled.button`. No action needed.                                                                                                | ~~5 min~~ | ~~N/A~~                                                    |
| ✅    | **Extend `check-hardcoded-colors.js`** to scan all `.js`/`.jsx` files, not just `styled.js`                                                                                           | 30 min    | **Done** — 15 colors fixed across 8 files, allowlist added |
| ✅    | **Extract `DarkModeToggle`** styled components to `styled.js`                                                                                                                         | 20 min    | **Done** — 5 components extracted                          |
| ✅    | **Add 2 Playwright tests** for carousel navigation and dot selection                                                                                                                  | 1 hr      | **Done** — 2 E2E tests added                               |
| ✅    | **Deduplicate `Tile/index.js`** even/odd JSX into single render path                                                                                                                  | 30 min    | **Done** — 68 lines → 38 lines, CSS handles alternation    |

### Remaining — All items complete ✅

| #   | Task                                                                             | Effort  | Status                                                   |
| --- | -------------------------------------------------------------------------------- | ------- | -------------------------------------------------------- |
| ✅  | **Consolidate button patterns** into shared `common/Button` with `$variant` prop | 2-3 hrs | **Done** — 4 button patterns → 1 shared primitive        |
| ✅  | **Replace `getComputedStyle`** in Navigation with `matchMedia`                   | 30 min  | **Done** — no more DOM coupling during render            |
| ✅  | **Raise test coverage threshold** from 50% to 70%                                | 3-4 hrs | **Done** — 20 new tests, coverage: 90% stmt / 78% branch |

---

## 8. Final Verdict

**Appropriately protected — with cleanup needed.**

The CI pipeline, architecture documentation, design token system, and import discipline are above what most personal portfolios have. The governance is proportional.

All 10 identified weaknesses have been resolved. The codebase is clean, consistent, and well-tested. The architecture is proportional to a personal portfolio with no overengineering.

### Summary of all improvements

- **345 lines of dead code** removed across 3 locations
- **15 hardcoded colors** tokenized across 8 files
- **4 button patterns** consolidated into 1 shared `common/Button`
- **`getComputedStyle`** replaced with `matchMedia` in Navigation
- **20 new unit tests** added (RichText, SkillsetContainer, ComingSoonProject, CarouselSlide, Navigation)
- **2 new E2E tests** added (carousel navigation)
- **Coverage threshold** raised from 50% to 70%
- **Image optimization**: 18 images converted to WebP, ~94 MB unused images deleted (99.3% reduction)
- **Accessibility**: ARIA roles, keyboard navigation, dynamic `<html lang>` attribute
- **E2E in CI**: Playwright browsers installed and `test:e2e` runs as a blocking CI step
- **Barrel re-exports**: Eliminated `export * from` patterns; imports point directly to source files
- **Bundle size**: 185.33 KB (well under 350 KB budget)

---

## 9. Evidence Index

| Finding                      | File(s)                                                                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dead Redux code              | `src/slices/` — ✅ Deleted                                                                                                                            |
| Dead orbit decorations       | `orbitDecorations.js` — ✅ Deleted, `OrbitSectionWrapper` moved to `showcaseLayout.js`                                                                |
| Dead home style exports      | `homeStyles.js` — ✅ 5 exports removed, file now 149 lines                                                                                            |
| ProjectLink as button        | `Tile/styled.js:143` — ✅ N/A, already `styled.a`                                                                                                     |
| Hardcoded SVG colors         | `OrbitSection.js:95,115` — ✅ Replaced with `var(--color-cyan)` / `var(--color-cyan-light)`                                                           |
| Hardcoded border color       | `Projects/styled.js:68` — ✅ Replaced with `var(--color-white)`                                                                                       |
| Inconsistent button patterns | `common/Button/` — ✅ 4 patterns consolidated into 1 shared primitive                                                                                 |
| getComputedStyle in render   | `src/common/Navigation/index.js` — ✅ Replaced with `matchMedia`                                                                                      |
| DarkModeToggle inline styles | `src/common/DarkModeToggle/` — ✅ Extracted to `styled.js`                                                                                            |
| Tile JSX duplication         | `src/features/portfolio/Projects/Tile/index.js` — ✅ Deduplicated                                                                                     |
| Color guard scope            | `scripts/check-hardcoded-colors.js` — ✅ Extended to all `.js`/`.jsx` files                                                                           |
| Barrel re-exports            | `Home/styled.js`, `ToolsShowcase/styled.js` — ✅ Deleted; imports point directly to source files                                                      |
| Image optimization           | `scripts/convert-images.js` — ✅ 18 images converted to WebP, ~94 MB unused images deleted                                                            |
| Accessibility                | `LanguageProvider`, `Projects/index.js`, `DarkModeToggle`, `LanguageSwitch`, `ComingSoonProject` — ✅ ARIA roles, keyboard nav, dynamic `<html lang>` |
| E2E in CI                    | `.github/workflows/ci.yml` — ✅ Playwright browsers installed, `test:e2e` runs after build                                                            |
| CI pipeline                  | `.github/workflows/ci.yml`                                                                                                                            |
| Architecture playbook        | `plan/architecture-playbook.md`                                                                                                                       |
| PR template                  | `.github/pull_request_template.md`                                                                                                                    |
