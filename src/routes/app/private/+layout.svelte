<script lang="ts">
	import { goto } from '$app/navigation';

	import Navbar from '../../../components/app/Navbar.svelte';

	let { data, children } = $props();

	let { user } = data;

	let { supabase } = $state(data);

	let logout = $state();

	$effect(() => {
		logout = async () => {
			const { error } = await supabase.auth.signOut();
			if (error) {
				console.error(error);
			}
			goto('/auth');
		};
	});
</script>

<Navbar {user}>
	<button onclick={logout}>Logout</button>
</Navbar>

<main class="relative p-2">{@render children()}</main>
