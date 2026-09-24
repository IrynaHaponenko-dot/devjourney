# PROGRESS

## Project

DevJourney

## Current Status

**Phase 07 — Development / Codex Workflow**

**Step 18 — Accessibility & Technical QA:** APPROVED.

**Step 19 — First Production Content Reference:** APPROVED (2026-09-24);
human review PASSED; required checks PASSED; final acceptance APPROVED.
The first production article, including the human-review corrections, is accepted
as the current content-quality reference for DevJourney.
**Step 20 — Portfolio Readiness Audit:** audit COMPLETE (2026-09-24);
Portfolio Readiness Report produced; no implementation performed; human review APPROVED (2026-09-24).
**Step 21 — Home Production Content:** APPROVED (2026-09-24);
human review PASSED; implementation COMPLETE; checks PASSED.
**Step 22 — Workflow Production Content:** APPROVED (2026-09-24);
human review PASSED; implementation COMPLETE; required and browser checks PASSED.
**Step 23 — Toolkit Production Content + Official Tool Visuals:** APPROVED
(2026-09-24); human review PASSED; required and browser checks PASSED.
Four official visuals installed; ChatGPT/Codex use the authorized neutral fallback
with official visual asset polish in PARKING, not a Portfolio v1 blocker.
**Step 24 — Articles Portfolio v1 Cleanup:** APPROVED (2026-09-24);
human review PASSED; required and browser checks PASSED.
**Production content phase:** COMPLETE and accepted for Portfolio v1.
Portfolio v1 currently ships with one approved production article.
**Step 25 — README + Repository Readiness:** APPROVED (2026-09-24);
human review PASSED; checks PASSED.
**Step 26 — Git Baseline + GitHub Handoff:** COMPLETE (2026-09-24);
pre-commit checks and baseline push verification PASSED; human review PENDING.
Public repository: https://github.com/IrynaHaponenko-dot/devjourney.
**Deployment:** NOT STARTED.

## Approved Portfolio v1 Scope (Step 21)

Public scope: **Home + Workflow + Toolkit + Articles**.
Toolkit is retained as a core Portfolio v1 section. **AI Updates: PARKING**;
its implementation/data remain, with public Home promotion and shell navigation removed.

Simplified completion mode reduces scope, feature count and content volume, **not
visual quality**. Images, backgrounds, decorative layers, image slots and
prototype-like visual richness remain **MUST HAVE**. Preserve the approved visual
direction, composition, spacing and responsive behavior. Replace demo visuals in
their later content steps with appropriate production visuals; do not remove their
slots or generate new imagery without authorization.

## Product Direction — Future Planning (2026-09-24)

DevJourney is currently being developed as a **Practice / Prove** project for a
controlled AI-assisted web-development workflow.

Current working product hypothesis: **Learn → Practice → Prove → Client**.

The immediate goal is not to build a course or redesign the site around this
hypothesis. First complete the current site as a high-quality portfolio/reference
project. Evaluate future content and product changes against this direction before
implementation. This note does not authorize new content, redesign, or Step 20.

---

# Workflow

## 01 — Discovery

Status: COMPLETE

Approved:

- product concept;
- target audience;
- product promise;
- MVP scope;
- primary sections;
- content direction;
- exclusions.

---

## 02 — References

Status: COMPLETE

Approved:

- reference analysis;
- hybrid visual direction;
- technical/editorial visual character.

---

## 03 — Visual Specification

Status: COMPLETE

Approved:

- visual language;
- color direction;
- typography direction;
- layout principles;
- image/asset principles;
- responsive direction.

---

## 04 — Visual Prototype

Status: COMPLETE

Approved representative screens:

- Home;
- Workflow;
- Toolkit;
- Tool Detail;
- Articles;
- Article Detail;
- AI Updates;
- Update Detail.

Approved prototypes are visual implementation targets.

---

## 05 — Product Specification

Status: COMPLETE

Approved documents:

- PROJECT.md
- ARCHITECTURE.md
- ROUTES.md
- DATA_MODELS.md
- DESIGN_SYSTEM.md
- CONTENT_SYSTEM.md
- DECISIONS.md
- PROGRESS.md

Key architecture:

Next.js

- TypeScript
- content-driven architecture
- GitHub
- Netlify

Backend:

Not required for MVP.

---

## 06 — Implementation Plan

Status: COMPLETE

Planning requirements:

- define implementation steps;
- define dependencies between steps;
- define testing/check requirements;
- define Codex task workflow;
- define Page Visual Specifications.

The implementation plan is complete. Each implementation step requires separate human review.

---

## 07 — Development / Codex Workflow

Status: IN PROGRESS

Development will proceed in small reviewed steps.

Each step:

READ DOCS  
→ INSPECT REPOSITORY  
→ IMPLEMENT  
→ CHECK/TEST  
→ UPDATE PROGRESS  
→ REPORT  
→ HUMAN REVIEW

### Step 01 — Project Setup

Implementation status: COMPLETE (2026-09-19).
Required checks: PASSED.
Human review: APPROVED (2026-09-19).
Final acceptance: APPROVED (2026-09-19).

Created:

- minimal Next.js App Router application with a blank bootstrap route and Ukrainian document language;
- TypeScript strict configuration;
- pnpm package configuration, lockfile, and explicit resolver build-script permission;
- development, production build/start, typecheck, and lint scripts;
- local Git repository on `main`, `.gitignore`, and consistent text line endings;
- empty `public/` asset directory and concise README;
- Node.js 24 version declaration and Netlify build configuration.

Versions verified: Node.js 24.19.0, pnpm 12.4.1, Next.js 16.3.5,
React 19.3.0, TypeScript 6.0.3, ESLint 9.39.5.

Checks executed successfully:

- `pnpm install --frozen-lockfile` — passed;
- `pnpm dev --hostname 127.0.0.1` — ready; HTTP GET `/` returned 200 and `lang="uk"` was verified;
- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero lint warnings;
- `pnpm build` — passed with the final configuration;
- `git check-ignore` — environment files, private keys, dependencies, and generated output are ignored.

The development server was stopped after verification. No product pages, visual
features, content models, backend, database, authentication, or CMS were implemented.
No credentials, commits, remote repository, or deployment were created.

Setup notes:

- Registry queries/checks required access outside the sandbox; installation then succeeded.
- The initial install required explicit permission for `unrs-resolver`'s native-binding install script; this is recorded in `pnpm-workspace.yaml`.
- TypeScript 7 was replaced with 6.0.3 to match the lint parser's supported versions.
- ESLint 10 produced peer conflicts with Next.js's bundled lint plugins. ESLint 9.39.5 is compatible and passes lint, but npm marks that major version as unsupported. This tooling maintenance warning remains.
- Next.js automatic agent-file generation is disabled to keep the foundation minimal.
- Netlify configuration is prepared; remote deployment has not been verified.

### Step 02 — Design System Foundation

Implementation status: COMPLETE (2026-09-19).
Required checks: PASSED.
Human review: APPROVED (2026-09-19).
Final acceptance: APPROVED (2026-09-19).

Files created:

- `app/tokens.css` — approved design tokens, font stacks, container padding values, and breakpoint references;
- `app/globals.css` — global document and base-element styles, importing the token stylesheet.

Files modified:

- `app/layout.tsx` — imports the global stylesheet;
- `docs/DESIGN_SYSTEM.md` — records the approved Inter and monospace stacks and deferred font delivery;
- `docs/PROGRESS.md` — records Step 02 implementation and verification.

Implemented:

- exact approved color, type-size, line-height, spacing, width, radius, shadow, and breakpoint tokens;
- approved sans-serif and monospace stacks; mobile/tablet/desktop container padding tokens;
- border-box sizing, zero body margin, viewport-height foundation, warm background, and graphite text;
- base heading sizes and line heights, small text, monospace elements, and inherited form-control typography;
- responsive images/video, preserved native link underlines and list markers;
- approved focus-visible outline and reduced-motion overrides for animations, transitions, and scrolling.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- token comparison — all 51 named CSS tokens in `DESIGN_SYSTEM.md` match `app/tokens.css` exactly.

Implementation notes:

- Inter is the approved primary visual font. Font stacks use locally available fonts only; no package, remote font request, or font-delivery integration was added.
- Breakpoints are references. Future mobile-first component media queries must use literal values because CSS custom properties cannot be used in media-query conditions.
- Fluid heading sizes and responsive media provide the base responsive behavior; container components and page layouts remain outside this step.
- The existing blank route is unchanged. No product pages, UI components, demo content, dependencies, or tooling/configuration changes were introduced.
- Next.js agent-file behavior and agent instruction files were not modified.
- Required checks ran with permission outside the sandbox. Step 02 human review and final acceptance were approved on 2026-09-19.

### Step 03 — Core UI Primitives

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `components/ui/Container.tsx` and `Container.module.css`;
- `components/ui/Section.tsx` and `Section.module.css`;
- `components/ui/Button.tsx` and `Button.module.css`;
- `components/ui/Card.tsx` and `Card.module.css`.

Files modified:

- `docs/DESIGN_SYSTEM.md` — approved primitive defaults and the accessibility-driven primary-button foreground decision;
- `docs/PROGRESS.md` — Step 03 implementation and verification.

Implemented:

- Container: centered, full-width border-box container; default and narrow maximum widths; 20px/24px/32px horizontal padding at the approved breakpoints;
- Section: semantic section with 64px default and 96px desktop vertical padding; no background variants;
- Button: primary/secondary variants; native action buttons default to `type="button"`; navigation uses Next.js Link with anchor semantics;
- Button: 44px minimum height, approved radius and horizontal padding, native disabled actions with reduced opacity and no pointer interaction, and preserved global focus-visible behavior;
- Card: non-interactive surface with the approved background, border, radius, padding, and shadow.

Accessibility decision approved on 2026-09-20: primary Button uses
`--color-text` on the unchanged accent and accent-hover backgrounds. Computed
text contrast is approximately 5.79:1 and 4.57:1 respectively. Navigation links
do not expose a disabled prop; native disabled semantics apply to action buttons.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- in-memory semantic rendering checks — action/submit/disabled buttons, navigation links, section labeling, container attributes, and a non-interactive Card wrapper passed.

Implementation notes:

- Existing tokens, global styles, routes, tooling configuration, and agent files remain unchanged.
- No dependencies, product/page-specific components, demo content, or application-shell features were added.
- Primary active styling reuses the approved hover color; secondary hover/active styling underlines the label; disabled actions use 0.5 opacity.
- Primitives are not mounted in the blank route. Browser visual/responsive review is not claimed by the build and semantic rendering checks; human review and final acceptance were approved on 2026-09-20.

### Step 04 — Application Shell

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `components/shell/Header.tsx` and `Header.module.css`;
- `components/shell/Footer.tsx` and `Footer.module.css`;
- `components/shell/navigation.ts`;
- `app/layout.module.css`.

Files modified:

- `app/layout.tsx` — shared Header, main content landmark, Footer, and skip link;
- `docs/PROGRESS.md` — Step 04 implementation and verification.

Implemented:

- DevJourney brand linking to `/`, semantic primary navigation, and the five approved route destinations;
- compact mobile disclosure navigation with the existing Button, `aria-expanded`, `aria-controls`, keyboard operation, Escape focus return, and closure on link selection or focus leaving the header;
- current-page/current-section indication and responsive desktop navigation;
- dark Footer with DevJourney identity, compact navigation, and a non-interactive Buy me a coffee placeholder;
- reusable root shell preserving `lang="uk"` and rendering page children between Header and Footer;
- existing Container, Button, design tokens, global focus styles, and reduced-motion behavior reused.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- `pnpm start --hostname 127.0.0.1` and HTTP GET `/` — production shell rendered with HTTP 200;
- headless Edge browser checks — landmarks, document language, exact navigation labels/routes, current-page indication, and non-interactive support placeholder passed;
- keyboard checks — Enter/Space toggle, link tab order, Escape and focus restoration, closure when tabbing out/selecting a link, visible focus, and skip-to-content passed;
- responsive checks — no horizontal overflow at 320, 390, 768, 1024, and 1440px, including expanded mobile navigation;
- reduced-motion and browser runtime checks — passed; no runtime errors recorded;
- desktop and mobile screenshots, including the expanded 320px menu, captured and visually inspected.

Risk-based implementation decisions:

- use the approved 1024px breakpoint for the compact-to-desktop navigation transition;
- use an inline disclosure with ordinary link tab order, rather than a modal menu or ARIA application-menu roles;
- keep Header interactive on the client while the root layout and Footer remain server components;
- share the existing five destinations between Header and Footer;
- add a skip link and flexible main region so short pages retain a footer at the bottom;
- use a plain visual Buy me a coffee placeholder with a coming-soon label, without a fake destination or payment integration.

Limitations and verification notes:

- The existing page is intentionally blank; product content and destination routes are reserved for later steps. Links to those unimplemented routes currently reach the framework's 404 state.
- Approved prototype image files were not present in the repository; screenshots were reviewed against the written design foundation, not compared with unavailable prototypes. Human review and final acceptance were approved on 2026-09-20.
- The built-in browser tool could not initialize. Installed Edge was used headlessly with a temporary isolated profile and no new dependencies. An initial incomplete synthetic keyboard event failed; the corrected keyboard sequence and subsequent responsive checks passed.
- No dependencies, tooling configuration, agent files, content models, or non-MVP functionality were added or changed.
- The production verification server was stopped after checks.

### Step 05 — Content Models & Validation

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `content/models.ts` — ImageAsset, Article, Tool, AIUpdate, WorkflowStage, WorkflowStep, and all seven approved ContentBlock variants;
- `content/validation.ts` — dependency-free runtime validation accepting unknown input and reporting the exact failing field path;
- `content/validation.test.mjs` — focused Node tests using the existing TypeScript compiler in memory.

Files modified:

- `docs/DATA_MODELS.md` — records the approved minimal heading, code, and callout contracts; clarifies the existing optional prompt title from DESIGN_SYSTEM.md;
- `docs/PROGRESS.md` — Step 04 approval and Step 05 implementation/check results.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- `node --test content/validation.test.mjs` — all six test groups passed, covering all entities/blocks, required and optional fields, nested error paths, malformed content, dates, URLs, image metadata, duplicates, and related references.

Risk-based implementation decisions:

- Keep pure TypeScript models and validation together under `content/`, separate from presentation; no loaders, routes, production records, or renderer are introduced.
- Validators return validated data without coercion or input mutation; missing required fields, unsupported fields/variants, and explicit null optional values fail clearly. Optional undefined values are omitted.
- Require non-empty text, finite positive reading time, positive integer image dimensions, ISO calendar dates or timezone-qualified timestamps, and lowercase Latin/digit hyphenated slugs. Readability and identifier stability across revisions remain editorial responsibilities.
- Image sources accept root-relative file paths or HTTP(S) URLs; external links require absolute HTTP(S) URLs without credentials. Validation checks path syntax, not asset existence or remote availability; those checks remain part of content integration/QA.
- Duplicate IDs and slugs are rejected within each entity collection; related references resolve by stable ID against the appropriate complete collection. Call collection validation before rendering future datasets; individual validators cannot detect cross-record errors.
- Preserve code whitespace and keep text as data. No HTML/code execution or rendering is implemented. Empty arrays are permitted because the approved contracts do not set minimum item counts.

Verification notes:

- The initial test run and production build encountered sandbox `spawn EPERM`; both passed after permission to rerun outside the sandbox.
- No dependencies, tooling/configuration changes, agent-file changes, backend, database, CMS, API, content UI, or production content were introduced.
- The content model gap was resolved by explicit human approval of the three minimal block contracts on 2026-09-20. No unresolved source-of-truth conflict remains.

### Step 06 — Content Renderer

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `components/content/ContentRenderer.tsx` — reusable typed renderer for all seven approved blocks;
- `components/content/ContentRenderer.module.css` — token-based content spacing, responsive images, dark developer blocks, neutral callouts, and lists;
- `components/content/ContentRenderer.test.mjs` — focused server-rendering tests using existing React and TypeScript tooling.

Files modified:

- `docs/PROGRESS.md` — Step 05 human approval/final acceptance on 2026-09-20 and Step 06 implementation/check results.

Implemented:

- paragraph, h2/h3 headings, figure/image/optional caption, pre/code, labeled prompt with optional title, aside callout with optional title, and ul/li checklist;
- existing ContentBlock types and block validation at the renderer boundary; exhaustive switch with a never-typed failure branch;
- React-escaped text, preserved code whitespace, wrapped prompt whitespace, and keyboard-focusable horizontal code scrolling using the global focus foundation;
- ImageAsset alt text and dimensions; no raw HTML, syntax highlighting, dependencies, new models, pages, routes, or production content.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings after correcting a test-harness variable name;
- `pnpm build` — passed;
- `node --test components/content/ContentRenderer.test.mjs content/validation.test.mjs` — all ten test groups passed;
- `node --test components/content/ContentRenderer.test.mjs` — all four renderer test groups passed again after the harness correction.

Risk-based implementation decisions and limitations:

- Keep one renderer with a private block switch and one CSS module; no premature per-block component API or client state.
- Use positional keys for these stateless ordered blocks/items because the approved model has no block IDs; no model fields were added.
- Prompt/callout titles use strong text rather than extra outline headings. Checklists are static semantic lists without invented completion state or controls. Copy actions and Table of Contents are deferred.
- Use Next.js Image with per-image `unoptimized` to display the approved local/HTTP(S) sources without adding remote-host configuration or an image service. Assets must still be optimized and verified during content integration.
- Required build/test workers ran with permission outside the sandbox. The initial lint failure was confined to the test harness and is resolved.
- Tests verify rendered markup and error behavior, not browser layout or visual approval. The renderer is not mounted on the blank bootstrap route; browser/screenshot review in real detail templates remains pending.

### Step 07 — Demo Content Dataset

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `content/demo.ts` — compact typed dataset exported as `demoContent` after complete collection validation;
- `content/demo.test.mjs` — dataset validation, approved entity coverage, DEMO labeling, and local asset checks;
- `public/images/demo/workflow.svg` — explicitly labeled demo workflow diagram;
- `public/images/demo/tool-placeholder.svg` — generic DEMO image, not an official tool logo.

Files modified:

- `docs/PROGRESS.md` — Step 06 approval and Step 07 implementation/check results.

Demo entities:

- six workflow steps: idea, discovery, design, code, test, deploy;
- six tools: ChatGPT, Codex, VS Code, GitHub, Figma, Netlify;
- three short articles for listing/detail development;
- three fictional AI updates, one per approved update category;
- all seven ContentBlock variants, both heading levels, optional metadata present/absent, and valid related-record references.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- `node --test content/demo.test.mjs content/validation.test.mjs` — all nine test groups passed, including complete dataset validation, duplicate/reference checks, DEMO labeling, and existence/dimensions of every referenced image.

Risk-based decisions and limitations:

- The approved models have no status property. Keep data in an explicitly named demo module, mark every description as DEMO, and prefix article/update titles with DEMO without changing models or validation.
- AI updates are explicitly fictional, carry no source URL, and make no verified current-news claim. Dates and reading times are fixture metadata only.
- Three articles and three updates provide multiple cards and related/no-related cases without writing full production materials. Tools retain the six approved names and stable readable slugs; related content uses stable demo IDs.
- Reuse two small local SVG assets rather than missing image paths, remote downloads, or official logos. Assets and content must be replaced/reviewed before production publication.
- Data is validated when imported, but remains unconnected to routes until separately authorized page work. No pages, dependencies, tooling/configuration, existing models, validation, or renderer were changed.
- Tests and the production build ran with permission outside the sandbox for worker-process access. No unresolved failures or source-of-truth conflicts remain.

### Step 08 — Home Page + First Visual QA

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Visual QA: COMPLETE against the approved written direction; exact prototype comparison unavailable.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `app/page.module.css` — token-based responsive Home styles.

Files modified:

- `app/page.tsx` — Home portal entry point;
- `docs/PROGRESS.md` — Step 07 approval and Step 08 results.

Implemented:

- Ukrainian value proposition, Workflow/Toolkit CTAs, and a dark developer-principle panel;
- six-step workflow overview, six-tool preview, three article previews, and three clearly fictional AI Update previews;
- existing shell, Container, Section, Button, Card, and validated demo dataset reused;
- approved route links, one h1 with h2 section headings and h3 item headings, meaningful image alt text, visible demo notice, and explicitly labeled test dates.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- `pnpm start --hostname 127.0.0.1` — production Home rendered in headless Edge;
- responsive browser checks at 320, 390, 640, 768, 1024, and 1440px — no horizontal overflow and all nine images loaded;
- browser checks — one h1, five labeled Home sections, Ukrainian document language, Enter/Escape mobile navigation, expanded-menu overflow, skip-to-content, Tab to primary CTA, visible focus, and reduced motion passed; no JavaScript runtime exceptions;
- desktop/mobile screenshots captured and inspected for hierarchy, spacing, alignment, consistent cards, readability, and responsive layout.

Screenshots (temporary local QA artifacts, outside the repository):

- `C:/Users/Huawei/AppData/Local/Temp/devjourney-home-tPAix3/home-1440.png`;
- `C:/Users/Huawei/AppData/Local/Temp/devjourney-home-tPAix3/home-390.png`;
- `C:/Users/Huawei/AppData/Local/Temp/devjourney-home-tPAix3/home-320.png`;
- matching `hero-1440.png`, `hero-390.png`, and `hero-320.png` viewport captures in the same directory.

Risk-based decisions and visual compromises:

- Keep Home in the route with a CSS module; no new shared abstraction until reuse is demonstrated. Read preview content directly from demoContent.
- Use a two-column desktop hero, single-column mobile hero, two-column intermediate cards, three-column desktop cards, and six compact desktop workflow steps using approved breakpoint values.
- Use the existing dark developer principle instead of introducing new decorative assets. Preserve DEMO text and shared placeholder illustrations; no production imagery or verified news is claimed.
- Prototype image files were not available in the repository. Visual review used DESIGN_SYSTEM.md and the user's written direction; exact prototype fidelity remains unverified. Font delivery remains deferred, so local fallback fonts may render.
- Section/detail links use approved destinations, but those pages intentionally remain unimplemented and return 404 until their authorized steps.
- Initial browser assertions inspected unloaded offscreen lazy images and used an incomplete synthetic Enter sequence. The test harness was corrected to load images and send the full key sequence; final checks passed without changes to the approved shell.
- Build/server/browser checks ran with permission outside the sandbox. The verification server and browser were stopped afterward.
- No dependencies, tooling/configuration, agent files, content models, dataset, or future pages were changed.

### Step 09 — Workflow Page

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Desktop visual QA: COMPLETE against the existing Home and written design direction.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `app/workflow/page.tsx` — dedicated `/workflow` page;
- `app/workflow/page.module.css` — responsive token-based workflow styles.

Files modified:

- `docs/PROGRESS.md` — Step 08 approval and Step 09 results.

Implemented:

- introductory guidance and visible DEMO notice;
- six numbered stages in an ordered list, rendered directly from `demoContent.workflowSteps`;
- stage descriptions, AI assistance, and developer decisions from the existing structured data;
- shared application shell, Container, Section, and Card reused; semantic h1/h2/h3 hierarchy;
- desktop three-column stage cards stacking vertically at smaller widths.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed and statically generated `/workflow`;
- `pnpm start --hostname 127.0.0.1` and HTTP GET `/workflow` — passed, HTTP 200;
- headless Edge — exact six-stage order, six ordered-list entries, twelve responsibility headings, one h1, Ukrainian document language, and current Workflow navigation state verified;
- responsive overflow checks at 320, 390, 640, 768, 1024, and 1440px — passed;
- keyboard mobile navigation, Escape, skip-to-content, Tab/focus visibility, and reduced motion checks — passed; no JavaScript runtime exceptions;
- representative desktop screenshot captured and inspected for hierarchy, readability, spacing, and alignment.

Desktop screenshot:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-workflow-hImJP1/workflow-1440.png`

Risk-based decisions and limitations:

- Keep page-specific rendering and CSS local to the route; use the existing single validated dataset without adding fields or a shared abstraction.
- Number the stages in document order and visually distinguish AI assistance from human decisions using existing neutral and dark tokens. No new interactions or motion were added.
- Content remains DEMO. Exact prototype comparison remains unavailable because prototype images are absent; the existing approved Home and written design system guide the desktop review.
- No responsive issue was detected; detailed mobile visual review remains deferred to Step 16 as requested.
- Build/server/browser checks ran with permission outside the sandbox. Verification processes were stopped afterward.
- No dependencies, tooling/configuration, agent files, existing shell/primitives, Home, models, or demo data were modified.

### Step 10 — Toolkit Listing

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Desktop visual QA: COMPLETE against the established DevJourney direction.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `app/toolkit/page.tsx` — dedicated listing route;
- `app/toolkit/page.module.css` — responsive listing styles.

Files modified:

- `docs/PROGRESS.md` — Step 09 approval and Step 10 results.

Implemented:

- introduction and visible DEMO/placeholder-logo notice;
- all six tools rendered directly from the existing validated Tool dataset;
- category text, descriptions, use cases, and workflow stage labels sourced from structured data;
- semantic h1/h2/h3 headings, lists, descriptive title links to `/toolkit/[slug]`, and 44px minimum-height link targets;
- existing shell, Container, Section, and Card reused; one/two/three-column responsive grid.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed and statically generated `/toolkit`;
- `pnpm start --hostname 127.0.0.1` and HTTP GET `/toolkit` — passed, HTTP 200;
- headless Edge — exact six tool names and detail-link destinations, one h1, twelve supporting headings, current Toolkit navigation, Ukrainian document language, and all six loaded images verified;
- no horizontal overflow at 320, 390, 640, 768, 1024, and 1440px;
- keyboard mobile navigation, Escape, skip-to-content, Tab to the first tool link, visible focus, and reduced motion — passed; no JavaScript runtime exceptions;
- desktop screenshot captured and inspected for hierarchy, consistent cards, spacing, alignment, and readability.

Desktop screenshot:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-toolkit-0QZ8Hs/toolkit-1440.png`

Risk-based decisions and limitations:

- Keep page-specific markup/styles local; no second dataset or unnecessary shared abstraction. Resolve workflow labels from existing workflow records.
- Categories and stages are informational text, not filter controls. Tool titles are the navigation links; cards do not add click handlers.
- Existing DEMO labels and generic local logo placeholders remain visible. No production claims or new assets were introduced.
- Tool Detail routes intentionally remain unimplemented and return 404 until Step 11 is authorized.
- Exact prototype comparison remains unavailable; desktop QA used approved Home/Workflow and the written design direction. No responsive issue was detected; detailed mobile visual review remains deferred to Step 16.
- Build/server/browser checks ran with permission outside the sandbox. Verification processes were stopped afterward.
- No dependencies, tooling/configuration, agent files, existing pages, shell/primitives, models, or demo data were changed.

### Step 11 — Tool Detail

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Desktop visual QA: COMPLETE for Codex against the established design direction.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `app/toolkit/[slug]/page.tsx` — one reusable dynamic Tool Detail route/template;
- `app/toolkit/[slug]/page.module.css` — responsive detail layout.

Files modified:

- `docs/PROGRESS.md` — Step 10 approval and Step 11 results.

Implemented:

- exact slug lookup in the existing validated Tool dataset with `notFound()` for absent tools;
- tool identity/category, description, DEMO notice, use cases, workflow stages, and back-to-Toolkit navigation;
- existing ContentRenderer for structured content; related articles resolved by ID and omitted when absent;
- optional website/documentation links rendered only when present; no external integration or invented URLs;
- existing shell, Container, Section, and Card reused; desktop content/sidebar layout stacks on smaller screens.

Checks executed successfully against the final implementation:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed; `/toolkit/[slug]` is server-rendered on demand;
- production HTTP checks for chatgpt, codex, vscode, github, figma, and netlify — each returned 200 with the correct tool heading;
- missing-tool, Codex, FIGMA, bad_slug, and encoded-space slugs — each returned 404 without a tool heading or fallback tool;
- Codex browser checks — Ukrainian document language, one h1, Toolkit current-section state, loaded image, and no JavaScript runtime exceptions;
- no horizontal overflow at 320, 390, 640, 768, 1024, and 1440px;
- keyboard mobile navigation, Escape, skip-to-content, Tab to back navigation, visible focus, and reduced motion — passed;
- Codex desktop screenshot captured and visually inspected.

Desktop screenshot:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-tool-detail-PqyOkR/codex-1440.png`

Risk-based decisions, resolved issues, and limitations:

- Keep one route/template with exact lookup and awaited Next.js params; no duplicate data, model expansion, or general detail-template abstraction.
- Initial static generation exposed case-insensitive filesystem behavior on Windows: an uppercase slug could serve a lowercase prebuilt page with HTTP 200. Switched this route to `dynamic = "force-dynamic"` so every request performs exact lookup. All six tools render through the existing Next.js runtime; deployment must support Next.js server rendering. No global/tooling configuration or dedicated backend was added.
- Initial server restart preceded completion of the rebuild and failed for missing build output; restarting after the successful build resolved it. Final route checks ran against the completed build.
- Related article destinations remain unimplemented until later authorized steps. Optional external URLs are absent in the demo data, so those links remain hidden.
- Content and artwork remain DEMO; prototype images are unavailable, so desktop review used the written direction and existing approved pages. Detailed mobile visual review remains Step 16; no responsive issue was detected.
- Build/server/browser checks ran with permission outside the sandbox. Verification processes were stopped afterward.
- No dependencies, production content, existing models/dataset/renderer, shell/primitives, agent files, or unrelated routes were changed.

### Step 12 — Articles Listing

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Desktop visual QA: COMPLETE against the established DevJourney direction.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `app/articles/page.tsx` — dedicated Articles listing;
- `app/articles/page.module.css` — responsive token-based card grid.

Files modified:

- `docs/PROGRESS.md` — Step 11 approval and Step 12 results.

Implemented:

- introduction and visible DEMO notice identifying dates/reading times as fixture metadata;
- all three existing articles rendered from the validated dataset, with cover images, meaningful alt text, category, reading time, title, description, and publication date;
- optional author and updated date displayed only when present; semantic time elements;
- approved `/articles/[slug]` title links, semantic h1/h2 hierarchy, and existing shell, Container, Section, and Card;
- one/two/three-column responsive grid matching the established listing pages.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed and statically generated `/articles`;
- `pnpm start --hostname 127.0.0.1` and HTTP GET `/articles` — passed, HTTP 200;
- headless Edge — all three article links, DEMO titles, four time elements, one h1, current Articles navigation, Ukrainian document language, and loaded images verified;
- no horizontal overflow at 320, 390, 640, 768, 1024, and 1440px;
- mobile navigation, Escape, skip-to-content, Tab to the first article link, visible focus, and reduced motion — passed; no JavaScript runtime exceptions;
- desktop screenshot captured and inspected for hierarchy, card consistency, spacing, alignment, and readability.

Desktop screenshot:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-articles-7faL8y/articles-1440.png`

Risk-based decisions and limitations:

- Keep page-specific markup/styles local and preserve dataset order; no duplicate content, sorting feature, search, filters, pagination, or category controls.
- Show available optional metadata without blank placeholders; preserve DEMO titles/descriptions and explicitly label test dates.
- Shared demo artwork remains unchanged. Exact prototype comparison remains unavailable; desktop QA used the established approved pages and written design direction.
- Article Detail links intentionally reach unimplemented routes until Step 13 is authorized. Detailed mobile visual review remains deferred to Step 16; no responsive issue was detected.
- Build/server/browser checks ran with permission outside the sandbox. Verification processes were stopped afterward.
- No dependencies, production content, existing models/dataset, shell/primitives, tooling/configuration, agent files, or unrelated routes were changed.

### Step 13 — Article Detail

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Desktop visual QA: COMPLETE against the established design direction.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `app/articles/[slug]/page.tsx` — one dynamic Article Detail route/template;
- `app/articles/[slug]/page.module.css` — reading layout and responsive TOC styles;
- `content/headings.ts` — shared deterministic derivation of heading anchors/TOC entries.

Files modified:

- `components/content/ContentRenderer.tsx` — derive heading IDs and make anchor targets focusable without adding them to the Tab sequence;
- `components/content/ContentRenderer.test.mjs` — anchor regression cases and updated semantic checks;
- `docs/PROGRESS.md` — Step 12 approval and Step 13 results.

Implemented:

- exact request-time slug lookup and `notFound()`, reusing the established Tool Detail routing pattern;
- semantic article with title, description, category, reading time, available author/publication/update metadata, cover image/caption, DEMO notice, and back navigation;
- structured blocks through the existing validating ContentRenderer; related articles resolved by stable ID and omitted when absent;
- reading width capped by the approved content token, with a desktop sidebar and compact collapsible TOC before content on small screens;
- TOC derived directly from h2/h3 blocks; shared Unicode-aware text normalization, deterministic duplicate suffixes, punctuation fallback, and collision avoidance. No model fields or manual TOC records added.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- `node --test components/content/ContentRenderer.test.mjs content/demo.test.mjs content/validation.test.mjs` — all 14 test groups passed, including Unicode/duplicate/suffix anchor collisions, stability after inserting non-heading blocks, no-heading input, renderer escaping, and content regression tests;
- production HTTP checks — all three article slugs returned 200; missing, uppercase, malformed, and encoded-space slugs returned 404 without an article fallback;
- representative article browser checks — semantic article, one h1, two matching TOC/heading targets, unique document IDs, current Articles section, loaded images, and Ukrainian document language;
- no horizontal overflow at 320, 390, 640, 768, 1024, and 1440px;
- mobile navigation, Escape, skip-to-content, Tab to back navigation, focus visibility, reduced motion, TOC Enter navigation/focus transfer, and keyboard disclosure collapse — passed; no JavaScript runtime exceptions;
- representative desktop screenshot captured and inspected.

Desktop screenshot:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-article-detail-D8nW1A/article-1440.png`

Risk-based decisions and limitations:

- Reuse request-time rendering to retain exact-slug 404 behavior on Windows; no routing/configuration changes outside this route.
- Share only the heading derivation needed by both the TOC and renderer. Anchors remain stable for unchanged unique heading text and non-heading insertions; editing heading text or reordering identical headings may change anchors because the approved model has no persistent block IDs.
- Use native details/summary, initially open, without client state or dependencies. TOC is omitted when there are no heading blocks. Required cover images follow the approved model; optional author/update/caption/related fields do not create empty sections.
- Repeated cover/body diagram in the representative article comes from the approved DEMO dataset; no production artwork or content was invented. Exact prototype comparison remains unavailable.
- Detailed mobile visual QA remains Step 16; no responsive issue was detected. Initial TOC disclosure test used an incorrectly escaped synthetic Enter event; corrected test passed without changing application behavior.
- Build/server/browser/tests ran with permission outside the sandbox. Verification processes were stopped afterward.
- No dependencies, production content, model expansion, comments, sharing, newsletter, or Step 14 features were introduced.

### Step 14 — AI Updates Listing

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Desktop visual QA: COMPLETE against the established design direction.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `app/updates/page.tsx` — structured AI Update listing;
- `app/updates/page.module.css` — responsive listing styles using existing tokens.

Files modified:

- `docs/PROGRESS.md` — Step 13 approval and Step 14 results.

Implemented:

- all three validated demo updates, with cover images, category, reading time, description, test publication date, and links to their existing `/updates/[slug]` paths;
- prominent notice that entries are fictional DEMO examples, not verified current news;
- existing shell, Container, Section, and Card reuse; semantic headings/list and responsive one/two/three-column layout.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed; `/updates` prerendered successfully;
- production server and HTTP `/updates` check — 200;
- browser checks — one h1, three update headings/links, three dates, DEMO labels, Ukrainian document language, meaningful image alt text, and loaded images;
- no horizontal overflow at 320, 390, 640, 768, 1024, and 1440px;
- mobile navigation Enter/Escape, skip link, keyboard access to the first update, visible focus, and reduced-motion behavior passed; no JavaScript runtime exceptions;
- desktop screenshot captured and inspected: hierarchy, spacing, card alignment, and readability are consistent with the established listing design.

Desktop screenshot:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-updates-gIT64s/updates-1440.png`

Risk-based decisions and limitations:

- Keep the existing dataset order and shared demo cover artwork; label dates as test metadata. No news was fetched or sources fabricated.
- Detail links target approved future routes; Update Detail remains unimplemented until Step 15.
- Exact prototype comparison remains unavailable; detailed mobile visual review remains Step 16. No responsive issue was detected.
- Build/server/browser checks ran with permission outside the sandbox. No dependencies, model changes, duplicate datasets, or additional features were introduced.

### Step 15 — Update Detail

Implementation status: COMPLETE (2026-09-20).
Required checks: PASSED.
Desktop visual QA: COMPLETE against the established design direction.
Human review: APPROVED (2026-09-20).
Final acceptance: APPROVED (2026-09-20).

Files created:

- `app/updates/[slug]/page.tsx` — reusable exact-slug Update Detail route/template;
- `app/updates/[slug]/page.module.css` — reading layout and responsive TOC styling.

Files modified:

- `docs/PROGRESS.md` — Step 14 approval and Step 15 results.

Implemented:

- exact request-time lookup with `notFound()`, matching Article/Tool Detail;
- title, category, description, test publication date, reading time, cover image/caption, prominent fictional/unverified DEMO notice, and back navigation;
- existing ContentRenderer for all structured blocks, with no unsafe raw HTML;
- derived heading TOC using the existing anchor helper and native collapsible navigation;
- related updates resolved by stable ID; optional source link only when supplied by the validated record. Current demo records contain no sources;
- the first demo's existing four editorial sections render unchanged. Shorter records do not receive invented sections or content.

Checks executed successfully:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- production HTTP checks — all three update slugs returned 200; missing, uppercase, encoded-space, malformed, and extra-segment paths returned 404 with no update fallback;
- record without related updates renders no empty related section;
- representative browser checks — one h1/article, four TOC links with matching targets, DEMO notice, meaningful image alt text, and loaded images;
- no horizontal overflow at 320, 390, 640, 768, 1024, and 1440px;
- mobile navigation Enter/Escape, skip link, keyboard access to back navigation, focus visibility, reduced motion, and TOC Enter navigation to heading focus — passed; no JavaScript runtime exceptions;
- desktop screenshot captured and inspected for hierarchy, spacing, reading width, and consistency with existing detail pages.

Desktop screenshot:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-update-detail-hC0DYE/update-1440.png`

Risk-based decisions and limitations:

- Reuse request-time rendering for exact-slug behavior on Windows and the established Article Detail layout without introducing a shared template abstraction.
- TOC is required by the implementation plan and omitted when content has no headings. No content model or dataset changes were needed.
- Existing demo artwork and repeated DEMO content callout are preserved. Exact prototype comparison remains unavailable.
- Build/server/browser checks ran with permission outside the sandbox. No dependencies, current-news requests, fabricated sources, production content, or configuration changes were introduced.

### Step 16 — Responsive QA

Implementation status: COMPLETE (2026-09-21).
Required checks: PASSED.
Responsive QA: PASSED.
Human review: APPROVED (2026-09-21).
Final acceptance: APPROVED (2026-09-21).

Routes tested at 320, 390, 768, 1024, and 1440px (45 combinations):

- `/`;
- `/workflow`;
- `/toolkit`;
- `/toolkit/codex`;
- `/articles`;
- `/articles/how-to-start-ai-project`;
- `/articles/review-ai-generated-errors` (additional code-block coverage);
- `/updates`;
- `/updates/demo-coding-tool-update`.

Confirmed defect and local fixes:

- Standalone detail-page related links and the Tool Detail Workflow link had approximately 21px-high targets. Added inline-flex alignment and a 44px minimum height, preserving existing typography, colors, wrapping, and page structure.
- Modified `app/toolkit/[slug]/page.module.css`, `app/articles/[slug]/page.module.css`, and `app/updates/[slug]/page.module.css`.
- Modified `docs/PROGRESS.md` to record Step 15 approval and Step 16 results. No new project files, dependencies, model changes, or unrelated refactors.

Checks after fixes:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- repeated production-browser checks — all 45 route/viewport combinations passed, with no horizontal overflow, broken images, or detected visible link/control targets below 24px in either dimension; the corrected standalone links have a 44px minimum height;
- mobile navigation opening/Escape, TOC disclosure opening/closing, keyboard focus visibility, and temporary long unbroken-text wrapping probes passed;
- code blocks retain whitespace and local horizontal scrolling; prompt blocks wrap within the reading column;
- representative screenshots inspected for header/footer, hero stacking, cards/grids, typography, images, spacing, detail sidebars, and mobile/tablet TOC placement. No further responsive defect was confirmed;
- no browser JavaScript runtime exceptions.

Screenshot evidence:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-responsive-BuUXrA/`

Contains 27 full-page screenshots: each tested route at 320, 768, and 1440px, plus `results.json`. Filenames use the route with slashes replaced by hyphens, followed by the width; Home uses `home`. Article and Update Detail screenshots cover mobile, tablet, and desktop layouts.

Limitations and notes:

- QA used installed Edge with emulated viewport widths, not physical devices or other browser engines.
- Existing DEMO artwork and approved content were preserved. Prototype comparison belongs to Step 17.
- Initial expanded interaction tests needed keyboard modality and focus on the menu trigger before Escape; the corrected tests passed without navigation code changes.
- Build/server/browser checks ran with permission outside the sandbox. Human review remains pending.

### Step 17 — Visual QA

Implementation status: COMPLETE (2026-09-21).
Required checks: PASSED.
Visual consistency QA: PASSED against DESIGN_SYSTEM.md, the approved written visual direction, existing tokens/primitives, and Home as the established baseline.
Human review: APPROVED (2026-09-21).
Final acceptance: APPROVED (2026-09-21).

Reviewed routes at mobile 390px and desktop 1440px:

- `/`, `/workflow`, `/toolkit`, `/toolkit/codex`;
- `/articles`, `/articles/how-to-start-ai-project`;
- `/updates`, `/updates/demo-coding-tool-update`;
- additional `/articles/review-ai-generated-errors` browser coverage for code blocks.

Findings:

- No confirmed visual inconsistency or obvious visual defect required an implementation change.
- Typography hierarchy, section spacing, container alignment, card borders/radii/shadows, restrained accent usage, dark developer blocks, links/buttons, metadata, DEMO notices, images, TOC/sidebar layouts, and header/footer remain consistent with the established system.
- Only `docs/PROGRESS.md` changed: Step 16 approval, Step 17 results, and next-step status. No application code, tokens, assets, content, dependencies, or configuration changed.

Checks executed:

- `pnpm typecheck` — passed;
- `pnpm lint` — passed with zero warnings;
- `pnpm build` — passed;
- production-browser checks at both widths across nine routes (18 combinations) — passed;
- computed heading/header/footer colors and sampled Card padding/shadow matched the approved values;
- images loaded, no horizontal overflow, no detected small visible targets below 24px, focus visibility, mobile menu/Escape, TOC disclosure, and long-text wrapping checks passed;
- no JavaScript runtime exceptions;
- representative desktop and mobile screenshots captured and inspected, including both reading templates and enlarged Home screenshot sections.

Intentional differences retained:

- Home uses the larger hero scale and alternating section surfaces; inner pages use the standard h1 scale.
- Toolkit uses compact logos and use-case/stage metadata; Article/Update listings use editorial covers and publication metadata. Optional metadata naturally varies in height.
- Tool Detail has use-case/workflow cards; Article/Update Detail has content-derived TOC navigation and constrained reading columns.
- DEMO notices share styling but retain content-specific wording; structured callouts remain distinct soft bordered content blocks.
- Existing placeholder artwork, repeated demo diagrams, and locally available font fallbacks remain as approved. No assets or font delivery were replaced.

Screenshot evidence:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-visual-aNks05/`

Contains route-named full-page screenshots at 390 and 1440px, Home detail captures, and `results.json` with computed-style and browser results.

Limitations:

- Visual comparison used the references explicitly requested for this task; no separate prototype image was available for a pixel-level comparison.
- Screenshots were captured in installed Edge. Human visual acceptance remains pending.
- Build/server/browser checks ran with permission outside the sandbox.

### Step 18 — Accessibility & Technical QA

Implementation status: COMPLETE (2026-09-21).
Required checks: PASSED.
Accessibility QA: PASSED within the tested scope below.
Technical QA: PASSED within the tested scope below.
Human review: APPROVED (Step 19 brief).
Final acceptance: APPROVED (Step 19 brief).

Confirmed issues and fixes:

- All 17 routes lacked titles/descriptions. Added a root Metadata title template/default description, section titles, and detail titles/descriptions derived from existing data; exact-slug Not Found behavior is preserved.
- Coral focus outlines measured 2.87:1 on the warm background. Changed their color to `currentColor`, retaining 3px thickness/offset and existing contrasting text colors. No tokens changed.

Files modified:

- `app/layout.tsx`, `app/globals.css`;
- `app/workflow/page.tsx`;
- `app/toolkit/page.tsx`, `app/toolkit/[slug]/page.tsx`;
- `app/articles/page.tsx`, `app/articles/[slug]/page.tsx`;
- `app/updates/page.tsx`, `app/updates/[slug]/page.tsx`;
- `docs/DESIGN_SYSTEM.md` — focus-contrast correction;
- `docs/PROGRESS.md` — Step 17 approval and Step 18 results.

Accessibility results:

- All 17 routes: one main landmark, shared header/footer, one h1, no skipped heading levels, unique IDs, Ukrainian document language, named links, and loaded images with alt attributes. Informative image descriptions come from validated data.
- Native button/link/disclosure/code-region semantics retained; no forms exist. Coffee support remains a non-interactive placeholder.
- Nine representative routes (including an additional code-block article) passed at 320, 390, 768, 1024, and 1440px: 45 cases.
- Keyboard skip-to-main, menu Enter/Tab/Escape, TOC Enter navigation/focus transfer, and keyboard disclosure toggling passed. Visible tested focus targets had visible outlines measuring at least 3:1 against their surrounding surfaces.
- No detected visible link/control target below 24px in either dimension; buttons, navigation, TOC and corrected detail links retain 44px minimum height.
- Text contrast: dark/warm 16.59:1; muted/warm 5.33:1; muted/white 5.65:1; muted/soft 5.02:1; primary text/accent 5.79:1 and hover 4.57:1; dark-surface text 16.16:1 and muted text 8.88:1.
- Reduced motion, long-text wrapping, code scrolling/whitespace, 320px reflow, and 200% root text resizing at 768px passed. Viewport metadata does not disable zoom.

Technical/security results:

- All 17 approved static/dynamic content URLs, all 17 unique local navigation destinations, and both local image assets returned 200.
- Missing, malformed, encoded-space and extra-segment paths under all three dynamic groups returned 404 (12 cases).
- All routes expose titles/descriptions; actual keyboard-driven client navigation updates route/title and closes the mobile menu.
- No horizontal overflow, broken images, unexpected console errors, runtime exceptions, or external runtime network requests observed.
- Source review found no unsafe raw HTML/eval rendering, external scripts or integrations. Existing escaping and URL-validation tests pass.
- Git reports zero tracked files and zero commits: no credentials are tracked/committed, but the workspace is not yet versioned. Ignore rules cover environment files/private keys. A high-confidence credential-pattern scan of 68 non-ignored working files found no matches; this is not exhaustive secret detection.
- No obvious dead implementation or duplicate datasets found. Existing local layout repetition remains intentional; no unrelated refactoring performed.

Automated checks:

- `pnpm typecheck`, `pnpm lint`, `pnpm build` — passed, lint with zero warnings;
- `pnpm exec tsc --noEmit --noUnusedLocals --noUnusedParameters` — passed;
- `node --test components/content/ContentRenderer.test.mjs content/demo.test.mjs content/validation.test.mjs` — all 14 tests passed;
- final route/metadata/assets/runtime audit, 45-case keyboard/contrast/layout audit, and keyboard internal-navigation checks — passed.

Evidence:

- `C:/Users/Huawei/AppData/Local/Temp/devjourney-technical-01gynd/audit.json`;
- `C:/Users/Huawei/AppData/Local/Temp/devjourney-accessibility-0Vt4zl/` — results and representative screenshots.

Limitations:

- Installed Edge with emulated widths and text resizing; no physical-device, other-engine, or screen-reader testing. Not formal accessibility certification or an exhaustive security/dependency-vulnerability audit.
- Basic metadata only: listing description is shared. Production canonical URLs/social assets and production content remain outside scope.
- No dependencies, assets, models, tooling configuration, integrations, or production content added. Build/test/browser/credential-scan subprocesses ran with permission outside the sandbox.
- The initial browser harness assumed every main region had links; corrected probes support Workflow without changing application behavior.

### Step 19 — First Production Content Reference

Implementation status: COMPLETE (2026-09-22).
Human-review corrections: implemented (2026-09-23); see correction report below.
Status: APPROVED (2026-09-24).
Production reference article: accepted as the current content-quality reference for DevJourney.
Required checks: PASSED. Human review: PASSED. Final acceptance: APPROVED (2026-09-24).
The production article and its human-review corrections were reviewed in the browser
and accepted by the human reviewer.
Step 18 human review and final acceptance: APPROVED by the Step 19 brief.
Step 20: NOT STARTED.

Article:

- Title: **Як правильно почати AI-assisted вебпроєкт**.
- Category: Guide; author: DevJourney; approximately 1,700 words; reading time: 8 minutes.
- Stable slug: `how-to-start-ai-project`; route: `/articles/how-to-start-ai-project`.
- Existing ID `demo-start-ai-project` retained so article/tool relationships stay valid. The ID is internal and does not label the production article as DEMO.
- Publication metadata prepared with date 2026-09-22; no deployment or human approval implied.
- All supplied sections included in order, with the closing principle verbatim. No substantive editorial deviations.

Content and integration:

- Added `content/articles/ai-assisted-project-start.ts`; replaced exactly one record in `content/demo.ts`. The legacy collection export remains compatible with all consumers.
- Existing ContentBlock model, renderer, validation, styles and layout are sufficient and unchanged.
- Process uses nine numbered paragraph blocks under a level-three heading, read vertically from Idea through Deploy. This is accessible text that wraps naturally, not an image or a forced horizontal diagram. No new content type was needed.
- Existing prompt block contains all eight contract fields; existing checklist block contains nine reusable readiness checks. No production-code example is needed before implementation; the prompt is the practical artifact.
- Updated only demo/date wording in Article Listing, Article Detail and the Home notice so the production article coexists with explicitly labeled fixtures. Both remaining demo articles and all unrelated records are preserved.
- `content/demo.test.mjs` now verifies the mixed collection, retained identity/relationships, fixture labeling and decoded production cover. Renderer tests continue to cover all seven block types, including image and code.
- `CONTENT_SYSTEM.md` records the reusable replacement rule: keep stable identity/URL, distinguish visible demo labels from internal IDs, and track approval separately from prepared metadata.

Asset:

- `public/images/articles/ai-assisted-project-start.webp`: 1600 × 900, WebP quality 84, 113,732 bytes (111.1 KiB).
- Source was 1672 × 941; contain resizing preserved the full composition without cropping, with at most one pixel of padding for the near-16:9 aspect ratio.
- Source and converted artwork visually inspected; output metadata and full decoding verified. Ukrainian alt describes the workspace illustration.
- Temporary `article-cover-source.png` removed only after successful conversion and verification, as requested.

Checks:

- `node --test components/content/ContentRenderer.test.mjs content/demo.test.mjs content/validation.test.mjs`: 15/15 passed.
- `pnpm typecheck`: passed.
- `pnpm lint`: passed with zero warnings, including after the final Home notice edit.
- `pnpm build`: passed; production server used for browser QA.
- Sandbox initially blocked test/build child processes (`spawn EPERM`); approved runs outside the sandbox passed.
- Headless Edge audit: listing, production detail and both remaining demo details at 320, 390, 768, 1024 and 1440px (20 cases) passed.
- Cover loading/dimensions/alt, title and description metadata, single h1, all 12 TOC targets, nine process steps, all prompt fields and nine checklist items verified.
- No horizontal page overflow, broken images, or unexpected JavaScript runtime/console errors detected.
- Actual Tab/Enter navigation to the TOC, focus transfer to headings, visible 3px focus outlines and disclosure toggling passed at all five widths.
- Representative listing/detail/process/prompt/checklist screenshots visually inspected; mobile wrapping and existing layout are readable.

Evidence:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-step19-2zDdDz/`

Contains `results.json` and listing/detail screenshots at all five widths plus process/prompt/checklist captures at 320 and 1440px.

Limitations:

- Browser connector was unavailable; QA used installed headless Edge with emulated viewports. No physical devices, other browser engines or screen-reader session were tested.
- The supplied artwork includes embedded text that is small at card size; the real HTML title and descriptive alt remain available independently.
- Existing basic title/description metadata retained; canonical deployment URL and social metadata were not introduced.
- The audit harness needed its CSS selector and native Enter-event simulation corrected; no application defect or layout change resulted.
- Human editorial and visual review PASSED; acceptance APPROVED (2026-09-24). No deployment performed. Step 20 was not started.

---

#### Step 19 — Human-review corrections (2026-09-23)

Implementation: COMPLETE. Human review: **PASSED**. Final acceptance: **APPROVED (2026-09-24)**.
Step 20: **NOT STARTED**.

Editorial correction:

- Added concise Ukrainian definitions of CONTEXT, GOAL, READ FIRST, SCOPE, DO NOT,
  CHECKS, REPORT and STOP CONDITIONS immediately before the existing full prompt.
- Explicitly explained that memorizing the English labels is unnecessary; the reader
  needs to understand what information the agent needs before starting work.
- Preserved the complete prompt verbatim and followed it with a concrete adaptation
  exercise. Explanation → Example → Practical Action is now explicit.
- No new headings: the existing 12-entry TOC stays unchanged. Approximately 1,858
  words; the eight-minute reading estimate remains appropriate. Other sections unchanged.
- Recorded the reusable new-term/structure → explanation → example → application
  rule in CONTENT_SYSTEM.md.

Back to Top:

- Added dependency-free `components/content/BackToTop.tsx` with a CSS module,
  reusing the existing Button, design tokens and focus-visible styles.
- Integrated only into Article Detail for articles with readingTime >= 5 minutes.
- Appears after more than one viewport / at least 640px of scrolling and after the
  introduction is above the viewport. Hides before the footer to avoid covering links.
- Fixed lower-right, safe-area-aware, 48 × 48px target with a Ukrainian accessible name.
- Native pointer/touch/Enter/Space activation focuses the article h1 and scrolls to
  page top; smooth normally, instant for reduced motion. No focus remains on a removed button.
- A 48px reserved gutter in the reading layout below 1440px prevents overlap; the
  title keeps its original width. Existing outer margins suffice at 1440px and above.
- Recorded behavior in DESIGN_SYSTEM.md. No models, validation, dependencies or
  other page types changed.

Files changed:

- `content/articles/ai-assisted-project-start.ts`;
- `components/content/BackToTop.tsx` (new), `components/content/BackToTop.module.css` (new);
- `app/articles/[slug]/page.tsx`, `app/articles/[slug]/page.module.css`;
- `docs/CONTENT_SYSTEM.md`, `docs/DESIGN_SYSTEM.md`, `docs/PROGRESS.md`.

Automated checks:

- Existing ContentRenderer, collection and validation suites: 15/15 tests passed.
- `pnpm typecheck`, `pnpm lint`, `pnpm build`: passed on the final implementation.
- Production-browser QA: 20 cases across listing, production article and both demo
  articles at 320, 390, 768, 1024 and 1440px passed.
- All eight definitions precede the unchanged full prompt in the requested order;
  the no-memorization principle and practical action follow the intended sequence.
  Existing prompt fields, checklist and all 12 TOC destinations passed.
- At every width: hidden at top/400px, visible at 1500px, hidden near footer; mouse,
  emulated touch, Enter and Space activation passed. Tab reaches the control with
  a visible 3px focus outline; activation focuses the h1 and returns scrollY to zero.
- Reduced-motion emulation confirmed an explicit instant scroll request and top
  position after touch activation. Normal pointer/keyboard smooth scrolling completed.
- No overlap with article text, headings, TOC, prompt or related links at sampled
  scroll depths; no horizontal overflow, broken images or runtime/console errors.
- Remaining short demo articles do not show Back to Top. Integration is exclusive
  to Article Detail; no shared shell or unrelated page changes.
- Visual QA inspected title, explanation, prompt and control placement. An initial
  whole-page gutter narrowed the mobile title; the final reading-layout-only gutter
  preserves the original title width and passed the repeated audit.

Final browser evidence:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-step19-review-x82uqX/`

Contains `results.json` with per-width Back to Top outcomes, plus listing, article,
contract explanation, prompt, process, checklist and control screenshots.

Limitations:

- Installed headless Edge with emulated viewport sizes/touch/reduced motion; no
  physical-device, other-engine or screen-reader session in the automated audit.
  Subsequent human browser review PASSED (2026-09-24).
- Back to Top intentionally hides at the footer; the dedicated mobile reading gutter
  trades some text width for guaranteed clearance around the fixed touch target.
- No publication or deployment performed. Step 19 is **APPROVED (2026-09-24)**;
  Step 20 remains **NOT STARTED**.

### Step 20 — Portfolio Readiness Audit

Audit status: COMPLETE (2026-09-24).
Portfolio Readiness Report: produced in the audit response, with prioritized
findings and a proposed minimal sequence of remaining work.
Implementation: NONE — audit/planning only; no fixes, redesign, new production
content, commits, push, deployment or product expansion performed.
Human review: APPROVED (2026-09-24).
The next authorized implementation is Step 21 — Home Production Content.

### Step 21 — Home Production Content

Implementation: COMPLETE (2026-09-24). Required and browser checks: PASSED.
Human review: PASSED. Final acceptance: APPROVED (2026-09-24).
The next authorized content step is Step 22 — Workflow Production Content.

Changes:

- Replaced Home hero/supporting copy with concise Ukrainian positioning around
  controlled AI-assisted development and human responsibility. No income, client,
  expertise or replacement-of-developers promises introduced.
- Updated the five hero/section CTAs to the requested labels and existing routes.
- Retained six Workflow steps and six Toolkit cards from the existing dataset.
  Home alone omits the Workflow fixture prefix and uses existing tool use cases
  instead of fixture descriptions. A visible notice explains that detailed
  Workflow/Toolkit materials are still being prepared; their pages/data are unchanged.
- Articles preview shows only the accepted production article, preserving its
  cover, category, reading time, description and stable route. Both demo articles
  remain in the dataset and Articles pages for the later cleanup step.
- Removed the AI Updates Home preview and its shared header/footer navigation
  entry. Update routes, implementation and records are retained.
- Removed the shared nonfunctional coffee/support placeholder and its unused CSS.
- Added Home-only title/description metadata reflecting the new positioning.

Visual preservation:

- Home CSS, breakpoints, tokens and reusable components are unchanged.
- Retained the dark hero/principle panel, coral accents, warm surfaces, peach notice,
  numbered workflow treatment, soft Toolkit section background, card borders/shadows,
  image slots and production article cover. Footer keeps its dark surface, brand,
  principle and navigation; only the nonfunctional support element is removed.
- No new images generated, assets modified or image slots stripped from retained
  records. Removal of the parked Updates section and two demo article previews is
  the explicitly authorized content reduction, not a redesign.

Files changed:

- `app/page.tsx`;
- `components/shell/navigation.ts`;
- `components/shell/Footer.tsx`, `components/shell/Footer.module.css`;
- `docs/PROGRESS.md`.

Checks:

- Existing tests: 15/15 passed.
- `pnpm typecheck`, `pnpm lint`, `pnpm build`: passed.
- Production Home audited at 320, 390, 768, 1024 and 1440px: all five cases passed.
- Four public navigation entries, five requested CTA labels/destinations, six
  workflow items, six tool cards and exactly one production article verified.
- No Updates preview/navigation link, fictional news text, support placeholder or
  demo article links on Home. Parked Updates routes still return 200.
- All seven Home images loaded with alt text: six retained tool placeholders and
  the real production article cover. Every Home destination returned 200.
- No horizontal overflow or unexpected JavaScript runtime/console errors.
- Keyboard skip-to-main, Tab to primary CTA, visible 3px focus, mobile menu
  Enter/Tab/Escape and reduced-motion overrides passed.
- Computed colors confirmed the dark hero/footer and soft Toolkit background.
  Screenshots inspected for hero, Workflow, Toolkit, Articles and footer composition.
- Added a discretionary hyphen within the hero word `вебпродукти` so the 320px
  heading wraps at a readable boundary without changing typography or layout.

Final browser evidence:

`C:/Users/Huawei/AppData/Local/Temp/devjourney-step21-d29v6i/`

Contains `results.json` and Home/Workflow/Toolkit/Articles/footer viewport captures
at all five widths. QA used installed headless Edge with emulated viewport sizes;
physical devices, other browser engines and screen readers were not retested.
The harness was corrected to scroll lazy images into view and establish keyboard
focus explicitly; these were test-probe issues, not application defects.

Remaining later-step work:

- Toolkit's six temporary logo illustrations and unfinished detail records remain;
  the icons visibly contain DEMO and their alt text identifies them as placeholders.
  Keep their image slots and replace them with suitable production visuals later.
- Workflow production cleanup and Articles demo cleanup are NOT STARTED.
- AI Updates remains PARKING; direct URLs still work, as requested. No deployment,
  payments, new features or unrelated improvements performed.

### Step 22 — Workflow Production Content

Implementation: COMPLETE (2026-09-24). Required and browser checks: PASSED.
Human review: PASSED. Final acceptance: APPROVED (2026-09-24).
The next authorized content step is Step 23 — Toolkit Production Content.

Changes:

- Replaced all six Workflow demo records with concise Ukrainian production copy:
  Idea & Goal, Scope, Design, Build with AI, Test & Review, Deploy & Prove.
- Each stage explains its purpose, AI assistance, human decisions/verification
  and an explicit `Результат:` in the short summary. Added the principle of human
  responsibility and a brief professional-review boundary for higher-risk work.
- Kept the existing content model, shared dataset and stable stage IDs, including
  `discovery` for Scope, so existing Toolkit relationships remain valid.
- Removed Workflow DEMO copy and updated its metadata. Home uses the production
  summaries directly; its notice no longer describes Workflow as unfinished.
- Preserved the six-card composition, light AI panels, dark human panels, peach
  accents, typography, spacing and responsive rules. No CSS, dependencies, new
  features or image changes were needed.
- Adjusted the existing fixture-label test to distinguish production Workflow
  records from remaining demo records.

Files changed:

- `content/demo.ts`
- `content/demo.test.mjs`
- `app/workflow/page.tsx`
- `app/page.tsx`
- `docs/PROGRESS.md`

Checks:

- Existing tests: 15/15 passed.
- `pnpm typecheck`, `pnpm lint`, `pnpm build`: passed.
- Production Workflow and Home preview checked at 320, 390, 768, 1024 and 1440px.
  All six stage titles/results render, no Workflow DEMO labels remain, and Home
  retains a readable six-stage preview.
- No horizontal overflow, broken Home images or JavaScript runtime/console errors.
- Keyboard skip-to-main, visible 3px focus, mobile menu Enter/Tab/Escape and
  reduced-motion scroll behavior passed. Existing panel colors verified.
- Screenshots inspected across the requested widths for text wrapping, card
  composition, intro and Home preview. Headless Edge viewport emulation was used;
  physical devices, other browser engines and screen readers were not retested.

Browser evidence: `C:/Users/Huawei/AppData/Local/Temp/devjourney-step22-naw5hK/`
contains `results.json` and Workflow/Home viewport screenshots at all five widths.

Remaining visuals and scope:

- Workflow has no temporary image slot or image asset rendered on this page;
  its existing CSS visual treatments remain intact.
- `public/images/demo/workflow.svg` remains in unrelated demo article/update
  records. The six Toolkit placeholder logos also remain, including on Home.
  No imagery was generated or removed.
- Toolkit production cleanup and Articles cleanup are NOT STARTED. AI Updates
  remains PARKING and unchanged. No deployment or next-step implementation.

### Step 23 — Toolkit Production Content + Official Tool Visuals

Implementation: COMPLETE (2026-09-24). Required and browser checks: PASSED.
Human review: PASSED. Final acceptance: APPROVED (2026-09-24).
ChatGPT/Codex official visual asset polish is PARKING, not a Portfolio v1 blocker.
The next authorized step is Step 24 — Articles Portfolio v1 Cleanup.

Production content:

- Completed exactly the six existing tools: ChatGPT, Codex, VS Code, GitHub,
  Figma and Netlify, preserving their IDs and slugs. Each has a short definition,
  Workflow role, usage example, human responsibilities and two official resources.
- Toolkit emphasizes choosing tools for the task and not needing all six.
  Git is distinguished from GitHub; Figma is optional; Netlify is a project choice,
  not a universal requirement or a claim that DevJourney is already deployed.
- Removed Toolkit DEMO notices/descriptions and all `tool-placeholder.svg` usage
  from production records. Codex now relates to the accepted production article
  rather than demo articles. Article and AI Updates records were not edited.
- Home consumes the same production records/assets. Its notice no longer says
  Toolkit materials are unfinished. No new tools, schema or dependencies.

Visuals and first-party sources:

- VS Code: unchanged blue stable SVG from the archive linked by
  [Microsoft's icon guidelines](https://code.visualstudio.com/brand).
- GitHub: unchanged current black Invertocat with supplied clear space from the
  [GitHub Brand Toolkit](https://brand.github.com/foundations/logo).
- Figma: unchanged full-color icon with its original canvas from
  [Figma's official brand download](https://www.figma.com/using-the-figma-brand/).
  It remains on white, with surrounding clear space and no crop.
- Netlify: unchanged encapsulated light-mode SVG, the supplied directory-friendly
  variant from [Netlify brand assets](https://www.netlify.com/about/#brand-assets).
- All four local files were verified byte-identical to their downloaded originals
  using SHA-256. Original archive URLs, paths and display decisions are recorded in
  `public/images/tools/README.md`.
- ChatGPT/Codex: [OpenAI brand guidance](https://openai.com/brand/) was read, but a
  reliable product-appropriate download and applicable usage could not be verified.
  Direct retrieval returned 403 and the full brand portal required sign-in. Both
  slots use an original generic document illustration, not an invented brand mark.
  This unresolved official-asset replacement is explicitly pending human review.
- Retained card layout, backgrounds, accents, spacing and image slots. Shared
  `ToolLogo` preserves 48px/64px boxes and contains the complete SVG without
  stretching. Removed CSS rounding on the images to avoid clipping marks; added
  VS Code clear space and the required white background for Figma. No other redesign.
- Decorative logos beside visible names have empty alt text. Descriptive asset
  metadata remains available in the existing model. No production hotlinks.

Files changed:

- `content/demo.ts`, `content/demo.test.mjs`
- `app/page.tsx`, `app/page.module.css`
- `app/toolkit/page.tsx`, `app/toolkit/page.module.css`
- `app/toolkit/[slug]/page.tsx`, `app/toolkit/[slug]/page.module.css`
- `components/content/ToolLogo.tsx`, `components/content/ToolLogo.module.css`
- `public/images/tools/{vscode,github,figma,netlify,neutral-tool}.svg`
- `public/images/tools/README.md`, `docs/PROGRESS.md`

Checks:

- Existing tests: 15/15 passed. Typecheck, lint and production build passed.
- Production browser QA: 40 cases passed — `/toolkit`, all six detail routes and
  Home at 320, 390, 768, 1024 and 1440px. Each route returned 200.
- All six cards, production descriptions, Workflow relationships and 12 official
  resource links render. No Toolkit DEMO text or old placeholder image usage.
- All tool assets load; complete SVGs use contain sizing in square 48px/64px slots.
  No horizontal overflow or JavaScript runtime/console errors.
- Keyboard skip-to-main and visible 3px focus passed on every route/width.
  Mobile menu Enter/Tab/Escape and reduced-motion overrides passed.
- Screenshots reviewed across the five widths, including the shared Home preview.
  Existing cards, backgrounds and text hierarchy remain intact.
- Official resources: nine URLs returned 200 via direct HTTP checks. ChatGPT and
  the OpenAI Codex product page returned 403 to scripted requests but were readable
  through web retrieval. Codex documentation redirects to the current official
  ChatGPT Learn documentation; the redirect destination returned 200. No dead
  destination was established; anti-bot behavior limits direct automated checks.
- Browser QA found global `height: auto` altering the Figma slot height; fixed by
  explicitly sizing both dimensions in `ToolLogo`, then reran all 40 cases.
- A rebuild encountered a Windows/OneDrive reparse-directory EPERM in generated
  `.next` output. Clearing only that generated cache resolved it; final build passed.

Browser evidence: `C:/Users/Huawei/AppData/Local/Temp/devjourney-step23-ChiFeg/`
contains `results.json` and catalog, detail/content and Home screenshots.
QA used installed headless Edge with viewport emulation. Physical devices,
other engines and screen readers were not tested in this step.

Remaining scope:

- Human review of the content and the two OpenAI neutral-fallback visuals is pending.
- The unused old `public/images/demo/tool-placeholder.svg` file is retained; no
  production record references it. Unrelated article/update fixtures remain.
- Articles cleanup and the next content step are NOT STARTED. AI Updates remains
  PARKING and unchanged. No deployment, new tools or unrelated features.

### Step 24 — Articles Portfolio v1 Cleanup

Implementation: COMPLETE (2026-09-24). Required and browser checks: PASSED.
Human review: PASSED. Final acceptance: APPROVED (2026-09-24).
Portfolio v1 production content accepted. Next authorized step: Step 25 — README
and Repository Readiness, without commits, GitHub configuration or deployment.

Public content and routing:

- Portfolio v1 exposes exactly one approved production article:
  `how-to-start-ai-project` — «Як правильно почати AI-assisted вебпроєкт».
- Added a shared `publicArticles` selection keyed to the approved record's stable
  ID. Listing, Home, article detail/metadata and Toolkit related-article discovery
  all use this selection. Renaming a demo title cannot accidentally publish it.
- Both `how-to-write-ai-coding-task` and `review-ai-generated-errors` now return
  HTTP 404 via `notFound()` with noindex. No redirects or model expansion.
- Their original source records and assets remain as fixtures. The approved
  article's source relationships are also retained, but only public records can
  render as related material. With no eligible related article, the entire
  section is omitted, including its heading.
- Updated Articles intro/metadata to honestly describe a one-article section.
  Removed public DEMO notices and test-date branches. One real card renders with
  the existing grid/card treatment; no duplicate, empty or coming-soon cards.

Preservation:

- Approved article file unchanged, verified by matching SHA-256 before/after:
  `85DE018E8205FBE268ABD1D53811C1B5E76EFCE54FFC2A028E9FB5EB3CECB923`.
- Stable ID/slug, metadata, cover, accepted text, prompt, TOC, Back to Top and
  reading composition retained. No CSS, images or dependencies changed.
- Workflow and Toolkit production data/content and unrelated routes unchanged.
  Toolkit template change only restricts related-article discovery to public data.
  AI Updates fixtures and routes remain untouched and PARKING.

Files changed:

- `content/demo.ts`, `content/demo.test.mjs`
- `app/articles/page.tsx`, `app/articles/[slug]/page.tsx`
- `app/page.tsx`, `app/toolkit/[slug]/page.tsx`
- `docs/PROGRESS.md`

Checks:

- Existing tests: 15/15 passed, including the public-selection invariant.
- `pnpm typecheck`, `pnpm lint`, `pnpm build`: passed.
- `/articles` and the approved detail route return 200. Both demo routes and the
  uppercase variant of the approved slug return 404.
- All public Home/Workflow/Toolkit routes return 200 and expose no links to the
  two unpublished slugs.
- 15 browser cases passed: listing, approved detail and Home at 320, 390, 768,
  1024 and 1440px. Screenshots inspected across those widths.
- One production card on listing and Home; no visible demo text, fixture artwork,
  test dates, demo related links or empty related-material heading.
- Production cover loads at its original 1600×900 dimensions; no broken images,
  horizontal overflow or JavaScript runtime/console errors.
- All 12 TOC anchors resolve. Keyboard activation/focus and disclosure work.
  Prompt contract explanation, example and practical action remain correctly ordered.
- Back to Top: hidden at top/shallow scroll, visible after meaningful scroll,
  at least 44px target, mouse/touch/Enter/Space activation, visible 3px focus and
  focus transfer to the article title passed at every width. No article-content
  overlap at sampled scroll positions; hidden near the footer. Reduced motion
  uses an instant return.

Evidence: `C:/Users/Huawei/AppData/Local/Temp/devjourney-step24-WiyfBW/`
contains results, routing assertions and screenshots. A Home selector quoting
error in the temporary QA script was corrected before the full successful rerun;
it was not an application runtime error. QA used headless Edge viewport emulation;
physical devices, other browser engines and screen readers were not retested.

No remaining content blocker was identified within the approved Portfolio v1
scope, subject to human acceptance of Step 24. Additional articles, course/content
expansion and OpenAI visual polish remain PARKING. README/Git work, deployment and
the next implementation step are NOT STARTED.

### Step 25 — README + Repository Readiness

Implementation and repository audit: COMPLETE (2026-09-24). Checks: PASSED.
Human review: PASSED. Final acceptance: APPROVED (2026-09-24).
Step 26 authorizes the initial baseline and GitHub handoff. Deployment: NOT STARTED.

Changes:

- Replaced the outdated Step 01/blank-application README with an English Portfolio
  v1 overview: purpose, audience, accepted scope/content, workflow/toolkit, actual
  versions, architecture, directories, local commands, QA and its limitations,
  human/AI responsibilities, fixture boundary, parking and truthful release status.
- Documented that parked Updates routes remain reachable as labeled fixtures;
  unpublished demo articles return 404. GitHub/live URLs are pending, not fabricated.
- Added only `scripts.test` to `package.json`, running the existing three Node
  test files through `node --test`. No test changes, new framework or dependencies.
- Corrected current-state PROJECT scope/status and workflow names. ROUTES now
  distinguishes published, unpublished and parked routes and actual navigation.
  ARCHITECTURE clarifies implemented technology versus planned GitHub/hosting.
- Recorded Step 24 acceptance and completion of production content. Historical
  progress records retain their original implementation findings.
- No application code, styling, production content or deployment configuration changed.

Files changed: `README.md`, `package.json`, `docs/PROJECT.md`, `docs/ROUTES.md`,
`docs/ARCHITECTURE.md`, `docs/PROGRESS.md`.

Checks:

- `pnpm test`: 15/15 passed using the new reproducible command.
- `pnpm typecheck`, `pnpm lint`, `pnpm build`: passed.
- `pnpm start` smoke check: Home, Workflow, Toolkit, Articles and the approved
  article return 200; both unpublished article routes return 404.
- README command names checked against package scripts; Node 24.x and pnpm 12.4.1
  match project files (local runtime v24.19.0). Lockfile contains the declared
  dependency versions; adding a script requires no dependency/lockfile change.
- All relative README documentation/asset-source links resolve locally.
- No five-width visual rerun: this step did not change runtime UI or behavior.
  No fresh dependency installation or security audit was performed in this step.

Repository readiness findings:

- Git is initialized on `main`; zero commits, zero tracked/staged files and no
  remote. All 80 baseline candidate files are currently untracked. This is an
  understood pre-baseline tree, not a claim of a clean committed working tree.
- `.gitignore` correctly excludes `node_modules`, `.next`, `.netlify`, `out`,
  coverage, pnpm store, generated Next/TypeScript files, `.env*`, private key files,
  logs and OS artifacts. Checked representative paths with `git check-ignore`.
- No local environment/credential files or temporary QA captures appear among
  baseline candidates. QA scripts/results/screenshots remain in OS temporary
  storage outside the repository; referenced evidence paths are historical records.
- Filename inspection and targeted scans for common token/private-key patterns
  and credential assignments found no suspicious secrets. This is a limited
  repository check, not a comprehensive security guarantee.
- No large accidental files: largest candidate is `pnpm-lock.yaml` (133,626 bytes),
  followed by the required production cover (113,732 bytes). Official tool SVGs
  are small local assets with source documentation. Required production assets
  are not ignored. Existing fixture assets remain intentional source/test data.
- No `.gitignore` change was necessary. No staging, commit, remote configuration,
  push, CI setup, GitHub creation or deployment performed.

Future truthful initial Portfolio v1 baseline should include:

1. Application routes/styles and reusable shell/UI/content components (`app/`,
   `components/`), including the retained parked Updates implementation.
2. Production content, models/validators/helpers and existing tests/fixtures
   (`content/` and component tests).
3. Local production cover, tool visuals, neutral fallbacks, provenance README and
   retained fixture assets (`public/`, including its harmless existing `.gitkeep`).
4. README and project documentation/history (`docs/`), plus `AGENTS.md` and
   `CLAUDE.md` project instructions.
5. Package manifest, pnpm lockfile/workspace config, Node version, TypeScript,
   ESLint, Next and existing Netlify configuration, `.gitignore`, `.gitattributes`.

Keep generated/dependency files, credentials, local logs and temporary QA evidence
excluded. Do not fabricate historical commits: the future initial commit should
capture the actual existing Portfolio v1 baseline. No repository-content blocker
was found for that future authorized step; human acceptance of Step 25 is pending.

### Step 26 — Git Baseline + GitHub Handoff

Status: COMPLETE (2026-09-24). Human review: PENDING. Deployment: NOT STARTED.

Pre-commit safety gate and verification:

- Inspected the complete 80-file baseline candidate list and Git/ignore status.
  App/components/content, tests, documentation/instructions, configuration and all
  production assets are included; retained fixtures remain intentional.
- Dependencies, generated builds/types, environment/private-key files, local logs
  and temporary QA/browser evidence are excluded. No accidental local/session data
  or unexpectedly large files found; largest file is the 133,626-byte lockfile.
- Repeated focused credential/private-key/token/authorization-header scanning and
  sensitive filename inspection: no suspicious findings. No credentials printed
  or saved. This is a focused check, not a comprehensive security review.
- `pnpm test` (15/15), `pnpm typecheck`, `pnpm lint`, `pnpm build`: PASSED.
- Git Credential Manager's existing authorization verified non-interactively as
  `IrynaHaponenko-dot`. GitHub CLI is absent; authenticated HTTPS/API access is
  available. GitHub API confirmed `devjourney` does not exist on that account.
- Complete staged list inspected before commit: exactly 80 intended files; no
  ignored/generated or sensitive files. Production assets present.

Baseline and GitHub result:

- Initial commit: `3ffb3f52f9e58b8d58c6bc45a85e3e889d7b0872`
  — `Initial Portfolio v1 baseline`, on `main`. No fabricated historical commits.
- Created a new empty PUBLIC repository (without separate README/license history):
  https://github.com/IrynaHaponenko-dot/devjourney.
- Origin: `https://github.com/IrynaHaponenko-dot/devjourney.git`.
- Push succeeded; `main` tracks `origin/main`. GitHub API confirmed remote main
  contains the exact baseline hash and repository visibility is public.
- Remote tree verified: all 80 intended files, README, source directories and
  production assets present; dependencies, generated output, local files and
  credential artifacts absent. It matches the inspected local baseline.
- Working tree was clean after the baseline push. One authorized follow-up
  documentation commit records this verified result and actual repository link;
  no application content or visual design changes.
- README and current PROJECT/ARCHITECTURE descriptions now reflect the completed
  GitHub handoff. No remaining handoff blocker identified; human review pending.
- No deployment, releases, tags, Pages, Actions, Issues or Projects created.

## 08 — Content Production

Status: Portfolio v1 production content COMPLETE and APPROVED through Step 24
(2026-09-24); human review PASSED. Home, Workflow, Toolkit and the single production
article are accepted. Additional articles/content expansion remain PARKING.

Use:

`08 — CONTENT PRODUCTION`

First objective:

create one complete production reference article — COMPLETE and APPROVED (2026-09-24).
The accepted article is the current content-quality reference for DevJourney.

---

## 09 — Final QA

Status: NOT STARTED

Will include:

- functional QA;
- visual QA;
- responsive QA;
- content QA;
- accessibility checks;
- production checks.

---

## 10 — Deployment

Status: NOT STARTED

Target:

Netlify

Source:

GitHub

---

## 11 — Portfolio / Retrospective

Status: NOT STARTED

Final outputs:

- deployed product;
- portfolio case;
- project retrospective;
- problem/development log;
- reusable prompt workflow;
- Developer Playbook.

---

# Current Next Step

Review Step 26 — Git Baseline + GitHub Handoff. Human review is PENDING.
Deployment and the next implementation step are NOT STARTED.
Preserve the approved
Portfolio v1 scope and visual richness in all subsequent content work.
