import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Card } from "../../../components/ui/Card";
import { ContentRenderer } from "../../../components/content/ContentRenderer";
import { BackToTop } from "../../../components/content/BackToTop";
import { publicArticles } from "../../../content/demo";
import { getContentHeadings } from "../../../content/headings";
import styles from "./page.module.css";

// Match Tool Detail: exact request-time lookup also works on Windows.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = publicArticles.find(entry => entry.slug === slug);
  if (!item) notFound();
  return { title: item.title, description: item.description };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = publicArticles.find(item => item.slug === slug);
  if (!article) notFound();
  const headings = getContentHeadings(article.content);
  const isLongArticle = article.readingTime >= 5;
  const related = publicArticles.filter(item => item.id !== article.id && article.relatedArticles?.includes(item.id));

  return (
    <Section aria-labelledby="article-title" className={styles.page}>
      <Container>
        <Link className={styles.back} href="/articles">← Усі статті</Link>
        <article>
          <header className={styles.intro}>
            <p className={styles.meta}>{article.category} · {article.readingTime} хв читання</p>
            <h1 id="article-title" tabIndex={-1}>{article.title}</h1>
            <p className={styles.description}>{article.description}</p>
            <div className={styles.metadata}>
              {article.author && <p>{article.author}</p>}
              <p>Опубліковано: <time dateTime={article.publishedAt}>{article.publishedAt}</time></p>
              {article.updatedAt && <p>Оновлено: <time dateTime={article.updatedAt}>{article.updatedAt}</time></p>}
            </div>
          </header>

          <div className={[styles.layout, isLongArticle && styles.withBackToTop].filter(Boolean).join(" ")}>
            {headings.length > 0 && (
              <nav className={styles.toc} aria-label="Зміст статті">
                <Card>
                  <details open>
                    <summary>У цій статті</summary>
                    <ul>
                      {headings.map(heading => (
                        <li key={heading.id} className={heading.level === 3 ? styles.subheading : undefined}>
                          <a href={`#${heading.id}`}>{heading.text}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </Card>
              </nav>
            )}
            <div className={styles.reading}>
              <figure className={styles.cover}>
                <Image src={article.coverImage.src} alt={article.coverImage.alt}
                  width={article.coverImage.width} height={article.coverImage.height} unoptimized />
                {article.coverImage.caption && <figcaption>{article.coverImage.caption}</figcaption>}
              </figure>
              <ContentRenderer blocks={article.content} />
              {related.length > 0 && (
                <section className={styles.related} aria-labelledby="related-title">
                  <h2 id="related-title">Повʼязані матеріали</h2>
                  <ul>{related.map(item => <li key={item.id}><Link href={`/articles/${item.slug}`}>{item.title}</Link></li>)}</ul>
                </section>
              )}
            </div>
          </div>
        </article>
      </Container>
      {isLongArticle && <BackToTop key={article.id} targetId="article-title" />}
    </Section>
  );
}
