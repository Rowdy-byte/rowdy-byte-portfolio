<script lang="ts">
	import { animate } from '../animate';
	import { aboutText, projectsText } from '$lib/about-text';
	import { mainAnimation } from '$lib/animations/main-animation';
	import {
		landingProjectsHeaderAnimation,
		landingProjectsTextAnimation
	} from '$lib/animations/landing-animation';
</script>

<main class="flex flex-col lg:flex-row h-screen -z-10 font-montserrat">
	<section
		use:animate={mainAnimation}
		class="
        gap-3 text-sm md:text-lg p-4 flex-1 flex flex-col justify-center items-center text-responsive tracking-[.3rem] text-center bg-gradient-to-b from-[#f3a704] to-[#f36104] h-1/2 lg:h-full lg:w-1/2"
	>
		<p class="font-bold text-slate-200 text-5xl md:text-6xl lg:text-5xl xl:text-7xl">ABOUT</p>
		<p
			class="max-w-lg text-xs font-normal text-slate-100 md:text-sm lg:text-sm xl:text-lg lg:max-w-4xl"
		>
			{aboutText.toUpperCase()}
		</p>
	</section>

	<section
		class="
          antialiased gap-3 text-sm md:text-lg p-4 flex-1 flex flex-col justify-center items-center text-responsive tracking-[.3rem] text-center bg-gradient-to-b from-[#11cce9] to-[#028aba] h-1/2 lg:h-full lg:w-1/2"
	>
		<p
			use:animate={landingProjectsHeaderAnimation}
			class="font-bold text-slate-100 text-5xl md:text-6xl lg:text-5xl xl:text-7xl"
		>
			PROJECTS
		</p>
		<p
			use:animate={landingProjectsTextAnimation}
			class="max-w-lg scale-0 font-normal text-slate-100 text-xs md:text-sm lg:text-sm xl:text-lg lg:max-w-4xl"
		>
			{projectsText.toUpperCase()}
		</p>
	</section>
</main>
