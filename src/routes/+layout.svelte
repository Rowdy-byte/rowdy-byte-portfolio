<script lang="ts">
	import '../js-highlight.scss';
	import '../globals.scss';
	import '../bash-highlight.scss';
	import '../svelte-highlight.scss';
	import '../scrollbar.scss';

	import type { Snippet } from 'svelte';

	import Navbar from '../components/Navbar.svelte';

	import { fade } from 'svelte/transition';
	import Sidebar from '../components/Sidebar.svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<Navbar />
<Sidebar />

<main in:fade>
	{@render children()}
</main>

<style lang="scss">
	main {
		display: grid;
		// height: 100%;
		max-width: 550px;
		margin-inline: auto;

		@media (min-width: 600px) {
			// padding-inline: 20px;
		}

		@media (max-width: 700px) {
		}
	}
</style>
