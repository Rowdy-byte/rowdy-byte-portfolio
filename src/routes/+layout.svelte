<script lang="ts">
	import '../globals.scss';
	import '../scrollbar.scss';

	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	import Navbar from '../components/Navbar.svelte';

	import { fly, scale } from 'svelte/transition';
	import Sidebar from '../components/Sidebar.svelte';

	let { children } = $props<{ children: Snippet }>();

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

<Navbar />

{#if pathname === '/docs'}
	<Sidebar />
{/if}

<main in:fly={{ y: 200, duration: 500 }} out:scale={{ duration: 500 }}>
	{@render children()}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		max-width: 550px;
		margin-inline: auto;

		@media (max-width: 600px) {
			margin-inline: 10px;
		}

		@media (max-width: 700px) {
		}
	}
</style>
