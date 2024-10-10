<script lang="ts">
	import '../globals.scss';
	import '../scrollbar.scss';
	import '../app.css';
	import '../common-card.css';
	import '../rare-card.css';
	import '../epic-card.css';
	import '../legendary-card.css';
	import '../champion-card.css';

	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	import Navbar from '../components/Navbar.svelte';

	import Footer from '../components/Footer.svelte';

	let { children, data } = $props<{ children: Snippet }>();

	console.log(data);

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
