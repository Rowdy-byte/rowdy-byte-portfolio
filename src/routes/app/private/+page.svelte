<script lang="ts">
	let { data } = $props();

	const { email } = data.user;
</script>

<p>welcome, {email}</p>
