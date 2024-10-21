<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import type { PageData } from '../$types';

	let { children } = $props<{ children: Snippet; data: PageData }>();

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
