import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import ts from "typescript";

// Use the installed compiler in memory; no test dependency or tooling changes.
const source = await readFile(new URL("./validation.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const v = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const image = { src: "/images/test.webp", alt: "Test diagram", width: 1200, height: 675 };
const blocks = [
  { type: "paragraph", text: "Text" },
  { type: "heading", text: "Heading", level: 2 },
  { type: "image", image },
  { type: "code", code: "  const x = 1;\n\n", language: "typescript" },
  { type: "prompt", text: "Prompt" },
  { type: "callout", text: "Note" },
  { type: "checklist", items: ["Check"] },
];
const article = {
  id: "stable-id", slug: "test-article", title: "Test", description: "Description",
  category: "Development", publishedAt: "2026-09-20", readingTime: 3,
  coverImage: image, content: blocks,
};
const tool = {
  id: "tool-id", slug: "test-tool", name: "Tool", category: "Code", description: "Description",
  logo: image, useCases: ["Testing"], workflowStages: ["test"], content: blocks,
};
const update = { ...article, id: "update-id", slug: "test-update" };
const step = { id: "idea", title: "Idea", description: "Description", aiHelpsWith: [], developerDecides: ["Scope"] };
const collections = () => ({ articles: [article], tools: [tool], updates: [update], workflowSteps: [step] });
function invalid(run, path) {
  assert.throws(run, error => error instanceof v.ContentValidationError && error.path === path);
}

test("all entities, block variants and optional fields validate without mutating input", () => {
  const input = collections();
  assert.deepEqual(v.validateContentCollections(input), input);
  assert.deepEqual(v.validateArticle({ ...article, updatedAt: "2026-09-20T12:00:00Z", author: "Author", relatedArticles: [] }).author, "Author");
  v.validateTool({ ...tool, websiteUrl: "https://example.com", documentationUrl: "https://example.com/docs" });
  v.validateAIUpdate({ ...update, sourceUrl: "https://example.com/news", relatedUpdates: [] });
  v.validateImageAsset({ ...image, type: "diagram", caption: "Caption" });
  v.validateContentBlock({ type: "heading", text: "Subheading", level: 3 });
  v.validateContentBlock({ type: "code", code: "x" });
  v.validateContentBlock({ type: "prompt", text: "x", title: "Title" });
  v.validateContentBlock({ type: "callout", text: "x", title: "Title" });
  assert.equal(v.validateContentBlock(blocks[3]).code, blocks[3].code);
  for (const stage of ["idea", "discovery", "design", "code", "test", "deploy"]) v.validateWorkflowStage(stage);
});

test("missing required fields on every entity fail with the field path", () => {
  for (const [validate, sample] of [[v.validateArticle, article], [v.validateTool, tool], [v.validateAIUpdate, update], [v.validateWorkflowStep, step], [v.validateImageAsset, image]]) {
    for (const key of Object.keys(sample)) {
      const input = { ...sample };
      delete input[key];
      invalid(() => validate(input, "record"), `record.${key}`);
    }
  }
});

test("unsupported blocks, levels, fields and malformed nested data fail", () => {
  for (const input of [null, {}, { type: "video" }, { type: "toString" }]) invalid(() => v.validateContentBlock(input), "contentBlock.type");
  invalid(() => v.validateContentBlock({ type: "heading", text: "x", level: 1 }), "contentBlock.level");
  invalid(() => v.validateContentBlock({ type: "callout", text: "x", variant: "warning" }), "contentBlock.variant");
  invalid(() => v.validateContentBlock({ type: "prompt", text: "x", title: null }), "contentBlock.title");
  invalid(() => v.validateArticle({ ...article, content: [{ type: "checklist", items: [42] }] }, "article"), "article.content[0].items[0]");
  invalid(() => v.validateArticle({ ...article, content: Array(1) }, "article"), "article.content[0].type");
  invalid(() => v.validateTool({ ...tool, workflowStages: ["publish"] }, "tool"), "tool.workflowStages[0]");
});

test("invalid slugs, calendar dates, numbers and image metadata fail", () => {
  for (const slug of ["Bad-Slug", "bad--slug", "bad_slug", "-bad", "текст", "../path"]) invalid(() => v.validateArticle({ ...article, slug }), "value.slug");
  for (const publishedAt of ["yesterday", "2026-02-29", "2026-13-01", "2026-04-31", "2026-09-20T12:00:00"]) invalid(() => v.validateArticle({ ...article, publishedAt }), "value.publishedAt");
  v.validateArticle({ ...article, publishedAt: "2024-02-29" });
  for (const readingTime of [0, -1, NaN, Infinity, "3"]) invalid(() => v.validateArticle({ ...article, readingTime }), "value.readingTime");
  invalid(() => v.validateImageAsset({ ...image, alt: "  " }), "value.alt");
  invalid(() => v.validateImageAsset({ ...image, width: 1.5 }), "value.width");
  invalid(() => v.validateImageAsset({ ...image, type: "video" }), "value.type");
});

test("unsafe URLs and malformed image paths are rejected", () => {
  for (const websiteUrl of ["javascript:alert(1)", "data:text/html,x", "/relative", "https://", "https://user:pass@example.com", " https://example.com", "https://example.com/a b"]) invalid(() => v.validateTool({ ...tool, websiteUrl }), "value.websiteUrl");
  for (const src of ["//example.com/a.png", "/../a.png", "/%2e%2e/a.png", "/%5ca.png", "/images/", "/bad%path", "javascript:alert(1)"]) invalid(() => v.validateImageAsset({ ...image, src }), "value.src");
});

test("collection uniqueness is scoped to entity type; references resolve by ID", () => {
  const input = collections();
  input.tools[0] = { ...tool, relatedArticles: [article.id] };
  v.validateContentCollections(input);
  invalid(() => v.validateContentCollections({ ...input, articles: [article, { ...article, slug: "other" }] }), "content.articles[1].id");
  invalid(() => v.validateContentCollections({ ...input, articles: [article, { ...article, id: "other" }] }), "content.articles[1].slug");
  invalid(() => v.validateContentCollections({ ...input, workflowSteps: [step, step] }), "content.workflowSteps[1].id");
  for (const [name, sample, field, target] of [["articles", article, "relatedArticles", article.slug], ["tools", tool, "relatedArticles", "missing"], ["updates", update, "relatedUpdates", "missing"]]) {
    invalid(() => v.validateContentCollections({ ...collections(), [name]: [{ ...sample, [field]: [target] }] }), `content.${name}[0].${field}[0]`);
  }
  v.validateContentCollections({ ...collections(), tools: [{ ...tool, id: article.id, slug: article.slug }] });
});
