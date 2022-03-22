<script lang="ts">
	import Back from '$lib/components/Back.svelte';
	import { kioskMode } from '$lib/stores';
	import { goto } from '$app/navigation';

	const handleKeydown = (key: KeyboardEvent) => {
		if (key.keyCode === 192) {
			goto('/');
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />
<div class="clock">
	<slot />
</div>

{#if !$kioskMode}
	<Back />
{/if}

<style>
	.clock {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		padding: 3rem;
		box-sizing: border-box;
		user-select: none;
	}
</style>
