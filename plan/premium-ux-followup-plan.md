# Premium UX Follow-Up Plan

**Date:** 2026-09-02
**Branch:** `feature/ui-refresh`
**Source:** UI polish session + proportionality audit
**Status:** P0 ✅ complete · P1 ✅ core items done (2 conditional) · P2 partially done

---

## Completed this session

- ToolsShowcase: mobile orbit → marquee rail, explore chip rail (edge fade, uniform height, icon-led), breakpoint unified at `lg`, overflow hardening (`minmax(0,1fr)` + `overflow-x: clip`), star label parity, conditional heading breaks
- About/Journey: scroll reveals, mobile editorial rows, pill/heading/paragraph metric parity with ToolsShowcase, terminal `object-position: left top` fix, `aria-hidden` on decorative terminal
- Projects: mobile CTAs removed (modal holds links), swipe → framer-motion physics drag (elastic + velocity + click suppression), arrows hidden ≤md, one-row faded badges, softer active glow
- Global: `gradientShift 15s` unified across all header accent words, button metrics unified
- Commits: `32c41f4` nav, `7844715` tools-showcase, `a7fa4dc` about, `39d0685` hero, `d9d2d38` theme, `e5aec0b` projects carousel, `16cbe37` this plan

---

## P0 — Gate integrity ✅ ALL DONE

| #   | Task                                                                                          | Status | Commit    |
| --- | --------------------------------------------------------------------------------------------- | ------ | --------- |
| 1   | Fix `Navigation.test.js` (matchMedia + duplicate-render queries → testid-scoped)              | ✅     | `dcfdeed` |
| 2   | Fix `CarouselSlide.test.js` (missing `onExpand`; now covers active→expand + inactive→onClick) | ✅     | `dcfdeed` |
| 3   | Fix `check:colors` violations in `ProjectModal.styles.js` → `rgb(var(--color-black-rgb) / …)` | ✅     | `0ee1935` |
| 4   | Delete `SkillsetContainer/` + test + orphaned `content/skillsets` + typedefs (−561 lines)     | ✅     | `a42600b` |
| 5   | Commit pending Projects changes                                                               | ✅     | `e5aec0b` |

**Result:** 9 suites / 28 tests green, `check:colors` zero violations.

## P1 — AI-readiness

| #   | Task                                                                                              | Status                                                | Commit    |
| --- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------- |
| 6   | `AGENTS.md` conventions contract                                                                  | ✅                                                    | `b629f4e` |
| 7   | Extract shared `HorizontalRail`/mask-fade pattern                                                 | ⏸️ conditional — extract only when a 4th rail appears | —         |
| 8   | Extract `SectionIntro` (label + heading + description)                                            | ⏸️ conditional — same trigger                         | —         |
| 9   | Move ToolsShowcase copy into `translations.js` (all strings incl. aria-labels, EN/PL/ES)          | ✅                                                    | `3e00775` |
| 10  | Light-theme terminal tokens; delete `code_terminal_light_theme.webp` + `object-position` band-aid | ✅                                                    | `9379703` |

## P2 — Hygiene

| #   | Task                                                                                                                                                                 | Status                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 11  | `console.log` in `src/index.js`                                                                                                                                      | ✅ resolved — was only a CRA boilerplate comment, no actual logging |
| 12  | Consolidate `plan/` — 5 superseded docs moved to `plan/archive/`                                                                                                     | ✅ `1223a4e`                                                        |
| 13  | Co-locate single-consumer `common/` components — GradientHeading→About; RichText kept (2nd consumer restored via styled(RichText)); StarField/Main stay as app-shell | ✅ `2e1f0bd`, `405af3f`                                             |
| 14  | Verify `Tile/` vs `CarouselSlide/` coexistence — Tile was dead, deleted                                                                                              | ✅ `ab669d1`                                                        |
| 15  | CLS audit: intrinsic `width`/`height` on all lazy imgs; deleted dead `ComingSoonProject/` + `StyledComponentsIcon.js` (its light-theme svg 404'd)                    | ✅ pending commit                                                   |

## Explicitly deferred (premature)

- TypeScript migration, ESLint boundary plugins, visual regression, husky pre-commit, ADR ceremony, state library
- Lighthouse + Playwright E2E stay as-is — heavy but already built and green

## Verification loop (every change)

```
npx eslint <files> && npx prettier --write <files>
node scripts/check-hardcoded-colors.js
CI=true npx react-scripts test --watchAll=false
```

Visual check at ~375px and desktop after UI changes.
