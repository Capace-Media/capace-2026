# capace-2026

Use the following stack:

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Styling:** Tailwind CSS
- **UI Library:** [shadcn/ui](https://ui.shadcn.com/)
- **Forms:** [TanStack Form](https://tanstack.com/form) + [Zod](https://zod.dev/)
- **Data fetching (client-side):** [TanStack Query](https://tanstack.com/query)
- **Language:** TypeScript

## How to use automatic type generation with Codegen

### Before you begin

Install VSCode plugins: `GrapQL: Syntax Highlighting` and `GraphQL: Language Feature Support`

### Generate types

Whenever you create or modify a query, you have to run Codegen.
Run `pnpm codegen` to start Codegen in watch mode. Every time you save, it will generate types for you.

If you have made a change in WordPress ACF components, make sure to run the command to update your types.

Currently unresolved issue: Whenever you generate types you have to add `type` to the imports in `graphql.ts` and `fragment-masking.ts`. They will give you errors on build if not. For example `import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";` becomes `import { type DocumentTypeDecoration } from "@graphql-typed-document-node/core";`. Looking into a fix for this.
