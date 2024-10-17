<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<nav class="w-full flex p-4 justify-between items-center">
	<section class="flex">
		<span class="font-montserrat font-black text-xl text-blue-400">SERIALMAPPER</span>
	</section>
	<section class="flex justify-center items-center">
		{@render children()}
	</section>
</nav>
