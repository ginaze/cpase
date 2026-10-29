<!-- src/components/Header.svelte -->
<script lang="ts">
	import { todoStore } from '#lib/todoStore.svelte';

	let text = $state('');

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && text.trim()) {
			todoStore.add(text.trim());
			text = '';
		}
	}
</script>

<header class="header">
	<h1>tugas</h1>
	<input
		class="new-todo"
		placeholder="Apa yang perlu dilakukan?"
		autofocus
		bind:value={text}
		onkeydown={handleKeydown}
	/>
</header>
