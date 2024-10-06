<script lang="ts">
	import { page } from '$app/stores';
	import Hamburger from './Hamburger.svelte';

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

{#if pathname === '/docs'}
	<nav
		class="w-full flex fixed z-10 top-0 backdrop-blur-sm items-center py-2 px-32 {pathname ===
		'/docs'
			? `justify-between`
			: ''}"
	>
		<a class="hamburger" href="/"
			><p
				class="mt-1 {pathname === '/docs'
					? `text-6xl font-extrabold bg-gradient-to-b from-indigo-500 to-emerald-500 bg-clip-text text-transparent inline-block px-0`
					: ''}"
			>
				⚧
			</p>
		</a>

		<Hamburger />
	</nav>
{:else}
	<nav
		class={pathname === '/'
			? `w-full flex fixed z-10 top-0 items-center text-slate-200 justify-between py-2 px-4`
			: ''}
	>
		<p class={pathname === '/' ? `text-6xl text-slate-200 font-extrabold  px-0` : ''}>⚧</p>

		<Hamburger />
		<a class="hidden" href="/docs">docs</a>
	</nav>
{/if}
