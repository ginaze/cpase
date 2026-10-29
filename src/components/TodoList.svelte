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
				currentFilter = 'aktif';
			}
		}

		window.addEventListener('hashchange', handleHashChange);
		handleHashChange();

		return () => window.removeEventListener('hashchange', handleHashChange);
	});
</script>

<section class="main mt-6">
	{#if todoStore.todos.length > 0}
		<label class="label flex cursor-pointer items-center gap-2">
			<input
				type="checkbox"
				id="toggle-all"
				class={`checkbox checkbox-primary ${todoStore.activeCount === 0 && todoStore.todos.length > 0 ? 'checkbox-checked' : ''}`}
				checked={todoStore.activeCount === 0 && todoStore.todos.length > 0}
				onchange={() => todoStore.toggleAll()}
			/>
			<span class="text-base-content">Tandai semua selesai</span>
		</label>
	{/if}
	<ul class="list-bordered list mt-2">
		{#each getFilteredTodos() as todo (todo.id)}
			<TodoItem {todo} />
		{:else}
			<li class="list-row p-4 text-center text-base-content/60">
				{#if todoStore.todos.length === 0}
					Belum ada tugas
				{:else}
					Selamat, semua tugas telah selesai
				{/if}
			</li>
		{/each}
	</ul>
</section>
