# LaunchFoundry Architecture

LaunchFoundry is a reusable system for building premium landing pages and ecommerce storefronts quickly.

## Core idea

- Code owns the premium storefront experience.
- Tiendanube/Shopify/MercadoPago can own checkout, payments, stock, and orders.
- Every client build should produce reusable sections, copy patterns, or theme decisions.

## Initial stack

- Next.js: app structure, routing, SEO, Vercel deploys.
- React: reusable UI sections and templates.
- TypeScript: safer long-term changes.
- Tailwind CSS: fast visual iteration.
- Motion for React: premium animation layer when needed.
- Vercel: easiest deploy path.

## Product lines

1. Premium landing pages for service businesses, coaches, courses, consultants, and local businesses.
2. Ecommerce storefronts connected to Tiendanube as the sales engine.

## Folder intent

- `src/app`: pages, metadata, and global styles.
- `src/components/layout`: reusable site shell pieces.
- `src/components/sections`: reusable landing/ecommerce sections.
- `src/components/ui`: small primitive UI components.
- `src/content`: editable content per template/client.
- `docs`: architecture and operating notes.

## Separation of concerns

LaunchFoundry has two different surfaces:

1. Studio panel: our internal workspace for templates, clients, statuses, and demos. This surface can use shadcn/ui because it is a product/dashboard interface.
2. Client templates: the public landing pages and storefronts we sell. These should use custom Tailwind/Motion components instead of shadcn so they feel bespoke and premium.

Rule: shadcn/ui is allowed in `src/components/studio` and app routes that are part of the internal panel. Client-facing templates should use `src/components/template-ui` or template-specific components.

## Route model

- `/`: internal studio dashboard.
- `/templates`: internal template library.
- `/templates/[slug]`: internal template ficha with status, sections, notes, and work checklist.
- `/demos/[slug]`: public-facing demo that shows the template as a client would see it.

Rule: never mix internal studio controls into demo routes. A demo route should be sellable or screenshot-ready.

## Studio domain model

The Studio domain model lives in:

- `src/lib/studio/types.ts` — shared TypeScript contracts.
- `src/content/studio/templates.ts` — template registry.
- `src/content/studio/client-projects.ts` — client/project registry.
- `src/content/studio/offers.ts` — sellable offers.
- `src/content/studio/section-library.ts` — reusable section inventory.

Rule: if something becomes reusable or sellable, it should be represented in the Studio model instead of living only as loose JSX.

## Public premium component system

Client-facing demos should use reusable public components in `src/components/public`. These are inspired by Framer-like reuse: premium buttons, cards, glow backgrounds, section headers, trust rows, and FAQ blocks.

Rule: Studio components (`src/components/ui` + shadcn) are for internal workflow. Public demo components (`src/components/public`) are for sellable landing pages and should feel bespoke.
