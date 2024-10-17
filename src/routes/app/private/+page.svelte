<script lang="ts">
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
