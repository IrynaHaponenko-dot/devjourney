import Link from "next/link";
import { Container } from "../ui/Container";
import { navigationItems } from "./navigation";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div>
          <Link href="/" className={styles.brand}>DevJourney</Link>
          <p className={styles.principle} lang="en">AI helps. Developer decides.</p>
        </div>
        <nav aria-label="Навігація в підвалі">
          <ul className={styles.list}>
            {navigationItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} lang="en" className={styles.link}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
