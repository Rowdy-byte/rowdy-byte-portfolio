<script lang="ts">
	import { cards } from '$lib/cards-data';
	import Card from './Card.svelte';

	import gsap from 'gsap';

	$effect(() => {
		gsap.from('article', {
			opacity: 0,
			delay: 1,
			y: 50,
			duration: 0.5,
			stagger: 0.2,
			ease: 'power2.out'
		});
	});
</script>

<div>
	<main
		class="grid w-full grid-cols-1 gap-2 justify-center md:grid-cols-2 lg:grid-cols-3 lg:mx-auto xl:grid-cols-4"
	>
		{#each cards as card (card.id)}
			<article class={`rounded-3xl mx-auto p-3 w-72 max-h-[420px]`}>
				<Card
					id={card.id}
					name={card.name}
					level={card.level}
					cost={card.cost}
					type={card.type}
					rarity={card.rarity}
					img={card.img}
				/>
			</article>
		{/each}
	</main>
</div>
