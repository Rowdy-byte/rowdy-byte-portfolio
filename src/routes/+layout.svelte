<script lang="ts">
	import '../globals.scss';
	import '../scrollbar.scss';

	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	import Navbar from '../components/Navbar.svelte';

	import { fly, scale } from 'svelte/transition';
	import Sidebar from '../components/Sidebar.svelte';
	import Footer from '../components/Footer.svelte';

	let { children, data } = $props<{ children: Snippet }>();
	const headers = data.headers;
	console.log(headers);

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

<Navbar />

{#if pathname === '/docs'}
	<Sidebar {headers} />
{/if}

<main in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
	{@render children()}
</main>

{#if pathname === '/docs'}
	<Footer />
{/if}

<style lang="scss">
</style>
