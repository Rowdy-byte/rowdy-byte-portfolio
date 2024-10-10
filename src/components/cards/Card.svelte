<script lang="ts">
	import CardElixer from './CardElixer.svelte';

	import CardNameLevel from './CardNameLevel.svelte';
	import CardTypeRarity from './CardTypeRarity.svelte';

	let { id, name, level, cost, type, rarity, img } = $props();
</script>

<a href={`/cards/${id}`}>
	<main
		class={`
                    h-full 
                    flex flex-col justify-center items-center
                    p-2   
                    gap-1
                `}
	>
		<header
			class={`
                        flex flex-col justify-center items-center
                        w-full 
                        rounded rounded-t-xl 
                        p-2 
                        bg-[rgb(75,85,99,.5)]   
                    `}
		>
			<CardNameLevel {name} {level} {rarity} />
		</header>

		<div class=" rounded p-8 h-[50%] flex justify-center items-center"></div>

		<section class="flex w-full rounded p-2 bg-[rgb(75,85,99,.5)]">
			<CardTypeRarity {type} {rarity} />
		</section>

		<CardElixer {cost} />
	</main>
</a>
