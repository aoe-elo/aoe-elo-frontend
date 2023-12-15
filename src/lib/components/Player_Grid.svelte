<script lang="ts">
	import type { IPlayer } from '$interfaces/entities/player';

	export let thesePlayers: IPlayer[];
</script>

<div class="my-10 grid grid-cols-layout gap-7">
	{#each thesePlayers as player, id}
		<div class="p-8 cardbg grid grid-rows-layout">
			<div>
				<h3 class="text-text3 font-semibold my-4">{player.name}</h3>
				<p class="my-1">Rank: {player.stats.rank}</p>
				<p class="my-1">Elo: {player.stats.elo}</p>
				<p class="my-1">Peak Elo: {player.stats.elo_peak}</p>
				<p class="my-1">Series: {player.stats.num_matches}</p>
				<p class="my-1">Wins: {player.stats.num_wins}</p>
				<p class="my-1">Games: {player.stats.num_games}</p>
				<p class="my-1">Country: {player.country_key}</p>
			</div>
			<div class="grid text-center">
				<a href="/players/{player.id}" class="mt-4 button2">Player Page</a>
			</div>
		</div>
	{/each}
</div>
