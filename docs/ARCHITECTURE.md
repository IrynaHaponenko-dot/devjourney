# ARCHITECTURE

## 1. Architecture Status

**Status:** APPROVED  
**Project:** DevJourney  
**Architecture:** Frontend-first, content-driven  
**Backend:** Not required for MVP

Current implementation (2026-09-24): Next.js App Router, React, TypeScript,
CSS Modules, local validated content and small interactive client components.
See README for exact package versions and commands. GitHub and Netlify below are
planned repository/hosting targets, not completed integrations. Portfolio v1
publishes Home, Workflow, Toolkit and Articles; Updates routes remain parked fixtures.

---

# 2. Technology Stack

## CONFIRMED

- Next.js
- TypeScript
- Git
- GitHub
- Netlify

Development environment:

- VS Code
- Codex / AI-assisted development

---

# 3. Architecture Principle

DevJourney uses a content-driven architecture.

The application consists of three primary layers:

CONTENT  
↓  
REUSABLE TEMPLATES & COMPONENTS  
↓  
ROUTES / PAGES

Content must remain separated from presentation logic.

Adding a new article, tool or update should not require creating a completely new page implementation.

---

# 4. Application Structure

Conceptual structure:

```text
DevJourney
│
├── app
│   ├── pages/routes
│   └── reusable layouts
│
├── components
│   ├── UI
│   ├── navigation
│   ├── content
│   └── shared sections
│
├── content/data
│   ├── articles
│   ├── tools
│   └── updates
│
├── public
│   └── assets
│
└── docs
    └── source of truth
```

Exact folder structure may be refined during Implementation Planning.

Do not introduce additional architectural layers without a demonstrated need.

---

# 5. Content Architecture

Three primary reusable content types exist in the MVP:

## Tool

Tool data  
→ Tool Detail Template  
→ Tool page

## Article

Article data  
→ Article Detail Template  
→ Article page

## Update

Update data  
→ Update Detail Template  
→ Update page

Example:

```text
Article record
        ↓
Article Detail Template
        ↓
/articles/how-to-start-ai-project
```

The UI must not hard-code individual articles into separate implementations.

---

# 6. Content Source

## MVP

Content is stored locally in structured project content/data.

Exact storage format will be defined in DATA_MODELS and CONTENT_SYSTEM.

Possible implementation formats may include structured TypeScript data or content files.

The final format must support:

- reusable templates;
- metadata;
- images/assets;
- structured content;
- practical examples;
- future migration.

## FUTURE

The content source may later be replaced by:

- CMS;
- external API;
- database;
- AI-assisted content pipeline.

Frontend templates should not require complete redesign when the content source changes.

---

# 7. Backend Decision

## MVP

No dedicated backend.

Do not create:

- NestJS API;
- custom server;
- database;
- authentication service;
- admin backend.

Reason:

Current MVP is primarily an information/content product and does not require server-side business logic.

A backend may be introduced only when a real product requirement requires it.

---

# 8. Routing

Next.js handles application routing.

Primary route groups:

- Home
- Workflow
- Toolkit
- Tool Detail
- Articles
- Article Detail
- AI Updates
- Update Detail

Exact URLs are defined in ROUTES.md.

---

# 9. Components

Components should be reusable where repetition exists.

Expected component categories:

## Global

- Header
- Footer
- Navigation
- Container
- Section
- Button
- Card

## Content

- ArticleCard
- ToolCard
- UpdateCard
- CodeBlock
- PromptBlock
- Callout
- Checklist
- ContentImage
- TableOfContents

## Page-specific

Page-specific components are allowed when they represent unique sections.

Do not create abstractions merely to make the architecture appear more complex.

---

# 10. Assets

Production assets may include:

- generated illustrations;
- screenshots;
- diagrams;
- tool logos/icons;
- UI illustrations;
- content images.

Assets must be optimized before production use.

Large original/source assets do not need to be stored inside the Git repository when they are not required by the application.

Production-ready optimized assets may be stored in the project's public asset structure.

Each meaningful content image should support appropriate alt text.

---

# 11. Styling

The implementation must follow the approved visual prototypes and DESIGN_SYSTEM.md.

Visual prototypes are visual targets.

They are not automatic functional requirements.

Features accidentally visible in generated prototypes must not be implemented unless they are confirmed in project documentation.

---

# 12. Responsive Architecture

Responsive behavior is required.

Primary consideration:

- desktop;
- tablet/intermediate widths;
- mobile.

Mobile is not treated as a scaled-down desktop screenshot.

Navigation, grids, typography, Table of Contents and content layouts may adapt according to available space.

---

# 13. Accessibility

Implementation should support:

- semantic HTML;
- keyboard navigation;
- visible focus states;
- sufficient color contrast;
- meaningful heading hierarchy;
- usable tap targets;
- image alt text;
- reduced-motion considerations where relevant.

---

# 14. Documentation

The `/docs` directory is the project source of truth.

Planned documents:

- PROJECT.md
- ARCHITECTURE.md
- ROUTES.md
- DATA_MODELS.md
- DESIGN_SYSTEM.md
- CONTENT_SYSTEM.md
- DECISIONS.md
- PROGRESS.md

Codex must consult relevant documentation before implementing a task.

If implementation and documentation conflict, the conflict must be reported instead of silently inventing a solution.

---

# 15. AI-Assisted Development Rule

AI may:

- analyze;
- suggest;
- generate code;
- refactor;
- help debug;
- generate tests;
- explain implementation.

The developer remains responsible for:

- product decisions;
- architecture decisions;
- approving changes;
- reviewing code;
- validating behavior;
- testing;
- final acceptance.

Principle:

**AI helps. Developer decides.**

---

# 16. Development Workflow

Implementation is performed in small reviewed steps.

For each task:

READ DOCS  
→ INSPECT REPOSITORY  
→ IMPLEMENT ONE STEP  
→ CHECK/TEST  
→ UPDATE PROGRESS  
→ REPORT  
→ HUMAN REVIEW

Codex must not automatically continue to unrelated implementation steps.

---

# 17. Deployment Architecture

Source code:

GitHub

Production deployment:

Netlify

Conceptual flow:

```text
VS Code / Codex
       ↓
      Git
       ↓
     GitHub
       ↓
     Netlify
       ↓
 DevJourney Production
```

GitHub is the primary remote source repository.

The local development copy may be recreated from the repository when required.

---

# 18. Experimental Track

GPT Sites may be tested separately using the same DevJourney specification and visual direction.

Purpose:

- compare development speed;
- compare visual accuracy;
- compare developer control;
- compare maintainability;
- understand appropriate use cases.

GPT Sites is not the primary production architecture for this MVP.

---

# 19. Architecture Constraints

Avoid unnecessary complexity.

Do not introduce without an approved requirement:

- backend;
- database;
- Docker;
- authentication;
- state-management framework;
- complex CMS;
- microservices;
- unnecessary dependencies.

Prefer the simplest architecture that correctly supports the approved product.

---

# 20. Current Architecture Decision

**ADR-001**

DevJourney MVP will use:

**Next.js + TypeScript + content-driven architecture + GitHub + Netlify.**

Dedicated backend is excluded from MVP.

GPT Sites is retained as a separate experimental track.
