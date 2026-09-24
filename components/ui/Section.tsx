import type { ComponentPropsWithoutRef } from "react";
import styles from "./Section.module.css";

export type SectionProps = ComponentPropsWithoutRef<"section">;

// Consumers supply the thematic heading and aria-labelledby when appropriate.
export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      {...props}
      className={[styles.section, className].filter(Boolean).join(" ")}
    />
  );
}
