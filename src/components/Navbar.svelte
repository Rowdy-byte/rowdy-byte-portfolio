<script lang="ts">
	import { page } from '$app/stores';
	import Hamburger from './Hamburger.svelte';

	import { animate } from '../animate';

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

{#if pathname === '/'}
	<nav
		class={pathname === '/'
			? `w-full flex fixed z-10 top-0 items-center text-slate-200 justify-between py-2 px-4`
			: ''}
	>
		<p class={pathname === '/' ? `text-6xl text-slate-200 font-extrabold  px-0` : ''}>⚧</p>

		<Hamburger />
		<a class="hidden" href="/docs">docs</a>
	</nav>
{:else}
	<nav
		class="w-full flex fixed z-10 top-0 backdrop-blur-sm justify-between items-center px-32 py-2 xl:px-52 2xl:px-80"
	>
		<a
			use:animate={[
				{
					type: 'to',

					y: 80,
					x: 50
				},
				{
					type: 'to',
					rotation: 360,
					y: 0,
					x: 0,
					delay: 4.5,
					duration: 1
				}
			]}
			class="pt-[12.5px] pr-[2.5px] flex justify-center items-center"
			href="/"
		>
			<p
				class="mt-1 text-6xl text-center font-extrabold bg-gradient-to-b from-emerald-500 to-purple-500 bg-clip-text text-transparent inline-block px-0"
			>
				⚧
			</p>
		</a>
		<span class="pt-[10px]">
			<Hamburger />
		</span>
	</nav>
{/if}
