<script lang="ts">
	import LatestTournament from '$lib/components/latest-tournament.svelte';
	import TournamentGrid from '$lib/TournamentGrid.svelte';

	export let data;
</script>

<div class="container">
	<LatestTournament />
	<div class="mb-4 mt-24">
		<h2 class="text-brand1 font-title font-bold text-4xl sm:text-6xl tracking-tighter">
			All Tourname<span class="text-brand2">nts</span>
		</h2>
	</div>
	<TournamentGrid tourneys={data.releases} />

	<!-- <div class="my-10 grid grid-cols-layout gap-7">
		{#each tournaments as { id, name, start, end, prizemoney }, index (id)}
			{#if id >= 0 && id <= 15}
				<div class="p-6 cardbg">
					<img
						class="bg-brand2 text-white rounded-lg mx-auto opacity-100"
						src="./tournament.svg"
						height="150"
						width="150"
						alt="tourney"
					/>
					<h3 class="text-text3 font-semibold leading-snug mt-2">{name}</h3>
					<p class="text-text2">{getDates(start)}</p>
					<p class="text-text2">{prizemoney}</p>

					<button class="w-full mt-4 button">Main Page</button>
				</div>
			{/if}
		{/each}
	</div> -->
</div>
