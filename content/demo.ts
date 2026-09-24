import type { AIUpdate, Article, ImageAsset, Tool, WorkflowStep } from "./models";
import { validateContentCollections } from "./validation";
import { aiAssistedProjectStart } from "./articles/ai-assisted-project-start";

// Workflow and Toolkit are production content; the production article is imported separately.
// Remaining articles and updates are DEMO ONLY.
// Fixture dates and reading times are not publication claims.
// The approved models have no status field. Visible labels keep remaining
// fixtures identifiable without expanding the content contracts.
const cover: ImageAsset = {
  src: "/images/demo/workflow.svg",
  alt: "DEMO: етапи Idea, Discovery, Design, Code, Test, Deploy",
  width: 1200, height: 675, type: "diagram",
  caption: "DEMO — схема для перевірки зображень у шаблоні.",
};
// First-party asset provenance and the OpenAI fallback decision: public/images/tools/README.md.
const toolLogo = (file: string, alt: string, width: number, height = width): ImageAsset => ({
  src: `/images/tools/${file}.svg`, alt, width, height,
  type: file === "neutral-tool" ? "illustration" : "logo",
});

const workflowSteps: WorkflowStep[] = [
  {
    id: "idea", title: "Idea & Goal",
    description: "Визнач продукт, користувача й потребу — власну або клієнта. Результат: короткий опис проєкту (Project Brief).",
    aiHelpsWith: ["Упорядкувати ідею та поставити уточнювальні запитання", "Дослідити альтернативи й помітити, якої інформації бракує"],
    developerDecides: ["Яку проблему варто вирішувати й для кого", "Який корисний результат потрібен користувачу"],
  },
  {
    // Keep the stable stage ID used by existing Toolkit relationships.
    id: "discovery", title: "Scope",
    description: "Визнач, що входить у поточну версію, а що відкладаємо. Результат: погоджені межі проєкту та вимоги.",
    aiHelpsWith: ["Перетворити опис проєкту на вимоги й сценарії користувача", "Запропонувати критерії приймання та виявити невирішені питання"],
    developerDecides: ["Що є пріоритетом і обов’язковим для цієї версії (MUST HAVE)", "Що виходить за межі задачі та переходить у відкладені ідеї (PARKING)"],
  },
  {
    id: "design", title: "Design",
    description: "Погодь вигляд і поведінку продукту до реалізації. Результат: затверджений візуальний напрям або прототип.",
    aiHelpsWith: ["Запропонувати структуру, варіанти інтерфейсу й розміщення контенту", "Порівняти варіанти та пояснити їхні відмінності"],
    developerDecides: ["Візуальний напрям, ієрархію інформації та зручність використання", "Який варіант погоджено для реалізації"],
  },
  {
    id: "code", title: "Build with AI",
    description: "Доручай coding agent невеликі погоджені задачі. Результат: робоча реалізація в затверджених межах.",
    aiHelpsWith: ["Писати й змінювати код, створювати компоненти", "Запускати технічні перевірки та пояснювати реалізацію"],
    developerDecides: ["Що саме доручити агенту та які важливі рішення погодити", "Прийняти чи відхилити результат і зупинити вихід за межі задачі"],
  },
  {
    id: "test", title: "Test & Review",
    description: "Перевір поведінку й відповідність вимогам. Результат: перевірена збірка та список виправлених і відомих проблем.",
    aiHelpsWith: ["Запускати тести, перевіряти маршрути й адаптивність", "Знаходити помилки, перевіряти основи доступності та переглядати код"],
    developerDecides: ["Чи працюють реальні сценарії та чи відповідає вигляд і поведінка вимогам", "Чи потрібна перевірка досвідченого фахівця: сам запуск AI-коду ще не доводить його надійність"],
  },
  {
    id: "deploy", title: "Deploy & Prove",
    description: "Опублікуй проєкт і перевір його за реальною адресою. Результат: розгорнутий проєкт із задокументованими результатами.",
    aiHelpsWith: ["Підготувати розгортання та перевірити конфігурацію", "Виконати короткі перевірки основних сценаріїв і допомогти з документацією"],
    developerDecides: ["Чи працюють сайт, прямі маршрути, ресурси й основні дії після публікації; які обмеження залишилися", "Для навчального проєкту — що показати в портфоліо як доказ виконаної роботи", "Для клієнта — як передати результат і чи потрібна фахова перевірка з огляду на ризики та обсяг проєкту"],
  },
];

const articles: Article[] = [
  aiAssistedProjectStart,
  {
    id: "demo-write-ai-task", slug: "how-to-write-ai-coding-task",
    title: "DEMO — Як описати задачу AI-кодеру",
    description: "DEMO — компактний приклад контексту, меж і перевірки результату.",
    category: "Практика", publishedAt: "2026-09-19", updatedAt: "2026-09-20", readingTime: 1,
    coverImage: cover, relatedArticles: ["demo-start-ai-project"],
    content: [
      { type: "paragraph", text: "DEMO — цей зразок перевіряє відображення промпту без окремого заголовка." },
      { type: "heading", level: 2, text: "Обмежте задачу" },
      { type: "prompt", text: "Реалізуй лише погоджену зміну.\n  Вхід: опис вимог.\n  Вихід: зміна та результати перевірок." },
      { type: "callout", text: "DEMO — додайте критерії приймання до реальної задачі." },
    ],
  },
  {
    id: "demo-review-ai-errors", slug: "review-ai-generated-errors",
    title: "DEMO — Як перевіряти помилки в AI-коді",
    description: "DEMO — короткий приклад для відображення коду та списку перевірок.",
    category: "Перевірка", publishedAt: "2026-09-18", readingTime: 1, coverImage: cover,
    content: [
      { type: "paragraph", text: "DEMO — спочатку відтворіть помилку на невеликому прикладі." },
      { type: "heading", level: 2, text: "Мінімальний приклад" },
      { type: "code", language: "typescript", code: "const stages = [\"idea\", \"code\", \"test\"];\n\nfor (const stage of stages) {\n  console.log(stage);\n}" },
      { type: "checklist", items: ["Помилку відтворено", "Виправлення перевірено"] },
    ],
  },
];

const tools: Tool[] = [
  {
    id: "demo-chatgpt", slug: "chatgpt", name: "ChatGPT", category: "AI-помічник",
    description: "AI-помічник для обговорення ідей, дослідження, планування та пояснень.",
    logo: toolLogo("neutral-tool", "Нейтральна ілюстрація інструмента, не логотип ChatGPT", 64),
    useCases: ["Уточнення ідеї та вимог", "Порівняння підходів"], workflowStages: ["idea", "discovery"],
    websiteUrl: "https://chatgpt.com/overview/", documentationUrl: "https://learn.chatgpt.com/docs",
    relatedArticles: ["demo-start-ai-project"],
    content: [
      { type: "heading", level: 2, text: "Для чого у Workflow" },
      { type: "paragraph", text: "Використовуй ChatGPT, коли ідею ще потрібно перетворити на зрозумілу задачу. Він допоможе поставити уточнювальні запитання, дослідити варіанти, порівняти підходи та пояснити незнайомі поняття." },
      { type: "heading", level: 2, text: "Коли й як спробувати" },
      { type: "paragraph", text: "Перед реалізацією опиши користувача, проблему й обмеження. Попроси знайти прогалини та підготувати структуровану задачу. Результат — чернетка вимог, яку ти перевіряєш і погоджуєш." },
      { type: "callout", title: "Ти вирішуєш і перевіряєш", text: "Перевіряй важливі факти за першоджерелами. Рішення щодо проєкту та відповідність порад реальній проблемі залишаються за тобою: переконлива відповідь може бути помилковою." },
    ],
  },
  {
    id: "demo-codex", slug: "codex", name: "Codex", category: "AI coding agent",
    description: "AI-агент для роботи з кодовою базою та реалізації погоджених задач.",
    logo: toolLogo("neutral-tool", "Нейтральна ілюстрація інструмента, не логотип Codex", 64),
    useCases: ["Реалізація невеликих задач", "Перевірка та пояснення коду"], workflowStages: ["code", "test"],
    websiteUrl: "https://openai.com/codex/", documentationUrl: "https://developers.openai.com/codex/",
    relatedArticles: ["demo-start-ai-project"],
    content: [
      { type: "heading", level: 2, text: "Для чого у Workflow" },
      { type: "paragraph", text: "Coding agent — це AI-помічник, який працює з файлами проєкту й виконує задачі розробки. Codex може читати та змінювати код, створювати компоненти, запускати технічні перевірки, пояснювати реалізацію й допомагати знаходити помилки." },
      { type: "heading", level: 2, text: "Коли й як спробувати" },
      { type: "paragraph", text: "Залучай агента після погодження меж задачі. Наприклад, доручи змінити один компонент: вкажи, що прочитати, що змінити, чого не торкатися та як перевірити результат. Переглянь зміни й поведінку перед наступною задачею." },
      { type: "callout", title: "Ти вирішуєш і перевіряєш", text: "Ти визначаєш обсяг роботи, погоджуєш важливі рішення, приймаєш або відхиляєш зміни та зупиняєш вихід за межі задачі. Згенерований код не стає автоматично безпечним чи готовим до публікації лише тому, що запускається." },
    ],
  },
  {
    id: "demo-vscode", slug: "vscode", name: "VS Code", category: "Редактор",
    description: "Visual Studio Code — редактор і робоче середовище для файлів, коду та команд проєкту.",
    logo: toolLogo("vscode", "Офіційна іконка Visual Studio Code", 100),
    useCases: ["Робота з файлами й кодом", "Команди в терміналі"], workflowStages: ["code", "test"],
    websiteUrl: "https://code.visualstudio.com/", documentationUrl: "https://code.visualstudio.com/docs",
    content: [
      { type: "heading", level: 2, text: "Для чого у Workflow" },
      { type: "paragraph", text: "У Visual Studio Code можна переглядати структуру проєкту, читати й редагувати код та запускати команди у вбудованому терміналі. Розширення додають підтримку потрібних мов та інструментів." },
      { type: "heading", level: 2, text: "Коли й як спробувати" },
      { type: "paragraph", text: "Відкрий папку проєкту, коли потрібно працювати з реалізацією або перевірити зміни AI-агента. Знайди змінений файл, прочитай код і виконай команду перевірки з README. Додавай лише ті розширення, які потрібні для задачі." },
      { type: "callout", title: "Ти вирішуєш і перевіряєш", text: "Розумій, які файли змінюєш і що виконує команда, перш ніж запускати її. Редактор допомагає працювати з проєктом, але не підтверджує правильність коду чи безпечність розширень." },
    ],
  },
  {
    id: "demo-github", slug: "github", name: "GitHub", category: "Репозиторій",
    description: "Платформа для зберігання Git-репозиторіїв, спільної роботи та представлення проєкту.",
    logo: toolLogo("github", "Офіційний знак GitHub Invertocat", 128),
    useCases: ["Історія та перегляд змін", "Передача коду й портфоліо"], workflowStages: ["code", "test", "deploy"],
    websiteUrl: "https://github.com/", documentationUrl: "https://docs.github.com/en/get-started/start-your-journey/what-is-github",
    content: [
      { type: "heading", level: 2, text: "Для чого у Workflow" },
      { type: "paragraph", text: "Git — система контролю версій: вона зберігає історію змін файлів. GitHub розміщує Git-репозиторії онлайн і додає інструменти для обговорення та перегляду коду. Це допомагає співпрацювати, передавати проєкт і показувати виконану роботу." },
      { type: "heading", level: 2, text: "Коли й як спробувати" },
      { type: "paragraph", text: "Використовуй GitHub, коли потрібен спільний репозиторій або код для зовнішнього ревʼю. Наприклад, збережи завершену зміну в Git, поділися нею через GitHub і попроси перевірити її. Для портфоліо додай README з метою проєкту, запуском і відомими обмеженнями." },
      { type: "callout", title: "Ти вирішуєш і перевіряєш", text: "Переглядай зміни перед збереженням і обʼєднанням, контролюй доступ та не публікуй секрети. GitHub не замінює знання основ Git або перевірку якості проєкту." },
    ],
  },
  {
    id: "demo-figma", slug: "figma", name: "Figma", category: "Дизайн",
    description: "Інструмент для макетів інтерфейсу, прототипів і погодження візуального напряму.",
    logo: toolLogo("figma", "Офіційна іконка Figma", 1024, 1280),
    useCases: ["Макети та компоненти", "Погодження прототипу"], workflowStages: ["design"],
    websiteUrl: "https://www.figma.com/", documentationUrl: "https://help.figma.com/hc/en-us",
    content: [
      { type: "heading", level: 2, text: "Для чого у Workflow" },
      { type: "paragraph", text: "У редакторі Figma можна досліджувати варіанти інтерфейсу, розміщувати контент, створювати компоненти та інтерактивні прототипи. Макет допомагає погодити вигляд і основні сценарії до написання коду." },
      { type: "heading", level: 2, text: "Коли й як спробувати" },
      { type: "paragraph", text: "Використовуй Figma, коли вигляд чи взаємодію потрібно обговорити окремо від реалізації. Наприклад, підготуй головний екран і перехід до наступної дії. Якщо проєкт не потребує окремого макета або прототипу, цей інструмент можна пропустити." },
      { type: "callout", title: "Ти вирішуєш і перевіряєш", text: "Ти відповідаєш за ієрархію інформації, зрозумілі дії, доступність і зручність для користувача. Гарний макет ще потрібно перевірити в реалізованому інтерфейсі на різних екранах." },
    ],
  },
  {
    id: "demo-netlify", slug: "netlify", name: "Netlify", category: "Розгортання",
    description: "Платформа для розгортання та хостингу вебпроєктів, обрана для DevJourney.",
    logo: toolLogo("netlify", "Офіційний логотип Netlify", 128),
    useCases: ["Розгортання з репозиторію", "Перевірка опублікованої версії"], workflowStages: ["deploy"],
    websiteUrl: "https://www.netlify.com/", documentationUrl: "https://docs.netlify.com/",
    content: [
      { type: "heading", level: 2, text: "Для чого у Workflow" },
      { type: "paragraph", text: "Netlify допомагає збирати й публікувати вебпроєкти, зокрема з підключеного репозиторію. Попередні версії розгортань дають змогу переглянути зміни за окремою адресою до публікації основної версії." },
      { type: "heading", level: 2, text: "Коли й як спробувати" },
      { type: "paragraph", text: "Переходь до розгортання після локальних перевірок і звіряння вимог проєкту з платформою. Налаштуй збірку, а після публікації відкрий сайт за реальною адресою: перевір прямі маршрути, зображення та основні дії. Для DevJourney обрано Netlify, але іншим проєктам може підходити інший хостинг." },
      { type: "callout", title: "Ти вирішуєш і перевіряєш", text: "Ти відповідаєш за конфігурацію, змінні середовища, вимоги до серверного виконання та перевірку опублікованої версії. Успішна збірка сама по собі не підтверджує, що весь сайт працює правильно." },
    ],
  },
];

const updates: AIUpdate[] = [
  {
    id: "demo-coding-update", slug: "demo-coding-tool-update",
    title: "DEMO — умовне оновлення AI coding tool",
    description: "DEMO — вигаданий сценарій для шаблону, не перевірена актуальна новина.",
    category: "AI Coding Tools", publishedAt: "2026-09-20", readingTime: 1, coverImage: cover,
    relatedUpdates: ["demo-model-update"],
    content: [
      { type: "callout", title: "DEMO — не новина", text: "Подія вигадана. Дата є тестовою метаданою, а не датою реального релізу." },
      { type: "heading", level: 2, text: "Що сталося" },
      { type: "paragraph", text: "Умовний інструмент отримав умовне покращення перевірки змін." },
      { type: "heading", level: 2, text: "Чому це важливо" },
      { type: "paragraph", text: "Зразок допомагає перевірити структуру пояснення впливу на розробника." },
      { type: "heading", level: 2, text: "Що це означає для розробника" },
      { type: "paragraph", text: "Не використовуйте цей текст як підставу для вибору інструмента." },
      { type: "heading", level: 2, text: "Що можна спробувати" },
      { type: "checklist", items: ["Перевірити відображення заголовків", "Перевірити посилання на повʼязаний DEMO-запис"] },
    ],
  },
  {
    id: "demo-model-update", slug: "demo-model-capabilities",
    title: "DEMO — умовна зміна можливостей моделі",
    description: "DEMO — вигаданий запис, без тверджень про реальні моделі або релізи.",
    category: "Models & Capabilities", publishedAt: "2026-09-19", readingTime: 1, coverImage: cover,
    relatedUpdates: ["demo-coding-update"],
    content: [{ type: "paragraph", text: "DEMO — не перевірена новина. Запис потрібен для тестування другої картки та повʼязаних матеріалів." }],
  },
  {
    id: "demo-ecosystem-update", slug: "demo-developer-ecosystem",
    title: "DEMO — умовний огляд developer ecosystem",
    description: "DEMO — тестовий запис категорії, не огляд актуальних подій.",
    category: "Developer Ecosystem", publishedAt: "2026-09-18", readingTime: 1, coverImage: cover,
    content: [{ type: "callout", text: "DEMO — вигаданий матеріал без джерела реальної новини; перевіряє шаблон без relatedUpdates." }],
  },
];

// Legacy export name retained for existing consumers; collection includes production content.
export const demoContent = validateContentCollections({ articles, tools, updates, workflowSteps });

// Portfolio v1 publishes only the approved reference. Fixtures remain available
// for validation, but renaming a fixture must not accidentally publish it.
export const publicArticles = demoContent.articles.filter(article => article.id === aiAssistedProjectStart.id);

// Visible DEMO titles identify remaining fixtures without extending the approved model.
export function isDemoArticle(article: Article): boolean {
  return article.title.startsWith("DEMO — ");
}
