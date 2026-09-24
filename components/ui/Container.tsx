import type { ComponentPropsWithoutRef } from "react";
import styles from "./Container.module.css";

export type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  narrow?: boolean;
};

export function Container({ narrow = false, className, ...props }: ContainerProps) {
  const classes = [styles.container, narrow && styles.narrow, className]
    .filter(Boolean)
    .join(" ");

  return <div {...props} className={classes} />;
}
