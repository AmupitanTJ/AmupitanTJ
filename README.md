# Tosin Joseph — Portfolio

Personal frontend developer site for [Tosin Joseph](https://github.com/Tosinjoseph). Built as a typed Next.js application with content kept separate from the interface.

The design is a compositor desk: paper stock, registration marks, numbered plates. It is not a generic SaaS template.

## Stack

- Next.js App Router
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lucide React
- ESLint, Prettier, Vitest, Playwright

## Folder structure

```text
app/          routes, metadata, generated icons
components/   layout, sections, work, contact, shadcn primitives
content/      the only place everyday copy should change
lib/          helpers for projects, contact, metadata
public/       static files
types/        shared TypeScript contracts
tests/        Vitest unit tests and Playwright e2e tests
```

## Setup

Requires Node.js 20 or newer.

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=
```

Leave `NEXT_PUBLIC_CONTACT_EMAIL` empty until you want the contact form to open a mail draft. GitHub and LinkedIn still work without it.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run typecheck
npm run lint
npm run format
```

## Testing

Unit tests (Vitest):

```bash
npm test
npm run test:watch
```

End-to-end tests (Playwright). First time only:

```bash
npx playwright install chromium
```

Then:

```bash
npm run test:e2e
```

Playwright starts the Next.js dev server unless one is already running.

## Deployment

The site is a standard Next.js app. Vercel is the shortest path:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production origin, for example `https://tosinjoseph.com`.
4. Set `NEXT_PUBLIC_CONTACT_EMAIL` if the contact form should open a mail draft.
5. Deploy.

Any host that can run `npm run build` and `npm run start` also works.

```bash
npm run build
npm run start
```

## Editing content

Do not start in the React tree. Change the typed modules in `content/`.

| File | What it controls |
| --- | --- |
| `content/site.ts` | Name, role, location, headline, navigation, social links |
| `content/about.ts` | About paragraphs, approach, tools, current focus |
| `content/projects.ts` | The work register and each case file |

### Add a project

1. Append an object to `projects` in `content/projects.ts`.
2. Use a unique `slug`. That becomes `/work/<slug>`.
3. Set `status` to `"production"` or `"study"`.
4. Set `featured: true` only if it should appear on the index.
5. Add a `repo` link when the source is public.
6. Optionally add a matching plate in `components/work/project-plate.tsx`.

The `Project` type in `types/content.ts` is the contract. TypeScript will fail the build if a required field is missing.

### Honesty rule

This site does not ship testimonials, client logos, award counts, or traffic numbers. If a piece of work is a study, label it `study`. If a claim cannot be pointed to a public repo or a page on this site, leave it out.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest |
| `npm run test:e2e` | Playwright |

## License

Private personal site. All rights reserved unless you add a license later.
