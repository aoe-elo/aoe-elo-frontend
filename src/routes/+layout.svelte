<script>
	import '../app.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
</script>

<div class="min-h-screen grid grid-rows-layout bgoverlay">
	<Header />
	<slot />
	<Footer />
</div>
