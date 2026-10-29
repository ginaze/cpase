<!-- src/components/App.svelte -->
<script lang="ts">
	import Header from './Header.svelte';
	import TodoList from './TodoList.svelte';
	import Footer from './Footer.svelte';
</script>

<section class="todoapp min-h-screen bg-base-100">
	<main class="mx-auto max-w-lg p-4">
		<Header />
		<TodoList />
		<Footer />
	</main>
</section>
