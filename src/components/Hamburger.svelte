<script lang="ts">
	import Hamburger from 'svelte-hamburger';
	import { page } from '$app/stores';

	import { animate } from '../animate';
	import { linksProjects, linksRowdyByte } from '$lib/links';

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});

	let open = $state(false);
</script>

<Hamburger {open} on:click={() => (open = !open)} />

{#if open}
	{#if pathname === '/'}
		<nav
			use:animate={[
				{
					type: 'from',
					duration: 0.5,
					scale: 0,
					opacity: 0,
					ease: 'power2.out'
				},
				{
					type: 'to',
					duration: 1,
					scale: 1,
					opacity: 1,
					ease: 'power2.out'
				}
			]}
			class="hamburger__menu w-2/4 max-w-96 h-[100vh] z-50 bg-[rgba(27,30,40,0.9)] backdrop-blur-sm absolute top-0 left-0 flex flex-col justify-center"
		>
			<section class="flex flex-col justify-center items-center">
				<h2 class="text-2xl mb-4 font-bold p-0">RowdyByte</h2>
				{#each linksRowdyByte as { name, url }}
					<a class="hover:text-purple-500 hover:scale-[1.05] transition-all" href={url}>{name}</a>
				{/each}
			</section>

			<section class="mt-10 flex flex-col justify-center items-center">
				<h2 class="text-2xl mb-4 font-bold p-0">Projects</h2>
				{#each linksProjects as { name, url }}
					<a
						onclick={() => (open = !open)}
						class="hover:text-purple-500 hover:scale-[1.05] transition-all"
						href={url}>{name}</a
					>
				{/each}
			</section>
		</nav>
	{:else}
		<nav
			use:animate={[
				{
					type: 'from',
					duration: 0.5,
					y: 0,
					opacity: 0,
					ease: 'power2.in'
				},
				{
					type: 'to',
					duration: 1,
					y: 0,
					opacity: 1,
					ease: 'power2.out'
				}
			]}
			class="hamburger__menu w-full bg-[#1b1e28] h-[40vh] absolute top-20 left-0 flex z-50 flex-col justify-center items-center border-b-[1px] border-emerald-500"
		>
			<section class="flex flex-col justify-center items-center">
				<h2 class="text-2xl mb-4 font-bold p-0">RowdyByte</h2>
				{#each linksRowdyByte as { name, url }}
					<a
						onclick={() => (open = !open)}
						class="hover:text-purple-500 hover:scale-[1.05] transition-all"
						href={url}>{name}</a
					>
				{/each}
			</section>

			<section class="mt-10 flex flex-col justify-center items-center">
				<h2 class="text-2xl mb-4 font-bold p-0">Projects</h2>
				{#each linksProjects as { name, url }}
					<a class="hover:text-purple-500 hover:scale-[1.05] transition-all" href={url}>{name}</a>
				{/each}
			</section>
		</nav>
	{/if}
{/if}
