<script lang="ts">
	import { page } from '$app/stores';
	import Hamburger from './Hamburger.svelte';

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

{#if pathname === '/website'}
	<nav
		class={`w-full flex fixed z-50 top-0 items-center text-slate-200 justify-between px-10 py-2  `}
	>
		<p class="mt-1 text-6xl text-center font-extrabold text-slate-200 inline-block px-0">⚧</p>
		<Hamburger />
	</nav>
{:else}
	<nav
		class={`
			w-full flex fixed z-50 top-0 bg-[#1b1e28] justify-between items-center px-5 py-2 2xl:px-60 fullscreen:px-80 
			${pathname === '/website/serialmapper' ? 'bg-black' : ''} 
			${pathname === '/auth' ? 'bg-slate-100' : ''} 
			
			`}
	>
		<a class="pt-[12.5px] pr-[2.5px] flex justify-center items-center" href="/website">
			<p
				class={`mt-1 font-black text-6xl text-center font-extrabo inline-block px-0 ${pathname === '/auth' ? 'text-blue-500' : ''}`}
			>
				⚧
			</p>
		</a>
		<span class="pt-[10px] {`${pathname === '/auth' ? 'text-blue-500' : 'text-slate-200'}`}">
			<Hamburger />
		</span>
	</nav>
{/if}
