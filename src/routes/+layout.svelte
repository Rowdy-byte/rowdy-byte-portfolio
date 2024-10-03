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
		height: 100%;
		max-width: 600px;
		display: grid;
		justify-content: center;
		margin: 0 20px;

		@media (min-width: 600px) {
			margin-inline: auto;
			max-width: 600px;
		}

		@media (max-width: 700px) {
		}
	}
</style>
