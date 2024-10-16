<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<main class="h-screen pt-40 p-2 bg-slate-100">
	{@render children()}
</main>
