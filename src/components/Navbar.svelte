<script lang="ts">
	import { page } from '$app/stores';
	import Hamburger from './Hamburger.svelte';

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

{#if pathname === '/'}
	<nav class="w-full flex fixed z-50 top-0 items-center text-slate-200 justify-between px-10 py-2">
		<p class="mt-1 text-6xl text-center font-extrabold text-slate-200 inline-block px-0">⚧</p>
		<Hamburger />
		<a class="hidden" href="/docs">docs</a>
	</nav>
{:else}
	<nav
		class={`w-full flex fixed z-50 top-0 bg-[#1b1e28] justify-between items-center px-5 py-2 2xl:px-60 fullscreen:px-80 ${pathname === '/serialmapper' ? 'bg-black' : ''} `}
	>
		<a class="pt-[12.5px] pr-[2.5px] flex justify-center items-center" href="/">
			<p class="mt-1 text-6xl text-center font-extrabold text-slate-200 inline-block px-0">⚧</p>
		</a>
		<span class="pt-[10px] text-slate-200">
			<Hamburger />
		</span>
	</nav>
{/if}
