<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';

	let { headers } = $props<{ headers: Snippet }>();
</script>

<aside transition:slide={{ delay: 750, duration: 1000, easing: quintInOut }}>
	{#each headers as header}
		<h1>{header.slug}</h1>
	{/each}
</aside>

<style>
</style>
