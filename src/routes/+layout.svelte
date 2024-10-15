<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';

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
	import type { PageData } from './$types';

	let { children, data } = $props<{ children: Snippet; data: PageData }>();

	const { session, supabase } = $state(data);

	console.log(data);

	let pathname = $state();

	$effect(() => {
		pathname = $page.url.pathname;
	});

	$effect(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Navbar />

<main class="relative h-screen">
	{@render children()}
</main>

<Footer {pathname} />
