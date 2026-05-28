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
