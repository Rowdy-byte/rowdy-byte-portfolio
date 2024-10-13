<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children } = $props<{ children: Snippet }>();

	$effect(() => {
		let pres: HTMLCollection = document.getElementsByTagName('pre');
		console.log(pres);
		let buttons = document.querySelectorAll('#clipboardBtn');
		console.log(buttons);
	});
</script>

{@render children()}
