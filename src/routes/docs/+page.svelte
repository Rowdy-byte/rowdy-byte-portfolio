<script lang="ts">
	import { docsText } from '$lib/about-text';
	import { animate } from '../../animate';
	import { hamburgerMenuAnimation } from '$lib/animations/hamburger-animation';
</script>

<main
	use:animate={hamburgerMenuAnimation}
	class="max-w-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
>
	<p class="text-center text-xl max-w-[600px] tracking-wide side">
		{docsText}
	</p>
</main>
