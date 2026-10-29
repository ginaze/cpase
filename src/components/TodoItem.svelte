<!-- src/components/TodoItem.svelte -->
<script lang="ts">
	import { todoStore } from '#lib/todoStore.svelte';
	import type { Todo } from '#lib/types';

	let { todo }: { todo: Todo } = $props();

	let editing = $state(false);
	let editText = $derived(todo.text);

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
		<input
			type="checkbox"
			class="toggle"
			id="toggle-{todo.id}"
			checked={todo.completed}
			onchange={toggleComplete}
		/>
		<label for="toggle-{todo.id}" ondblclick={enterEditMode}>{todo.text}</label>
		<button class="destroy" aria-label="Hapus" onclick={deleteTodo}></button>
	</div>
	<input class="edit" bind:value={editText} onkeydown={saveEdit} onblur={exitEditMode} />
</li>
