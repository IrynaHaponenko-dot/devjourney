import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Card } from "../../../components/ui/Card";
import { ContentRenderer } from "../../../components/content/ContentRenderer";
import { demoContent } from "../../../content/demo";
import { getContentHeadings } from "../../../content/headings";
import styles from "./page.module.css";

// Match the existing detail routes, including exact-slug behavior on Windows.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = demoContent.updates.find(entry => entry.slug === slug);
  if (!item) notFound();
  return { title: item.title, description: item.description };
}

export default async function UpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const update = demoContent.updates.find(item => item.slug === slug);
  if (!update) notFound();
  const headings = getContentHeadings(update.content);
  const related = demoContent.updates.filter(item => update.relatedUpdates?.includes(item.id));

  return (
    <Section aria-labelledby="update-title" className={styles.page}>
      <Container>
        <Link className={styles.back} href="/updates">← Усі AI Updates</Link>
        <article>
          <header className={styles.intro}>
            <p className={styles.meta}>{update.category} · {update.readingTime} хв читання</p>
            <h1 id="update-title">{update.title}</h1>
            <p className={styles.description}>{update.description}</p>
            <p className={styles.metadata}>Тестова дата публікації: <time dateTime={update.publishedAt}>{update.publishedAt}</time></p>
            <p className={styles.notice}><strong>DEMO — не новина.</strong> Це вигаданий приклад, а не перевірена актуальна новина. Дата й час читання — тестові метадані, а не відомості про реальний реліз.</p>
          </header>
          <div className={styles.layout}>
            {headings.length > 0 && (
              <nav className={styles.toc} aria-label="Зміст оновлення">
                <Card>
                  <details open>
                    <summary>У цьому матеріалі</summary>
                    <ul>{headings.map(heading => (
                      <li key={heading.id} className={heading.level === 3 ? styles.subheading : undefined}>
                        <a href={`#${heading.id}`}>{heading.text}</a>
                      </li>
                    ))}</ul>
                  </details>
                </Card>
              </nav>
            )}
            <div className={styles.reading}>
              <figure className={styles.cover}>
                <Image src={update.coverImage.src} alt={update.coverImage.alt}
                  width={update.coverImage.width} height={update.coverImage.height} unoptimized />
                {update.coverImage.caption && <figcaption>{update.coverImage.caption}</figcaption>}
              </figure>
              <ContentRenderer blocks={update.content} />
              {update.sourceUrl && <p className={styles.source}><a href={update.sourceUrl}>Джерело матеріалу</a></p>}
              {related.length > 0 && (
                <section className={styles.related} aria-labelledby="related-title">
                  <h2 id="related-title">Повʼязані матеріали</h2>
                  <ul>{related.map(item => <li key={item.id}><Link href={`/updates/${item.slug}`}>{item.title}</Link></li>)}</ul>
                </section>
              )}
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
