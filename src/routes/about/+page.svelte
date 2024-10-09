<script lang="ts">
	import { mainAnimation } from '$lib/animations/main-animation.js';
	import { animate } from '../../animate.js';
	let Component = $state();

	let { data } = $props();

	$effect(() => {
		if (data.content) {
			Component = data.content;
		}
	});
</script>

<main use:animate={mainAnimation} class="mx-auto max-w-[600px] px-2 pb-20">
	<h1
		class="text-center mt-28 mb-14 text-5xl font-bold bg-gradient-to-r from-purple-500 to-emerald-500"
	>
		About Me
	</h1>

	{#if Component}
		<Component>
			{@const Component = data.content}
		</Component>
	{:else}
		<h1>loading...</h1>
	{/if}
</main>
