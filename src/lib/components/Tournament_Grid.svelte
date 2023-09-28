<script lang="ts">
	export let tourneys: thisTournament[];

	async function getTourneyStart(start) {
		let date = new Date(start);
		let getMonth = date.toLocaleString('default', { month: 'short' });
		let getDay = date.toLocaleString('default', { day: '2-digit' });
		let startDate = getMonth + ' ' + getDay;
		return startDate;
	}
	async function getTourneyEnd(end) {
		let date = new Date(end);
		let getMonth = date.toLocaleString('default', { month: 'short' });
		let getDay = date.toLocaleString('default', { day: '2-digit' });
		let getYear = date.toLocaleString('default', { year: 'numeric' });
		let endDate = getMonth + ' ' + getDay + ', ' + getYear;
		return endDate;
	}

	let addedCommas;
	const addCommas = function (index) {
		addedCommas = tourneys[index];
	};
</script>

<div class="my-10 grid grid-cols-layout gap-7">
	{#each tourneys as tourney, id}
		<div class="p-8 cardbg">
			<img
				class="mx-auto h-40 max-h-full border-2 rounded-md p-4"
				src={tourney.imageUrl}
				height="150"
				width="150"
				alt="Tournament Logo"
			/>
			<h3 class="text-text3 font-semibold my-4">{tourney.name}</h3>
			<p class="my-1">Dates:</p>
			<p class="text-text2">
				{tourney.start}
				- {tourney.end}
			</p>
			<p class="text-text2 mt-4 mb-8">
				Prize pool: <span class="font-semibold">${tourney.prizemoney}</span>
			</p>
			<div class="grid text-center">
				<a href="/tournaments/{tourney.id}" class="mt-4 button2">Tournament Page</a>
			</div>
		</div>
	{/each}
</div>
