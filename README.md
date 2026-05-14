# Gemios Consulting — website

Professional portfolio site for Gemios Consulting, built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**. Marketing copy and structured data live under `src/content/`; UI lives in `src/components/`, `src/layout/`, and `src/sections/`.

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+

## Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm install`  | Install dependencies           |
| `npm run dev`  | Local dev server (Vite)        |
| `npm run build`| Production build → `dist/`     |
| `npm run preview` | Serve `dist/` locally       |
| `npm run typecheck` | `tsc --noEmit`            |

## Firebase Hosting

Hosting serves the **Vite build output** directory `dist/`.

1. Run `npm run build`.
2. Deploy with Firebase CLI: `firebase deploy --only hosting`  
   Or rely on **GitHub Actions** (`.github/workflows/firebase-hosting-*.yml`), which run `npm ci && npm run build` then deploy.

Static assets placed in `public/` (for example `favicon.svg`) are copied into `dist/` at build time.

## Content updates

Edit files in `src/content/` (for example `site.ts`, `services.ts`, `cta.ts`, `sectionsMeta.ts`) rather than changing section layout in TSX, unless you are adjusting structure or styling.
