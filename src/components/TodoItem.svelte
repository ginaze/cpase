<!-- src/components/TodoItem.svelte -->
<script lang="ts">
	import { todoStore } from '#lib/todoStore.svelte';
	import type { Todo } from '#lib/types';

	let { todo }: { todo: Todo } = $props();

	let editing = $state(false);
	let savedText = $derived(todo.text);

	function toggleComplete() {
		todoStore.toggle(todo.id);
	}

	function deleteTodo() {
		todoStore.remove(todo.id);
	}

	function enterEditMode() {
		editing = true;
		savedText = todo.text;
	}

	function exitEditMode() {
		editing = false;
	}

	function saveEdit(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			if (savedText.trim()) {
				todoStore.todos = todoStore.todos.map((t) =>
					t.id === todo.id ? { ...t, text: savedText.trim() } : t
				);
			}
			exitEditMode();
		} else if (event.key === 'Escape') {
			exitEditMode();
		}
	}
</script>

<li class="list-row list-col-wrap {editing ? 'bg-base-300' : ''}">
	<div class="view flex items-center gap-3 p-3 list-col-grow">
		<label class="label flex cursor-pointer items-center gap-2">
			<input
				type="checkbox"
				class={`checkbox checkbox-primary ${todo.completed ? 'checkbox-checked' : ''}`}
				id="toggle-{todo.id}"
				checked={todo.completed}
				onchange={toggleComplete}
			/>
			<span
				class={todo.completed ? 'text-base-content/50 line-through' : 'text-base-content'}
				role="button"
				tabindex="0"
				ondblclick={enterEditMode}
				onkeydown={(e) => e.key === 'Enter' && enterEditMode()}>{todo.text}</span
			>
		</label>
		<button
			class="btn btn-ghost text-base-content/50 opacity-0 btn-neutral btn-xs hover:opacity-100"
			aria-label="Hapus"
			onclick={deleteTodo}
		>
			×
		</button>
	</div>
	{#if editing}
		<input
			class="input-bordered input w-full input-lg"
			bind:value={savedText}
			onkeydown={saveEdit}
			onblur={exitEditMode}
		/>
	{/if}
</li>
