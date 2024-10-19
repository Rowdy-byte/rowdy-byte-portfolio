<script lang="ts">
	import { page } from '$app/stores';

	import Hamburger from 'svelte-hamburger';
	import gsap from 'gsap';

	import { animate } from '$lib/animate';
	import { hamburgerMenuAnimation } from '$lib/animations/hamburger-animation';

	import { linksProjects, linksRowdyByte } from '$lib/links';

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});

	let open = $state(false);

	const closeMenuFromLinks = () => {
		gsap.to('.hamburger__menu', {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				open = false;
			}
		});
	};
</script>

<Hamburger {open} on:click={() => (open = !open)} />

{#if open}
	{#if pathname === '/website'}
		<nav
			use:animate={hamburgerMenuAnimation}
			class="hamburger__menu w-full h-[100vh] z-50 bg-[rgba(27,30,40,0.9)] absolute top-0 left-0 flex flex-col justify-center"
		>
			<div class="absolute top-0 right-0 p-8">
				<Hamburger {open} on:click={() => (open = !open)} />
			</div>
			<section class="flex flex-col justify-center items-center">
				<h2 class="text-2xl mb-4 font-bold p-0">RowdyByte</h2>
				{#each linksRowdyByte as { name, url }}
					{#if pathname !== url}
						<a
							aria-label={`link-to-${name}`}
							onclick={closeMenuFromLinks}
							class="hover:text-purple-500 hover:scale-[1.05] transition-all"
							href={url}>{name}</a
						>
					{/if}
				{/each}
			</section>

			<section class="mt-10 flex flex-col justify-center items-center">
				<h2 class="text-2xl mb-4 font-bold p-0">Projects</h2>
				{#each linksProjects as { name, url }}
					{#if pathname !== url}
						<a
							onclick={closeMenuFromLinks}
							class="hover:text-purple-500 hover:scale-[1.05] transition-all"
							href={url}>{name}</a
						>
					{/if}
				{/each}
			</section>
		</nav>
	{:else}
		<nav
			use:animate={hamburgerMenuAnimation}
			class="hamburger__menu w-full bg-[#1b1e28] h-[40vh] absolute top-20 left-0 flex z-50 flex-col justify-center items-center border-b-[1px] {`
				${
					pathname === '/website/serialmapper'
						? 'bg-black border-[#5de4c7]'
						: pathname === '/auth'
							? 'bg-slate-100 border-blue-500'
							: 'border-[#5de4c7]'
				}
				`}"
		>
			<section class="flex flex-col justify-center items-center">
				<h2
					class="text-2xl mb-4 font-bold p-0 {`
						${pathname === '/auth' ? 'font-cubano text-blue-500' : pathname === '/website/about' ? 'font-cubano' : ''}`}"
				>
					RowdyByte
				</h2>
				{#each linksRowdyByte as { name, url }}
					{#if pathname !== url}
						<a
							onclick={closeMenuFromLinks}
							class="hover:text-purple-500 hover:scale-[1.05] transition-all {`${pathname === '/auth' ? 'text-slate-500 hover:scale-0 hover:bg-blue-500 hover:text-slate-200 hover:px-4 hover:rounded' : pathname === '/website/about' ? 'font-cubano' : ''}`}"
							href={url}>{name}</a
						>
					{/if}
				{/each}
			</section>

			<section class="mt-10 flex flex-col justify-center items-center">
				<h2
					class="text-2xl mb-4 font-bold p-0 {`${pathname === '/auth' ? 'font-cubano text-blue-500' : pathname === '/website/about' ? 'font-cubano' : ''}`}"
				>
					Projects
				</h2>
				{#each linksProjects as { name, url }}
					{#if pathname !== url}
						<a
							onclick={closeMenuFromLinks}
							class="hover:text-purple-500 hover:scale-[1.05] transition-all {`${pathname === '/auth' ? 'text-slate-500 hover:bg-blue-500 hover:text-slate-200 hover:px-4 hover:rounded' : pathname === '/website/about' ? 'font-cubano' : ''}`}"
							href={url}>{name}</a
						>
					{/if}
				{/each}
			</section>
		</nav>
	{/if}
{/if}
