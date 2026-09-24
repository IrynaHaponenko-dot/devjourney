"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { navigationItems } from "./navigation";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  function focusToggle() {
    headerRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
  }

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    function resetNavigation(event: MediaQueryListEvent) {
      if (
        !event.matches &&
        headerRef.current?.querySelector("nav")?.contains(document.activeElement)
      ) {
        focusToggle();
      }
      setOpen(false);
    }
    desktop.addEventListener("change", resetNavigation);
    return () => desktop.removeEventListener("change", resetNavigation);
  }, []);

  return (
    <header
      ref={headerRef}
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          setOpen(false);
          focusToggle();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <Container className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          DevJourney
        </Link>
        <Button
          variant="secondary"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Закрити меню" : "Меню"}
        </Button>
        <nav
          id="primary-navigation"
          aria-label="Основна навігація"
          className={styles.navigation}
          data-open={open}
        >
          <ul className={styles.list}>
            {navigationItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  lang="en"
                  className={styles.link}
                  aria-current={
                    pathname === href
                      ? "page"
                      : href !== "/" && pathname.startsWith(`${href}/`)
                        ? "location"
                        : undefined
                  }
                  onClick={() => {
                    if (open) focusToggle();
                    setOpen(false);
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
