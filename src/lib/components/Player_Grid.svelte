<script lang="ts">
	import type { IPlayer } from '$repositories/entities/player';

	export let thesePlayers: IPlayer[];
</script>

<div class="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
	{#each thesePlayers as player, id}
		<div class="p-8 cardbg grid grid-rows-layout">
			<div>
				<div class="grid grid-cols-layout5 items-center text-text3 font-title text-5xl pb-6">
					<p class="font-bold justify-self-start">{player.tournamentEloRank}</p>
					<h3 class="font-semibold justify-self-center">{player.name}</h3>
					<p class="font-semibold justify-self-end">{player.tournamentElo}</p>
				</div>
				<p class="my-1">Peak Elo: {player.peakElo}</p>
				<p class="my-1">Series: {player.totalAmountSeries}</p>
				<p class="my-1">Wins: {player.seriesWins}</p>
				<p class="my-1">Tournaments: {player.totalAmountTournaments}</p>
			</div>
			<div class="grid text-center">
				<a href="/players/{player.id}" class="mt-4 button2">Player Page</a>
			</div>
		</div>
	{/each}
</div>
