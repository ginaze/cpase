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
	<div class="mb-4 flex">
		<img src="/favicon.svg" alt="Cpase Logo" class="mr-2 h-10 w-10" />
		<h1 class="text-3xl font-bold text-base-content">Cpase</h1>
	</div>
	<input
		class="input-bordered input w-full input-lg"
		placeholder="Apa yang perlu dilakukan?"
		bind:value={text}
		onkeydown={handleKeydown}
	/>
</header>
