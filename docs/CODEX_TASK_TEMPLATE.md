# CODEX TASK TEMPLATE

Use this template for implementation tasks in the DevJourney project.

---

# ROLE

Act as an implementation developer working inside an existing documented project.

Follow the approved project documentation and current repository state.

Do not redesign the product or architecture unless explicitly requested.

---

# 1. CONTEXT

Project:

**DevJourney**

Development approach:

**AI-assisted development with human review.**

Core principle:

**AI helps. Developer decides.**

This task is one step in an approved implementation plan.

---

# 2. GOAL

Task:

`[STEP NUMBER — STEP NAME]`

Goal:

`[Describe the concrete result expected from this step.]`

Implement only the scope required for this task.

---

# 3. READ FIRST

Before changing code:

1. inspect the current repository;
2. read `docs/PROGRESS.md`;
3. read `docs/IMPLEMENTATION_PLAN.md`;
4. read all documentation relevant to this task.

Relevant documents may include:

- `PROJECT.md`
- `ARCHITECTURE.md`
- `ROUTES.md`
- `DATA_MODELS.md`
- `DESIGN_SYSTEM.md`
- `CONTENT_SYSTEM.md`
- `DECISIONS.md`

Do not assume repository structure or existing implementation without inspecting it.

---

# 4. SOURCE OF TRUTH

Approved project documentation is the source of truth for requirements and architecture.

Existing code is the source of truth for the current implementation state.

If documentation and implementation conflict:

STOP and report:

`SOURCE OF TRUTH CONFLICT`

Explain the conflict before making a major assumption.

---

# 5. SCOPE

Implement:

`[Exact allowed scope.]`

Modify only files necessary for the current task.

Reuse existing:

- architecture;
- components;
- utilities;
- types;
- styles;
- patterns;

when appropriate.

---

# 6. DO NOT

Do not:

- implement future steps;
- add unrequested features;
- change approved architecture silently;
- introduce unnecessary dependencies;
- duplicate existing components or utilities without checking;
- replace working project patterns without a reason;
- create placeholder functionality that looks complete but does not work;
- hide errors in order to make checks appear successful.

---

# 7. IMPLEMENTATION

Work in small logical changes.

Prefer:

- readable code;
- clear naming;
- simple architecture;
- reusable existing patterns;
- accessibility;
- responsive behavior;
- type safety.

Avoid premature abstraction.

If a new abstraction is necessary, explain why.

## RISK-BASED DECISION AND REVIEW RULE

For small, local, easily reversible implementation details that are already consistent with the approved documentation, use the simplest reasonable implementation and report the decision afterward.

Do not stop merely for minor implementation choices.

STOP and request human decision when the task involves:

- source-of-truth conflict;
- architecture change;
- product or scope change;
- new dependency;
- tooling/configuration change outside the explicit task;
- security concern;
- significant accessibility issue;
- significant design decision not covered by approved documentation;
- destructive or difficult-to-reverse change;
- missing input that materially affects the result;
- blocking error.

Human review is risk-based:

- routine implementation with passed automated checks may receive summary-level review;
- architecture, configuration, data models, routing, security, accessibility, new logic, first implementations of important templates, deviations, and warnings require deeper review;
- visual milestones require browser/screenshot review.

This rule does not permit changing approved requirements or expanding scope.

---

# 8. DESIGN TASKS

When implementing approved UI:

Use together:

1. approved visual prototype;
2. `DESIGN_SYSTEM.md`;
3. relevant Page Visual Specification.

Do not redesign the approved visual direction.

When visual implementation is complete, prepare it for screenshot-based comparison.

---

# 9. CONTENT TASKS

Follow:

- `DATA_MODELS.md`;
- `CONTENT_SYSTEM.md`.

Do not treat demo content as approved production content.

Do not introduce a new content structure without reporting the need first.

---

# 10. SECURITY

Do not expose or commit:

- passwords;
- API keys;
- tokens;
- credentials;
- private information.

Do not introduce unsafe rendering of untrusted executable content.

If the task introduces a new security-sensitive feature, report it before implementation.

---

# 11. CHECKS

Run checks relevant to the task.

Where available, include:

- TypeScript/typecheck;
- lint;
- tests;
- production build;
- relevant route/page verification.

Do not claim a check passed unless it was actually run successfully.

If a check cannot be run, state why.

---

# 12. DOCUMENTATION

After successful implementation:

update `docs/PROGRESS.md`.

Update other documentation only if the approved project state has genuinely changed.

Do not silently rewrite architecture documentation to match an accidental implementation.

---

# 13. REPORT

Return a concise implementation report containing:

## Completed

What was implemented.

## Files

Files created or changed.

## Checks

Commands/checks executed and results.

## Issues

Remaining errors, warnings, uncertainties or limitations.

## Documentation

Documentation updated.

## Next

State the next approved implementation step.

---

# 14. STOP CONDITIONS

Stop and report instead of guessing if you encounter:

`SOURCE OF TRUTH CONFLICT`

`ARCHITECTURE DECISION REQUIRED`

`CONTENT MODEL GAP`

`MISSING REQUIRED INPUT`

`SECURITY CONCERN`

`BLOCKING ERROR`

Explain:

- what happened;
- why it blocks safe implementation;
- affected area;
- possible options where appropriate.

---

# 15. END RULE

After completing and reporting the requested task:

**STOP.**

Wait for human review.

Do not automatically begin the next implementation step.
