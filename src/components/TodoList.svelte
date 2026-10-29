<!-- src/components/TodoList.svelte -->
<script lang="ts">
	import { todoStore } from '#lib/todoStore.svelte';
	import TodoItem from './TodoItem.svelte';
	import { onMount } from 'svelte';

	let currentFilter = $state('semua');

	function getFilteredTodos() {
		switch (currentFilter) {
			case 'aktif':
				return todoStore.todos.filter((t) => !t.completed);
			case 'selesai':
				return todoStore.todos.filter((t) => t.completed);
			default:
				return todoStore.todos;
		}
	}

	onMount(() => {
		function handleHashChange() {
			const hash = window.location.hash.slice(2);
			if (['semua', 'aktif', 'selesai'].includes(hash)) {
				currentFilter = hash;
			} else {
				currentFilter = 'semua';
			}
		}

		window.addEventListener('hashchange', handleHashChange);
		handleHashChange();

		return () => window.removeEventListener('hashchange', handleHashChange);
	});
</script>

<section class="main">
	<input
		type="checkbox"
		id="toggle-all"
		class="toggle-all"
		checked={todoStore.activeCount === 0 && todoStore.todos.length > 0}
		onchange={() => todoStore.toggleAll()}
	/>
	<label for="toggle-all">Tandai semua selesai</label>
	<ul class="todo-list">
		{#each getFilteredTodos() as todo (todo.id)}
			<TodoItem {todo} />
		{/each}
	</ul>
</section>
