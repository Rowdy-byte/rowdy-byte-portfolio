<script lang="ts">
	const growthTags = [
		'receiving feedback',
		'giving feedback',
		'teamwork',
		'being more consistent',
		'gaining more professional experience'
	];
</script>

<section class="max-w-[600px] mx-auto text-center flex justify-center flex-wrap">
	{#each growthTags as tag}
		<span
			class="text-[#1b1e28] border bg-[#a6accd22] border-[#1b1e28] text-xs py-1 px-2 rounded-md hover:text-purple-500 hover:border hover:border-purple-500"
			>{tag}</span
		>
	{/each}
</section>
