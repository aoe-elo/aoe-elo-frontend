<script lang="ts">
	import LatestTournament from '$lib/components/latest-tournament.svelte';
	import TopPlayers from '$lib/components/top-players.svelte';
</script>

<div
	class="max-w-xl mx-auto p-6 mt-24 rounded-md bg-gradient-to-br from-grad-left1 from-40% to-grad-right1 to-100% shadow-card overflow-hidden md:max-w-4xl"
>
	<h2 class="text-text3 text-2xl font-semibold">Search Database</h2>
	<div class="" />
</div>

<div class="my-10">
	<TopPlayers />
	<LatestTournament />
</div>
