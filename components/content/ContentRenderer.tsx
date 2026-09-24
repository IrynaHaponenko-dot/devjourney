import { Fragment } from "react";
import Image from "next/image";
import type { ContentBlock } from "../../content/models";
import { validateContentBlock } from "../../content/validation";
import { getContentHeadings } from "../../content/headings";
import styles from "./ContentRenderer.module.css";

function unreachable(block: never): never {
  throw new Error(`Unsupported content block: ${JSON.stringify(block)}`);
}

function renderBlock(block: ContentBlock, headingId?: string) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "heading":
      return block.level === 2
        ? <h2 id={headingId} tabIndex={-1}>{block.text}</h2>
        : <h3 id={headingId} tabIndex={-1}>{block.text}</h3>;
    case "image":
      return (
        <figure>
          <Image
            src={block.image.src}
            alt={block.image.alt}
            width={block.image.width}
            height={block.image.height}
            className={styles.image}
            unoptimized
          />
          {block.image.caption && <figcaption className={styles.caption}>{block.image.caption}</figcaption>}
        </figure>
      );
    case "code":
      return (
        <div className={styles.developerBlock}>
          {block.language && <p className={styles.label}>{block.language}</p>}
          <pre className={styles.code} tabIndex={0} role="region" aria-label="Приклад коду">
            <code>{block.code}</code>
          </pre>
        </div>
      );
    case "prompt":
      return (
        <div className={styles.developerBlock}>
          <p className={styles.label}>Промпт</p>
          {block.title && <p className={styles.title}><strong>{block.title}</strong></p>}
          <p className={styles.prompt}>{block.text}</p>
        </div>
      );
    case "callout":
      return (
        <aside className={styles.callout}>
          {block.title && <p className={styles.title}><strong>{block.title}</strong></p>}
          <p>{block.text}</p>
        </aside>
      );
    case "checklist":
      return <ul className={styles.checklist}>{block.items.map((item, index) => <li key={index}>{item}</li>)}</ul>;
    default:
      return unreachable(block);
  }
}

export function ContentRenderer({ blocks }: { blocks: readonly ContentBlock[] }) {
  const validated = Array.from(blocks, (block, index) => validateContentBlock(block, `content[${index}]`));
  const headingIds = new Map(getContentHeadings(validated).map(heading => [heading.index, heading.id]));
  return (
    <div className={styles.content}>
      {validated.map((block, index) => (
        <Fragment key={index}>
          {renderBlock(block, headingIds.get(index))}
        </Fragment>
      ))}
    </div>
  );
}
