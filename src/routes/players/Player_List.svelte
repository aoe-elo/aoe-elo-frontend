<script lang="ts">
	import type { IPlayer } from '$interfaces/entities/player';
	import TrophyGrid from './trophy_Grid.svelte';
	import PlayerSeriesWins2 from './Player_Series_Wins2.svelte';

	export let allPlayers: IPlayer[];
	console.log(allPlayers);
</script>

{#each allPlayers as player, id}
	<div class="cardbg p-1 my-4 md:my-0">
		<div class="bg-[url('./fleurleft1.png')] bg-contain bg-no-repeat">
			<div class="grid grid-cols-1 sm:grid-cols-layout4 items-center p-2 gap-4">
				<div class="flex flex-col lg:flex-row lg:justify-between gap-2">
					<div class="flex items-center justify-between sm:justify-start gap-4">
						<p class="text-text2 font-title font-bold text-6xl">{player.tournamentEloRank}</p>
						<h3 class="text-text3 text-3xl sm:text-2xl font-semibold font-title tracking-wide">
							{player.name}
						</h3>
					</div>
					<div>
						<div class="flex items-center justify-between md:justify-start pt-4 md:pb-4 gap-4">
							<img src="./chinaflag2.png" alt="flag" />
							<div class="flex flex-col">
								<p class="text-right">Elo: {player.tournamentElo}</p>
								<p class="text-right">team: WWP</p>
							</div>
						</div>
					</div>
				</div>
				<div class="grid lg:grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4">
					<div
						class="rounded-md shadow-card py-2 px-4 gap-2 flex flex-col md:flex-row xl:flex-col justify-between xl:justify-center xl:gap-0 xl:pt-4 xl:py-0"
					>
						<TrophyGrid />
						<div class="flex justify-end items-center gap-6 xl:py-2">
							<p>32 / {player.totalAmountTournaments}</p>
							<p>58%</p>
						</div>
					</div>

					<div class="grid grid-cols-2 gap-2 xl:grid-cols-1 2xl:grid-cols-2 2xl:gap-4">
						<div
							class="rounded-md shadow-card py-2 px-4 flex flex-col lg:flex-row justify-between gap-2"
						>
							<div>
								<p>Series:</p>
							</div>
							<div class="flex gap-2 justify-start md:justify-end">
								<p>{player.seriesWins} / {player.totalAmountSeries}</p>
								<p>76%</p>
							</div>
						</div>

						<div
							class="rounded-md shadow-card p-2 px-4 flex flex-col lg:flex-row justify-between gap-2"
						>
							<div>
								<p>Games:</p>
							</div>
							<div class="flex gap-2 justify-start md:justify-end">
								<p>851 / 1200</p>
								<p>71%</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/each}
