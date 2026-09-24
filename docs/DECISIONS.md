# DECISIONS

## 1. Purpose

This document records significant product, architecture and development decisions for DevJourney.

Each important decision should explain:

- context;
- decision;
- reason;
- consequences;
- status.

The purpose is to preserve not only WHAT was chosen, but WHY.

---

# ADR-001 — Production Architecture

**Status:** APPROVED

## Context

DevJourney is primarily a content-driven information portal.

The MVP does not require authentication, transactions, user accounts, complex server-side business logic or a database.

## Decision

Use:

- Next.js;
- TypeScript;
- content-driven architecture;
- GitHub;
- Netlify.

Do not create a dedicated backend for MVP.

## Reason

This architecture supports the approved product while avoiding unnecessary complexity.

It also provides practical experience with real frontend architecture, Git workflow, deployment and AI-assisted development.

## Consequences

Positive:

- simpler architecture;
- fewer dependencies;
- easier deployment;
- lower maintenance;
- strong learning value.

Limitation:

Features requiring persistent server-side data may require architecture changes in the future.

---

# ADR-002 — GPT Sites

**Status:** APPROVED AS EXPERIMENTAL

## Context

GPT Sites can provide a faster AI-assisted website creation workflow.

However, a major DevJourney learning goal is understanding the complete development process.

## Decision

Do not use GPT Sites as the primary production architecture.

Retain it as a separate experiment.

## Reason

The production project should expose:

- project structure;
- components;
- data models;
- Git;
- debugging;
- testing;
- deployment;
- code review.

## Future Experiment

The same DevJourney specification may later be implemented with GPT Sites and compared against the primary implementation.

---

# ADR-003 — Content-Driven Architecture

**Status:** APPROVED

## Context

DevJourney will contain multiple Articles, Tools and AI Updates.

Creating a separate UI implementation for every content item would create unnecessary duplication.

## Decision

Separate content/data from reusable UI templates.

Use reusable:

- Tool Detail;
- Article Detail;
- Update Detail.

## Reason

New content should be addable without rebuilding page layouts.

## Consequences

Content models and validation become important parts of the architecture.

---

# ADR-004 — Structured Content Blocks

**Status:** APPROVED

## Context

Production articles require more than plain text.

They may contain:

- images;
- prompts;
- code;
- checklists;
- callouts;
- diagrams.

## Decision

Represent long-form content as structured `ContentBlock[]`.

## Reason

Structured blocks allow reusable rendering and consistent presentation.

## Consequences

Each supported block type requires a corresponding renderer/component.

New block types must be introduced intentionally.

---

# ADR-005 — No Dedicated Backend in MVP

**Status:** APPROVED

## Context

No current MVP requirement requires a custom server, database or server-side business workflow.

## Decision

Do not introduce:

- NestJS;
- database;
- authentication service;
- custom API.

## Reason

Architecture should follow product requirements rather than anticipated complexity.

## Revisit When

Consider backend architecture when the product requires features such as:

- user accounts;
- saved user data;
- comments;
- admin workflows;
- private content;
- complex integrations;
- server-side automation.

---

# ADR-006 — Visual Prototype as Target

**Status:** APPROVED

## Context

Major DevJourney screens have approved visual prototypes.

AI implementation can drift from visual references if instructions remain subjective.

## Decision

Use:

1. approved visual prototype;
2. DESIGN_SYSTEM.md;
3. Page Visual Specification;
4. screenshot comparison.

## Reason

This creates a repeatable visual QA process.

## Rule

A functional page is not automatically visually approved.

---

# ADR-007 — Production Content Separate from Demo Content

**Status:** APPROVED

## Context

Visual prototypes and early development require sample content.

The final website must contain useful production material rather than placeholder content.

## Decision

Clearly distinguish:

- DEMO;
- DRAFT;
- REVIEW;
- APPROVED;
- PUBLISHED.

Production content follows the Content Production workflow.

## Reason

Demo material must not accidentally become public production content.

---

# ADR-008 — One Reference Article First

**Status:** APPROVED

## Context

Creating many articles before proving the content system could multiply structural and editorial problems.

## Decision

Create one complete production-ready reference article first.

Process:

BRIEF  
→ DRAFT  
→ REVIEW  
→ ASSETS  
→ STRUCTURED CONTENT  
→ INTEGRATION  
→ QA  
→ APPROVAL

## Reason

The first approved article establishes the quality and structure standard for later content.

---

# ADR-009 — GitHub as Remote Source Repository

**Status:** APPROVED

## Context

Local device storage is limited and the project should not depend on one computer.

## Decision

Use GitHub as the primary remote repository.

Local development copies may be recreated when necessary.

## Reason

This provides:

- backup;
- version history;
- portability;
- deployment integration;
- safer development workflow.

## Note

Large source assets that are not required by the application should not be stored unnecessarily in the repository.

---

# ADR-010 — Security by Design

**Status:** APPROVED

## Context

AI-assisted development can generate code and content quickly, but generated output must not be assumed safe.

## Decision

Security considerations must be included during architecture, content design and implementation rather than postponed until the end.

## Rules

Do not expose:

- passwords;
- API keys;
- tokens;
- credentials;
- private information.

Validate external or AI-generated data before trusting it.

Do not render arbitrary executable content from untrusted sources.

Future features involving authentication, personal data, payments or databases require a dedicated security review.

---

# ADR-011 — Human Approval Controls AI Development

**Status:** APPROVED

## Context

Codex may implement tasks faster than a human developer, but uncontrolled implementation can introduce architecture drift and unwanted features.

## Decision

Development follows:

READ DOCS  
→ INSPECT REPOSITORY  
→ IMPLEMENT ONE STEP  
→ TEST/CHECK  
→ UPDATE PROGRESS  
→ REPORT  
→ HUMAN REVIEW

Codex must not automatically continue into unrelated steps.

## Principle

**AI helps. Developer decides.**

---

# ADR-012 — Change Control

**Status:** APPROVED

## Context

Product requirements, design and architecture may change during development.

Changing code without updating the source of truth creates inconsistency.

## Decision

When an approved decision changes:

1. identify affected areas;
2. assess impact;
3. update relevant source-of-truth documentation;
4. update implementation;
5. test affected behavior;
6. perform review.

## Principle

Do not allow documentation and implementation to silently diverge.

---

# ADR-013 — Mobile as First-Class Experience

**Status:** APPROVED

## Decision

Mobile must be intentionally designed and tested.

Do not treat mobile as a scaled desktop layout.

## Reason

Navigation, content width, typography, images, code blocks, grids and Table of Contents require different behavior on smaller screens.

---

# ADR-014 — Keep MVP Small

**Status:** APPROVED

## Context

DevJourney is an educational portfolio project intended to reach production.

## Decision

Do not add features merely because they are technically interesting or appear in generated prototypes.

Current exclusions include:

- authentication;
- accounts;
- comments;
- admin panel;
- site search;
- complex CMS;
- newsletter system;
- automatic publishing;
- dedicated backend.

## Principle

Finish a coherent small product before expanding it.

---

# ADR-015 — Official Project Name

**Status:** APPROVED

## Decision

Official project name:

**DevJourney**

The name may be used consistently in:

- UI;
- metadata;
- documentation;
- repository naming where appropriate;
- portfolio case.

---

# Decision Change Rule

An ADR should not be silently rewritten when a major approved decision changes.

For significant changes:

- document the new decision;
- indicate which previous decision it replaces or modifies;
- explain why the change occurred.

This preserves the project's reasoning history.
