<script lang="ts">
	const hobbiesTags = [
		'savage garden, to the moon & back',
		'yoga',
		'fitness',
		'music',
		'cooking',
		'dua lipa',
		'mindfulness',
		'doing nothing',
		'pure chocolate whole hazelnut',
		'salty popcorn',
		'unhealthy amouts coffee',
		'being at home'
	];
</script>

<section class="max-w-[600px] mx-auto text-center flex justify-center flex-wrap">
	{#each hobbiesTags as tag}
		<span
			class="text-[#1b1e28] border bg-[#a6accd22] border-[#1b1e28] text-xs py-1 px-2 rounded-md hover:text-pink-500 hover:border hover:border-pink-500"
			>{tag}</span
		>
	{/each}
</section>
