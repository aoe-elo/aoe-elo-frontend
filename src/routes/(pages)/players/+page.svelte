<script lang="ts">
	import Hero from '$lib/components/Page_Hero.svelte';
	import PlayerGrid from '$components/Player_Grid.svelte';
	import PlayerList from '$components/Player_List.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<div class="container">
	<Hero />
	<div class="mb-4 mt-24">
		<h2 class="text-brand1 font-title font-bold text-4xl sm:text-6xl tracking-tighter">
			Top Play<span class="text-brand2">ers</span>
		</h2>
	</div>
	<PlayerGrid thesePlayers={data.topPlayers} />
	<div class="mb-6 mt-24">
		<h2 class="text-brand1 font-title font-bold text-4xl sm:text-6xl tracking-tighter">
			All Play<span class="text-brand2">ers</span>
		</h2>
	</div>
	<PlayerList allPlayers={data.listPlayers} />
</div>
