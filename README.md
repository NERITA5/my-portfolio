# Ngwinkem Ketty Nerita, Portfolio

A Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio, built around
RentFlow as the central case study connecting full-stack development and
QA/test automation.

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Fonts: Fraunces (display), IBM Plex Sans (body), IBM Plex Mono (labels), loaded via `next/font/google`
- No database, no backend. Fully static content, defined in `src/lib/data.ts`

## 1. Run it locally

Requires Node.js 18.18+ (Node 20 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000. The dev server needs internet access once, to
fetch Google Fonts at build/dev time via `next/font/google`.

To build for production:

```bash
npm run build
npm start
```

## 2. Deploying

This is a static-friendly Next.js app. It deploys cleanly to Vercel, the
same platform your other projects, like RentFlow and CertiVERIFY, are on.

1. Push this project to a new GitHub repository.
2. Import it into Vercel (vercel.com, New Project).
3. No environment variables are required.
4. Before going live, update `siteUrl` in `src/app/layout.tsx`,
   `src/app/sitemap.ts`, and `src/app/robots.ts` with your real production
   domain.

## 3. Editing content

Almost everything on the site is driven by one file: `src/lib/data.ts`

That includes your name, contact links, the RentFlow case study content,
every project, QA categories, experience, education, skills, and
credentials. Update the values there and the whole site updates. You
generally won't need to touch component files at all.

A few entries in `data.ts` are marked with `[ADD ...]` or `[CONFIRM ...]`
comments. These are the details that couldn't be filled in confidently:
exact repository URLs for RentFlow, RentFlow QA, ID Finder, and
CertiVERIFY if they differ from your GitHub profile; the Med Clarity
project description and tech stack; and gallery photo captions. Replace
those placeholders with the real values before publishing.

## 4. Adding your profile photo

All image paths below are wired to expect `.jpg` files specifically. If
your photo is a `.png` or `.webp`, either convert it to `.jpg` first or
rename the file's extension in the matching path in `src/lib/data.ts`
(profile photo) or the relevant component (project covers, evidence,
gallery). Any reasonable photo size works; the layout crops to fit.

The Hero section is already wired to look for:

```
public/images/profile/headshot.jpeg
```

Drop your photo in with that exact name and it appears automatically, no
code changes needed. Until it's there, the site shows a small placeholder
in its place rather than a broken image.

## 5. Adding your resume

Place your resume PDF at:

```
public/resume.pdf
```

The "Download Resume" buttons in the navbar, mobile menu, and hero already
link to `/resume.pdf`, so no code changes are needed. If the file isn't
present yet, the link will simply 404 until you add it, so add it before
publishing.

## 6. Adding project screenshots

Each project card and the RentFlow case study page are already wired to
look for a cover image at these exact paths:

```
public/images/projects/rentflow/cover.jpeg
public/images/projects/idfinder/cover.jpeg
public/images/projects/certiverify/cover.jpeg
public/images/projects/rsvp/cover.jpeg
public/images/projects/other/balm-of-gilead.jpeg
public/images/projects/other/med-clarity.jpeg
public/images/projects/other/weather-app.jpeg
public/images/projects/other/car-diagnostic-app.jpeg
```

Drop a screenshot in with the exact filename shown above for that project
and it appears automatically on the homepage (and on the RentFlow case
study page, for RentFlow's cover). No code changes needed. Until an image
is added, that spot shows a small placeholder naming the missing file
instead of a broken image icon.

If you want more than one screenshot per project later, the pattern to
follow is in `src/components/ProjectCard.tsx` and
`src/app/projects/rentflow/page.tsx`, both of which use the small
`SmartImage` component (`src/components/SmartImage.tsx`).

## 7. Adding QA evidence (test plans, reports, automation/CI screenshots)

The Evidence section on the RentFlow case study page
(`src/app/projects/rentflow/page.tsx`) is already wired to look for these
exact files:

```
public/images/qa/test-plan.jpg
public/images/qa/test-scenarios.jpg
public/images/qa/test-cases.jpg
public/images/qa/test-execution.jpg
public/images/qa/defect-reports.jpg
public/images/qa/automation.jpg
public/images/qa/cicd.jpg
public/images/qa/qa-report.jpg
```

Drop a screenshot in with the matching filename and it replaces the
placeholder automatically. If a specific piece of evidence lives in the
`rentflow-qa` GitHub repository instead of as a screenshot (a markdown
test plan, a GitHub Actions run, and so on), you can wrap that evidence
card in an `<a>` linking to the file or workflow run in the repo instead,
inside `src/app/projects/rentflow/page.tsx`.

The evidence list itself (titles, descriptions, and file paths) lives in
`rentflow.evidence` inside `src/lib/data.ts` if you want to add, remove,
or reword entries, or change a filename.

## 8. Adding university gallery photos

The gallery is wired to look for a photo named after each entry's `id`,
defined in `galleryImages` in `src/lib/data.ts`:

```
public/images/university/grad-1.jpg
public/images/university/defense-1.jpg
public/images/university/defense-2.jpg
public/images/university/campus-1.jpg
public/images/university/milestone-1.jpg
```

Drop a photo in with the matching filename and it appears automatically,
including in the lightbox (click to expand, next/previous, keyboard
arrows, Escape to close). Update the `caption` field for each entry in
`galleryImages` with your real captions (they currently read
`[ADD CAPTION]`). To add more photos, add a new entry to `galleryImages`
with a new `id`, then add a file named `{that id}.jpg` to the folder.

## 9. Updating projects

- Featured projects (RentFlow, ID Finder, CertiVERIFY, RSVP): edit the
  `projects` array in `src/lib/data.ts`.
- Other/secondary projects (Balm of Gilead, Med Clarity, Weather App, Car
  Diagnostic App): edit the `otherProjects` array in the same file.
- Each project's `categories` array controls which filter buttons (All,
  Full-Stack, Frontend, Backend, QA, Blockchain) it appears under in the
  Featured Projects section.
- To add a brand-new project, copy an existing object in either array and
  fill in the fields. The grid and filters pick it up automatically.

## 10. Project structure

```
src/
  app/
    layout.tsx          root layout, fonts, global SEO metadata
    page.tsx             homepage, assembles all sections
    sitemap.ts / robots.ts
    projects/rentflow/page.tsx   dedicated RentFlow case study page
  components/            one component per section/UI piece
  lib/
    data.ts               almost all editable content lives here
    utils.ts
public/
  images/                 organized by section (profile, projects, university, qa)
  resume.pdf              add your resume here
```

## 11. Design notes

The palette pairs a bright royal blue (navy) with warm gold, mint, and
coral used sparingly for accents, on a warm off-white background, so
sections stay bright and readable rather than heavy or dark. Section
kickers rotate through the accent colors for visual rhythm. The scrolling
tech marquee under the hero, the colored RentFlow build-flow diagram, and
the gradient hover accent on project cards are the site's signature
visual touches, meant to make it memorable rather than a generic template.

Everything is responsive from small phones through large desktop
monitors: the nav collapses into a full-screen mobile menu, grids stack
to a single column on narrow screens, and type sizes scale down at the
smallest breakpoints so nothing overflows or wraps awkwardly.

## 12. Notes on accuracy

No test counts, defect counts, coverage percentages, metrics, team sizes,
or fabricated repository URLs were invented anywhere in this project.
Anything that couldn't be confirmed from the information provided is left
as an explicit `[ADD ...]` or `[CONFIRM ...]` placeholder in
`src/lib/data.ts` rather than a plausible guess. Search that file for
those markers before publishing.
#   m y - p o r t f o l i o  
 