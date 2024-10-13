<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	import '../globals.scss';
	import '../scrollbar.scss';
	import '../app.css';
	import '../common-card.css';
	import '../rare-card.css';
	import '../epic-card.css';
	import '../legendary-card.css';
	import '../champion-card.css';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props<{ children: Snippet }>();

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});
</script>

<Navbar />

<main class="relative h-screen">
	{@render children()}
</main>

<Footer {pathname} />
