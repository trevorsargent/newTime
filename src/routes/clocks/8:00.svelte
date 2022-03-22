<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { count, map } from 'rxjs/operators';

	const t = time.pipe(
		map((now) => {
			const str = now.toFormat('HHmmss');
			return str.split('').reduce((count, n) => {
				const num = Number.parseInt(n);
				count[num]++;
				return count;
			}, new Array(10).fill(0));
		})
	);
</script>

{#if $t}
	<div id="digitClock">
		{#each $t as digit}
			<div class="digitHolder">
				<div class="digit">{digit}</div>
			</div>
		{/each}
	</div>
{/if}

<Info>
	<h1>Accountability</h1>
	<p>
		Back to a mangling of the digital clock readout, this tallies the represenation of each numberal
		in the 24 hour representation of the time. From left to right, this clock tells hour how many
		0s, how many 1s, how many 2s... and so on up through 9s are part of the current time
	</p>
</Info>

<style>
	#digitClock {
		font-weight: 100;
		font-size: 150px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.digit {
		/* width: 33px; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.digitHolder {
		width: 80px;
		display: flex;
		flex: row;
		justify-content: center;
	}
</style>
