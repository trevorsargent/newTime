<script lang="ts">
	import { page } from '$app/stores';
	import Toggle from '$lib/components/Toggle.svelte';
	import { darkMode, kioskMode } from '$lib/stores';
	import { onMount } from 'svelte';
	const isDark = $page.url.searchParams.has('dark');
	const isKiosk = $page.url.searchParams.has('kiosk');

	const light = '#eeeeee';
	const dark = '#111111';
	const lightTint = '#eee2';
	const darkTint = '#1112';

	onMount(() => {
		const root = document.documentElement;

		if (isDark) {
			darkMode.set(true);
		}

		if (isKiosk) {
			kioskMode.set(true);
		}

		darkMode.subscribe((isDark) => {
			root.style.setProperty('--bg', isDark ? dark : light);
			root.style.setProperty('--fg', isDark ? light : dark);
			root.style.setProperty('--fgt', isDark ? lightTint : darkTint);
			root.style.setProperty('--bgt', isDark ? darkTint : lightTint);
		});
	});

	const handleKeydown = (key: KeyboardEvent) => {
		if (key.keyCode === 220) {
			darkMode.toggle();
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />
{#if !$kioskMode}
	<div class="mode">
		<Toggle />
	</div>
{/if}

<slot />

<style lang="scss">
	:global(body) {
		transition: all 0.25s;
		margin: 0;
		background-color: var(--bg);
		color: var(--fg);
		font-family: 'Oswald';

		:global(h1),
		:global(h2),
		:global(h3),
		:global(h4),
		:global(h5),
		:global(h6) {
			margin: 0;
		}
	}

	.mode {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
	}
</style>
