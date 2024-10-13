<script lang="ts">
	import type { Snippet } from 'svelte';
	import { animate } from '../animate';
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

						// Animate the toast when it shows
						gsap.from(toastElement, {
							duration: 0.5,
							scale: 0,
							opacity: 0,
							ease: 'power2.out'
						});

						// Hide the toast after 5 seconds
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
					showToast = false; // Remove the toast from DOM after animation
				}
			});
		}
	}

	// Cleanup to avoid memory leaks
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
		class="bg-purple-500 rounded mx-auto text-center p-4 text-[#1b1e28] text-sm font-semibold sticky top-1/2 left-2 z-50"
	>
		Successfully copied code!
	</p>
{/if}

{@render children()}
