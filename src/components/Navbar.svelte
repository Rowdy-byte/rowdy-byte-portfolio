<script lang="ts">
	import { page } from '$app/stores';
	import Hamburger from './Hamburger.svelte';

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

{#if pathname === '/docs'}
	<nav class={pathname === '/docs' ? 'docsPathNav' : ''}>
		<a class="hamburger" href="/">home</a>

		<p class={pathname === '/docs' ? 'docsPathLogo' : ''}>⚧</p>

		<Hamburger />
		<a class="hamburger" href="/docs">docs</a>
	</nav>
{:else}
	<nav class={pathname === '/' ? 'homePathNav' : ''}>
		<p class={pathname === '/' ? 'homePathLogo' : ''}>⚧</p>

		<Hamburger />
		<a class="hamburger" href="/docs">docs</a>
	</nav>
{/if}

<style lang="scss">
</style>
