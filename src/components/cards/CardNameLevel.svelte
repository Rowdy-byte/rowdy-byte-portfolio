<script lang="ts">
	let { rarity, name, level } = $props();
</script>

<div>
	<p class="font-bold text-slate-200 font-supercell text-shadow text-base">{name}</p>
	<p
		class={`text-sm font-supercell ${
			rarity === 'Common'
				? 'text-[#4299e1] font-bold text-shadow '
				: rarity === 'Rare'
					? 'text-[#f36104] font-bold text-shadow '
					: rarity === 'Epic'
						? 'text-[#c707f5] font-bold text-shadow'
						: rarity === 'Legendary'
							? 'text-legendary bg-legendary-gradient animate-text-legendary font-bold inline-block'
							: rarity === 'Champion'
								? 'text-[#fab108] font-bold text-shadow '
								: ''
		}`}
	>
		level {level}
	</p>
</div>
