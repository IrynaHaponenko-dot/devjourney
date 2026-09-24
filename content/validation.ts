import type {
  AIUpdate, Article, CalloutBlock, ChecklistBlock, CodeBlock, ContentBlock,
  HeadingBlock, ImageAsset, ImageBlock, ParagraphBlock, PromptBlock,
  Tool, WorkflowStage, WorkflowStep,
} from "./models";

type Validator<T> = (value: unknown, path?: string) => T;

export class ContentValidationError extends Error {
  constructor(public readonly path: string, message: string) {
    super(`${path}: ${message}`);
    this.name = "ContentValidationError";
  }
}

function fail(path: string, message: string): never {
  throw new ContentValidationError(path, message);
}

const text: Validator<string> = (value, path = "value") => {
  if (typeof value !== "string" || !value.trim()) fail(path, "expected non-empty text");
  return value;
};

function optional<T>(validate: Validator<T>): Validator<T | undefined> {
  return (value, path) => value === undefined ? undefined : validate(value, path);
}

function oneOf<const T extends string | number>(...choices: T[]): Validator<T> {
  return (value, path = "value") => {
    if (!choices.includes(value as T)) fail(path, `expected one of: ${choices.join(", ")}`);
    return value as T;
  };
}

function array<T>(validate: Validator<T>): Validator<T[]> {
  return (value, path = "value") => {
    if (!Array.isArray(value)) fail(path, "expected an array");
    // Array.from visits sparse entries, which must not bypass validation.
    return Array.from(value, (item, index) => validate(item, `${path}[${index}]`));
  };
}

function object<T extends object>(fields: { [K in keyof T]-?: Validator<T[K]> }): Validator<T> {
  return (value, path = "value") => {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      fail(path, "expected an object");
    }
    const input = value as Record<string, unknown>;
    for (const key of Object.keys(input)) {
      if (!Object.hasOwn(fields, key)) fail(`${path}.${key}`, "unsupported field");
    }
    const result: Partial<T> = {};
    for (const key of Object.keys(fields) as (keyof T & string)[]) {
      const parsed = fields[key](Object.hasOwn(input, key) ? input[key] : undefined, `${path}.${key}`);
      if (parsed !== undefined) result[key] = parsed;
    }
    return result as T;
  };
}

const positiveNumber: Validator<number> = (value, path = "value") => {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
    fail(path, "expected a finite positive number");
  }
  return value;
};
const dimension: Validator<number> = (value, path = "value") => {
  const parsed = positiveNumber(value, path);
  if (!Number.isInteger(parsed)) fail(path, "expected an integer image dimension");
  return parsed;
};
const slug: Validator<string> = (value, path = "value") => {
  const parsed = text(value, path);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(parsed)) {
    fail(path, "expected lowercase Latin letters/digits separated by single hyphens");
  }
  return parsed;
};
const url: Validator<string> = (value, path = "value") => {
  const parsed = text(value, path);
  let target: URL;
  try { target = new URL(parsed); } catch { return fail(path, "expected an absolute HTTP(S) URL"); }
  if (!/^https?:\/\//.test(parsed) || /[\s\\]/.test(parsed)
      || !["http:", "https:"].includes(target.protocol) || target.username || target.password) {
    fail(path, "expected an absolute HTTP(S) URL without credentials or whitespace");
  }
  return parsed;
};
const imageSource: Validator<string> = (value, path = "value") => {
  const parsed = text(value, path);
  if (!parsed.startsWith("/")) return url(parsed, path);
  let decoded: string;
  try { decoded = decodeURIComponent(parsed); } catch { return fail(path, "invalid image path encoding"); }
  if (decoded.startsWith("//") || /[\s\\?#]/.test(decoded)
      || decoded.endsWith("/") || decoded.split("/").some(part => part === "." || part === "..")) {
    fail(path, "expected a root-relative image file path without traversal");
  }
  return parsed;
};
const date: Validator<string> = (value, path = "value") => {
  const parsed = text(value, path);
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2}))?$/.exec(parsed);
  if (!match || !Number.isFinite(Date.parse(parsed))) fail(path, "expected an ISO date or timestamp with timezone");
  const calendar = new Date(`${match[1]}-${match[2]}-${match[3]}T00:00:00Z`);
  if (calendar.getUTCMonth() + 1 !== Number(match[2]) || calendar.getUTCDate() !== Number(match[3])) {
    fail(path, "invalid calendar date");
  }
  return parsed;
};

export const validateImageAsset = object<ImageAsset>({
  src: imageSource, alt: text, width: dimension, height: dimension,
  caption: optional(text),
  type: optional(oneOf("generated", "screenshot", "diagram", "illustration", "logo")),
});
export const validateWorkflowStage: Validator<WorkflowStage> = oneOf("idea", "discovery", "design", "code", "test", "deploy");
export const validateWorkflowStep = object<WorkflowStep>({
  id: validateWorkflowStage, title: text, description: text,
  aiHelpsWith: array(text), developerDecides: array(text),
});

const blocks = {
  paragraph: object<ParagraphBlock>({ type: oneOf("paragraph"), text }),
  heading: object<HeadingBlock>({ type: oneOf("heading"), text, level: oneOf(2, 3) }),
  image: object<ImageBlock>({ type: oneOf("image"), image: validateImageAsset }),
  code: object<CodeBlock>({ type: oneOf("code"), code: text, language: optional(text) }),
  prompt: object<PromptBlock>({ type: oneOf("prompt"), text, title: optional(text) }),
  callout: object<CalloutBlock>({ type: oneOf("callout"), text, title: optional(text) }),
  checklist: object<ChecklistBlock>({ type: oneOf("checklist"), items: array(text) }),
};
export const validateContentBlock: Validator<ContentBlock> = (value, path = "contentBlock") => {
  if (typeof value !== "object" || value === null || !("type" in value)
      || typeof value.type !== "string" || !Object.hasOwn(blocks, value.type)) {
    fail(`${path}.type`, "unsupported or missing content block type");
  }
  return blocks[value.type as keyof typeof blocks](value, path);
};

const common = { id: text, slug, description: text, category: text, content: array(validateContentBlock) };
const editorial = { ...common, title: text, publishedAt: date, readingTime: positiveNumber, coverImage: validateImageAsset };
export const validateArticle = object<Article>({
  ...editorial, updatedAt: optional(date), author: optional(text), relatedArticles: optional(array(text)),
});
export const validateTool = object<Tool>({
  ...common, name: text, logo: validateImageAsset, useCases: array(text),
  workflowStages: array(validateWorkflowStage), websiteUrl: optional(url),
  documentationUrl: optional(url), relatedArticles: optional(array(text)),
});
export const validateAIUpdate = object<AIUpdate>({
  ...editorial, sourceUrl: optional(url), relatedUpdates: optional(array(text)),
});

// Validation input groups existing entities; this is not a new content record.
type ContentCollections = {
  articles: Article[];
  tools: Tool[];
  updates: AIUpdate[];
  workflowSteps: WorkflowStep[];
};
const collections = object<ContentCollections>({
  articles: array(validateArticle), tools: array(validateTool),
  updates: array(validateAIUpdate), workflowSteps: array(validateWorkflowStep),
});

export function validateContentCollections(value: unknown): ContentCollections {
  const result = collections(value, "content");
  for (const [name, records] of Object.entries(result)) {
    const ids = new Set<string>();
    const slugs = new Set<string>();
    records.forEach((record, index) => {
      if (ids.has(record.id)) fail(`content.${name}[${index}].id`, `duplicate ID: ${record.id}`);
      ids.add(record.id);
      if ("slug" in record) {
        if (slugs.has(record.slug)) fail(`content.${name}[${index}].slug`, `duplicate slug: ${record.slug}`);
        slugs.add(record.slug);
      }
    });
  }
  const articleIds = new Set(result.articles.map(item => item.id));
  const updateIds = new Set(result.updates.map(item => item.id));
  function references(ids: string[] | undefined, targets: Set<string>, path: string) {
    ids?.forEach((id, index) => {
      if (!targets.has(id)) fail(`${path}[${index}]`, `unknown related ID: ${id}`);
    });
  }
  result.articles.forEach((item, index) => references(item.relatedArticles, articleIds, `content.articles[${index}].relatedArticles`));
  result.tools.forEach((item, index) => references(item.relatedArticles, articleIds, `content.tools[${index}].relatedArticles`));
  result.updates.forEach((item, index) => references(item.relatedUpdates, updateIds, `content.updates[${index}].relatedUpdates`));
  return result;
}
