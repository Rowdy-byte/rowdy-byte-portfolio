<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';
	import { animate } from '../animate';
	import gsap from 'gsap';

	let { data } = $props<{ headers: Snippet }>();

	import { EllipsisVertical, CircleX } from 'lucide-svelte';

	let open = $state(true);

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
			class="sidebar fixed top-1/2 left-6 z-50 overflow-hidden opacity-0 rounded-md bg-[#1b1e28] xl:left-10 2xl:left-32 shadow-custom-sidebar"
		>
			<header
				class="w-full h-ful flex justify-center relative p-2 bg-gradient-to-r to-purple-500 from-emerald-500"
			>
				<h3 class="p-0 2xl:text-lg text-center text-[#1b1e28]">Table Of Contents</h3>
				<button onclick={handleClick} class="text-[#1b1e28] absolute right-2 top-3">
					<CircleX size={17} />
				</button>
			</header>
			<section class="py-5 px-4 xl:py-8 xl:px-6 2xl:px-18 rounded-l-none rounded-md">
				{#each data.headers as { slug, headers }}
					<ul>
						<li>
							<a class="flex items-center" href={`/docs/${slug.replace(/ /g, '-').trim()}`}>
								<span
									class="flex text-xs justify-center items-center text-center mr-5 h-4 w-4 border rounded-full"
									>{slug.replace(/[a-z]/g, '')}</span
								>
								<h3 class="text-[#5de4c7] font-light">
									{slug.replace(/[0-9]/, '').replace(/\b\w/g, (match) => match.toUpperCase())}
								</h3></a
							>

							{#if headers}
								{#each headers as subheader}
									<a href={`#${subheader.replace(/ /g, '-').toLowerCase()}`}
										><p class="text-slate-200 ml-9">{subheader}</p></a
									>
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
