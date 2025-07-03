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

### Adding Components
- `npx shadcn-svelte@latest add <component>` - Add shadcn-svelte components

## Architecture

This is a Goal Star application - a social goal-setting platform where users create goals and invite friends to verify completion.

### Tech Stack
- **Framework**: SvelteKit with Svelte 5 (using runes syntax)
- **Authentication**: Clerk for user management and auth
- **Styling**: TailwindCSS v4 with shadcn-svelte components
- **Testing**: Vitest for unit tests, Playwright for e2e tests
- **Deployment**: Configured for Vercel with @sveltejs/adapter-vercel

### Authentication & User Management
- Uses `svelte-clerk` for authentication
- `ClerkProvider` wraps the entire app in `+layout.svelte`
- User onboarding handled in `+layout.server.ts`
- Authentication state managed via Clerk's components (`SignedIn`, `SignedOut`, `UserButton`)
- Private metadata stored in `App.PrivateMetadata` interface

### Application Structure
- **Home Page** (`/`): Landing page with hero, features, and CTA sections
- **Game Page** (`/game`): Goal creation form for authenticated users
- **Layout Components**: Header with auth state, Main container, Footer

### Page Components
Home page sections are modularized:
- `hero-section.svelte` - Main landing area with CTA buttons
- `features-section.svelte` - Three-step process explanation
- `cta-section.svelte` - Final call-to-action

### Server-Side Architecture
- API integration via `env.API_SERVICE_URL`
- Server load functions handle authentication and data fetching
- Form actions for goal creation
- Token-based API authentication using Clerk

### Data Models
- `Goal` interface: title, description, deadline, friendEmail
- User metadata for onboarding state tracking

### Component Library
Uses shadcn-svelte with configuration in `components.json`:
- Base color: neutral
- Components installed in `$lib/components/shadcn/`
- Available components: button, input, label, textarea, navigation-menu

### Code Style Guidelines
- Use Svelte 5 runes (`$state`, `$props`, etc.)
- No Chinese comments in code
- Functional programming patterns preferred
- TypeScript interfaces for type safety
- Event handlers use new syntax: `onsubmit={(e) => {...}}` instead of `on:submit`