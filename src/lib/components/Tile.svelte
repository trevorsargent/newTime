<script lang="ts">
	export let num: number;
</script>

<a href={`clocks/${num}:00`}>
	<div class="tile">
		<span>
			{num}
		</span>
	</div>
</a>

<style lang="scss">
	a {
		display: block;
		text-decoration: none;
		height: 100%;
		width: 100%;
		color: var(--fg);
		&:visited {
			color: var(--fg);
		}
	}
	.tile {
		display: flex;
		justify-content: center;
		align-items: center;

		font-family: 'Oswald';
		font-size: 2rem;

		transition: all 0.25s;
		height: 100%;
		widows: 100%;

		&:hover {
			color: var(--bg);
			background-color: var(--fg);
		}
	}
</style>
