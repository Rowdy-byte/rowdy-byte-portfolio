<script lang="ts">
</script>

<form
	class="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
	method="POST"
	action="?/login"
>
	<div class="flex flex-col">
		<label>
			Email
			<input name="email" type="email" />
		</label>
	</div>
	<div class="flex flex-col">
		<label>
			Password
			<input name="password" type="password" />
		</label>
	</div>

	<button>Login</button>
	<button formaction="?/signup">Sign up</button>
</form>
