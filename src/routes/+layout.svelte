<script lang="ts">
	import '../app.scss';

	import type { Snippet } from 'svelte';
	import Navbar from '../components/Navbar.svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<Navbar />

<main>{@render children()}</main>

<style lang="scss">
	main {
		height: 100%;

		display: flex;
		justify-content: center;

		padding: 0 auto;
		@media (max-width: 430px) {
			padding: 0;
			font-size: xx-small;
		}

		@media (max-width: 700px) {
		}
	}
</style>
