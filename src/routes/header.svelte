<script lang="ts">
	let burger = 'list.svg';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		burger = 'x.svg';
	}
</script>

<header class=" text-text-dark font-bold tracking-wider">
	<nav class="container flex justify-between items-center p-4">
		<a href="/" class="flex justify-between items-center font-title text-3xl">
			<img src="./logo1.svg" class="pt-2 mr-4" alt="logo" srcset="" />
			<div class="text-brand1 hover:text-brand2">
				Tournament<span class="text-brand2">Elo</span>
			</div>
		</a>
		<div>
			<ul class="hidden lg:flex items-center space-x-6">
				<li>
					<a href="/tournaments" class="hover:text-text cardoutline active:text-blue-500"
						>Tournaments</a
					>
				</li>
				<li><a href="/players" class="hover:text-text cardoutline">Players</a></li>
				<li><a href="/teams" class="hover:text-text cardoutline">Teams</a></li>
				<li><a href="/info" class="hover:text-text cardoutline">Info</a></li>
			</ul>
		</div>
		<div>
			<ul class="hidden lg:flex items-center space-x-4">
				<li>
					<a href="/search"
						><img
							src="./search.svg"
							class="hover:scale-125 ease-in-out duration-150"
							alt="search"
						/></a
					>
				</li>
				<li>
					<a href="/"
						><img src="./home.svg" class="hover:scale-125 ease-in-out duration-150" alt="home" /></a
					>
				</li>
				<li>
					<a href="/discord"
						><img
							src="./discord.svg"
							class="hover:scale-125 ease-in-out duration-150"
							alt="discord"
						/></a
					>
				</li>
				<li>
					<button
						class="text-text-dark hover:text-white hover:bg-text-dark ease-in duration-200 border-2 border-text-dark px-5 py-2 rounded-lg capitalize flex justify-between items-center space-x-2"
						><img
							src="./mail.svg"
							alt="envelope"
							class="bg-blue-100 border-x-4 border-y-2 rounded"
						/>
						<p>Contact</p></button
					>
				</li>
			</ul>
		</div>

		<button class="lg:hidden cursor-pointer z-10" on:click={toggleMenu} aria-label="menu">
			<img src="./{burger}" alt="menu" />
		</button>

		<div
			class="{isMenuOpen === true
				? ''
				: 'hidden'} lg:hidden text-3xl h-[90vh] absolute inset-x-0 top-16 bg-gradient-to-br from-gradientbg-dark from-20% via-gradientbg via-60% to-gradientbg-dark to-80%"
		>
			<ul class="grid h-[95%] place-items-center">
				<li>
					<a href="/tournaments" class="hover:text-text ease-in duration-150">Tournaments</a>
				</li>
				<li>
					<a href="/players" class="hover:text-text ease-in duration-150">Players</a>
				</li>
				<li><a href="/teams" class="hover:text-text ease-in duration-150">Teams</a></li>
				<li><a href="/info" class="hover:text-text ease-in duration-150">Info</a></li>
				<li class="flex items-center space-x-12">
					<a href="/search"><img src="./search.svg" class="h-7" alt="search" /></a>
					<a href="/"><img src="./home.svg" class="h-7" alt="home" /></a>
					<a href="/discord"><img src="./discord.svg" class="h-7" alt="discord" /></a>
				</li>
				<li>
					<button
						class="text-text-dark hover:text-text ease-in duration-200 border-2 border-text-dark hover:border-text px-5 py-2 rounded-lg capitalize"
						>Contact</button
					>
				</li>
			</ul>
		</div>
	</nav>
</header>
