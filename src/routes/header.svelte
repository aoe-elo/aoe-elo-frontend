<script lang="ts">
	// import SecondaryNav from '$lib/components/Secondary_Nav.svelte';
	import { theme, toggleTheme } from '$lib/theme';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}
</script>

<header class="text-text3 font-bold tracking-wider">
	<nav class="container flex justify-between items-center p-4">
		<a
			href="/"
			class="flex justify-between items-center font-title text-2xl md:text-lg lg:text-3xl"
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
					<a href="/players" class="hover:text-text2 cardoutline">Players</a>
				</li>
				<li>
					<a href="/teams" class="hover:text-text2 cardoutline">Teams</a>
				</li>
				<li>
					<a href="/about" class="hover:text-text2 cardoutline">About</a>
				</li>
			</ul>
		</div>
		<div class="hidden md:flex flex-wrap items-center gap-4">
			<!-- <div
				class="text-text2 hover:text-brand2 p-4 border-2 border-current rounded-md md:border-0 md:p-0"
			>
				<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
					><path
						d="m229.66 218.34-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72Z"
					/></svg
				>
			</div> -->
			<!-- <div
				class="text-text2 hover:text-brand2 p-4 border-2 border-current rounded-md md:border-0 md:p-0"
			>
				<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
					><path
						d="M104 140a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm74.45 64.9-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.93 15.93 0 0 1-9.06-18.51L38 58a16.07 16.07 0 0 1 13-11.86l36.06-5.93a16.22 16.22 0 0 1 18.26 11.88l3.26 12.84Q118.11 64 128 64t19.4.93l3.26-12.84a16.21 16.21 0 0 1 18.26-11.88L205 46.14A16.07 16.07 0 0 1 218 58l29.53 116.38a15.93 15.93 0 0 1-9.08 18.52ZM232 178.28 202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8.09 8.09 0 0 1-2.16-.3A172.25 172.25 0 0 0 128 80a172.25 172.25 0 0 0-45.84 6 8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56h-.12l-36.1 5.93a.17.17 0 0 0-.09 0L24 178.33 91 208a.23.23 0 0 0 .22 0L98 189.72a173.2 173.2 0 0 1-20.14-4.32 8 8 0 0 1 4.3-15.4 171.85 171.85 0 0 0 45.84 6 171.85 171.85 0 0 0 45.84-6 8 8 0 0 1 4.32 15.41 173.2 173.2 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z"
					/></svg
				>
			</div> -->
			<div class="text-text2 hover:text-brand2">
				<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
					><path
						d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8Zm-20.57 16L128 133.15 52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19V192Z"
					/></svg
				>
			</div>
			<button on:click={toggleTheme} aria-label="Toggle theme" class="text-text2 hover:text-brand2">
				{#if $theme === 'dark'}
					<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
						><path
							d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"
						/></svg
					>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						class="fill-current"
						viewBox="0 0 256 256"
						><path
							d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z"
						/></svg
					>
				{/if}
			</button>
			<div class="text-text2 hover:text-brand2">
				<a href="/login" on:click={toggleMenu}>
					<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
						><path
							d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8Z"
						/></svg
					></a
				>
			</div>
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
				: 'hidden'} md:hidden text-3xl h-[100%] absolute inset-0 navmenubg"
		>
			<ul class="grid place-content-center gap-16 py-24">
				<li>
					<a
						href="/"
						on:click={toggleMenu}
						class="flex justify-start items-center font-title text-3xl"
					>
						<img
							src={$theme === 'dark' ? './logodark.svg' : './logolight.svg'}
							class="pr-4"
							alt="logo"
							srcset=""
						/>
						<div class="text-brand1 hover:text-brand2">
							Tournament<span class="text-brand2">Elo</span>
						</div>
					</a>
				</li>
				<li>
					<a
						href="/tournaments"
						on:click={toggleMenu}
						class="hover:text-text2 ease-in duration-150 px-4 md:px-0">Tournaments</a
					>
				</li>
				<li>
					<a
						href="/players"
						on:click={toggleMenu}
						class="hover:text-text2 ease-in duration-150 px-4 md:px-0">Players</a
					>
				</li>
				<li>
					<a
						href="/teams"
						on:click={toggleMenu}
						class="hover:text-text2 ease-in duration-150 px-4 md:px-0">Teams</a
					>
				</li>
				<li>
					<a
						href="/about"
						on:click={toggleMenu}
						class="hover:text-text2 ease-in duration-150 px-4 md:px-0">About</a
					>
				</li>
				<div class="flex flex-wrap items-center gap-6 p-4">
					<!-- <div
						class="text-text2 hover:text-brand2 p-4 border-2 border-current rounded-md md:border-0 md:p-0"
					>
						<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
							><path
								d="m229.66 218.34-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72Z"
							/></svg
						>
					</div> -->
					<!-- <div
						class="text-text2 hover:text-brand2 p-4 border-2 border-current rounded-md md:border-0 md:p-0"
					>
						<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
							><path
								d="M104 140a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm74.45 64.9-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.93 15.93 0 0 1-9.06-18.51L38 58a16.07 16.07 0 0 1 13-11.86l36.06-5.93a16.22 16.22 0 0 1 18.26 11.88l3.26 12.84Q118.11 64 128 64t19.4.93l3.26-12.84a16.21 16.21 0 0 1 18.26-11.88L205 46.14A16.07 16.07 0 0 1 218 58l29.53 116.38a15.93 15.93 0 0 1-9.08 18.52ZM232 178.28 202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8.09 8.09 0 0 1-2.16-.3A172.25 172.25 0 0 0 128 80a172.25 172.25 0 0 0-45.84 6 8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56h-.12l-36.1 5.93a.17.17 0 0 0-.09 0L24 178.33 91 208a.23.23 0 0 0 .22 0L98 189.72a173.2 173.2 0 0 1-20.14-4.32 8 8 0 0 1 4.3-15.4 171.85 171.85 0 0 0 45.84 6 171.85 171.85 0 0 0 45.84-6 8 8 0 0 1 4.32 15.41 173.2 173.2 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z"
							/></svg
						>
					</div> -->
					<button class="text-text2 hover:text-brand2 p-4 border-2 border-current rounded-md"
						><div>
							<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
								><path
									d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8Zm-20.57 16L128 133.15 52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19V192Z"
								/></svg
							>
						</div>
					</button>
					<button
						on:click={toggleTheme}
						aria-label="Toggle theme"
						class="text-text2 hover:text-brand2 p-4 border-2 border-current rounded-md"
					>
						{#if $theme === 'dark'}
							<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
								><path
									d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"
								/></svg
							>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								class="fill-current"
								viewBox="0 0 256 256"
								><path
									d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z"
								/></svg
							>
						{/if}
					</button>
					<div class="text-text2 hover:text-brand2 p-4 border-2 border-current rounded-md">
						<a href="/login" on:click={toggleMenu}>
							<svg width="24" height="24" class="fill-current" viewBox="0 0 256 256"
								><path
									d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8Z"
								/></svg
							></a
						>
					</div>
				</div>
			</ul>
		</div>
	</nav>
</header>
