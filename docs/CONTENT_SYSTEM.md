# CONTENT SYSTEM

## 1. Purpose

This document defines how content is created, structured, reviewed, stored and published in DevJourney.

The content system must support reusable production content without requiring a new UI implementation for every Article, Tool or AI Update.

Core principle:

**Content changes. Templates remain reusable.**

---

# 2. Content Types

DevJourney MVP contains three primary reusable content types:

- Article
- Tool
- AI Update

Supporting structured content includes:

- Workflow Steps
- Images
- Screenshots
- Diagrams
- Prompts
- Code Examples
- Checklists
- Callouts

Data structure for these types is defined in `DATA_MODELS.md`.

---

# 3. Content Lifecycle

Production content follows this lifecycle:

IDEA  
→ CONTENT BRIEF  
→ DRAFT  
→ REVIEW  
→ ASSET PLAN  
→ ASSET CREATION  
→ FINAL CONTENT  
→ STRUCTURED DATA  
→ INTEGRATION  
→ CONTENT QA  
→ APPROVED  
→ PUBLISHED

Do not treat an initial AI-generated draft as published production content.

---

# 4. Content Status

Content should have a clear working status during production.

Recommended statuses:

- DEMO
- DRAFT
- REVIEW
- APPROVED
- PUBLISHED

Demo content must never be mistaken for verified production content.

---

# 5. Content Brief

Before creating a substantial production material, define:

- topic;
- target audience;
- user problem;
- content goal;
- expected user outcome;
- structure;
- required examples;
- required assets;
- related content.

Example:

```text
Topic:
How to start an AI-assisted project

Audience:
Beginner web developer

Problem:
The developer starts asking AI to code before defining the product.

Outcome:
The reader understands the steps required before implementation.

Required assets:
- workflow diagram
- example Discovery prompt
- example project structure
```

---

# 6. Writing Principle

Production materials should follow:

**EXPLANATION → EXAMPLE → PRACTICAL ACTION**

For a new technical term or structure, use:

**NEW TERM / STRUCTURE → SHORT EXPLANATION → EXAMPLE → PRACTICAL APPLICATION**

Explain unfamiliar labels in plain Ukrainian before presenting a complete technical
example. Readers should understand what information is needed, without having to
memorize terminology. Follow the example with a concrete action they can try.

Where appropriate, the reader should leave with something usable:

- prompt;
- checklist;
- code example;
- process;
- decision rule;
- workflow.

Avoid content that explains concepts without helping the user apply them.

---

# 7. Asset Workflow

Every meaningful asset follows:

DEFINE PURPOSE  
→ SELECT ASSET TYPE  
→ CREATE / CAPTURE  
→ REVIEW  
→ APPROVE  
→ OPTIMIZE  
→ ADD METADATA  
→ INTEGRATE  
→ RESPONSIVE CHECK

Supported asset types:

- GENERATED IMAGE
- SCREENSHOT
- DIAGRAM
- CODE EXAMPLE
- UI ILLUSTRATION
- TOOL/LOGO ASSET

---

# 8. Asset Purpose

Before adding an image, answer:

**What does this asset help the user understand?**

Valid purposes include:

- explain a process;
- show a real interface;
- demonstrate a result;
- identify a tool;
- visualize a concept;
- provide editorial context;
- improve comprehension of complex information.

Do not add random images merely to fill visual space.

---

# 9. Generated Images

Generated images may be used for:

- editorial illustrations;
- conceptual visuals;
- developer workspace imagery;
- supporting hero visuals.

Generated images should follow the approved DevJourney visual direction.

They must not be presented as real screenshots, real events or factual evidence.

---

# 10. Screenshots

Use screenshots when the real interface or result is important to the explanation.

Screenshots should:

- show only relevant information;
- avoid exposing private or sensitive data;
- be cropped intentionally;
- remain readable;
- include context when necessary;
- be updated if the referenced interface changes materially.

Never publish screenshots containing passwords, tokens, private account information or other secrets.

---

# 11. Code Examples

Code examples should:

- be understandable in context;
- match the concept being explained;
- avoid unnecessary complexity;
- be reviewed before publication;
- clearly distinguish partial examples from complete implementations.

Code copied from AI output must not automatically be assumed correct.

---

# 12. Prompt Examples

Prompts should be practical and reusable.

A production prompt should make clear:

- role/context where needed;
- task;
- available information;
- constraints;
- expected output.

Prompts that depend on project context should state what information the user must provide.

Do not present a context-specific prompt as universally correct.

---

# 13. Structured Content

After approval, content is converted into the structured format defined in `DATA_MODELS.md`.

Example:

```text
Article
├── metadata
├── coverImage
└── content
    ├── heading
    ├── paragraph
    ├── image
    ├── prompt
    ├── paragraph
    ├── checklist
    └── callout
```

The Article Detail template renders these blocks.

Creating a new Article should not require creating a new Article Detail UI.

---

# 14. Content Rendering

Conceptual rendering flow:

CONTENT RECORD  
↓  
VALIDATION  
↓  
CONTENT BLOCK RENDERER  
↓  
REUSABLE DETAIL TEMPLATE  
↓  
PAGE

Example:

`how-to-start-ai-project`

↓

Article data

↓

Article Detail Template

↓

`/articles/how-to-start-ai-project`

---

# 15. Content Validation

Before publication, validate:

- required metadata;
- unique ID;
- unique slug;
- category;
- dates;
- URLs;
- supported content blocks;
- image paths;
- image alt text;
- related content references.

Invalid production content should fail visibly during development rather than silently creating a broken page.

---

# 16. Content QA

Before approval, check:

## Accuracy

- factual claims;
- dates;
- tool names;
- technical instructions;
- links.

## Practical Quality

- examples work;
- prompts are usable;
- code is appropriate;
- checklists make sense.

## Editorial Quality

- spelling;
- grammar;
- structure;
- readability;
- unnecessary repetition.

## Visual Quality

- images support the text;
- screenshots are readable;
- image ratios fit the template;
- code blocks fit mobile;
- no broken assets.

## Accessibility

- heading hierarchy;
- alt text;
- meaningful link labels;
- understandable content structure.

---

# 17. AI-Generated Content Rule

AI may assist with:

- research;
- outlines;
- drafts;
- rewriting;
- examples;
- prompts;
- asset briefs;
- structured data conversion.

AI-generated content is not automatically trusted or approved.

Human review is required before production publication.

For factual or time-sensitive content, verify information against appropriate reliable sources.

---

# 18. AI Updates

AI Updates require particular attention because information may change quickly.

Before publishing an update:

1. identify the original development/news;
2. verify the date;
3. verify the relevant product/tool/model;
4. separate confirmed facts from interpretation;
5. explain practical developer impact;
6. link to an appropriate source where relevant.

Preferred structure:

WHAT HAPPENED  
→ WHY IT MATTERS  
→ WHAT IT MEANS FOR DEVELOPERS  
→ WHAT TO TRY

Do not convert rumors into factual updates.

---

# 19. Security

Content must not introduce unsafe application behavior.

Never store or publish:

- passwords;
- API keys;
- access tokens;
- private credentials;
- personal confidential information.

Do not render arbitrary executable HTML or JavaScript from untrusted content.

External content introduced in the future must be validated and sanitized according to its source and rendering method.

---

# 20. Copyright & Source Awareness

Do not copy substantial third-party articles into DevJourney.

Use original explanation and appropriately sourced information.

Third-party images, logos and screenshots must be used with appropriate consideration of their source, license, brand rules and purpose.

Generated assets should not falsely imply ownership, endorsement or real-world evidence.

---

# 21. First Production Article

Do not mass-produce the article library before the content system is proven.

Create one complete reference article first:

BRIEF  
→ DRAFT  
→ REVIEW  
→ ASSETS  
→ STRUCTURED CONTENT  
→ INTEGRATION  
→ QA  
→ APPROVAL

Use the approved result as the quality reference for later articles.

---

# 22. Adding New Content

After the content system is implemented, adding a new article should conceptually require:

1. create the content record;
2. provide required metadata;
3. add approved assets;
4. add structured content blocks;
5. validate;
6. preview;
7. perform QA;
8. publish.

It should NOT require:

- creating a new page layout;
- copying an existing page component;
- rewriting Article Detail;
- changing routing logic for every article.

---

# 23. Updating Existing Content

When replacing a demo record with production content, retain its stable ID and
existing slug when the topic remains the same. Relationships resolve by ID;
an old `demo-` ID is not an editorial status. Remove demo wording from the
replacement's visible fields, while preserving labels on remaining fixtures.
With the current model (no status field), article templates use the existing
`DEMO — ` title prefix to identify fixtures. Review/approval status stays in
PROGRESS.md; preparing publication metadata does not constitute deployment.

When content changes:

1. identify the content record;
2. edit the required data/content;
3. validate;
4. preview affected page;
5. check related content;
6. perform QA;
7. publish the update.

If the required change cannot be represented by the current data model, report:

**CONTENT MODEL GAP**

Do not solve the problem with random page-specific hacks.

---

# 24. Future Content Automation

Future workflow may become:

CONTENT BACKLOG  
→ AI DRAFT  
→ HUMAN REVIEW  
→ ASSET CREATION  
→ VALIDATION  
→ PREVIEW  
→ APPROVAL  
→ PUBLISH

Possible future sources:

- CMS;
- external API;
- automated news feed;
- AI-assisted ingestion pipeline.

Automation must not remove the review and validation requirements for production content.

---

# 25. Content Production Prompt

The reusable project prompt:

**08 — CONTENT PRODUCTION**

defines the operational workflow for creating production-ready content.

This document defines the system rules that workflow must follow.

---

# 26. Core Rule

**Content is data. Templates render data. Humans approve production content.**

The system should make adding good content easier without making uncontrolled publishing easier.
