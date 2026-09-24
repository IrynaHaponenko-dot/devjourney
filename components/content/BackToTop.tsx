"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import styles from "./BackToTop.module.css";

export function BackToTop({ targetId }: { targetId: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    function update() {
      // Keep the control in the article's reserved gutter, away from the footer.
      const article = document.getElementById(targetId)?.closest("article");
      setVisible(window.scrollY > Math.max(640, window.innerHeight)
        && (article?.querySelector("header")?.getBoundingClientRect().bottom ?? 1) <= 0
        && (article?.getBoundingClientRect().bottom ?? 0) > window.innerHeight - 16);
      frame = 0;
    }
    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [targetId]);

  function returnToTop() {
    // Move focus before the scrolling control disappears, including on keyboard use.
    document.getElementById(targetId)?.focus({ preventScroll: true });
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return visible ? (
    <Button className={styles.control} onClick={returnToTop}
      aria-label="Повернутися на початок статті" title="На початок статті">
      <span aria-hidden="true">↑</span>
    </Button>
  ) : null;
}
