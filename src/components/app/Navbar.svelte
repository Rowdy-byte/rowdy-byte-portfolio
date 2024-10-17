<script lang="ts">
	import type { Snippet } from 'svelte';
	import SettingsMenu from './SettingsMenu.svelte';

	let { children, user } = $props<{ children: Snippet }>();

	let open = $state(true);
</script>

<nav class="w-full flex p-2 justify-between items-center">
	<section class="flex">
		<span>serialmapper</span>
	</section>
	<section class="flex justify-center items-center">
		<button onclick={() => (open = !open)}
			><span
				class="w-9 h-9 rounded-full flex justify-center items-center bg-blue-500 text-slate-200 text-lg font-bold"
				>{user.email.match(/^[a-zA-Z]/)[0].toUpperCase()}</span
			></button
		>
		{#if open}
			<SettingsMenu {user} />
		{/if}
		{@render children()}
	</section>
</nav>
