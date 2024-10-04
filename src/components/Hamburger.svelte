<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Hamburger from 'svelte-hamburger';

	let open = $state(false);
</script>

<main>
	<Hamburger {open} on:click={() => (open = !open)} />

	{#if open}
		<nav transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
			<a href="/">Portfolio</a>
			<a href="/docs">Document</a>
			<section>
				<h2>Projects</h2>
			</section>
		</nav>
	{/if}
</main>

<style>
	main {
		height: 100%;
		display: flex;
		flex-direction: column;
		@media (min-width: 600px) {
			display: none;
		}

		nav {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 10vh;
			left: 0;
			width: 100%;
			height: 90vh;
			background: rgb(27, 30, 40, 0.9); /* border-radius: 16px; */
			backdrop-filter: blur(2px);
			-webkit-backdrop-filter: blur(5px);
		}
	}
</style>
