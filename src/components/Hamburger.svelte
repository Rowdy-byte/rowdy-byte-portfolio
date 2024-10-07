<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Hamburger from 'svelte-hamburger';
	import { page } from '$app/stores';

	import { animate } from '../animate';

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
			class="w-2/4 max-w-96 h-[100vh] bg-[rgba(27,30,40,0.9)] backdrop-blur-sm absolute top-0 left-0 flex flex-col justify-center items-center"
		>
			<a href="/">Portfolio</a>
			<a href="/docs">Document</a>
			<section>
				<h2>Projects</h2>
			</section>
		</nav>
	{:else}
		<nav
			use:animate={[
				{
					type: 'from',
					duration: 0.5,
					y: -200,
					// scale: 0,
					opacity: 0,
					ease: 'power2.in'
				},
				{
					type: 'to',
					duration: 1,
					y: 0,
					// scale: 1,
					opacity: 1,
					ease: 'power2.out'
				}
			]}
			class="w-full bg-[#1b1e28] h-[40vh] absolute top-20 left-0 flex flex-col justify-center items-center"
			transition:slide={{ delay: 250, duration: 300, easing: quintOut }}
		>
			<a href="/">Portfolio</a>
			<a href="/docs">Document</a>
			<section>
				<h2>Projects</h2>
			</section>
		</nav>
	{/if}
{/if}

<style>
</style>
