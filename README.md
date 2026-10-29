# Cpase Svelte 5 (Bahasa Indonesia)

Cpase classroom demonstration project built with **Svelte 5 (Runes)**. All user-facing UI text is in **Bahasa Indonesia**.

Based on the official [Cpase Spec](https://raw.githubusercontent.com/tastejs/Cpase/refs/heads/master/app-spec.md) from the parent project **[tastejs/Cpase](https://github.com/tastejs/Cpase)** — the canonical reference implementation for comparing MV* frameworks.

## Tech Stack

| Tool               | Purpose                                                       |
| ------------------ | ------------------------------------------------------------- |
| **Svelte 5**       | UI framework (Runes-based reactivity)                         |
| **Vite+ (vp)**     | Unified toolchain CLI (dev server, build, test, lint, format) |
| **Vitest 5**       | Unit testing framework                                        |
| **daisyUI 5**      | Component library for Tailwind CSS                            |
| **Tailwind CSS 4** | Utility-first CSS framework                                   |
| **TypeScript 6**   | Static type checking                                          |
| **Bun 1.4**        | Package manager and runtime                                   |

## Why Svelte 5 Instead of Vanilla / React / Vue?

### Vanilla HTML/CSS/JS

Vanilla works for small demos but requires manually wiring DOM events, state updates, and localStorage sync. Svelte handles reactivity declaratively — less boilerplate, fewer bugs, easier to teach.

### React

React is excellent but brings a larger conceptual surface (hooks, useEffect dependency arrays, memoization, virtual DOM reconciliation). For a classroom Cpase, Svelte's `$state`, `$derived`, and `$effect` runes are more direct and readable for beginners.

### Vue

Vue is similar in spirit to Svelte, but Svelte compiles away the framework at build time — the shipped bundle contains only the code you use, resulting in smaller output and no runtime framework overhead. Svelte's rune syntax also maps closely to plain JavaScript variables, lowering the learning curve.

### Key advantages for teaching

- **Compile-time reactivity**: No virtual DOM runtime; students see plain JS in devtools.
- **Svelte 5 Runes**: Explicit reactivity (`$state`, `$derived`, `$effect`) makes data flow obvious.
- **Single-file components**: Markup, logic, and styles co-located in `.svelte` files.
- **Tiny bundle**: Framework compiles out; only your application code ships.

## What is Vite?

**Vite** is a fast frontend build tool and dev server. It uses native ES modules in development (near-instant cold start) and Rollup/Rolldown for production builds. It replaces older bundlers like Webpack with a leaner, faster pipeline.

## What is Vite+?

**Vite+ (vp CLI)** is the unified toolchain for the web. It combines Vite, Vitest, Oxlint, Oxfmt, Rolldown, tsdown, and Vite Task into one CLI. Instead of managing separate config files and tools, `vp dev`, `vp build`, `vp test`, and `vp check` handle the full development cycle.

## What is Bun?

**Bun** is a fast JavaScript/TypeScript runtime and package manager. It installs dependencies quickly, runs TypeScript natively, and serves as the project's package manager (declared via `"packageManager": "bun@1.4.4"` in `package.json`).

## Commands

```bash
bunx vp dev       # Start dev server
bunx vp build     # Production build
bunx vp preview   # Preview production build
bunx vp test      # Run tests
bunx vp check     # Lint + format check
bunx vp fmt .     # Format code
```

## Project Structure

```
src/
├── components/   → Svelte UI components (Header, TodoList, TodoItem, Footer)
├── lib/          → Types and Svelte 5 store
│   ├── types.ts
│   └── todoStore.svelte.ts
├── main.ts       → Entry point (imports app.css)
├── app.css       → Tailwind + daisyUI
└── index.html    → Root HTML
docs/             → Classroom documentation
```

## Parent Reference

This project follows the **[tastejs/Cpase](https://github.com/tastejs/Cpase)** specification as its general idea and behavioral reference. UI strings are translated into Bahasa Indonesia for classroom use.
