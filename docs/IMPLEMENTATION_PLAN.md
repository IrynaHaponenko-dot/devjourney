# IMPLEMENTATION PLAN

## 1. Purpose

This document defines the implementation sequence for DevJourney.

Development must proceed in small, reviewable steps.

Each step should leave the project in a working state.

---

# 2. Development Rule

For every implementation step:

READ RELEVANT DOCS  
→ INSPECT CURRENT REPOSITORY  
→ IMPLEMENT ONE STEP  
→ RUN CHECKS  
→ REVIEW RESULT  
→ UPDATE PROGRESS  
→ REPORT  
→ HUMAN APPROVAL

Do not automatically continue to the next step.

---

# 3. Implementation Sequence

## Step 01 — Project Setup

Create the DevJourney project foundation.

Includes:

- Next.js;
- TypeScript;
- package manager configuration;
- Git repository;
- basic project structure;
- `/docs`;
- initial README;
- basic scripts.

Checks:

- development server starts;
- production build succeeds;
- TypeScript check succeeds.

---

## Step 02 — Design System Foundation

Implement approved design tokens and global styling.

Includes:

- colors;
- typography;
- spacing;
- containers;
- radius;
- shadows;
- focus states;
- responsive foundations;
- reduced-motion foundation.

Reference:

`DESIGN_SYSTEM.md`

---

## Step 03 — Core UI Primitives

Create reusable foundational components.

Initial components:

- Container;
- Section;
- Button;
- Card;
- basic typography helpers where needed.

Do not create unnecessary abstractions.

---

## Step 04 — Application Shell

Implement:

- Header;
- primary navigation;
- mobile navigation;
- Footer;
- main page container;
- accessibility foundations.

Checks:

- keyboard navigation;
- mobile menu;
- focus states;
- responsive shell.

---

## Step 05 — Content Models & Validation

Implement the approved content contracts.

Includes:

- Article;
- Tool;
- AIUpdate;
- WorkflowStage;
- ImageAsset;
- ContentBlock types.

Add validation for production content.

Reference:

`DATA_MODELS.md`

---

## Step 06 — Content Renderer

Implement reusable rendering for supported content blocks.

Initial support:

- paragraph;
- heading;
- image;
- code;
- prompt;
- callout;
- checklist.

Unknown block types must not fail silently.

---

## Step 07 — Demo Content Dataset

Create a small structured dataset for development.

Purpose:

- test templates;
- test routing;
- test content blocks;
- test visual layouts.

Demo content must be clearly marked as non-production content.

---

## Step 08 — Home Page

Implement Home according to:

- approved prototype;
- DESIGN_SYSTEM.md;
- Page Visual Specification.

Use realistic demo content.

After functional implementation:

perform first screenshot-based visual QA.

---

## Step 09 — Workflow Page

Implement the six approved workflow stages:

Idea  
→ Discovery  
→ Design  
→ Code  
→ Test  
→ Deploy

Use reusable components where appropriate.

---

## Step 10 — Toolkit Listing

Implement:

`/toolkit`

Render tools from structured data.

Do not hard-code individual tool cards directly into the page.

---

## Step 11 — Tool Detail

Implement:

`/toolkit/[slug]`

Use one reusable Tool Detail template.

Requirements:

- valid slug renders corresponding tool;
- invalid slug returns Not Found;
- related content supported where available.

Use Codex as the representative visual QA content item.

---

## Step 12 — Articles Listing

Implement:

`/articles`

Render Article cards from structured content data.

---

## Step 13 — Article Detail

Implement:

`/articles/[slug]`

Includes:

- article metadata;
- cover asset;
- structured content;
- Table of Contents;
- related articles;
- responsive long-form layout.

Invalid slug:

Not Found.

---

## Step 14 — AI Updates Listing

Implement:

`/updates`

Render updates from structured data.

---

## Step 15 — Update Detail

Implement:

`/updates/[slug]`

Use reusable Update Detail template.

Includes:

- metadata;
- structured content;
- source where relevant;
- Table of Contents;
- related updates.

Invalid slug:

Not Found.

---

## Step 16 — Responsive QA

Review all primary pages at representative widths.

Check:

- navigation;
- grids;
- typography;
- spacing;
- images;
- cards;
- content width;
- code blocks;
- prompt blocks;
- Table of Contents;
- touch targets.

Fix systemic problems in reusable components before adding page-specific fixes.

---

## Step 17 — Visual QA

Compare implemented pages against approved visual prototypes.

Process:

IMPLEMENTED PAGE  
→ SCREENSHOT  
→ PROTOTYPE COMPARISON  
→ DIFFERENCE LIST  
→ CORRECTION  
→ RECHECK  
→ APPROVAL

Prioritize:

- proportions;
- hierarchy;
- spacing;
- typography;
- color;
- imagery;
- component consistency.

---

## Step 18 — Accessibility & Technical QA

Review:

- semantic HTML;
- heading hierarchy;
- keyboard navigation;
- focus states;
- alt text;
- contrast;
- reduced motion;
- broken links;
- Not Found behavior;
- console errors;
- TypeScript;
- production build.

---

## Step 19 — Production Content Reference

Create and integrate one complete production article using the approved Content Production workflow.

Process:

BRIEF  
→ CONTENT  
→ ASSETS  
→ REVIEW  
→ STRUCTURED DATA  
→ INTEGRATION  
→ QA  
→ APPROVAL

Use this article as the reference standard for later content.

---

## Step 20 — Production Content

Replace remaining demo content with reviewed production content.

Content should use existing templates and models.

If new content requires a structural change, report the gap before changing architecture.

---

## Step 21 — Final QA

Perform complete product review:

- functionality;
- visuals;
- responsive behavior;
- content;
- accessibility;
- metadata;
- links;
- assets;
- production build.

No known critical issue should remain before deployment.

---

## Step 22 — Deployment

Push approved production state to GitHub.

Deploy through Netlify.

Verify the production environment separately from local development.

---

## Step 23 — Production Verification

After deployment verify:

- primary routes;
- dynamic routes;
- assets;
- mobile layout;
- navigation;
- metadata;
- external links;
- Not Found;
- console/runtime errors.

Deployment success does not automatically mean production verification success.

---

## Step 24 — Portfolio Case & Retrospective

Document:

- project goal;
- problem;
- process;
- architecture;
- AI-assisted workflow;
- screenshots;
- important decisions;
- problems encountered;
- solutions;
- lessons learned;
- production link;
- repository information where appropriate.

Create/update the Development Problem Log.

---

# 4. Codex Scope Rule

Codex receives one implementation step at a time.

Each task must define:

- goal;
- relevant documentation;
- allowed scope;
- required checks;
- documentation update;
- expected report.

Codex should not implement future steps unless explicitly requested.

---

# 5. Failure Rule

If a step fails:

STOP  
→ IDENTIFY ERROR  
→ DIAGNOSE  
→ FIX CURRENT STEP  
→ RECHECK

Do not hide an unresolved problem by continuing with later features.

Meaningful problems and solutions should be recorded for the project retrospective.

---

# 6. Architecture Change Rule

If implementation requires changing an approved architectural decision:

STOP.

Report:

**ARCHITECTURE DECISION REQUIRED**

Explain:

- current limitation;
- proposed change;
- affected areas;
- benefits;
- risks.

Implementation continues only after review.

---

# 7. Definition of Done for a Step

A development step is complete only when:

- requested scope is implemented;
- required checks pass;
- no known blocking error remains;
- relevant documentation is updated;
- Codex reports what changed;
- human review accepts the result.

---

# 8. Current Next Action

Prepare the repository and documentation for:

**Step 01 — Project Setup**

Production feature development has not started yet.
