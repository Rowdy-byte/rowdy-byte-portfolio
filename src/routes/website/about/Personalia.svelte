<script lang="ts">
	const person = {
		name: 'Rowdy Verbeek',
		dateOfBirth: '08-05-1983',
		placeOfBirth: 'Rotterdam',
		email: 'rowdy.verbeek@outlook.com'
	};

	const { name, dateOfBirth, placeOfBirth, email } = person;
</script>

<article class="flex mb-14 sm:mx-auto bg-[#a6accd22] max-w-96 h-52 rounded-xl">
	<section class="flex flex-col justify-center items-center w-32 px-auto">
		<span class=" h-24 w-24 rounded-full border-[#94a3b8] border-[2px] overflow-hidden">
			<img class="" src="/me3.jpg" alt="" />
		</span>
	</section>
	<section class="flex flex-col mx-auto justify-center items-center">
		<ul class="">
			<li class="font-ocr max-w-fit mb-2 text-[10px]">
				<p class="text-xs p-0 font-roboto">name</p>
				{name}
			</li>
			<li class="font-ocr mb-2 text-[10px]">
				<p class="text-xs p-0 font-roboto">date of birth</p>
				{dateOfBirth}
			</li>
			<li class="font-ocr mb-2 text-[10px]">
				<p class="text-xs p-0 font-roboto">place of birth</p>
				{placeOfBirth}
			</li>
			<li class="font-ocr text-[10px]">
				<p class="text-xs p-0 font-roboto">e-mail</p>
				{email}
			</li>
		</ul>
	</section>
</article>
