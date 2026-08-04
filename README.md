# Cloud Cheat Sheet — Azure ⇄ AWS

An interactive, educational cheat sheet that maps **every major Azure service to its AWS equivalent** (and vice-versa), side by side. Inspired by [azurecheatsheet.com](https://azurecheatsheet.com/), extended to be dual-cloud, searchable, and trackable.

![tech](https://img.shields.io/badge/React-19-149eca) ![tech](https://img.shields.io/badge/Vite-8-646cff) ![tech](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Features

- **Split view by default** — Azure on the left, AWS on the right, each service lined up against its counterpart.
- **Click any tile → side-by-side comparison** — open a detail panel that shows both clouds together. Click an Azure service to see the AWS equivalent and vice-versa.
- **Grouped by category** — 14 categories (Compute, Serverless, Containers, Storage, Databases, Networking, Security, Observability, DevOps, Integration, Analytics, AI/ML, Management, IoT).
- **Hover descriptions** — hover any tile for a plain-English explanation.
- **Ecosystem limitations** — every service lists real, concrete limits and quotas (e.g. Lambda's 15-min timeout & 1,000 concurrent executions vs Azure Functions' consumption timeouts and scale limits).
- **Search** — instant filtering across names, taglines, descriptions, and limitations of both clouds.
- **Learning tracker** — mark any service as **understood**; it turns green with a ✓ and is saved to your browser. A Progress page shows completion per cloud and per category.
- **Azure-only / AWS-only views**, a **Sitemap** page, and **print/PDF** friendly styling.

## Sitemap

```
/ (Split View)          Azure ⇄ AWS, grouped by category — the default
  ├─ Azure              Azure-only tiles (click → comparison with AWS)
  ├─ AWS                AWS-only tiles (click → comparison with Azure)
  ├─ My Progress        Stats + per-category bars + list of learned services
  └─ Sitemap            How-to guide, page index, full category/service listing
```

## Tech stack

- **React 19 + TypeScript** (strict)
- **Vite 8** for dev/build
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **localStorage** for progress (no backend, fully client-side)
- No router dependency — lightweight internal view state (also avoids known router CVEs)

## Data model

All content lives in `src/data/services/*.ts`, one file per category. Each entry maps one concept across both clouds:

```ts
interface ServiceMapping {
  id: string;
  category: CategoryId;
  concept: string;          // cloud-agnostic name
  azure: CloudService;
  aws: CloudService;
}

interface CloudService {
  name: string;
  tagline: string;
  description: string;       // shown on hover + detail
  limitations: string[];     // ecosystem limits / quotas
  docsUrl: string;
  free?: boolean;
}
```

This dataset (91 mappings / 182 services) was generated using a **multi-agent workflow**: parallel agents each produced a set of categories against a shared schema, which were then aggregated in `src/data/index.ts`.

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Adding or editing services

1. Open the relevant file in `src/data/services/` (e.g. `databases.ts`).
2. Add a `ServiceMapping` entry with a unique kebab-case `id` prefixed by the category.
3. Fill in accurate `description`, `limitations`, and `docsUrl` for both clouds.
4. It appears automatically — the aggregator in `src/data/index.ts` picks up the exported array.
