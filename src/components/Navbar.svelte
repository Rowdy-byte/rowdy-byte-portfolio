<script lang="ts">
	import { page } from '$app/stores';

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

{#if pathname === '/docs'}
	<nav class={pathname === '/docs' ? 'docsPathNav' : ''}>
		<a href="/">home</a>

		<p class={pathname === '/docs' ? 'docsPathLogo' : ''}>⚧</p>

		<a href="/docs">docs</a>
	</nav>
{:else}
	<nav class={pathname === '/' ? 'homePathNav' : ''}>
		<p class={pathname === '/' ? 'homePathLogo' : ''}>⚧</p>

		<a href="/docs">docs</a>
	</nav>
{/if}

<style lang="scss">
	$texcolor3: #5de4c7;
	$texcolor4: #c336e5;
	$backgroundcolor: #1b1e28;

	.docsPathNav {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $backgroundcolor;
		padding: 10px 20px;
		height: 10vh;
		width: 100%;
		position: sticky;
		top: 0;
		left: 0;

		.docsPathLogo {
			font-size: 80px;
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
		z-index: 100;

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
</style>
