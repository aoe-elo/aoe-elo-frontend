<script lang="ts">
	import Hero from '$lib/components/Page_Hero.svelte';
	import PlayerGrid from '$components/Player_Grid.svelte';
	import type { IPlayer } from '$interfaces/entities/player';

	export let data: {
		topPlayers: IPlayer[];
	};
</script>

<div class="container">
	<Hero />
	<div class="mb-4 mt-24">
		<h2 class="text-brand1 font-title font-bold text-4xl sm:text-6xl tracking-tighter">
			Top Play<span class="text-brand2">ers</span>
		</h2>
	</div>
	<PlayerGrid thesePlayers={data.topPlayers} />
</div>
