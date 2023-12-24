<script lang="ts">
	import Hero from '$components/Page_Hero.svelte';
</script>

<div class="container">
	<Hero />
	<div
		class="grid mt-0 p-4 md:p-6 cardbg text-center text-4xl text-text3 font-medium tracking-tighter max-w-lg mx-auto"
	>
		<div class="my-8">
			<h2 class="text-6xl my-4 text-left">Login</h2>
			<p class="text-lg tracking-wide font-normal text-left">
				choose your preferred authorization:
			</p>
		</div>
		<a href="/" class="hover:text-text4 ease-in duration-150 my-8">Google</a>
		<a href="/" class="hover:text-text4 ease-in duration-150 my-8">Github</a>
		<a href="/" class="hover:text-text4 ease-in duration-150 my-8">Discord</a>
	</div>
</div>
