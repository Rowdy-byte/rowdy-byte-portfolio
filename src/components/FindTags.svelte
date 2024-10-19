<script lang="ts">
	import gsap from 'gsap';
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();

	$effect(() => {
		setTimeout(() => {
			const tags = document.querySelectorAll('.tag');
			tags.forEach((tag, i) => {
				gsap.fromTo(
					tag,
					{
						opacity: 0,
						duration: 5,
						y: -20
					},
					{
						opacity: 1,
						y: 0,
						duration: 1,
						delay: i * 0.5,
						ease: 'power1.out'
					}
				);
			});
		}, 2000);
	});
</script>

{@render children()}
