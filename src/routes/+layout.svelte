<script lang="ts">
	import type { Snippet } from 'svelte';

	import { invalidate } from '$app/navigation';

	import type { PageData } from './$types';

	let { children, data } = $props<{ children: Snippet; data: PageData }>();

	const { session, supabase } = $state(data);

	$effect(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<main class="relative h-screen">
	{@render children()}
</main>
