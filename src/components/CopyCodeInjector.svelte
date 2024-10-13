<script lang="ts">
	import type { Snippet } from 'svelte';

	import { setContext } from 'svelte';

	let { children } = $props<{ children: Snippet }>();

	let showToast = $state(false);

	$effect(() => {
		setContext('showToast', showToast);
		// console.log(showToast);
	});

	$effect(() => {
		let buttons = document.querySelectorAll('#clipboardBtn');

		buttons.forEach((button) => {
			button.addEventListener('click', () => {
				const preElement = button.closest('.wrapper')?.querySelector('pre');

				if (preElement) {
					const codeElement = preElement as HTMLElement;
					const code = codeElement.innerText;

					navigator.clipboard.writeText(code).then(() => {
						showToast = true;
						console.log(showToast);

						setTimeout(() => {
							showToast = false;
						}, 5000);
					});
				}
			});
		});
	});
</script>

{#if showToast}
	<p class="text-red-700 text-7xl absolute top-20">copied</p>
{/if}

{@render children()}
