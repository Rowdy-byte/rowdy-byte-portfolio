<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-center mt-28 mb-14 text-5xl font-bold">Documentation</h1>
<main class="mx-auto max-w-[600px] px-2">
	{#each data.articles as item}
		{@const Component = item.component}
		<Component />
	{/each}
</main>
