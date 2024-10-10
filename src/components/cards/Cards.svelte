<script lang="ts">
	import { cards } from '$lib/cards-data';
	import Card from './Card.svelte';
</script>

<div>
	<main
		class="grid w-full mt-20 grid-cols-1 gap-8 justify-center md:grid-cols-2 md:mt-40 lg:grid-cols-3 lg:mt-0 lg:mx-auto xl:grid-cols-4"
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
