<script lang="ts">
	let clocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	import { page } from '$app/stores';
	import Tile from '$lib/components/Tile.svelte';
	const isDark = $page.url.searchParams.has('dark');
</script>

<div class="grid">
	{#each clocks as clock}
		<Tile num={clock} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		height: 100vh;
		width: 100vw;
		padding: 3rem;
		gap: 1rem;
		box-sizing: border-box;
	}
</style>
