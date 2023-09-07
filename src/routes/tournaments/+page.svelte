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
</div>
