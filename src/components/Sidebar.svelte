<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';
	import { animate } from '../animate';

	let { headers } = $props<{ headers: Snippet }>();
	import { EllipsisVertical } from 'lucide-svelte';

	let open = $state(true);

	$effect(() => {
		// open = !open;
		gsap.to('.sidebar', {
			rotation: 45,
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				open = false;
			}
		});
	});
</script>

<aside class="" transition:slide={{ delay: 750, duration: 1000, easing: quintInOut }}>
	<button onclick={() => (open = !open)} class="fixed z-50 top-1/2 w- h-5 p-1 rounded"
		><EllipsisVertical /></button
	>

	{#if open}
		<section
			use:animate={[
				{
					type: 'to',
					y: -45
				},
				{
					type: 'to',
					duration: 1,
					opacity: 1,
					y: -45
				}
			]}
			class="sidebar fixed top-1/2 left-6 z-50 overflow-hidden opacity-0 rounded-md border-[1px] border-[#f1f5f91a] bg-[#1b1e28] xl:left-16 2xl:left-44"
		>
			<header class="w-full h-ful bg-gradient-to-r to-purple-500 from-emerald-500">
				<h2 class=" 2xl:text-lg text-slate-200 text-center">Table Of Contents</h2>
			</header>
			<section class="py-5 px-4 xl:py-10 xl:px-14 2xl:px-20 rounded-l-none rounded-md">
				{#each headers as header}
					<p class="text-slate-200 font-light">{header.slug}</p>
				{/each}
			</section>
		</section>
	{/if}
</aside>

<style>
</style>
