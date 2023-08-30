<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme.ts';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	<img src={$theme === 'dark' ? './sun.svg' : './moon.svg'} alt="theme" />
</button>
