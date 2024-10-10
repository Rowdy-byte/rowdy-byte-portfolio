<script lang="ts">
	import '../globals.scss';
	import '../scrollbar.scss';
	import '../app.css';

	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	import gsap from 'gsap';
	import { animate } from '../animate';

	import Navbar from '../components/Navbar.svelte';

	import Sidebar from '../components/Sidebar.svelte';
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
	<!-- <nav>
		{#if pathname === '/docs'}
			<Sidebar {data} />
		{/if}
	</nav> -->
	{@render children()}
	<!-- <figure class="-z-10 2xl:fixed 2xl:top-36 2xl:-right-60"></figure> -->
</main>

<Footer {pathname} />
