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
});
