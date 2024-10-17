<script lang="ts">
	import type { Snippet } from 'svelte';
	import { animate } from '$lib/animate';
	import { onDestroy } from 'svelte';

	import gsap from 'gsap';

	let { children } = $props<{ children: Snippet }>();
	let showToast = $state(false);

	let toastElement: HTMLElement | undefined = $state();

	$effect(() => {
		let buttons = document.querySelectorAll('#clipboardBtn');

		buttons.forEach((button) => {
			button.addEventListener('click', () => {
				const preElement = button.closest('.wrapper')?.querySelector('pre');

				if (preElement) {
					const codeElement = preElement as HTMLElement;
					const code = codeElement.innerText;

					navigator.clipboard.writeText(code.trim()).then(() => {
						showToast = true;

						gsap.from(toastElement, {
							duration: 0.5,
							scale: 0,
							opacity: 0,
							ease: 'power2.out'
						});

						setTimeout(() => {
							hideToast();
						}, 2000);
					});
				}
			});
		});
	});

	function hideToast() {
		if (toastElement) {
			gsap.to(toastElement, {
				duration: 0.5,
				scale: 0,
				opacity: 0,
				ease: 'power2.in',
				onComplete: () => {
					showToast = false;
				}
			});
		}
	}

	onDestroy(() => {
		let buttons = document.querySelectorAll('#clipboardBtn');
		buttons.forEach((button) => {
			button.removeEventListener('click', () => {});
		});
	});
</script>

{#if showToast}
	<p
		use:animate={[
			{
				type: 'from',
				duration: 0.5,
				scale: 0,
				opacity: 0,
				ease: 'power2.out'
			},
			{
				type: 'to',
				duration: 1,
				scale: 1,
				opacity: 1,
				ease: 'power2.out'
			}
		]}
		bind:this={toastElement}
		class="bg-purple-500 rounded mx-auto ml-6 mr-6 text-center p-4 text-[#1b1e28] text-sm font-semibold sticky top-1/2 left-2 z-[99999999999]"
	>
		Successfully copied code!
	</p>
{/if}

{@render children()}
