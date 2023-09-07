<script lang="ts">
	import Latest_Tournament from '$lib/components/Last_Tournament.svelte';
	import Top_Players from '$lib/components/Top_5_Players.svelte';
</script>

<div class="container">
	<div class="my-10 text-center md:relative">
		<div
			class="md:relative font-title font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-brand1 tracking-tight z-40"
		>
			Tournament<span class="text-brand2">Elo</span>
		</div>
		<div
			class="mx-auto max-w-lg md:absolute md:right-56 p-6 mt-4 md:-mt-6 mx-l rounded-md bg-gradient-to-br from-grad-left1 from-40% to-grad-right1 to-100% shadow-card overflow-hidden"
		>
			<h1 class="text-brand1 text-center font-medium">
				AOE 2 competitive player ELO when it matters most
			</h1>
		</div>
	</div>

	<div
		class="max-w-xl mx-auto p-6 mt-24 rounded-md bg-gradient-to-br from-grad-left1 from-40% to-grad-right1 to-100% shadow-card overflow-hidden md:max-w-4xl"
	>
		<h2 class="text-text3 text-2xl font-semibold">Search Database</h2>
		<div class="" />
	</div>

	<div class="my-10">
		<Top_Players />
		<Latest_Tournament />
	</div>
</div>
