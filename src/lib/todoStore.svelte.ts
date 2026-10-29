// src/lib/todoStore.svelte.ts
import { Todo } from './types';

class TodoStore {
	todos = $state<Todo[]>([]);

	constructor() {
		// Load from localStorage
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('todomvc-svelte5');
			if (saved) {
				this.todos = JSON.parse(saved);
			}
		}
	}

	save() {
		if (typeof window !== 'undefined') {
			localStorage.setItem('todomvc-svelte5', JSON.stringify(this.todos));
		}
	}

	add(text: string) {
		this.todos.push({ id: crypto.randomUUID(), text, completed: false });
		this.save();
	}

	toggle(id: string) {
		const todo = this.todos.find((t) => t.id === id);
		if (todo) {
			todo.completed = !todo.completed;
			this.save();
		}
	}

	remove(id: string) {
		this.todos = this.todos.filter((t) => t.id !== id);
		this.save();
	}

	clearCompleted() {
		this.todos = this.todos.filter((t) => !t.completed);
		this.save();
	}

	get activeCount() {
		return this.todos.filter((t) => !t.completed).length;
	}
}

export const todoStore = new TodoStore();
