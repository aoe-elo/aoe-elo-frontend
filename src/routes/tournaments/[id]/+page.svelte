<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import Tourneyinfo from './Tourneyinfo.svelte';
	import { invalidate } from '$app/navigation';
	export let data;

	let submission: FormData | undefined;

	let controller: AbortController;
</script>

<div class="mx-auto max-w-4xl space-y-4">
	<div class="grid grid-cols-1 gap-4 xs:grid-cols-3">
		<div class="col-span-2 space-y-4">
			<Tourneyinfo detail={data.detail} />
		</div>
	</div>
</div>
