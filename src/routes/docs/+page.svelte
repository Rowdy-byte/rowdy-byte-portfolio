<script lang="ts">
	import { animate } from '../../animate';
	import type { AnimationConfig } from '../../animate';

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
	let { data } = $props();
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
	class="mx-auto max-w-[600px] px-2"
>
	<h1 use:animate={h1Animation} class="text-center mt-28 mb-14 text-5xl font-bold">
		Documentation
	</h1>
	{#each data.articles as item}
		{@const Component = item.component}
		<Component />
	{/each}
</main>
