# EthioReview Developer Docs (Mintlify)

Developer portal for **Review Widget**, **Telegram**, and **API** integrations. Designed as a **standalone Git repository** connected to [Mintlify](https://mintlify.com).

Live site (after deploy): `https://docs.ethioreview.com` or `https://ethioreview.mintlify.app`

## Local preview

```bash
cd packages/developer-docs
pnpm install
pnpm sync:openapi   # copies ../../docs/openapi.json (run pnpm gen:openapi in backend first)
pnpm dev            # http://localhost:3000
```

## Publish to Mintlify (recommended setup)

### Option A — Import this repo (best for ongoing sync)

1. Push this folder to **`ethioreview/developer-docs`** on GitHub (see [Promote to standalone repo](#promote-to-standalone-repo)).
2. Go to [mintlify.com/start](https://mintlify.com/start).
3. Choose **Import existing developer docs** (or connect GitHub repository).
4. Select **`ethioreview/developer-docs`**.
5. Install the **Mintlify GitHub App** on that repo — Mintlify will deploy on every push to `main`.
6. Set custom domain: **Settings → Domains → `docs.ethioreview.com`**.

Mintlify reads `docs.json` for navigation and MDX pages in this repo. OpenAPI reference uses `openapi.json` (sync from backend).

### Option B — Mintlify auto-generate from a public repo (quick bootstrap)

For a first draft from an existing public repo, replace `github.com` with `mintlify.com` in the URL:

```
https://mintlify.com/ethioreview/backend
```

Review the generated structure, then **clone into your Mintlify project** and replace with the curated content in this package.

### Option C — Scrape legacy Markdown

If you have docs on another host (GitBook, Docusaurus, etc.):

```bash
npx @mintlify/scraping@latest scrape --url https://your-old-docs-site.com
```

Copy generated MDX into this repo, merge navigation in `docs.json`, push to trigger deploy.

## Keep docs up to date automatically

| Source            | Sync method                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| **This repo**     | Mintlify GitHub App → auto-deploy on push                                    |
| **OpenAPI**       | Backend CI runs `pnpm gen:openapi` → PR to copy `openapi.json` here          |
| **review-widget** | Link to SDK repo; optionally scrape `packages/review-widget/docs/*.md` in CI |
| **telegram-bots** | Content maintained in this portal under Integrations → Telegram              |

Suggested GitHub Action (backend repo) after OpenAPI changes:

```yaml
# .github/workflows/sync-developer-docs-openapi.yml
on:
  push:
    paths: [docs/openapi.json]
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: peter-evans/repository-dispatch@v3
        with:
          token: ${{ secrets.DOCS_REPO_PAT }}
          repository: ethioreview/developer-docs
          event-type: sync-openapi
```

In `developer-docs` repo, handle dispatch: checkout → copy artifact or pull from backend → commit `openapi.json`.

## Promote to standalone repo

This folder is scaffolded under `backend/packages/developer-docs` until the remote exists:

```bash
cd packages/developer-docs
git init
git add .
git commit -m "feat: initial Mintlify developer portal"
git remote add origin https://github.com/ethioreview/developer-docs.git
git push -u origin main
```

Then add as submodule in backend (optional):

```bash
git submodule add https://github.com/ethioreview/developer-docs.git packages/developer-docs
```

## Link from product dashboard

Org dashboard **Integrations** tab should link out:

- **Documentation** → `https://docs.ethioreview.com/quickstart`
- **Widget setup guide** → `/dashboard/widget-setup`
- **Telegram setup guide** → `/dashboard/telegram-setup`

The dashboard performs setup actions (keys, link codes); this site explains how.

## Structure

```
docs.json              # Mintlify navigation + theme
introduction.mdx       # Landing
integrations/widget/   # Widget guides
integrations/telegram/ # Telegram guides
dashboard/             # Dashboard checklists for business devs
sdks/review-widget/    # SDK reference
openapi.json           # Synced from backend (gitignored until sync)
scripts/sync-openapi.mjs
```

## Assets

Add brand assets before first public deploy:

- `logo/light.svg`, `logo/dark.svg`
- `favicon.svg`
