import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import ts from "typescript";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

async function compile(file) {
  const source = await readFile(new URL(file, import.meta.url), "utf8");
  return ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
}
const asModule = source => `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const validationUrl = asModule(await compile("./validation.ts"));
const { validateContentCollections } = await import(validationUrl);
const articleUrl = asModule(await compile("./articles/ai-assisted-project-start.ts"));
const demoSource = (await compile("./demo.ts"))
  .replace('"./validation"', JSON.stringify(validationUrl))
  .replace('"./articles/ai-assisted-project-start"', JSON.stringify(articleUrl));
const { demoContent, isDemoArticle, publicArticles } = await import(asModule(demoSource));
const records = [...demoContent.articles, ...demoContent.tools, ...demoContent.updates];
const fixtures = [...demoContent.articles.filter(isDemoArticle), ...demoContent.updates];

test("mixed dataset validates and retains approved tools/stages and relationships", () => {
  assert.deepEqual(validateContentCollections(demoContent), demoContent);
  assert.deepEqual(demoContent.tools.map(tool => tool.name), ["ChatGPT", "Codex", "VS Code", "GitHub", "Figma", "Netlify"]);
  assert.deepEqual(demoContent.workflowSteps.map(step => step.id), ["idea", "discovery", "design", "code", "test", "deploy"]);
  assert.equal(demoContent.articles.length, 3);
  assert.deepEqual(publicArticles.map(article => article.slug), ["how-to-start-ai-project"]);
  assert.ok(publicArticles.every(article => !isDemoArticle(article)));
  assert.equal(demoContent.updates.length, 3);
  assert.deepEqual([...new Set(records.flatMap(record => record.content.map(block => block.type)))].sort(), ["callout", "checklist", "code", "heading", "paragraph", "prompt"]);
});

test("demo labels survive use outside the module; no invented status or news sources", () => {
  for (const record of fixtures) {
    assert.match(record.description, /^DEMO/);
    assert.equal("status" in record, false);
  }
  for (const record of [...demoContent.workflowSteps, ...demoContent.tools]) {
    assert.doesNotMatch(JSON.stringify(record), /DEMO/);
    assert.equal("status" in record, false);
  }
  for (const record of [...demoContent.articles.filter(isDemoArticle), ...demoContent.updates]) assert.match(record.title, /^DEMO/);
  for (const update of demoContent.updates) {
    assert.match(update.description, /вигаданий|не огляд актуальних/);
    assert.equal(update.sourceUrl, undefined);
  }
});

test("remaining fixture images are real local demo assets with matching dimensions", async () => {
  const images = fixtures.flatMap(record => [
    record.coverImage ?? record.logo,
    ...record.content.filter(block => block.type === "image").map(block => block.image),
  ]);
  for (const image of images) {
    assert.match(image.src, /^\/images\/demo\/[a-z-]+\.svg$/);
    const svg = await readFile(new URL(`../public${image.src}`, import.meta.url), "utf8");
    assert.ok(svg.includes(`width="${image.width}"`));
    assert.ok(svg.includes(`height="${image.height}"`));
    assert.match(image.alt, /DEMO/);
    assert.doesNotMatch(svg, /<script|<foreignObject|\bon\w+=|href=/i);
  }
});

test("production reference retains identity, has no demo labeling and uses a decoded web cover", async () => {
  const article = demoContent.articles.find(record => !isDemoArticle(record));
  assert.equal(demoContent.articles.filter(record => !isDemoArticle(record)).length, 1);
  assert.equal(article.id, "demo-start-ai-project");
  assert.equal(article.slug, "how-to-start-ai-project");
  assert.equal(article.category, "Guide");
  assert.doesNotMatch(JSON.stringify({ ...article, id: undefined, relatedArticles: undefined }), /DEMO/);
  assert.equal(article.content.at(-1).text, "AI helps. Developer decides.");
  const words = article.content.flatMap(block => [block.text ?? "", ...(block.items ?? [])]).join(" ").split(/\s+/u).filter(Boolean).length;
  assert.ok(words >= 1400 && words <= 2200, `Reading length: ${words}`);
  const require = createRequire(import.meta.url);
  const sharp = createRequire(require.resolve("next/package.json"))("sharp");
  const cover = sharp(fileURLToPath(new URL(`../public${article.coverImage.src}`, import.meta.url)));
  const metadata = await cover.metadata();
  assert.equal(metadata.format, "webp");
  assert.equal(metadata.width, article.coverImage.width);
  assert.equal(metadata.height, article.coverImage.height);
  await cover.raw().toBuffer();
});
