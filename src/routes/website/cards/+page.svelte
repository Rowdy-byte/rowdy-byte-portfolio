<script lang="ts">
	import { animate } from '$lib/animate';
	import { pageAnimation } from '$lib/animations/page-animation';
	import Cards from '../../../components/cards/Cards.svelte';
</script>

<main use:animate={pageAnimation} class="pt-40 pb-40 h-full">
	<Cards />
</main>
