<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Hamburger from 'svelte-hamburger';
	import { page } from '$app/stores';

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});

	let open = $state(true);
</script>

<Hamburger {open} on:click={() => (open = !open)} />

{#if open}
	{#if pathname === '/'}
		<nav
			class="w-2/4 max-w-96 h-[100vh] bg-[rgba(27,30,40,0.9)] backdrop-blur-sm absolute top-0 left-0 flex flex-col justify-center items-center"
			transition:slide={{ delay: 250, duration: 300, easing: quintOut }}
		>
			<a href="/">Portfolio</a>
			<a href="/docs">Document</a>
			<section>
				<h2>Projects</h2>
			</section>
		</nav>
	{:else}
		<nav
			class="w-full bg-[#1b1e28] h-[50vh] absolute top-20 left-0 flex flex-col justify-center items-center"
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
