<script lang="ts">
	import '../globals.scss';
	import '../scrollbar.scss';

	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	import Navbar from '../components/Navbar.svelte';

	import { fly, scale } from 'svelte/transition';
	import Sidebar from '../components/Sidebar.svelte';

	let { children, data } = $props<{ children: Snippet }>();
	const { url } = data;

	let pathname = $state();

	console.log(url);

	$effect(() => {
		pathname = $page.url.pathname;
		console.log(pathname);
	});
</script>

<Navbar />

{#if pathname === '/docs'}
	<Sidebar />
{/if}

<main in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
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
