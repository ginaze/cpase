<!-- src/components/TodoItem.svelte -->
<script lang="ts">
	import { todoStore } from '#lib/todoStore.svelte';
	import type { Todo } from '#lib/types';

	export let todo: Todo;

	let editing = $state(false);
	let editText = $state(todo.text);

	function toggleComplete() {
		todoStore.toggle(todo.id);
	}

	function deleteTodo() {
		todoStore.remove(todo.id);
	}

	function enterEditMode() {
		editing = true;
		editText = todo.text;
	}

	function exitEditMode() {
		editing = false;
	}

	function saveEdit(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			if (editText.trim()) {
				todoStore.todos = todoStore.todos.map((t) =>
					t.id === todo.id ? { ...t, text: editText.trim() } : t
				);
			}
			exitEditMode();
		} else if (event.key === 'Escape') {
			editText = todo.text;
			exitEditMode();
		}
	}
</script>

<li class:completed={todo.completed} class:editing>
	<div class="view">
		<input type="checkbox" class="toggle" checked={todo.completed} onchange={toggleComplete} />
		<label ondblclick={enterEditMode}>{todo.text}</label>
		<button class="destroy" onclick={deleteTodo}></button>
	</div>
	<input
		class="edit"
		bind:value={editText}
		onkeydown={saveEdit}
		onblur={exitEditMode}
		autofocus
	/>
</li>
