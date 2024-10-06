<script lang="ts">
	import '../globals.scss';
	import '../scrollbar.scss';
	import '../app.css';

	import { animate } from '../animate';

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
	let desc = $state(false);

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

<Navbar />

<!-- {#if pathname === '/docs'}
	<Sidebar {headers} />
{/if} -->

<main>
	{@render children()}
</main>

{#if pathname === '/docs'}
	<Footer />
{/if}
