<script lang="ts">
	import type { TournamentDetail } from '$lib/types';

	export let detail: TournamentDetail;

	$: details = [['Year', detail.start]];
</script>

<h1 class="text-4xl">
	<p class="italic font-bold">{detail.name}</p>
</h1>
<dl>
	{#each details as [key, value]}
		<div class="flex gap-2 text-xl">
			<dt>{key}:</dt>
			<dd>{value}</dd>
		</div>
	{/each}
</dl>
