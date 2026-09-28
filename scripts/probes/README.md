# scripts/probes — measurement probes

One-off diagnostic scripts kept as reusable tooling. Not part of any gate;
run them manually against a live server when investigating a regression.
All are CommonJS — run with plain `node scripts/probes/<name>.js [url]`.

| Script                         | Measures                                                                                                                                                                                         | Needs                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `axe-contrast.js`              | axe WCAG scan against a running server with dark theme forced via `localStorage` — used to pinpoint the dark-mode contrast violators (CS→P3 remediation)                                         | server on :3100 (`node scripts/serve-e2e.js` after a build), `@playwright/test` + `@axe-core/playwright` |
| `starfield-idle-cost.js [url]` | A/B CDP trace: renderer cost of the 60-star twinkle — RUNNING → FROZEN → RUNNING under 4× CPU throttle; establishes whether idle animation pausing is worth it (verdict: no — below noise floor) | server on :3100 or URL arg; `@playwright/test`                                                           |
| `layout-trace.js [url]`        | devtools.timeline trace with stack attribution — attributes forced-layout/`UpdateLayoutTree` cost to JS call sites                                                                               | server on :3100 or URL arg; `@playwright/test`                                                           |
| `mp4-atoms.js`                 | parses the talking-portrait MP4 box tree — codec (avc1/mp4a), moov/mdat ordering (faststart check), sizes                                                                                        | none — reads `public/talking-portrait/*.mp4` directly                                                    |

These encode measurement _methodology_ (how we proved things), not CI
contracts — if they rot, update or delete; they aren't authoritative.
