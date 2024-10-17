<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();

	import '../../app.css';
	import '../../app-globals.scss';
</script>

{@render children()}
