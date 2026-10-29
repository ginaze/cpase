<!-- src/components/Footer.svelte -->
<script lang="ts">
	import { todoStore } from '#lib/todoStore.svelte';

	function clearCompleted() {
		todoStore.clearCompleted();
	}
</script>

<footer class="footer">
	<span class="todo-count">
		<strong>{todoStore.activeCount}</strong> tugas tersisa
	</span>
	<ul class="filters">
		<li>
			<a
				href="#/semua"
				class={window.location.hash === '#/semua' || window.location.hash === ''
					? 'selected'
					: ''}>Semua</a
			>
		</li>
		<li>
			<a href="#/aktif" class={window.location.hash === '#/aktif' ? 'selected' : ''}>Aktif</a>
		</li>
		<li>
			<a href="#/selesai" class={window.location.hash === '#/selesai' ? 'selected' : ''}
				>Selesai</a
			>
		</li>
	</ul>
	<button class="clear-completed" onclick={clearCompleted}>Hapus yang selesai</button>
</footer>
