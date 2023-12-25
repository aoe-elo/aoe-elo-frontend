<script>
	import '../../app.css';
	import Header from '$components/navigation/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import { theme } from '$lib/theme';
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
