# EthioReview Developer Docs

Mintlify portal for **API keys**, **sandbox**, **review widgets**, **digital platforms**, and **Telegram**.

**Live:** [docs.ethioreview.com](https://docs.ethioreview.com) · **Repo:** [ethioreview/docs](https://github.com/ethioreview/docs)

Related:

- Sample app — [ethioreview/er-widget-sample](https://github.com/ethioreview/er-widget-sample)
- Widget packages — [ethioreview/review-widget](https://github.com/ethioreview/review-widget) (`@ethioreview/review-widget-*` on npm)
- Backend (submodule host) — [ethioreview/backend](https://github.com/ethioreview/backend) → `packages/developer-docs`

## Local preview

```bash
pnpm install
pnpm sync:openapi   # copies backend/docs/openapi.json → ./openapi.json
pnpm dev            # http://localhost:3000
```

From the backend monorepo checkout:

```bash
cd packages/developer-docs
pnpm install && pnpm sync:openapi && pnpm dev
```

Generate a fresh OpenAPI file in the backend first if needed: `pnpm gen:openapi`.

## Deploy (Mintlify)

This repo is the Mintlify content source. Production is `docs.ethioreview.com`.

1. Push to **`main`** on `ethioreview/docs`.
2. Mintlify auto-deploys when the **Mintlify GitHub App** is installed on the `ethioreview` org and connected to this repo.
3. If the live site is behind GitHub, open the [Mintlify dashboard](https://dashboard.mintlify.com) → project → **Deploy / Update**, and confirm Git settings point at **`ethioreview/docs`** / **`main`**.

`docs.json` drives navigation and theme. The API Reference tab uses committed **`openapi.json`** (keep it in git; do not gitignore it). After regenerating the spec:

```bash
pnpm sync:openapi
git add openapi.json
git commit -m "chore: sync openapi.json"
git push
```

## Content map

| Area | Path |
| ---- | ---- |
| Get started | `introduction.mdx`, `quickstart.mdx`, `authentication.mdx`, `environments.mdx` |
| API keys | `api-keys/` |
| Sandbox | `sandbox/` (overview, dashboard test, sample app) |
| Review widget | `integrations/widget/` |
| Digital platforms | `integrations/digital-platform/` |
| Telegram | `integrations/telegram/` |
| Dashboard workflows | `dashboard/` |
| SDKs | `sdks/review-widget/` |
| OpenAPI | `openapi.json` + `api-reference.mdx` |

Internal preview UI lives under `widgets-ui/` (ignored by Mintlify via `.mintignore`).

## Submodule workflow (backend)

```bash
# in packages/developer-docs
git checkout main && git pull
# edit → commit → push to ethioreview/docs

# in backend root
git add packages/developer-docs
git commit -m "chore: bump developer-docs submodule"
git push
```

## Dashboard deep links

Point Integrations UI at:

- Docs home / quickstart → `https://docs.ethioreview.com/quickstart`
- Widget setup → `/dashboard/widget-setup`
- Digital platform → `/dashboard/digital-platform-setup`
- Telegram setup → `/dashboard/telegram-setup`
- Sandbox sample → `/sandbox/sample-app`
