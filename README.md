# DevJourney

DevJourney is a practical learning and portfolio project about controlled
AI-assisted web development. Its Ukrainian-language website demonstrates a path
from idea and scope through design, implementation, testing and deployment preparation.

**AI helps. Developer decides.**

## Portfolio v1

Public scope: **Home · Workflow · Toolkit · Articles**.

- A production six-stage Workflow.
- A six-tool Toolkit with concise usage guidance and official resources.
- One approved article: **«Як правильно почати AI-assisted вебпроєкт»**, at
  `/articles/how-to-start-ai-project`, with a production cover, TOC and Back to Top.
- AI Updates is parked, not part of the public Portfolio v1 offering.

## Why this project exists

The project explores how AI can accelerate development while a human remains
responsible for requirements, product decisions, review and the final result.
It is currently a Practice / Prove portfolio reference project, not a course.
The future working hypothesis is Learn → Practice → Prove → Client; expansion
requires a separate decision after completing the current site.

## Target user

Learners and early-stage developers with basic HTML, CSS and JavaScript knowledge
who want a controlled process for building understandable, testable and deployable
web projects with AI assistance.

## Current Workflow

**Idea & Goal → Scope → Design → Build with AI → Test & Review → Deploy & Prove**

Each stage distinguishes the task, AI assistance, human responsibility and expected result.

## Toolkit

ChatGPT, Codex, VS Code, GitHub, Figma and Netlify. Tools are selected for the task;
not every project requires every tool. Official marks are informational, not an
endorsement. [Asset sources and display decisions](public/images/tools/README.md)
document four official logos and the neutral ChatGPT/Codex visuals.

## Tech stack

Versions below match `package.json`:

- Next.js **16.3.5**, App Router; React / React DOM **19.3.0**.
- TypeScript **6.0.3**, CSS Modules and shared CSS design tokens.
- Local TypeScript content with custom runtime validators; no CMS or Zod dependency.
- Node.js **24.x**, pnpm **12.4.1**; ESLint **9.39.5**.
- Node's built-in test runner, TypeScript transpilation in test helpers, and Next's
  installed image tooling for cover validation; no separate test framework.
- Existing Netlify build configuration; deployment and GitHub connection are pending.

## Project structure

```text
app/          Routes, reusable detail pages, global styles and design tokens
components/   Shell, UI primitives, content renderer and interactive controls
content/      Models, validators, heading helpers, collections, article source and tests
docs/         Product/design/architecture decisions and implementation history
public/       Local production images, official tool assets and retained fixtures
```

Content is validated before reusable server-rendered pages consume it. Small client
components handle navigation and Back to Top. Detail routes use exact request-time
slug lookup and `notFound()`; they are dynamic, so this is not a static-export site.
There is no authentication, database, payment flow or CMS in this version.

Start with [PROJECT](docs/PROJECT.md), [ARCHITECTURE](docs/ARCHITECTURE.md),
[ROUTES](docs/ROUTES.md), [CONTENT_SYSTEM](docs/CONTENT_SYSTEM.md) and
[PROGRESS](docs/PROGRESS.md). Historical entries describe the state at that time;
the current-status section records the latest acceptance.

## Local development

Install Node.js 24.x and pnpm 12.4.1 (`.node-version`, `engines` and `packageManager`
record these requirements). No environment variables or credentials are required
to run the current site.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

```sh
pnpm test
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

`pnpm test` runs the existing 15 tests across the content renderer, collections and
validators. `typecheck` generates Next route types before TypeScript checking.
`pnpm start` serves the production build; run it after `pnpm build` and stop the
development server first if it occupies port 3000.

## Quality checks

Automated tests cover content contracts, invalid input and unsafe URLs, record
relationships, HTML escaping, content rendering, heading anchors, publication
selection and production cover decoding. Typecheck, lint and production build pass.

Recorded browser QA covers 320, 390, 768, 1024 and 1440px layouts, image loading,
overflow, keyboard/focus, reduced motion, TOC and Back to Top. Route checks verify
the published article and 404 responses for the two unpublished demo slugs.
Primary automation used headless Edge; human browser reviews accepted the
production content through Step 24. Evidence and limitations are recorded in
[PROGRESS](docs/PROGRESS.md); temporary QA scripts/screenshots are not committed.

Physical-device and screen-reader testing have not been performed. Dependency
auditing is not a comprehensive security review, and external specialist review
has not yet been completed. Local checks do not verify the hosted deployment.

## AI-assisted development

The human defines goals, approves scope, owns product/visual decisions, reviews
results and accepts or rejects changes. AI assistants help research and structure
work, implement bounded tasks, run technical checks, identify issues and maintain
documentation. Work advances through explicit review steps; AI output is reviewed
rather than assumed correct. This was not an autonomously generated project.

## Content / fixture boundary

`content/demo.ts` is a legacy collection filename containing both production data
and fixtures. `publicArticles` explicitly selects the approved article for listing,
detail metadata, Home and related links. The other two article records remain for
tests but return 404 and are not publicly published.

AI Updates is parked and absent from Home/navigation. Its existing `/updates`
routes remain technically reachable with explicitly labeled demo data; they are
not production news. The parked routes have not been disabled in this scope.

## Known limitations / parking

- AI Updates, additional articles and course/content expansion are parked.
- Official ChatGPT/Codex visual polish is parked; neutral visuals are accepted
  for Portfolio v1 and are not a release blocker.
- Physical-device, screen-reader and external developer review remain pending.
- Netlify hosting, direct-route behavior and production runtime still need hosted verification.

## Status

As of **2026-09-24**, Portfolio v1 production content is accepted and local
engineering checks pass. Repository/release preparation is in progress.
Git is initialized on `main`, with no commits or remote configured yet. The future
first commit should truthfully capture the existing Portfolio v1 baseline, not
reconstruct an artificial step-by-step history.

GitHub repository: **pending**. Live site: **pending; deployment not yet verified**.
The existing `netlify.toml` specifies `pnpm build` and `.next`; configuration alone
does not establish a working deployment.
