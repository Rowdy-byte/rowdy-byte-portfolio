<script lang="ts">
	import { animate } from '$lib/animate';
	import { pageAnimation } from '$lib/animations/page-animation';
</script>

<p class="text-slate-800 mb-10 text-center">
	Only authenticated users can access this application.
</p>

<form
	use:animate={pageAnimation}
	class="flex flex-col border rounded max-w-[500px] mx-auto gap-4 p-4"
	method="POST"
	action="?/login"
>
	<div class="flex flex-col">
		<label for="email" class="text-slate-400 text-xs"> Email </label>
		<input
			class="bg-transparent outline-blue-600 text-lg p-1 border rounded border-blue-500 text-gray-800"
			name="email"
			type="email"
		/>
	</div>
	<div class="flex flex-col">
		<label for="password" class="text-slate-400 text-xs"> Password </label>
		<input
			class="bg-transparent outline-blue-600 text-lg p-1 border rounded border-blue-500 text-gray-800"
			name="password"
			type="password"
		/>
	</div>

	<button class="bg-blue-500 rounded py-2 px-8 text-slate-200 hover:scale-100">Login</button>
	<p class="text-slate-400 text-center text-xs font-bold">or</p>
	<button formaction="?/signup" class="bg-blue-500 rounded py-2 px-8 text-slate-200 hover:scale-100"
		>Sign up</button
	>
</form>

<footer class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
	<a href="/">RowdyByte</a>
</footer>
