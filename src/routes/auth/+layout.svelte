<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<main class="h-full pt-40 relative bg-slate-100">
	{@render children()}
</main>
