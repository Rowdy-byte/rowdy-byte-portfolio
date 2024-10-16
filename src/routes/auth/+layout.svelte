<script lang="ts">
	import type { Snippet } from 'svelte';
	import { animate } from '../../animate';
	import { pageAnimation } from '$lib/animations/page-animation';

	let { children } = $props<{ children: Snippet }>();
</script>

<main use:animate={pageAnimation} class="h-full pt-40 relative bg-slate-100">
	{@render children()}
</main>
