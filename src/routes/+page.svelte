<script lang="ts">
	import Main from './main.svelte';
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
	<Main />
</div>
