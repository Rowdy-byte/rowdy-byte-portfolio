<script lang="ts">
	const hardSkillTags = [
		'javascript',
		'typescript',
		'scss',
		'html',
		'css',
		'tailwind',
		'svelte',
		'sveltekit',
		'zod',
		'prisma',
		'mdsvex',
		'github'
	];
</script>

<section class="max-w-[600px] mx-auto text-center flex justify-center flex-wrap">
	{#each hardSkillTags as tag}
		<span
			class="text-[#1b1e28] border bg-[#a6accd22] border-[#1b1e28] text-xs py-1 px-2 rounded-md hover:text-[#06b6d4] hover:border hover:border-[#06b6d4]"
			>{tag}</span
		>
	{/each}
</section>
