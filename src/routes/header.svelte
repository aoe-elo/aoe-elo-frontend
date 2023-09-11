<script lang="ts">
	import SecondaryNav from '$lib/components/Secondary_Nav.svelte';
	import { theme } from '$lib/theme.ts';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class=" text-text3 font-bold tracking-wider">
	<nav class="container flex justify-between items-center p-4">
		<a
			href="/"
			class="flex justify-between items-center font-title text-xl md:text-2xl lg:text-3xl"
		>
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
			<ul class="hidden md:flex items-center space-x-6">
				<li>
					<a href="/tournaments" class="hover:text-text2 cardoutline active:text-blue1"
						>Tournaments</a
					>
				</li>
				<li>
					<a href="/players" class="hover:text-text2 cardoutline" data-sveltekit-preload-data
						>Players</a
					>
				</li>
				<li>
					<a href="/teams" class="hover:text-text2 cardoutline" data-sveltekit-preload-data>Teams</a
					>
				</li>
				<li>
					<a href="/about" class="hover:text-text2 cardoutline" data-sveltekit-preload-data>About</a
					>
				</li>
			</ul>
		</div>
		<div class="hidden md:flex items-center space-x-4 border-text3 py-2 cursor-pointer">
			<SecondaryNav />
		</div>

		<button
			class="md:hidden cursor-pointer z-10 text-brand1"
			on:click={toggleMenu}
			aria-label="menu"
		>
			{#if isMenuOpen}
				<svg width="40" height="40" class="fill-current" viewBox="0 0 256 256"
					><path
						d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
					/></svg
				>
			{:else}
				<svg width="40" height="40" class="fill-current" viewBox="0 0 256 256"
					><path
						d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z"
					/></svg
				>
			{/if}
		</button>

		<div
			class="{isMenuOpen === true
				? ''
				: 'hidden'} lg:hidden text-3xl h-[90vh] absolute inset-x-0 top-16 bg-gradient-to-br from-bggrad-dark from-20% via-bggrad via-60% to-bggrad-dark to-80%"
		>
			<ul class="grid h-[90%] place-items-center">
				<li>
					<a
						href="/tournaments"
						class="hover:text-text2 ease-in duration-150"
						data-sveltekit-preload-data>Tournaments</a
					>
				</li>
				<li>
					<a
						href="/players"
						class="hover:text-text2 ease-in duration-150"
						data-sveltekit-preload-data>Players</a
					>
				</li>
				<li>
					<a href="/teams" class="hover:text-text2 ease-in duration-150" data-sveltekit-preload-data
						>Teams</a
					>
				</li>
				<li>
					<a href="/about" class="hover:text-text2 ease-in duration-150" data-sveltekit-preload-data
						>About</a
					>
				</li>
				<SecondaryNav />
			</ul>
		</div>
	</nav>
</header>
