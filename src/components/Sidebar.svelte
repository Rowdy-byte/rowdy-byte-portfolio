<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
</script>

<aside transition:slide={{ delay: 5000, duration: 1000, easing: quintInOut }}></aside>

<style>
	aside {
		display: none;

		@media (min-width: 1000px) {
			height: 80vh;
			width: 200px;
			display: flex;
			border: 1px solid #c336e5;
			position: fixed;
		}
	}
</style>
