import Link from "next/link";
import Image from "next/image";
import { ToolLogo } from "../components/content/ToolLogo";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { demoContent, publicArticles } from "../content/demo";
import styles from "./page.module.css";

export const metadata = {
  title: { absolute: "DevJourney — контрольована веброзробка з AI" },
  description: "Практичний шлях від ідеї до перевіреного й розгорнутого вебпроєкту з AI. Плануй роботу, обирай інструменти та контролюй результат.",
};

export default function Page() {
  return (
    <div className={styles.home}>
      <Section aria-labelledby="home-title">
        <Container className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>DevJourney / AI-assisted web development</p>
            <h1 id="home-title">Створюй веб&shy;продукти з AI — <span>але контролюй результат.</span></h1>
            <p className={styles.lead}>AI допомагає швидше планувати, проєктувати, писати код, тестувати й розгортати сайт. Але згенерований результат ще потрібно зрозуміти та перевірити. DevJourney показує шлях від ідеї до перевіреного й розгорнутого вебпроєкту.</p>
            <div className={styles.actions}>
              <Button href="/workflow">Почати з Workflow</Button>
              <Button href="/toolkit" variant="secondary">Переглянути Toolkit</Button>
            </div>
          </div>
          <aside className={styles.principle} aria-label="Принцип DevJourney">
            <p className={styles.eyebrow}>Людина керує процесом</p>
            <p className={styles.statement} lang="en">AI helps.<br /><span>Developer decides.</span></p>
            <p>Для тих, хто вже створює вебпроєкти з AI або вчиться це робити. AI прискорює роботу. Ти відповідаєш за рішення та кінцевий результат.</p>
            <div className={styles.principleFooter}><span aria-hidden="true">→</span> Від запитання до усвідомленого рішення</div>
          </aside>
        </Container>
      </Section>

      <Container><p className={styles.demoNotice}>Почни з Workflow або практичної статті про підготовку AI-assisted проєкту. У Toolkit знайдеш інструменти для конкретних задач.</p></Container>

      <Section aria-labelledby="workflow-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>01 / Workflow</p><h2 id="workflow-title">Шість кроків. Один шлях.</h2><p>Спочатку визнач задачу. Потім реалізуй невеликий крок, перевір результат і вирішуй, що робити далі. Повторюй цей процес від ідеї до розгортання.</p></div>
            <Link className={styles.sectionLink} href="/workflow">Переглянути весь Workflow <span aria-hidden="true">→</span></Link>
          </div>
          <ol className={styles.workflow}>
            {demoContent.workflowSteps.map((step, index) => <li key={step.id}><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3 lang="en">{step.title}</h3><p>{step.description}</p></li>)}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="toolkit-title" className={styles.softSection}>
        <Container>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>02 / Toolkit</p><h2 id="toolkit-title">Інструменти для твоїх задач</h2><p>Обирай інструмент під задачу, а не заради колекції. Цей набір охоплює планування, розробку, контроль версій, дизайн і розгортання.</p></div>
            <Link className={styles.sectionLink} href="/toolkit">Відкрити Toolkit <span aria-hidden="true">→</span></Link>
          </div>
          <ul className={styles.grid}>
            {demoContent.tools.map(tool => <li key={tool.id}><Card className={styles.card}><div className={styles.toolHeading}><ToolLogo tool={tool} /><div><p className={styles.meta}>{tool.category}</p><h3><Link href={`/toolkit/${tool.slug}`}>{tool.name}</Link></h3></div></div><p>{tool.useCases.join(" · ")}</p></Card></li>)}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="articles-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>03 / Articles</p><h2 id="articles-title">Менше здогадок. Більше практики.</h2><p>Практичні матеріали про рішення, процес і уроки веброзробки з AI. Почни з підготовки проєкту до першого рядка коду.</p></div>
            <Link className={styles.sectionLink} href="/articles">Перейти до Articles <span aria-hidden="true">→</span></Link>
          </div>
          <ul className={styles.grid}>
            {publicArticles.map(article => <li key={article.id}><Card className={styles.card}><Image className={styles.cover} src={article.coverImage.src} alt={article.coverImage.alt} width={article.coverImage.width} height={article.coverImage.height} unoptimized /><p className={styles.meta}>{article.category} · {article.readingTime} хв читання</p><h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3><p>{article.description}</p></Card></li>)}
          </ul>
        </Container>
      </Section>

    </div>
  );
}
