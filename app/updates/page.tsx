import Image from "next/image";
import Link from "next/link";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Card } from "../../components/ui/Card";
import { demoContent } from "../../content/demo";
import styles from "./page.module.css";

export const metadata = { title: "AI Updates" };

export default function UpdatesPage() {
  return (
    <Section aria-labelledby="updates-title" className={styles.page}>
      <Container>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>DevJourney / AI Updates</p>
          <h1 id="updates-title">Зміни та їх значення для розробника</h1>
          <p className={styles.lead}>Розділ про AI-інструменти, можливості моделей і середовище розробки. Зараз тут лише приклади майбутніх оглядів.</p>
          <p className={styles.notice}><strong>DEMO — не новини.</strong> Усі записи нижче вигадані та не є перевіреними актуальними новинами. Дати й час читання — тестові метадані, а не відомості про реальні релізи.</p>
        </header>
        <ul className={styles.grid}>
          {demoContent.updates.map(update => (
            <li key={update.id}>
              <Card className={styles.card}>
                <Image src={update.coverImage.src} alt={update.coverImage.alt}
                  width={update.coverImage.width} height={update.coverImage.height}
                  className={styles.cover} unoptimized />
                <p className={styles.meta}>{update.category} · {update.readingTime} хв читання</p>
                <h2><Link href={`/updates/${update.slug}`}>{update.title}</Link></h2>
                <p className={styles.description}>{update.description}</p>
                <p className={styles.date}>Тестова дата: <time dateTime={update.publishedAt}>{update.publishedAt}</time></p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
