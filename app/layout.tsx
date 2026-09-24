import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header } from "../components/shell/Header";
import { Footer } from "../components/shell/Footer";
import styles from "./layout.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "DevJourney — AI-assisted development", template: "%s | DevJourney" },
  description: "DevJourney — практичний інформаційний портал про AI-assisted веброзробку: workflow, інструменти, статті та AI Updates.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body className={styles.body}>
        <a href="#main-content" className={styles.skipLink}>Перейти до вмісту</a>
        <Header />
        <main id="main-content" tabIndex={-1} className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
