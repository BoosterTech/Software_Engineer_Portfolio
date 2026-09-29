# Premium Product Experience Audit — Remediation Plan

Source: full read-only product-experience audit performed on branch
`audit/premium-product-experience` (evidence: browser captures, source
inspection, network/console traces — zero repo changes made during the audit).

Legend: Severity — CRITICAL/HIGH/MEDIUM/LOW · Confidence — HIGH/MEDIUM/LOW ·
Effort — LOW/MEDIUM/HIGH. Items marked UNVERIFIED need confirmation before work.

Status (2026-09-29): **F7 shipped, then removed** — the `SourceChip` footer
link was shipped and later reverted at the owner's request (component, styles,
and `footer.viewSourceLabel` ×3 deleted). **F1 shipped** —
touch devices get the PDF directly (`userAgentData?.mobile ?? (pointer:
coarse)`), and `public/cv.html` has a branded fallback (name, role, PDF CTA,
back link). **F3a shipped** — talking-portrait captions via a hidden WebVTT
track driving a custom speech-bubble element (`cuechange` → styled caption,
`aria-live="polite"`; final cue lingers ~3.5 s post-`ended` as a scroll
nudge).
**F2, F4, F5, F6 declined by owner — intentional, no change.**
**F9 shipped (found during F3a implementation):** 12 sites used
`rgb(var(--x-rgb) / a)` — invalid with comma-separated tokens, so browsers
silently dropped the declarations (modal backdrop, play-button bg, badge,
carousel-slide surfaces were transparent). All rewritten to
`rgba(var(--x-rgb), a)`; `check:colors` now rejects the slash form, and
AGENTS.md documents the correct pattern.

## Verified findings

### F1 — Mobile CV dead-end — HIGH / HIGH conf / LOW effort — DONE

- `public/cv.html` embeds the PDF via `<object>`; mobile browsers don't render
  it, so the user lands on a bare white page with one "Open CV (PDF)" link.
- This is the primary recruiter conversion path on phones — highest-leverage fix.
- Fix: style the fallback (branded page + direct PDF link + back link), or point
  the hero "View CV" CTA straight at the PDF on `(pointer: coarse)` — same
  mobile-detection pattern `useShareAction` already uses.

### F2 — `ȷ` Unicode typo in Projects headings — MEDIUM / HIGH conf / LOW effort — DECLINED (intentional)

- `en.js:106` `"Proȷects"` and `pl.js:114` `"Proȷekty"` contain U+0237 (dotless
  j). Invisible to the eye, wrong to screen readers, copy-paste, and search.
- Fix: replace with ASCII `j` (2 characters, 2 files).

### F3 — Talking portrait: EN-only, dark-only — MEDIUM / HIGH conf — PARTIAL (captions shipped)

- Single hardcoded `profile-dark-en.mp4`; the dark-backdrop video cuts over the
  light-theme poster. Locale variants still open (only if new footage is
  realistic).
- Captions shipped: `profile-dark-en.vtt` (transcribed from the clip) wired
  as a `mode: "hidden"` track — in-video cue rendering was rejected because
  the circular crop clips it. `cuechange` feeds a styled `PortraitCaption`
  speech bubble below the circle (glass surface, tail pointing into the
  portrait glow, `aria-live="polite"`). The last cue is padded to 15.5 s to
  cover the speech-end→`ended` gap and lingers ~3.5 s after the video ends
  as a scroll nudge. Track label localized via `home.captionsLabel` ×3.

### F4 — No skip-navigation link — LOW-MED / HIGH conf / LOW effort — DECLINED (intentional)

- ~7+ tab stops before content on every load; WCAG 2.4.1.
- Fix: visually-hidden skip link to the main landmark.

### F5 — Horizontal overflow at 320 px — MEDIUM / HIGH conf / LOW effort — DECLINED (intentional)

- `scrollWidth > 320` verified; the hero tech-stack pill clips/overflows.
- Likely the same root cause as the 200%-zoom overflow (see UNVERIFIED below).
- Fix: let the pill wrap/shrink below ~400 px.

### F6 — Three-way brand split — LOW-MED / MEDIUM conf / LOW effort — DECLINED (intentional)

- Nav brand `Derek.dev` vs hero `Dariusz Podczasik` vs `boostertech`
  mailto/GitHub — no bridging copy.
- Fix: one line, e.g. "Dariusz 'Derek' Podczasik" (hero or footer).

### F7 — No link to this site's own repository — LOW / MEDIUM conf / LOW effort — ~~DONE~~ REMOVED

- A technical reviewer's natural instinct ("how is this built?") has no outlet.
- Fix: footer "View source" GitHub link.
- Shipped, then **removed at owner request (2026-09-29)** — `SourceChip`,
  its styles, and `footer.viewSourceLabel` were deleted from all three
  locales. Intentional absence, not a regression.

### F8 — Projects have no outcome/result lines — MEDIUM / MEDIUM conf / MEDIUM effort

- Modals answer WHAT/WHY/HOW/COMPLEXITY; RESULT is missing (metrics, shipped
  status, production usage).
- Fix: one "Result" bullet per flagship project (content work, ×3 languages).

## UNVERIFIED — confirm before fixing

- **200 % zoom reflow:** CSS-zoom emulation showed horizontal scroll (~640 CSS px
  effective). `zoom` on `body` is not identical to native browser zoom — retest
  with real Ctrl+'+' before treating as a WCAG 1.4.10 violation.
- **`boostertech@mail.com`:** unusual domain — confirm intentional.
- **LCP double-fetch:** `light_theme_profile.webp` fetched twice under the e2e
  server (prefix-stripped URLs diverge). By design identical on the real
  `/Software_Engineer_Portfolio/` path — verify live before touching.

## Cosmetic / lower-priority

- Carousel arrow buttons overlap the active slide artwork at desktop width (LOW).
- Pagination dots appear detached mid-scroll between sections (LOW).
- Playing video has no visible "click to stop" affordance (LOW).
- Welcome pill "WELCOME TO MY PORTFOLIO" is the weakest line on the page —
  replace with name/differentiator (LOW).
- No footer re-CTA: after scrolling all sections the user must scroll back up to
  reach contact (MEDIUM opportunity, LOW effort).

## Deferred / parked

- **JS bundle split** (522 KB / 173 KB gzip single chunk): real ceiling on
  low-end mobile, but felt performance is already acceptable (LCP ~2.8 s, CLS 0).
  Revisit only if perf regresses or a natural split point appears.
- Seniority signal in hero (years/shipped products): content decision — helps
  the 30-second recruiter answer "junior or senior?"

## Do not add

Command palette, scroll-progress bar, page transitions, custom cursors,
magnetic buttons, 3D hero, blog, testimonials, skill bars, chat widgets,
routers/sub-pages — none answer an observed visitor question; all push toward
the over-engineered/generic failure mode (and routers/sub-pages violate the
proportionality contract in AGENTS.md).

## Execution order

1. ~~F2, F4, F5, F6, F7 quick batch~~ — F7 shipped; F2/F4/F5/F6 declined as
   intentional by the owner.
2. ~~F1 mobile CV fallback~~ — shipped.
3. ~~F3a video captions~~ — shipped (hidden `.vtt` track + `cuechange` →
   custom `PortraitCaption` speech bubble).
4. F8 outcome lines + welcome pill rewrite — content pass (all 3 languages).
5. Verify UNVERIFIED items; then re-run full gate suite + Lighthouse.
