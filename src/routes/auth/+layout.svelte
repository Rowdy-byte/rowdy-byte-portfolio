<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<header>
	<nav>
		<a href="/">Home</a>
	</nav>
</header>
{@render children()}
