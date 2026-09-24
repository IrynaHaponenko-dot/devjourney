import Image from "next/image";
import type { Tool } from "../../content/models";
import styles from "./ToolLogo.module.css";

// Used beside the tool's visible name; the image adds no accessible information.
export function ToolLogo({ tool, size = 48 }: { tool: Tool; size?: 48 | 64 }) {
  return <Image className={styles.logo} data-tool={tool.slug} src={tool.logo.src}
    alt="" width={size} height={size} unoptimized
    style={{ width: size, height: size, padding: tool.slug === "vscode" ? size / 6 : 0 }} />;
}
