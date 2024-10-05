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
	main {
		display: flex;
		flex-direction: column;
		max-width: 550px;
		margin-inline: auto;

		@media (max-width: 600px) {
			margin-inline: 10px;
		}

		@media (max-width: 700px) {
		}
	}
</style>
