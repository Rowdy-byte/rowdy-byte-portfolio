<script lang="ts">
	import { animate } from '../animate';
</script>

<main class={`flex flex-col lg:flex-row h-screen -z-10`}>
	<section
		use:animate={[
			{
				type: 'to',
				duration: 2,
				x: 200,
				rotation: 360,
				scale: 1.5,
				opacity: 0.5,
				ease: 'power2.out'
			},
			{
				type: 'to',
				duration: 1,
				x: 0,
				rotation: 0,
				scale: 1,
				opacity: 1,
				ease: 'power2.inOut',
				delay: 0.5
			}
		]}
		class="
        gap-3 text-sm md:text-lg p-4 flex-1 flex flex-col justify-center items-center text-responsive tracking-[.3rem] text-center bg-gradient-to-b from-[#f3a704] to-[#f36104] h-1/2 lg:h-full lg:w-1/2"
	>
		<p class="font-bold text-slate-200 text-5xl md:text-6xl lg:text-5xl xl:text-7xl">ABOUT</p>
		<p class="max-w-lg text-xs text-slate-100 md:text-sm lg:text-sm xl:text-lg lg:max-w-4xl">
			MY NAME IS ROWDY AND I AM A CREATIVE DEVELOPER, WHEN POSSIBLE FOLLOWING MY HEART AS I ASSESS
			DESIGNS WITH MY EYES, NOT ONLY BASED ON TRENDS
		</p>
	</section>
	<section
		class="
          antialiased gap-3 text-sm md:text-lg p-4 flex-1 flex flex-col justify-center items-center text-responsive tracking-[.3rem] text-center bg-gradient-to-b from-[#11cce9] to-[#028aba] h-1/2 lg:h-full lg:w-1/2"
	>
		<p
			use:animate={[
				{
					type: 'to',
					x: 1000
				},
				{
					type: 'to',
					duration: 1,
					delay: 3,
					x: 0
				}
			]}
			class="font-bold text-slate-100 text-5xl md:text-6xl lg:text-5xl xl:text-7xl"
		>
			PROJECTS
		</p>
		<p
			use:animate={[
				{
					type: 'to',
					delay: 2,
					duration: 2,
					scale: 1
				}
			]}
			class="max-w-lg scale-0 text-slate-100 text-xs md:text-sm lg:text-sm xl:text-lg lg:max-w-4xl"
		>
			I REALLY LIKE UI/UX PROJECTS, AND I ALSO LIKE MORE TECHNICHAL PROJECTS LIKE ANY TYPE OF
			MANAGEMENT APPLICATION
		</p>
	</section>
</main>
