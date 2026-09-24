# DATA MODELS

## 1. Purpose

This document defines the core data structures used by DevJourney.

The goal is to keep content predictable, reusable and independent from UI implementation.

---

# 2. General Principle

Content is represented as structured data.

UI components receive this data and decide how to display it.

Conceptual flow:

DATA  
→ TEMPLATE  
→ PAGE

Content data should not contain layout-specific implementation details unless they are part of the approved content model.

---

# 3. Shared Types

## ImageAsset

Represents an image used by content.

Fields:

- `src`
- `alt`
- `width`
- `height`
- `caption` — optional
- `type` — optional

Possible asset types:

- generated
- screenshot
- diagram
- illustration
- logo

Example:

```ts
{
  src: "/images/articles/ai-project-workflow.webp",
  alt: "Схема етапів AI-assisted web development",
  width: 1200,
  height: 675,
  type: "diagram"
}
```

---

# 4. Article

Represents a practical educational article.

Required fields:

- `id`
- `slug`
- `title`
- `description`
- `category`
- `publishedAt`
- `readingTime`
- `coverImage`
- `content`

Optional fields:

- `updatedAt`
- `author`
- `relatedArticles`

Conceptual TypeScript model:

```ts
type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  author?: string;
  coverImage: ImageAsset;
  content: ContentBlock[];
  relatedArticles?: string[];
};
```

---

# 5. Tool

Represents a developer or AI tool.

Required fields:

- `id`
- `slug`
- `name`
- `category`
- `description`
- `logo`
- `useCases`
- `workflowStages`
- `content`

Optional fields:

- `websiteUrl`
- `documentationUrl`
- `relatedArticles`

Conceptual model:

```ts
type Tool = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  logo: ImageAsset;
  useCases: string[];
  workflowStages: WorkflowStage[];
  websiteUrl?: string;
  documentationUrl?: string;
  content: ContentBlock[];
  relatedArticles?: string[];
};
```

---

# 6. AI Update

Represents a curated AI-development update.

Required fields:

- `id`
- `slug`
- `title`
- `description`
- `category`
- `publishedAt`
- `readingTime`
- `coverImage`
- `content`

Optional fields:

- `sourceUrl`
- `relatedUpdates`

Conceptual model:

```ts
type AIUpdate = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  coverImage: ImageAsset;
  sourceUrl?: string;
  content: ContentBlock[];
  relatedUpdates?: string[];
};
```

---

# 7. Workflow Stage

Represents one stage of the AI-assisted development workflow.

Approved stages:

- idea
- discovery
- design
- code
- test
- deploy

Conceptual model:

```ts
type WorkflowStage =
  | "idea"
  | "discovery"
  | "design"
  | "code"
  | "test"
  | "deploy";
```

Each workflow stage may have its own display content.

Example:

```ts
type WorkflowStep = {
  id: WorkflowStage;
  title: string;
  description: string;
  aiHelpsWith: string[];
  developerDecides: string[];
};
```

---

# 8. Content Blocks

Articles, Tools and AI Updates need richer content than one long text string.

Therefore content uses reusable structured blocks.

Initial approved block types:

- paragraph
- heading
- image
- code
- prompt
- callout
- checklist

Conceptual model:

```ts
type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | CodeBlock
  | PromptBlock
  | CalloutBlock
  | ChecklistBlock;
```

Minimal block contracts approved on 2026-09-20:

```ts
type HeadingBlock = {
  type: "heading";
  text: string;
  level: 2 | 3;
};

type CodeBlock = {
  type: "code";
  code: string;
  language?: string;
};

type CalloutBlock = {
  type: "callout";
  text: string;
  title?: string;
};
```

No additional fields or variants are included in these contracts.
Prompt titles are optional, as specified in DESIGN_SYSTEM.md section 14.

Examples:

```ts
{
  type: "paragraph",
  text: "Перед написанням коду визнач проблему, яку повинен вирішити продукт."
}
```

```ts
{
  type: "image",
  image: {
    src: "/images/articles/discovery-process.webp",
    alt: "Схема процесу Discovery",
    width: 1200,
    height: 675
  }
}
```

```ts
{
  type: "prompt",
  title: "Discovery Prompt",
  text: "Допоможи мені провести Discovery для..."
}
```

```ts
{
  type: "checklist",
  items: [
    "Визначена проблема",
    "Визначена аудиторія",
    "Визначена основна дія користувача"
  ]
}
```

---

# 9. Relationships

Content items may reference other content items by stable identifiers.

Example:

```ts
relatedArticles: ["ai-assisted-development", "writing-tasks-for-ai-coder"];
```

The application resolves those references to actual content records.

Do not duplicate complete related content inside another content record.

---

# 10. Validation

Content should be validated before being rendered.

Validation should detect problems such as:

- missing required fields;
- invalid slug;
- missing image alt text;
- unsupported content block type;
- invalid workflow stage;
- malformed URLs;
- duplicate IDs or slugs.

Exact validation implementation will be decided during Implementation Planning.

---

# 11. Missing Content Behaviour

The UI must handle missing optional data safely.

Optional fields should not create broken empty sections.

Example:

If `relatedArticles` is missing, the Related Articles section should not render an empty container.

Missing required data should be treated as a content/data error.

---

# 12. Content vs Presentation

Data describes WHAT the content is.

Components decide HOW the content appears.

Avoid storing presentation instructions such as:

`marginTop: 32`

`fontSize: 48`

`backgroundColor: orange`

inside Article, Tool or AI Update content records.

Those decisions belong to the Design System and UI components.

---

# 13. Future Extensibility

The model may later support additional block types such as:

- video;
- table;
- quote;
- comparison;
- interactive demo;
- embed.

New block types should be added intentionally and supported by a reusable rendering component.

---

# 14. Security Principle

Content must not be treated as automatically trusted merely because it exists in the project.

Future external or AI-generated content must be validated and reviewed before publication.

Do not render arbitrary executable code or unsafe HTML from content sources.

---

# 15. Source of Truth

These models define the expected content structure.

If implementation requires a change to a model:

1. identify why;
2. assess affected content and components;
3. update DATA_MODELS.md;
4. update related documentation if necessary;
5. then implement the change.

Do not silently change the data contract inside application code.
