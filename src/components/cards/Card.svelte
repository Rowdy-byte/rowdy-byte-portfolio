<script lang="ts">
	import type { CardType } from '$lib/cards-data';

	import CardElixer from './CardElixer.svelte';
	import CardNameLevel from './CardNameLevel.svelte';
	import CardTypeRarity from './CardTypeRarity.svelte';

	let { id, name, level, cost, type, rarity, img }: CardType = $props();
</script>

<a href={`/cards/${id}`}>
	<main
		class={`
                    h-full 
                    flex flex-col justify-center items-center
                    
                    gap-2
                `}
	>
		<header
			class={`
                        flex flex-col justify-center items-center
                        w-full 
                        rounded rounded-t-xl 
                        p-1 
                        bg-[rgb(75,85,99,.5)]   
                    `}
		>
			<CardNameLevel {name} {level} {rarity} />
		</header>

		<div class=" rounded p-10 h-[50%] flex justify-center items-center">
			<img src={img} alt="" />
		</div>

		<section class="flex w-full rounded p-1 bg-[rgb(75,85,99,.5)]">
			<CardTypeRarity {type} {rarity} />
		</section>

		<CardElixer {cost} />
	</main>
</a>
