# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

### Code Quality
- `pnpm lint` - Run Prettier and ESLint checks
- `pnpm format` - Format code with Prettier
- `pnpm check` - Run Svelte type checking
- `pnpm check:watch` - Run Svelte type checking in watch mode

### Testing
- `pnpm test:unit` - Run unit tests with Vitest
- `pnpm test:e2e` - Run end-to-end tests with Playwright
- `pnpm test` - Run all tests (unit + e2e)

## Architecture

This is a SvelteKit application with the following structure:

- **Framework**: SvelteKit with Svelte 5 (using runes syntax)
- **Styling**: TailwindCSS v4 with shadcn-svelte components
- **Testing**: Vitest for unit tests, Playwright for e2e tests
- **Deployment**: Configured for Vercel with @sveltejs/adapter-vercel

### Key Components
- **Layout**: Header/Main/Footer structure in `+layout.svelte`
- **UI Components**: shadcn-svelte components in `src/lib/components/shadcn/`
- **Utilities**: Common utilities in `src/lib/utils.ts`

### Testing Setup
- Unit tests use Vitest with browser environment (Playwright provider)
- Component tests: `*.svelte.test.ts` files
- Server tests: `*.test.ts` files (excluding Svelte component tests)
- E2E tests in `e2e/` directory

### Component Library
Uses shadcn-svelte with configuration in `components.json`:
- Base color: neutral
- Components installed in `$lib/components/shadcn/`
- Aliases configured for `$lib/components`, `$lib/utils`, etc.