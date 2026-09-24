import { ToolLogo } from "../../components/content/ToolLogo";
import Link from "next/link";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Card } from "../../components/ui/Card";
import { demoContent } from "../../content/demo";
import styles from "./page.module.css";

export const metadata = {
  title: "Toolkit",
  description: "Шість інструментів для контрольованої веброзробки з AI: їхні задачі у Workflow, доречне застосування та відповідальність людини.",
};

export default function ToolkitPage() {
  return (
    <Section aria-labelledby="toolkit-title" className={styles.page}>
      <Container>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>DevJourney / Toolkit</p>
          <h1 id="toolkit-title">Інструменти для кожного етапу</h1>
          <p className={styles.lead}>
            Інструмент обираємо під задачу, а не задачу під інструмент.
            Тут — шість помічників для роботи з ідеями, дизайном, кодом і розгортанням.
            Не кожен проєкт потребує всіх шести.
          </p>
          <p className={styles.notice}>Почни з потрібного етапу Workflow та обери інструмент, який допоможе виконати конкретну задачу. Назви й логотипи належать їхнім власникам; ці освітні описи не означають партнерства чи схвалення DevJourney.</p>
        </header>

        <ul className={styles.grid}>
          {demoContent.tools.map(tool => (
            <li key={tool.id}>
              <Card className={styles.card}>
                <div className={styles.heading}>
                  <ToolLogo tool={tool} />
                  <div>
                    <p className={styles.category}>{tool.category}</p>
                    <h2><Link href={`/toolkit/${tool.slug}`}>{tool.name}</Link></h2>
                  </div>
                </div>
                <p className={styles.description}>{tool.description}</p>
                <div>
                  <h3>Для яких задач</h3>
                  <ul className={styles.useCases}>{tool.useCases.map(useCase => <li key={useCase}>{useCase}</li>)}</ul>
                </div>
                <div className={styles.stages}>
                  <h3>Етапи Workflow</h3>
                  <ul>
                    {tool.workflowStages.map(stage => (
                      <li key={stage} lang="en">
                        {demoContent.workflowSteps.find(step => step.id === stage)!.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
