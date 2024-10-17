<script lang="ts">
	import { docsText } from '$lib/about-text';
	import { animate } from '$lib/animate';
	import { pageAnimation } from '$lib/animations/page-animation';
</script>

<main
	use:animate={pageAnimation}
	class="max-w-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
>
	<h1 class="text-center pb-3 text-4xl bg-gradient-to-r from-purple-500 to-emerald-500">
		Welcome!
	</h1>
	<p class="text-center text-xl font-light max-w-[600px] tracking-wide side">
		{docsText}
	</p>
</main>
