<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$components/Page_Hero.svelte';
	import Latest_Tournament from '$components/Last_Tournament.svelte';
	import Tournament_Grid from '$components/Tournament_Grid.svelte';

	export let data: PageData;
</script>

<div class="container">
	<Hero />
	<Latest_Tournament />
	<div class="mb-4 mt-24">
		<h2 class="text-brand1 font-title font-bold text-4xl sm:text-6xl tracking-tighter">
			Top Tourname<span class="text-brand2">nts</span>
		</h2>
	</div>
	<Tournament_Grid data={data.topTournaments} />
	<div class="mb-4 mt-24">
		<h2 class="text-brand1 font-title font-bold text-4xl sm:text-6xl tracking-tighter">
			All Tourname<span class="text-brand2">nts</span>
		</h2>
	</div>
	<Tournament_Grid data={data.allTournaments} />
</div>
