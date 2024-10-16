<script lang="ts">
	import { animate } from '../../animate';
	import { pageAnimation } from '$lib/animations/page-animation';
</script>

<p class="text-slate-800 mb-10 text-center">Only logged in users can access the application.</p>

<form
	use:animate={pageAnimation}
	class="flex flex-col bg-slate-200 border rounded max-w-[500px] mx-auto gap-4 p-4"
	method="POST"
	action="?/login"
>
	<label class="flex flex-col text-xs">
		Email
		<input
			class="bg-transparent outline-blue-600 text-lg m-2 p-2 border rounded border-blue-500 text-gray-800"
			name="email"
			type="email"
		/>
	</label>

	<label class="flex flex-col text-xs">
		Password

		<input
			class="bg-transparent outline-blue-600 text-lg m-2 p-2 border rounded border-blue-500 text-gray-800"
			name="password"
			type="password"
		/>
	</label>

	<button class="bg-blue-500 rounded m-2 py-2 px-8 text-slate-200 hover:scale-100">Login</button>
	<button
		formaction="?/signup"
		class="bg-blue-500 rounded m-2 py-2 px-8 text-slate-200 hover:scale-100">Sign up</button
	>
</form>

<style>
</style>
