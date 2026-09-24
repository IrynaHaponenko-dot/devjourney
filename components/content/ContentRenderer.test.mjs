import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

// Compile in memory using installed tooling; stub only CSS module class names.
function load(relativePath) {
  const filename = fileURLToPath(new URL(relativePath, import.meta.url));
  const nativeRequire = createRequire(filename);
  const source = readFileSync(filename, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  });
  const loadedModule = { exports: {} };
  const require = (specifier) => {
    if (specifier.endsWith(".module.css")) return { __esModule: true, default: new Proxy({}, { get: (_, key) => key }) };
    if (specifier === "../../content/validation") return load("../../content/validation.ts");
    if (specifier === "../../content/headings") return load("../../content/headings.ts");
    return nativeRequire(specifier);
  };
  new Function("require", "module", "exports", outputText)(require, loadedModule, loadedModule.exports);
  return loadedModule.exports;
}
const { ContentRenderer } = load("./ContentRenderer.tsx");
const { getContentHeadings } = load("../../content/headings.ts");
const render = (blocks) => renderToStaticMarkup(React.createElement(ContentRenderer, { blocks }));

test("TOC anchors handle Unicode, duplicates, punctuation and natural suffix collisions", () => {
  const blocks = ["Приклад", "Приклад", "Приклад-2", "!!!", "???", "Привіт світе"].map(text => ({ type: "heading", level: 2, text }));
  const headings = getContentHeadings(blocks);
  assert.equal(new Set(headings.map(h => h.id)).size, blocks.length);
  assert.deepEqual(headings.map(h => h.id), ["content-приклад", "content-приклад-3", "content-приклад-2", "content-heading", "content-heading-2", "content-привіт-світе"]);
  assert.deepEqual(getContentHeadings([{ type: "paragraph", text: "Intro" }, ...blocks]).map(h => h.id), headings.map(h => h.id));
  const html = render(blocks);
  for (const heading of headings) assert.ok(html.includes(`id="${heading.id}"`));
  assert.deepEqual(getContentHeadings([{ type: "paragraph", text: "No headings" }]), []);
});

test("renders every approved block with semantic HTML and optional metadata", () => {
  const html = render([
    { type: "paragraph", text: "Paragraph" },
    { type: "heading", level: 2, text: "Heading" },
    { type: "heading", level: 3, text: "Subheading" },
    { type: "image", image: { src: "/test.webp", alt: "Diagram", width: 800, height: 400, caption: "Caption" } },
    { type: "code", code: "const x = 1;", language: "typescript" },
    { type: "prompt", text: "Prompt text", title: "Prompt title" },
    { type: "callout", text: "Note", title: "Note title" },
    { type: "checklist", items: ["First", "Second"] },
  ]);
  for (const expected of ["<p>Paragraph</p>", '<h2 id="content-heading" tabindex="-1">Heading</h2>', '<h3 id="content-subheading" tabindex="-1">Subheading</h3>', '<img', 'alt="Diagram"', 'width="800"', 'height="400"', '<figcaption class="caption">Caption</figcaption>', '<code>const x = 1;</code>', 'tabindex="0"', 'role="region"', 'aria-label="Приклад коду"', '<strong>Prompt title</strong>', '<aside', '<ul class="checklist"><li>First</li><li>Second</li></ul>']) assert.ok(html.includes(expected), expected);
});

test("escapes HTML across text fields and preserves code/prompt whitespace", () => {
  const text = '  <script>alert("x")</script>\n    next line\n';
  const html = render([
    { type: "code", code: text }, { type: "prompt", text },
    { type: "paragraph", text }, { type: "callout", text, title: text },
    { type: "heading", level: 2, text }, { type: "checklist", items: [text] },
  ]);
  assert.ok(!html.includes("<script>"));
  assert.ok(html.includes("&lt;script&gt;"));
  assert.ok(html.includes('  &lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;\n    next line\n'));
});

test("optional labels/captions are absent; remote image URLs need no config change", () => {
  const html = render([
    { type: "image", image: { src: "https://example.com/image.webp", alt: "Remote diagram", width: 800, height: 400 } },
    { type: "code", code: "x" }, { type: "callout", text: "Note" },
  ]);
  assert.ok(html.includes('src="https://example.com/image.webp"'));
  assert.ok(!html.includes("figcaption"));
  assert.ok(!html.includes("<strong>"));
  assert.ok(!html.includes('class="label"'));
  assert.equal(render([]), '<div class="content"></div>');
});

test("invalid blocks fail visibly, including unsupported variants and unsafe image URLs", () => {
  for (const block of [{ type: "video" }, { type: "heading", level: 1, text: "Bad" }, { type: "image", image: { src: "javascript:alert(1)", alt: "Bad", width: 1, height: 1 } }]) {
    assert.throws(() => render([block]), /content\[0\]/);
  }
});
