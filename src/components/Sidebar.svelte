<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';
	import { animate } from '../animate';
	import gsap from 'gsap';

	let { data } = $props<{ headers: Snippet }>();

	import { EllipsisVertical, CircleX } from 'lucide-svelte';

	let open = $state(false);

	const handleClick = () => {
		gsap.to('.sidebar', {
			rotation: 45,
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				open = false;
			}
		});
	};
</script>

<aside class="" transition:slide={{ delay: 750, duration: 1000, easing: quintInOut }}>
	<button onclick={() => (open = true)} class="fixed z-50 top-1/2 w- h-5 p-1 rounded"
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
			class="sidebar fixed top-1/2 left-6 z-50 overflow-hidden opacity-0 rounded-md bg-[#1b1e28] xl:left-16 2xl:left-44 shadow-custom-sidebar"
		>
			<header
				class="w-full h-ful flex justify-between p-2 bg-gradient-to-r to-purple-500 from-emerald-500"
			>
				<h3 class="p-0 2xl:text-lg text-left text-[#1b1e28]">Table Of Contents</h3>
				<button onclick={handleClick} class="text-[#1b1e28]">
					<CircleX size={16} />
				</button>
			</header>
			<section class="py-5 px-4 xl:py-10 xl:px-14 2xl:px-20 rounded-l-none rounded-md">
				{#each data.headers as { slug, headers }}
					<ul>
						<li>
							<a href={`/docs/${slug.replace(/ /g, '-').trim()}`}
								><h3 class="text-[#5de4c7] font-light">{slug}</h3></a
							>

							{#if headers}
								{#each headers as subheader}
									<p class="text-slate-200">{subheader}</p>
								{/each}
							{/if}
						</li>
					</ul>
				{/each}
			</section>
		</section>
	{/if}
</aside>

<style>
</style>
