<script lang="ts">
	let { text, number } = $props<{ text: string; number: string }>();
</script>

<aside class="bg-slate-50 overflow-hidden rounded flex flex-col flex-1">
	<h1 class="bg-slate-600 text-slate-200 font-semibold text-center p-3">{text.toUpperCase()}</h1>
	<p class="text-center text-slate-600 text-5xl font-semibold p-10">{number}</p>
</aside>
