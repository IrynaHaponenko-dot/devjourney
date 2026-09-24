import { ToolLogo } from "../../../components/content/ToolLogo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Card } from "../../../components/ui/Card";
import { ContentRenderer } from "../../../components/content/ContentRenderer";
import { demoContent, publicArticles } from "../../../content/demo";
import styles from "./page.module.css";

// Check every request: on case-insensitive filesystems prebuilt HTML can make
// an invalid uppercase slug resolve to a lowercase tool's cached page.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = demoContent.tools.find(entry => entry.slug === slug);
  if (!item) notFound();
  return { title: item.name, description: item.description };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = demoContent.tools.find(item => item.slug === slug);
  if (!tool) notFound();

  const relatedArticles = publicArticles.filter(article =>
    tool.relatedArticles?.includes(article.id),
  );

  return (
    <Section aria-labelledby="tool-title" className={styles.page}>
      <Container>
        <Link href="/toolkit" className={styles.back}>← Усі інструменти</Link>
        <header className={styles.intro}>
          <div className={styles.identity}>
            <ToolLogo tool={tool} size={64} />
            <div><p className={styles.category}>{tool.category}</p><h1 id="tool-title">{tool.name}</h1></div>
          </div>
          <p className={styles.description}>{tool.description}</p>
          <p className={styles.notice}>Обирай інструмент під задачу. Він допомагає виконати роботу, а рішення й перевірка результату залишаються за тобою.</p>
          {(tool.websiteUrl || tool.documentationUrl) && (
            <ul className={styles.resources}>
              {tool.websiteUrl && <li><a href={tool.websiteUrl}>Сайт {tool.name}</a></li>}
              {tool.documentationUrl && <li><a href={tool.documentationUrl}>Документація {tool.name}</a></li>}
            </ul>
          )}
        </header>

        <div className={styles.layout}>
          <div className={styles.content}>
            <ContentRenderer blocks={tool.content} />
            {relatedArticles.length > 0 && (
              <section aria-labelledby="related-title" className={styles.related}>
                <h2 id="related-title">Повʼязані матеріали</h2>
                <ul>{relatedArticles.map(article => <li key={article.id}><Link href={`/articles/${article.slug}`}>{article.title}</Link></li>)}</ul>
              </section>
            )}
          </div>
          <aside className={styles.facts} aria-label="Застосування інструмента">
            <Card>
              <h2>Для яких задач</h2>
              <ul>{tool.useCases.map(useCase => <li key={useCase}>{useCase}</li>)}</ul>
            </Card>
            <Card>
              <h2>Етапи Workflow</h2>
              <ul>{tool.workflowStages.map(stage => (
                <li key={stage}>{demoContent.workflowSteps.find(step => step.id === stage)!.title}</li>
              ))}</ul>
              <Link href="/workflow">Переглянути Workflow</Link>
            </Card>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
