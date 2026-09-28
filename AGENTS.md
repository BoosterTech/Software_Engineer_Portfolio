# AGENTS.md

Conventions contract for AI agents and contributors working in this repository.
Read this before generating code.

## What this is

Personal portfolio SPA ("Derek.dev") — React 18, Vite 8 (rolldown) + Vitest,
styled-components, Framer Motion. Static site deployed to GitHub Pages. No
backend, no API layer, no auth, no database, no state library. Keep it that way.

## Structure

- `src/features/portfolio/<Section>/` — feature folders (Home, About, Projects, Contact)
- `src/common/` — shared primitives only (Button, Card, Navigation, RichText, …).
  Do not add a common/ component for a single consumer; app-shell components
  (`StarField`, `Main`) are the exception — they serve `App.js`.
- `src/content/` — all user-facing copy (`translations/` per language, `projects.js`)
- Styles live in a co-located `styled.js` (or `<Name>.styles.js`) per component folder
- `plan/` — architecture and roadmap docs; `architecture-playbook.md` is the source of truth,
  `post-migration-audit-remediation.md` is the latest remediation record
  (all items shipped), `plan/archive/` holds superseded plans
- `scripts/` — production tooling (`serve-e2e.js`, checks, `remove-maps.js`);
  `scripts/probes/` holds reusable one-off diagnostic probes — see its README
  before running (needs a built site/server)

## Hard rules (CI-enforced)

1. **No hardcoded colors in `src/` JS.** No hex, `rgb()/rgba()` with literals, or bare
   `white`/`black`. Use `var(--color-*)`; for alpha use `rgb(var(--color-*-rgb) / <a>)`.
   Allowlist: `styles/tokens.js`, `contactIcons.js`, `common/animations.js`.
   Verified by `npm run check:colors`.
2. **300-line cap per source file.** `projects.js` is exempt (data). `npm run size-check`.
3. **No circular imports.** `npm run check:circular`.
4. **Import order + absolute imports.** `baseUrl: src`; never `../` parent imports.
5. **Tests must stay green.** `npm run test:coverage` — 70% floor on
   branches/functions/lines/statements, enforced in CI (`ci.yml`).

## Styling conventions

- styled-components v6: transient props always (`$active`, not `active`)
- Theme values via CSS custom properties from `src/styles/tokens.js`; never hardcode
  spacing, radius, z-index, or breakpoints
- Breakpoints from `src/themes.js`: `lg` (768px) is THE mobile/desktop boundary for
  section layouts; `xl2` (1100px) is the nav compact boundary. Don't invent others.
- Media queries go at the end of a styled block, mobile-first ordering
- Accent text uses the shared animated gradient: `${gradientDrift}` mixin
  (`common/animations.js`) + `background-size: 200% 200%` — it crossfades a
  `::before` clone (`data-text` attr required on the element, non-static
  position, opacity-only = composited). Do not animate `background-position`
  on gradient text — it repaints every frame. See `About/styled.js`
  `GradientHeadingPart`. `background-clip: text` only paints inside the
  element's box: accent spans with descenders (g/j/y/ę) need
  `padding-block-end` + equal negative `margin-block-end` so the descender
  isn't cropped without shifting layout (see `heroStyles.js` `GradientText`)
- Horizontal overflow rails use the mask-fade pattern (`overflow-x: auto` +
  `mask-image: linear-gradient(...)` edge fades) — copy an existing rail (marquee,
  explore track, badge row) rather than inventing a fourth variant
- Respect `prefers-reduced-motion` for animation
- Framer Motion: app is wrapped in `LazyMotion` with the static `domMax`
  feature set and `strict` (`src/index.js`) — `strict` makes using `motion.*`
  a dev-time error, so `m.*` is enforced, not just convention. Don't add an
  async `features()` thunk: framer-motion is statically imported app-wide,
  so it can't split out of the main chunk. Drag/layout/in-view features are
  all covered by `domMax`; don't switch to `domAnimation` (carousel needs
  `drag`)
- No `content-visibility: auto` on section roots — it caused verified anchor drift:
  react-scroll measured `getBoundingClientRect()` while below-fold sections were
  still intrinsic-size placeholders, so the first nav click after reload landed
  ~175–400px off (reproduced on the prod build). Removed 2026-01; do not re-add
  without measuring first-click anchor accuracy
- Raster images: WebP only, sized ~2x their max render dimensions; keep
  `width`/`height` attrs in sync with intrinsic dims (CLS guard)
- LCP-critical images are preloaded by the inline theme-bootstrap script in
  the root `index.html` — media-scoped `<link rel="preload">`s can't see
  `localStorage.theme`, so the script injects the `<link>` for whichever
  portrait the resolved theme will render (prevents unused-preload fetches
  when the saved theme differs from `prefers-color-scheme`). The preload
  `href` (`./`-relative in the bootstrap) and the `<img>` `src`
  (`import.meta.env.BASE_URL`-based) must resolve to the identical URL or
  the browser fetches twice
- No webfonts via CSS `@import` inside `createGlobalStyle` — styled-components
  can't hoist it and browsers ignore it. (Measured: a real Inter `<link>` cost
  ~1s LCP under throttle → rejected; system stack is intentional)
- No `web-vitals`/RUM wiring — the dep was removed; don't re-add without a sink
- Lazy-loaded images must declare intrinsic `width`/`height` attributes (CLS audit).
  Dims live in the data layer: `iconWidth`/`iconHeight` fields on icon objects,
  shared `PROJECT_IMAGE_WIDTH`/`PROJECT_IMAGE_HEIGHT` in `content/projects.js`
  (all project screenshots are uniform 1200×675)
- No `scroll-behavior: smooth` on `html`/`body` — react-scroll owns all animated
  scrolling; the CSS rule double-animates its per-frame `scrollTo` calls and makes
  native `href` fallback clicks drift. Sole exception: `App.js` calls
  `scrollIntoView()` once on mount to honor a URL `#hash` present at load time
  (the browser's own fragment scroll runs before React renders); it's instant,
  not animated, and `scroll-padding-top` on `html` supplies the navbar offset.
- Never put interactive elements (links, buttons) inside a `role="button"`/`tabIndex`
  container — axe `nested-interactive`. Use a real `<button>` for the inner action
  (see `CarouselSlide`'s `ExpandButton`).
- Small icon buttons needing a ≥24px hit area: keep the visual size, expand the box
  with `padding` + `background-clip: content-box` (see `NavDot` in Projects/styled.js).
- Text on `--color-primary` backgrounds uses `--color-on-primary` (white in
  light, deep navy in dark — the dark primary is too bright for white text,
  WCAG 3.48 < 4.5). `body` carries `background-color: var(--color-background)`
  as an opaque fallback under the `body::before` wallpaper image — needed for
  correct contrast math while the image loads, and for axe to resolve it.
- Nav height vocabulary is fixed: `--nav-height` (64px desktop) and
  `--nav-height-mobile` (80px) are the only static tokens; `--nav-height-actual`
  is the ResizeObserver-measured runtime override, always consumed as
  `var(--nav-height-actual, var(--nav-height[-mobile]))`. Do not reintroduce
  a third static name (`--navbar-height` was removed for exactly this)
- Theme mode (`isDark`) is shared state: `ThemeModeProvider`/`useThemeMode` in
  `src/common/ThemeModeProvider`. The provider owns `data-theme` on `<html>` and
  `localStorage.theme` — components must never read or write the DOM attr
  directly (the old `MutationObserver` in Home was removed for exactly this).
  The root `index.html` carries an inline bootstrap that applies `data-theme`
  before first paint — keep it in sync with the provider's init logic.

## Navigation

- react-scroll `Link`s must always carry `href="#<slug>"` — without it they render
  `<a>` with no href: unfocusable by keyboard, invisible as links to screen
  readers and crawlers. `handleClick` calls `preventDefault`, so the hash never
  jumps natively; smooth scroll still applies.
- Sharing: `common/ShareButton` (desktop toolbar icon) and
  `ShareButton/ShareMenuItem` (labeled row in the mobile menu) both use
  `useShareAction`. The `social_preview.jpg` file attachment is **mobile-only**
  (`navigator.userAgentData?.mobile` → `(pointer: coarse)` fallback) — verified:
  on Windows the OS share dialog's Copy grabs the attached file instead of the
  URL, so pasting yields nothing. Desktop must stay URL-only.

## i18n

- Every UI string goes through `content/translations/` — English, Polish, Spanish
  required for every key (`translations.test.js` enforces parity). This includes
  headings, aria-labels, and alt text — nothing user-facing is hardcoded
- Scroll targets always use `menuItems` `slug`, never the translated `name`
  (names differ per language; slugs are fixed)
- Components read copy via `useContent()`; no hardcoded user-facing text
- Gradient-accented headings use explicit `*Plain`/`*Accent` key pairs
  (`contentHeaderPlain`/`contentHeaderAccent`, `journeyHeaderPlain`/
  `journeyHeaderAccent`, `titlePlain`/`titleAccent`, `headerPlain`/
  `headerAccent`) — copy owns which words get the gradient. Never derive the
  accent by word position (`split(" ")` / `slice(n)`); positions break silently
  when a translation is reworded
- `language` persists to `localStorage.language` (validated against `LANG_MAP`);
  tests rely on `localStorage.clear()` in `setupTests.js` `beforeEach`

## Testing

- Vitest + React Testing Library + `renderWithProviders` from `src/test-utils.js`
  (options: `initialLanguage`, `initialIsDark`). `globals: true` is on — `describe`/
  `it`/`expect` are ambient; use `vi.*` for mocks/spies (never `jest.*`)
- `setupTests.js` mocks `matchMedia` (default `matches: false`), `IntersectionObserver`,
  `ResizeObserver` — override per-test via `Object.defineProperty(window, "matchMedia", …)`
- `testing-library/no-node-access` is enforced: no `.closest()`, `.parentElement`,
  `querySelector`. Scope duplicate markup with `data-testid` (see `Navigation/index.js`
  `desktop-menu`/`mobile-menu`/`nav-link-*`, `ProjectModal`'s `project-modal-backdrop`)
- Remember: components may render both desktop and mobile structures; scope queries
- jsdom has no layout scrolling: stub `window.scrollTo` and
  `HTMLElement.prototype.scrollTo` in `beforeEach` when testing scroll-lock code
  (see `ProjectModal.test.js`). `useWindowWidth` listens on rAF-throttled `resize` —
  drive it with `Object.defineProperty(window, "innerWidth", …)` + `waitFor`
- E2E: `npm run test:e2e` needs `npm run build` first. Playwright's `webServer`
  runs `scripts/serve-e2e.js` on port 3100 (dedicated — 3000 is the dev
  server); it serves `build/` and strips the `/Software_Engineer_Portfolio`
  prefix. The `index.html` fallback applies only to extensionless SPA routes —
  paths with a file extension get a real 404, so missing assets fail tests
  instead of silently serving HTML. Do not substitute `serve -s build` — it
  has no prefix rewrite, so asset requests fall back to `index.html` and the
  app never mounts
- `npm start` binds localhost only (`server.host` in vite.config.mjs). Phone
  previews go through ngrok (`ngrok http 3000`) — `allowedHosts` covers
  `*.ngrok-free.dev`. Keep the server localhost-bound; don't use `--host`
- E2E waits must be condition-based — `expect.poll`, `toHaveAttribute`,
  `toBeFocused`. Never `waitForTimeout` sleeps, and never assert on
  `getComputedStyle` — assert user-facing state (`aria-current` on `NavDot`,
  `aria-expanded`, focus)
- E2E specs import `test`/`expect` from `e2e/fixtures.js`, never
  `@playwright/test` directly — the fixture attaches a watchdog that fails
  any test producing `console.error` or `pageerror` output (the app must be
  silent; allowlist only proven third-party noise)
- E2E runs on both `chromium` and `webkit` — engine differences are real
  (WebKit caught a live bug: it never focuses `<button>` on click, so
  `document.activeElement` at modal-open is `body`). For modal/dialog focus
  restore, thread the trigger element explicitly (`returnFocusRef` in
  `Projects/index.js` → `ProjectModal`); never rely on `document.activeElement`
- `e2e/accessibility.spec.js` runs `@axe-core/playwright` scans (wcag2a/2aa/
  21a/21aa) on key app states — new violations fail the suite. Before
  `analyze()`, wait for finite animations to finish: axe samples rendered
  pixels and mid-fade opacity produces flaky contrast reads. Scan dark theme
  via `addInitScript(localStorage.theme = "dark")`, not the toggle — the
  bootstrap applies it pre-paint with zero transition

## Verify before committing

```
npm run test:coverage  # all green + 70% floors (vitest run --coverage)
npm run lint
npm run format:check
npm run check:colors
npm run check:circular
npm run size-check
npm run build       # before shipping UI changes
npm run test:e2e    # needs the build above; serves it via scripts/serve-e2e.js
npm run lighthouse:check  # perf gate: median-of-3 runs; LCP/CLS/TBT/byte-weight/perf-score assertions in .lighthouserc.js
```

Note: `.gitattributes` pins `* text=auto eol=lf` — always write files with
LF endings, even on Windows (`core.autocrlf` would otherwise hand you CRLF
on checkout and Prettier flags it). If `format:check` flags files you
barely touched, it's stale CRLF on disk — re-checkout or `prettier --write`.

## Dependency installs

- `typescript@5.9.3` is a pinned devDep — keep it root-hoisted: madge's
  `detective-typescript` `require()`s it. (The old `.npmrc` `legacy-peer-deps`
  workaround died with react-scripts; installs resolve strictly now.)
- Quality-gate tools are pinned devDeps (`prettier`, `@lhci/cli`);
  `depcheck` stays CI-only via `npx --yes depcheck@<pinned>` in `ci.yml`.
- Never run `npm audit fix --force` — the remaining advisories are dev-only
  transitives of `@lhci/cli` (already latest); force downgrades it to 0.1.0
  and the install dies on a missing `master` git ref anyway

## Commits

- Conventional Commits, atomic scope (`feat(nav):`, `test:`, `chore:`, `style(theme):`)
- Never commit build output, `.env*`, or editor files

## Do NOT add

- TypeScript migration, state libraries, backend/API layers, routers, monorepo tooling,
  pre-commit hooks, visual regression infra, ESLint boundary plugins — all premature
  for a 6.9K-line static portfolio. See `plan/architecture-proportionality-audit.md`.
