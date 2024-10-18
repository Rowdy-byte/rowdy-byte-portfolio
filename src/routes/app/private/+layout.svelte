<script lang="ts">
	import { goto } from '$app/navigation';
	import { LogOut } from 'lucide-svelte';

	import Navbar from '../../../components/app/Navbar.svelte';
	import SettingsMenu from '../../../components/app/SettingsMenu.svelte';

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

	let open = $state(false);
</script>

<Navbar>
	{#if user}
		<button onclick={() => (open = !open)}
			><span
				class="w-9 h-9 rounded-full flex justify-center items-center bg-blue-500 text-slate-200 text-lg font-bold"
				>{user?.email?.match(/^[a-zA-Z]/)?.[0]?.toUpperCase() || ''}</span
			></button
		>
		{#if open}
			<SettingsMenu>
				<button
					><span
						class="w-14 h-14 mb-2 rounded-sm flex justify-center items-center bg-blue-500 text-slate-200 text-3xl font-bold"
						>{user?.email?.match(/^[a-zA-Z]/)?.[0]?.toUpperCase() || ''}</span
					></button
				>

				<section class="">
					<button
						class="bg-slate-200 text-slate-500 font-bold w-full rounded-sm px-8 py-2 mb-2 hover:bg-slate-400 hover:text-slate-200"
						onclick={logout}
					>
						Sign out</button
					>
					<button
						class="bg-slate-200 text-slate-500 font-bold w-full rounded-sm px-8 py-2 hover:bg-slate-400 hover:text-slate-200"
						onclick={logout}>Profile settings</button
					>
				</section>
			</SettingsMenu>
		{/if}
	{/if}
</Navbar>

<main class="relative h-full p-2">{@render children()}</main>
