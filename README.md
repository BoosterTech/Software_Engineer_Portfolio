# Derek.dev - Portfolio Website 🌐

Welcome to my portfolio website! I'm **Dariusz Podczasik**, a passionate **Software Engineer** specializing in **React** and **Next.js**. Based in Trim, Ireland, I build dynamic, responsive, and user-friendly web applications with a focus on great UX/UI design.

---

## 🚀 Live Website

Check out my portfolio: [Derek.dev](https://boostertech.github.io/Software_Engineer_Portfolio/)

---

## 🌟 Features

- **Multi-language Support**: Available in English, Polish, and Spanish.
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile).
- **Interactive UI**: Smooth animations and transitions for a great user experience.
- **Project Showcase**: Highlighting my best work with detailed descriptions and links.
- **Accessibility**: ARIA roles/labels on interactive elements, keyboard navigation (arrow keys for carousel, Enter/Space for toggles, Escape for fullscreen modal and mobile menu), dynamic `<html lang>` attribute.
- **Image Optimization**: WebP format with lazy loading for fast page loads.
- **Native Sharing**: Web Share API with clipboard fallback; the branded social preview attaches to the share payload on mobile.

---

## 🛠️ Technologies Used

- **Front-End**: React 18, React DOM
- **Tooling**: Vite 8 (rolldown), Vitest
- **State Management**: React Context (`LanguageProvider`, `ThemeModeProvider`)
- **Styling**: styled-components, CSS custom properties, CSS Grid, CSS Flexbox, keyframe animations
- **Navigation**: react-scroll
- **Icons**: react-icons
- **Animations**: framer-motion
- **Deployment**: gh-pages
- **Image Optimization**: WebP assets, `loading="lazy"` on below-the-fold images
- **E2E Testing**: Playwright (17 tests: scroll nav, language switch, dark mode, carousel arrows/dots, modal focus trap + arrow nav, mobile menu open/close + Escape dismiss, backdrop dismiss, mobile share row, plus axe-core WCAG scans of key states in both themes)
- **Quality & CI**: ESLint, Prettier, Vitest, Playwright, GitHub Actions
- **Build-time Guardrails**: `size-check`, `format:check`, `lint`, `bundle:check`, `test:coverage`, `lighthouse:check`, `check:colors`, `check:circular`, `test:e2e`

---

## 🏗️ Architecture & Maintenance

- Decisions are recorded in `plan/architecture-playbook.md`.
- Active work is tracked in `plan/audit-remediation-plan.md` (completed plans live in `plan/` and `plan/archive/`); contributor/agent conventions live in `AGENTS.md`.
- Recent boundary cleanup: `StarField` and `Main` are now standalone `src/common/` components, `src/themes.js` contains only breakpoints, and components read localized copy through `src/common/useContent.js`.
- **State management**: language and theme mode (`isDark`) are handled by `LanguageProvider` and `ThemeModeProvider` in `src/common/`; `@reduxjs/toolkit` and `react-redux` were removed.
- Shared primitives: `src/common/Card` provides `$glass`, `$bordered`, and `$hoverable` variants, used by `About` feature cards, `Contact` tiles, and `ToolsShowcase` feature cards; `src/common/Button` (`$variant`, `$size`) covers the Home CTAs and `Projects` actions.
- Content: all UI copy lives in `src/content/translations/` (English/Polish/Spanish parity enforced by `translations.test.js`), including `home.toolsShowcase` for the technology section; `projects.js` remains a single module under the size-check exclusion.
- Color-token guard: `npm run check:colors` runs in CI and fails the build if any hardcoded colors are found in any `src/**/*.js` or `src/**/*.jsx` file (with an allowlist for `tokens.js`, `contactIcons.js`, and `animations.js`).
- Circular-dependency guard: `npm run check:circular` (via `madge`) runs in CI and fails the build if any import cycles are introduced.
- Bundle-impact gate: PR template requires `npm run build && npm run bundle:check` and confirmation that the total gzipped bundle stays under the 250 KB budget.
- Fixed section slugs: `home`, `about`, `projects`, `contact` are used for `react-scroll` anchors in all languages.
- Quality gates: `npm run test:coverage` enforces the 70% Vitest coverage thresholds in CI (80 tests across 13 suites), `npm run test:e2e` runs 17 Playwright E2E tests against the production `build/` served on port 3100 by `scripts/serve-e2e.js` (requires `npm run build` first), and `npm run lighthouse:check` audits the production build against the budgets in `.lighthouserc.js` — median of 3 runs, asserting LCP ≤ 4s, CLS ≤ 0.1, TBT ≤ 2.6s, total byte weight ≤ 400 KiB, and performance score ≥ 0.5.
- Performance: Framer Motion loads via `LazyMotion` with an async `domMax` feature bundle (use `m.*`, never `motion.*`); the hero portrait is media-scoped preloaded in `index.html`; the talking-portrait video stays at `preload="metadata"` so its ~1.2 MB MP4 only downloads on tap; all raster assets are WebP sized ~2x their max render size; sourcemaps are stripped at deploy time by `scripts/remove-maps.js`. (`content-visibility` on section roots was removed — it caused verified first-click anchor drift.) See `plan/performance-optimization-plan.md`.

---

## 🚀 Projects Showcase

### � WTM AI Music Generation Website

- **Description**: Production-grade SaaS platform for generating and managing AI-generated music.
- **Tech Stack**: Next.js 16, React 19, TypeScript.
- **Status**: Private SaaS — repository and deployment are not public.

### 🏡 The Paradise Lodge

- **Description**: Luxury cabin booking website.
- **Tech Stack**: Next.js, React, JavaScript, Supabase, NextAuth, Tailwind CSS.
- **Live Demo**: [The Paradise Lodge](https://paradise-lodge-web.vercel.app)
- **GitHub Repo**: [ParadiseLodge-website](https://github.com/BoosterTech/ParadiseLodge-website)

### �🎥 Movies Browser

- **Description**: A movie search app with detailed information on movies, cast, and crew.
- **Tech Stack**: React, Redux, React Router, Axios, Styled-Components.
- **Live Demo**: [Movies Browser](https://boostertech.github.io/MovieBrowser/#/movies)
- **GitHub Repo**: [MovieBrowser](https://github.com/BoosterTech/MovieBrowser)

### 📝 Tasks List

- **Description**: A task management tool for adding, tracking, and managing tasks.
- **Tech Stack**: React, Redux Toolkit, Redux-Saga, React Router, Styled-Components.
- **Live Demo**: [Tasks List](https://boostertech.github.io/To-Do-List-Redux-Saga-Module-14/#/todo-list-module-14/tasks)
- **GitHub Repo**: [To-Do-List-Redux-Saga](https://github.com/BoosterTech/To-Do-List-Redux-Saga-Module-14)

### 💱 Currency Converter

- **Description**: A real-time currency converter using data from the European Central Bank.
- **Tech Stack**: React, Axios, Styled-Components.
- **Live Demo**: [Currency Converter](https://boostertech.github.io/Currency-Converter-Fetch-Module-12/)
- **GitHub Repo**: [Currency-Converter-Fetch](https://github.com/BoosterTech/Currency-Converter-Fetch-Module-12)

### ❓ React Quiz App

- **Description**: A quiz app with 30 React-related questions.
- **Tech Stack**: React, useReducer, Styled-Components.
- **Live Demo**: [React Quiz App](https://boostertech.github.io/react-quiz/)
- **GitHub Repo**: [react-quiz](https://github.com/BoosterTech/react-quiz)

### ⚛️ Plasma Library

- **Description**: My very first web development project.
- **Tech Stack**: HTML, CSS, JavaScript.
- **Live Demo**: [Plasma Library](https://boostertech.github.io/Plasma-Library/)
- **GitHub Repo**: [Plasma-Library](https://github.com/BoosterTech/Plasma-Library)

### 🍴 Eat-n-split

- **Description**: Split bills among friends — enter the total, pick the party size, done.
- **Tech Stack**: React, Styled-Components.
- **Live Demo**: [Eat-n-split](https://boostertech.github.io/eat-n-split/)
- **GitHub Repo**: [eat-n-split](https://github.com/BoosterTech/eat-n-split)

### 🍕 Fast React Pizza Co.

- **Description**: A pizza ordering app with a smooth and intuitive interface.
- **Tech Stack**: React, Redux Toolkit, React Router, Tailwind CSS.
- **Live Demo**: [Fast React Pizza Co.](https://boostertech.github.io/Fast-Pizza-Co/)
- **GitHub Repo**: [Fast-Pizza-Co](https://github.com/BoosterTech/Fast-Pizza-Co)

---

## 🌱 Currently Exploring

- **Artificial Intelligence**: Building AI-powered features.
- **Stripe**: Payment infrastructure.
- **AI-Directed Engineering**: AI-assisted development.
- **Framer Motion**: Production-ready animations.
- **SaaS Architecture**: Scalable SaaS patterns.

---

## 📫 How to Reach Me

- **Email**: boostertech@mail.com
- **LinkedIn**: [Dariusz Podczasik](http://www.linkedin.com/in/Dariusz-Podczasik)
- **WhatsApp**: [Contact Me](https://wa.me/353862013944)

---

## 🎉 Fun Facts About Me

- ✈️ Licensed private pilot.
- 🚛 Licensed professional truck driver.
- 🏋️‍♂️ Fitness enthusiast with a passion for strength training.
- ⚛️ Fascinated by the science of plasma.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Thank you for visiting my portfolio! Let’s collaborate to bring visions to life. 🚀
