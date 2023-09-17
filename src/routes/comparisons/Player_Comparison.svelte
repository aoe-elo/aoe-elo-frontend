<script>
	const populars = [
		{ player1: 'Margougou', player2: 'Ganji' },
		{ player1: 'Valas', player2: 'Villese' },
		{ player1: 'Dark', player2: 'ClassicPro' },
		{ player1: 'Vinchester', player2: 'Hera' },
		{ player1: 'Salzz', player2: 'Miguel' },
		{ player1: 'Nicov', player2: 'Nili' },
		{ player1: 'Jordan', player2: 'Daut' },
		{ player1: 'ACCM', player2: 'Dracken' }
	];
</script>

<div class="mt-20 mb-8">
	<h2 class="text-brand1 font-title font-bold text-4xl sm:text-6xl tracking-tighter">
		Player Comparis<span class="text-brand2">ons</span>
	</h2>
</div>

<div class="p-6 cardbg">
	<div
		class="flex flex-col md:flex-row content-center justify-center md:items-end md:space-x-16 mb-8"
	>
		<div>
			<div class="flex justify-start items-center space-x-4 pr-16 my-2">
				<div class="text-text4">
					<svg width="30" height="30" class="fill-current" viewBox="0 0 256 256"
						><path
							d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28 20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64 83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8Zm-8 68.06-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"
						/></svg
					>
				</div>
				<p class="text-3xl font-title font-bold tracking-wider">Player 1</p>
			</div>
			<div class="searchboxbg flex justify-between items-center py-2 px-4">
				<p>|</p>
				<div class="text-text4">
					<svg width="30" height="30" class="fill-current" viewBox="0 0 256 256"
						><path
							d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
						/></svg
					>
				</div>
			</div>
		</div>
		<div class="text-4xl text-text4 font-medium tracking-tight py-4 md:py-0">/ vs /</div>
		<div>
			<div class="flex justify-start items-center space-x-4 pr-16 my-2">
				<div class="text-text4">
					<svg width="30" height="30" class="fill-current" viewBox="0 0 256 256"
						><path
							d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28 20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64 83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8Zm-8 68.06-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"
						/></svg
					>
				</div>
				<p class="text-3xl font-title font-bold tracking-wider">Player 2</p>
			</div>
			<div class="searchboxbg flex justify-between items-center py-2 px-4">
				<p>|</p>
				<div class="text-text4">
					<svg width="30" height="30" class="fill-current" viewBox="0 0 256 256"
						><path
							d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
						/></svg
					>
				</div>
			</div>
		</div>
	</div>
	<div class="text-center">
		<button class="buttonbig my-8 hover:text-text4 cardoutline">Compare Selected Players</button>
	</div>
	<h3 class="mt-8 mb-4 text-2xl font-title text-text3 font-bold">Popular Matchups</h3>
	<div class="grid grid-cols-layout mb-4 place-items-center gap-6">
		{#each populars as popular}
			<div
				class="flex justify-between items-center p-2 shadow-card rounded-md hover:text-text4 hover:outline-4 outline-text4 w-full"
			>
				<p class="px-2 text-l">{popular.player1}</p>
				<p class="font-title font-bold p-2 text-2xl text-text4">/ vs /</p>
				<p class="px-2">{popular.player2}</p>
			</div>
		{/each}
	</div>
</div>
