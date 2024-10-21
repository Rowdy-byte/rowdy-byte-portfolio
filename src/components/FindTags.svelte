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

	const colors = ['#d946ef', '#f59e0b', '#06b6d4'];

	$effect(() => {
		setTimeout(() => {
			const skillsTags = document.querySelectorAll('.tags__wrapper span');
			console.log(skillsTags);

			skillsTags.forEach((tag, i) => {
				const randomColor = colors[Math.floor(Math.random() * colors.length)];
				gsap.to(tag, {
					borderColor: randomColor,
					borderWidth: '.5px',
					borderStyle: 'solid',
					duration: 2,
					ease: 'power1.out',
					repeat: -1,
					yoyo: true,
					delay: i * 0.5
				});
			});
		}, 1000);
	});
</script>

{@render children()}
