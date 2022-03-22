<a href="/" class="backArrow">
	<div class="arrowShape" />
</a>

<style>
	.backArrow {
		z-index: 999;
		height: 50px;
		width: 50px;
		position: fixed;
		top: 10px;
		left: 10px;
		transition: all 0.3s;
	}

	.arrowShape {
		position: fixed;
		width: 20px;
		height: 20px;
		border-left: 2px solid var(--fgt);
		border-bottom: 2px solid var(--fgt);
		top: 25px;
		left: 30px;
		box-sizing: border-box;
		transform: rotateZ(45deg);
		transition: all 0.3;
	}

	.backArrow:hover {
		background: var(--fg);
	}

	.backArrow:hover .arrowShape {
		border-left: 2px solid var(--bg);
		border-bottom: 2px solid var(--bg);
	}
</style>
