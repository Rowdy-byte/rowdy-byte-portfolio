<script lang="ts">
	import { animate } from '../../../animate';
	import { h1Animation } from '$lib/animations/h1-animation';
	import { mainAnimation } from '$lib/animations/main-animation';

	let Component = $state();

	let { data } = $props();

	$effect(() => {
		if (data.content) {
			Component = data.content;
		}
	});
</script>

<main use:animate={mainAnimation} class="mx-auto max-w-[600px] pt-40 pb-40 px-2">
	<h1
		use:animate={h1Animation}
		class="text-center mb-14 text-3xl bg-gradient-to-r from-purple-500 to-emerald-500"
	>
		Documentation
	</h1>

	{#if Component}
		<Component>
			{@const Component = data.content}
		</Component>
	{:else}
		<h1>loading...</h1>
	{/if}
</main>
