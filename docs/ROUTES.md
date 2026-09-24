# ROUTES

## 1. Purpose

This document defines the approved route structure for DevJourney.

Current Portfolio v1 scope (2026-09-24): Home, Workflow, Toolkit and Articles.
AI Updates is parked; its existing routes remain reachable with labeled fixtures,
but are absent from public navigation and Home promotion.

Routes must remain predictable, readable and consistent.

---

# 2. Primary Routes

| Page       | Route       |
| ---------- | ----------- |
| Home       | `/`         |
| Workflow   | `/workflow` |
| Toolkit    | `/toolkit`  |
| Articles   | `/articles` |
| AI Updates (parked fixture route) | `/updates` |

---

# 3. Dynamic Routes

## Tool Detail

Route:

`/toolkit/[slug]`

Examples:

`/toolkit/chatgpt`
`/toolkit/codex`
`/toolkit/vscode`

One reusable Tool Detail template renders different tools using content data.

---

## Article Detail

Route:

`/articles/[slug]`

Published Portfolio v1 route: `/articles/how-to-start-ai-project`.

The retained fixtures `/articles/how-to-write-ai-coding-task` and
`/articles/review-ai-generated-errors` return 404. Other unpublished slugs also
return 404. `publicArticles` controls lookup, metadata and public discovery.

One reusable Article Detail template renders different articles using content data.

---

## Update Detail

Route:

`/updates/[slug]`

Existing parked examples: `/updates/demo-coding-tool-update`,
`/updates/demo-model-capabilities`. These are fixtures, not production news.

One reusable Update Detail template renders different updates using content data.

---

# 4. Navigation

Primary navigation:

Home
Workflow
Toolkit
Articles

The site logo links to `/`.

Detail pages may use breadcrumbs to show the current location.

Example:

Home → Articles → How to Start an AI Project

---

# 5. Slug Rules

Slugs should:

- use lowercase;
- use Latin characters;
- use hyphens between words;
- be readable;
- describe the content;
- remain stable after publication when possible.

Good:

`how-to-start-ai-project`

Avoid:

`article-1`

`page-final-new`

`post123`

---

# 6. Route Behaviour

If a requested content slug does not exist, the application must return an appropriate Not Found state.

Do not silently display unrelated content.

---

# 7. MVP Route Constraints

The following routes are NOT required for MVP:

`/login`

`/register`

`/account`

`/admin`

`/search`

`/newsletter`

`/comments`

These routes must not be created unless the product requirements change.

---

# 8. Future Routes

Possible future routes may include:

`/search`

`/about`

`/resources`

`/newsletter`

Additional routes require review before implementation.

---

# 9. Routing Principle

Route structure should represent the product's information architecture.

Do not create routes based only on implementation convenience.

Content belongs under the section that users expect to find it in.
