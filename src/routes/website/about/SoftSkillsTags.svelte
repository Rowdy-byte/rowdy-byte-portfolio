<script lang="ts">
	const softSkillsTags = [
		'adoptability',
		'touch typing',
		'perseverance',
		'problem solving',
		'self improvement',
		'remote work',
		'curiosity',
		'documenting',
		'organized',
		'analitic'
	];
</script>

<section class="max-w-[600px] mx-auto text-center flex justify-center flex-wrap">
	{#each softSkillsTags as tag}
		<span
			class="text-[#1b1e28] border bg-[#a6accd22] border-[#1b1e28] text-xs py-1 px-2 rounded-md hover:text-[#f59e0b] hover:border hover:border-[#f59e0b]"
			>{tag}</span
		>
	{/each}
</section>
