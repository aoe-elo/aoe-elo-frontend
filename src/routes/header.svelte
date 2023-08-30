<script lang="ts">
	import Toggle from '$lib/components/toggle.svelte';
	import Search from '$lib/components/search.svelte';
	import Discord from '$lib/components/discord.svelte';
	import { theme } from '$lib/theme.ts';

	let burger = 'list.svg';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		burger = 'x.svg';
	}
</script>

<header class=" text-text3 font-bold tracking-wider">
	<nav class="container flex justify-between items-center p-4">
		<a href="/" class="flex justify-between items-center font-title text-3xl">
			<img
				src={$theme === 'dark' ? './logodark.svg' : './logolight.svg'}
				class="pt-2 mr-4"
				alt="logo"
				srcset=""
			/>
			<div class="text-brand1 hover:text-brand2">
				Tournament<span class="text-brand2">Elo</span>
			</div>
		</a>
		<div>
			<ul class="hidden lg:flex items-center space-x-6">
				<li>
					<a href="/tournaments" class="hover:text-text2 cardoutline active:text-blue1"
						>Tournaments</a
					>
				</li>
				<li><a href="/players" class="hover:text-text2 cardoutline">Players</a></li>
				<li><a href="/teams" class="hover:text-text2 cardoutline">Teams</a></li>
				<li><a href="/info" class="hover:text-text2 cardoutline">Info</a></li>
			</ul>
		</div>
		<div>
			<ul class="hidden lg:flex items-center space-x-4">
				<li>
					<Search />
				</li>
				<li>
					<Toggle />
				</li>
				<li>
					<Discord />
				</li>
				<li>
					<button
						class="text-text3 hover:text-white hover:bg-text-3 ease-in duration-200 border-2 border-text-3 px-5 py-2 rounded-lg capitalize flex justify-between items-center space-x-2"
						><img src="./mail.svg" alt="envelope" class="bg-blue2 border-x-4 border-y-2 rounded" />
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
				: 'hidden'} lg:hidden text-3xl h-[90vh] absolute inset-x-0 top-16 bg-gradient-to-br from-bggrad-dark from-20% via-bggrad via-60% to-bggrad-dark to-80%"
		>
			<ul class="grid h-[95%] place-items-center">
				<li>
					<a href="/tournaments" class="hover:text-text2 ease-in duration-150">Tournaments</a>
				</li>
				<li>
					<a href="/players" class="hover:text-text2 ease-in duration-150">Players</a>
				</li>
				<li><a href="/teams" class="hover:text-text2 ease-in duration-150">Teams</a></li>
				<li><a href="/info" class="hover:text-text2 ease-in duration-150">Info</a></li>
				<li class="flex items-center space-x-12">
					<a href="/search"><img src="./search.svg" class="h-7" alt="search" /></a>
					<a href="/"><img src="./home.svg" class="h-7" alt="home" /></a>
					<a href="/discord"><img src="./discord.svg" class="h-7" alt="discord" /></a>
				</li>
				<li>
					<button
						class="text-text3 hover:text-text2 ease-in duration-200 border-2 border-text-3 hover:border-text px-5 py-2 rounded-lg capitalize"
						>Contact</button
					>
				</li>
			</ul>
		</div>
	</nav>
</header>
