<!-- src/components/Footer.svelte -->
<script lang="ts">
	import { todoStore } from '#lib/todoStore.svelte';

	function clearCompleted() {
		todoStore.clearCompleted();
	}
</script>

<footer class="mt-6 footer flex items-center justify-between border-t border-base-300 py-4">
	<div class="gap-2">
		<span class="text-base-content">
			<strong class="text-primary">{todoStore.activeCount}</strong> tugas tersisa
		</span>
	</div>
	<ul class="list-outline list list-col-wrap gap-2">
		<li>
			<a
				href="#/semua"
				class={`btn btn-ghost btn-xs ${window.location.hash === '#/semua' || window.location.hash === '' ? 'btn-active' : ''}`}
				>Semua</a
			>
		</li>
		<li>
			<a
				href="#/aktif"
				class={`btn btn-ghost btn-xs ${window.location.hash === '#/aktif' ? 'btn-active' : ''}`}
				>Aktif</a
			>
		</li>
		<li>
			<a
				href="#/selesai"
				class={`btn btn-ghost btn-xs ${window.location.hash === '#/selesai' ? 'btn-active' : ''}`}
				>Selesai</a
			>
		</li>
	</ul>
	{#if todoStore.todos.some((t) => t.completed)}
		<button
			class="btn btn-ghost text-base-content/50 btn-xs hover:text-error"
			onclick={clearCompleted}>Hapus yang selesai</button
		>
	{/if}
</footer>
