<main>
	<section class="section-1">dfdff</section>
	<section class="section-2">sdsdsds</section>
</main>

<style lang="scss">
	$blue-light: #11cce8;
	$blue-dark: #028aba;

	$yellow-light: #f3a704;
	$yellow-dark: #f36104;

	@mixin Divider() {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	main {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;

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
