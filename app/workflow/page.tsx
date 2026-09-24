import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Card } from "../../components/ui/Card";
import { demoContent } from "../../content/demo";
import styles from "./page.module.css";

export const metadata = {
  title: "Workflow",
  description: "Шість етапів контрольованої веброзробки з AI: від ідеї та меж проєкту до перевірки, розгортання й підтвердженого результату.",
};

export default function WorkflowPage() {
  return (
    <Section aria-labelledby="workflow-title" className={styles.page}>
      <Container>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>DevJourney / Workflow</p>
          <h1 id="workflow-title">Від ідеї до перевіреного результату</h1>
          <p className={styles.lead}>
            Шість етапів контрольованої веброзробки з AI. На кожному — зрозуміла
            задача, допомога AI, твої рішення та конкретний результат.
          </p>
          <p className={styles.guidance}>
            AI прискорює роботу, а ти відповідаєш за рішення й кінцевий результат.
            Перед переходом далі перевір результат етапу. Якщо бракує рішення — повернися й уточни його.
          </p>
          <p className={styles.notice}>Для входу в акаунт, прав доступу, платежів, чутливих даних і критичної серверної логіки може знадобитися перевірка досвідченого фахівця. Цей процес не замінює професійну експертизу.</p>
        </header>

        <ol className={styles.steps}>
          {demoContent.workflowSteps.map((step, index) => (
            <li key={step.id}>
              <Card className={styles.step}>
                <div className={styles.summary}>
                  <p className={styles.stepNumber}>Крок {String(index + 1).padStart(2, "0")}</p>
                  <h2 lang="en">{step.title}</h2>
                  <p>{step.description}</p>
                </div>
                <div className={styles.help}>
                  <h3>AI допомагає</h3>
                  <ul>{step.aiHelpsWith.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className={styles.decisions}>
                  <h3>Ти вирішуєш і перевіряєш</h3>
                  <ul>{step.developerDecides.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
