# Implementation Plan: TodoMVC Svelte 5

## Overview

Build TodoMVC application using Svelte 5 standalone (Runes) with all UI text in Bahasa Indonesia.

## Architecture Decisions

- Svelte 5 Runes (`$state`, `$derived`, `$effect`) for state management and local persistence
- Single-page Svelte standalone setup (converted from SvelteKit)
- Hash routing for filters (`#/`, `#/active`, `#/completed`)

## Tasks

### Phase 1: Setup & Cleanup

- [ ] Task 1: Convert project from SvelteKit to pure Svelte 5 + Vite
- [ ] Task 2: Create Types and Svelte 5 Todo Store with tests

### Phase 2: UI Implementation

- [ ] Task 3: Create Header component (add todo)
- [ ] Task 4: Create TodoItem component (display, toggle, edit, delete)
- [ ] Task 5: Create TodoList & Footer components (batch operations, filter, counter)

### Phase 3: Integration & Hash Routing

- [ ] Task 6: Connect App layout, implement Hash-based filtering & LocalStorage persistence

## Risks and Mitigations

| Risk                                            | Impact | Mitigation                                           |
| ----------------------------------------------- | ------ | ---------------------------------------------------- |
| SvelteKit residual configs causing build issues | Medium | Remove `@sveltejs/kit` plugins and clean vite.config |
