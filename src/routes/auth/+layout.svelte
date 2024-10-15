<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<main class="h-screen relative">
	{@render children()}
</main>
