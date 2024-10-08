<script lang="ts">
	import '../../globals.scss';
	import '../../scrollbar.scss';
	import '../../app.css';

	import { page } from '$app/stores';

	import type { Snippet } from 'svelte';

	import gsap from 'gsap';

	import Navbar from '../../components/Navbar.svelte';
	import Sidebar from '../../components/Sidebar.svelte';
	import Footer from '../../components/Footer.svelte';

	let { children, data } = $props<{ children: Snippet }>();

	console.log(data);

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

<main class="relative h-screen">
	<nav>
		<Sidebar {data} />
	</nav>
	{@render children()}
	<figure class="-z-10 2xl:fixed 2xl:top-36 2xl:-right-60"></figure>
</main>

<Footer />
