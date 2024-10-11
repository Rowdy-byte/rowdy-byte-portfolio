<script lang="ts">
	import { animate } from '../../animate.js';
	import { pageAnimation } from '$lib/animations/page-animation.js';
	let Component = $state();

	let { data } = $props();

	console.log(data.content);

	$effect(() => {
		if (data.content) {
			Component = data.content;
		}
	});
</script>

<main use:animate={pageAnimation} class="mx-auto max-w-[600px] px-2 pt-40 pb-40">
	<h1 class="text-center text-3xl mb-14 bg-gradient-to-r from-purple-500 to-emerald-500">
		About me
	</h1>

	{#if Component}
		<Component>
			{@const Component = data.content}
		</Component>
	{:else}
		<h1>loading...</h1>
	{/if}
</main>
