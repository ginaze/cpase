# Spec: TodoMVC Svelte Implementation

## Objective

Build a standard TodoMVC application using Svelte 5 (Runes) to serve as classroom demonstration material. All user-facing UI text must be in Bahasa Indonesia. The implementation adheres strictly to the official [TodoMVC Spec](https://raw.githubusercontent.com/tastejs/todomvc/refs/heads/master/app-spec.md).

## Tech Stack

- **Framework**: Svelte 5 (Runes)
- **Toolchain**: Vite+ (vp CLI, Vitest 5, Oxfmt, Oxlint)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 6
- **Package Manager**: Bun 1.4

## Commands

- **Dev Server**: `bunx vp dev`
- **Build**: `bunx vp build`
- **Lint & Format**: `bunx vp check` / `bunx vp check --fix`
- **Test**: `bunx vp test`

## Project Structure

```
src/
├── components/       → Svelte UI components (Header, TodoList, TodoItem, Footer)
├── lib/
│   ├── types.ts          → Todo data model and Filter types
│   └── todoStore.svelte.ts → Svelte 5 Rune-based reactive state and localStorage persistence
├── main.ts           → Entry point
├── app.css           → Tailwind CSS styles
└── index.html        → Root HTML
docs/                 → Classroom documentation and feature explainers
```

## Code Style & Conventions

- Use Svelte 5 Runes (`$state`, `$derived`, `$effect`, `$props`)
- Bahasa Indonesia for all UI strings (e.g., "Apa yang perlu dilakukan?", "semua", "aktif", "selesai", "Bersihkan yang selesai")
- Keep commits small, atomic, and incremental.

## UI Language Mapping (Bahasa Indonesia)

| Standard TodoMVC (EN)      | Indonesian (UI)             |
| -------------------------- | --------------------------- |
| "todos" (Header)           | "tugas"                     |
| "What needs to be done?"   | "Apa yang perlu dilakukan?" |
| "items left" / "item left" | "tugas tersisa"             |
| "All"                      | "Semua"                     |
| "Active"                   | "Aktif"                     |
| "Completed"                | "Selesai"                   |
| "Clear completed"          | "Hapus yang selesai"        |
| "Toggle All"               | "Tandai semua selesai"      |

## Testing Strategy

- Unit tests for state management using Vitest (`src/lib/todoStore.test.ts`)
- Integration tests for TodoMVC interactions.

## Boundaries

- **Always do**: Write tests before commits, update documentation in `docs/` after completing features, make small incremental commits.
- **Ask first**: Adding new dependencies or changing framework configurations.
- **Never do**: Mix English into user-facing UI text, make giant monolithic commits.

## Success Criteria

1. Full compliance with TodoMVC specification (hash filtering, editing, toggling, clearing completed, localStorage persistence).
2. All UI strings translated accurately into Bahasa Indonesia.
3. Every feature has corresponding documentation in `docs/`.
4. Incremental commits representing logical steps.
5. `bunx vp check`, `bunx vp test`, and `bunx vp build` pass cleanly.

## Open Questions

- None currently.
