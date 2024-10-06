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
</style>
