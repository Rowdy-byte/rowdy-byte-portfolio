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
	$texcolor3: #5de4c7;
	$texcolor4: #c336e5;

	.docsPathNav {
		position: sticky;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px 50px;
		background-color: #1b1e28;
		z-index: 10;

		@media (max-width: 600px) {
			display: flex;
			justify-content: space-between;
		}

		.docsPathLogo {
			font-size: 60px;
			font-weight: 900;
			background: -webkit-linear-gradient($texcolor3, $texcolor4);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}

	.homePathNav {
		position: sticky;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 50px;
		background-color: rgba(238, 232, 170, 0);
		z-index: 10;

		.homePathLogo {
			color: #e4f0fb;
			font-size: 60px;
			font-weight: 900;
		}
	}

	a {
		text-decoration: none;
		color: #e4f0fb;
		margin: 0 10px;
		letter-spacing: 1;
	}

	.hamburger {
		display: none;
		@media (min-width: 600px) {
			display: block;
		}
	}
</style>
