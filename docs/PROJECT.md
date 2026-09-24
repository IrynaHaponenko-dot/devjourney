# PROJECT

## 1. Project Overview

**Working name:** DevJourney  
**Product type:** Information portal  
**Language:** Ukrainian  
**Project complexity:** Intermediate

DevJourney — практичний навчальний і портфоліо-проєкт про контрольовану AI-assisted веброзробку.

Проєкт показує, як використовувати AI під час веброзробки: від ідеї та визначення меж до коду, перевірки й підготовки до розгортання. Людина відповідає за рішення та кінцевий результат.

Поточний напрям — Practice / Prove. Робоча гіпотеза Learn → Practice → Prove → Client
слугує орієнтиром для майбутніх рішень, а не дозволом розширювати продукт у курс.

Це не курс програмування з нуля і не енциклопедія AI-інструментів.

Основний фокус — практичний процес створення вебпроєктів разом з AI.

---

# 2. Target Audience

Основна аудиторія:

початківці у веброзробці, які вже мають базове розуміння HTML, CSS та JavaScript і хочуть навчитися використовувати AI у реальних проєктах.

Користувач уже розуміє базові принципи веброзробки, але може не знати:

- як правильно почати AI-assisted проєкт;
- що делегувати AI;
- що повинен вирішувати розробник;
- як формулювати завдання AI-кодеру;
- як перевіряти AI-generated code;
- як працювати з помилками;
- які AI та developer tools використовувати;
- як пройти шлях від ідеї до deployment.

---

# 3. Product Promise

Допомогти початківцю зрозуміти практичний workflow AI-assisted web development та показати інструменти, матеріали й приклади, які можна застосовувати у власних проєктах.

Основний принцип:

**AI helps. Developer decides.**

AI допомагає досліджувати, проєктувати, писати та перевіряти код, але архітектурні, продуктові та фінальні рішення залишаються за людиною.

---

# 4. Core User Tasks

Користувач повинен мати можливість:

1. зрозуміти workflow AI-assisted development;
2. знайти відповідний developer/AI tool;
3. прочитати практичні матеріали;
4. застосувати приклади, prompt і checklist із затвердженої production-статті.

---

# 5. Portfolio v1 Sections

## Home

Головна точка входу в портал.

Представляє:

- концепцію AI-assisted development;
- Workflow;
- Toolkit;
- Articles;
- основні CTA.

## Workflow

Практичний шлях:

**Idea & Goal → Scope → Design → Build with AI → Test & Review → Deploy & Prove**

Кожен етап пояснює:

- що відбувається;
- як може допомогти AI;
- що людина повинна вирішити або перевірити;
- який конкретний результат потрібен для переходу далі.

## Toolkit

Колекція основних інструментів для AI-assisted web development.

Затверджені шість інструментів:

- ChatGPT;
- Codex;
- VS Code;
- GitHub;
- Figma;
- Netlify.

Кожен tool використовує reusable Tool Detail template.

## Articles

Одна затверджена production-стаття: «Як правильно почати AI-assisted вебпроєкт»
за адресою `/articles/how-to-start-ai-project`. Дві demo-статті збережені як fixtures,
виключені з публічних списків і повертають 404. Додаткові статті — PARKING.

Кожна стаття використовує reusable Article Detail template.

## AI Updates — PARKING

Не входить у публічну пропозицію Portfolio v1 та не просувається в Home/navigation.
Існуючі маршрути технічно доступні з явно позначеними demo-записами, не новинами.
Нижче збережено задум розділу для майбутнього рішення, не поточну production-функцію.

Відібрані оновлення, що мають практичне значення для web developers.

Категорії:

- AI Coding Tools;
- Models & Capabilities;
- Developer Ecosystem.

Основна структура Update:

**Що сталося → Чому це важливо → Що це означає для розробника → Що можна спробувати.**

Кожне оновлення використовує reusable Update Detail template.

---

# 6. Content Principles

Production content повинен бути практичним і придатним до використання.

Основний принцип:

**Explanation → Example → Practical Action**

Контент може містити:

- текст;
- screenshots;
- generated illustrations;
- diagrams;
- prompts;
- code examples;
- checklists;
- callouts;
- practical examples.

Production content не повинен містити Lorem Ipsum або випадкові placeholder materials.

Demo/test content повинен бути явно відокремлений від production content.

---

# 7. Visual Direction

Затверджений напрям:

**clean / technical / modern / educational**

Основні характеристики:

- warm light/off-white background;
- dark graphite/navy text;
- orange/coral accent;
- dark developer/code sections;
- strong typography hierarchy;
- rounded content cards;
- subtle shadows;
- spacious layout;
- meaningful illustrations and screenshots.

Images та illustrations повинні підтримувати зміст, а не використовуватися лише як decoration.

Mobile experience є повноцінною частиною продукту.

---

# 8. MVP Constraints

MVP повинен залишатися компактним.

Не входять у поточний MVP:

- authentication;
- user accounts;
- comments;
- admin panel;
- multilingual support;
- complex CMS;
- site search;
- automatic publishing;
- newsletter system;
- PDF generation/download system;
- складний backend;
- автоматичний AI news ingestion.

Елементи, які випадково з'явилися у visual prototypes, не стають product requirements без окремого рішення.

---

# 9. Content Architecture Principle

UI/templates та content/data повинні бути відокремлені.

Проєкт використовує reusable templates:

- Tool Detail;
- Article Detail;
- Update Detail.

Додавання нового Tool, Article або Update не повинно вимагати створення нового UI page/component для кожного матеріалу.

Content source повинен мати можливість бути заміненим у майбутньому без повної перебудови frontend.

---

# 10. Future Possibilities

Поза MVP можуть розглядатися:

- search;
- CMS;
- content management workflow;
- newsletter;
- content backlog;
- AI-assisted drafting;
- review → publish workflow;
- AI/news ingestion;
- semi-automated content generation;
- larger content library;
- additional tools;
- support/donation integration;
- analytics and extended SEO.

Ці можливості не повинні ускладнювати MVP без необхідності.

---

# 11. Project Learning Goals

Проєкт створюється не лише як сайт, а як навчальний production workflow.

Під час роботи потрібно практично пройти:

**Discovery → References → Visual Specification → Visual Prototype → Product Specification → Implementation Plan → Development → Content Production → QA → Deployment → Retrospective**

Навчальні цілі:

- product thinking;
- UX/UI specification;
- architecture;
- reusable components;
- content-driven development;
- Git/GitHub workflow;
- AI-assisted coding;
- code review;
- debugging;
- testing;
- deployment;
- production content;
- visual QA;
- documentation.

---

# 12. Portfolio Goal

Фінальний результат повинен бути не demo mockup, а працюючий deployed digital product.

Portfolio case повинен показати:

- problem;
- product thinking;
- workflow;
- visual design process;
- architecture;
- AI-assisted development process;
- implementation;
- problems encountered;
- solutions;
- final production website;
- lessons learned.

---

# 13. Project Status

Стан на 2026-09-24: **Portfolio v1 — release preparation**.

Production content завершено та прийнято через Step 24: Home, шість етапів Workflow,
шість інструментів Toolkit і одна стаття. Локальні engineering checks проходять.
Step 25 готує README та репозиторій; human review pending.

Git ініціалізовано, але комітів і remote ще немає. GitHub/commit та deployment
не розпочаті; hosted verification і зовнішнє developer review не виконані.
Візуали ChatGPT/Codex залишаються нейтральними; official asset polish — PARKING,
не блокер Portfolio v1. Історія й наступний дозволений крок: `PROGRESS.md`.
