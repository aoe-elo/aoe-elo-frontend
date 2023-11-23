<script lang="ts">
	export let theseTournaments: any;

	function getTourneyDates(dates: string, year: boolean) {
		let date = new Date(dates);

		if (!year) {
			let options = { month: 'short', day: '2-digit' } as const;
			return date.toLocaleDateString('en-US', options);
		}
		if (year) {
			let options = { month: 'short', day: '2-digit', year: 'numeric' } as const;
			return date.toLocaleDateString('en-US', options);
		}
	}

	const addCommas = (prizemoney: number) => prizemoney.toLocaleString('en-US');
</script>

<div class="my-10 grid grid-cols-layout gap-7">
	{#each theseTournaments as tourney, id}
		<div class="p-8 cardbg grid grid-rows-layout">
			<img
				class="mx-auto h-40 max-h-full mb-4"
				src={tourney.imageUrl}
				height="150"
				width="150"
				alt="Tournament Logo"
			/>
			<div>
				<h3 class="text-text3 font-semibold my-4">{tourney.name}</h3>
				<p class="my-1">Dates:</p>
				<p class="text-text2">
					{getTourneyDates(tourney.start, false)}
					- {getTourneyDates(tourney.end, true)}
				</p>
				<p class="text-text2 mt-4 mb-8">
					Prize pool: <span class="font-semibold tracking-widest">
						{#if tourney.prizemoney !== null}
							${addCommas(tourney.prizemoney)}
						{:else}
							Not Available
						{/if}
					</span>
				</p>
			</div>
			<div class="grid text-center">
				<a href="/tournaments/{id}" class="mt-4 button2">Tournament Page</a>
			</div>
		</div>
	{/each}
</div>
