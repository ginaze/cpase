import { describe, it, expect, beforeEach } from 'vitest';
import { todoStore } from './todoStore.svelte';

describe('TodoStore', () => {
	beforeEach(() => {
		todoStore.todos = [];
	});

	it('adds a new todo', () => {
		todoStore.add('Beli susu');
		expect(todoStore.todos.length).toBe(1);
		expect(todoStore.todos[0].text).toBe('Beli susu');
	});

	it('toggles completion status', () => {
		todoStore.add('Beli susu');
		const id = todoStore.todos[0].id;
		todoStore.toggle(id);
		expect(todoStore.todos[0].completed).toBe(true);
	});

	it('toggles all todos at once', () => {
		todoStore.add('Tugas 1');
		todoStore.add('Tugas 2');
		todoStore.todos = todoStore.todos.map((t) => ({ ...t, completed: false }));
		todoStore.toggleAll();
		expect(todoStore.todos.every((t) => t.completed)).toBe(true);
		todoStore.toggleAll();
		expect(todoStore.todos.every((t) => !t.completed)).toBe(true);
	});
});
