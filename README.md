# Tosin Joseph — Portfolio

Personal frontend developer site for [Tosin Joseph](https://github.com/AmupitanTJ/). Built as a typed Next.js application with content kept separate from the interface.

The visual system is a dark, minimal developer portfolio: deep navy, off-white type, one electric-blue accent, Geist for text, and JetBrains Mono for metadata. Tokens live in `app/globals.css` and are mirrored in `lib/tokens.ts`.

## Visual system

Tokens are defined in `app/globals.css` (`@theme`) and mirrored in `lib/tokens.ts` — colors, spacing, typography, radius, shadows, and durations.

| Token         | Value               | Role                          |
| ------------- | ------------------- | ----------------------------- |
| Navy          | `#0B1220`           | Page background               |
| Surface       | `#121A2C`           | Cards                         |
| Off-white     | `#EDF1F7`           | Body and headings             |
| Muted         | `#A7B2C6`           | Supporting copy               |
| Accent        | `#4EA2E0`           | Links, focus, primary buttons |
| Strong border | `#7B8BA6`           | Interactive outlines (3:1+)   |
| Radius        | `6–12px`            | Controls and cards            |
| Shadow        | `shadow-card`       | Quiet card lift               |
| Duration      | `150 / 220 / 400ms` | Hover, focus, reveal          |

Reusable primitives: `Container`, `SectionHeading`, `Button`, `Tag`, `ProjectCard`, `SocialLink`, `TimelineItem`, `SectionReveal`.

Geist is used for body and headings. JetBrains Mono is used for tags, labels, dates, and metadata. Focus rings are a 2px accent outline with offset. Color pairs were chosen to meet WCAG 2.2 AA contrast. Interactive controls use the strong border so their shape stays visible at rest.

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
components/   design system, layout, sections, work, contact, shadcn
content/      the only place everyday copy should change
lib/          helpers, motion, and design tokens
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
SITE_URL=https://your-production-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@example.com
NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC=
CONTACT_TO_EMAIL=hello@example.com
CONTACT_FROM_EMAIL=Portfolio <contact@your-verified-domain.com>
RESEND_API_KEY=
```

`SITE_URL` is the canonical production origin used by metadata, JSON-LD, the sitemap, and robots output. `NEXT_PUBLIC_SITE_URL` remains useful for local browser-facing configuration. `NEXT_PUBLIC_CONTACT_EMAIL` is intentionally public and powers the visible mailto fallback. The other contact variables are read only by the server route. Use a Resend-verified sender domain for `CONTACT_FROM_EMAIL`; never prefix `RESEND_API_KEY` with `NEXT_PUBLIC_`.

## SEO and sharing

Every public page defines a unique title, description, canonical URL, Open Graph payload, and Twitter card. Dynamic project and note routes generate metadata from their typed content records. The home sharing image, favicon, Apple icon, sitemap, robots file, and web manifest are generated through Next.js metadata file conventions.

Set `SITE_URL` to the final HTTPS origin before deploying. A localhost fallback is used only for development.

The home page emits `Person` and `WebSite` JSON-LD. Project images use `next/image` with explicit aspect ratios or dimensions to reserve space before image files load.

## Privacy-friendly analytics

Analytics is disabled by default: no analytics script is rendered and no request is made.

To enable Plausible:

1. Add the production domain as a site in Plausible.
2. Open that site's installation settings and copy the `src` URL from its current site-specific script snippet.
3. Set `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC` to that complete URL in the production environment.
4. Redeploy and verify the installation from Plausible.

The optional script loads after the page becomes interactive, keeping it out of the critical rendering path. Leave the variable empty to keep analytics disabled.

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

### GitHub and Vercel

This portfolio is connected to the public [`AmupitanTJ/AmupitanTJ`](https://github.com/AmupitanTJ/AmupitanTJ) repository and the `amupitantj` Vercel project. The `main` branch is the production branch, and the canonical production URL is [`https://amupitantj.vercel.app`](https://amupitantj.vercel.app).

1. Create or select the GitHub repository and push the production branch.
2. In Vercel, choose **Add New → Project**, import that repository, and keep the framework preset set to Next.js.
3. Set the production branch to the repository's default branch.
4. Keep Vercel's Git integration enabled. Every pull request and every push to a non-production branch will receive an isolated preview deployment; merges to the production branch create production deployments.
5. Require the project's lint, typecheck, unit, and end-to-end checks before merging pull requests.

Do not add a separate deployment workflow unless the project needs a custom build pipeline. Vercel's Git integration already creates and updates pull-request previews without storing a Vercel token in GitHub.

### Environment variables

Add values in **Vercel → Project Settings → Environment Variables**, never in tracked files. Variables prefixed with `NEXT_PUBLIC_` are intentionally included in browser JavaScript and must never contain credentials.

| Variable                           | Scope                  | Sensitive | Purpose                                                     |
| ---------------------------------- | ---------------------- | --------- | ----------------------------------------------------------- |
| `SITE_URL`                         | Production and Preview | No        | Canonical HTTPS production origin, without a trailing slash |
| `NEXT_PUBLIC_SITE_URL`             | Production and Preview | No        | Browser-visible production origin                           |
| `NEXT_PUBLIC_CONTACT_EMAIL`        | Production and Preview | No        | Public mailto fallback address                              |
| `CONTACT_TO_EMAIL`                 | Production and Preview | Yes       | Private contact-form recipient                              |
| `CONTACT_FROM_EMAIL`               | Production and Preview | No        | Sender on a Resend-verified domain                          |
| `RESEND_API_KEY`                   | Production and Preview | Yes       | Server-only Resend credential                               |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC` | Production only        | No        | Optional Plausible script URL                               |

Use a separate restricted Resend key for preview deployments if previews need to send mail. Otherwise omit the three server-side mail variables from Preview so preview forms fail safely to the public mailto fallback. Mark `RESEND_API_KEY` and `CONTACT_TO_EMAIL` as sensitive in Vercel.

After changing any environment variable, redeploy; existing deployments do not receive the new value.

### Custom domain

1. Open **Vercel → Project Settings → Domains** and add the apex domain.
2. Add the `www` hostname as well and choose one hostname as the redirect target so there is only one canonical origin.
3. If DNS remains with the registrar, add the exact A/CNAME records Vercel displays. If DNS moves to Vercel, replace the registrar's nameservers with the values Vercel provides.
4. Wait until Vercel reports the domain and SSL certificate as valid.
5. Set both `SITE_URL` and `NEXT_PUBLIC_SITE_URL` to the chosen `https://` canonical origin, then redeploy.

Do not publish registrar credentials, DNS transfer codes, API keys, or screenshots containing environment-variable values.

### Production verification

After the custom domain is serving the latest production deployment:

```text
https://amupitantj.vercel.app/
https://amupitantj.vercel.app/sitemap.xml
https://amupitantj.vercel.app/robots.txt
https://amupitantj.vercel.app/opengraph-image
```

Confirm that the sitemap, robots host and sitemap directive, canonical tags, Open Graph URLs, and JSON-LD all use the same production origin. Submit the contact form with a real inbox you control, confirm delivery and reply-to behaviour, then remove the test message. Check the deployment runtime logs for errors without copying request bodies or credentials into issues or documentation.

Any host that can run `npm run build` and `npm run start` also works.

```bash
npm run build
npm run start
```

## Editing content

Do not start in the React tree. Change the typed modules in `content/`.

| File                    | What it controls                                  |
| ----------------------- | ------------------------------------------------- |
| `content/site.ts`       | Site metadata, navigation, social links           |
| `content/projects.ts`   | Project records at `/projects/<slug>`             |
| `content/experience.ts` | Resume roles                                      |
| `content/skills.ts`     | Tool groups on About and Resume                   |
| `content/notes.ts`      | Notes index — keep empty until a real note exists |
| `content/about.ts`      | About paragraphs and approach                     |

Schemas live in `types/content.ts`: `Project`, `Experience`, `SkillGroup`, `SocialLink`, `SiteMetadata`.

### Add a project

1. Append an object to `projects` in `content/projects.ts`.
2. Use a unique `slug`. That becomes `/projects/<slug>`.
3. Fill the full `Project` contract: descriptions, role, status, year, stack, challenge, solution, key decisions, outcomes, and next steps.
4. Set `status` to `"production"` or `"study"`.
5. Set `featured: true` only if it should appear on the index.
6. Set `githubUrl` / `liveUrl` only when those URLs exist. Otherwise leave them `null` and keep the `TODO:` line.
7. Leave `coverImage` and `gallery` empty until real stills exist.

The `Project` type in `types/content.ts` is the contract. TypeScript will fail the build if a required field is missing. Copy Tosin still needs to replace starts with `TODO:`.

### Honesty rule

This site does not ship testimonials, client logos, award counts, or traffic numbers. If a piece of work is a study, label it `study`. If a claim cannot be pointed to a public repo or a page on this site, leave it out.

## Scripts

| Script              | Purpose                    |
| ------------------- | -------------------------- |
| `npm run dev`       | Development server         |
| `npm run build`     | Production build           |
| `npm run start`     | Serve the production build |
| `npm run lint`      | ESLint                     |
| `npm run format`    | Prettier                   |
| `npm run typecheck` | `tsc --noEmit`             |
| `npm test`          | Vitest                     |
| `npm run test:e2e`  | Playwright                 |

## Final deployment QA checklist

Last completed: 24 August 2026.

### Automated checks

- [x] `npm run lint`
- [x] `npm run typecheck`
- [x] `npm run format:check`
- [x] `npm test` — 34 Vitest tests passed
- [x] `npm run test:e2e` — 46 Playwright tests passed across desktop Chromium and the mobile profile
- [x] `npm run build` — Next.js production build completed successfully
- [x] Published project content is complete and contains no placeholder or internal `TODO` copy
- [x] Every configured project image has useful, non-empty alt text
- [x] Every rendered external link includes `rel="noreferrer"`
- [x] Contact fields have programmatically associated labels and useful validation messages
- [x] Discoverable same-origin links resolve without an error response
- [x] Core pages produce no browser console errors or uncaught page errors

### Manual responsive and accessibility review

- [x] 320px — home, navigation, and contact form remain readable with no horizontal overflow
- [x] 375px — home and project index remain readable with no horizontal overflow
- [x] 768px — navigation transition and page layout remain clear with no horizontal overflow
- [x] 1024px — home and project detail hierarchy remain clear with no horizontal overflow
- [x] 1440px — content width, spacing, and hierarchy remain balanced with no horizontal overflow
- [x] Keyboard-only flow reaches the skip link, primary navigation, mobile menu, project links, and form controls; focus indicators remain visible
- [x] The skip link moves focus to the main content target
- [x] Dark palette contrast checked: primary text 16.52:1, muted text 8.76:1, and primary button 6.75:1
- [x] Reduced-motion mode keeps all content visible, removes smooth scrolling, and avoids movement-dependent interactions
- [x] Public pages and project records were reviewed for fake content, unsupported metrics, client claims, and misleading status labels
- [x] Public GitHub, LinkedIn, project repository, and Next.js links were opened successfully

Before each deployment, rerun the six command checks above and repeat the manual review if layout, navigation, colour tokens, motion, content, or external URLs have changed.

## License

Private personal site. All rights reserved unless you add a license later.
