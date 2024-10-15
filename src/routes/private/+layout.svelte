<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
	export let data;
	$: ({ supabase } = data);

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
	};
</script>

<button on:click={logout}>Logout</button>

<main><slot /></main>
