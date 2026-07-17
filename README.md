# Jameson — Bilingual Personal Portfolio

A responsive English / Simplified Chinese portfolio built with React, Vite, TypeScript, React Router, regular CSS, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run lint
npm run build
npm run preview
```

## Edit the content

- English and Chinese copy, projects, achievements, skills, email, and résumé content: `src/locales/content.ts`
- Shared content types: `src/types/content.ts`
- Theme colors, typography, spacing, and print styling: `src/styles.css`
- Page layouts: `src/pages/`
- Header, footer, language and theme controls: `src/components/Layout.tsx`

Projects use stable slugs and ISO dates. Add matching English and Chinese project records with the same slug so routing and filters remain aligned.

## Resume

Open `/resume`, then choose **Print / Save as PDF**. The print view includes only verified information from the website.

## Details to add later

Education dates, certificate names, evidence images, additional projects, and any more complete résumé details should be added only after they are confirmed. The HSSL achievement remains classified as a team achievement because its sport was not supplied.
