<script lang="ts">
	import { animate } from '$lib/animate';
	import { pageAnimation } from '$lib/animations/page-animation.js';
	let Component = $state();

	let { data } = $props();
	let mouseX = 0;
	let mouseY = 0;
	let glowEffect: HTMLElement;

	console.log(data.content);

	const updateGlowEffect = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		mouseX = clientX;
		mouseY = clientY;

		if (glowEffect) {
			const rect = glowEffect.getBoundingClientRect();
			const x = clientX - rect.left - rect.width / 2;
			const y = clientY - rect.top - rect.height / 2;
			glowEffect.style.setProperty('--mouse-x', `${x}px`);
			glowEffect.style.setProperty('--mouse-y', `${y}px`);
		}
	};

	$effect(() => {
		if (data.content) {
			Component = data.content;
		}
	});
</script>

<svelte:window on:mousemove={updateGlowEffect} />

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

<style>
	.glow-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
	}

	.glow-container::before {
		content: '';
		position: absolute;
		width: 300px;
		height: 300px;
		background: radial-gradient(
			circle,
			rgba(52, 211, 153, 0.3),
			transparent 70% /* Smaragdgroen met transparantie */
		);
		border-radius: 50%;
		transition: transform 0.1s ease;
		transform: translate(var(--mouse-x), var(--mouse-y));
		pointer-events: none;
		mix-blend-mode: screen;
	}
</style>
