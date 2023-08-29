<script lang="ts">
	import LatestTournament from '$lib/components/latest-tournament.svelte';
	let tourney = getTourneyData();

	async function getTourneyData() {
		const res = await fetch('./tournaments.json');
		const tourney = await res.json();
		console.log(tourney);
		return tourney;
	}

	async function getDates(tdate) {
		if (tdate !== null) {
			let now = tdate.split('T')[0];
			now = now.split('-').reverse().join('-');
		}
		// console.log(tdate);
	}

	async function formatCurrency(prizemoney) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			currencyDisplay: 'code'
		})
			.format(prizemoney)
			.replace('USD', '')
			.trim();
	}
</script>

<div class="container">
	<LatestTournament />
	<div class="mb-4 mt-24">
		<h2 class="text-brand1 font-title font-bold text-4xl sm:text-6xl tracking-tighter">
			All Tourname<span class="text-brand2">nts</span>
		</h2>
	</div>

	<div class="my-10 grid grid-cols-layout gap-7">
		{#await tourney}
			Loading...
		{:then data}
			{#each data.results as name, index}
				<div class="p-6 cardbg">
					<h3 class="text-text-dark font-semibold leading-snug mt-2">scaffold</h3>
					<button class="w-full mt-4 button">Main Page</button>
				</div>
			{/each}
		{/await}
	</div>
</div>
