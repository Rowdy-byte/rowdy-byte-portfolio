<script lang="ts">
	import '../globals.scss';
	import '../scrollbar.scss';
	import '../app.css';

	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	import Navbar from '../components/Navbar.svelte';

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

<main class="relative h-screen">
	<nav>
		{#if pathname === '/docs'}
			<Sidebar {headers} />
		{/if}
	</nav>
	{@render children()}
	<figure class="absolute top-0 left-0"></figure>
</main>

{#if pathname === '/docs'}
	<Footer />
{/if}
