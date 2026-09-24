import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

type AppearanceProps = {
  variant?: "primary" | "secondary";
};

type ActionProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type NavigationProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  disabled?: never;
};

export type ButtonProps = AppearanceProps & (ActionProps | NavigationProps);

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  // Links navigate; disabled is only available on native action buttons.
  if (typeof props.href === "string") {
    return <Link {...props} className={classes} />;
  }

  const { type = "button", ...buttonProps } = props;
  return <button {...buttonProps} type={type} className={classes} />;
}
