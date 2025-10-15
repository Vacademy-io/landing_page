## VAcademy Designer Guide (No-Code)

This guide helps you create new pages and sections using prompts, while keeping our theme, routing, and components consistent. You do NOT need to code — copy the prompt templates and give them to your AI assistant (or developer) to generate the files.

### What we already have
- Next.js app with TypeScript and Tailwind theme tokens
- Dark mode with automatic theming
- shadcn/ui components (buttons, cards, menus, dialogs, tabs, tooltips, etc.)
- Motion helpers for smooth animations
- SEO defaults and sitemap generation

### How routing (pages) work
- Every page lives at `src/app/<route>/page.tsx`.
- Example: a page at `/courses` is `src/app/courses/page.tsx`.
- Each page exports a default React component and can optionally export `metadata` (title/description).

### Styling rules (keep the theme!)
- Do NOT use hardcoded colors like `#fff` or inline styles.
- Use classes that read from the theme: `bg-background`, `text-foreground`, `text-muted-foreground`, `border`, etc.
- Use the container utility for width and padding: `className="container"`.
- Components from shadcn/ui already follow the theme.

### Components you can use
- Buttons, Cards, Inputs, Labels, Textareas, Select, Separator, Badge, Switch
- Navigation Menu, Dropdown Menu, Sheet (drawer), Dialog (modal), Accordion, Tabs, Tooltip
- Import from `@/components/ui/<component>`

### Animations you can use
- `MotionDiv` for fade-up on scroll (simple, no config needed).
- `useGsapReveal` to animate any selector on scroll.

### Global layout (don’t change)
- Found in `src/app/layout.tsx`. It already provides the theme and toast notifications. Add your content inside each page only.

---

## Prompt templates (copy/paste and adjust)

### 1) Create a new page
"""
Create a new Next.js page at route: /courses
File path: src/app/courses/page.tsx
Requirements:
- Use shadcn/ui components only and Tailwind theme classes (bg-background, text-foreground, text-muted-foreground, border, container)
- Include a hero section with heading and subheading, then a grid of 6 course cards
- Each card: title, short description, a CTA `Button` with variant "default"
- Wrap each major section in `MotionDiv` from `@/lib/motion`
- Add subtle scroll reveals for `.reveal` elements using `useGsapReveal(".reveal")`
- Responsive: 1 column on mobile, 2 on tablet, 3 on desktop
- Export an optional `metadata` title: "Courses — VAcademy"
"""

### 2) Add hero section to an existing page
"""
On page src/app/page.tsx, add a new hero section at the top:
- Full-width container using `className="container"`
- Large heading, short paragraph with `text-muted-foreground`
- Primary `Button` and a secondary `Button` as link
- Wrap section in `MotionDiv`
"""

### 3) Add tabs and accordion in a section
"""
Add a new section with Tabs and an FAQ Accordion:
- Use `Tabs` from `@/components/ui/tabs` with 3 tabs (Overview, Curriculum, Instructors)
- Below, add an FAQ using `Accordion` with 4 items
- Keep spacing and typography consistent with theme
- Use `container` and `text-muted-foreground` where appropriate
"""

### 4) Add a dialog modal CTA
"""
In page src/app/courses/page.tsx, add a `Dialog` that opens from a `Button` labeled "Notify me".
- Dialog content: Title, short text, `Input` for email, and a primary `Button` to submit
- Keep everything themed using our classes
"""

### 5) Add a drawer (mobile menu)
"""
Create a responsive header section for a page with a Sheet (drawer) for mobile navigation:
- Use `NavigationMenu` on desktop
- Use `Sheet` on mobile with menu links
- Links: Home (/), Courses (/courses), Pricing (/pricing), Contact (/contact)
"""

---

## Helpful snippets (for the assistant/developer)

1) Use the Motion wrapper in sections:
```tsx
import { MotionDiv } from "@/lib/motion";

export default function Page() {
  return (
    <section className="container py-16">
      <MotionDiv className="reveal">
        <h1 className="text-3xl font-semibold">Title</h1>
        <p className="text-muted-foreground">Subtext</p>
      </MotionDiv>
    </section>
  );
}
```

2) Use GSAP reveal on all `.reveal` items:
```tsx
"use client";
import { useGsapReveal } from "@/hooks/use-gsap";

export default function Page() {
  useGsapReveal(".reveal");
  return <div className="reveal">Content</div>;
}
```

3) Example metadata in a page:
```tsx
export const metadata = {
  title: "Courses — VAcademy",
  description: "Explore courses to level up your skills.",
};
```

---

## Do / Don’t
- Do: use `container`, `bg-background`, `text-foreground`, `text-muted-foreground`, `border`.
- Do: use shadcn/ui components from `@/components/ui/*`.
- Do: wrap sections with `MotionDiv` and use `useGsapReveal` for scroll reveals.
- Don’t: add inline styles or hardcoded colors.
- Don’t: change `src/app/layout.tsx` or theme provider.

## Media and images
- Place images in `public/` and reference them like `/hero.jpg`.

## Navigation
- For links between pages, use Next.js `Link` with `href="/route"`.

## SEO and sitemap
- Titles and descriptions: set via `export const metadata = { ... }` inside page files.
- Sitemaps are generated automatically on build.

## Running locally (optional)
1) Install once: `npm install`
2) Start: `npm run dev` then open the URL shown in the terminal.


