<script lang="ts">
	import tournaments from '$lib/data/tournaments.json';

	let now = 'Not Set';

	async function getDates(tdate) {
		if (tdate !== null) {
			now = tdate.split('T')[0];
			now = now.split('-').reverse().join('-');
		}
		return now;
		// console.log(tdate);
	}
</script>

<div class="container">
	<div class="mt-20 mb-8">
		<h2 class="text-brand1 font-title font-bold text-4 xl sm:text-6xl tracking-tighter">
			Latest Tournam<span class="text-brand2">ent</span>
		</h2>
	</div>
	<div
		class="p-6 bg-gradient-to-br from-gradientbg-dark from-20% via-gradientbg via-60% to-gradientbg-dark to-80% rounded-md shadow-card"
	>
		<div class="grid grid-cols-3 text-center place-items-center gap-4">
			<img src="./tcilogo.png" alt="brand" class="mx-auto" />
			<h3 class="text-text-dark font font-semibold tracking-tight text-5xl col-span-2">
				The Champions Invitational
			</h3>

			<div class="text-text font-body grid grid-cols-1 gap-4">
				<div class="grid grid-cols-2 justify-normal gap-2">
					<div class="flex justify-startstart col-span-2">
						<img src="./calendar.svg" alt="" />
						<p class="">01 - 26 August, 2023</p>
					</div>
					<div class="flex justify-startstart">
						<img src="./sword.svg" alt="" />
						<p class="font-semibold">Players:</p>
					</div>
					<p class="">5</p>
					<div class="flex justify-startstart">
						<img src="./stack-single.svg" alt="" />
						<p class="font-semibold">Games:</p>
					</div>
					<p class="">89</p>
					<div class="flex justify-startstart">
						<img src="./stack-simple.svg" alt="" />
						<p class="font-semibold">Series:</p>
					</div>
					<p class="">9</p>
				</div>
			</div>

			<!-- <div class="text-text font-body grid grid-cols-1 gap-4">
				<div class="flex justify-start space-x-4">
					<img src="./calendar.svg" alt="" />
					<p><span class="font-semibold">01 - 26 August, 2023</span></p>
				</div>
				<div class="flex justify-start space-x-4">
					<img src="./sword.svg" alt="" />
					<p>
						<span class="font-semibold">Players:</span><span class="text-xl"> 5</span>
					</p>
				</div>
				<div class="flex justify-start space-x-4">
					<img src="./stack-single.svg" alt="" />
					<p><span class="font-semibold">Games:</span><span class="text-xl"> 89</span></p>
				</div>
				<div class="flex justify-start space-x-4">
					<img src="./stack-simple.svg" alt="" />
					<p><span class="font-semibold">Series:</span><span class="text-xl"> 9</span></p>
				</div>
			</div> -->

			<div class="text-text-dark">Col 2</div>
			<div class="text-text-dark">Col 3</div>
		</div>
	</div>

	<div class="mb-8 mt-24">
		<h2 class="text-brand1 font-title font-bold text-4 xl sm:text-6xl tracking-tighter">
			All Tourname<span class="text-brand2">nts</span>
		</h2>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-7">
		{#each tournaments as { id, name, start, end, prizemoney }, index (id)}
			<div
				class="p-6 bg-gradient-to-br from-gradientbg-dark from-20% via-gradientbg via-60% to-gradientbg-dark to-80% rounded-md shadow-card"
			>
				<img
					class="bg-brand2 text-white rounded-lg mx-auto"
					src="./tournament.svg"
					height="150"
					width="150"
					alt="tourney"
				/>
				<h3 class="text-text-dark font-semibold leading-snug mt-2">{name}</h3>
				<p class="text-text">{getDates(start)}</p>
				<p class="text-text">{prizemoney}</p>

				<button
					class="w-full mt-4 py-2 text-text-dark font-semibold bg-gradient-to-br from-gradientcard-left2 from-20% to-gradientcard-right2 rounded-md"
					>Main Page</button
				>
			</div>
		{/each}
	</div>
</div>
