> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# EthioReview developer docs

## About this project

- Public Mintlify site for **external integrators** (widget, Telegram, REST API)
- Pages are MDX files with YAML frontmatter; configuration lives in `docs.json`
- OpenAPI spec is synced internally — do not document sync pipelines on published pages
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

## Content boundaries — security

**Do not publish** in MDX pages (integrator-facing docs):

- Internal repository links (backend, telegram-bots, infrastructure, private monorepos)
- Backend deployment, queues, bridge services, or environment variable names
- Self-hosting runbooks for EthioReview-operated services
- Internal permission slugs, admin-only ops, or maintainer sync workflows
- Links to private GitHub org repos or release pages

**Do publish** — what integrators need:

- Public API base URL (`https://api.ethioreview.com/api/v1`)
- Publishable vs secret key usage
- Dashboard setup steps and public npm SDK packages
- Widget/Telegram integration guides and OpenAPI reference for public endpoints

Maintainer-only notes belong in `README.md` (not published by Mintlify).
