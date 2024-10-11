<script lang="ts">
	import { page } from '$app/stores';

	import { EllipsisVertical, CircleX } from 'lucide-svelte';

	import type { PageData } from '../routes/$types';

	import { animate } from '../animate';
	import gsap from 'gsap';
	import { openSidebarAnimation } from '$lib/animations/sidebar-animations';

	const pathname = $state($page.url.pathname);

	let { data } = $props<{ data: PageData }>();

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

	$effect(() => {
		let circles = document.querySelectorAll('circle');

		circles.forEach((dot, i) => {
			gsap.to(dot, {
				scale: 1.1,
				// fill: i === 0 ? '#10b981' : i === 1 ? '#a855f7' : '#10b981',
				duration: 2,
				delay: i * 1,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut'
			});
		});
	});
</script>

<aside class="">
	<button
		aria-label="side-menu-button"
		onclick={() => (open = true)}
		class="fixed top-1/2 text-slate-100 w- h-5 p-1 z-40 rounded"
	>
		<svg
			class="flex justify-center"
			id="dots-svg"
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 20 20"
			><g fill="currentColor"
				><circle class="dot" cx="10" cy="15" r="2" />
				<circle class="dot" cx="10" cy="10" r="2" />
				<circle class="dot" cx="10" cy="5" r="2" />
			</g></svg
		>
	</button>

	{#if open}
		<section
			use:animate={openSidebarAnimation}
			class="sidebar z-40 fixed top-[55%] left-2 2xl:left-20 fullscreen:left-40 transform -translate-y-1/2 mr-2 overflow-hidden opacity-0 rounded-md bg-[#1b1e28] shadow-custom-sidebar"
		>
			<header
				class="w-full h-ful flex justify-center relative p-2 bg-gradient-to-r to-purple-500 from-emerald-500"
			>
				<h3 class="p-0 text-center font-bold text-[#1b1e28]">Table Of Contents</h3>
				<button onclick={handleClick} class="text-[#1b1e28] absolute right-2 top-2">
					<CircleX size={24} />
				</button>
			</header>
			<section class="py-4 px-4 rounded-l-none rounded-md">
				{#each data.headers as { slug, headers }}
					<ul>
						<li class="">
							<a class="flex items-center" href={`/docs/${slug.replace(/ /g, '-').trim()}`}>
								<h3 class="text-[#5de4c7] font-bold">
									{slug
										.replace(/[0-9]/, '')
										.replace(/\b\w/g, (match: string) => match.toUpperCase())}
								</h3>
							</a>
							{#if headers}
								{#each headers as subheader}
									{#if pathname === '/docs'}
										<a
											class=""
											href={`/docs/${slug.replace(/ /g, '-').trim()}#${subheader.replace(/ /g, '-').toLowerCase()}`}
										>
											<p
												class="text-slate-200 leading-loose ml-9 hover:text-purple-500 hover:scale-[1.05] transition-all"
											>
												{subheader}
											</p>
										</a>
									{:else}
										<a
											class=""
											href={`${slug.replace(/ /g, '-').trim()}#${subheader.replace(/ /g, '-').toLowerCase()}`}
										>
											<p
												class="text-slate-200 leading-loose ml-9 hover:text-purple-500 hover:scale-[1.05] transition-all"
											>
												{subheader}
											</p>
										</a>
									{/if}
								{/each}
							{/if}
						</li>
					</ul>
				{/each}
			</section>
		</section>
	{/if}
</aside>
