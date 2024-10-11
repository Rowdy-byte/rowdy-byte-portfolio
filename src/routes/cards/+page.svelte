<script lang="ts">
	import { animate } from '../../animate';
	import { pageAnimation } from '$lib/animations/page-animation';
	import Cards from '../../components/cards/Cards.svelte';
</script>

<main use:animate={pageAnimation} class="">
	<Cards />
</main>
