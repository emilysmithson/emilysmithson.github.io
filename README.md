# emilysmithson.github.io

Personal portfolio site for Emily Smithson — Flutter Developer, Bristol.

**Live site:** https://emilysmithson.github.io

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Adding a project

1. Create `src/content/projects/your-app.md` with frontmatter (copy an existing file).
2. Add screenshots to `public/images/projects/`.
3. Push to `main` — GitHub Actions deploys automatically.

## Adding a Flutter Web demo

```bash
cd /path/to/flutter/app
flutter build web --base-href "/demos/your-app/"
```

Copy `build/web/` to `public/demos/your-app/`, then set `demo: /demos/your-app/` in the project markdown file.

## Assets to replace

| File | Description |
|------|-------------|
| `public/images/emily-headshot.jpg` | Your portrait photo |
| `public/images/projects/*-hero.png` | App screenshots (many are placeholders) |
| Project markdown `PLACEHOLDER` links | Store URLs, blog links, etc. |

## GitHub Pages setup

Your site uses **one** deploy method: the custom GitHub Actions workflow (`.github/workflows/deploy.yml`).

### Required: disable branch deployment

If you see a failed **"pages build and deployment"** workflow (Jekyll build error), GitHub Pages is still set to **Deploy from a branch** from the old HTML site. That conflicts with Astro.

1. Open **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from a branch")
3. Save — the Jekyll workflow will stop running on each push

The **"Deploy to GitHub Pages"** workflow is the correct one. When it shows green, https://emilysmithson.github.io is updated.

### If deploy fails with *"Deployments are only allowed from master"*

1. Go to **Settings → Environments → github-pages**
2. Under **Deployment branches**, choose **All branches** (or add `main`)
3. Re-run the failed workflow from the **Actions** tab

Or push to `master` — this repo's Pages environment may still be restricted to `master` from the old site setup.

## Content structure

```
src/
  content/
    projects/     # one .md file per app
    experience/   # one .md file per role
  data/
    site.json     # contact info, skills, education
```

Edit `src/data/site.json` to update contact details or skills without touching layout code.
