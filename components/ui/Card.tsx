import type { ComponentPropsWithoutRef } from "react";
import styles from "./Card.module.css";

export type CardProps = ComponentPropsWithoutRef<"div">;

// A presentation surface only; consumers supply their own content and links.
export function Card({ className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={[styles.card, className].filter(Boolean).join(" ")}
    />
  );
}
