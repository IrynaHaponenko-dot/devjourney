import Image from "next/image";
import Link from "next/link";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Card } from "../../components/ui/Card";
import { publicArticles } from "../../content/demo";
import styles from "./page.module.css";

export const metadata = {
  title: "Статті",
  description: "Практична стаття про підготовку AI-assisted вебпроєкту: від ідеї та вимог до першої погодженої задачі для coding agent.",
};

export default function ArticlesPage() {
  return (
    <Section aria-labelledby="articles-title" className={styles.page}>
      <Container>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>DevJourney / Articles</p>
          <h1 id="articles-title">Від запитання до практики</h1>
          <p className={styles.lead}>Почни з практичної статті про підготовку AI-assisted вебпроєкту: як уточнити ідею, визначити межі та поставити першу задачу агенту.</p>
          <p className={styles.notice}>Наразі тут одна стаття. Прочитай її та застосуй запропоновані кроки до власного проєкту.</p>
        </header>
        <ul className={styles.grid}>
          {publicArticles.map(article => (
            <li key={article.id}>
              <Card className={styles.card}>
                <Image
                  src={article.coverImage.src}
                  alt={article.coverImage.alt}
                  width={article.coverImage.width}
                  height={article.coverImage.height}
                  className={styles.cover}
                  unoptimized
                />
                <p className={styles.meta}>{article.category} · {article.readingTime} хв читання</p>
                <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
                <p className={styles.description}>{article.description}</p>
                <div className={styles.details}>
                  {article.author && <p>{article.author}</p>}
                  <p>Опубліковано: <time dateTime={article.publishedAt}>{article.publishedAt}</time></p>
                  {article.updatedAt && <p>Оновлено: <time dateTime={article.updatedAt}>{article.updatedAt}</time></p>}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
