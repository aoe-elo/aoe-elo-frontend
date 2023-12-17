<script lang="ts">
	import type { IPlayer } from '$interfaces/entities/player';
	import PlayerSeriesWins2 from '../../routes/players/Player_Series_Wins2.svelte';

	export let allPlayers: IPlayer[];
	console.log(allPlayers);
</script>

{#each allPlayers as player, id}
	<div class="cardbg p-1 my-4 md:my-0">
		<div class="bg-[url('./fleurleft1.png')] bg-contain bg-no-repeat">
			<div class="flex justify-between items-center p-2">
				<div class="flex items-center justify-start gap-4">
					<p class="text-text2 font-title font-bold text-4xl">{player.tournamentEloRank}</p>
					<h3 class="text-text3 text-2xl font-semibold font-title tracking-wide">
						{player.name}
					</h3>
				</div>
				<div>
					<div class="flex items-center gap-4">
						<img src="./chinaflag2.png" alt="flag" />
						<p class="">Elo: {player.tournamentElo}</p>
						<p class="">team: WWP</p>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<div class="rounded-md shadow-card py-2 px-4">
						<div class="grid grid-cols-3 gap-2 text-2xl">
							<div class="flex gap-2">
								<div class="text-yellow-400">
									<svg width="30" height="30" class="fill-current" viewBox="0 0 256 256"
										><path
											d="M232 64h-24v-8a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16ZM48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm184-24a24 24 0 0 1-24 24h-.5a81.81 81.81 0 0 0 .5-8.9V80h24Z"
										/></svg
									>
								</div>
								<p>6</p>
							</div>

							<div class="flex gap-2">
								<div class="text-stone-300">
									<svg width="30" height="30" class="fill-current" viewBox="0 0 256 256"
										><path
											d="M232 64h-24v-8a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16ZM48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm184-24a24 24 0 0 1-24 24h-.5a81.81 81.81 0 0 0 .5-8.9V80h24Z"
										/></svg
									>
								</div>
								<p>14</p>
							</div>

							<div class="flex gap-2">
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
						<div class="flex gap-6 pt-1">
							<p>32 / {player.totalAmountTournaments}</p>
							<p>58%</p>
						</div>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div class="rounded-md shadow-card py-2 px-4">
							<p class="">Series Won</p>
							<hr class="border-b border-2 border-sky-900/[.55]" />
							<div class="flex gap-4 pt-2">
								<p>{player.seriesWins} / {player.totalAmountSeries}</p>
								<p>76%</p>
							</div>
						</div>

						<div class="rounded-md shadow-card p-2 px-4">
							<div>
								<p class="">Games Won</p>
								<hr class="border-b border-2 border-sky-900/[.55]" />
							</div>
							<div class="flex gap-4 pt-2">
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

<!-- <div class="cardbg p-1 my-4">
	<div
		class="bg-[url('./fleurleft1.png')] bg-contain bg-no-repeat flex flex-col sm:flex-row gap-4 px-4 py-2"
	>
		<div class="flex items-center justify-between">
			<p class="text-text2 font-title font-bold text-6xl">{player.tournamentEloRank}</p>
			<h3 class="text-text3 text-3xl font-semibold font-title tracking-wide">{player.name}</h3>
		</div>
		<div
			class="flex sm:flex-col md:flex-row sm:items-end justify-between items-center sm:justify-center sm:gap-6"
		>
			<img src="./chinaflag2.png" alt="flag" />
			<div>
				<p class="text-right">Elo: {player.tournamentElo}</p>
				<p class="text-right">team: WWP</p>
			</div>
		</div>

		<div class="flex flex-col md:flex-row md:gap-6">
			<div class="rounded-md shadow-card px-4 py-2 text-xl text-text1">
				<div class="flex flex-col gap-2">
					<div class="flex justify-between md:justify-center">
						<div class="flex gap-2">
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

					<div class="flex space-x-6 justify-end sm:gap-6 items-center text-text2 text-xl">
						<p>32 / {player.totalAmountTournaments}</p>
						<p>58%</p>
					</div>
				</div>
			</div>

			<div class="flex justify-end pb-2 pt-6 sm:justify-center gap-6">
				<div class="rounded-md shadow-card p-4 flex">
					<div>
						<p class="">Series Won</p>
						<hr class="border-b border-2 border-sky-900/[.55]" />
						<div class="flex flex-col items-end gap-2 pt-2">
							<p>{player.seriesWins} / {player.totalAmountSeries}</p>
							<p>76%</p>
						</div>
					</div>
				</div>

				<div class="rounded-md shadow-card p-4 flex">
					<div>
						<p class="">Games Won</p>
						<hr class="border-b border-2 border-sky-900/[.55]" />
						<div class="flex flex-col items-end gap-2 pt-2">
							<p>851 / 1200</p>
							<p>71%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->
