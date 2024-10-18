<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<aside
	class="text-center w-full sm:max-w-[450px] bg-slate-50 z-50 absolute top-1/4 right-0 p-4 shadow-lg border rounded"
>
	{@render children()}
</aside>
