<script lang="ts">
	import type { Snippet } from 'svelte';
	import { animate } from '$lib/animate';
	import { pageAnimation } from '$lib/animations/page-animation';

	let { children } = $props<{ children: Snippet }>();
</script>

<main use:animate={pageAnimation} class=" bg-black">
	{@render children()}
</main>
