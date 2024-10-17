<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<aside
	class="text-center max-w-96 absolute top-1/4 right-2 ml-2 p-4 border rounded-xl border-slate-400"
>
	{@render children()}
</aside>
