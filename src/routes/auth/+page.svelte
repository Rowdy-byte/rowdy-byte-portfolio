<script lang="ts">
	import { animate } from '$lib/animate';
	import { pageAnimation } from '$lib/animations/page-animation';
</script>

<p class="text-slate-800 mb-10 text-center">
	Only authenticated users can access this application.
</p>

<form
	use:animate={pageAnimation}
	class="flex flex-col border rounded max-w-[300px] mx-auto gap-4 p-4"
	method="POST"
	action="?/login"
>
	<div class="flex flex-col">
		<label for="email" class="text-slate-400 text-xs"> email </label>
		<input
			class="bg-transparent outline-none text-sm p-1 border-b-2 rounded border-blue-500 text-gray-800"
			name="email"
			type="email"
		/>
	</div>
	<div class="flex flex-col">
		<label for="password" class="text-slate-400 text-xs"> password </label>
		<input
			class="bg-transparent text-sm p-1 outline-none border-b-2 rounded border-blue-500 text-gray-800"
			name="password"
			type="password"
		/>
	</div>

	<button
		class="bg-blue-500 text-sm rounded py-2 px-8 text-slate-200 hover:shadow-lg hover:scale-[1.01]"
		>sign in</button
	>
	<p class="text-slate-400 text-center text-xs font-bold">or</p>
	<button
		formaction="?/signup"
		class="bg-blue-500 rounded text-sm py-2 px-8 text-slate-200 hover:shadow-lg hover:scale-[1.01]"
		>sign up</button
	>
</form>

<footer class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
	<a href="/">⚧</a>
</footer>

<style>
	a {
		font-size: 80px;
		text-decoration: none;
		font-weight: 900;
		color: #e2e8f0;
	}
</style>
