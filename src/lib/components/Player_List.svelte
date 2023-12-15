<script lang="ts">
	import type { IPlayer } from '$interfaces/entities/player';
	import PlayerSeriesWins2 from '../../routes/players/Player_Series_Wins2.svelte';

	export let thesePlayers: IPlayer[];
	console.log(thesePlayers);
</script>

<div class="my-10">
	<!-- {#each thesePlayers as player, id}
		<div class="p-8 cardbg grid grid-rows-layout">
			<div>
				<h3 class="text-text3 font-semibold my-4">{player.name}</h3>
			</div>
			<div class="grid text-center">
				<a href="/players/{id}" class="mt-4 button2">Player Page</a>
			</div>
		</div>
	{/each} -->

	<div class="place-self-stretch cardbg">
		<div class="bg-[url('./fleur4.png')] bg-cover bg-no-repeat">
			<div class="text-right p-4 text-text2 font-medium">
				<p class="text-6xl px-2">{thesePlayers.tournamentEloRank}</p>
				<p class="text-4xl font-title font-bold p-2 pb-4">{thesePlayers.name}</p>
				<div class="flex justify-between items-center">
					<div>
						<img src="./chinaflag2.png" alt="flag" />
					</div>
					<div class="flex-1">
						<p class="text-2xl px-2">elo: {thesePlayers.tournamentElo}</p>
						<p class="text-2xl px-2">team: {thesePlayers.teamActive.shortName}</p>
					</div>
				</div>
				<div class="pt-8 pb-2 py-2">
					<PlayerSeriesWins2 />
				</div>
				<button class="button my-4 w-full">Player Page</button>
			</div>
		</div>
	</div>

	<div class="place-self-stretch cardbg">
		<div class="bg-[url('./fleur4.png')] bg-cover bg-no-repeat">
			<div class="flex justify-between items-center text-right p-4 text-text2 font-medium">
				<p class="text-6xl px-2">{thesePlayers.tournamentEloRank}</p>
				<p class="text-4xl font-title font-bold p-2 pb-4">{thesePlayers.name}</p>
				<div class="flex justify-between items-center">
					<div>
						<img src="./chinaflag2.png" alt="flag" />
					</div>
					<div class="flex-1">
						<p class="text-2xl px-2">elo: {thesePlayers.tournamentElo}</p>
						<p class="text-2xl px-2">team: {thesePlayers.teamActive.shortName}</p>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<div class="flex flex-col">
						<p class="text-left px-2 pt-4 pb-2 text-lg">Tournament Results</p>
						<div class="rounded-md shadow-card px-4 py-2 text-2xl text-text1">
							<div class="flex justify-between items-center py-2">
								<div class="flex space-x-2">
									<div class="text-yellow-400">
										<svg width="30" height="30" class="fill-current" viewBox="0 0 256 256"
											><path
												d="M232 64h-24v-8a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16ZM48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm184-24a24 24 0 0 1-24 24h-.5a81.81 81.81 0 0 0 .5-8.9V80h24Z"
											/></svg
										>
									</div>
									<p>6</p>
								</div>
								<div class="flex space-x-2">
									<div class="text-stone-300">
										<svg width="30" height="30" class="fill-current" viewBox="0 0 256 256"
											><path
												d="M232 64h-24v-8a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16ZM48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm184-24a24 24 0 0 1-24 24h-.5a81.81 81.81 0 0 0 .5-8.9V80h24Z"
											/></svg
										>
									</div>
									<p>14</p>
								</div>
								<div class="flex space-x-2">
									<div class="text-amber-600">
										<svg width="30" height="30" class="fill-current" viewBox="0 0 256 256"
											><path
												d="M232 64h-24v-8a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16ZM48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm184-24a24 24 0 0 1-24 24h-.5a81.81 81.81 0 0 0 .5-8.9V80h24Z"
											/></svg
										>
									</div>
									<p>12</p>
								</div>
							</div>
						</div>
					</div>
					<div class="flex space-x-6 justify-end items-center p-2 text-text2 text-xl">
						<p>32 / 55</p>
						<p>58%</p>
					</div>

					<div class="flex justify-between backdrop gap-6">
						<div class="rounded-md shadow-card px-4 py-2">
							<div class="flex flex-col space-x-4">
								<p>Series Won:</p>
								<div class="flex justify-between space-x-4">
									<p>172 / 226</p>
									<p>76%</p>
								</div>
							</div>
						</div>
						<div class="rounded-md shadow-card px-4 py-2">
							<div class="flex flex-col space-x-4">
								<p>Games Won:</p>
								<div class="flex space-x-4">
									<p>851 / 1146</p>
									<p>76%</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button class="button my-4 w-full">Player Page</button>
			</div>
		</div>
	</div>

	<!-- <div class="p-8 cardbg grid grid-rows-layout">
		<div>
			<h3 class="text-text3 font-semibold my-4">{thesePlayers.name}</h3>
		</div>
		<div>
			<p class="my-1">Rank: {thesePlayers.tournamentEloRank}</p>
			<p class="my-1">Elo: {thesePlayers.tournamentElo}</p>
			<p class="my-1">Peak Elo: {thesePlayers.peakElo}</p>
			<p class="my-1">Tournaments: {thesePlayers.totalAmountTournaments}</p>
			<p class="my-1">Series: {thesePlayers.totalAmountSeries}</p>
			<p class="my-1">Wins: {thesePlayers.seriesWins}</p>
			<p class="my-1">Team id: {thesePlayers.teamActive.id}</p>
			<p class="my-1">Team name: {thesePlayers.teamActive.name}</p>
			<p class="my-1">Team short: {thesePlayers.teamActive.shortName}</p>
		</div>
		<div class="grid text-center">
			<a href="/players/{thesePlayers.id}" class="mt-4 button2">Player Page</a>
		</div>
	</div> -->
</div>
