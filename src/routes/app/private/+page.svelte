<script lang="ts">
	import type { snObj } from '$lib/types/serialmapper';
	import Statitics from '../../../components/app/Statitics.svelte';

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
	class="bg-slate-200 h-full max-w-[600px] mx-auto flex flex-col mt-8 p-2 rounded gap-1 lg:flex-row lg:max-w-[1000px] 2xl:flex-row 2xl:max-w-[1300px] fullscreen:flex-row fullscreen:max-w-[1600px]"
>
	<section class="flex flex-1 flex-col">
		<textarea name="serialnumbers" class="h-full rounded p-1" placeholder="paste serialnumbers"
		></textarea>
	</section>
	<section class="flex flex-1 flex-col gap-1 md:p-10">
		<header class="flex gap-1 rounded">
			<Statitics text="serialnumbers" number="50" />
			<Statitics text="numbers" number="500" />
		</header>

		<input name="filename" type="text" placeholder="filename" class="rounded p-3" />
		<input type="date" name="createdAt" id="createdAt" class="rounded p-3 text-slate-400" />
		<button type="submit" class="bg-blue-500 text-slate-200 rounded py-3">Add to List</button>

		<div class="flex justify-center w-full bg-slate-600 rounded p-1 mt-10 items-center">
			<input type="text" placeholder="search" class="rounded p-2 border- border-slate-600" />
		</div>
		<article class="bg-slate-50 max-h-[250px] overflow-y-scroll rounded h-full p-1">
			<ul>
				<li
					class="bg-slate-200 text-slate-600 rounded p-1 mb-1 hover:bg-blue-200 hover:cursor-pointer"
				>
					item one
				</li>
				<li
					class="bg-slate-200 text-slate-600 rounded p-1 mb-1 hover:bg-blue-200 hover:cursor-pointer"
				>
					item one
				</li>
				<li
					class="bg-slate-200 text-slate-600 rounded p-1 mb-1 hover:bg-blue-200 hover:cursor-pointer"
				>
					item one
				</li>
			</ul>
		</article>
		<button class="bg-blue-500 text-slate-200 rounded py-3">Generate Map</button>
	</section>
</form>

<style>
</style>
