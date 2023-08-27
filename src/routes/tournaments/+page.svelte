<script lang="ts">
	import tournaments from '$lib/data/tournaments.json';

	async function getDates(tdate) {
		let now = tdate.split('T')[0];
		tdate = now.split('-').reverse().join('-');

		return tdate;
	}
</script>

<div class="container">
	<div class="my-8">
		<h2 class="text-brand1 font-title font-bold text-4 xl sm:text-6xl tracking-tighter">
			Tourname<span class="text-brand2">nts</span>
		</h2>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-7">
		{#each tournaments as { id, name, start, end, prizemoney }, index (id)}
			<div
				class="p-6 bg-gradient-to-br from-gradientbg-dark from-20% via-gradientbg via-60% to-gradientbg-dark to-80% rounded-md shadow-card"
			>
				<img
					class="bg-brand2 text-white rounded-lg text-center"
					src="./tournament.svg"
					height="150"
					width="150"
					alt="tourney"
				/>
				<h3 class="text-text-dark font-semibold leading-snug mt-2">{name}</h3>
				<p class="text-text">{getDates(start)}</p>
				<p class="text-text">{prizemoney}</p>

				<button
					class="w-full mt-4 py-2 text-text-dark font-semibold bg-gradient-to-r from-gradientcard-left2 to-gradientcard-right2 rounded-md"
					>Main Page</button
				>
			</div>
		{/each}
	</div>
</div>
