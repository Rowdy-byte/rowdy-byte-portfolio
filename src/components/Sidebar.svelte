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
	aside {
		display: none;

		@media (min-width: 1000px) {
			width: 200px;
			display: flex;
			flex-direction: column;
			border: 1px solid rgba(194, 54, 229, 0.2);
			border-radius: 10px;
			position: sticky;
			left: 10px;
			top: 50%;
		}

		h1 {
			font-size: 14px;

			background: -webkit-linear-gradient(45deg, #a6accdc0, rgba(255, 209, 41, 0.9));
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
</style>
