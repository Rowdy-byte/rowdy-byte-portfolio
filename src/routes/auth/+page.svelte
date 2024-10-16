<script lang="ts">
</script>

<form
	class="flex flex-col bg-slate-200 border rounded max-w-[500px] mx-auto gap-4 p-4"
	method="POST"
	action="?/login"
>
	<label class="flex flex-col text-xs">
		Email
		<input
			class="bg-transparent text-lg m-2 p-2 border rounded border-blue-500 text-gray-500"
			name="email"
			type="email"
		/>
	</label>

	<label class="flex flex-col text-xs">
		Password

		<input
			class="bg-transparent text-lg m-2 p-2 border rounded border-blue-500 text-gray-500"
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
