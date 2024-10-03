<script lang="ts">
	let { children } = $props();
</script>

<main>{@render children()}</main>

<style>
	main {
		display: grid;
		padding: 0 50px;
		max-width: 800px;
	}
</style>
