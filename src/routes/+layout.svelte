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
	const headers = data.headers;
	console.log(headers);

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
		gsap.to('.svgElement', {
			duration: 5, // duur van de animatie
			yoyo: true,
			stroke: '#a955f73f',
			repeat: -1,
			ease: 'power1.inOut', // Voeg easing toe voor vloeiende animatie
			transformOrigin: 'center' // Draaipunt van de rotatie
		});
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
	<figure class="-z-10 2xl:fixed 2xl:top-36 2xl:-right-60"></figure>
</main>

{#if pathname === '/docs'}
	<Footer />
{/if}
