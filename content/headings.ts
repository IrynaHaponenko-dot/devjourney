import type { ContentBlock } from "./models";

// Derived presentation metadata, not additional fields in the content contract.
// Reserve all natural IDs before suffixing duplicates to avoid collisions with
// headings such as "Example", "Example", and "Example-2".
export function getContentHeadings(blocks: readonly ContentBlock[]) {
  const headings = blocks.flatMap((block, index) => {
    if (block.type !== "heading") return [];
    const slug = block.text.normalize("NFKC").toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "heading";
    return [{ index, text: block.text, level: block.level, base: `content-${slug}` }];
  });
  const reserved = new Set(headings.map(heading => heading.base));
  const used = new Set<string>();
  return headings.map(({ base, ...heading }) => {
    let id = base;
    let suffix = 2;
    while (used.has(id)) {
      id = `${base}-${suffix++}`;
      while (reserved.has(id)) id = `${base}-${suffix++}`;
    }
    used.add(id);
    return { ...heading, id };
  });
}
