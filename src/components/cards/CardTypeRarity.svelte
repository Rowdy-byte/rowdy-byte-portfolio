<script lang="ts">
	let { type, rarity } = $props();
</script>

<div class="flex w-full font-supercell justify-between gap-2">
	<div
		class="flex-1 flex flex-col justify-center bg-[rgba(245,245,245,.1)] text-center rounded p-1"
	>
		<span class="text-[#f5f5f533] text-shadow text-sm">type</span>
		<h4 class="font-semibold rounded text-shadow">{type}</h4>
	</div>

	<div class="flex flex-1 flex-col bg-[rgba(245,245,245,0.1)] text-center rounded p-1">
		<span class="text-[#f5f5f533] text-shadow text-sm">rarity</span>
		<h4
			class={rarity === 'Common'
				? 'text-[#4299e1] font-semibold text-shadow flex flex-col'
				: rarity === 'Rare'
					? 'text-[#f36104] font-semibold flex text-shadow flex-col'
					: rarity === 'Epic'
						? 'text-[#c707f5] font-semibold flex text-shadow flex-col'
						: rarity === 'Legendary'
							? 'text-legendary bg-legendary-gradient animate-text-legendary font-semibold flex flex-col'
							: rarity === 'Champion'
								? 'text-[#fab108] text-shadow'
								: ''}
		>
			{rarity}
		</h4>
	</div>
</div>
