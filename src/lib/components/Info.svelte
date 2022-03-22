<script lang="ts">
	import { fade } from 'svelte/transition';
	import { kioskMode } from '$lib/stores';

	let show = false;

	const handleKeydown = (key: KeyboardEvent) => {
		if (key.keyCode === 27) {
			show = false;
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

{#if !$kioskMode}
	<div id="info">
		<button id="moreInfo" on:click={() => (show = !show)}> i </button>
		{#if show}
			<div id="text" transition:fade>
				<slot />
			</div>

			<div id="fill" transition:fade />
		{/if}
	</div>
{/if}

<style>
	#info {
		position: fixed;
		z-index: 500;
	}

	#info button {
		transition: all 0.3s;
		color: var(--fgt);
		border: none;
		background-color: transparent;
		width: 35px;
		height: 35px;
		right: 15px;
		bottom: 15px;
		margin: 0;
		padding: 0;
		position: fixed;
		font-family: monospace, sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		font-weight: 600;
		cursor: pointer;
		z-index: 999;
	}

	#info button:hover {
		background-color: var(--fg);
		color: var(--bg);
	}

	#text {
		font-family: 'Lato', sans-serif;
		font-weight: 300;
		transition: all 0.3s;
		position: fixed;
		bottom: 50px;
		right: 15px;
		width: 20rem;
		font-size: 13px;
		padding: 20px;
		color: var(--fg);
		z-index: 900;
	}

	#fill {
		transition: all 0.3s;
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		right: 0;
		background: var(--bg);
		opacity: 0.9;
		z-index: 800;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(100px);
	}
</style>
