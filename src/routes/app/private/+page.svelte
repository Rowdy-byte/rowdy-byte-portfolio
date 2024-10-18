<script lang="ts">
	import type { snObj } from '$lib/types/serialmapper';

	let { data } = $props();

	const { email } = data.user;

	let msg = $state(true);

	$effect(() => {
		if (email) {
			setTimeout(() => {
				msg = false;
			}, 3000);
		}
	});
</script>

{#if msg}
	<p
		class="absolute top-24 left-1/2 py-2 px-6 text-slate-500 text-center bg-slate-200 border rounded-sm shadow-xl transform -translate-x-1/2"
	>
		Welcome, {email}
	</p>
{/if}

<form
	method="post"
	action="?/createSnObj"
	class="bg-slate-200 h-full flex flex-col p-2 rounded gap-1"
>
	<section class="flex flex-1 flex-col">
		<textarea name="serialnumbers" class="h-full rounded p-1" placeholder="paste serialnumbers"
		></textarea>
	</section>
	<section class="flex flex-1 flex-col gap-1">
		<header class="flex gap-1 rounded">
			<aside class="bg-slate-50 overflow-hidden rounded flex flex-col flex-1">
				<h1 class="bg-blue-500 text-slate-200 text-center p-2">serialnumbers</h1>
				<p class="text-center text-slate-600 text-5xl font-semibold p-10">100</p>
			</aside>
			<aside
				class="bg-slate-50 flex justify-center items-center rounded overflow-hidden flex-col flex-1"
			>
				<h1 class="bg-blue-500 text-slate-200 text-center w-full p-2">numbers</h1>
				<p class="text-center text-slate-600 text-5xl font-semibold p-10">1000</p>
			</aside>
		</header>

		<input name="filename" type="text" placeholder="filename" class="rounded p-2" />
		<input type="date" name="createdAt" id="createdAt" class="rounded p-2" />
		<button type="submit" class="bg-blue-500 text-slate-200 rounded py-2">Add to List</button>
		<article class="bg-slate-50 rounded p-1">
			<ul>
				<li class="bg-slate-200 rounded p-1 mb-1 hover:bg-blue-200">item one</li>
				<li class="bg-slate-200 rounded p-1 mb-1 hover:bg-blue-200">item one</li>
				<li class="bg-slate-200 rounded p-1 mb-1 hover:bg-blue-200">item one</li>
				<li class="bg-slate-200 rounded p-1 mb-1 hover:bg-blue-200">item one</li>
			</ul>
		</article>
		<button class="bg-blue-500 text-slate-200 rounded py-2">Generate Map</button>
	</section>
</form>

<style>
</style>
