# Portfolio Frontend

Personal software-engineering portfolio for Andrej Eftimov, built with React, JavaScript, Vite, and Tailwind CSS v4.

## Current state

The application shell, theme system, homepage, projects listing, reusable project-detail system, More page, and Contact page are implemented. Real profile imagery is integrated, MyCircle/MTJ/CodeRev use curated project screenshots, and TwitterClone/Orbiter/Nefy use intentional technical-profile visuals until suitable screenshots exist.

The final content, asset, responsive, accessibility, routing, and pre-deployment architecture passes are complete. Project routes keep independent scroll positions for the current browser tab, image metadata is validated, and GitHub Pages deployment is configured with clean client-side URLs.

## Stack

- React 19
- JavaScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React

## Source structure

```text
src/
├── contact/             # Contact page and contact constants
├── home/                # Homepage sections and homepage constants
├── layouts/             # Global application shell
├── more/                # Personal / beyond-code page
├── projects/            # Project catalog, detail pages, components, metadata
└── shared/              # Reusable routing, theme, styles, utilities, constants
```

Constants remain feature-owned where possible. Project tags, statuses, listing metadata, and detail content live under `projects/constants/`; app-wide identity/navigation values live under `shared/constants/`.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Verify the source:

```bash
npm run lint
npm run build
```

`npm run lint` runs ESLint plus the custom minimum-font-size and project-data checks.

## Validation rules

- Minimum UI font size: **12px / 0.75rem**.
- Every project requires a valid shared status and at least one shared tag.
- Every project requires detail-page content.
- Real project images require descriptive alt text and explicit intrinsic width/height metadata.
- External project links must use HTTPS.
- `package-lock.json` must be committed before deployment. The Pages workflow verifies it before running `npm ci`.

The project intentionally does not use a global state store, API client, form framework, or other application infrastructure that the current static portfolio does not need.

## Assets

Public images live under `public/images/` and are referenced through the shared `assetPath()` helper so Vite/GitHub Pages base paths remain compatible.

Current real assets:

- profile portrait;
- MyCircle dashboard/tasks/events;
- MTJ home/moods/journals/insights (with privacy-safe surname obscuration on the home screen);
- CodeRev landing/public-slots/host dark/host light.

Projects without suitable screenshots use a deliberate technical-profile visual rather than fake product screenshots.

## Routing and scroll behavior

The portfolio uses `BrowserRouter` with Vite's `BASE_URL` as its basename. Internal route links therefore remain correct for both root hosting and repository-style GitHub Pages hosting.

Homepage section links are represented as React Router destinations (`pathname` + `hash`) rather than hardcoded root URLs. Route scroll positions are stored per pathname/search key in `sessionStorage`, so `/projects` and each `/projects/:slug` page keep independent positions for the lifetime of the browser tab. Hash navigation takes precedence when a destination explicitly targets a section.

## GitHub Pages deployment

The repository includes `.github/workflows/deploy-pages.yml`.

The workflow:

1. checks out the repository;
2. verifies that the committed `package-lock.json` exists and matches `package.json` metadata;
3. installs dependencies with `npm ci`;
4. determines the Vite base path;
5. runs the full validation suite;
6. builds the application and creates `dist/404.html` for SPA deep-link fallback;
7. deploys `dist/` through GitHub Pages Actions.

In GitHub, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

### Base-path behavior

By default the workflow uses:

- `/` for a `<username>.github.io` repository;
- `/<repository>/` for a normal project repository.

This matches Vite's expected GitHub Pages deployment model.

For a future custom domain (or any deployment that should be served from `/` despite using a normal repository), create a GitHub Actions **repository variable** named:

```text
VITE_BASE_PATH
```

and set it to:

```text
/
```

The workflow treats this variable as an explicit override. Other non-root deployment paths may also be supplied; the build normalizes leading/trailing slashes.

## Lockfile

`package-lock.json` is intentionally part of the repository contract and must be committed. Do not add it to `.gitignore`.

If it is missing locally, regenerate it from the project root with:

```bash
npm install
```

Then commit the resulting `package-lock.json` together with `package.json` dependency changes.
