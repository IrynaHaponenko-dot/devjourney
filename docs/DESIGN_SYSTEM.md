# DESIGN SYSTEM

## 1. Purpose

This document translates the approved DevJourney visual direction into reusable implementation rules.

The approved visual prototypes remain the primary visual reference.

Implementation should reproduce their visual character, hierarchy and proportions rather than inventing a new design.

---

# 2. Visual Direction

DevJourney visual character:

**clean / technical / modern / educational / warm**

Core principles:

- generous whitespace;
- strong typography hierarchy;
- warm light surfaces;
- dark graphite text;
- controlled orange/coral accent;
- dark developer-oriented sections;
- rounded cards;
- subtle depth;
- meaningful illustrations;
- content-first layouts.

Avoid:

- excessive gradients;
- excessive shadows;
- decorative clutter;
- overly corporate SaaS appearance;
- excessive animation;
- unnecessary visual effects.

---

# 3. Color Tokens

Initial implementation tokens:

```css
:root {
  --color-bg: #faf8f4;
  --color-surface: #ffffff;
  --color-surface-soft: #f4f1eb;

  --color-text: #17191d;
  --color-text-muted: #65676d;

  --color-accent: #f26a3d;
  --color-accent-hover: #dc5730;
  --color-accent-soft: #fff0e9;

  --color-border: #e5e1da;

  --color-dark: #17191d;
  --color-dark-surface: #22252a;
  --color-dark-text: #f7f5f1;
  --color-dark-muted: #b7b8bc;

  --color-success: #287a55;
  --color-warning: #a66516;
  --color-error: #b94444;
}
```

These values are the starting implementation target.

Small adjustments are allowed only through visual QA and should be updated here if approved.

---

# 4. Typography

Use a modern readable sans-serif typeface suitable for Ukrainian and Latin text.

Exact production font should prioritize:

- readability;
- Ukrainian character support;
- performance;
- visual similarity to approved prototypes.

Approved typography decision (2026-09-19):

Inter is the primary visual font for DevJourney. Use these font-family tokens:

```css
--font-family-sans: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-family-mono: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
```

Step 02 defines the tokens and fallback stacks only. If Inter is not locally
available, the fallback stack may render during development. Do not add a font
package, remote Google Fonts request, or other dependency in this step. Font
delivery requires separate explicit authorization.

Initial scale:

```css
--font-size-hero: clamp(3rem, 6vw, 4.5rem);
--font-size-h1: clamp(2.5rem, 5vw, 3.5rem);
--font-size-h2: clamp(2rem, 4vw, 2.75rem);
--font-size-h3: 1.5rem;
--font-size-body-lg: 1.125rem;
--font-size-body: 1rem;
--font-size-small: 0.875rem;
```

Recommended line heights:

```css
--line-height-heading: 1.1;
--line-height-body: 1.65;
--line-height-small: 1.5;
```

Headings:

- strong weight;
- compact line-height;
- clear separation from body text.

Body:

- highly readable;
- comfortable line-height;
- avoid excessively long line lengths.

Editorial article content should generally stay near:

`65–75 characters per line`.

---

# 5. Layout Containers

Primary page container:

```css
--container-max: 1200px;
--content-max: 760px;
```

Standard horizontal padding:

Desktop:

`32px`

Tablet:

`24px`

Mobile:

`20px`

Wide layouts such as hero sections may use the full primary container.

Long-form article text should use the narrower content width.

Approved Step 03 Container defaults:

- `width: 100%`, centered with automatic horizontal margins;
- default maximum width: `var(--container-max)`;
- narrow maximum width: `var(--content-max)`;
- horizontal padding: 20px by default, 24px at widths >= 768px, and 32px at widths >= 1024px;
- use border-box sizing so padding is included in the container width and cannot add viewport overflow.

---

# 6. Spacing System

Use a consistent spacing scale.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
```

Typical section spacing:

Desktop:

`96–128px`

Mobile:

`64–80px`

Avoid arbitrary spacing values unless visual QA demonstrates a real need.

Approved Step 03 Section defaults: use vertical padding, not margins between
sections. Apply `var(--space-8)` (64px) by default and `var(--space-9)` (96px)
at widths >= 1024px. Do not add background variants in Step 03.

---

# 7. Grid

Use CSS Grid or Flexbox according to layout needs.

Common desktop layouts:

Hero:

`2 columns`

Content card sections:

`3 columns`

Tool grids:

`3–4 columns depending on card width`

Article detail:

`content + Table of Contents`

Mobile:

Most multi-column layouts collapse to:

`1 column`

Do not force desktop layouts into narrow screens.

---

# 8. Border Radius

```css
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;
--radius-xl: 28px;
--radius-pill: 999px;
```

Primary cards generally use:

`20px`

Buttons may use medium radius or pill treatment depending on approved component style.

---

# 9. Shadows

Use subtle depth.

```css
--shadow-sm: 0 4px 16px rgba(20, 20, 20, 0.05);

--shadow-md: 0 12px 32px rgba(20, 20, 20, 0.08);
```

Avoid heavy floating-card effects.

Borders and surface contrast should do most of the structural work.

---

# 10. Buttons

Primary button:

- orange/coral background;
- high contrast text;
- clear hover state;
- visible keyboard focus;
- comfortable tap target.

Secondary button:

- neutral/light background or transparent;
- clear border or text treatment.

Minimum recommended interactive height:

`44px`

Buttons should communicate action hierarchy.

Do not use the accent style for every action.

Approved Step 03 Button defaults:

- only `primary` and `secondary` variants;
- minimum interactive height: 44px;
- radius: `var(--radius-md)`;
- horizontal padding: `var(--space-5)`;
- primary background: `var(--color-accent)`; hover background: `var(--color-accent-hover)`;
- primary foreground: `var(--color-text)`;
- secondary: transparent background, `var(--color-text)`, and a 1px solid `var(--color-border)` border;
- disabled actions use native disabled semantics, visibly reduced emphasis, and no pointer interaction;
- preserve the global focus-visible foundation;
- actions use button semantics; navigation uses link semantics.

Accessibility decision approved on 2026-09-20: use the existing dark
`--color-text` for the primary foreground instead of light text. Its contrast is
approximately 5.79:1 on the accent background and 4.57:1 on the hover background.
White text would provide approximately 3.04:1 and 3.85:1 respectively, below the
4.5:1 minimum for normal-size text. The approved accent and accent-hover tokens
remain unchanged. This decision replaces the earlier light-text instruction.

---

# 11. Cards

Cards should be:

- content-first;
- readable;
- rounded;
- lightly bordered or shadowed;
- consistent in internal spacing.

Typical structure:

IMAGE / ICON  
→ LABEL  
→ TITLE  
→ DESCRIPTION  
→ OPTIONAL META/ACTION

Cards in the same grid should maintain visual rhythm even when content length varies.

Approved Step 03 Card defaults:

- background: `var(--color-surface)`;
- text: `var(--color-text)`;
- border: 1px solid `var(--color-border)`;
- radius: `var(--radius-lg)`;
- padding: `var(--space-5)`;
- shadow: `var(--shadow-sm)`;
- presentation only: no interactive or card-click behavior in Step 03.

---

# 12. Images & Illustrations

Images must have a defined content or visual role.

Approved types:

- editorial illustration;
- screenshot;
- diagram;
- tool/logo asset;
- developer workspace visual;
- content example.

Common ratios:

Hero/editorial:

`16:9`

Cards:

`16:9` or consistent project-specific ratio.

Images should:

- use responsive sizing;
- avoid distortion;
- use appropriate object-fit;
- have meaningful alt text when informative;
- be optimized before production.

Decorative images may use empty alt text when appropriate.

---

# 13. Dark Developer Blocks

Dark blocks are a distinctive DevJourney visual element.

Use them for:

- prompts;
- code examples;
- developer concepts;
- highlighted technical content.

Style:

- near-black graphite surface;
- light text;
- restrained accent;
- comfortable padding;
- strong readability;
- rounded corners.

Do not turn every section dark.

Dark blocks should create deliberate visual rhythm.

---

# 14. Prompt Blocks

Prompt blocks should make reusable prompts easy to identify.

Expected content:

- label;
- optional title;
- prompt text;
- optional copy action.

Prompt content must remain readable on mobile.

Long lines must wrap safely.

---

# 15. Code Blocks

Code blocks should:

- preserve formatting;
- use monospace typography;
- support horizontal overflow when required;
- maintain readable contrast;
- visually differ from normal editorial text.

Code must not break page width on mobile.

---

# 16. Header

Header should remain visually lightweight.

Expected elements:

- DevJourney logo/brand;
- primary navigation;
- primary CTA where appropriate;
- mobile navigation control.

Desktop:

navigation visible.

Mobile:

navigation collapses into accessible menu.

Required mobile behavior:

- clear menu trigger;
- `aria-expanded`;
- keyboard support;
- Escape closes menu where appropriate;
- visible focus states.

---

# 17. Footer

Use the approved dark footer direction consistently across primary pages.

Footer may contain:

- DevJourney identity;
- navigation;
- useful project links;
- support area;
- copyright/basic project information.

The approved visual support element:

**by me coffee**

is part of the visual direction.

Actual payment/support integration is not an MVP requirement until separately approved.

---

# 18. Table of Contents

Article and Update Detail pages may use a Table of Contents.

Desktop:

sidebar or adjacent navigation.

Mobile:

compact/collapsible presentation.

Table of Contents should reflect the actual heading structure.

Do not maintain a separate manually duplicated heading list when it can be derived safely from content.

---

# 19. Interaction States

Interactive elements must define:

- default;
- hover;
- focus-visible;
- active where relevant;
- disabled where relevant.

Focus must not be removed for visual convenience.

Example principle:

```css
:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
}
```

Exact styling may be refined during implementation.

Step 18 accessibility correction (2026-09-21): the outline inherits the
element's existing text color. Coral against the warm background measured
2.87:1, below the 3:1 non-text contrast threshold. Existing dark text on light
surfaces and light text on dark surfaces provide a contrasting focus indicator
without changing color tokens, outline thickness, or offset.

---

# 20. Responsive Breakpoints

Initial reference breakpoints:

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

Components should respond to available space rather than relying blindly on device labels.

Breakpoints may be adjusted when real content demonstrates a need.

---

# 21. Mobile Rules

Mobile is a first-class experience.

On smaller screens:

- multi-column grids collapse;
- typography scales down;
- horizontal padding decreases;
- images remain proportional;
- navigation changes form;
- Table of Contents becomes compact;
- buttons remain easy to tap;
- code/prompt blocks do not overflow the viewport.

Do not simply shrink the desktop layout.

---

# 22. Motion

Motion should be subtle and functional.

Possible uses:

- hover transitions;
- menu transitions;
- small state changes.

Respect:

`prefers-reduced-motion`

Avoid animation that delays access to content.

---

# 23. Accessibility

Minimum requirements:

- semantic HTML;
- logical heading hierarchy;
- keyboard navigation;
- visible focus;
- sufficient contrast;
- meaningful alt text;
- accessible controls;
- adequate tap targets;
- readable text size;
- reduced-motion support.

Accessibility is part of implementation quality, not an optional final polish.

---

# 24. Visual QA

## Article Detail: Back to Top

Long Article Detail pages (readingTime of at least five minutes) provide a reusable
Back to Top button. Other page types and shorter articles do not show it.

- Appears after scrolling more than one viewport (at least 640px) and after the
  article introduction has left the viewport.
- Fixed near the lower-right edge; 48 × 48px touch target, existing primary Button
  colors/radius, shadow and global 3px focus-visible outline.
- Ukrainian accessible name: `Повернутися на початок статті`; arrow is decorative.
- A reserved 48px right gutter in the reading layout below 1440px, plus the existing
  container padding, prevents overlap with text, TOC and related links. The title
  and introduction retain their original width. At wider viewports, the existing outer margin provides room.
  Safe-area insets are respected. The gutter is stable, without a scroll-triggered layout shift.
- Hides when the article bottom rises above the control's lower edge, keeping it
  out of the footer and its controls; scrolling back into the article restores it.
- Native button supports pointer/touch, Enter and Space. Activation focuses the
  article h1 (programmatically focusable, not added to the Tab order), then returns
  to page scroll position zero. Focus is not stranded on the disappearing button.
- Smooth scrolling by default; an immediate jump for `prefers-reduced-motion: reduce`.
- No dependency or changes to global scroll behavior. Scroll work is scheduled once
  per animation frame; listeners are cleaned up when the article unmounts.

Implementation is not visually approved merely because the page works.

For each major page/template:

IMPLEMENT  
→ RUN  
→ CAPTURE SCREENSHOT  
→ COMPARE WITH APPROVED PROTOTYPE  
→ IDENTIFY DIFFERENCES  
→ CORRECT  
→ REVIEW AGAIN  
→ APPROVE

Compare:

- page proportions;
- container widths;
- section spacing;
- typography;
- colors;
- cards;
- borders;
- shadows;
- imagery;
- alignment;
- responsive behavior.

Do not redesign the approved prototype during implementation without explicit review.

---

# 25. Change Control

If implementation demonstrates that a design token or component rule must change:

1. identify the problem;
2. explain why the current rule fails;
3. propose the change;
4. review visual impact;
5. approve the change;
6. update DESIGN_SYSTEM.md;
7. implement consistently.

Do not accumulate undocumented one-off CSS fixes.

---

# 26. Visual Source of Truth

Visual implementation uses three coordinated references:

1. Approved Visual Prototype
2. DESIGN_SYSTEM.md
3. Page Visual Specification

If these conflict, stop and identify the conflict before making a major design decision.
