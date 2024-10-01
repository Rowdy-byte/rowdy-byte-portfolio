<main>
	<section class="section-1"></section>
	<section class="section-2"></section>
</main>

<style lang="scss">
	$blue-light: #11cce8;
	$blue-dark: #028aba;

	$yellow-light: #f3a704;
	$yellow-dark: #f36104;

	main {
		height: 100%;
		display: flex;
		flex-direction: column;

		@mixin Divider() {
			display: flex;
			flex: 1;
		}

		.section-1 {
			@include Divider();
			background: linear-gradient($blue-light, $blue-dark);
		}
		.section-2 {
			@include Divider();
			background: linear-gradient($yellow-light, $yellow-dark);
		}
	}
</style>
