<script lang="ts">
	import { animate } from '$lib/animate';
	import { h1Animation } from '$lib/animations/h1-animation';
	import { mainAnimation } from '$lib/animations/main-animation';
	import gsap from 'gsap';

	import CopyCodeInjector from '../../../../components/CopyCodeInjector.svelte';

	let Content: ConstructorOfATypedSvelteComponent | undefined = $state();

	let { data } = $props();

	// $effect(() => {
	// 	const loadingAnimation = gsap.fromTo(
	// 		'.loading__animation',
	// 		{ width: '0%' },
	// 		{ width: '100%', duration: 1, ease: 'linear' }
	// 	);
	$effect(() => {
		if (data.content) {
			Content = data.content;
		}
	});
</script>

<main
	use:animate={mainAnimation}
	class="mx-auto max-w-[600px] font-montserrat pt-40 pb-40 z-50 px-2"
>
	<h1
		use:animate={h1Animation}
		class="text-center mb-14 font-montserrat font-bold text-4xl md:text-6xl px-5 bg-gradient-to-r from-purple-500 to-[#5de4c7]"
	>
		Documentation
	</h1>

	{#if Content}
		<CopyCodeInjector>
			<Content>
				{@const Component = data.content}
			</Content>
		</CopyCodeInjector>
	{:else}
		<!-- <span class="loading__animation min-w-screen h-[2px] bg-purple-500 absolute top-0 z-50 left-0"
		></span> -->
	{/if}
</main>
