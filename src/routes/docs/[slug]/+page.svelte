<script lang="ts">
	import { animate } from '../../../animate';
	import type { AnimationConfig } from '../../../animate';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const h1Animation: AnimationConfig[] = [
		{
			type: 'to',
			duration: 1,
			delay: 1,
			scale: 0.5,
			x: 1000,
			opacity: 0
		},
		{
			type: 'to',
			duration: 1,
			delay: 0.5,
			scale: 0.1,
			opacity: 0.1
		},
		{
			type: 'to',
			duration: 0.8,
			scale: 1,
			delay: 0.2,
			opacity: 1,
			x: 0
		}
	];

	let Component = $state();

	let { data } = $props();

	$effect(() => {
		if (data.content) {
			Component = data.content;
		}
	});
</script>

<main
	use:animate={[
		{
			type: 'to',
			duration: 2,
			x: 200,
			rotation: 360,
			scale: 1.5,
			opacity: 0.5,
			ease: 'power2.out'
		},
		{
			type: 'to',
			duration: 1,
			x: 0,
			rotation: 0,
			scale: 1,
			opacity: 1,
			ease: 'power2.inOut',
			delay: 0.5
		}
	]}
	class="mx-auto max-w-[600px] px-2 pb-20"
>
	<h1
		use:animate={h1Animation}
		class="text-center mt-28 mb-14 text-5xl font-bold bg-gradient-to-r from-purple-500 to-emerald-500"
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
