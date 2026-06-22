> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# EthioReview developer docs

## About this project

- Mintlify site for integrators: Review Widget, Telegram bot, and REST API
- Pages are MDX files with YAML frontmatter; configuration lives in `docs.json`
- OpenAPI spec is synced from the backend: `pnpm sync:openapi` (source: `backend/docs/openapi.json`)
- Live site: `https://docs.ethioreview.com`

## Terminology

- **Publishable key** (`pk_*`) — browser-safe widget credential
- **Secret key** (`sk_*`) — server-side only; never embed in client code
- **Sandbox** vs **production** — separate API clients, widgets, and review data
- **Organization profile** — the business or government entity receiving reviews

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Integrations**
- Code formatting for file names, commands, paths, and code references
- Never document or echo live `sk_*` secrets in examples

## Content boundaries

- Document integrator-facing setup and API usage, not internal admin or ops runbooks
- Dashboard how-tos belong under `dashboard/`; deep API detail in OpenAPI reference
- SDK specifics link to [review-widget](https://github.com/ethioreview/review-widget) where appropriate
