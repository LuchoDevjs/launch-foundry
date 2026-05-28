# LaunchFoundry Product Roadmap

LaunchFoundry is not just a website repo. It is intended to become a small operating system for selling and producing premium landing pages and ecommerce storefronts.

## What we learned from other tools

- Relume focuses on sitemap, wireframe, style guide, and reusable component libraries. The useful lesson: separate planning from visual design and keep components reusable.
- Webflow and Framer win because they let people reuse templates/components visually. The useful lesson: our codebase needs an internal catalog, not random one-off pages.
- Vercel Platforms shows the long-term direction for serving many customers from one system with custom domains. The useful lesson: keep demos, clients, and templates separated from day one.

Sources:
- https://www.relume.io/ai-site-builder
- https://help.webflow.com/hc/en-us/articles/33961343551763-Libraries
- https://vercel.com/platforms/docs

## Product layers

### 1. Studio panel
Internal workspace for us.

Should manage:
- templates
- demos
- client projects
- offers
- reusable sections
- integrations
- quality checklist

### 2. Template demos
Public-facing previews.

Rules:
- no internal UI
- no shadcn dependency for visual identity
- must be screenshot-ready
- must be reusable through content and sections

### 3. Client projects
A client project should be a configured version of a template whenever possible.

Each client should track:
- business goal
- selected template
- status
- preview link
- production link
- next action

### 4. Integrations
Start simple:
- WhatsApp
- forms
- Vercel deploy
- Tiendanube product/category links
- MercadoPago links

Later:
- Tiendanube product sync
- custom domains
- client dashboard

## Near-term build order

1. Build the internal Studio data model. ✅
2. Improve the Studio panel to show offers, projects, and section library.
3. Finish the Dark Premium demo quality pass.
4. Create one real niche demo: Poker Coach, Local Business, or Ecommerce Storefront.
5. Add a client intake form/schema. ✅
6. Add a launch checklist per client. ✅
7. Add integration recipes for Tiendanube, WhatsApp, forms, and Vercel. ✅

## Quality rule

A template is not “ready” until it has:
- desktop and mobile pass
- hero, proof, services, process, FAQ, CTA, footer
- clear content model
- no internal Studio UI
- deploy verification
- screenshot review

## Client intake

Every client or niche demo should start with an intake record before implementation. The first version is file-based and lives in:

- `src/lib/studio/intake.ts`
- `src/content/studio/intakes.ts`
- `/clients`
- `/clients/[slug]`

This keeps the user in orchestrator mode: they provide business context, screenshots, references, and approvals; Codex executes from a structured brief.

## Launch checklist

Before delivering any landing or ecommerce storefront, run the Launch Checklist at `/checklist`.

The checklist is defined in:

- `src/lib/studio/launch-checklist.ts`
- `src/content/studio/launch-checklist.ts`
- `/checklist`

A client project is not ready until all required checklist items pass.

## Integration recipes

Integration recipes are short operating playbooks for repeated client needs: WhatsApp, forms, Tiendanube, MercadoPago, Vercel/domain, and analytics.

They live in:

- `src/lib/studio/integration-recipes.ts`
- `src/content/studio/integration-recipes.ts`
- `/integrations`

A recipe should explain what it means in plain language, when to use it, what we need from the client, implementation steps, QA checks, and boundaries.
