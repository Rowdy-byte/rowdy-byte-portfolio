<script lang="ts">
	let { children } = $props();
</script>

<main>{@render children()}</main>

<style>
	main {
		padding: 100px 50px;
		max-width: 800px;
	}
</style>
