<script lang="ts">
	let { data } = $props();
</script>

<main>
	{#each data.articles as item}
		{@const Component = item.component}
		<Component />
	{/each}
</main>

<style lang="scss">
</style>
