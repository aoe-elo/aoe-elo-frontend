<script>
	import '../app.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import { theme } from '$lib/theme.ts';
</script>

<div
	class="min-h-screen grid grid-rows-layout {$theme === 'dark'
		? 'bgoverlay-dark'
		: 'bgoverlay-light'}"
>
	<Header />
	<slot />
	<Footer />
</div>
