# Hoops Chic

Premium, mobile-first catalog website for Hoops Chic handmade jewelry. Customers
can browse the collection in Spanish or English and place orders through
WhatsApp. The current release intentionally does not include checkout, payments,
customer accounts, or inventory management.

## Features

- Spanish and English routes, metadata, navigation, and catalog content
- Product catalog with search and category filters
- Product detail, collections, gift guide, gallery, reviews, FAQ, and contact pages
- WhatsApp ordering with localized product messages
- Sanity-managed products, categories, pricing, translations, and images
- Responsive Sanity image delivery through Next.js Image
- Static catalog fallback when Sanity is unavailable or not configured
- SEO metadata, language alternates, sitemap, robots, and semantic page structure
- Mobile-first responsive design with accessible keyboard navigation

Published Sanity catalog changes are revalidated by the storefront approximately
every 60 seconds.

## Technology

- Next.js App Router, React, and TypeScript
- Tailwind CSS v4 and CSS variables
- shadcn/ui, Radix UI, and Lucide icons
- Framer Motion
- Sanity Content Lake and `next-sanity`
- Vercel hosting

## Project structure

```text
src/
  app/[locale]/       Localized App Router pages
  components/         Layout, sections, product, and UI components
  data/               Static fallback catalog and supporting content
  i18n/               Locale configuration, dictionaries, and metadata
  sanity/             Sanity client, queries, image builder, and environment
  types/              Shared catalog types
```

The Sanity dashboard and schemas live in the separate private
[`studio-hoops-chic`](https://github.com/JhymerMartinez/studio-hoops-chic)
repository. Authorized content editors can use the deployed
[Hoops Chic Studio](https://hoops-chic.sanity.studio/).

## Local development

Requirements:

- Node.js 20.9 or newer
- npm

Install dependencies and configure the local environment:

```bash
npm install
cp .env.example .env.local
```

Replace the example Sanity project ID in `.env.local` with the valid project
configuration, then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Unprefixed routes redirect
to Spanish (`/es`); English is available under `/en`.

## Environment variables

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-16
```

These values are public Sanity connection identifiers, not write credentials.
No Sanity token is required for the published catalog. Local environment files
are ignored by Git; configure the same variables in Vercel for CMS-backed
deployments. Without them, the application serves the static fallback catalog.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

The `develop` branch is used for ongoing work. Production deployments are
created from `main` through the repository's Vercel integration. Configure the
Sanity environment variables for the appropriate Vercel environments before
deploying.
