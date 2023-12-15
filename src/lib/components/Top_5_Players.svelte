<script>
	import PlayerSeriesWins from '../../routes/players/Player_Series_Wins.svelte';
	import PlayerSeriesWins2 from '../../routes/players/Player_Series_Wins2.svelte';
	import PlayerTournamentWins from '../../routes/players/Player_Tournament_Wins.svelte';
	import PlayerTournamentWins2 from '../../routes/players/Player_Tournament_Wins2.svelte';
</script>

<div class="mt-20 mb-8">
	<h2 class="text-brand1 font-title font-bold text-4xl sm:text-6xl tracking-tighter">
		Top Play<span class="text-brand2">ers</span>
	</h2>
</div>
<div class="text-text2">
	<div
		class="p-6 cardbg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-4 place-items-center gap-12"
	>
		<div
			class="place-self-stretch shadow-card rounded-md pr-6 py-2 text-text2 text-center md:text-right text-6xl font-medium tracking-tighter"
		>
			Rank: 1
		</div>
		<div class="text-3xl sm:text-4xl md:text-6xl text-text2 font-medium tracking-tight">Hera</div>
		<div class="text-lg sm:text-4xl text-text2 font-medium tracking-tight">Wins: 17</div>
		<div>
			<div>Team</div>
			<div>Country</div>
		</div>
		<div
			class="place-self-stretch rounded-md pr-6 py-4 text-center md:text-right text-4xl text-text1 font-medium tracking-tighter"
		>
			Elo: 2445
		</div>
		<div class="w-full px-2">
			<PlayerTournamentWins />
		</div>
		<div class="w-full px-2">
			<PlayerSeriesWins />
		</div>
		<div>Active / Peak</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-4 place-items-center gap-8 pt-4">
		<div class="place-self-stretch p-4 text-right cardbg text-text2 font-medium tracking-tighter">
			<p class="text-6xl px-2">2</p>
			<p class="text-4xl font-title font-bold p-2">TheViper</p>
			<p class="text-2xl px-2">elo: 2398</p>
			<div class="pt-8 pb-2">
				<PlayerTournamentWins />
			</div>
			<div class="py-2">
				<PlayerSeriesWins />
			</div>
			<button class="button my-4 w-full">Full Details</button>
		</div>
		<div class="place-self-stretch p-4 text-right cardbg text-text2 font-medium">
			<p class="text-6xl px-2">3</p>
			<p class="text-4xl font-title font-bold p-2">Liereyy</p>
			<p class="text-2xl px-2">elo: 2365</p>

			<div class="pt-8 pb-2">
				<PlayerSeriesWins2 />
			</div>
			<button class="button my-4 w-full">Player Page</button>
		</div>
		<div class="place-self-stretch cardbg">
			<div class="bg-[url('./fleur4.png')] bg-cover bg-no-repeat">
				<div class="text-right p-4 text-text2 font-medium">
					<p class="text-6xl px-2">4</p>
					<p class="text-4xl font-title font-bold p-2 pb-4">Yo</p>
					<div class="flex justify-between items-center">
						<div>
							<img src="./chinaflag2.png" alt="flag" />
						</div>
						<div class="flex-1">
							<p class="text-2xl px-2">elo: 2323</p>
							<p class="text-2xl px-2">team: WWP</p>
						</div>
					</div>
					<div class="pt-8 pb-2 py-2">
						<PlayerSeriesWins2 />
					</div>
					<button class="button my-4 w-full">Player Page</button>
				</div>
			</div>
		</div>
		<div class="place-self-stretch p-4 text-right cardbg text-text2 font-medium tracking-tighter">
			<p class="text-lg">rank: <span class="text-6xl px-2">5</span></p>
			<p class="text-4xl font-title font-bold p-2">Tatoh</p>
			<p class="text-2xl px-2">elo: 2287</p>
			<div class="pt-8 pb-2">
				<PlayerTournamentWins />
			</div>
			<div class="py-2">
				<PlayerSeriesWins />
			</div>

			<button class="button my-4 w-full">Full Details</button>
		</div>
	</div>
</div>
