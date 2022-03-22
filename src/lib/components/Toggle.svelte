<script lang="ts">
	import { darkMode } from '$lib/stores';
</script>

<div class="slide" on:click={() => darkMode.toggle()}>
	<div class="toggle" class:on={$darkMode} />
</div>

<style lang="scss">
	.slide {
		$height: 1rem;
		$extra: 1.3rem;
		$border: 0.075rem var(--fgt) solid;

		height: $height;
		width: $height + $extra;
		border-radius: $height;
		border: $border;

		padding: 0.075rem;

		position: relative;
		cursor: pointer;
		align-items: center;

		z-index: 999;

		.toggle {
			position: absolute;
			height: $height;
			width: $height;
			border-radius: $height;
			border: $border;

			transition: all 0.25s;
			box-sizing: border-box;

			&.on {
				transform: translateX($extra);
			}
		}

		&:hover {
			.toggle {
				box-shadow: 0 0 0.25rem var(--fgt);
			}
		}
	}
</style>
