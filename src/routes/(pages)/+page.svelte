<script lang="ts">
	import Latest_Tournament from '$components/Last_Tournament.svelte';
	import Top_Players from '$components/Top_5_Players.svelte';
	import PlayerComparison from '$components/Player_Comparison.svelte';
	import { page } from '$app/stores';

	export let data;

	console.log(data);
</script>

<div class="container">
	<div class="my-10 text-center lg:relative">
		<div
			class="lg:relative font-title font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-brand1 tracking-tight z-40"
		>
			Tournament<span class="text-brand2">Elo</span>
		</div>
		<div class="mx-auto max-w-lg lg:absolute md:right-56 p-6 mt-4 md:-mt-6 mx-l cardbg">
			<h1 class="text-brand1 text-center font-medium">
				AOE 2 competitive player ELO when it matters most
			</h1>
		</div>
	</div>

	{#if $page.data.user}
		Welcome {$page.data.user}
	{/if}

	<div class="max-w-xl mx-auto p-6 mt-24 cardbg md:max-w-4xl">
		<h2 class="text-text3">Search tournaments, players, or teams</h2>
		<div class="" />
	</div>

	<div class="my-10">
		<PlayerComparison />
		<Top_Players />
		<Latest_Tournament />
	</div>
</div>
