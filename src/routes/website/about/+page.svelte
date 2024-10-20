<script lang="ts">
	import gsap from 'gsap';
	import FindTags from '../../../components/FindTags.svelte';

	let Component = $state(false);
	let { data } = $props();

	$effect(() => {
		const loadingAnimation = gsap.fromTo(
			'.loading__animation',
			{ width: '0%' },
			{ width: '100%', duration: 1, ease: 'linear' }
		);

		setTimeout(() => {
			if (data.content) {
				loadingAnimation.kill();
				Component = data.content;
			}
		}, 1000);
	});
</script>

<FindTags>
	<main class="mx-auto max-w-[800px] px-2 pt-40 pb-40">
		<h1
			class="text-center font-walsheim font-bold text-6xl mb-14 bg-gradient-to-bl from-[#f3a704] to-[#f36104]"
		>
			About me
		</h1>

		{#if Component}
			<!-- Toon de geladen content als het beschikbaar is -->
			<Component>
				{@const Component = data.content}
			</Component>
		{:else}
			<!-- Loading bar terwijl de content nog wordt geladen -->
			<span class="loading__animation min-w-screen h-[2px] bg-purple-500 absolute top-0 z-50 left-0"
			></span>
		{/if}
	</main>
</FindTags>
