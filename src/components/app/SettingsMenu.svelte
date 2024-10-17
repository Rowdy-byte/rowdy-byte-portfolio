<script lang="ts">
	let { user } = $props<{ user: object }>();
</script>

<aside class="w-96 absolute top-1/4 right-2 p-4 border rounded-xl border-slate-400">
	<p class="">{user.email}</p>
	<section></section>
</aside>
