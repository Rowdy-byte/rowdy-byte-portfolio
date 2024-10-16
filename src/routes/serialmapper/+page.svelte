<script lang="ts">
	import { animate } from '../../animate';
	import { pageAnimation } from '$lib/animations/page-animation';
</script>

<figure
	use:animate={pageAnimation}
	class="gap-2 flex flex-col absolute top-1/2 transform -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2"
>
	<p class="text-slate-200 pb-2 font-cubano text-2xl font-bold text-center">
		Serialmapper coming soon...
	</p>
	<img
		class="max-w-full h-auto lg:max-w-[800px] lg:mx-auto"
		src="/serialmapper_finished.jpg"
		alt="serialmapper-design-img"
	/>
	<button class="bg-emerald-500 rounded m-2 py-2 px-8 text-slate-200 hover:scale-100"
		><a href="/private/serialmapper-app">Go to App</a></button
	>
</figure>
